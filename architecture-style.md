# Architekturális stílus választása

## Bevezetés

A Zamunda Community Choice (ZDR) rendszer tervezése során Mark Richards és Neal Ford *Fundamentals of Software Architecture* című könyvének módszertanát követtük. A döntésünket az előzetesen meghatározott architekturális karakterisztikák (Elaszticitás, Hatékonyság, Robusztusság, Integritás) és a szignifikáns követelmények (Takarékosság, megmásíthatatlan szavazatok, aszinkron médiafeldolgozás) vezérelték.

---

## 1. Elvetett architekturális stílusok és az elvetés okai

A mérlegelés első körében az alábbi stílusokat azonnal elvetettük, mivel alapvetően ellentmondanak a projekt céljainak:

* **Rétegelt (Layered) és Pipeline architektúra:** Ezek technológiailag particionált stílusok, amelyeknél a kód rétegekbe (megjelenítés, üzleti logika, adatbázis) van szervezve. Bár az indulás olcsó, a módosítások nehézkesek, és az elaszticitásuk rendkívül alacsony.
* **Microkernel:** Bár jó kiegészítő rendszerekhez, a mi platformunk nem egy alaprendszerre és bővítményekre épülő architektúrát igényel.
* **Space-Based:** Bár az elaszticitása és a teljesítménye maximális a memóriában végzett feldolgozás miatt, az üzemeltetése méregdrága, ráadásul az *F-SZ-01 (Megmásíthatatlan szavazatok)* szigorú, csak hozzáfűzhető adatintegritási igényeivel nehezen vagy csak komoly tranzakciós kompromisszumokkal lenne összeegyeztethető.
* **Mikroszolgáltatás-architektúra (Microservices):** Bár divatos és extrém jól skálázható, a ZDR klímabarát és takarékossági ASR-jeivel teljesen ellentétes. A mikroszolgáltatások hálózati többletterhelése, a komplex üzemeltetés és az elosztott tranzakciók kezelése indokolatlanul drágává és energiaigényessé tenné a projektet.
* **Szolgáltatásorientált architektúra (SOA):** Túl monolitikus, elavult.

---

## 2. A döntős stílusok elemzése

A projekt igényei alapján három stílus maradt: a **moduláris monolit**, a **szolgáltatásalapú architektúra (Service-Based Architecture, SBA)** és az **eseményvezérelt architektúra (Event-Driven Architecture, EDA)**.

### 2.1. Második helyezett: Moduláris monolit

* **Miért merült fel?** Nagyon költséghatékony (Takarékosság ASR), és egyszerű üzemeltetni. Egyetlen közös adatbázisa van, ami jelentősen megkönnyíti a szavazatok relációs integritásának védelmét.
* **Miért vetettük el (részben)?** Az *Elaszticitás* AC miatt bukik el. A kampányok utolsó napján a szavazási forgalom ugrásszerűen megnő. Egy monolit esetében ilyenkor a *teljes* alkalmazást replikálni kellene a szervereken, ami pazarló, rengeteg felesleges memóriát és CPU-t foglal, így sérti a **Klímabarát/Takarékos** működés elvét.

### 2.2. Kiegészítő stílus: Eseményvezérelt architektúra (EDA)

* **Miért merült fel?** Kiváló a reszponzivitása és a robusztussága.
* **Mire használjuk?** A teljes rendszert nem építjük erre, mert a szavazás (F-SZ-01) azonnali, szinkron adatbázis-választ igényel. Ugyanakkor az *F-OB-03 (Multimédia feltöltés és automatikus tömörítés)* funkció kizárólag eseményvezérelten valósítható meg hatékonyan. Amikor egy lakos feltölt egy videót, egy esemény kerül az üzenetsorba, amit egy aszinkron háttérfolyamat dolgoz fel. Így a videófeldolgozás nem akasztja meg a webes és szavazási kéréseket.

---

## 3. A győztes választás: Hibrid szolgáltatásalapú architektúra (SBA)

A Zamunda Community Choice projekt dedikált architektúrája a **szolgáltatásalapú architektúra**, kiegészítve eseményvezérelt aszinkron háttérfolyamatokkal a médiafeldolgozáshoz.

### Miért ez a tökéletes választás?

A szolgáltatásalapú architektúra (SBA) egy makroszolgáltatás-alapú megközelítés. Nincsenek több tucatnyi mikroszolgáltatások, hanem a rendszer néhány jól körülhatárolt, önállóan futtatható doménszolgáltatásra van bontva, amelyek jellemzően **egy közös, monolitikus adatbázison** osztoznak.

1. **Célzott elaszticitás (takarékosság és klímabarát működés):**
Amikor szavazási csúcsidőszak van, elég kizárólag a szavazási szolgáltatást felskálázni. Nem kell a teljes rendszert többszörözni, így az erőforrás-kihasználás (CPU, RAM) minimális marad. Ez tökéletesen teljesíti az elaszticitás és a hatékonyság architekturális karakterisztikáit.
2. **Közös adatbázis = maximális adatintegritás:**
Mivel a mikroszolgáltatás-architektúrával ellentétben itt a szolgáltatások egyetlen, robusztus relációs adatbázison osztozhatnak, az *F-SZ-01 (Megmásíthatatlan szavazatok)* követelmény egyszerűen, adatbázisszintű triggerekkel és tranzakciókkal megvalósítható. Nincs szükség bonyolult, energiaigényes és megbízhatatlan elosztott tranzakciókra.
3. **Kiváló robusztusság a hibrid eseményvezérelt elemmel:**
A pályázat- és adminisztrációkezelő szolgáltatás fogadja a darabolt videókat, de a tényleges tömörítést már nem a webes kérést kiszolgáló API végzi, hanem egy üzenetközvetítőn keresztül átadja egy dedikált aszinkron háttérfolyamatnak. Ez garantálja, hogy a rendszer a legrosszabb hálózati viszonyok és legnagyobb terhelés mellett is stabil marad.
4. **Egyszerűsített üzemeltetés (takarékosság):**
Az SBA a mikroszolgáltatásokhoz képest lényegesen kevesebb mozgó alkatrészt, vagyis telepítési egységet tartalmaz. Nem igényel masszív DevOps infrastruktúrát, komplex szolgáltatáshálót vagy folyamatos mikromenedzsmentet, ami radikálisan csökkenti mind a fejlesztési, mind a hosszú távú üzemeltetési költségeket. Ez kiváló választássá teszi az erőforrásokat ésszerűen felhasználó, takarékos állami (ZDR) projektek számára.
