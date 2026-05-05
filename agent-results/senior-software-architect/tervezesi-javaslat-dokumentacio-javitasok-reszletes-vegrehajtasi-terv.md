# Tervezési javaslat: dokumentációjavítások részletes végrehajtási terve

Megjegyzés: a jelenlegi futtatási környezetben nem én választom a modellt, de ehhez a `senior-software-architect` szerephez érdemes a legerősebb elérhető reasoning modellt használni.

## Kontextus

A korábbi senior architect értékelés alapján a dokumentáció alapiránya jó: a Community Choice architektúrája továbbra is **hibrid Service-Based Architecture + Event-Driven Architecture**, PostgreSQL, Redis, Kafka, MinIO/CDN, React/TypeScript webalkalmazás és Node.js/NestJS szolgáltatások mellett marad.

A jelen végrehajtási terv a korábbi javaslatból három pontot részletez:

1. **SRS tisztítása** – teljesen kidolgozott, végrehajtható feladatlista.
2. **Szolgáltatáshatárok dokumentálása** – nem új oldalként, hanem a C4 modellben szereplő szolgáltatások `description` attribútumainak kibővítésével.
3. **Minőségi attribútum forgatókönyvek hozzáadása** – konkrét példák minden kiemelt architekturális karakterisztikához.

Nem része ennek a végrehajtási tervnek az ADR-003, ADR-004 vagy ADR-005 további átírása, mert ezek a jelenlegi dokumentációban már nagyrészt rendezettek.

---

## 1. SRS tisztítása – részletes végrehajtási feladat

Érintett fájl:

```text
docs/src/content/docs/srs.md
```

### Cél

Az SRS legyen beadandó-kompatibilis, magyar nyelvű, sablonmaradványoktól mentes, egységes követelményazonosítókat használó dokumentum. A végrehajtó ágens ne hagyjon benne angol template instrukciót, üres táblázatot vagy kitöltetlen mellékletet.

### Eltávolítandó elemek

A végrehajtó ágens az alábbiakat törölje vagy írja át:

#### 1.1. Címlap sablonmaradványai

Távolítsa el a dokumentum elejéről ezeket a sorokat:

```markdown
# **Software Requirements Specification**

# **for**

# **Community Choice**

**Version 1.0 approved**

**Prepared by \<author\>**

**\<organization\>**

**\<date created\>**
```

Javasolt csere:

```markdown
# Community Choice – szoftverkövetelmény-specifikáció

**Verzió:** 1.0  
**Projekt:** Zamunda Digitális Reneszánsz – Community Choice  
**Dokumentum típusa:** Szoftverkövetelmény-specifikáció
```

Ne maradjon a fájlban `Prepared by`, `<author>`, `<organization>` vagy `<date created>` szöveg.

#### 1.2. Kézzel generált, hibás Table of Contents

Távolítsa el a teljes kézi tartalomjegyzéket:

- `**Table of Contents**`
- az összes `heading=h...` típusú hivatkozást,
- a sablon szerinti oldalszámokat (`[1]`, `[2]`, `[ii]`),
- a teljes „Revision History” tartalomjegyzék-bejegyzést.

Indoklás: Starlight automatikusan kezeli az oldalon belüli navigációt; a Google Docs-ból vagy Word sablonból maradt horgonyok hibásak és rontják az olvashatóságot.

#### 1.3. Üres Revision History táblázat

Verziótörténet mindenképp kell, akkor magyar, kitöltött rövid blokk legyen:

```markdown
## Verziótörténet

| Verzió | Dátum | Változás |
| --- | --- | --- |
| 1.0 | 2026-05-05 | Első beadandó-kompatibilis SRS-verzió |
```

#### 1.4. Hibás számozású főcímek

Jelenleg több cím ilyen formában szerepel:

```markdown
1. # **Introduction**
   1. ## **Purpose**
```

Ezeket normál Markdown címsorokra kell cserélni. Javasolt magyar szerkezet:

```markdown
## 1. Bevezetés

### 1.1. Cél
### 1.2. Dokumentumkonvenciók
### 1.3. Célközönség
### 1.4. Termékkör
### 1.5. Hivatkozások

## 2. Átfogó leírás
...
```

