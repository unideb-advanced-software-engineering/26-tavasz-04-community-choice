---
title: SRS
description: A Community Choice rendszer szoftverkövetelmény-specifikációja
---

# Community Choice – szoftverkövetelmény-specifikáció

**Verzió:** 1.0  
**Projekt:** Zamunda Digitális Reneszánsz – Community Choice  
**Dokumentum típusa:** Szoftverkövetelmény-specifikáció

## Verziótörténet

| Verzió | Dátum | Változás |
| --- | --- | --- |
| 1.0 | 2026-05-05 | Első beadandó-kompatibilis SRS-verzió |

## 1. Bevezetés

### 1.1. Cél

Ebben az SRS-ben a Zamunda Community Choice nevű, helyi közösségi ötletpályázatok és lakossági szavazatok kezelésére szolgáló platform első verziójának követelményeit írjuk le. Az SRS a teljes rendszer követelményeit tartalmazza: a lakossági portált, az adminisztrációs felületet, a szavazást, az ötletbeküldést, a médiafeltöltést és a külső Zamunda One integrációt.

### 1.2. Dokumentumkonvenciók

Ez a dokumentum az alábbi jelöléseket és fogalmakat használja:

- **Rendszer:** a Zamunda Community Choice alkalmazás.
- **Lakos / felhasználó:** Zamunda állampolgára, aki ötletet küldhet be vagy szavazhat.
- **Adminisztrátor:** közigazgatásban dolgozó személy, aki a pályázatokat és ötleteket kezeli.
- **Super user:** felhatalmazott technikai szerepkör, amely adminisztrátori jogosultságot adhat.
- **Zamunda One:** a hitelesítésért és lakcímadatokért felelős külső szolgáltató.
- **Ötlet:** egy lakos által beküldött probléma-megoldás pár, opcionális fotóval vagy videóval.
- **Pályázat / kampány:** önkormányzat által meghirdetett helyi ötletpályázat.

A követelmények azonosítója a funkcionális terület rövidítését és sorszámát tartalmazza:

- `F-PK-*`: pályázatkezelés,
- `F-OB-*`: ötletbeküldés,
- `F-SZ-*`: szavazás.

A követelményeknél a prioritás jelölése: **Kritikus**, **Magas**, **Közepes** vagy **Alacsony**.

### 1.3. Célközönség

Az SRS célközönsége a projektben részt vevő fejlesztői, tervezői, üzemeltetési és értékelői szerepkörök összessége. A dokumentum a nem technikai szereplők számára is érthetően összefoglalja a rendszer célját, ugyanakkor elég konkrét követelményt ad az architektúra és a megvalósítás értékeléséhez.

### 1.4. Termékkör

A Community Choice célja, hogy Zamunda lakosai helyi szintű közösségi fejlesztési ötleteket kezdeményezhessenek, például zöldfelületek kialakítását, közösségi terek létrehozását, padok vagy kerékpártárolók kihelyezését. A platform az ötletek beküldését, közzétételét, életciklus-kezelését és a hitelesített lakcímhez kötött szavazást támogatja.

A rendszernek illeszkednie kell a Zamunda Digitális Reneszánsz program alapelveihez: dokumentálhatóság, takarékos és klímabarát működés, valamint használhatóság alacsony sávszélességű vagy magas késleltetésű régiókban is.

### 1.5. Hivatkozások

