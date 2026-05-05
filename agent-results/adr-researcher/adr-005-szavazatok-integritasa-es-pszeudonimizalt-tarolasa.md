# Kutatási jegyzet: ADR-005 – Szavazatok integritása és pszeudonimizált tárolása

## Kérdés

Milyen adattárolási és auditálási megoldás biztosítsa a Community Choice rendszerben, hogy:

- egy felhasználó egy adott ötletre csak egyszer szavazhasson,
- a leadott szavazat utólag ne legyen módosítható vagy törölhető,
- a szavazat ne tartalmazzon nyers személyes azonosítót,
- a rendszer mégis ellenőrizni tudja a jogosultságot és a duplikált szavazatokat,
- az auditálás és az aszinkron eseményfeldolgozás ne váljon a szavazás elsődleges igazságforrásává.

Fontos korlát: ebben a futtatási környezetben nincs webes kereső/böngésző eszköz, ezért ez a jegyzet kizárólag a repóban elérhető dokumentációra és a meglévő architekturális kontextusra támaszkodik. Külső forrásokat nem hivatkozom, mert nem tudtam ellenőrizni őket.

## Kontextus a Community Choice projektben

A projekt jelenlegi iránya hibrid **Service-Based Architecture + Event-Driven Architecture**. A szavazás kritikus, erős integritást igénylő folyamat, ezért a meglévő dokumentáció alapján a szavazat érvényességének elsődleges forrása a PostgreSQL tranzakciós tároló kell legyen, nem a Kafka eseményfolyam.

A követelmények között egyszerre jelenik meg:

- helyi lakcímhez kötött, hitelesített szavazás Zamunda One integrációval,
- egy ötletre felhasználónként pontosan egy szavazat,
- adminisztrátor által sem módosítható/törölhető szavazat,
- anonimizált vagy legalább pszeudonimizált szavazatkapcsolás,
- auditnaplózás és eseményvezérelt integráció.

A fő szakmai feszültség: a teljes anonimitás nehezen egyeztethető össze az „egy felhasználó egy ötletre egyszer” szabállyal. Ha a rendszer semmilyen stabil szavazói azonosítót nem őriz, akkor nem tud megbízható duplikációellenőrzést végezni. Emiatt reálisabb kutatási irány a **pszeudonimizált, determinisztikus szavazói kulcs** használata, például kampányhoz kötött HMAC-alapú kulcs, amelyből a nyers felhasználói azonosító nem olvasható vissza.

## Vizsgált alternatívák

### A. PostgreSQL append-only szavazati tranzakciónapló pszeudonimizált szavazói kulccsal

Leírás:

- A `Voting Service` a Zamunda One alapján ellenőrzi a felhasználó jogosultságát.
- A szavazat PostgreSQL-ben, csak beszúrással bővíthető táblában kerül rögzítésre.
- A tábla nem tartalmaz nyers `user_id` mezőt, hanem például `voter_key = HMAC(user_id + campaign_id + secret)` vagy ehhez hasonló determinisztikus pszeudonim kulcs kerül bele.
- Egyedi constraint védi az „egy felhasználó egy ötletre egyszer” szabályt, például `(idea_id, voter_key)` vagy a pontos domainmodell szerint `(campaign_id, idea_id, voter_key)` kombináción.
- UPDATE és DELETE műveletek adatbázis-szinten tiltottak triggerrel, jogosultságkezeléssel vagy dedikált adatbázis role-okkal.
- A sikeres tranzakció után vagy outbox mintával domain esemény kerül Kafka felé audit és értesítés céljára.

Érvek:

- Jól illeszkedik a meglévő SBA irányhoz és PostgreSQL használathoz.
- Erős tranzakciós konzisztenciát ad a duplikált szavazat kizárásához.
- Egyszerűen indokolható egyetemi beadandóban: relációs constraint + append-only tárolás + pszeudonimizáció.
- Takarékosabb, mint blokklánc vagy teljes Event Sourcing infrastruktúra használata elsődleges adatforrásként.
- Világosan szétválasztja az elsődleges szavazati adatot és az audit/integrációs eseményeket.