Ne maradjon olyan sor, amely egyszerre listaelem és címsor (`1. #`, `2. ##`).

#### 1.5. Angol sabloninstrukciók

Távolítsa el maradéktalanul az alábbi template-szövegeket:

```markdown
*\<Don’t really say “System Feature 1.” State the feature name in just a few words.\>*
```

```markdown
*\<Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.\>*
```

```markdown
*\<Specify any additional quality characteristics for the product that will be important to either the customers or the developers. Some to consider are: adaptability, availability, correctness, flexibility, interoperability, maintainability, portability, reliability, reusability, robustness, testability, and usability. Write these to be specific, quantitative, and verifiable when possible. At the least, clarify the relative preferences for various attributes, such as ease of use over ease of learning.\>*
```

```markdown
*\<Define any other requirements not covered elsewhere in the SRS. This might include database requirements, internationalization requirements, legal requirements, reuse objectives for the project, and so on. Add any new sections that are pertinent to the project.\>*
```

```markdown
*\<Optionally, include any pertinent analysis models, such as data flow diagrams, class diagrams, state-transition diagrams, or entity-relationship diagrams*.\>
```

```markdown
*\<Collect a numbered list of the TBD (to be determined) references that remain in the SRS so they can be tracked to closure.\>*
```

A végrehajtó ágens a módosítás után keressen rá ezekre a mintákra: `<`, `Don’t really say`, `Specify any`, `TBD`, `System Feature 1`, `System Feature 2`. Ezek közül egyik sem maradhat sablonértelemben a dokumentumban.

#### 1.6. Üres vagy értelmetlen szakaszok

- `Hardware Interfaces` jelenleg csak `-`. Ezt ne hagyja így. Javasolt szöveg:

```markdown
### 3.2. Hardverinterfészek

A rendszer nem igényel közvetlen, speciális hardverinterfészt. A felhasználók szabványos webes böngészőn keresztül, asztali vagy mobil eszközről érik el a platformot.
```

- `Safety Requirements` jelenleg csak `*-*`. Javasolt szöveg:

```markdown
### 5.2. Üzembiztonsági követelmények

A rendszer nem vezérel fizikai biztonságkritikus folyamatot, ezért klasszikus safety követelmény nem releváns. Üzembiztonsági szempontból ugyanakkor fontos, hogy szavazási időszakban a szolgáltatás részleges hiba esetén is kontrolláltan működjön: a szavazatok rögzítése ne sérüljön, a hibás háttérfolyamatok pedig ne akadályozzák a szavazást.
```

- `Other Requirements` ne legyen üres. Javasolt tartalom:

```markdown
## 6. Egyéb követelmények

- A rendszer elsődleges nyelve magyar.
- A személyes adatok kezelésénél az adatminimalizálás elvét kell követni.
- A szavazati rekordok nem tartalmazhatnak nyers személyes azonosítót.
- A médiatartalmak tárolásánál optimalizált, webes megjelenítésre alkalmas formátumokat kell használni.
```

- `Appendix B: Analysis Models` törölhető, ha nincs saját elemzési modell. Ha marad, akkor hivatkozzon a C4 modell oldalra:

```markdown
## B függelék: Elemzési modellek

Az architekturális elemzési modelleket a [C4 modell](../architektura/c4-modell/) oldal tartalmazza.
```

- `Appendix C: To Be Determined List` törölhető, ha nincs nyitott TBD. Ha marad, akkor magyarul és kitöltve szerepeljen:

```markdown
## C függelék: Nyitott kérdések

Jelenleg nincs beadandó szinten nyitva hagyott SRS-követelmény. A Zamunda One pontos technikai API-szerződése implementációs fázisban pontosítandó.
```

### Követelményazonosítók egységesítése

A dokumentumban jelenleg az architektúraoldalak korábbi `F-SZAV-01` hivatkozást is említenek, míg az SRS már `F-SZ-01` ... `F-SZ-05` formát használ. A végrehajtó ágens az SRS-ben tartsa meg az alábbi azonosítókat:

- `F-PK-01` ... `F-PK-04` – pályázatkezelés,
- `F-OB-01` ... `F-OB-05` – ötletbeküldés,
- `F-SZ-01` ... `F-SZ-05` – szavazás.

