---
title: Fogalomtár
description: A Community Choice dokumentációban használt fogalmak, rövid kontextussal
---

A fogalomtár célja, hogy a dokumentációban előforduló szakszavakat és rövidítéseket egységesen értelmezze. A definíciók **rövid, projekt-specifikus kontextust** adnak (nem általános enciklopédia-szócikkek).

## Dokumentum- és modellezési fogalmak

- **SRS (Software Requirements Specification):** A rendszer követelményeit összefoglaló specifikáció (funkcionális és nem-funkcionális elvárások).
- **ADR (Architecture Decision Record):** Egy-egy fontos architekturális döntés rögzítése (kontekstus, döntés, következmények).
- **ASR (Architecturally Significant Requirement):** Olyan követelmény, ami lényegesen befolyásolja az architektúrát (pl. megmásíthatatlan szavazat, aszinkron médiafeldolgozás).
- **Architekturális karakterisztika (AC):** A rendszer minőségi jellemzője, amely mentén az architektúrát optimalizáljuk (pl. Hatékonyság, Integritás).
- **C4 modell:** A rendszer bemutatása kontextus/konténer/komponens szinteken, a kommunikáció és felelősségek tisztázására.
- **LikeC4:** A C4 diagramok kódból generálható/leírható megközelítése; a dokumentációban beágyazott nézetek forrása.

## Domain- és szerepfogalmak

- **Community Choice:** A Zamunda Digitális Reneszánsz program „közösségi ötletpályázat és szavazás” platformja.
- **ZDR (Zamunda Digitális Reneszánsz):** Az állami digitális transzformációs program, amely klímabarát és takarékos működést is elvár.
- **Lakos / Felhasználó:** Zamunda állampolgára, aki ötletet küld be és/vagy szavaz.
- **Vendég:** Bejelentkezés nélküli felhasználó; csak publikus tartalmat lát, nem szavazhat és nem küldhet be ötletet.
- **Adminisztrátor:** Önkormányzati munkatárs; pályázatot kezel, ötletek publikálásáról dönt.
- **Super user:** Kiemelt jogosultságú (tipikusan fejlesztői/üzemeltetői) szerep, aki admin jogosultságokat oszt.
- **Önkormányzat:** A platform szervezeti „hatóköre”; a lakcím-alapú jogosultság önkormányzathoz köt.
- **Pályázat / Kampány:** Az ötletbeküldés és szavazás időablakokkal definiált egysége, saját életciklussal (nyitott/szavazás/lezárt).
- **Életciklus (pályázat/ötlet):** Állapotok és átmenetek rendszere (pl. ötletbeküldési szakasz → szavazási szakasz → lezárt).
- **Ötlet (probléma–megoldás pár):** A lakos által beküldött javaslat, amelyhez szöveg és multimédia (kép/videó) is tartozhat.
- **Szavazat:** Egy felhasználó döntése egy ötlet támogatásáról; projektkövetelmény, hogy utólag ne módosítható és ne törölhető legyen.

## Minőségi jellemzők (a projektben kiemeltek)

- **Hatékonyság:** Klímabarát, sávszélesség-takarékos és erőforrás-hatékony működés (kliens- és szerveroldalon).
- **Integritás:** A szavazatok és szabályok megmásíthatatlansága és technológiai védelme (pl. duplikáció kizárása, UPDATE/DELETE tiltás).
- **Robusztusság:** Hibatűrés instabil hálózaton és csúcsidőben (pl. folytatható feltöltés, cache, aszinkron feldolgozás).
- **Elaszticitás:** Célzott fel- és visszaskálázás a terhelési csúcsokra (különösen a szavazási határidő előtt).

## Architekturális stílusok és minták

- **Hibrid SBA + EDA:** A rendszer alapja Service-Based Architecture, kiegészítve Event-Driven elemekkel az aszinkron feladatokra (értesítés, audit, médiafeldolgozás).
- **SBA (Service-Based Architecture):** Kevés, jól körülhatárolt, önállóan futtatható szolgáltatás, jellemzően közös relációs adatbázissal.
- **EDA (Event-Driven Architecture):** Események publikálása és aszinkron fogyasztása üzenetbrókeren keresztül, laza csatolással.
- **Moduláris monolit:** Egy deploy egység, belső modulokra bontva; költséghatékony, de elaszticitásban korlátos.
- **Microservices:** Sok, kisméretű, függetlenül deployolható szolgáltatás; itt a takarékossági/klímabarát követelmények miatt elvetett.
- **Layered / Pipeline / Microkernel / Space-Based:** Mérlegelt, de a projekt céljaival (elaszticitás, integritás, költség) ütköző stílusok a dokumentáció indoklása szerint.
- **Domain esemény (domain event):** Üzleti jelentésű történés (pl. „szavazat leadva”), amelyet a szolgáltatások publikálnak az aszinkron feldolgozáshoz.
- **Worker (háttérfolyamat):** Aszinkron feldolgozó komponens (pl. videótömörítés), amely eseményeket fogyaszt és CPU-intenzív munkát végez.
- **Outbox minta (outbox pattern):** Megközelítés a DB-tranzakció és az eseménypublikálás konzisztens összekötésére (pl. PostgreSQL ↔ Kafka), ha a megbízható eseménykibocsátás kritikus.

## Adatkezelés, biztonság, integritás

