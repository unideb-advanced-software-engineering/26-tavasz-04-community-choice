# Tervezési javaslat: ADR-005 – anonimitás és szavazati integritás

## Kontextus

Az ADR-005 kutatási jegyzete alapján a Community Choice rendszerben a szavazásnál két követelmény ütközik:

1. egy felhasználó egy adott ötletre csak egyszer szavazhat;
2. a szavazatokat a dokumentáció jelenlegi szövege szerint „anonimizálva” kell az ötletekhez kapcsolni.

Teljes anonimitás esetén a rendszer nem őrizne olyan stabil, ellenőrizhető szavazói azonosítót, amely alapján megakadályozható lenne a duplikált szavazat. Ezért a „teljes anonimitás” architekturálisan nem konzisztens az „egy ötletre egy felhasználó egy szavazat” szabállyal.

A döntésnek illeszkednie kell a meglévő alaparchitektúrához:

- hibrid Service-Based Architecture + Event-Driven Architecture,
- PostgreSQL mint elsődleges tranzakciós adatforrás,
- Kafka mint audit/integrációs eseményfolyam,
- Voting Service mint szinkron, erős konzisztenciát igénylő szolgáltatás,
- Audit Service mint aszinkron fogyasztó, nem elsődleges szavazati igazságforrás.

## Érintett követelmények és karakterisztikák

### Funkcionális követelmények

- Csak helyi lakos szavazhat az adott önkormányzat pályázatán.
- Egy lakos egy pályázaton belül több különböző ötletre is szavazhat.
- Egy lakos egy konkrét ötletre csak egyszer szavazhat.
- A leadott szavazat nem módosítható és nem törölhető, még adminisztrátori szinten sem.
- A szavazatok titkosságát védeni kell.

### Architekturális karakterisztikák

- **Integritás:** a szavazatok utólagos módosítása, törlése és duplikálása ellen technológiai garancia kell.
- **Hatékonyság:** ne vezessünk be indokolatlanul drága vagy energiaigényes infrastruktúrát.
- **Elaszticitás:** a Voting Service célzottan skálázható legyen szavazási csúcsban.
- **Robusztusság:** ismételt klienskérések, hálózati hibák és retry esetén se keletkezzen duplikált szavazat.

## Alternatívák

### 1. Teljes anonimitás

A rendszer sem nyersen, sem pszeudonimizált formában nem tárol stabil szavazói azonosítót.

**Előny:** adatvédelmi szempontból erősnek tűnik.

**Hátrány:** nem biztosítható megbízhatóan az „egy felhasználó egy ötletre egyszer” szabály. Ez az alternatíva a projekt üzleti követelményeivel nem kompatibilis.

### 2. Pszeudonimizált szavazói azonosítás PostgreSQL append-only tárolással

A Voting Service a Zamunda One-ból kapott stabil felhasználói azonosító és a kampány/önkormányzati kontextus alapján determinisztikus, de vissza nem fejthető `voter_key` értéket képez. A szavazati rekord PostgreSQL-ben, csak hozzáfűzhető táblában kerül tárolásra.

Javasolt elv:

```text
voter_key = HMAC(stable_zamunda_user_id + campaign_id, secret)
```

A pontos bemeneti mezők a végleges domainmodellhez igazítandók, de a lényeg:

- a szavazati táblában nincs nyers `user_id`, név, e-mail vagy lakcím;
- a `voter_key` ugyanarra a felhasználóra és kampányra determinisztikusan azonos értéket ad;
- más kampányban más pszeudonim kulcs keletkezhet;
- a duplikációt adatbázis-szintű egyedi constraint akadályozza meg.

Lehetséges constraint:

```text
UNIQUE (idea_id, voter_key)
```

vagy ha a modell megkívánja:

```text
UNIQUE (campaign_id, idea_id, voter_key)
```

**Előny:** egyszerre támogatja a duplikáció kizárását, az integritást és a személyes adatok minimalizálását.

**Hátrány:** ez nem teljes anonimitás, hanem pszeudonimizálás. A dokumentációban ezt világosan és következetesen kell nevezni.

### 3. Kafka/Event Sourcing mint elsődleges szavazati igazságforrás

A szavazás elsődleges rekordja Kafka eseményként létezne, a fogyasztók ebből építenék a nézeteket.

**Előny:** replay és audit szempontból vonzó.

**Hátrány:** a szavazásnál erős, azonnali konzisztencia és duplikációvédelem kell. A Kafka maradjon audit/integrációs eseményfolyam, ne legyen a szavazat elsődleges igazságforrása.

### 4. Blokklánc vagy permissioned ledger

Kriptografikusan láncolt, ledger jellegű tárolás.

**Előny:** erős immutabilitási narratíva.