Az SRS-ben ne legyen `F-SZAV-*` azonosító. Ha az architektúraoldalakban később javítás történik, ott is `F-SZ-04` vagy a megfelelő `F-SZ-*` azonosító szerepeljen, de ez a konkrét végrehajtási csomag elsődlegesen az SRS-re vonatkozik.

### Tartalmi pontosítások az SRS-ben

#### Szavazás és anonimitás

Ahol a dokumentum „anonimizált” szavazatról beszélne, ott a végrehajtó ágens a pontosabb **pszeudonimizált szavazói kulcs** kifejezést használja. A követelmény lényege:

- a szavazati rekord nem tárol nyers személyes azonosítót,
- a duplikált szavazat kizárása determinisztikus `voter_key` alapján történik,
- a megoldás nem teljes anonimitás, hanem adatminimalizált pszeudonimizálás.

#### Nemfunkcionális követelmények mérhetőbbé tétele

A `Software Quality Attributes` felsorolás önmagában túl általános. A végrehajtó ágens egészítse ki rövid, mérhető vagy ellenőrizhető állításokkal. Példák:

- **Hatékonyság:** a publikus listanézetek lapozottak, gyorsítótárazhatók és csak a szükséges mezőket adják vissza.
- **Integritás:** a szavazati rekordokon `UPDATE` és `DELETE` művelet adatbázis-szinten tiltott.
- **Robusztusság:** a médiafeltöltés darabolt és megszakítás után folytatható.
- **Elaszticitás:** szavazási csúcsterhelés esetén a Voting Service önállóan skálázható.

A részletes scenario-kat lásd a jelen dokumentum 3. fejezetében; ezek átvezethetők az `architektura/karakterisztikak.md` oldalra.

### Elfogadási kritériumok az SRS tisztításához

A végrehajtás akkor tekinthető késznek, ha:

- nincs angol template-instrukció,
- nincs `<author>`, `<organization>`, `<date created>`, `Don’t really say`, `Specify any`, `TBD` jellegű sablonmaradvány,
- nincs üres Revision History táblázat,
- nincs hibás, kézzel generált Google Docs/Word tartalomjegyzék,
- a címsorok szabályos Markdown címsorok,
- a követelményazonosítók egységesek,
- az üres szakaszok vagy törölve vannak, vagy magyar, projektspecifikus tartalommal vannak kitöltve,
- az SRS továbbra is tartalmazza az összes lényegi funkcionális követelményt: pályázatkezelés, ötletbeküldés, médiafeltöltés, lakcím-alapú jogosultság, egy ötletre egyszeri szavazás, megváltoztathatatlan szavazatok.

---

## 2. Szolgáltatáshatárok dokumentálása a C4 modell `description` attribútumaiban

### Cél

Ne készüljön külön „Szolgáltatáshatárok” dokumentációs oldal. Ehelyett a C4/LikeC4 modellben minden releváns szolgáltatás vagy infrastruktúraelem `description` attribútuma tartalmazza a pontos felelősséget, nem-felelősséget, adatbirtoklást és kapcsolódási jelleget.

Érintett fájl az implementáló ágens számára:

```text
docs/src/community-choice.c4
```

Fontos: ezt a fájlt nem ebben a senior architect lépésben kell módosítani, hanem a C4/LikeC4 karbantartó ágenssel.

### Description tartalmak

Az alábbi szövegek szolgálnak implementálható tartalomként. A végrehajtó ágens igazítsa a LikeC4 szintaxisához, de a szakmai tartalmat őrizze meg.

#### Webalkalmazás

```text
React/TypeScript alapú webes kliens, amely a lakosok és adminisztrátorok elsődleges felülete. Felelős a publikus pályázati és ötletlisták megjelenítéséért, az ötletbeküldési és szavazási folyamat felhasználói élményéért, az alacsony sávszélességre optimalizált kliensoldali működésért, lazy loadingért és böngészőoldali cache-használatért. Nem felelős a szavazási jogosultság végső eldöntéséért, a szavazatok rögzítéséért, a médiafájlok szerveroldali feldolgozásáért vagy az auditnapló hiteles vezetéséért; ezek backend szolgáltatási felelősségek.
```

#### Voting Service

