---
title: Design Brief – Community Choice Zamunda
description: Tervezői brief a Community Choice zamundai közösségi ötletpályázati platform arculatához, logójához és stíluslapjához
---

# Design Brief – Community Choice Zamunda

## 1. A projektről – röviden

A **Community Choice** a fiktív **Zamunda Digitális Reneszánsz (ZDR)** állami digitális transzformációs programjának nyilvános webes platformja. Célja, hogy Zamunda településeinek lakosai helyi közösségi fejlesztési ötleteket javasolhassanak (pl. zöldfelületek, közösségi terek, padok, kerékpártárolók), és hiteles lakcímük alapján szavazhassanak egymás javaslataira.

A platform **önkormányzati ötletpályázatokat** kezel: az adminisztrátorok kampányokat hirdetnek, a lakosok probléma–megoldás párokat küldenek be képekkel/videókkal, majd a helyi közösség demokratikusan szavaz a javaslatokról. A szavazatok megmásíthatatlanok, a rendszer integritása kritikus.

**Valós ihletők:** [otlet.budapest.hu](https://otlet.budapest.hu/), [kozossegikoltsegvetes.terezvaros.hu](https://kozossegikoltsegvetes.terezvaros.hu/)

## 2. Célközönség

| Szereplő | Jellemző | Képernyők |
| --- | --- | --- |
| **Lakos / Szavazó** | Zamundai állampolgár, bejelentkezett, hitelesített lakcímmel. Eséllyel nem technikai szakember. Lehet, hogy lassú internetet használ. | Publikus portál, lakossági vezérlőpult |
| **Vendég** | Böngésző, bejelentkezés nélkül. Csak megtekintésre jogosult. | Publikus portál (korlátozott) |
| **Adminisztrátor** | Közigazgatási dolgozó. Kezeli a pályázatokat és az ötleteket. | Közigazgatási panel |
| **Super user** | Rendszeradminisztrátor, jogkiosztó. | Közigazgatási panel (kiemelt) |

**Kulcsfontosságú:** A lakosok között vannak, akik **alacsony sávszélességű, magas késleltetésű** hálózaton böngésznek. A design nem lehet adat- vagy erőforrás-igényes.

## 3. Arculati kulcsüzenetek

A vizuális identitásnak az alábbi üzeneteket kell közvetítenie:

1. **Közösség és demokrácia** – A platform a helyi közösség hangja. A szavazat egyenlő, átlátható, megmásíthatatlan.
2. **Bizalom és integritás** – Állami, hivatalos szolgáltatás: megbízható, átlátható, hiteles.
3. **Modern digitális állam** – A ZDR program része: klímabarát, takarékos, előretekintő.
4. **Nyitottság és befogadás** – Minden lakos számára elérhető, egyszerű, érthető.

## 4. Márkanév és elnevezések

| Fogalom | Használat |
| --- | --- |
| **Community Choice** | A platform neve, elsődleges logószöveg |
| **Zamunda Digitális Reneszánsz** | Anyaprogram neve, hivatkozási kontextus |
| **ZDR** | Az anyaprogram rövidítése (nem logóelem) |
| **Zamunda One** | Külső azonosítási szolgáltatás (nem arculati elem, de a bejelentkezésnél megjelenhet) |

## 5. Színvilág és hangulat

### Ajánlott irányok

- **Hivatalos, de barátságos:** Zamunda egy afrikai királyság, amely modernizálódik. Az arculat ötvözze a hagyományos méltóságot a digitális frissességgel.
- **Klímabarát, természetközeli:** Zöld és földszínű árnyalatok, amelyek a fenntarthatóságot és a közösségi fejlesztéseket (zöldfelületek, parkok, közösségi terek) jelzik.
- **Nyugodt, megbízható:** A szavazás integritása miatt a design sugározzon stabilitást és átláthatóságot – semmi harsány, semmi bizonytalan.

### Kerülendő

- Agresszív, neon vagy túlzottan technológiai színek (kék neon, szürke tech-stílus).
- Túl játékos vagy gyermekded stílus – ez egy állami, hivatalos platform.
- Nagy, sávszélesség-igényes háttérképek és animációk.

## 6. Logo követelmények

- **Tipográfia:** A „Community Choice" felirat olvasható, tiszta betűtípussal. A „Zamunda" szó opcionális kiegészítőként vagy feliratként jelenhet meg.
- **Ikonomika:** Egy egyszerű, jól skálázható szimbólum, ami a közösséget, a választást vagy a helyi összetartozást jelképezi. Lehet absztrakt (pl. összefonódó körök, kezek, szavazó pip), de kerülendő a túlzottan komplex ábrázolás.
- **Helyzetek:** Készüljön horizontális (fejléc) és vertikális (kártoló, mobil) változat is.
- **Kontraszt:** A logónak világos és sötét háttéren is jól kell működnie.
- **Formátumok:** SVG (elsődleges), PNG (fallback, transzparens háttérrel), legalább 2 méretben.

## 7. Tipográfia

- **Fő betűtípus:** Kifejezetten olvasható, modern, sans-serif. A magyar ékezetes karakterek (á, é, í, ó, ö, ő, ú, ü, ű) teljes támogatása kötelező.
- **Másodlagos betűtípus:** Kiemelésre, címsorokra használható egy kontrasztosabb, de továbbra is olvasható típus.
- **Webes megjelenés:** A wyptípus-alapú betűkészlet legalább 2 súlyt (regular, bold) tartalmazzon. A betűtípus fájlméretét minimálisra kell tartani (klímabarát és sávszélesség-takarékos követelmény).
- **Monospace:** Számok, kód, azonosítók megjelenítéséhez – opcionális.

## 8. Ikonográfia

- **Stílus:** Vonalas (outlined) vagy kéttónusú (duotone), konzisztens vonalvastagsággal.
- **Kulcsikonok:** szavazat/pip, ötlet/izzó, pályázat/zászló, közösség/emberek, lakcím/pont, média/kamera, értesítés/harang, adminisztráció/fogaskerék, státusok (folyamatban, lezárt, aktív).
- **Forrás:** Ikonkészlet (pl. Lucide, Heroicons) vagy egyedi készlet – a lényeg a konzisztencia és a kis fájlméret.
- **Képméret:** SVG ikonok ajánlottak, 24×24 px rácsra optimalizálva.

## 9. Layout és komponens-irányelvek

### Általános

- **Reszponzív:** Mobile-first tervezés. A lakosok jelentős része telefonról fogja használni.
- **Kompakt és takarékos:** Felesleges vizuális elemek nélküli, letisztult felületek. A sávszélesség-takarékos követelmény kiterjed a vizuálisokra is.
- **Lapozott listanézetek:** A pályázatok és ötletek listája lapozott, gyorsítótárazható, csak a szükséges mezőket megjelenítő kártya- vagy táblázatszerkezet.

### Kulcsoldalak

1. **Publikus portál – Kezdőlap:** Aktív pályázatok kártyái, rövid keresés, CTA a bejelentkezéshez / ötletbeküldéshez.
2. **Pályázat részletező:** Ötletbeküldési űrlap (probléma + megoldás + média), beküldött ötletek listája, szavazási felület.
3. **Szavazás:** Egyértelmű, egykattintásos szavazás. Vizuális visszajelzés a szavazatról. A szavazatok száma rejtve marad az eredményhirdetésig!
4. **Lakossági vezérlőpult:** Saját ötletek, szavazatok áttekintése, értesítések.
5. **Adminisztrációs panel:** Pályázat-kezelés, ötlet-moderáció, státuszváltások, kampány-életciklus.

### Státusjelzők

A pályázatok és ötletek élettartama során az alábbi állapotok jelenhetnek meg (szín- és ikonkodolással):

| Állapot | Jelentés |
| --- | --- |
| Tervezés alatt | Még nem publikus, adminisztrátor szerkeszti |
| Ötletbeküldési szakasz | Lakosok beküldhetik ötleteiket |
| Szavazási szakasz | Lakosok szavazhatnak a beküldött ötletekre |
| Lezárt | Nincs több beavatkozás, eredményhirdetésre vár |
| Kiértékelés alatt | Adminisztrátorok feldolgozzák az eredményeket |
| Megvalósuló | A nyertes ötlet megvalósul |

## 10. Képi világ és illusztrációk

- **Fotók/Illusztrációk:** Inkább vektoros, takarékos illusztrációkat előnyben a nagy felbontású fotókkal szemben. Ha fotó: WebP formátum, lazy loading, megfelelő tömörítés.
- **Üres állapotok (empty states):** Minden lista és kártya legyen ellátva contextus-teráltó üres állapot illusztrációval és szöveggel.
- **Hiba- és visszajelzés-állapotok:** Siker, hiba, figyelmeztetés, információ – konzisztens színkódolás és ikonhasználat.

## 11. Sávszélesség- és teljesítmény-követelmények a design-ra

A ZDR program klímabarát és takarékos elvei miatt a vizuális megoldásoknak is erőforrás-tudatosnak kell lenniük:

- **CSS és JS:** Minimális külső függőség. A stíluslap mérete legyen a lehető legkisebb. Kerülendő a nagy framework-ök (pl. teljes Bootstrap); utility-first vagy egyedi CSS ajánlott.
- **Képek és ikonok:** SVG ikonok, WebP fotók, lazy loading, megfelelő cache-Control fejlécek.
- **Betűtípusok:** Csak a ténylegesen használt súlyok és karakterkészletek (magyar latin) töltődjenek le. Font subsetting kötelező.
- **Animációk:** Csak funkcionális, UX-célú animációk (pl. gomb-nyomás visszajelzés, oldalátmenet). Dekoratív animációk Kerülendők.

## 12. A technológiai stack (referenciaként)

Ez nem a designer feladata, de kontextusként hasznos lehet:

| Réteg | Technológia |
| --- | --- |
| Frontend | React / TypeScript webalkalmazás |
| Backend | Node.js / NestJS szolgáltatások |
| Adatbázis | PostgreSQL (elsődleges), Redis (cache) |
| Eseménykezelés | Apache Kafka |
| Média tárolás | MinIO / CDN |
| Azonosítás | Zamunda One (OAuth 2.0 jellegű) |

## 13. Összefoglaló kulcsszavak a design-hez

| Kategória | Kulcsszavak |
| --- | --- |
| Hangulat | Bizalom, közösség, demokrácia, modernizáció, fenntarthatóság |
| Stílus | Letisztult, hivatalos-barátságos, takarékos, reszponzív |
| Színek | Zöld/földszín + hivatalos kék vagy arany; semmi neon, semmi szürke-tech |
| Tipográfia | Magyar ékezetes, sans-serif, olvasható, kompakt |
| Ikonok | Vonalas, konzisztens, SVG, 24px rács |
| Teljesítmény | Mobile-first, sávszélesség-takarékos, WebP, font-subsetting, nincs felesleges animáció |