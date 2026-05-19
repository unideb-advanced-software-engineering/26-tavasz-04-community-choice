# Community Choice – Összefoglaló

> Automatikusan összefűzve a `docs/src/content/docs/` alatti fájlokból.
> Kihagyva: `brand-spec.md`, `architektura/implementacios-javaslatok.md`.

---

# Tartalomjegyzék

1. [Főoldal (index.mdx)](#1-főoldal-indexmdx)
2. [Esettanulmány (esettanulmany.md)](#2-esettanulmány-esettanulmánymd)
3. [Fogalomtár (fogalomtar.md)](#3-fogalomtár-fogalomtarmd)
4. [SRS (srs.mdx)](#4-srs-srsmdx)
5. [C4 modell (architektura/c4-modell.mdx)](#5-c4-modell-architekturac4-modellmdx)
6. [Architekturális karakterisztikák (architektura/karakterisztikak.md)](#6-architekturális-karakterisztikák-architekturakarakterisztikakmd)
7. [Architekturális stílus választása (architektura/stilusvalasztas.md)](#7-architekturális-stílus-választása-architekturastilusvalasztasmd)
8. [Architekturálisan szignifikáns követelmények (architektura/szignifikans-kovetelmenyek.md)](#8-architekturálisan-szignifikáns-követelmények-architekturaszignifikans-kovetelmenyekmd)
9. [ADR-001: Hibrid architektúra](#9-adr-001-hibrid-architektúra)
10. [ADR-002: Service-Based Architecture](#10-adr-002-service-based-architecture)
11. [ADR-003: Event-Driven Architecture](#11-adr-003-event-driven-architecture)
12. [ADR-004: Többprofilú event stream és üzenetbroker döntés](#12-adr-004-többprofilú-event-stream-és-üzenetbroker-döntés)
13. [ADR-005: Szavazatok integritása és pszeudonimizált tárolása](#13-adr-005-szavazatok-integritása-és-pszeudonimizált-tárolása)
14. [ADR-006: Transactional outbox és outbox relay a szavazási auditfolyamhoz](#14-adr-006-transactional-outbox-és-outbox-relay-a-szavazási-auditfolyamhoz)
15. [ADR-007: HMAC kulcskezelés Vault Transit és rövid élettartamú kampánykulcsok alapján](#15-adr-007-hmac-kulcskezelés-vault-transit-és-rövid-élettartamú-kampánykulcsok-alapján)
16. [ADR-008: PostgreSQL írási út védelme PgBouncerrel és particionálással](#16-adr-008-postgresql-írási-út-védelme-pgbouncerrel-és-particionálással)
17. [ADR-009: Dedikált API Gateway a NestJS BFF előtt](#17-adr-009-dedikált-api-gateway-a-nestjs-bff-előtt)
18. [ADR-010: Campaign Eligibility mint aszinkron kiértékelt, megváltoztathatatlan pillanatkép](#18-adr-010-campaign-eligibility-mint-aszinkron-kiértékelt-megváltoztathatatlan-pillanatkép)

---

## 1. Főoldal (index.mdx)

**A Community Choice** a Zamunda Digitális Reneszánsz programjának nyilvános platformja.
A lakosok helyi közösségi fejlesztési ötleteket javasolhatnak, és jogosultsági pillanatképük alapján
szavazhatnak egymás javaslataira. A szavazatok megmásíthatatlanok, a rendszer integritása kritikus.

### Három lépés

1. **Javasolj** – A lakosok bejelentkeznek Zamunda One azonosítással, és ötleteket nyújtanak be problémára és megoldásra egyaránt.
2. **Szavazz** – A helyi közösség demokratikusan szavaz a beküldött javaslatokra. Szavazatellenőrzés, átláthatóság, integritás.
3. **Megvalósul** – A nyertes ötletek kiértékelésre kerülnek, majd az önkormányzat megvalósítja — a közösség szava számít.

### Értékek

- **Közösség és demokrácia** – A szavazat egyenlő, átlátható, megmásíthatatlan. Minden lakos hangja számít.
- **Bizalom és integritás** – Hitelesített lakcím, jogosultsági pillanatkép, ellenőrzött szavazat — állami szolgálati szint.
- **Modern digitális állam** – Klímabarát, takarékos, előretekintő. A ZDR program része.
- **Nyitottság és befogadás** – Nagy kattintási felületek, magas kontraszt, érthető folyamatok — kor és képesség független.

### Kiemelt funkciók

- **Egyszavazatos rendszer** – Minden hitelesített lakos egyetlen szavazattal rendelkezik kampányonként.
- **Lakcím-hitelesítés** – Zamunda One OAuth 2.0 alapú azonosítás.
- **Megmásíthatatlan szavazat** – A szavazat rögzítése után nem módosítható.
- **Átlátható folyamat** – A kampány életciklusa nyomon követhető: tervezés, beküldés, szavazás, kiértékelés, megvalósítás alatt, megvalósítva.
- **Közösségi visszajelzés** – Kommentelés, értékelés, megosztás.
- **Alacsony sávszélesség** – Mobile-first, reszponzív, erőforrás-tudatos.

### Technológiai alapok

React / TypeScript, Node.js / NestJS, PostgreSQL, Redis, NATS JetStream / Kafka, Outbox relay, Vault / KMS kulcskezelés, API Gateway, MinIO / CDN, Zamunda One OAuth 2.0.

---

## 2. Esettanulmány (esettanulmany.md)

### Háttér

Zamunda trónját Akeem foglalta el, és az uralkodásba bevonta lányát, Meekát. Meeka a digitális transzformációban látja a fejlődés zálogát: független IT infrastruktúra és digitális államigazgatás, kombinálva a megújuló energiaforrások és a klímabarát megoldások használatával. Ez a digitális transzformációs program a **Zamunda Digitális Reneszánsz (ZDR)**.

A ZDR program általános követelményei:
- Állami programként megfelelő mennyiségű és minőségű dokumentáció.
- Takarekosság és klímabarát célok.
- Az ország bizonyos területein alacsony sávszélesség és magas késleltetés.

### Leírás

A lakosok helyi szintű projekteket kezdeményezhetnek: zöldfelületek, közösségi terek, padok, kerékpártárolók.

Valós kapcsolódás: [otlet.budapest.hu](https://otlet.budapest.hu/), [kozossegikoltsegvetes.terezvaros.hu](https://kozossegikoltsegvetes.terezvaros.hu/)

### Felhasználók

- Zamunda összes állampolgára (~10 millió fő).
- Adminisztrátorok a zamundai közigazgatásban.

### Követelmények (röviden)

- Önkormányzatok ötletpályázatokat hirdethetnek.
- Csak ottani lakosok adhatnak be ötleteket és szavazhatnak.
- Probléma-megoldás párok, fotók és videók beküldése.
- Szigorú hozzáférés-kontroll, adminisztrátori törlés/módosítás tiltott.
- Zamunda One API integráció autentikációhoz és autorizációhoz.
- Kampány közbeni lakcímváltozások kezelése.
- Pályázati keretekkel nem kell foglalkozni.
- Egy ötletre egy felhasználó egyszer szavazhat.
- Egy pályázatra egy felhasználó egy ötletet adhat be.

---

## 3. Fogalomtár (fogalomtar.md)

### Dokumentum- és modellezési fogalmak

- **SRS:** A rendszer követelményeit összefoglaló specifikáció.
- **ADR:** Egy-egy fontos architekturális döntés rögzítése.
- **ASR:** Olyan követelmény, ami lényegesen befolyásolja az architektúrát.
- **Architekturális karakterisztika (AC):** A rendszer minőségi jellemzője.
- **C4 modell:** A rendszer bemutatása kontextus/konténer/komponens szinteken.
- **LikeC4:** A C4 diagramok kódból generálható megközelítése.

### Domain- és szerepfogalmak

- **Community Choice:** A ZDR program közösségi ötletpályázat és szavazás platformja.
- **ZDR:** Zamunda Digitális Reneszánsz – állami digitális transzformációs program.
- **Lakos / Felhasználó:** Zamunda állampolgára.
- **Vendég:** Bejelentkezés nélküli felhasználó.
- **Adminisztrátor:** Önkormányzati munkatárs.
- **Super user:** Kiemelt jogosultságú szerep.
- **Önkormányzat:** A platform szervezeti hatóköre.
- **Pályázat / Kampány:** Az ötletbeküldés és szavazás időablakokkal definiált egysége.
- **Életciklus (pályázat/ötlet):** Állapotok és átmenetek rendszere.
- **Ötlet (probléma–megoldás pár):** A lakos által beküldött javaslat.
- **Szavazat:** Egy felhasználó döntése egy ötlet támogatásáról.

### Minőségi jellemzők

- **Hatékonyság:** Klímabarát, sávszélesség-takarékos működés.
- **Integritás:** Szavazatok megmásíthatatlansága.
- **Robusztusság:** Hibatűrés instabil hálózaton.
- **Elaszticitás:** Célzott fel- és visszaskálázás.

### Architekturális stílusok és minták

- **Hibrid SBA + EDA:** Service-Based Architecture + Event-Driven Architecture.
- **SBA:** Kevés, jól körülhatárolt, önállóan futtatható szolgáltatás, közös relációs adatbázissal.
- **EDA:** Események publikálása és aszinkron fogyasztása üzenetbrókeren keresztül.
- **Domain esemény:** Üzleti jelentésű történés.
- **Transactional outbox / Outbox minta:** DB-tranzakció és eseménypublikálás konzisztens összekötése.
- **Outbox relay worker:** Dedikált háttérfolyamat az outbox tábla olvasására.

### Adatkezelés, biztonság, integritás

- **Zamunda One:** Külső azonosító/lakcím-ellenőrző szolgáltatás.
- **Jogosultsági pillanatkép (Eligibility Snapshot):** Időben befagyasztott autorizációs állapot.
- **Pszeudonimizálás:** Személyes azonosítók helyettesítése visszafejtés nélkül nem egyértelmű kulccsal.
- **Pepper, HMAC secret, HKDF, KMS, Vault Transit:** Kulcskezelési és titkosítási fogalmak.
- **Szavazati tranzakciónapló:** Csak hozzáfűzhető szavazati tároló.
- **Particionálás:** Nagy táblák logikai/fizikai felosztása.

### Infrastruktúra

- **PostgreSQL:** Elsődleges relációs adatbázis.
- **NATS JetStream:** Induló, takarékos brokerprofil.
- **Apache Kafka:** Országos/nagy audit-replay profil.
- **PgBouncer:** PostgreSQL connection pooler.
- **API Gateway, BFF:** Perem- és alkalmazási belépési pontok.

---

## 4. SRS (srs.mdx)

**Verzió:** 1.4 (legutóbbi frissítés: 2026-05-18)

### 1. Bevezetés

#### 1.1. Cél

A Zamunda Community Choice platform első verziójának követelményei: lakossági portál, adminisztrációs felület, szavazás, ötletbeküldés, médiafeltöltés, Zamunda One integráció.

#### 1.3. Célközönség

Fejlesztői, tervezői, üzemeltetési és értékelői szerepkörök.

#### 1.4. Termékkör

Helyi közösségi fejlesztési ötletek kezdeményezése, beküldése, életciklus-kezelése és hitelesített lakcímhez kötött szavazás. Illeszkedés a ZDR alapelveihez: dokumentálhatóság, takarékos és klímabarát működés, alacsony sávszélességű használhatóság.

### 2. Átfogó leírás

#### 2.2. Termékfunkciók

- Önkormányzati ötletpályázatok létrehozása és életciklus-kezelése.
- Ötletek beküldése probléma-megoldás párok formájában.
- Fotó- és videómellékletek feltöltése, optimalizálása, kiszolgálása.
- Ötletek adminisztratív kezelése és közzététele.
- Publikus böngészés.
- Hitelesített, állandó lakcímhez kötött szavazás.
- Transzparens életciklus-megjelenítés.

#### 2.3. Felhasználói osztályok

Super user, Közigazgatási adminisztrátor, Szavazó / lakos, Vendég.

#### 2.5. Tervezési és implementációs korlátok

- Zamunda One autentikáció és lakcím-alapú autorizáció.
- GDPR-szerű adatkezelési alapelvek.
- Szavazati rekordok nem tartalmazhatnak nyers személyes azonosítót.
- Lakcímváltozások kezelése jogosultsági pillanatképpel.
- Szavazatok utólagos módosítása/törlése tiltott.
- Médiatartalmaknál sávszélesség- és tárhelytakarékos formátumok.
- Dedikált API Gateway a publikus backend előtt.
- Transactional outbox + outbox relay a szavazási auditfolyamban.
- Védett kulcskezelés a hash képzéséhez; rövid élettartamú kampánykulcs a szavazási útban.
- PostgreSQL írási út PgBouncer + particionálás védelemmel.

### 3. Külső interfészkövetelmények

#### 3.1. Felhasználói interfészek

Publikus portál, Lakossági vezérlőpult, Közigazgatási panel.

#### 3.3. Szoftverinterfészek

Zamunda One API az autentikációhoz és a lakcím-ellenőrzéshez; szükség van a lakcím utolsó módosítási dátumára/időbélyegére.

#### 3.4. Kommunikációs interfészek

- HTTPS kommunikáció.
- API Gateway TLS terminációval, routinggal, rate limitinggel, JWT elővalidálással.
- Tömörített API-válaszok.
- E-mail és push notification értesítések.
- Hibatűrő médiafeltöltés.
- Aszinkron kommunikáció tartós event streamen (NATS JetStream / Kafka).

### 4. Rendszerfunkciók

#### 4.1. Pályázatkezelés

Életciklus állapotok: `tervezes_alatt` → `otletbekuldes` → `szavazas` → `lezart` → `kiertekeles` → `megvalositas_alatt` → `megvalositva`.

Funkcionális követelmények: F-PK-01-től F-PK-04-ig.

#### 4.2. Ötletbeküldés multimédiás támogatással

Funkcionális követelmények: F-OB-01-től F-OB-05-ig. Strukturált űrlap, kép- és videófeltöltés, szerveroldali optimalizálás, egy ötlet/pályázat korlátozás.

#### 4.3. Hitelesített szavazási modul és lakcím-alapú szűrés

Funkcionális követelmények: F-SZ-01-től F-SZ-07-ig.

Kulcspontok:
- Zamunda One integráció autentikációhoz és autorizációhoz.
- Jogosultsági pillanatkép alapú szűrés.
- Egy ötletre egy szavazat.
- Szavazatok utólagos módosításának és törlésének tiltása.
- Pszeudonimizált szavazói kulcs.
- Transactional outbox + outbox relay az audit/integrációs eseményekhez.
- Védett HMAC-kal képzett felhasználóazonosító-hash a `campaign_eligibility` táblában.

### 5. Egyéb nemfunkcionális követelmények

#### 5.1. Teljesítmény

- FCP ≤ 1,8 mp (75. perc., átlagos hálózat).
- Alacsony sávszélességen első tartalmi elemek ≤ 5 mp.
- Listaoldal válaszméret ≤ 100 KB.
- Automatikus képoptimalizálás (cél: ≤ 70% eredeti méret).

#### 5.3. Biztonság

- Csak hitelesített felhasználó szavazhat.
- Jogosultsági pillanatkép alapú hozzáférés-korlátozás.
- Szavazatok módosítása/törlése tiltott.
- Pszeudonimizált szavazói kulcs.
- Védett kulcskezelés (KMS/Vault Transit).
- API Gateway védelem.

#### 5.4. Szoftverminőségi attribútumok

Elérhetőség, hatékonyság, integritás, auditálhatóság, biztonság, robusztusság, használhatóság, akadálymentesség, bővíthetőség, elaszticitás, skálázhatóság, karbantarthatóság.

#### 5.5. Üzleti szabályok

BR-1-től BR-8-ig: jogosultsági körzetek, egy ötlet/pályázat, egy szavazat/ötlet, szavazatszám titkossága eredményhirdetésig, lakcímváltozás kezelése.

---

## 5. C4 modell (architektura/c4-modell.mdx)

A Community Choice platform architektúráját a C4 modell szintjein keresztül mutatja be.

### Rendszerkörnyezeti diagram

Megmutatja a felhasználókat és a külső rendszereket (Zamunda One).

### Konténerdiagram Áttekintő

Webes felületek, API Gateway, NestJS BFF, két fő domain szolgáltatás, adattárolók, tartós event streamek, háttérfogyasztók. A logikai streamek jelennek meg, nem maga a bróker.

### Szavazási integritás és audit eseménykibocsátás

Fókusznézet a szavazás kritikus integritási láncáról: egy PostgreSQL tranzakcióban szavazati rekord + outbox esemény; outbox relay worker publikál a `vote-cast-events` streambe.

### Médiafeltöltés és Feldolgozás

Presigned S3-kompatibilis feltöltési URL, közvetlen objektumtárba töltés, majd objektumhivatkozás + metaadat a médiafeldolgozási streambe.

### Komponensdiagramok

- **Szavazási szolgáltatás:** Zamunda One kliens, Jogosultságkezelő, pszeudonimizált szavazói kulcs képzése, PostgreSQL append-only tárolás, outbox esemény.
- **Pályázat- és adminisztrációkezelő szolgáltatás:** Pályázatok életciklusa, presigned URL kiadás, ötlet- és média-metaadatok mentése, feldolgozási esemény küldése.
- **Médiafeldolgozó háttérfolyamat:** Eseményvezérelt képek és videók tömörítése.

---

## 6. Architekturális karakterisztikák (architektura/karakterisztikak.md)

### Hatékonyság

- Klímabarát és sávszélesség-takarékos technológiák.
- Alacsony sávszélességű böngészés: listaoldal ≤ 100 KB, első tartalmi elemek ≤ 5 mp.

### Integritás

- Szavazatok megmásíthatatlansága.
- Duplikáció kizárása adatbázis-szintű garanciákkal.
- Audit esemény nem veszhet el brokerhiba esetén (transactional outbox).

### Robusztusság

- Megszakadó médiafeltöltés kezelése: darabolt, folytatható, presigned S3 URL.
- Médiafeldolgozás hibája nem akadályozza a szavazást.

### Elaszticitás

- Szavazási hajrá csúcsterhelés: csak a Szavazási szolgáltatás skálázódik.
- PgBouncer + particionálás védi a PostgreSQL írási utat.
- Audit/értesítés/médiafeldolgozás aszinkron event streamen.

---

## 7. Architekturális stílus választása (architektura/stilusvalasztas.md)

### Elvetett stílusok

- **Layered / Pipeline:** Technológiailag particionált, alacsony elaszticitás.
- **Microkernel:** Nem illeszkedik a platform jellegéhez.
- **Space-Based:** Drága üzemeltetés, ütközik a megmásíthatatlan szavazatokkal.
- **Microservices:** Drága, energiaigényes, ellentétes a takarékossági ASR-rel.
- **SOA:** Túl monolitikus, elavult.

### Döntős stílusok

- **Moduláris monolit (2. helyezett):** Költséghatékony, de az elaszticitás és robusztusság miatt elvetve.
- **EDA (kiegészítő stílus):** Médiafeldolgozás, értesítések, auditnaplózás – aszinkron eseményvezérelten.

### Győztes: Hibrid SBA + EDA

1. **Célzott Elaszticitás:** Szavazási csúcsban csak a Szavazási szolgáltatás skálázható.
2. **Közös adatbázis = Maximális adatintegritás:** Adatbázis-szintű tranzakciók és triggerek.
3. **Kiváló Robusztusság:** Presigned URL + aszinkron médiafeldolgozás.
4. **Egyszerűsített üzemeltetés:** Kevesebb deployment unit.

Üzemeltetési szintlépések: transactional outbox, dedikált kulcskezelés, campaign_eligibility pillanatkép, PgBouncer + particionálás, többprofilú broker, API Gateway.

---

## 8. Architekturálisan szignifikáns követelmények (architektura/szignifikans-kovetelmenyek.md)

### ZDR általános követelmények

**Takarékosság és klímabarát működés:** Szerveroldali energiafogyasztás és hálózati sávszélesség minimalizálása.

### Minőségi jellemzők

Hatékonyság, Integritás, Robusztusság, Elaszticitás.

### ASR-ek

- **F-OB-02 és F-OB-03 (Multimédia feltöltés és automatikus tömörítés):** Robusztus, darabolt, folytatható objektumtár-alapú feltöltés; aszinkron háttérfolyamat a tömörítéshez; nyers és optimalizált média külön objektumtárban.
- **F-SZ-03, F-SZ-04 és F-SZ-05 (Egyedi, megváltoztathatatlan és pszeudonimizált szavazatok):** Adatbázis-szintű egyediségi constraint; append-only tárolás; pszeudonimizált szavazói kulcs; jogosultsági pillanatkép; transactional outbox; védett kulcskezelés; PgBouncer + particionálás; API Gateway.

---

## 9. ADR-001: Hibrid architektúra

**Státusz:** Aktív

**Döntés:** Hibrid architektúra, amely ötvözi az SBA-t és az EDA-t. Az SBA a szavazási, kampány- és adminisztrációs szolgáltatásokat fedi le, az EDA az értesítési, analitikai és audit komponenseket.

**Elért eredmények:** Minden komponens a saját igényeinek legjobban megfelelő stílust kapja. A szinkron, adatintegritást igénylő folyamatok az SBA erős konzisztencia-garanciái mögé kerülnek. Az aszinkron folyamatok az EDA révén lazán csatolt csatornákon futnak.

**Elfogadott hátrányok:** Két stílus együttes kezelése növeli a komplexitást. Eltérő technológiai stackek lehetnek szükségesek. Magasabb rendszerismeret kell a hibakereséshez.

---

## 10. ADR-002: Service-Based Architecture

**Státusz:** Aktív

**Döntés:** SBA néhány jól körülhatárolt, önállóan deployolható domain-szolgáltatással, egyetlen közös PostgreSQL adatbázison.

**Elért eredmények:** Célzott skálázhatóság (csak a Szavazási szolgáltatást kell skálázni csúcsban). Adatbázis-szintű tranzakciók garantálják a szavazatok megmásíthatatlanságát. Alacsony üzemeltetési komplexitás. PgBouncer + particionálás védi a PostgreSQL-t.

**Elfogadott hátrányok:** Közös adatbázis szorosabb adatkapcsolás. Deployment önállósága korlátozott. Hibaizoláció gyengébb, mint microservicesnél. PostgreSQL írási kapacitása nem lineárisan skálázódik.

---

## 11. ADR-003: Event-Driven Architecture

**Státusz:** Aktív

**Döntés:** EDA tartós, visszajátszható event streamekkel. A Pályázat- és adminisztrációkezelő szolgáltatás domain eseményeket bocsát ki kampány- és médiafeldolgozási streamekbe. A Szavazási szolgáltatás outbox eseményt ír PostgreSQL tranzakcióban, outbox relay worker publikálja.

**Elért eredmények:** Értesítési és Auditnaplózó szolgáltatás hibája nem gyűrűzik vissza a szavazásba. Event stream audit/integrációs célú, a PostgreSQL az elsődleges igazságforrás. Visszajátszhatóság. Új fogyasztók könnyen csatlakoztathatók.

**Elfogadott hátrányok:** Eventual consistency. Elosztott hibakeresés összetettebb. Esemény-séma evolúció körültekintést igényel.

---

## 12. ADR-004: Többprofilú event stream és üzenetbroker döntés

**Státusz:** Aktív

**Döntés:** Többprofilú broker-döntés:
- **Induló, takarékos profil:** NATS JetStream.
- **Országos/nagy audit-replay profil:** Apache Kafka.
- **Szavazási auditfolyam:** induló profilban transactional outbox + outbox relay NATS JetStreambe.

**Mérlegelt jelöltek:** RabbitMQ, Redis Streams, pgmq, NATS JetStream, Apache Kafka.

**Elért eredmények:** Visszajátszhatóság. Több független fogyasztó párhuzamosan olvas. Induló profil nem kényszerít Kafka klasztert. PostgreSQL megtartható elsődleges tranzakciós adattárnak.

**Elfogadott hátrányok:** Két profil dokumentálása. Eltérő fogalmak, kliensek, metrikák. Saját outbox relay worker fejlesztése. Kafka üzemeltetése összetettebb.

---

## 13. ADR-005: Szavazatok integritása és pszeudonimizált tárolása

**Státusz:** Aktív

**Döntés:** PostgreSQL-alapú, csak hozzáfűzhető szavazati tranzakciónapló pszeudonimizált szavazói kulccsal. HMAC-alapú `voter_key` képzés. `UNIQUE` constraint a duplikáció ellen. UPDATE/DELETE tiltás adatbázis-szinten. Jogosultsági pillanatkép a kampány közbeni lakcímváltozások kezelésére.

**Mérlegelt alternatívák:** Nyers Zamunda One ID tárolása, teljes anonimitás, minden kérésnél aktuális lakcím alapján döntés, titkosított nyers azonosító, salted hash.

**Elért eredmények:** Duplikáció kizárása adatbázis-szinten védett. Lakcímváltozás nem eredményez új jogosultságot. Szavazatok megváltoztathatatlansága. Személyazonosság védelme.

**Elfogadott hátrányok:** Pszeudonimizálás, nem teljes anonimitás. Függőség a Zamunda One adataitól. Külön migrációs szabályok a `campaign_eligibility` táblához. Kulcskezelés kritikus felelősség.

---

## 14. ADR-006: Transactional outbox és outbox relay a szavazási auditfolyamhoz

**Státusz:** Aktív

**Döntés:** Transactional outbox minta. Szavazati rekord és outbox esemény egy PostgreSQL tranzakcióban. Dedikált outbox relay worker `SELECT ... FOR UPDATE SKIP LOCKED` stratégiával publikál NATS JetStreambe. Idempotens fogyasztók.

**Mérlegelt alternatívák:** Közvetlen broker-publikálás, szinkron auditnaplózó hívás, csak adatbázis audit trigger, későbbi Debezium/WAL-CDC profil.

**Elért eredmények:** Atomi egységként jön létre a szavazati rekord és az outbox. Brokerhiba esetén az outbox relay később publikál. Audit és értesítés nem kerül a szinkron kritikus útba. Integritási garancia külön connector-platform nélkül.

**Elfogadott hátrányok:** Saját relay komponens fejlesztése. Duplikátumtűrő fogyasztók szükségesek. Outbox backlog monitorozása.

---

## 15. ADR-007: HMAC kulcskezelés Vault Transit és rövid élettartamú kampánykulcsok alapján

**Státusz:** Aktív

**Döntés:** HashiCorp Vault Transit a jogosultsági HMAC titok védésére. Nyers Zamunda One ID csak a pillanatkép létrehozásakor kezelve, utána Vault Transit HMAC API hívás. Kampány-mesterkulcsok KMS/Vault Transitben. Rövid élettartamú operatív HMAC kulcs a pod memóriájában a szavazási úthoz. Minden kampány saját kulcsot/kulcsverziót kap.

**Mérlegelt alternatívák:** Statikus `.env` secret, CI/CD secret, adatbázisban tárolt kulcs, alkalmazásmemóriában tartott titok, per-request Vault Transit.

**Elért eredmények:** HMAC titok nem kerül alkalmazásmemóriába. `campaign_eligibility` determinisztikus hash-sel dolgozik. HMAC a szavazási útban lokális CPU művelet. Kampányonkénti kulcs korlátozza a szivárgás hatókörét. Auditálható kulcskiadás és rotáció.

**Elfogadott hátrányok:** Jogosultsági snapshot létrehozása szinkron Vault Transit függőség. KMS rendelkezésre állás kritikus induláskor. Memóriakezelési implementációs fegyelem. Circuit breaker és retry stratégia szükséges.

---

## 16. ADR-008: PostgreSQL írási út védelme PgBouncerrel és particionálással

**Státusz:** Aktív

**Döntés:** PgBouncer kötelező használata. Szolgáltatásonként külön, limitált pool konfiguráció. Szavazati tranzakciónapló és `campaign_eligibility` `campaign_id` szerint natívan particionált. `UNIQUE(campaign_id, idea_id, voter_key)` constraint.

**Mérlegelt alternatívák:** Csak alkalmazásszintű connection pool, particionálás nélküli nagy tábla, teljesen külön adatbázis szavazáshoz.

**Elért eredmények:** Hirtelen HTTP kérések nem nyitnak aránytalanul sok PostgreSQL kapcsolatot. Aktív kampányok adatai kisebb indexekbe íródnak. Kampány szerinti particionálás.

**Elfogadott hátrányok:** Transaction pooling korlátai. Particionálás migrációs fegyelmet igényel. PostgreSQL írási szűk keresztmetszet marad (tudatos SBA trade-off).

---

## 17. ADR-009: Dedikált API Gateway a NestJS BFF előtt

**Státusz:** Aktív

**Döntés:** Dedikált API Gateway réteg a webes kliensek és a NestJS BFF/domain API-k elé. Implementációfüggetlen: Traefik, Nginx, Kong, vagy felhős natív megoldás. Gateway felelőssége: TLS termináció, routing, request size limitek, rate limiting, DDoS/abuse szűrés, JWT elővalidálás.

**Mérlegelt alternatívák:** NestJS közvetlen internetes belépési pontként, gateway és BFF összevonása, felhőspecifikus API Gateway kötelezővé tétele.

**Elért eredmények:** Node.js/NestJS réteg előszűrt kéréseket kap. TLS és peremvédelmi szabályok központilag konfigurálhatók. Egységes API belépési pont.

**Elfogadott hátrányok:** Gateway külön komponensként üzemeltetendő. JWT elővalidálás csak formai ellenőrzés. Rate limiting szabályok összehangolása szükséges.

---

## 18. ADR-010: Campaign Eligibility mint aszinkron kiértékelt, megváltoztathatatlan pillanatkép

**Státusz:** Aktív

**Döntés:** `campaign_eligibility` önálló, megváltoztathatatlan jogosultsági pillanatképként. Prediktív aszinkron kiértékelés (batch ingestion) a kampány indulása előtt (pl. T-24 óra). Horizontális particionálás `campaign_id` alapján. Kompozit index `(campaign_id, user_id_hash)`. Lakcím-módosítási dátum ellenőrzése.

**Mérlegelt alternatívák:** Valós idejű PostGIS kiértékelés bejelentkezéskor, jogosultság kódolása JWT tokenbe, lusta kiértékelés fő stratégiaként.

**Elért eredmények:** O(1) olvasási teljesítmény. Auditálhatóság és időbeli konzisztencia. Zamunda One IdP tehermentesítése. Adatminimalizálás (PostGIS komplexitás aszinkron rétegbe zárva).

**Elfogadott hátrányok:** Adminisztratív cut-off időszak a kampány előtt. Dedikált manuális felülbírálati végpont szükséges. Robusztus ETL infrastruktúra igénye.
