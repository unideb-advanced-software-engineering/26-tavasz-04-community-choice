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

* A rossz zamundai hálózati lefedettség miatt a nagyméretű médiafájlok feltöltése hagyományos módszerekkel megszakadna, ezért az architektúrának robusztus, darabolt és megszakítás esetén folytatható objektumtár-alapú feltöltési mechanizmust kell biztosítania.
* A szerveroldali videó- és képtömörítés jelentős és hirtelen CPU-terhelést okoz. Ezt az alaprendszertől független, aszinkron háttérfolyamattal és médiafeldolgozási streammel kell megtervezni, hogy egy tömeges feltöltési hullám ne lassítsa le a teljes webes felületet és a szavazást.
* Jelentős hatással van a fájltárolási stratégiára és opcionálisan a CDN-re (Content Delivery Network, tartalomelosztó hálózat): a nyers és optimalizált média külön objektumtárban kezelhető, a CDN pedig csak akkor indokolt, ha a forgalmi és költségadatok alapján megtérül.

### F-SZ-03, F-SZ-04 és F-SZ-05: Egyedi, megváltoztathatatlan és pszeudonimizált szavazatok

A rendszerben egy felhasználó egy adott ötletre csak egyszer szavazhat (F-SZ-03), a leadott szavazat utólag nem módosítható és nem törölhető (F-SZ-04), miközben a szavazati rekord nem tartalmazhat nyers személyes azonosítót (F-SZ-05).

**Miért ASR?**

* A „csak egyszer szavazhat” szabályt csúcsterhelés és hálózati retry esetén is technológiai szinten kell garantálni; ez adatbázis-szintű egyediségi constraintet igényel.
* A megváltoztathatatlanság nem csak alkalmazásszintű tiltás: adatbázis-szintű jogosultság- és műveletkorlátozás (append-only tárolás, UPDATE/DELETE tiltás) szükséges.
* A szavazás titkossága és a duplikációellenőrzés egyszerre csak pszeudonimizált, determinisztikus szavazói kulccsal kezelhető konzisztensen; teljes anonimitás mellett nem lenne megbízható a duplikált szavazatok kizárása.
* A kampány közbeni lakcímváltozás nem nyithat új jogosultsági körzetet ugyanabban a futó kampányciklusban; ezt jogosultsági pillanatkép és a Zamunda One-ból lekérhető lakcím-módosítási dátum/időbélyeg védi, amennyiben a Zamunda One API ilyen metaadatot biztosít.
* A szavazat elsődleges igazságforrása a PostgreSQL tranzakciós tároló; az audit és értesítés aszinkron eseményfolyamon keresztül történik, hogy ne lassítsa a szavazás szinkron útját.
* A szavazati rekord és az audit/integrációs esemény kapcsolatát transactional outbox + outbox relay minta garantálja, nem best-effort alkalmazásszintű publikálás.
* A HMAC kampány-mesterkulcs kezelése KMS/Vault Transit jellegű külső szolgáltatásban történik, a szavazási kritikus útban pedig rövid élettartamú kampánykulcs használható, hogy a KMS ne legyen per-request szűk keresztmetszet.
* A szavazási hajrában a PostgreSQL írási út védelme PgBouncer poololást és `campaign_id` szerinti szavazati particionálást igényel.
* A publikus API-forgalmat dedikált, implementációfüggetlen Ingress/API Gateway védi, hogy a TLS termináció, a durva rate limiting és a JWT elővalidálás ne a NestJS BFF nyers internetes belépési pontján fusson.

## Kapcsolódó, de nem önálló ASR

### F-PK-03: Publikus pályázati listanézet

A pályázatok publikus böngészése fontos felhasználói funkció, de önmagában nem architekturálisan szignifikáns követelmény. Architekturális hatása a hatékonysági és takarékos működési minőségi jellemzőkből következik: a listaoldalaknak kis válaszmérettel, lapozottan és alacsony sávszélességű környezetben is használhatóan kell működniük.

Az ebből következő konkrét megoldási irányokat az [Implementációs javaslatok](./implementacios-javaslatok/) oldal gyűjti.
