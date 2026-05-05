---
title: SRS
description: A Community Choice rendszer szoftverkövetelmény-specifikációja
---


# **Software Requirements Specification**

# **for**

# **Community Choice**

**Version 1.0 approved**

**Prepared by \<author\>**

**\<organization\>**

**\<date created\>**

**Table of Contents**

**Table of Contents	[ii](#heading=h.fgq9cndke7uc)**

**Revision History	[ii](#heading)**

**1\.	Introduction	[1](#heading=h.ri5qq16xubd6)**  
1.1	Purpose	[1](#heading=h.m4ob1q65ty9o)  
1.2	Document Conventions	[1](#heading=h.qecj2e9r65oi)  
1.3	Intended Audience and Reading Suggestions	[1](#heading=h.rxjjnribup14)  
1.4	Product Scope	[1](#heading=h.oha3w13fedk6)  
1.5	References	[1](#heading=h.gg22kwsm2ogq)

**2\.	Overall Description	[2](#heading=h.w4cfcicy9r53)**  
2.1	Product Perspective	[2](#heading=h.gqep2mpo2e5y)  
2.2	Product Functions	[2](#heading=h.rh7ecjdod3nu)  
2.3	User Classes and Characteristics	[2](#heading=h.4d3mp7a0bua8)  
2.4	Operating Environment	[2](#heading=h.5y61lj6qee9n)  
2.5	Design and Implementation Constraints	[2](#heading=h.f23iqm4gvchk)  
2.6	User Documentation	[2](#heading=h.1l749f8dk64g)  
2.7	Assumptions and Dependencies	[3](#heading=h.ced2334j9efk)

**3\.	External Interface Requirements	[3](#heading=h.tern8h1piz7q)**  
3.1	User Interfaces	[3](#user-interfaces)  
3.2	Hardware Interfaces	[3](#heading=h.nvmq93d74tx3)  
3.3	Software Interfaces	[3](#heading=h.ii1nzjl5yen3)  
3.4	Communications Interfaces	[3](#heading=h.hzthpgqzagae)

**4\.	System Features	[4](#heading=h.po8wdhmifx92)**  
4.1	System Feature 1	[4](#heading=h.nexcs89bbye4)  
4.2	System Feature 2 (and so on)	[4](#heading=h.nuot0wozzlvm)

**5\.	Other Nonfunctional Requirements	[4](#heading=h.55mtijfhg9v7)**  
5.1	Performance Requirements	[4](#performance-requirements)  
5.2	Safety Requirements	[5](#heading=h.6pimcifarazl)  
5.3	Security Requirements	[5](#heading=h.piv307gudofm)  
5.4	Software Quality Attributes	[5](#heading=h.xfqdhopyvo7h)  
5.5	Business Rules	[5](#heading=h.2t7g6e5bzwp8)

**6\.	Other Requirements	[5](#heading=h.qaqrvh1tt8t3)**

**Appendix A: Glossary	[5](#heading=h.hbukjmns12e9)**

**Appendix B: Analysis Models	[5](#heading=h.osokm05yc43v)**

**Appendix C: To Be Determined List	[6](#heading=h.vois7fs3syal)**

**Revision History**

| Name | Date | Reason For Changes | Version |
| :---- | :---- | :---- | :---- |
|  |  |  |  |
|  |  |  |  |

1. # **Introduction**

   1. ## **Purpose** 

Ebben az SRS-ben a Zamunda Community Choice nevű, helyi közösségi ötletpályázatok és lakossági szavazatok kezelésére szolgáló platform első verziójának követelményeit írjuk le. Az SRS a **teljes** rendszer követelményeit tartalmazza. 

2. ## **Document Conventions**

Ez a dokumentum az alábbi jelöléseket és fogalmakat vezeti be:

* Rendszer: Maga a Zamunda Community Choice alkalmazás.  
* Lakos / Felhasználó: Zamunda állampolgára, aki ötletet küld be vagy szavaz.  
* Adminisztrátor: A közigazgatásban dolgozó személy, aki a pályázatokat kezeli.  
* Super user: Az a felhatalmazott fejlesztő, aki megadja a jogosultságot az adminisztrrátornak.  
* Zamunda One: A hitelesítésért és lakcímadatokért felelős külső szolgáltató.  
* Ötlet: Egy lakos által beküldött "probléma-megoldás" pár.  
    
* Kiemelés: A félkövér szedés a rendszer funkcióira vagy kiemelt követelményeire utal.  
* Prioritás: Minden követelménynél külön jelöljük a fontosságot (Magas, Közepes, Alacsony).

  3. ## **Intended Audience and Reading Suggestions**

Ez az SRS bármely, a projektben résztvevő munkatárs számára érdekes és hasznos lehet, technikai ismeretektől függetlenül.

4. ## **Product Scope**

Zamunda szeretne lehetőséget biztosítani arra, hogy kezdeményezhessenek helyi szintű, kisebb-nagyobb projekteket. Ilyen lehet például új zöldfelületek kialakítása, közösségi terek létrehozása, vagy egyszerűen csak padok, kerékpártárolók kihelyezése.

5. ## **References**

A rendszer alapjául szolgáló esettanulmány az alábbi linken található:

* [https://github.com/unideb-advanced-software-engineering/26-tavasz-04-community-choice/blob/main/esettanulmany.md](https://github.com/unideb-advanced-software-engineering/26-tavasz-04-community-choice/blob/main/esettanulmany.md)

Már létező hasonló projektek:

* [otlet.budapest.hu](http://otlet.budapest.hu)   
* [kozossegikoltsegvetes.terezvaros.hu](http://kozossegikoltsegvetes.terezvaros.hu) 

2. # **Overall Description**

   1. ## **Product Perspective**

A  Zamunda Community Choice egy új, zöldmezős projekt, mely egyáltalán nem rendelkezik előzményekkel.

2. ## **Product Functions**

 A Zamunda Community Choice az alábbi funkcionalitást biztosítja a felhasználók számára:

* Önkormányzati ötletpályázatok (kampányok) létrehozása, meghirdetése és életciklusának (nyitott, szavazás, lezárt) kezelése.  
* Ötlet beküldése helyi polgárok által (probléma-megoldás párok formájában, fotó és videó mellékletek támogatásával).  
* Ötletek közzététele.  
* Ötletek megtekintése.  
* A pályázatok és ötletek teljes életciklusának transzparens megjelenítése a platformon.  
* Hitelesített, állandó lakcímhez kötött szavazás a helyi lakosok részéről.

  3. ## **User Classes and Characteristics**

A rendszer felhasználói az alábbiak:

* Super user.  
  * Egy megbízott felhasználó (admin), aki képes adminisztrátor fiókokat létrehozni.  
* Adminisztrátorok, közigazgatás.  
  * A közigazgatásban dolgozó személy, aki eldönti melyik ötletek kerülnek publikálásra.  
* Szavazók, polgárok.  
  * Bejelentkezett, átlagos hitelesített zamundai lakcímmel rendelkező felhasználó.  
* Vendég.  
  * Bejelentkezés nélküli, vagy nem zamundai lakcímmel rendelkező felhasználó. Kizárólag a publikusan közzétett pályázatokat és ötleteket tekintheti meg, de szavazat leadására vagy ötlet beküldésére nem jogosult.

  4. ## **Operating Environment**

Webes kliensalkalmazás, az elérhetőség miatt is  
A fejlesztés során kötelező a klímabarát és sávszélesség-takarékos technológiák alkalmazása, a költséghatékony megvalósítás, valamint a szigorú állami dokumentációs szabványok betartása.  
A webes kliensalkalmazásnak megbízhatóan és felhasználóbarát módon kell működnie olyan régiókban is, ahol az internetlefedettség hiányos, a sávszélesség alacsony, vagy a hálózati késleltetés magas.

5. ## **Design and Implementation Constraints**

* Zamunda One-t kötelező használni a felhasználók autentikálásra és autorizációra.  
* GDPR kompatibilis adattárolás.

  6. ## **User Documentation**

A rendszer teljes értékű, beépített online súgóval rendelkezik, amely kontextusérzékeny segítséget nyújt a felhasználóknak. A felületeken elhelyezett információs ikonok (tooltip-ek), interaktív végigvezető folyamatok (onboarding) és rövid, beágyazott szöveges útmutatók segítik a lakosokat az ötletek feltöltésében és a szavazásban, valamint az adminisztrátorokat a pályázatok kezelésében.

7. ## **Assumptions and Dependencies**

Zamunda One biztosítja a bejelentkezett felhasználó lakhely hitelesítést.

3. # **External Interface Requirements**

   1. ## **User Interfaces** {#user-interfaces}

A rendszer az alábbi felhasználói felületeket biztosítja:

* **Publikus Portál:** Ahol az aktív és lezárt pályázatok, valamint a hozzájuk tartozó ötletek listázhatók, kereshetők és megtekinthetők. Itt történik a lakossági szavazatok leadása is az ötletek adatlapján.  
* **Lakossági Vezérlőpult (Dashboard):** A bejelentkezett felhasználó privát felülete, ahol megtekintheti és kezelheti a saját maga által beküldött ötleteket, valamint nyomon követheti az általa leadott szavazatokat.  
* **Közigazgatási Panel (Adminisztrációs felület):** Az önkormányzati adminisztrátorok felülete a pályázatok kiírására, az ötletek állapotának kezelésére és a rendszer adminisztrációjára.

  2. ## **Hardware Interfaces**

\-

3. ## **Software Interfaces**

A rendszer a felhasználók autentikációjához és autorizációjához a Zamunda One API-t használja. Bejelentkezéskor a rendszer ezen az interfészen keresztül kapja meg a felhasználó hitelesített profil adatait, különös tekintettel a bejelentett állandó lakóhelyre. Ez az adatcsere képezi a jogosultságkezelés (kizárólag a helyi lakosok szavazhatnak és küldhetnek be ötletet az adott önkormányzathoz) alapját.

Mivel a Zamunda One szolgáltatás pontos technikai specifikációja jelenleg nem áll rendelkezésre, a kommunikációs interfész részletei a későbbiekben kerülnek meghatározásra. Az integráció valószínűleg egy elterjedt, iparági szabványokra épülő, biztonságos (HTTPS) API kapcsolaton keresztül valósul majd meg. A felhasználók hitelesítése és a lakcímadatok átvétele várhatóan egy standard token-alapú megoldást (pl. OAuth 2.0 jellegű eljárást) fog használni szerver-szerver kommunikációval. A pontos protokollokat és adatszerkezeteket a Zamunda One hivatalos publikálását követően rögzítjük.

4. ## **Communications Interfaces**

* Pályázat értesítések (új pályázat kiírása, lezárult egy pályázat), ez email formában és egyaránt push notification formában is.  
* A felületek megjelenítése: HTTP/HTTPS.  
* A webes kliensalkalmazás és a háttérrendszer (backend) várhatóan RESTful API architektúrán keresztül kommunikál, szabványos JSON (JavaScript Object Notation) üzenetformátumot használva. A hálózati forgalom minimalizálása érdekében az API válaszok payloadját kötelezően tömöríteni kell.  
* *A magas hálózati késleltetés és az alacsony sávszélesség ellensúlyozására a szervernek támogatnia kell a HTTP/2 vagy HTTP/3 (QUIC) protokollokat a kapcsolatok multiplexálása és a HTTP fejlécek hatékony tömörítése érdekében.*

***Multimédia adatátvitel:** A lakosok által beküldött fotók és videók feltöltése során a rendszer aszinkron, darabolt adatátvitelt (chunked upload) alkalmaz, hogy hálózati szakadás esetén is folytatható legyen a folyamat.* 

4. # **System Features**

   1. ## **Pályázatkezelés (Kampányok)**

4.1.1	Description and Priority

*Magas prioritás.*  
*A rendszer lehetővé teszi a zamundai önkormányzatok adminisztrátorai számára, hogy tetszőleges időközönként új ötletpályázatokat (kampányokat) hozzanak létre, menedzseljenek, és végigkísérjék azok teljes életciklusát.*  
*Életciklus: A pályázatok és a bennük lévő ötletek státuszainak rendszere (pl. tervezés alatt, ötletbeküldési szakasz, szavazási szakasz, lezárt/kiértékelés alatt, megvalósuló).*

4.1.2	Stimulus/Response Sequences

* Az adminisztrátor új pályázatot hoz létre a rendszerben, melyet a rendszer elment és a megadott időpontban publikál.  
* Az adminisztrátor módosítja a pályázat életciklus-státuszát (pl. lezárja a szavazást), melyet a rendszer rögzít, és letiltja a további szavazatokat az adott pályázaton.  
* A felhasználó megtekinti a pályázatok listáját, a rendszer pedig az alacsony sávszélességre optimalizálva, lapozható formában megjeleníti az aktuális és múltbeli kampányokat.

4.1.3	Functional Requirements

* F-PK-01: A rendszer felületet biztosít az adminisztrátorok számára új pályázatok létrehozására (cím, leírás, határidők, érintett önkormányzat megadásával).  
* F-PK-02: A rendszer támogatja a pályázatok és ötletek teljes életciklus-kezelését (státuszok nyilvántartása és módosítása).  
* F-PK-03: A rendszer publikus, optimalizált (alacsony hálózati terhelésű) listanézetet biztosít a felhasználók számára a pályázatok böngészéséhez.  
* F-PK-04: A rendszer automatikusan megnyitja és lezárja az ötletbeküldési és szavazási szakaszokat a pályázathoz beállított határidők alapján.

  2. ## **Ötletbeküldés multimédiás támogatással**

*\<Don’t really say “System Feature 1.” State the feature name in just a few words.\>*

4.2.1	Description and Priority

Magas prioritás.  
A lakosok a rendszeren keresztül új ötleteket javasolhatnak az aktív pályázatokra probléma-megoldás párok formájában. Az ötletekhez csatolhatók képek és videók is, figyelembe véve a ZDR program hálózat-optimalizálási követelményeit.

4.2.2	Stimulus/Response Sequences

* A felhasználó elindítja az ötletbeküldést egy adott pályázaton, a rendszer ellenőrzi, hogy a felhasználó jogosult-e (lakcím egyezik, és még nem küldött be ötletet a kampányban).  
* A felhasználó feltölt egy képet/videót és szöveget küld be; a rendszer a médiafájlokat tömöríti az alacsony sávszélességű eléréshez, majd eltárolja a javaslatot.  
* A felhasználó megpróbál egy második ötletet beküldeni ugyanabba a pályázatba, a rendszer hibaüzenettel elutasítja a kérést.


4.2.3	Functional Requirements

* F-OB-01: A rendszer lehetővé teszi a felhasználók számára, hogy strukturált űrlapon (probléma leírása és javasolt megoldás) adják le ötleteiket.  
* F-OB-02: A rendszer kép- és videófeltöltési lehetőséget biztosít az ötletekhez.  
* F-OB-03: A rendszer a feltöltött médiafájlokat szerveroldalon automatikusan átméretezi és tömöríti a lassú internetkapcsolattal rendelkező régiók kiszolgálása érdekében (klímabarát, takarékos adattárolás).  
* F-OB-04: A rendszer kikényszeríti, hogy egy felhasználó egy adott pályázatra kizárólag egyetlen ötletet adhasson be.  
* F-OB-05: A rendszer az ötleteket a hozzájuk tartozó pályázathoz kapcsolva tárolja el.

  3. ## **Hitelesített szavazási modul és lakcím-alapú szűrés**

4.3.1	Description and Priority

Kritikus prioritás. A szavazás és a jogosultságkezelés a rendszer lelke. A rendszer a Zamunda One API segítségével azonosítja a felhasználókat és kéri le a lakcímüket. A szavazatokat úgy kell eltárolni, hogy azok utólagos módosítása vagy törlése (még adminisztrátori szinten is) lehetetlen legyen.

4.3.2	Stimulus/Response Sequences

* A felhasználó bejelentkezik a rendszerbe; a rendszer a Zamunda One API-n keresztül elvégzi az autentikációt és lekéri a bejelentett lakóhelyet.  
* A felhasználó szavazatot ad le egy helyi ötletre; a rendszer ellenőrzi, hogy még nem szavazott-e az adott ötletre, majd megváltoztathatatlan (immutable) módon rögzíti a szavazatot.  
* A felhasználó megpróbál szavazni vagy ötletet beküldeni egy másik önkormányzat pályázatán; a rendszer jogosultság hiányára hivatkozva elutasítja a műveletet.  
* Egy adminisztrátor megpróbál törölni egy leadott szavazatot; a rendszer technológiai szinten meggátolja a tranzakciót.


4.3.3	Functional Requirements

* F-SZ-01: A rendszer integrálódik a Zamunda One API-val az autentikáció (bejelentkezés) és az autorizáció (hivatalos lakcímadatok lekérése) céljából.  
* F-SZ-02: A rendszer szűri a hozzáférést: a felhasználó csak a saját bejelentett lakóhelye szerinti önkormányzat pályázatain adhat be ötletet és szavazhat.  
* F-SZ-03: A rendszer lehetővé teszi, hogy egy felhasználó egy pályázaton belül korlátlan számú különböző ötletre szavazzon, de egy konkrét ötletre csak egyetlen szavazatot adhat le.  
* F-SZ-04: A rendszer a leadott szavazatokat PostgreSQL-alapú, csak hozzáfűzhető szavazati tranzakciónaplóban tárolja. A módosítást és törlést adatbázis-szintű jogosultságokkal és védelmi mechanizmusokkal tiltja.  
* F-SZ-05: A rendszer a szavazatokat **pszeudonimizált szavazói kulccsal** kapcsolja az ötletekhez. A szavazati rekord nem tartalmaz nyers személyes azonosítót, ugyanakkor a pszeudonim kulcs lehetővé teszi az egy ötletre egyszeri szavazás adatbázis-szintű ellenőrzését.

5. # **Other Nonfunctional Requirements**

   1. ## **Performance Requirements** {#performance-requirements}

* First Contentful Paint of 75th percentile 1.8 másodperc.  
* A sávszélesség-takarékosság és a klímabarát működés érdekében a rendszer a feltöltött videókat és képeket a szerveroldalon automatikusan konvertáljuk WebM maximum minőségre és WebP formátumban. A kliensoldali webalkalmazás a képek és videók esetében "lazy loading" technikát alkalmaz, hogy elkerülje az indokolatlan hálózati forgalmat.  
* A hálózati forgalom minimalizálása, a magas késleltetés ellensúlyozása és a klímabarát szerverüzemeltetés érdekében a rendszernek az alábbi többrétegű gyorsítótárazási (caching) stratégiákat kell alkalmaznia:  
* **Kliensoldali (böngésző) gyorstárazás és PWA képességek:** A webalkalmazásnak gyorsítótárazást kell alkalmaznia a statikus erőforrásokon (CSS, JavaScript, betűtípusok, logók) szabványos HTTP Cache-Control fejlécek segítségével, hogy a keretrendszer elemeit offline is elérhetővé tegye, így ismételt látogatáskor csak a dinamikus adatokat (pl. új ötletek) kell letölteni.  
* **CDN (Content Delivery Network) és Edge Caching:** A felhasználók által feltöltött és a szerver által már optimalizált (tömörített) multimédiás tartalmak (képek, videók) kiszolgálása elosztott CDN hálózaton keresztül történik. Ez tehermentesíti az elsődleges szervert, csökkenti az energiafogyasztást, és a tartalmat földrajzilag közelebb hozza a felhasználóhoz.  
* **Szerveroldali memóriagyorsítótár (Backend In-Memory Cache):** A gyakran lekérdezett, de ritkán változó publikus adatok (pl. nyitott pályázatok listája, települések listája, ötletek statikus szöveges tartalma) kiszolgálása memóriatárbol (pl. Redis vagy Memcached) történik az adatbázis folyamatos terhelése helyett.

  2. ## **Safety Requirements**

*\-*

3. ## **Security Requirements**

* Csak bejelentkezett és hitelesített felhasználó tud egy ötletre egy szavazatot leadni.  
* A rendszernek szigorúan korlátozni kell a szavazáshoz való hozzáférést.  
* A szavazatok adatbázis-szintű védettséget kell, hogy élvezzenek; a módosítás és törlés technológiai szinten tiltott.  
* A szavazati tranzakciónapló nem tartalmaz nyers személyes azonosítót, a duplikált szavazat kizárásához a rendszer pszeudonimizált szavazói kulcsot használ.  
* A pszeudonimizáláshoz szükséges titok (HMAC secret) csak a *Voting Service* számára hozzáférhető.

*\<Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.\>*

4. ## **Software Quality Attributes**

* Elérhetőség  
* **Hatékonyság** (klímabarát és sávszélesség-takarékos működés)  
* **Integritás** (szavazatok megmásíthatatlansága)  
* Biztonság  
* **Robusztusság** (magas késleltetés és hálózati hibák tűrése)  
* Használhatóság  
* Bővíthetőség  
* **Elaszticitás**  
* Skálázhatóság  
* Karbantarthatóság

*\<Specify any additional quality characteristics for the product that will be important to either the customers or the developers. Some to consider are: adaptability, availability, correctness, flexibility, interoperability, maintainability, portability, reliability, reusability, robustness, testability, and usability. Write these to be specific, quantitative, and verifiable when possible. At the least, clarify the relative preferences for various attributes, such as ease of use over ease of learning.\>*

5. ## **Business Rules**

**BR-1:** Adott önkormányzat pályázatára csak és kizárólag az ottani, bejelentett lakcímmel rendelkező lakosok adhatnak be ötleteket.  
**BR-2:** Adott önkormányzat pályázatán leadott ötletekre csak és kizárólag az ottani, bejelentett lakcímmel rendelkező lakosok szavazhatnak.  
**BR-3:** Egy felhasználó egy adott pályázatra (kampányra) maximum egy darab ötletet nyújthat be.  
**BR-4:** Egy adott ötletre egy felhasználó kizárólag egyetlen egyszer szavazhat.  
**BR-5:** Az egyes pályázatokon belül egy felhasználó tetszőleges számú (de egyedi) ötletre adhat le szavazatot.  
**BR-6:** A platform nem kezeli és nem követi nyomon a pályázati költségvetési kereteket, és azok kimerülését (out-of-scope)  
**BR-7:** A közzétett ötleteken a szavazás eredményhirdetéséig nem jelenik meg a szavazatok száma.

6. # **Other Requirements**

*\<Define any other requirements not covered elsewhere in the SRS. This might include database requirements, internationalization requirements, legal requirements, reuse objectives for the project, and so on. Add any new sections that are pertinent to the project.\>*

**Appendix A: Glossary**

A projekt egységes fogalomtárát lásd: **[Fogalomtár](../fogalomtar/)**.

**Appendix B: Analysis Models**

*\<Optionally, include any pertinent analysis models, such as data flow diagrams, class diagrams, state-transition diagrams, or entity-relationship diagrams*.\>

**Appendix C: To Be Determined List**

*\<Collect a numbered list of the TBD (to be determined) references that remain in the SRS so they can be tracked to closure.\>*
