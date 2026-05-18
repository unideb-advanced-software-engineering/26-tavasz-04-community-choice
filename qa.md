### I. Architekturális Alapok és Kompromisszumok

**1. Miért nem tiszta Mikroszolgáltatásos (Microservices) architektúrát terveztetek?**

* **A válasz:** A ZDR program alapkövetelménye a takarékos és klímabarát működés. A mikroszolgáltatások hatalmas hálózati többletet (overhead), elosztott tranzakció-kezelési problémákat és komplex üzemeltetést hoztak volna. A mi Hibrid SBA (Service-Based Architecture) megoldásunk elegendő a szavazási csúcsok célzott skálázásához anélkül, hogy indokolatlanul drágítaná a rendszert.

**2. Hogyan garantáljátok, hogy a hálózati szakadás nem okoz adatvesztést az audit naplóban? (A Dual-Write probléma)**

* **A válasz:** Nem próbálunk meg alkalmazásszinten egyszerre írni az adatbázisba és az üzenetbrokerbe. Transactional Outbox mintát és Change Data Capture (CDC) technológiát használunk. A szavazat és az audit esemény egyetlen relációs adatbázis-tranzakcióban rögzül. A CDC komponens (pl. Debezium) a PostgreSQL tranzakciós naplójából (WAL) olvassa ki a változást, és garantáltan kézbesíti azt az eseményfolyamba.

**3. Mi történik, ha egy médiafeldolgozó vagy értesítő worker hibára fut egy üzenetnél az aszinkron folyamatban?**

* **A válasz:** Hogy elkerüljük a végtelen újrapróbálkozásból fakadó halálspirált (Poison Pill), a fogyasztóknál (consumereknél) Dead Letter Queue (DLQ) stratégiát alkalmazunk. Ha a feldolgozás 3 alkalommal elbukik, az üzenet a DLQ-ba kerül, az eredeti üzenetet pedig nyugtázzuk (ACK), így a sor nem akad el, és a többi értesítés zavartalanul kimehet.

---

### II. Biztonság, Adatvédelem és Integritás

**4. Mi a különbség a Salt és a Pepper között, és miért Peppert használtok a szavazói azonosítókhoz?**

* **A válasz:** A teljes anonimitás nem illeszkedik a duplikált szavazás kizárásához, a nyers személyes azonosító tárolása viszont adatvédelmi szempontból túl erős kitettséget jelentene. A Salt (só) az adatbázisban tárolódik a hash-sel együtt, így egy adatszivárgás esetén Rainbow Table-ökkel a Zamunda One ID-k könnyen feltörhetők lennének. Ezzel szemben a Globális Pepper egy olyan titkos kulcs, amelyet egy izolált Kulcskezelő Szolgáltatás (KMS/Vault) tárol. A Pepper sosem kerül az adatbázisba, így szivárgás esetén a hash-ek visszafejthetetlenek maradnak.

**5. Mi történik, ha a felhasználó a 30 napos kampány közepén átjelentkezik egy másik kerületbe a Zamunda One-ban? Szavazhat mindkét helyen?**

* **A válasz:** Nem. Erre vezettük be a Választási Névjegyzék (Eligibility Snapshot) mintát. A lakos első kampánybeli interakciójakor a rendszer lefagyasztja a jogosultsági státuszát, figyelembe véve a Zamunda One `address_updated_at` időbélyegét. A rendszer a kampány végéig ez alapján a snapshot alapján dolgozik, így technológiai szinten zárjuk ki a kampány közbeni spekulatív átjelentkezéseket.

**6. Hogyan kerülitek el, hogy amikor valaki kétszer kattint rá a "Szavazás" gombra egy lassú telefonon, a rendszer Race Condition hibára fusson a Snapshot létrehozásakor?**

* **A válasz:** A PostgreSQL táblában a `campaign_id` és a `user_id_hash` párosa képezi az elsődleges kulcsot. Az adatbázis-szintű beszúrást `INSERT ... ON CONFLICT DO NOTHING` kiegészítéssel (vagy UPSERT-tel) végezzük, majd az alkalmazásban egy Retry Pattern gondoskodik arról, hogy a szál újraolvassa a már legenerált jogosultságot. Így a konkurens kérések nem okoznak HTTP 500-as hibát a felhasználónak.

---

### III. A "Kötözködő" Zsűri Kérdések (és hogyan védd ki őket)

**7. Zsűri kérdése: "Nem óriási túlzás (overengineering) egy Vault KMS-t, CDC-t és Kafka/NATS alapú eseményfolyamot betenni egy egyszerű önkormányzati ötletládába?"**

* **A válasz:** A Community Choice nem egy egyszerű ötletláda, hanem egy közbizalmi környezetben működő döntéstámogató platform. Valódi önkormányzati költségvetésekről születik döntés. Ha egy ilyen rendszerben manipulálhatók a szavazatok, vagy kiszivárognak a személyes adatok, a projekt azonnal megbukik politikailag és jogilag is. A KMS és a CDC nem kényelmi, "túltervezett" funkciók, hanem ezek a technológiai garanciák magára a bizalomra.

**8. Zsűri kérdése: "Rendben, skálázzátok a Node.js/NestJS szavazási szolgáltatásokat horizontálisan. De a relációs adatbázis (PostgreSQL) egyetlen írási pont marad. Mi védi meg az adatbázist attól, hogy a kampány utolsó 10 percében szétessen a terheléstől?"**