**Hátrány:** a projekt takarékossági és egyszerű üzemeltetési céljaihoz képest túl komplex. Egyetemi beadandóban is túltervezettnek tűnne, ha a PostgreSQL-alapú megoldás elegendő.

## Döntés

Az ADR-005-ben az architekturális döntés legyen:

> A Community Choice rendszer nem teljesen anonim, hanem **pszeudonimizált szavazati tárolást** alkalmaz. A szavazatok elsődleges igazságforrása egy PostgreSQL-ben vezetett, csak hozzáfűzhető szavazati tranzakciónapló. A Voting Service a Zamunda One által biztosított stabil felhasználói azonosítóból és a kampánykontextusból determinisztikus, HMAC-alapú `voter_key` értéket képez. A szavazati rekord nem tartalmaz nyers személyes azonosítót. Az „egy felhasználó egy ötletre egyszer” szabályt adatbázis-szintű unique constraint biztosítja. A szavazatok UPDATE és DELETE műveletei adatbázis-szinten tiltottak. A Kafka felé kibocsátott esemény audit és integrációs célú, nem a szavazat elsődleges adatforrása.

## Indoklás

Ez a döntés a legjobb kompromisszum az anonimitási elvárás és a duplikációellenőrzés között.

A dokumentációban ezért nem szabad azt állítani, hogy a szavazat teljesen anonim. Helyette ezt kell állítani:

- a rendszer a szavazatot **pszeudonimizáltan** tárolja;
- a szavazati rekordból közvetlenül nem derül ki a szavazó személyazonossága;
- a rendszer nem tárol nyers személyes azonosítót a szavazati tranzakciónaplóban;
- a duplikált szavazat kizárásához szükséges minimális technikai azonosító megmarad;
- a titkosságot HMAC-alapú pszeudonim kulcs, secret-kezelés és hozzáférés-korlátozás védi.

## Következmények

### Pozitív következmények

- A duplikált szavazatok adatbázis-szinten kizárhatók.
- A szavazat módosíthatatlansága összhangban marad az SBA + PostgreSQL döntéssel.
- Az adatmodell nem igényel blokkláncot vagy teljes Event Sourcingot.
- A Kafka szerepe tiszta marad: audit, replay, értesítés és jövőbeli analitika.
- A döntés jól indokolható az Integritás, Hatékonyság és Takarékosság szempontjából.

### Negatív következmények

- A dokumentációban le kell cserélni a „teljes anonimitás” vagy „anonimizált szavazat” jellegű pontatlan megfogalmazásokat.
- A HMAC secret kezelése architekturális és üzemeltetési felelősség lesz.
- A GDPR/adatvédelmi értelmezés pontos jogi kontrollt igényelhet.
- A rendszeradminisztrátori és adatbázis-superuser hozzáférést külön szabályozni kell, mert az append-only tábla önmagában nem abszolút védelem minden infrastruktúra-szintű szereplő ellen.

## Kockázatok és nyitott kérdések

### Kockázat: a pszeudonimitás félrekommunikálása

Ha a dokumentáció továbbra is „anonimizált” szavazatokról beszél, az félrevezető. A helyes kifejezés: **pszeudonimizált szavazói kulcs** vagy **pszeudonimizált szavazati tárolás**.

### Kockázat: HMAC secret kompromittálódása

Ha a secret kiszivárog, a támadó könnyebben ellenőrizheti, hogy ismert felhasználókhoz milyen `voter_key` tartozhat. Ennek kezelése:

- secret ne legyen adatbázisban tárolva;
- csak a Voting Service férjen hozzá;
- rotációs és incidenskezelési szabály szükséges;
- a régi szavazatok ellenőrizhetőségét meg kell tervezni rotáció esetén.

### Kockázat: audit esemény elvesztése

Ha a PostgreSQL tranzakció sikeres, de a Kafka publikálás elbukik, az audit esemény késhet vagy elveszhet. Ennek kezelésére javasolt a **transactional outbox** minta vizsgálata: a szavazattal egy tranzakcióban outbox rekord keletkezik, amelyet külön publisher továbbít Kafka felé.

### Nyitott kérdés: pontos egyedi kulcs

A végleges domainmodell alapján kell eldönteni, hogy a unique constraint pontosan mely mezőkből álljon:

- `UNIQUE (idea_id, voter_key)`, ha az ötlet globálisan egyedi és kampányhoz kötött;
- `UNIQUE (campaign_id, idea_id, voter_key)`, ha explicit kampánykontextus kell;
- önkormányzati vagy kampány-scoped pszeudonim kulcs, ha az adatvédelmi minimalizálás ezt indokolja.

### Nyitott kérdés: adatmegőrzés

