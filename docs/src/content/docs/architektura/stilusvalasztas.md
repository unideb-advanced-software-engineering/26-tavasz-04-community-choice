---
title: Architekturális stílus választása
description: A Community Choice rendszer architekturális stílusának indoklása
---

## Bevezetés

A Zamunda Community Choice (ZDR) rendszer tervezése során Mark Richards és Neal Ford *Fundamentals of Software Architecture* című könyvének módszertanát követtük. A döntésünket az előzetesen meghatározott architekturális karakterisztikák (Elaszticitás, Hatékonyság, Robusztusság, Integritás) és a szignifikáns követelmények (Takarékosság, megmásíthatatlan szavazatok, aszinkron médiafeldolgozás) vezérelték.

---

## 1. Elvetett architekturális stílusok és az elvetés okai

A mérlegelés első körében az alábbi stílusokat azonnal elvetettük, mivel alapvetően ellentmondanak a projekt céljainak:

* **Rétegelt (Layered) és csővezetékes (Pipeline) architektúra:** Ezek technológiailag particionált stílusok, amelyeknél a kód rétegekbe (megjelenítés, üzleti logika, adatbázis) van szervezve. Bár az indulás olcsó, a módosítások nehézkesek, és az elaszticitásuk rendkívül alacsony.
* **Mikromag-architektúra (Microkernel):** Bár jó kiegészítő rendszerekhez, a mi platformunk nem egy alaprendszerre és bővítményekre épülő architektúrát igényel.
* **Space-Based architektúra:** Bár az elaszticitása és a teljesítménye maximális a memóriában végzett feldolgozás miatt, az üzemeltetése méregdrága, ráadásul az *F-SZ-04 (Megmásíthatatlan szavazatok)* szigorú, csak hozzáfűzhető adatintegritási igényeivel nehezen vagy csak komoly tranzakciós kompromisszumokkal lenne összeegyeztethető.
* **Mikroszolgáltatás-architektúra (Microservices):** Bár divatos és extrém jól skálázható, a ZDR klímabarát és takarékossági ASR-jeivel teljesen ellentétes. A mikroszolgáltatások hálózati többletterhelése, a komplex üzemeltetés és az elosztott tranzakciók kezelése indokolatlanul drágává és energiaigényessé tenné a projektet.
* **Szolgáltatásorientált architektúra (SOA):** Túl monolitikus, elavult.

---

## 2. A döntős stílusok elemzése

A projekt igényei alapján három stílus maradt: a **moduláris monolit**, a **szolgáltatásalapú architektúra (Service-Based Architecture, SBA)** és az **eseményvezérelt architektúra (Event-Driven Architecture, EDA)**.

### 2.1. Második helyezett: Moduláris monolit

* **Miért merült fel?** Nagyon költséghatékony (Takarékosság ASR), és egyszerű üzemeltetni. Egyetlen közös adatbázisa van, ami jelentősen megkönnyíti a szavazatok relációs integritásának védelmét.
* **Miért vetettük el (részben)?** Az *Elaszticitás* és a *Robusztusság* AC-k miatt bukik el. A kampányok utolsó napján a szavazási forgalom ugrásszerűen megnő. Egy monolit esetében ilyenkor a *teljes* alkalmazást replikálni kellene a szervereken, ami pazarló, rengeteg felesleges memóriát és CPU-t foglal, így sérti a **Klímabarát/Takarékos** működés elvét. Emellett a moduláris monolit futásidőben továbbra is egyetlen nagy deployment unit, tehát érdemi single point of failure: ha ez a folyamat vagy környezet kiesik, a publikus böngészés, szavazás, adminisztráció és háttérfeldolgozás egyszerre sérülhet.

### 2.2. Kiegészítő stílus: Eseményvezérelt architektúra (EDA)

* **Miért merült fel?** Kiváló a reszponzivitása és a robusztussága.
* **Mire használjuk?** A teljes rendszert nem építjük erre, mert a szavazás (F-SZ-04) azonnali, szinkron adatbázis-választ igényel. Ugyanakkor három területen **kizárólag eseményvezérelten (Event-Driven)** valósítható meg hatékonyan a funkció:
  * **Médiafeldolgozás (*Pályázat- és adminisztrációkezelő szolgáltatás*):** Amikor egy lakos feltölt egy videót, a fájl közvetlenül objektumtárba kerül, a rendszer pedig csak objektumhivatkozást és metaadatot küld egy médiafeldolgozási streambe. Így a videótömörítés nem akasztja meg a webes/szavazó szálakat, és az event stream sem szállít nagy bináris állományokat.
  * **Értesítések (*Értesítési szolgáltatás*):** Kampányállapot-változáskor (pl. pályázat lezárása, eredményhirdetés) a rendszer domain eseményeket bocsát ki, amelyeket az Értesítési szolgáltatás aszinkron fogyaszt és kézbesíti az érintett lakosoknak. Az értesítés küldése nem lehet a szavazási kérés kritikus útján.
  * **Auditnapló (*Auditnaplózó szolgáltatás*):** Minden szignifikáns domain esemény (szavazat leadása, ötlet beküldése, adminisztrátori beavatkozás) egy megváltoztathatatlan eseménynaplóba kerül. Az Auditnaplózó szolgáltatás ezeket az eseményeket aszinkron fogyasztja, így az auditnaplózás semmilyen körülmények között nem lassítja a felhasználói kérések kiszolgálását.

