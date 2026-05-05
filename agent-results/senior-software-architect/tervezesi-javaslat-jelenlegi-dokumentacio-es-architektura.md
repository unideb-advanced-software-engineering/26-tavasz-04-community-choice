# Senior architect vélemény a jelenlegi tervről

Megjegyzés: a jelenlegi futtatási környezetben nem én választom a modellt, de ehhez a `senior-software-architect` szerephez valóban érdemes a legerősebb elérhető reasoning modellt használni.

## Rövid összegzés

A jelenlegi dokumentáció szakmailag jó irányba halad. Az esettanulmány alapján a választott **hibrid Service-Based Architecture + Event-Driven Architecture** indokolható: a szavazás integritási és skálázási igényeihez jól illik az SBA, míg a médiafeldolgozás, értesítés és audit aszinkron jellege miatt az EDA is helyén van.

A beadandó legerősebb része, hogy az architekturális döntések nem öncélú technológiaválasztások, hanem kapcsolódnak a fő minőségi attribútumokhoz: **hatékonyság, integritás, robusztusság, elaszticitás**. A legnagyobb javítási lehetőség most az, hogy a dokumentációban néhány döntést pontosítani kell, különösen a **szavazatok megváltoztathatatlansága**, az **anonimitás**, az **audit**, a **Kafka indoklása** és az **SRS befejezettsége** körül.

---

## Erősségek

- A projektleírásból jól következnek az architekturális karakterisztikák.
- A takarékosság és klímabarát működés nem csak általános célként jelenik meg, hanem befolyásolja a cachinget, CDN-t, médiafeldolgozást és skálázást.
- A moduláris monolit vs SBA vs microservices összevetés jó beadandó-értékű gondolatmenet.
- A szavazási csúcsokra külön skálázható `Voting Service` jó döntés.
- Az aszinkron médiafeldolgozás erősen indokolt az instabil hálózat és CPU-terhelés miatt.
- Az ADR-ek struktúrája használható, és következetesen próbálja megmutatni a trade-offokat.

---

## Fontos szakmai észrevételek

### 1. A szavazatok „anonimitása” és az „egy szavazat egyszer” követelmény ütközhet

Az SRS szerint:

- egy felhasználó egy ötletre csak egyszer szavazhat,
- a szavazatokat anonimizálva kell kapcsolni az ötletekhez,
- a szavazatok nem módosíthatók és nem törölhetők.

Ez jó követelmény, de architekturálisan pontosítani kell, hogyan oldható meg egyszerre az anonimitás és a duplikált szavazatok kizárása.

Javaslat:

- Ne teljes anonimizálást írjunk elsődlegesen, hanem **pszeudonimizált szavazói azonosítást**.
- Példa: `voter_hash = HMAC(user_id + campaign_id + secret)` vagy hasonló determinisztikus, de vissza nem fejthető azonosító.
- Így ellenőrizhető az egyediség, de az adatbázisban nem kell nyersen tárolni a személyes azonosítót.

Ebből érdemes külön ADR-t készíteni:

```text
ADR-005: Szavazatok integritása és pszeudonimizált tárolása
```

---

### 2. Az audit és az immutable vote storage nincs teljesen szétválasztva

Most a dokumentációban néhol keveredik:

- a szavazat elsődleges, tranzakciós rögzítése,
- az audit események Kafka alapú aszinkron feldolgozása,
- az Event Sourcing jellegű visszajátszhatóság.

Fontos különbség:

- A **szavazat érvényességének forrása** a PostgreSQL tranzakciós tároló legyen.
- A **Kafka eseményfolyam** legyen auditálási, értesítési és integrációs eseményfolyam.
- Ne állítsuk túl erősen, hogy a teljes rendszer Event Sourcing alapú, ha valójában csak audit/event log jellegű eseményeket használunk.

Javaslat:

- Az ADR-003 és ADR-004 szövegében pontosítani kellene:
  - „event-driven integration” vagy „audit event log”,
  - nem feltétlenül teljes „Event Sourcing”.
- A szavazat immutabilitását PostgreSQL oldalon kell erősebben megindokolni:
  - append-only tábla,
  - `INSERT only` jogosultság,
  - `UPDATE/DELETE` tiltás,
  - trigger vagy rule,
  - külön adatbázis role-ok,
  - audit hash chain opcionálisan.

---

### 3. A Kafka döntés jó, de a takarékossági ellenérvet jobban kell kezelni

A Kafka szakmailag védhető, főleg ha:

- több független consumer van,
- audit visszajátszhatóság kell,
- eseménytörténet megőrzése fontos,
- jövőbeli analytics is várható.

Viszont a projekt egyik fő ASR-je a **takarékosság**. Kafka üzemeltetése drágább és komplexebb, mint RabbitMQ vagy Redis Streams. Ezt az ADR-004 már említi, de szerintem még erősebben kellene indokolni, hogy miért éri meg mégis.

Javaslat:

- ADR-004-ben külön szakasz:
  - „Miért elfogadható a Kafka többletkomplexitása?”