Ellenérvek:

- A pszeudonimizált kulcs nem azonos a teljes anonimitással; megfelelő titokkezelés és rotációs stratégia kell.
- Ha a HMAC secret kompromittálódik, a pszeudonimitás gyengülhet, különösen ha a támadó hozzáfér a lehetséges `user_id` tartományhoz.
- A GDPR/adatvédelmi törlési igények és az immutable szavazatmegőrzés viszonya pontos jogi/adatvédelmi tisztázást igényel.
- Az UPDATE/DELETE tiltás nem véd minden adminisztratív hozzáférési forma ellen; mentések, szuperuser hozzáférések és migrációs folyamatok kezelése külön szabályozandó.

### B. PostgreSQL normál szavazati tábla alkalmazásszintű védelemmel

Leírás:

- A szavazatok relációs táblában tárolódnak.
- A duplikációellenőrzést és a módosítás/törlés tiltását főként az alkalmazáskód végzi.
- Esetleg unique constraint is van, de nincs szigorú append-only adatbázis-szintű védelem.

Érvek:

- Egyszerűbb fejlesztés és üzemeltetés.
- Kevesebb adatbázis-specifikus mechanizmust igényel.
- Gyorsan elkészíthető prototípushoz megfelelő lehet.

Ellenérvek:

- Nem teljesíti erősen azt a követelményt, hogy még adminisztrátori szinten se lehessen szavazatot módosítani vagy törölni.
- Alkalmazáshiba, hibás admin API vagy migráció megkerülheti a védelmet.
- Gyengébb architekturális döntés lenne az Integritás karakterisztika szempontjából.
- Beadandóban kevésbé védhető, mert a követelmény technológiai garanciát vár, nem csak üzleti logikát.

### C. Kafka/Event Sourcing mint elsődleges szavazati igazságforrás

Leírás:

- A szavazat leadása eseményként kerül egy Kafka topicba.
- Az aktuális állapotot fogyasztók vagy materializált nézetek építik fel.
- A szavazatok visszajátszhatók az eseménynaplóból.

Érvek:

- Erős eseménytörténeti és replay képesség.
- Illeszkedik az ADR-003/ADR-004 eseményvezérelt irányához.
- Audit és analitika szempontból rugalmas.

Ellenérvek:

- A szavazat leadásánál a duplikáció kizárása erős konzisztenciát igényel; ezt tisztán Kafka-alapon nehezebb egyszerűen és megbízhatóan biztosítani.
- Eventual consistency miatt rosszul illeszkedhet az azonnali felhasználói visszajelzéshez és az „egy ötletre egyszer” szabályhoz.
- Üzemeltetési és fejlesztési komplexitása magasabb.
- A senior architect jegyzet szerint kerülni kell azt az állítást, hogy a teljes rendszer Event Sourcing alapú, ha valójában csak audit/event log jellegű eseményhasználat történik.

### D. Blokklánc-jellegű vagy permissioned ledger alapú tárolás

Leírás:

- A szavazatok kriptografikusan láncolt rekordokként vagy permissioned ledgerben tárolódnak.
- A módosíthatatlanságot a láncolt hash-ek és/vagy konszenzusmechanizmus adja.

Érvek:

- Erős narratíva a megváltoztathatatlanságra.
- Hash chain jellegű auditnyomként bizonyos elemei hasznosak lehetnek.
- Független ellenőrizhetőség irányába bővíthető.

Ellenérvek:

- Valószínűleg túl komplex és túl költséges a projekt takarékossági ASR-jéhez képest.
- Nehezen indokolható, ha nincs több, egymástól független, bizalmatlan üzemeltető fél.
- A GDPR és az immutable ledger konfliktusa erősebb lehet.
- A relációs egyediségi és jogosultsági szabályokat ettől még külön meg kell oldani.

### E. Külön személyazonosság–szavazat megfeleltetési tábla anonimizált szavazati rekordokkal

Leírás:

- A szavazati rekord önmagában anonimizált.
- Egy külön, erősen védett táblában vagy szolgáltatásban tárolódik, hogy mely felhasználó mely ötletre szavazott, a duplikációellenőrzéshez.