```text
Node.js/NestJS alapú, önállóan skálázható szavazási szolgáltatás. Felelős a Zamunda One-ból származó hitelesített lakcímadat alapján végzett szavazási jogosultságellenőrzésért, a pszeudonimizált szavazói kulcs képzéséért, az egy ötletre egyszeri szavazás kikényszerítéséért, valamint a szavazat PostgreSQL-ben történő, csak hozzáfűzhető tranzakciós rögzítéséért. A szavazat elsődleges igazságforrása a PostgreSQL, nem a Kafka. A szolgáltatás Kafka felé audit/integrációs eseményt publikál. Nem felelős kampányok létrehozásáért, ötletek moderálásáért, médiafeldolgozásért vagy értesítések kézbesítéséért.
```

#### Campaign & Admin Service

```text
Node.js/NestJS alapú kampány-, ötlet- és adminisztrációs szolgáltatás. Felelős az önkormányzati pályázatok létrehozásáért, életciklusának kezeléséért, az ötletbeküldések fogadásáért, adminisztratív moderálásáért, publikálásáért és a publikus listanézetek alacsony adatforgalmú kiszolgálásáért. Kezeli a médiafeltöltési folyamat üzleti oldalát és eseményt bocsát ki a Media Worker számára. Nem módosíthat és nem törölhet leadott szavazatot, nem dönt szavazási jogosultságról a Voting Service helyett, és nem végez CPU-igényes videó- vagy képtömörítést a szinkron webes kérés útjában.
```

#### Notification Service

```text
Aszinkron eseményfogyasztó szolgáltatás, amely Kafka domain események alapján e-mail és push értesítéseket készít és kézbesít például új pályázat, szakaszváltás, lezárás vagy eredményhirdetés esetén. Hibája vagy lassulása nem akadályozhatja a szavazást, az ötletbeküldést vagy a kampánykezelést. Nem elsődleges adatforrás, nem hoz üzleti döntést, és nem rögzít szavazatot; a szükséges adatokat eseményekből vagy olvasási célú API-kon keresztül kapja.
```

#### Audit Service

```text
Aszinkron auditnaplózó szolgáltatás, amely a Kafka eseményfolyamból fogyasztja a jelentős domain eseményeket, például szavazat leadása, ötlet beküldése, kampányállapot-változás vagy adminisztrátori beavatkozás. Felelős az auditcélú, visszakereshető eseménynapló felépítéséért és újrajátszhatóságáért. Nem a szavazatok elsődleges igazságforrása, nem jogosult szavazati rekord módosítására vagy törlésére, és nem lehet a felhasználói kérések szinkron kritikus útjának része.
```

#### Media Worker

```text
Aszinkron médiafeldolgozó háttérfolyamat, amely Kafka esemény alapján dolgozza fel az ötletekhez feltöltött képeket és videókat. Felelős az átméretezésért, tömörítésért, webes formátumokra alakításért, több minőségi változat előállításáért és az optimalizált fájlok MinIO/CDN felé történő átadásáért. Nem felelős ötletek üzleti jóváhagyásáért, kampányéletciklusért, szavazási jogosultságért vagy értesítésküldésért. Skálázása a médiafeldolgozási terheléstől függetlenül történhet.
```

#### PostgreSQL

```text
A rendszer elsődleges relációs tranzakciós adattárolója. Felelős a kampányok, ötletek, adminisztratív állapotok és a szavazati tranzakciónapló konzisztens tárolásáért. A szavazatok esetében append-only tárolási modellt, egyediségi constraintet és UPDATE/DELETE tiltást kell biztosítania. A szavazat elsődleges igazságforrása ez az adattár. Nem médiafájl-tároló, nem cache és nem üzenetbróker.
```

#### Redis

```text
Szerveroldali memóriagyorsítótár gyakran olvasott, ritkán változó publikus adatokhoz, például nyitott pályázatok listájához, településlistákhoz és optimalizált listanézeti adatokhoz. Felelős az adatbázis-terhelés és válaszidő csökkentéséért. Nem lehet a szavazatok elsődleges tárolója, nem használható megváltoztathatatlan auditnaplóként, és nem helyettesíti a PostgreSQL tranzakciós garanciáit.
```

#### Kafka