- Például:
  - a Kafka nem minden modulhoz kell, csak EDA oldalon,
  - kis klaszterrel indulhat,
  - KRaft miatt nincs külön ZooKeeper,
  - audit és replay igény miatt hosszú távon egyszerűbb, mint több külön queue fenntartása.

---

### 4. Az SRS még sablonszerű, ezt beadandó előtt érdemes tisztítani

A `docs/src/content/docs/srs.md` tartalmaz több eredeti template maradványt:

- `Prepared by <author>`
- `<organization>`
- `<date created>`
- „System Feature 1”
- „Don’t really say…”
- üres Appendixek
- generikus angol instrukciók.

Ez beadandónál rontja az összképet.

Javaslat:

- Az SRS-t véglegesíteni kell magyar, beadandó-kompatibilis formára.
- Ki kell venni a template placeholder szövegeket.
- Az appendixek vagy legyenek kitöltve, vagy legyenek törölve/rövidítve.
- A követelményazonosítók legyenek egységesek:
  - most van `F-SZ-04`, miközben máshol `F-SZAV-01` szerepel.

---

### 5. A service boundary-kat még érdemes pontosítani

A jelenlegi fő bontás jó:

- Webalkalmazás,
- Voting Service,
- Campaign & Admin Service,
- Notification Service,
- Audit Service,
- Media Worker,
- PostgreSQL,
- Redis,
- Kafka,
- MinIO/CDN,
- Zamunda One.

De a dokumentációban még nem teljesen világos, hogy pontosan mi melyik service felelőssége.

Javaslat: készüljön egy rövid „Szolgáltatáshatárok” oldal vagy szakasz:

| Szolgáltatás | Felelősség | Nem felelősség |
| --- | --- | --- |
| Voting Service | szavazat rögzítés, jogosultságellenőrzés, idempotencia | ötletmoderáció, médiafeldolgozás |
| Campaign & Admin Service | kampányok, ötletek, admin életciklus | szavazat módosítás/törlés |
| Media Worker | tömörítés, transzkódolás | üzleti döntések |
| Audit Service | események naplózása | elsődleges tranzakciós adatforrás |

Ez sokat javítana az architektúra értékelhetőségén.

---

## Javasolt következő lépések

### 1. SRS tisztítása

Első prioritás. Ez látványosan javítja a beadandó minőségét.

Érintett fájl:

```text
docs/src/content/docs/srs.md
```

Teendők:

- placeholder szövegek törlése,
- követelményazonosítók egységesítése,
- nemfunkcionális követelmények mérhetőbbé tétele,
- GDPR/security rész pontosítása.

---

### 2. Új ADR a szavazatok integritásáról

Javasolt új döntés:

```text
ADR-005: Szavazatok megváltoztathatatlan és pszeudonimizált tárolása
```

Fő döntés:

- PostgreSQL append-only vote ledger,
- egyedi constraint a duplikált szavazat ellen,
- pszeudonimizált szavazói kulcs,
- UPDATE/DELETE tiltás adatbázis-szinten,
- audit esemény Kafka felé.

Ez a projekt egyik legfontosabb architekturális döntése lenne.

---

### 3. ADR-003 és ADR-004 pontosítása

Fő cél:

- ne legyen túlzó Event Sourcing állítás,
- Kafka szerepe legyen pontosan: tartós domain event log, audit replay, async integration,
- legyen világos, hogy a szavazat igazságforrása nem Kafka, hanem PostgreSQL.

---

### 4. Szolgáltatáshatárok dokumentálása

Érdemes lenne egy új architektúra oldal:

```text
docs/src/content/docs/architektura/szolgaltatashatarok.md
```

Tartalom:

- service-ek felelőssége,
- adatbirtoklás,
- szinkron/aszikron kapcsolatok,
- skálázási indoklás.

Mivel új oldal esetén sidebar is kellhet, ezt a dokumentációíró skill kezelje jóváhagyással.

---

### 5. Minőségi attribútum forgatókönyvek hozzáadása

Az architekturális karakterisztikák most jók, de még általánosak. Egy beadandóban sokat ér, ha scenario formában is megjelennek.

Példa:

```text
Elaszticitás:
Amikor egy 500 000 lakosú önkormányzat kampányának utolsó órájában a szavazási forgalom tízszeresére nő, a rendszer csak a Voting Service példányszámát növeli, miközben a Campaign & Admin Service változatlan kapacitáson marad.
```

---

## Összvélemény

Az architektúra alapiránya jó és védhető. Nem érzem túltervezettnek, mert a projekt országos skálájú, médiatartalmat kezel, hitelesített lakcímhez kötött szavazást végez, és erős integritási követelménye van. A microservices elvetése kifejezetten jó döntés, mert a beadandó követelményei alapján a túlzott elosztottság valóban ellentmondana a takarékossági célnak.

A következő nagy minőségi ugrás nem új technológiák bevezetése lenne, hanem a meglévő döntések pontosítása:

1. szavazatok tárolása,
2. pszeudonimitás,
3. audit vs elsődleges adatforrás,
4. Kafka indoklás,
5. SRS véglegesítés.

Ha ezeket rendbe tesszük, a projekt architekturális dokumentációja erős, konzisztens és jól védhető egyetemi beadandó lesz.