A szavazatok módosíthatatlansága és a személyes adatokhoz kapcsolódó törlési/adatmegőrzési szabályok viszonyát külön adatvédelmi döntésben vagy az SRS security/privacy részében tisztázni kell.

## Mit kell módosítani a dokumentációban?

### 1. Új ADR létrehozása

Javasolt fájl:

```text
docs/src/content/docs/adrs/adr-005.md
```

Javasolt cím:

```text
ADR-005: Szavazatok integritása és pszeudonimizált tárolása
```

A döntés fő állításai:

- PostgreSQL append-only szavazati tranzakciónapló;
- HMAC-alapú `voter_key`;
- nyers személyes azonosító nincs a szavazati rekordban;
- unique constraint a duplikált szavazat ellen;
- UPDATE/DELETE tiltás adatbázis-szinten;
- Kafka esemény csak audit/integrációs szerepű;
- nem teljes anonimitás, hanem pszeudonimizálás.

### 2. `docs/src/content/docs/srs.md`

A jelenlegi `F-SZ-05` szöveg pontatlan:

```text
A rendszer a szavazatokat anonimizálva kapcsolja az ötletekhez, biztosítva a szavazás titkosságát.
```

Javasolt módosítás:

```text
F-SZ-05: A rendszer a szavazatokat pszeudonimizált szavazói kulccsal kapcsolja az ötletekhez. A szavazati rekord nem tartalmaz nyers személyes azonosítót, ugyanakkor a pszeudonim kulcs lehetővé teszi az egy ötletre egyszeri szavazás adatbázis-szintű ellenőrzését.
```

Az `F-SZ-04` jelenlegi „append-only / blokklánc-jellegű” megfogalmazását is érdemes pontosítani, mert a blokklánc irányt nem választjuk:

```text
F-SZ-04: A rendszer a leadott szavazatokat PostgreSQL-alapú, csak hozzáfűzhető szavazati tranzakciónaplóban tárolja. A módosítást és törlést adatbázis-szintű jogosultságokkal és védelmi mechanizmusokkal tiltja.
```

A Security Requirements részbe érdemes felvenni:

- a szavazati tranzakciónapló nem tartalmaz nyers `user_id`-t;
- a HMAC secret csak a Voting Service számára hozzáférhető;
- adminisztratív felületen nincs szavazatmódosítási vagy törlési funkció;
- közvetlen adatbázis-hozzáférést üzemeltetési szabályok korlátozzák.

### 3. `docs/src/content/docs/architektura/szignifikans-kovetelmenyek.md`

Jelenleg nincs külön szignifikáns követelményként kifejtve a szavazati integritás és pszeudonimitás. Érdemes új szakaszt hozzáadni:

```text
### F-SZ-03, F-SZ-04 és F-SZ-05: Egyedi, megváltoztathatatlan és pszeudonimizált szavazatok
```

Tartalom:

- miért ASR az egy ötletre egyszeri szavazás;
- miért kell adatbázis-szintű constraint;
- miért pszeudonimizálás, nem teljes anonimitás;
- miért PostgreSQL az elsődleges igazságforrás;
- miért csak aszinkron audit szerepű Kafka.

### 4. `docs/src/content/docs/architektura/karakterisztikak.md`

Az Integritás részt érdemes bővíteni:

- nem csak módosítás/törlés ellen védünk,
- hanem duplikált szavazat ellen is,
- és a titkosságot pszeudonimizált tárolással kezeljük.

Javasolt gondolat:

```text
Az integritás része az is, hogy ugyanaz a lakos ugyanarra az ötletre ne adhasson le több szavazatot. Ezt a rendszer nem nyers személyes azonosítóval, hanem pszeudonimizált szavazói kulccsal és adatbázis-szintű egyediségi constrainttel biztosítja.
```

### 5. `docs/src/content/docs/architektura/stilusvalasztas.md`

A stílusválasztásnál pontosítani kell, hogy az EDA nem a szavazat elsődleges tárolási modellje.

Javasolt kiegészítés:

- a Voting Service szinkron PostgreSQL tranzakcióban rögzíti a szavazatot;
- az eseményvezérelt rész csak a sikeres szavazat után keletkező audit/notification eseményeket kezeli;
- a rendszer nem teljes Event Sourcing alapú.

### 6. `docs/src/content/docs/adrs/adr-002.md`

Az ADR-002 már említi a közös adatbázist és triggereket. Érdemes pontosítani:

- a Voting Service szavazati táblája append-only;
- a duplikációt unique constraint védi;
- a pszeudonimizált szavazói kulcs az ADR-005-ben részletezett döntés.

### 7. `docs/src/content/docs/adrs/adr-003.md`

Az ADR-003-ban egyértelműsíteni kell:

- a Kafka esemény az audit és integráció miatt keletkezik;
- a szavazat érvényességének forrása nem az Audit Service és nem Kafka;
- az auditnapló késése nem teheti kérdésessé a már PostgreSQL-ben rögzített szavazatot.

### 8. `docs/src/content/docs/adrs/adr-004.md`

Az ADR-004 jelenleg Event Sourcing mintát említ. Ezt javasolt finomítani:

- „Event Sourcing” helyett: „tartós audit/event log és visszajátszható integrációs eseményfolyam”;
- Kafka indoka az audit replay és több consumer group, nem a szavazati igazságforrás kiváltása;
- a Voting Service és PostgreSQL marad a szavazati integritás elsődleges helye.

### 9. `docs/src/content/docs/architektura/c4-modell.mdx`

A szavazási szolgáltatás leírását érdemes pontosítani:

```text
Ez a szolgáltatás felel a jogosult, pszeudonimizált és megváltoztathatatlan szavazatok rögzítéséért. A Zamunda One alapján ellenőrzi a lakóhelyet, majd PostgreSQL-ben, csak hozzáfűzhető szavazati tranzakciónaplóban tárolja a szavazatot.
```

### 10. C4 modell (`docs/src/community-choice.c4`) – későbbi, külön C4 feladat

A senior architect skill szabályai alapján itt nem módosítok C4 fájlt, de dokumentációs egységességhez később javasolt:

- `voteRepo` leírásában szerepeljen a pszeudonimizált `voter_key`;
- a Voting Logic komponensnél szerepeljen a HMAC-alapú kulcsképzés;
- az adatbázis kapcsolatnál szerepeljen az append-only szavazati tranzakciónapló;
- a Kafka kapcsolatnál szerepeljen, hogy audit/domain esemény, nem elsődleges szavazati tárolás.

### 11. Fogalomtár / terminológia

A dokumentációban egységesen ezeket a kifejezéseket javasolt használni:

- **pszeudonimizált szavazói kulcs**,
- **Szavazati tranzakciónapló** vagy „szavazati napló/tábla”,
- **csak hozzáfűzhető tárolás**,
- **adatbázis-szintű egyediségi constraint**,
- **audit/integrációs eseményfolyam**.

Kerülendő vagy pontosítandó kifejezések:

- „teljesen anonim szavazat”,
- „anonimizált szavazat” önmagában,
- „blokklánc-jellegű” mint választott technika,
- „Event Sourcing” a teljes szavazási rendszerre.

## ADR-be emelhető összefoglaló

```markdown
# ADR-005: Szavazatok integritása és pszeudonimizált tárolása
- Státusz: Aktív

**In the context of**
- a hitelesített, lakcímhez kötött szavazási folyamat tervezésekor, ahol egy lakos egy adott ötletre csak egyszer szavazhat, a leadott szavazat nem módosítható és nem törölhető, ugyanakkor a szavazati rekord nem tárolhat nyers személyes azonosítót

**Facing the need for**
- olyan tárolási modellre, amely egyszerre biztosítja a duplikált szavazatok kizárását, a szavazatok megváltoztathatatlanságát és a szavazói személyazonosság védelmét; teljes anonimitás mellett a duplikációellenőrzés nem lenne megbízható, nyers user_id tárolása mellett pedig túl erős lenne a személyesadat-kitettség

**We decided for**
- PostgreSQL-alapú, csak hozzáfűzhető szavazati tranzakciónapló alkalmazása pszeudonimizált szavazói kulccsal. A Voting Service a Zamunda One stabil felhasználói azonosítójából és a kampánykontextusból HMAC-alapú voter_key értéket képez. A szavazati tranzakciónapló nem tartalmaz nyers személyes azonosítót. Az egy ötletre egyszeri szavazást adatbázis-szintű unique constraint garantálja. A szavazati rekordok UPDATE és DELETE műveletei adatbázis-szinten tiltottak. Kafka felé audit/integrációs esemény kerül publikálásra, de Kafka nem a szavazat elsődleges igazságforrása.

**Achieving**
- a szavazat érvényességének elsődleges forrása a PostgreSQL tranzakciós tároló marad
- az egy ötletre egyszeri szavazás versenyhelyzetben és retry esetén is adatbázis-szinten védett
- a szavazati rekord nem tartalmaz nyers személyes azonosítót
- az audit, értesítés és későbbi analitika aszinkron eseményfolyamon keresztül bővíthető

**Accepting that**
- a megoldás nem teljes anonimitást, hanem pszeudonimizálást biztosít
- a HMAC secret kezelése kritikus üzemeltetési felelősség
- az adatmegőrzési és adatvédelmi szabályokat külön pontosítani kell
- az audit esemény megbízható publikálásához transactional outbox minta lehet szükséges
```