Érvek:

- A publikus vagy elemzési célú szavazati rekordok jobban leválaszthatók a személyes azonosítókról.
- Rugalmasabb lehet adatvédelmi szempontból, ha a megfeleltetési réteg külön kezelhető.
- Elkülöníthetőek a hozzáférési jogosultságok.

Ellenérvek:

- Ha a megfeleltetési tábla létezik, a szavazat valójában visszaköthető, tehát nem teljesen anonim.
- Több komponens és több támadási felület.
- Az immutable követelményt két helyen kell érvényesíteni.
- Komplexebb, mint a determinisztikus pszeudonim kulcsos megoldás.

## Összehasonlító táblázat

| Szempont | A. PostgreSQL append-only + pszeudonim kulcs | B. Alkalmazásszintű védelem | C. Kafka/Event Sourcing mint SoT | D. Blokklánc/ledger | E. Külön megfeleltetési tábla |
| --- | --- | --- | --- | --- | --- |
| Illeszkedés az ASR-ekhez | Erős integritás, jó takarékosság, jó SBA-illeszkedés | Gyenge integritási garancia | Jó replay, de gyengébb szinkron integritás | Erős immutabilitási narratíva, gyenge takarékosság | Közepes-jó adatvédelmi szeparáció, nagyobb komplexitás |
| Komplexitás | Közepes | Alacsony | Magas | Nagyon magas | Közepes-magas |
| Üzemeltetési költség | Alacsony-közepes, meglévő PostgreSQL-re épít | Alacsony | Magasabb Kafka-függés miatt | Magas | Közepes |
| Energia- és erőforrás-hatékonyság | Jó | Jó | Közepes/gyengébb | Gyenge | Közepes |
| Integritási garanciák | Erősek: tranzakció, unique constraint, DB-szintű tiltás | Korlátozottak | Erős naplózás, de duplikációhoz bonyolultabb | Erős immutabilitás, de üzleti constraint külön kell | Közepes-erős, ha mindkét tábla védett |
| Robusztusság instabil hálózaton | Jó, mert egy szinkron tranzakció rövid és idempotenssé tehető | Közepes | Közepes, több aszinkron komponenssel | Gyenge/közepes | Közepes |
| Skálázhatóság csúcsterhelésnél | Jó, Voting Service skálázható, DB constraint véd | Jó, de versenyhelyzetekre figyelni kell | Jó throughput, de konzisztencia bonyolult | Kérdéses | Közepes |
| Egyetemi beadandóban indokolhatóság | Erős és világos | Gyenge a kritikus követelményhez | Csak auditként erős, SoT-ként túlzás lehet | Könnyen túltervezettnek tűnhet | Indokolható, de magyarázata hosszabb |

## Források

- `agent-results/senior-software-architect/tervezesi-javaslat-jelenlegi-dokumentacio-es-architektura.md` – az ADR-005 javasolt témája, a pszeudonimizált szavazói kulcs, PostgreSQL append-only szavazati tranzakciónapló, unique constraint, UPDATE/DELETE tiltás és Kafka audit esemény iránya.
- `docs/src/content/docs/srs.md` – a hitelesített szavazás, lakcím-alapú jogosultság, egy ötletre egyszeri szavazás, immutable tárolás és anonimizált kapcsolás követelményei.
- `docs/src/content/docs/esettanulmany.md` – az eredeti esettanulmány szavazási üzleti szabályai: csak helyi lakos szavazhat, egy ötletre egyszer, adminisztrátori módosítás/törlés nem lehet megoldható.
- `docs/src/content/docs/architektura/karakterisztikak.md` – az Integritás, Hatékonyság, Robusztusság és Elaszticitás architekturális karakterisztikái.
- `docs/src/content/docs/architektura/szignifikans-kovetelmenyek.md` – a takarékosság, alacsony sávszélesség és robusztusság kontextusa.
- `docs/src/content/docs/architektura/stilusvalasztas.md` – a hibrid SBA + EDA architektúra indoklása, és annak rögzítése, hogy a szavazás szinkron, erős integritású folyamat.
- `docs/src/content/docs/adrs/adr-001.md` – a hibrid architektúra meglévő döntése.
- `docs/src/content/docs/adrs/adr-002.md` – Service-Based Architecture, közös PostgreSQL adatbázis és tranzakciós integritás meglévő döntése.
- `docs/src/content/docs/adrs/adr-003.md` – Event-Driven Architecture szerepe audit, értesítés és médiafeldolgozás céljára.
- `docs/src/content/docs/adrs/adr-004.md` – Kafka mint message broker, replay és több consumer group indoklása; egyúttal tisztázandó, hogy ne legyen túlzó Event Sourcing állítás a szavazat elsődleges tárolására.
- `docs/src/community-choice.c4` – a C4 modellben szereplő Voting Service, vote repository, Audit Service, PostgreSQL és Kafka kapcsolatok.