- [Esettanulmány](../esettanulmany/)
- [Fogalomtár](../fogalomtar/)
- Valós kapcsolódó példák:
  - [otlet.budapest.hu](https://otlet.budapest.hu/)
  - [kozossegikoltsegvetes.terezvaros.hu](https://kozossegikoltsegvetes.terezvaros.hu/)

## 2. Átfogó leírás

### 2.1. Termékperspektíva

A Zamunda Community Choice zöldmezős projekt. A rendszer önálló webes platformként készül, de a felhasználók hitelesítéséhez és lakcímadatainak ellenőrzéséhez a külső Zamunda One szolgáltatásra támaszkodik.

### 2.2. Termékfunkciók

A Community Choice az alábbi fő funkcionalitást biztosítja:

- önkormányzati ötletpályázatok létrehozása, meghirdetése és életciklusának kezelése;
- ötletek beküldése helyi lakosok által probléma-megoldás párok formájában;
- fotó- és videómellékletek feltöltése, szerveroldali optimalizálása és kiszolgálása;
- ötletek adminisztratív kezelése és közzététele;
- aktív és lezárt pályázatok, valamint ötletek publikus böngészése;
- hitelesített, állandó lakcímhez kötött szavazás helyi lakosok részéről;
- a pályázatok és ötletek életciklusának transzparens megjelenítése.

### 2.3. Felhasználói osztályok és jellemzőik

- **Super user:** technikailag felhatalmazott szerepkör, amely adminisztrátori fiókokat vagy jogosultságokat hozhat létre.
- **Közigazgatási adminisztrátor:** önkormányzati vagy állami szereplő, aki pályázatokat hirdet, ötleteket kezel és moderál.
- **Szavazó / lakos:** bejelentkezett, Zamunda One által hitelesített zamundai lakcímmel rendelkező felhasználó.
- **Vendég:** bejelentkezés nélküli vagy megfelelő lakcímjogosultság nélküli felhasználó. Publikus pályázatokat és ötleteket megtekinthet, de ötletet nem küldhet be és nem szavazhat.

### 2.4. Üzemeltetési környezet

A rendszer elsődleges felülete webes kliensalkalmazás, amely asztali és mobil böngészőből is elérhető. A webes kliensnek megbízhatóan és felhasználóbarát módon kell működnie olyan régiókban is, ahol az internetlefedettség hiányos, a sávszélesség alacsony vagy a hálózati késleltetés magas.

A fejlesztés során kötelező a klímabarát és sávszélesség-takarékos technológiák alkalmazása, a költséghatékony megvalósítás, valamint a megfelelő minőségű állami projekt-dokumentáció fenntartása.

### 2.5. Tervezési és implementációs korlátok

- A felhasználók autentikációjához és lakcím-alapú autorizációjához a Zamunda One szolgáltatást kell használni.
- A személyes adatok kezelésénél GDPR-kompatibilis és adatminimalizáló megközelítést kell alkalmazni.
- A szavazati rekordok nem tartalmazhatnak nyers személyes azonosítót.
- A leadott szavazat módosítása és törlése technológiai szinten tiltott kell legyen.
- A médiatartalmak kezelésénél sávszélesség- és tárhelytakarékos formátumokat kell használni.

### 2.6. Felhasználói dokumentáció

A rendszer beépített online súgót és rövid, kontextusérzékeny útmutatókat biztosít. A felületeken elhelyezett információs szövegek, tooltip-ek és folyamat közbeni magyarázatok segítik a lakosokat az ötletek feltöltésében és a szavazásban, valamint az adminisztrátorokat a pályázatok kezelésében.

### 2.7. Feltételezések és függőségek

- A Zamunda One megbízhatóan biztosítja a bejelentkezett felhasználó hitelesített profilját és bejelentett lakóhelyét.
- A Zamunda One pontos technikai API-szerződése implementációs fázisban pontosítandó, de a rendszer biztonságos HTTPS-alapú, tokenes integrációval számol.
- A pályázati költségvetési keretek kezelése és a keretek kimerülésének nyomon követése nem része az első verzió hatókörének.

## 3. Külső interfészkövetelmények

### 3.1. Felhasználói interfészek

A rendszer az alábbi felhasználói felületeket biztosítja:

- **Publikus portál:** az aktív és lezárt pályázatok, valamint a hozzájuk tartozó ötletek listázása, keresése és megtekintése. Itt történik a lakossági szavazatok leadása is az ötletek adatlapján.
- **Lakossági vezérlőpult:** a bejelentkezett felhasználó privát felülete, ahol megtekintheti saját ötleteit és a számára releváns szavazási információkat.
- **Közigazgatási panel:** az adminisztrátorok felülete a pályázatok kiírására, az ötletek állapotának kezelésére és a rendszer adminisztratív műveleteire.

### 3.2. Hardverinterfészek

A rendszer nem igényel közvetlen, speciális hardverinterfészt. A felhasználók szabványos webes böngészőn keresztül, asztali vagy mobil eszközről érik el a platformot.

### 3.3. Szoftverinterfészek

A rendszer a felhasználók autentikációjához és autorizációjához a Zamunda One API-t használja. Bejelentkezéskor a rendszer ezen az interfészen keresztül kapja meg a felhasználó hitelesített profiladatait, különösen a bejelentett állandó lakóhelyet. Ez az adatcsere képezi annak alapját, hogy kizárólag a helyi lakosok szavazhassanak vagy küldhessenek be ötletet az adott önkormányzat pályázatához.

A pontos protokollokat és adatszerkezeteket a Zamunda One hivatalos technikai specifikációjának ismeretében kell véglegesíteni. A tervezett integráció biztonságos HTTPS-kapcsolaton és token-alapú, iparági szabványokra épülő megoldáson, például OAuth 2.0 / OpenID Connect jellegű folyamaton alapul.

### 3.4. Kommunikációs interfészek

- A webes kliensalkalmazás és a backend HTTPS-en keresztül kommunikál.
- A kliens és a backend várhatóan RESTful API-kon keresztül, JSON üzenetformátummal cserél adatot.
- Az API-válaszokat a hálózati forgalom csökkentése érdekében tömöríteni kell.
- A magas hálózati késleltetés és az alacsony sávszélesség ellensúlyozására a rendszernek támogatnia kell a modern HTTP-képességeket, például HTTP/2 vagy HTTP/3 használatát, ha az üzemeltetési környezet ezt lehetővé teszi.
- A pályázati értesítések e-mailben és push notification formában is megvalósíthatók.
- A fotók és videók feltöltése során a rendszer darabolt, megszakítás után folytatható adatátvitelt alkalmaz.

## 4. Rendszerfunkciók

### 4.1. Pályázatkezelés

#### 4.1.1. Leírás és prioritás

**Prioritás:** Magas.

A rendszer lehetővé teszi a zamundai önkormányzatok adminisztrátorai számára, hogy tetszőleges időközönként új ötletpályázatokat hozzanak létre, menedzseljenek és végigkísérjék azok teljes életciklusát.

A pályázati életciklus például az alábbi állapotokat tartalmazhatja: tervezés alatt, ötletbeküldési szakasz, szavazási szakasz, lezárt, kiértékelés alatt, megvalósuló.

#### 4.1.2. Stimulus/Response szekvenciák

- Az adminisztrátor új pályázatot hoz létre; a rendszer elmenti, majd a megadott időpontban publikálja.
- Az adminisztrátor módosítja a pályázat életciklus-státuszát; a rendszer rögzíti a változást, és például lezárt szavazási szakasz esetén letiltja a további szavazatokat.
- A felhasználó megtekinti a pályázatok listáját; a rendszer alacsony sávszélességre optimalizált, lapozható formában jeleníti meg az aktuális és múltbeli kampányokat.

#### 4.1.3. Funkcionális követelmények

- **F-PK-01:** A rendszer felületet biztosít az adminisztrátorok számára új pályázatok létrehozására cím, leírás, határidők és érintett önkormányzat megadásával.
- **F-PK-02:** A rendszer támogatja a pályázatok és ötletek teljes életciklus-kezelését, beleértve a státuszok nyilvántartását és módosítását.
- **F-PK-03:** A rendszer publikus, optimalizált, alacsony hálózati terhelésű listanézetet biztosít a felhasználók számára a pályázatok böngészéséhez.
- **F-PK-04:** A rendszer automatikusan megnyitja és lezárja az ötletbeküldési és szavazási szakaszokat a pályázathoz beállított határidők alapján.

### 4.2. Ötletbeküldés multimédiás támogatással

#### 4.2.1. Leírás és prioritás

**Prioritás:** Magas.

A lakosok a rendszeren keresztül új ötleteket javasolhatnak az aktív pályázatokra, probléma-megoldás párok formájában. Az ötletekhez képek és videók is csatolhatók, figyelembe véve a ZDR program hálózat-optimalizálási és takarékossági követelményeit.

#### 4.2.2. Stimulus/Response szekvenciák

- A felhasználó elindítja az ötletbeküldést egy adott pályázaton; a rendszer ellenőrzi, hogy a felhasználó jogosult-e, vagyis lakcíme illeszkedik-e az önkormányzathoz, és még nem küldött-e be ötletet ugyanarra a kampányra.
- A felhasználó képet vagy videót és szöveget küld be; a rendszer eltárolja a javaslatot, a médiafájlok feldolgozását pedig sávszélesség-takarékos formátumokra optimalizálja.
- A felhasználó megpróbál második ötletet beküldeni ugyanabba a pályázatba; a rendszer hibaüzenettel elutasítja a kérést.

#### 4.2.3. Funkcionális követelmények

- **F-OB-01:** A rendszer lehetővé teszi a felhasználók számára, hogy strukturált űrlapon adják le ötleteiket a probléma leírásával és a javasolt megoldással.
- **F-OB-02:** A rendszer kép- és videófeltöltési lehetőséget biztosít az ötletekhez.
- **F-OB-03:** A rendszer a feltöltött médiafájlokat szerveroldalon automatikusan átméretezi és tömöríti a lassú internetkapcsolattal rendelkező régiók kiszolgálása, valamint a klímabarát és takarékos adattárolás érdekében.
- **F-OB-04:** A rendszer kikényszeríti, hogy egy felhasználó egy adott pályázatra kizárólag egyetlen ötletet adhasson be.
- **F-OB-05:** A rendszer az ötleteket a hozzájuk tartozó pályázathoz kapcsolva tárolja el.

### 4.3. Hitelesített szavazási modul és lakcím-alapú szűrés

#### 4.3.1. Leírás és prioritás

**Prioritás:** Kritikus.

A szavazás és a jogosultságkezelés a rendszer legfontosabb integritási területe. A rendszer a Zamunda One API segítségével azonosítja a felhasználókat és ellenőrzi bejelentett lakcímüket. A szavazatokat úgy kell eltárolni, hogy utólagos módosításuk vagy törlésük még adminisztrátori szinten se legyen végrehajtható.

#### 4.3.2. Stimulus/Response szekvenciák

- A felhasználó bejelentkezik; a rendszer a Zamunda One API-n keresztül elvégzi az autentikációt, és lekéri a bejelentett lakóhelyet.
- A felhasználó szavazatot ad le egy helyi ötletre; a rendszer ellenőrzi, hogy még nem szavazott-e az adott ötletre, majd megváltoztathatatlan módon rögzíti a szavazatot.
- A felhasználó megpróbál szavazni vagy ötletet beküldeni egy másik önkormányzat pályázatán; a rendszer jogosultság hiányára hivatkozva elutasítja a műveletet.
- Egy adminisztrátor megpróbál törölni egy leadott szavazatot; a rendszer adatbázis-szintű védelmi mechanizmusokkal meggátolja a tranzakciót.

#### 4.3.3. Funkcionális követelmények

- **F-SZ-01:** A rendszer integrálódik a Zamunda One API-val az autentikáció és a hivatalos lakcímadatokra épülő autorizáció céljából.
- **F-SZ-02:** A rendszer szűri a hozzáférést: a felhasználó csak a saját bejelentett lakóhelye szerinti önkormányzat pályázatain adhat be ötletet és szavazhat.
- **F-SZ-03:** A rendszer lehetővé teszi, hogy egy felhasználó egy pályázaton belül korlátlan számú különböző ötletre szavazzon, de egy konkrét ötletre csak egyetlen szavazatot adhat le.
- **F-SZ-04:** A rendszer a leadott szavazatokat PostgreSQL-alapú, csak hozzáfűzhető szavazati tranzakciónaplóban tárolja. A módosítást és törlést adatbázis-szintű jogosultságokkal és védelmi mechanizmusokkal tiltja.
- **F-SZ-05:** A rendszer a szavazatokat pszeudonimizált szavazói kulccsal kapcsolja az ötletekhez. A szavazati rekord nem tartalmaz nyers személyes azonosítót, ugyanakkor a pszeudonim kulcs lehetővé teszi az egy ötletre egyszeri szavazás adatbázis-szintű ellenőrzését.

## 5. Egyéb nemfunkcionális követelmények

### 5.1. Teljesítmény- és hatékonysági követelmények

- A webes felület célzott First Contentful Paint értéke a 75. percentilisnél legfeljebb 1,8 másodperc legyen a támogatott, átlagos hálózati környezetekben.
- A publikus listanézetek lapozottak, gyorsítótárazhatók és csak a megjelenítéshez szükséges mezőket adják vissza.
- A rendszer a feltöltött videókat és képeket szerveroldalon optimalizált webes formátumokra alakítja, például WebM és WebP változatokra.
- A kliensoldali webalkalmazás képek és videók esetében lazy loading technikát alkalmaz, hogy elkerülje az indokolatlan hálózati forgalmat.
- A statikus erőforrásokat, például CSS, JavaScript, betűtípusok és logók, szabványos HTTP Cache-Control fejlécekkel kell gyorsítótárazni.
- A felhasználók által feltöltött és optimalizált médiatartalmak kiszolgálása CDN-en keresztül történik.
- A gyakran lekérdezett, ritkán változó publikus adatokat, például nyitott pályázatok listáját vagy településlistákat, szerveroldali memóriagyorsítótárból, például Redisből kell kiszolgálni, ahol ez konzisztensen megtehető.

### 5.2. Üzembiztonsági követelmények

A rendszer nem vezérel fizikai biztonságkritikus folyamatot, ezért klasszikus safety követelmény nem releváns. Üzembiztonsági szempontból ugyanakkor fontos, hogy szavazási időszakban a szolgáltatás részleges hiba esetén is kontrolláltan működjön: a szavazatok rögzítése ne sérüljön, a hibás háttérfolyamatok pedig ne akadályozzák a szavazást.

### 5.3. Biztonsági és adatvédelmi követelmények

- Csak bejelentkezett és hitelesített felhasználó tud szavazatot leadni.
- A rendszernek szigorúan korlátoznia kell a szavazáshoz és ötletbeküldéshez való hozzáférést a bejelentett lakcím alapján.
- A szavazatok adatbázis-szintű védettséget élveznek; a módosítás és törlés technológiai szinten tiltott.
- A szavazati tranzakciónapló nem tartalmaz nyers személyes azonosítót.
- A duplikált szavazat kizárásához a rendszer determinisztikus, pszeudonimizált szavazói kulcsot használ.
- A pszeudonimizáláshoz szükséges titok, például HMAC secret, csak a Szavazási szolgáltatás számára hozzáférhető.
- A személyes adatok kezelésénél az adatminimalizálás és célhoz kötöttség elvét kell követni.

### 5.4. Szoftverminőségi attribútumok

- **Elérhetőség:** a publikus böngészésnek és a szavazásnak szavazási időszakban részleges háttérfolyamat-hiba esetén is működőképesnek kell maradnia.
- **Hatékonyság:** a publikus listanézetek lapozottak, gyorsítótárazhatók és csak a szükséges mezőket adják vissza; a médiatartalmak optimalizált formában kerülnek kiszolgálásra.
- **Integritás:** a szavazati rekordokon `UPDATE` és `DELETE` művelet adatbázis-szinten tiltott, és az egy ötletre egyszeri szavazást egyediségi constraint védi.
- **Biztonság:** a szavazáshoz és ötletbeküldéshez Zamunda One alapú hitelesítés és lakcím-alapú jogosultságellenőrzés szükséges.
- **Robusztusság:** a médiafeltöltés darabolt és megszakítás után folytatható; a médiafeldolgozás aszinkron háttérfolyamatként fut.
- **Használhatóság:** a rendszer reszponzív webes felületet és kontextusérzékeny útmutatókat biztosít.
- **Bővíthetőség:** az aszinkron eseményfolyamhoz új fogyasztók, például későbbi analitikai komponensek kapcsolhatók a meglévő producerek módosítása nélkül.
- **Elaszticitás:** szavazási csúcsterhelés esetén a Szavazási szolgáltatás önállóan skálázható.
- **Skálázhatóság:** a szavazási, médiafeldolgozási és értesítési terhelés külön kezelhető.
- **Karbantarthatóság:** a rendszer néhány jól körülhatárolt szolgáltatásra épül, amelyek felelőssége dokumentált.

### 5.5. Üzleti szabályok

- **BR-1:** Adott önkormányzat pályázatára kizárólag az ottani, bejelentett lakcímmel rendelkező lakosok adhatnak be ötleteket.
- **BR-2:** Adott önkormányzat pályázatán leadott ötletekre kizárólag az ottani, bejelentett lakcímmel rendelkező lakosok szavazhatnak.
- **BR-3:** Egy felhasználó egy adott pályázatra legfeljebb egy ötletet nyújthat be.
- **BR-4:** Egy adott ötletre egy felhasználó kizárólag egyszer szavazhat.
- **BR-5:** Az egyes pályázatokon belül egy felhasználó tetszőleges számú, de egyedi ötletre adhat le szavazatot.
- **BR-6:** A platform nem kezeli és nem követi nyomon a pályázati költségvetési kereteket és azok kimerülését.
- **BR-7:** A közzétett ötleteken a szavazás eredményhirdetéséig nem jelenik meg a szavazatok száma.

## 6. Egyéb követelmények

- A rendszer elsődleges nyelve magyar.
- A személyes adatok kezelésénél az adatminimalizálás elvét kell követni.
- A szavazati rekordok nem tartalmazhatnak nyers személyes azonosítót.
- A médiatartalmak tárolásánál optimalizált, webes megjelenítésre alkalmas formátumokat kell használni.

## A függelék: Fogalomtár

A projekt egységes fogalomtárát lásd: [Fogalomtár](../fogalomtar/).

## B függelék: Elemzési modellek

Az architekturális elemzési modelleket a [C4 modell](../architektura/c4-modell/) oldal tartalmazza.

## C függelék: Nyitott kérdések

Jelenleg nincs beadandó szinten nyitva hagyott SRS-követelmény. A Zamunda One pontos technikai API-szerződése implementációs fázisban pontosítandó.