```text
Tartós, append-only eseményfolyam az aszinkron integrációhoz. Felelős a Voting Service és Campaign & Admin Service által kibocsátott domain események továbbításáért az Audit Service, Notification Service és Media Worker felé. Támogatja a független consumer groupokat, offset-kezelést és esemény-visszajátszást. Nem a szavazatok elsődleges igazságforrása, és nem helyettesíti a PostgreSQL tranzakciós rögzítést.
```

#### MinIO/CDN

```text
Objektumtároló és tartalomelosztó réteg a felhasználók által feltöltött, majd optimalizált képek és videók tárolására és kiszolgálására. Felelős a médiatartalmak sávszélesség-takarékos, földrajzilag hatékony eléréséért, cache-eléséért és statikus kiszolgálásáért. Nem tárol üzleti tranzakciókat, szavazatokat vagy személyes azonosításra alkalmas szavazói adatokat.
```

#### Zamunda One

```text
Külső állami azonosítási és autorizációs szolgáltatás, amely megbízható bejelentkezési információt és hiteles lakcímadatot biztosít a Community Choice számára. Felelős a felhasználó személyazonosságának és bejelentett lakóhelyének igazolásáért. Nem tárol Community Choice szavazatokat, nem dönt kampányéletciklusról, és nem helyettesíti a Voting Service üzleti jogosultságellenőrzését.
```

### Elfogadási kritériumok a C4 description bővítéshez

- Minden felsorolt szolgáltatásnál vagy infrastruktúraelemnél legyen informatív `description`.
- A `description` ne csak technológiai címke legyen, hanem tartalmazza:
  - fő felelősség,
  - kifejezett nem-felelősség,
  - adatbirtoklás vagy adatforrás szerep,
  - szinkron/aszinkron kapcsolódás lényege.
- A leírások ne állítsák, hogy Kafka a szavazatok igazságforrása.
- A leírások legyenek összhangban az ADR-001 ... ADR-005 döntésekkel.

---

## 3. Minőségi attribútum forgatókönyvek hozzáadása

Javasolt érintett fájl:

```text
docs/src/content/docs/architektura/karakterisztikak.md
```

### Cél

Az architekturális karakterisztikák ne csak definíciószerűen, hanem konkrét, értékelhető scenario-ként is jelenjenek meg. A végrehajtó ágens minden karakterisztikához adjon hozzá legalább egy `Forgatókönyv` blokkot.

### Hatékonyság – konkrét scenario

```markdown
### Forgatókönyv: alacsony sávszélességű böngészés

- **Forrás:** vidéki, gyenge mobilhálózaton böngésző lakos.
- **Stimulus:** a felhasználó megnyitja egy aktív önkormányzati pályázat ötletlistáját.
- **Környezet:** magas késleltetésű, alacsony sávszélességű hálózat; sok ötlethez tartozik kép vagy videó.
- **Válasz:** a rendszer lapozott, minimalizált mezőkészletű API-választ ad, a kliens lazy loadingot használ, a médiatartalmak optimalizált WebP/WebM változatai CDN-ről töltődnek.
- **Válaszmérték:** a felhasználó a lista első tartalmi elemeit nagy médiatartalmak letöltése nélkül látja; a szerver nem küld le szükségtelen részletes adatokat vagy eredeti méretű médiafájlokat.
- **Kapcsolódó döntések:** Redis cache, MinIO/CDN, aszinkron Media Worker, React/TypeScript kliens.
```

### Integritás – konkrét scenario

```markdown
### Forgatókönyv: ismételt szavazási kísérlet és adminisztrátori beavatkozás tiltása

- **Forrás:** hitelesített lakos, illetve egy magas jogosultságú adminisztrátor.
- **Stimulus:** a lakos hálózati retry miatt ugyanarra az ötletre kétszer küldi el a szavazási kérést; később egy adminisztrátor megpróbálna szavazatot módosítani vagy törölni.
- **Környezet:** szavazási csúcsterhelés, párhuzamos kérések, PostgreSQL tranzakciós tároló.
- **Válasz:** a Voting Service determinisztikus pszeudonimizált `voter_key` értéket képez, majd a PostgreSQL `UNIQUE(idea_id, voter_key)` jellegű constraintje kizárja a duplikált szavazatot. A szavazati táblán az `UPDATE` és `DELETE` adatbázis-szinten tiltott.
- **Válaszmérték:** ugyanarra az ötletre ugyanattól a szavazótól legfeljebb egy érvényes szavazati rekord jön létre; meglévő szavazat utólagos módosítása vagy törlése nem hajtható végre alkalmazásszint megkerülésével sem.
- **Kapcsolódó döntések:** ADR-005, PostgreSQL append-only szavazati tranzakciónapló, Kafka audit eseményfolyam.
```