* **A válasz:** Két dolog. Egyrészt egy Connection Pooler (PgBouncer) védi az adatbázist attól, hogy a több ezer hirtelen beérkező API kérés kimerítse a TCP kapcsolatokat. Másrészt natív adatbázis-particionálást alkalmazunk a szavazati táblán kampányok alapján. Így a csúcsidőszakban a szavazatok egy kisebb, szeparált indexszel rendelkező táblába íródnak, ami minimalizálja a "lock contention" (holtverseny) problémáját a lemezen.

---

Ezzel a tudásanyaggal minden komolyabb architekturális és tervezési rohamot vissza tudtok verni a védés során.

Melyik kérdéskör (adatbázis-particionálás, CDC/Outbox, vagy az időbeli jogosultság) megválaszolását és mélyebb logikáját érzed jelenleg a leggyengébb pontnak a csapaton belül, amire érdemes lenne még fókuszálni a prezentáció előtt?


Az ADR-007 dokumentum alapján a rendszer két teljesen eltérő megközelítést alkalmaz a HMAC képzésére (attól függően, hogy a jogosultsági ellenőrzésről vagy magáról a szavazásról van szó), ami meghatározza a kulcslekérés módját. A kulcsrotáció esetén pedig a rendszer a kulcsverziók (key versions) átfedő kezelésével és visszamenőleges ellenőrzésével kerüli el a duplikált szavazatokat.

Íme a két kérdésedre a részletes, architekturális válasz.

### 1. Hogyan működik a secret lekérés?

A dokumentum alapján a rendszer minimalizálja a titkos kulcsok utaztatását, és két külön utat határoz meg:

**A jogosultsági pillanatképnél (Eligibility Snapshot): Nincs secret lekérés**

* Itt a rendszer a **Vault Transit** engine-t használja. A titkos kulcs (pepper) soha, semmilyen formában nem hagyja el a Vault memóriáját.
* Amikor a BFF (Backend for Frontend) vagy a domain szolgáltatás megkapja a Zamunda One ID-t, a hálózaton keresztül elküldi ezt a nyers azonosítót a Vaultnak.
* A Vault lokálisan, a saját memóriájában elvégzi a HMAC számítást, majd csak a kész hash eredményt küldi vissza az alkalmazásnak. A NestJS alkalmazás sosem ismeri meg magát a kulcsot.

**A szavazói kulcsnál (Voter Key): Rövid élettartamú kulcs lekérése és származtatása**

* Mivel szavazási csúcsidőben minden egyes szavazatnál Vault hívást indítani túl lassú lenne, a *Szavazási szolgáltatás (Voting Service)* podjai a saját illékony memóriájukban végzik a HMAC számítást.
* A pod az indulásakor (vagy kampányváltáskor) a saját szolgáltatásidentitásával (pl. Kubernetes Service Account / Vault AppRole) hitelesíti magát a KMS-nél (Key Management Service).
* Lekér egy **rövid élettartamú, operatív HMAC kulcsot** (vagy egy mesterkulcsból HKDF eljárással származtat egyet).
* Ezt a kulcsot szigorúan csak a RAM-ban tartja (nem kerül logba, lemezre, swapbe). Amikor a kulcs élettartama (TTL, pl. 1 óra) lejár, a pod újraadja a hitelesítését és lekéri a frissített vagy következő verziójú kulcsot.

---

### 2. Ha rotáció van, honnét tudjuk, hogy egy felhasználó már szavazott-e?

Ez a pszeudonimizált, HMAC-alapú rendszerek legkritikusabb pontja. Ha megváltozik a titkos kulcs, ugyanabból a Zamunda One ID-ból egy teljesen új `voter_key` (hash) fog keletkezni. Ha a rendszer csak az új hasht vizsgálná, a felhasználó újra tudna szavazni, ami sérti az alapkövetelményeket.

A megoldás az ADR-007 alapján a következő lépésekből áll:

**Kampányonkénti izoláció és tervezett rotáció**

* Az alapelv az, hogy **aktív kampány közben nincs rotáció**, csak új kampány indításakor. Mivel minden kampánynak saját kulcsa van, a rotáció nem okoz ütközést, hiszen egy adott kampányon belül végig ugyanaz a kulcs él.

**Incidens miatti rotáció aktív kampány közben (Átfedő kulcskezelés)**

* Ha egy kulcs kiszivárog, és aktív kampány közben kell azonnali (incidens) rotációt végrehajtani, a *Szavazási szolgáltatásnak* **átfedő kulcskezelést (overlapping key versions)** kell alkalmaznia.
* A szavazati adatbázisban minden leadott szavazat mellett szerepel a felhasznált kulcs verziója (pl. `key_version: v1`).
* Amikor a felhasználó megpróbál szavazni az incidens (és a `v2`-es kulcs bevezetése) után, a Szavazási szolgáltatás a memóriájában lévő korábbi (`v1`) és az új (`v2`) kulccsal is kiszámolja a HMAC értéket.
* A szolgáltatás lekérdezi a PostgreSQL-ből, hogy létezik-e szavazat az adott ötletre a `voter_key_v1` VAGY a `voter_key_v2` azonosítóval.
* Ha bármelyik hash találatot ad, a rendszer tudja, hogy a felhasználó már szavazott, és elutasítja a kérést. Ha nem szavazott még, a rendszer az új, biztonságos (`v2`) kulccsal menti el a szavazatát.

**Régi kulcsok kivezetése**

* A kampány lezárulta után a régi, kompromittálódott kulcsok végleg törölhetők a memóriából. A szavazati rekordok integritása megmarad (hiszen append-only táblában vannak, és a szavazat ténye a `key_version` és a `voter_key` alapján auditálható marad anélkül, hogy a nyers azonosítóra vissza lehetne fejteni).
