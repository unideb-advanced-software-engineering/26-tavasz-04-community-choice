---
title: Architekturálisan szignifikáns követelmények
description: A Community Choice rendszer architekturálisan szignifikáns követelményeinek leírása
---

## ZDR általános követelmények

### Takarékosság és klímabarát működés

Zamunda nem szegény ország, de feleslegesen nem is akarja szórni a pénzt: a projektek tervezésénél törekedni kell a takarékosságra. Szintén ezt igénylik a klímabarát célok! A rendszernek úgy kell magas felhasználói élményt nyújtania, hogy közben a szerveroldali energiafogyasztás és a hálózati sávszélesség-használat a lehető legalacsonyabb maradjon. Ezen felül az ország bizonyos területein az internetlefedettség hiányos, így a rendszernek tolerálnia kell a magas késleltetést és az alacsony sávszélességet.

## Minőségi jellemzők

Az előzőleg azonosított [architekturális karakterisztikák](../karakterisztikak/) az alábbiak:

* Hatékonyság.
* Integritás.
* Robusztusság.
* Elaszticitás.

## Szignifikáns funkcionális követelmények

### F-OB-02 és F-OB-03: Multimédia feltöltés és automatikus tömörítés

A rendszer kép- és videófeltöltési lehetőséget biztosít az ötletekhez (F-OB-02), melyeket a szerveroldalon automatikusan átméretez és tömörít a lassú internetkapcsolattal rendelkező régiók kiszolgálása és a klímabarát adattárolás érdekében (F-OB-03).

**Miért ASR?**

* A rossz zamundai hálózati lefedettség miatt a nagyméretű médiafájlok feltöltése hagyományos módszerekkel megszakadna, ezért az architektúrának egy robusztus, darabolt és megszakítás esetén folytatható feltöltési mechanizmust kell biztosítania (pl. [TUS protokoll](https://tus.io/) segítségével).
* A szerveroldali videó- és képtömörítés jelentős és hirtelen CPU-terhelést okoz. Ezt az alaprendszertől független, aszinkron háttérfolyamattal és üzenetsorral kell megtervezni, hogy egy tömeges feltöltési hullám ne lassítsa le a teljes webes felületet és a szavazást.
* Jelentős hatással van a CDN-re (Content Delivery Network, tartalomelosztó hálózat) és a fájltárolási stratégiára a hálózat optimalizálása érdekében.

### F-PK-03: Alacsony hálózati terhelésű publikus listanézet

A rendszer publikus, optimalizált (alacsony hálózati terhelésű) listanézetet biztosít a felhasználók számára a pályázatok böngészéséhez.

**Miért ASR?**

* Az alacsony sávszélesség miatt a hagyományos, teljes oldalakat letöltő szerveroldali renderelés (SSR) itt nem lesz hatékony.
* Az API tervezésénél gyorsítótárazást és minimalizált adatátvitelt kell a rendszer legalsó rétegeibe is beépíteni, például csak a szükséges JSON-mezők küldésével, lapozással és lusta betöltéssel.

### F-SZ-03, F-SZ-04 és F-SZ-05: Egyedi, megváltoztathatatlan és pszeudonimizált szavazatok

A rendszerben egy felhasználó egy adott ötletre csak egyszer szavazhat (F-SZ-03), a leadott szavazat utólag nem módosítható és nem törölhető (F-SZ-04), miközben a szavazati rekord nem tartalmazhat nyers személyes azonosítót (F-SZ-05).

**Miért ASR?**

* A „csak egyszer szavazhat” szabályt csúcsterhelés és hálózati retry esetén is technológiai szinten kell garantálni; ez adatbázis-szintű egyediségi constraintet igényel.
* A megváltoztathatatlanság nem csak alkalmazásszintű tiltás: adatbázis-szintű jogosultság- és műveletkorlátozás (append-only tárolás, UPDATE/DELETE tiltás) szükséges.
* A szavazás titkossága és a duplikációellenőrzés egyszerre csak pszeudonimizált, determinisztikus szavazói kulccsal kezelhető konzisztensen; teljes anonimitás mellett nem lenne megbízható a duplikált szavazatok kizárása.
* A szavazat elsődleges igazságforrása a PostgreSQL tranzakciós tároló; az audit és értesítés aszinkron eseményfolyamon keresztül történik, hogy ne lassítsa a szavazás szinkron útját.