### Robusztusság – konkrét scenario

```markdown
### Forgatókönyv: megszakadó médiafeltöltés

- **Forrás:** lakos, aki ötlethez videót tölt fel mobilhálózaton.
- **Stimulus:** a feltöltés közben a kapcsolat többször megszakad vagy jelentősen belassul.
- **Környezet:** instabil internetkapcsolat, nagyméretű videófájl, aktív ötletbeküldési időszak.
- **Válasz:** a rendszer darabolt, folytatható feltöltést alkalmaz; a sikeresen feltöltött darabokat nem kell újraküldeni. A webes kérés nem végzi el szinkron módon a videótömörítést, hanem eseményt küld a Media Workernek.
- **Válaszmérték:** rövid hálózati szakadás után a feltöltés folytatható, nem indul teljesen elölről; a médiafeldolgozás hibája vagy lassulása nem teszi elérhetetlenné az ötletbeküldési vagy szavazási funkciókat.
- **Kapcsolódó döntések:** TUS/chunked upload, Kafka, Media Worker, MinIO/CDN.
```

### Elaszticitás – konkrét scenario

```markdown
### Forgatókönyv: szavazási hajrá csúcsterheléssel

- **Forrás:** nagy létszámú lakosság egy népszerű önkormányzati kampány utolsó órájában.
- **Stimulus:** a szavazási forgalom rövid idő alatt többszörösére nő.
- **Környezet:** kampányzárás előtti csúcsterhelés, a publikus böngészés és médiafeltöltés forgalma közben is folytatódik.
- **Válasz:** az üzemeltetés csak a Voting Service példányszámát növeli, miközben a Campaign & Admin Service, Notification Service és Media Worker saját terhelésük szerint külön skálázhatók. A szavazási út szinkron része PostgreSQL tranzakcióra támaszkodik, az audit és értesítés Kafka-n keresztül aszinkron történik.
- **Válaszmérték:** a szavazási kapacitás célzottan növelhető anélkül, hogy a teljes alkalmazást monolitként kellene replikálni; a csúcsidőszak után a Voting Service visszaskálázható, csökkentve az üresjárati költséget és energiafogyasztást.
- **Kapcsolódó döntések:** ADR-001, ADR-002, ADR-003, SBA + EDA hibrid architektúra.
```

### Elfogadási kritériumok a scenario-khoz

- Minden kiemelt karakterisztika alatt szerepeljen legalább egy konkrét forgatókönyv.
- A forgatókönyvek tartalmazzák legalább ezeket az elemeket: forrás, stimulus, környezet, válasz, válaszmérték, kapcsolódó döntések.
- A példák kapcsolódjanak konkrét Community Choice követelményekhez, ne legyenek általános szoftverminőségi definíciók.
- A scenario-k ne vezessenek be új technológiát a jelenlegi alapdöntéseken kívül.

---

## Összefoglaló a végrehajtó ágens számára

Prioritás szerint:

1. **Először az SRS-t tisztítsd meg** a fenti eltávolítási és átírási lista alapján.
2. **Ezután a C4 modell szolgáltatásainak `description` attribútumait bővítsd** a megadott felelősségi szövegekkel; ne hozz létre külön szolgáltatáshatár oldalt.
3. **Végül az architekturális karakterisztikák oldalra adj scenario-kat** a fenti konkrét példák alapján.

A módosítások után a dokumentációnak konzisztensen azt kell kommunikálnia, hogy a rendszer:

- hibrid SBA + EDA architektúrát használ,
- a szavazatok igazságforrásaként PostgreSQL-t használ,
- Kafka-t audit/integrációs/event log célra használja,
- pszeudonimizált, nem teljesen anonim szavazói kulcsot alkalmaz,
- nem külön oldalban, hanem a C4 description mezőkben dokumentálja a szolgáltatáshatárokat.