Fontos: a szavazás elsődleges, erős konzisztenciát igénylő része nem eseményvezérelt módon „épül fel”, hanem a *Szavazási szolgáltatás* szinkron PostgreSQL tranzakcióban rögzíti a szavazatot egy csak hozzáfűzhető szavazati tranzakciónaplóban. Ugyanebben a tranzakcióban outbox esemény is készül, amelyet az induló takarékos profilban saját outbox relay worker juttat NATS JetStreambe. Az event stream audit/integrációs eseményfolyam, nem a szavazatok elsődleges igazságforrása.

---

## 3. A győztes választás: Hibrid szolgáltatásalapú architektúra (SBA)

A Zamunda Community Choice projekt dedikált architektúrája a **szolgáltatásalapú architektúra**, kiegészítve eseményvezérelt aszinkron háttérfolyamatokkal a médiafeldolgozáshoz.

### Miért ez a megfelelő választás?

A szolgáltatásalapú architektúra (SBA) egy makroszolgáltatás-alapú megközelítés. Nincsenek több tucatnyi mikroszolgáltatások, hanem a rendszer néhány jól körülhatárolt, önállóan futtatható doménszolgáltatásra van bontva, amelyek jellemzően **egy közös, monolitikus adatbázison** osztoznak.

1. **Célzott Elaszticitás (Takarékosság és Klímabarát működés):**
Amikor szavazási csúcsidőszak van, elég kizárólag a kisméretű *Szavazási szolgáltatás* példányszámát növelni. Nem kell a teljes rendszert többszörözni, így az erőforrás-kihasználás (CPU, RAM) minimális marad. Ez közvetlenül támogatja az Elaszticitás és a Hatékonyság AC-ket.
2. **Közös adatbázis = Maximális adatintegritás:**
Mivel a Microservices-szel ellentétben itt osztozhatnak a szolgáltatások egyetlen, robusztus relációs adatbázison, az *F-SZ-04 (Megmásíthatatlan szavazatok)* követelmény egyszerűen, adatbázis-szintű triggerekkel és tranzakciókkal megvalósítható. Nincs szükség bonyolult, energiaigényes és megbízhatatlan elosztott tranzakciókra.
3. **Kiváló Robusztusság a hibrid Event-Driven elemmel:**
A *Pályázat- és adminisztrációkezelő szolgáltatás* nem fogad nagy videófájlokat a saját API-ján keresztül, hanem presigned S3-kompatibilis feltöltési URL-t ad a kliensnek. A kliens közvetlenül a nyers média bucketbe tölt, a szolgáltatás pedig objektumhivatkozást tartalmazó eseményt publikál egy dedikált médiafeldolgozási streambe. A tényleges tömörítést egy aszinkron worker végzi. Ugyanígy az *Értesítési szolgáltatás* és az *Auditnaplózó szolgáltatás* is aszinkron eseményfogyasztóként működik: hibájuk vagy lassulásuk nem gyűrűzik vissza a szavazási és kampánykezelési folyamatokba. Ez garantálja, hogy a rendszer a legrosszabb hálózati viszonyok és legnagyobb terhelés mellett is stabil marad.
4. **Egyszerűsített üzemeltetés (Takarékosság):**
Az SBA a mikroszolgáltatásokhoz képest lényegesen kevesebb mozgó alkatrészt (deployment unit) tartalmaz. Nem igényel masszív DevOps infrastruktúrát, komplex szolgáltatáshálót vagy folyamatos mikromenedzsmentet, ami csökkenti mind a fejlesztési, mind a hosszú távú üzemeltetési költségeket. Ez megfelelő választássá teszi az erőforrásokat ésszerűen felhasználó, takarékos állami (ZDR) projektek számára.

## 4. Üzemeltetési szintlépések a védési kritikák alapján

A hibrid SBA + EDA döntés csak akkor védhető közbizalmi rendszerként, ha a kritikus peremeseteket nem implementációs részletként kezeljük:

- **Integritás:** a szavazási auditfolyam kötelezően transactional outbox + outbox relay mintával készül ([ADR-006](../adrs/adr-006/)), ezért nincs alkalmazásszintű dual-write rés a PostgreSQL tranzakció és az eseménykibocsátás között.
- **Adatvédelem:** a jogosultsági pillanatkép és a szavazói kulcs képzéséhez használt titkok dedikált kulcskezelésben élnek, nem alkalmazáskonfigurációban vagy naplókban. A szavazási csúcsforgalom esetén csak rövid élettartamú operatív kulcs használható, hogy a kulcskezelő ne váljon per-request szűk keresztmetszetté ([ADR-007](../adrs/adr-007/)).
- **Csúcsterhelés:** a PostgreSQL írási út PgBouncer poololással és `campaign_id` szerinti particionálással védett ([ADR-008](../adrs/adr-008/)).
- **Takarékos brokerprofil:** az induló profil NATS JetStream, a Kafka csak országos/nagy audit-replay profilnál indokolt ([ADR-004](../adrs/adr-004/)).
- **Peremvédelem:** a NestJS BFF elé dedikált, implementációfüggetlen Ingress/API Gateway kerül TLS terminációra, rate limitingre és JWT elővalidálásra ([ADR-009](../adrs/adr-009/)).