## Bizonytalanságok

- Nincs webes kutatás: külső PostgreSQL, GDPR, HMAC, audit logging vagy election security források nincsenek ellenőrizve ebben a jegyzetben.
- A Zamunda One pontos azonosítómodellje nem ismert: nem tudható, milyen stabil, egyedi felhasználói azonosító áll rendelkezésre a pszeudonim kulcs képzéséhez.
- A `campaign_id`, `municipality_id`, `idea_id` és `user_id` pontos domainmodellje még tisztázandó; ettől függ az egyedi constraint pontos kulcsa.
- Nem tisztázott, hogy a szavazás titkossága jogilag teljes anonimitást vagy technikailag pszeudonimizált tárolást vár-e el.
- Nem tisztázott a HMAC secret kezelése: tárolási hely, rotáció, incidenskezelés, régi szavazatok ellenőrizhetősége rotáció után.
- Nem tisztázott az adatmegőrzési szabály: meddig kell a szavazati rekordokat és audit eseményeket megőrizni, illetve hogyan viszonyul ehhez az esetleges törlési/hozzáférési kérelem.
- Az immutable adatbázis-védelem erőssége függ az üzemeltetési modelltől: ki férhet hozzá közvetlenül az adatbázishoz, hogyan kezelik a migrációkat, backupokat és superuser hozzáférést.
- Az audit esemény publikálásánál dönteni kell, hogy szükséges-e transactional outbox minta a PostgreSQL tranzakció és a Kafka publikálás közötti rés kezelésére.
- Idempotencia-stratégia szükséges instabil hálózat esetén: ha a kliens újrapróbálja a szavazást, a rendszernek ugyanarra az eredményre kell jutnia, nem pedig duplikált vagy hibás állapotot létrehoznia.

## Architect számára javasolt döntési irány

Ez nem végleges döntés, csak kutatási alap.

A jelenlegi repóbeli kontextus alapján a legerősebben vizsgálandó irány az **A alternatíva**: PostgreSQL-alapú, append-only szavazati tranzakciónapló pszeudonimizált szavazói kulccsal, adatbázis-szintű unique constrainttel, UPDATE/DELETE tiltással és Kafka felé publikált audit/domain eseménnyel.

Az ADR-ben érdemes külön kimondani:

- a szavazat elsődleges igazságforrása PostgreSQL,
- Kafka nem elsődleges szavazati adatforrás, hanem audit/integrációs eseményfolyam,
- a „teljes anonimitás” helyett a döntés reálisabb megfogalmazása a pszeudonimizált szavazói azonosítás,
- a duplikáció kizárása adatbázis-szintű constrainttel történik,
- a megváltoztathatatlanság nem egyetlen technikán múlik, hanem több rétegen: append-only modell, jogosultságkezelés, trigger/rule, audit esemény, üzemeltetési szabályok.

A végleges ADR előtt külső, ellenőrizhető forrásokra lenne szükség legalább ezekhez: PostgreSQL adatbázis-jogosultságok és trigger/rule minták, HMAC-alapú pszeudonimizáció, GDPR/pseudonymisation értelmezés, transactional outbox minta, append-only audit log minták.
