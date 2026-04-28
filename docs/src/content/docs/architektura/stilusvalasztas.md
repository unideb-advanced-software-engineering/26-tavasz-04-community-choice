---
title: Architekturális stílus választása
description: A Community Choice rendszer architekturális stílusának indoklása
---

## Bevezetés

A Zamunda Community Choice (ZDR) rendszer tervezése során Mark Richards és Neal Ford *Fundamentals of Software Architecture* című könyvének módszertanát követtük. A döntésünket az előzetesen meghatározott architekturális karakterisztikák (Elaszticitás, Hatékonyság, Robusztusság, Integritás) és a szignifikáns követelmények (Takarékosság, megmásíthatatlan szavazatok, aszinkron médiafeldolgozás) vezérelték.

---

## 1. Elvetett architekturális stílusok és az elvetés okai

A mérlegelés első körében az alábbi stílusokat azonnal elvetettük, mivel alapvetően ellentmondanak a projekt céljainak:

* **Layered (Rétegelt) & Pipeline:** Ezek technológiailag particionált stílusok, amelyeknél a kód rétegekbe (Megjelenítés, Üzleti logika, Adatbázis) van szervezve. Bár az indulás olcsó, a módosítások nehézkesek és az elaszticitásuk rendkívül alacsony.
* **Microkernel:** Bár jó kiegészítő rendszerekhez, a mi platformunk nem egy alaprendszer + plugin architektúrát igényel.
* **Space-Based:** Bár az elaszticitása és a teljesítménye maximális (memória-alapú feldolgozás), az üzemeltetése méregdrága, ráadásul az *F-SZAV-01 (Megmásíthatatlan szavazatok)* szigorú, "append-only" adatintegritási igényeivel nehezen vagy csak komoly tranzakciós kompromisszumokkal lenne összeegyeztethető.
* **Microservices:** Bár divatos és extrém jól skálázható, a ZDR klímabarát és takarékossági ASR-jeivel teljesen ellentétes. A mikroszolgáltatások hálózati overheadje (network chatter), a komplex üzemeltetés és az elosztott tranzakciók kezelése (ami a szavazatoknál kritikus hibaforrás) indokolatlanul drágává és energiaigényessé tenné a projektet.
* **Service-Oriented (SOA):** Túl monolitikus, elavult.

---

## 2. A döntős stílusok elemzése

A projekt igényei alapján három stílus maradt: a **Modular Monolith**, a **Service-Based Architecture (SBA)** és az **Event-Driven Architecture (EDA)**.

### 2.1. Második helyezett: Modular Monolith

* **Miért merült fel?** Nagyon költséghatékony (Takarékosság ASR), és egyszerű üzemeltetni. Egyetlen közös adatbázisa van, ami jelentősen megkönnyíti a szavazatok relációs integritásának védelmét.
* **Miért vetettük el (részben)?** Az *Elaszticitás* AC miatt bukik el. A kampányok utolsó napján a szavazási forgalom ugrásszerűen megnő. Egy monolit esetében ilyenkor a *teljes* alkalmazást replikálni kellene a szervereken, ami pazarló, rengeteg felesleges memóriát és CPU-t foglal, így sérti a **Klímabarát/Takarékos** működés elvét.

### 2.2. Kiegészítő stílus: Event-Driven Architecture (EDA)

* **Miért merült fel?** Kiváló a reszponzivitása és a robusztussága.
* **Mire használjuk?** A teljes rendszert nem építjük erre, mert a szavazás (F-SZAV-01) azonnali, szinkron adatbázis-választ igényel. Ugyanakkor három területen **kizárólag eseményvezérelten (Event-Driven)** valósítható meg hatékonyan a funkció:
  * **Médiafeldolgozás (*Campaign & Idea Service*):** Amikor egy lakos feltölt egy videót, egy esemény kerül a sorba, amit egy aszinkron háttérfolyamat (worker) dolgoz fel. Így a videótömörítés nem akasztja meg a webes/szavazó szálakat.
  * **Értesítések (*Notification Service*):** Kampányállapot-változáskor (pl. pályázat lezárása, eredményhirdetés) a rendszer domain eseményeket bocsát ki, amelyeket a Notification Service aszinkron fogyaszt és kézbesíti az érintett lakósoknak. Az értesítés küldése nem lehet a szavazási kérés kritikus útján.
  * **Auditnapló (*Audit Service*):** Minden szignifikáns domain esemény (szavazat leadása, ötlet beküldése, adminisztrátori beavatkozás) egy megváltoztathatatlan eseménynaplóba kerül. Az Audit Service ezeket az eseményeket aszinkron fogyasztja, így az auditnaplózás semmilyen körülmények között nem lassítja a felhasználói kérések kiszolgálását.

---

## 3. A győztes választás: Hibrid Service-Based Architecture (SBA)

A Zamunda Community Choice projekt dedikált architektúrája a **Service-Based Architecture**, kiegészítve eseményvezérelt (Event-Driven) aszinkron háttérfolyamatokkal a médiafeldolgozáshoz.

### Miért ez a tökéletes választás?

A Service-Based Architecture (SBA) egy makroszolgáltatás-alapú megközelítés. Nincsenek több tucatnyi mikroszolgáltatások, hanem a rendszer néhány (3-5) jól körülhatárolt, önállóan futtatható domain-szolgáltatásra (pl. *Voting Service*, *Campaign & Idea Service*, *Admin Service*) van bontva, amelyek jellemzően **egy közös, monolitikus adatbázison** osztoznak.

1. **Célzott Elaszticitás (Takarékosság és Klímabarát működés):**
Amikor szavazási csúcsidőszak van, elég kizárólag a kisméretű *Voting Service*-t felskálázni. Nem kell a teljes rendszert többszörözni, így az erőforrás-kihasználás (CPU, RAM) minimális marad. Ez tökéletesen teljesíti az Elaszticitás és a Hatékonyság AC-ket.
2. **Közös adatbázis = Maximális adatintegritás:**
Mivel a Microservices-szel ellentétben itt osztozhatnak a szolgáltatások egyetlen, robusztus relációs adatbázison, az *F-SZAV-01 (Megmásíthatatlan szavazatok)* követelmény egyszerűen, adatbázis-szintű triggerekkel és tranzakciókkal megvalósítható. Nincs szükség bonyolult, energiaigényes és megbízhatatlan elosztott tranzakciókra.
3. **Kiváló Robusztusság a hibrid Event-Driven elemmel:**
A *Campaign & Idea Service* fogadja a darabolt (chunked) videókat, de a tényleges tömörítést már nem a webes kérést kiszolgáló API végzi, hanem egy eseménysoron (message brokeren) keresztül átadja egy dedikált aszinkron workernek. Ugyanígy a *Notification Service* és az *Audit Service* is aszinkron event consumerként működik: hibájuk vagy lassulásuk nem gyűrűzik vissza a szavazási és kampánykezelési folyamatokba. Ez garantálja, hogy a rendszer a legrosszabb hálózati viszonyok és legnagyobb terhelés mellett is stabil marad.
4. **Egyszerűsített üzemeltetés (Takarékosság):**
Az SBA a mikroszolgáltatásokhoz képest lényegesen kevesebb mozgó alkatrészt (deployment unit) tartalmaz. Nem igényel masszív DevOps infrastruktúrát, komplex service mesh-t vagy folyamatos mikromenedzsmentet, ami radikálisan csökkenti mind a fejlesztési, mind a hosszú távú üzemeltetési költségeket. Ez tökéletes választássá teszi az erőforrásokat ésszerűen felhasználó, takarékos állami (ZDR) projektek számára.