- **Zamunda One:** Külső azonosító/lakcím-ellenőrző szolgáltatás; autentikációhoz és autorizációhoz kötelező integráció.
- **Autentikáció:** A felhasználó azonosítása (bejelentkezés), a Zamunda One-on keresztül.
- **Autorizáció:** Jogosultság-ellenőrzés (pl. lakcím alapján szavazhat-e az adott önkormányzatban).
- **GDPR:** Adatvédelmi megfelelési keret; a dokumentációban személyes adatok minimalizálásával és pszeudonimizálással kapcsolódik.
- **Pszeudonimizálás:** Személyes azonosítók helyettesítése visszafejtés nélkül nem egyértelmű kulccsal; itt a duplikáció-ellenőrzés mellett védi a szavazók személyazonosságát.
- **HMAC secret:** Titok, amellyel determinisztikus pszeudonim (`voter_key`) képezhető; üzemeltetésileg kiemelten védendő.
- **Szavazati tranzakciónapló:** Csak hozzáfűzhető szavazati tároló; UPDATE/DELETE tiltással támogatja a megmásíthatatlanságot.
- **UNIQUE constraint:** Adatbázis-szintű egyediségi szabály; itt a „egy ötletre egy szavazat” követelmény technológiai garanciája.
- **Tranzakció:** Adatbázis-műveletek atomi egysége; a szavazat rögzítése szinkron, tranzakcióban történik.
- **Eventual consistency:** Aszinkron feldolgozásból adódó késleltetett konzisztencia; pl. auditnaplóba kerülés nem azonnali.

## Integráció és kommunikáció (protokollok, API-k)

- **RESTful API:** A kliens és backend közti, HTTP-alapú, erőforrás-orientált API stílus; üzenetformátum jellemzően JSON.
- **JSON:** Szöveges adatcsere-formátum; az API válaszok payloadját tömöríteni kell.
- **HTTP/HTTPS:** Kliens–szerver kommunikáció alapja; a dokumentáció biztonságos (HTTPS) integrációt feltételez.
- **HTTP/2:** Multiplexálás és hatékonyabb kapcsolatkezelés, különösen magas késleltetésnél.
- **HTTP/3 / QUIC:** UDP-alapú, késleltetésre érzékeny környezetben előnyös protokoll, alternatíva HTTP/2 helyett.
- **Chunked upload (darabolt feltöltés):** Feltöltés részekre bontva, hogy megszakadás után folytatható legyen.
- **Presigned upload URL:** Időben és jogosultságban korlátozott objektumtár-feltöltési URL, amellyel a kliens közvetlenül S3-kompatibilis bucketbe tölthet nagy médiafájlt.
- **S3-kompatibilis multipart upload:** Objektumtár-alapú, darabolt és folytatható feltöltési mechanizmus nagy fájlokhoz.
- **OAuth 2.0 (jellegű):** Várható token-alapú bejelentkezési/engedélyezési megoldás a Zamunda One integrációhoz (a konkrét specifikáció TBD).

## Teljesítmény és kliensoldali optimalizálás

- **FCP (First Contentful Paint):** Percek helyett másodperc-alapú UX-metrika; a dokumentáció 75. percentilisre célértéket ad.
- **Lazy loading:** Képek/videók késleltetett betöltése a fölös hálózati forgalom csökkentésére.
- **PWA (Progressive Web App):** Böngésző-cache és offline képességek; a dokumentáció gyorsítótárazási stratégiaként említi.
- **Cache-Control:** HTTP fejlécek a kliensoldali gyorsítótárazás vezérlésére.

## Infrastruktúra és tárolók

- **PostgreSQL:** Elsődleges relációs adatbázis; a szavazatok igazságforrása és integritás-garanciáinak helye.
- **Redis / Memcached:** Szerveroldali memóriagyorsítótár jelöltek; a dokumentáció publikus, ritkán változó adatok cache-elésére említi.
- **CDN (Content Delivery Network):** Opcionális multimédia gyorsítóréteg; csökkentheti az origin terhelést és a hálózati költséget, ha a forgalmi adatok indokolják.
- **Edge caching:** CDN peremcsomópontokon történő cache-elés; alacsony sávszélesség és magas késleltetés mellett hasznos lehet.
- **Apache Kafka:** Eseményfolyam-platform; itt audit/integrációs célú, tartósan megőrzött domain eseményekkel.
- **Topic:** Kafka logikai csatorna az események számára (pl. „vote-cast” jellegű események).
- **Partition:** Kafka topic felosztása párhuzamos feldolgozásra és skálázásra.
- **Consumer group:** Fogyasztók csoportja, amely együtt olvas egy topicot úgy, hogy egy partíciót egyszerre csak egy consumer kezeljen.
- **Offset:** A consumer által olvasott pozíció; visszatekerhető a visszajátszáshoz (audit/újrafeldolgozás).
- **KRaft:** Kafka beépített konszenzus/metadata rétege (ZooKeeper nélkül); üzemeltetési fogalom az ADR-ben.
- **RabbitMQ:** Alternatív üzenetközvetítő jelölt; a dokumentáció szerint visszajátszható, tartós eseménytörténethez kevésbé illeszkedik.
- **Redis Streams:** Alternatív streaming jelölt; könnyűsúlyú, de nagy volumenű tartós eseménytárolásra kevésbé optimális.
- **pgmq:** PostgreSQL-re épülő üzenetsor; takarékos alternatíva lehet kisebb event volume mellett, de a tranzakciós adatbázis felelősségét növeli.

## Multimédia és formátumok

- **WebP:** Képtömörítési formátum; a dokumentáció sávszélesség/energia miatt preferálja.
- **WebM:** Videóformátum; a dokumentáció szerveroldali konverziót említ optimalizálási céllal.
