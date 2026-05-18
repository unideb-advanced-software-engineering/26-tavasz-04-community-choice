Ahhoz, hogy a védeni tudjátok a projektet, nemcsak a saját döntéseiteket kell kívülről fújni, hanem azt is, hogy *mit miért vetettetek el*. Egy tapasztalt zsűri vagy oktató nem a funkciókat fogja támadni, hanem a kompromisszumokat (trade-offs), a biztonsági réseket és a skálázhatósági szűk keresztmetszeteket.

Íme a "golyóálló" FAQ (Gyakran Ismételt Kérdések), amely három blokkra oszlik: Architektúra, Biztonság/Integritás, és a tipikus "Kötözködő" Zsűri Kérdések.

---

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

**9. Zsűri kérdése: "Említették az API Gateway-t és a hálózati támadások elleni Rate Limiting-et. Hogyan fogják kezelni azt a problémát, hogy mobilhálózatok esetén (CGNAT miatt) több száz felhasználónak ugyanaz a publikus IP-címe?"**

* **A válasz:** Tisztában vagyunk a Carrier-Grade NAT problémájával. Éppen ezért a Rate Limitinget nem tisztán IP-alapon végezzük az autentikált folyamatoknál. A publikus böngészést védheti IP-limit, de a szavazási és ötletbeküldési végpontokon a sebességkorlátozást a Zamunda One által kiadott JWT tokenek `Subject` (User ID) claimje alapján hajtja végre az API Gateway. Ezzel megelőzzük, hogy egy egész kollégiumot tévedésből kizárjunk a szavazásból.

---

Ezzel a tudásanyaggal minden komolyabb architekturális és tervezési rohamot vissza tudtok verni a védés során.

Melyik kérdéskör (adatbázis-particionálás, CDC/Outbox, vagy az időbeli jogosultság) megválaszolását és mélyebb logikáját érzed jelenleg a leggyengébb pontnak a csapaton belül, amire érdemes lenne még fókuszálni a prezentáció előtt?
