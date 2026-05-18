# Community Choice - összefoglaló v3

Generált összefoglaló a publikált dokumentációs források alapján. Létrehozás dátuma: 2026-05-18.

A dokumentum a `docs/src/content/docs/` alatti Starlight oldalak teljes tartalmát fűzi össze, a C4/LikeC4 diagramok forrását pedig függelékként tartalmazza.

## Forrásjegyzék

- `docs/src/content/docs/index.mdx`
- `docs/src/content/docs/esettanulmany.md`
- `docs/src/content/docs/srs.mdx`
- `docs/src/content/docs/fogalomtar.md`
- `docs/src/content/docs/architektura/karakterisztikak.md`
- `docs/src/content/docs/architektura/szignifikans-kovetelmenyek.md`
- `docs/src/content/docs/architektura/stilusvalasztas.md`
- `docs/src/content/docs/architektura/c4-modell.mdx`
- `docs/src/content/docs/architektura/implementacios-javaslatok.md`
- `docs/src/content/docs/brand-spec.md`
- `docs/src/content/docs/adrs/adr-001.md`
- `docs/src/content/docs/adrs/adr-002.md`
- `docs/src/content/docs/adrs/adr-003.md`
- `docs/src/content/docs/adrs/adr-004.md`
- `docs/src/content/docs/adrs/adr-005.md`
- `docs/src/content/docs/adrs/adr-006.md`
- `docs/src/content/docs/adrs/adr-007.md`
- `docs/src/content/docs/adrs/adr-008.md`
- `docs/src/content/docs/adrs/adr-009.md`
- `docs/src/community-choice.c4`

---

<!-- BEGIN SOURCE: docs/src/content/docs/index.mdx -->

# Forrás: docs/src/content/docs/index.mdx

---
title: Community Choice
description: Zamundra polgárainak közösségi ötletplatformja – javasolj, szavazz, változtass
template: splash
hero:
  tagline: Javasolj • Szavazz • Megvalósul
  actions:
    - text: Megismerem a platformot
      link: esettanulmany/
      icon: right-arrow
      variant: primary
    - text: Architektúra
      link: architektura/stilusvalasztas/
      icon: right-arrow
      variant: secondary
---

import { Card, CardGrid } from '@astrojs/starlight/components';

<div class="landing">

{/* ──────────── Kiemelt mondat ──────────── */}
<div class="lp-lead">

**A Community Choice** a Zamunda Digitális Reneszánsz programjának nyilvános platformja.
A lakosok helyi közösségi fejlesztési ötleteket javasolhatnak, és jogosultsági pillanatképük alapján
szavazhatnak egymás javaslataira. A szavazatok megmásíthatatlanok, a rendszer integritása kritikus.

</div>

{/* ──────────── Három lépés ──────────── */}
<div class="lp-steps">

<div class="lp-step">
  <div class="lp-step-num">1</div>
  <div class="lp-step-body">
    <h3>Javasolj</h3>
    <p>A lakosok bejelentkeznek Zamunda One azonosítással, és ötleteket nyújtanak be problémára és megoldásra egyaránt.</p>
  </div>
</div>

<div class="lp-step">
  <div class="lp-step-num">2</div>
  <div class="lp-step-body">
    <h3>Szavazz</h3>
    <p>A helyi közösség demokratikusan szavaz a beküldött javaslatokra. Szavazatellenőrzés, átláthatóság, integritás.</p>
  </div>
</div>

<div class="lp-step">
  <div class="lp-step-num">3</div>
  <div class="lp-step-body">
    <h3>Megvalósul</h3>
    <p>A nyertes ötletek kiértékelésre kerülnek, majd az önkormányzat megvalósítja — a közösség szava számít.</p>
  </div>
</div>

</div>

{/* ──────────── Oszlopok (értékek) ──────────── */}
<div class="lp-pillars">

<CardGrid stagger>

<Card title="Közösség és demokrácia" icon="approve-check-circle">
A szavazat egyenlő, átlátható, megmásíthatatlan. Minden lakos hangja számít.
</Card>

<Card title="Bizalom és integritás" icon="star">
Hitelesített lakcím, jogosultsági pillanatkép, ellenőrzött szavazat — állami szolgálati szint.
</Card>

<Card title="Modern digitális állam" icon="laptop">
Klímabarát, takarékos, előretekintő. A ZDR program része.
</Card>

<Card title="Nyitottság és befogadás" icon="open-book">
Nagy kattintási felületek, magas kontraszt, érthető folyamatok — kor és képesség független.
</Card>

</CardGrid>

</div>

{/* ──────────── Kiemelt funkciók ──────────── */}
<div class="lp-features">

<div class="lp-feature">
  <svg class="lp-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
  <div>
    <h3>Egyszavazatos rendszer</h3>
    <p>Minden hitelesített lakos egyetlen szavazattal rendelkezik kampányonként — nincs többszörös szavazás.</p>
  </div>
</div>

<div class="lp-feature">
  <svg class="lp-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  <div>
    <h3>Lakcím-hitelesítés</h3>
    <p>Zamunda One OAuth 2.0 alapú azonosítás — csak valós lakos szavazhat valós javaslatokra.</p>
  </div>
</div>

<div class="lp-feature">
  <svg class="lp-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  <div>
    <h3>Megmásíthatatlan szavazat</h3>
    <p>A szavazat rögzítése után nem módosítható — a rendszer integritása érdekében.</p>
  </div>
</div>

<div class="lp-feature">
  <svg class="lp-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
  <div>
    <h3>Átlátható folyamat</h3>
    <p>A kampány életciklusa nyomon követhető: tervezés, beküldés, szavazás, kiértékelés, megvalósítás alatt, megvalósítva.</p>
  </div>
</div>

<div class="lp-feature">
  <svg class="lp-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  <div>
    <h3>Közösségi visszajelzés</h3>
    <p>A lakosok kommentelhetik, értékelhetik és megosztják az ötleteket — a párbeszéd építi a bizalmat.</p>
  </div>
</div>

<div class="lp-feature">
  <svg class="lp-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8M12 17v4"/></svg>
  <div>
    <h3>Alacsony sávszélesség</h3>
    <p>Mobile-first, reszponzív, erőforrás-tudatos — lassú hálózaton is működik.</p>
  </div>
</div>

</div>

{/* ──────────── Dokumentáció ──────────── */}
<h2 class="lp-section-title">Dokumentáció</h2>

<CardGrid>

<Card title="Esettanulmány" icon="open-book">
A projekt háttere, a ZDR program és a platform követelményei.
[Olvasd el →](esettanulmany/)
</Card>

<Card title="SRS" icon="document">
A szoftver követelményspecifikációja — funkcionális és nem-funkcionális követelmények.
[Olvasd el →](srs/)
</Card>

<Card title="Fogalomtár" icon="list-format">
Architekturális és domain-specifikus fogalmak szótára.
[Olvasd el →](fogalomtar/)
</Card>

<Card title="Stílusválasztás" icon="puzzle">
Miért a Hibrid SBA + EDA a nyerő architektúra a Community Choice platformhoz.
[Olvasd el →](architektura/stilusvalasztas/)
</Card>

<Card title="Architekturális döntések" icon="forward-slash">
ADR-ek — Architekturális Döntési Rekordok.
[Olvasd el →](adrs/adr-001/)
</Card>

<Card title="Brand specifikáció" icon="star">
Vizuális identitás, színek, tipográfia, design tokenek és használati szabályok.
[Olvasd el →](brand-spec/)
</Card>

</CardGrid>

{/* ──────────── Technológiai alapok ──────────── */}
<div class="lp-tech">

<div class="lp-tech-label">Technológiai alapok</div>

<div class="lp-tech-badges">
  <span class="lp-badge">React / TypeScript</span>
  <span class="lp-badge">Node.js / NestJS</span>
  <span class="lp-badge">PostgreSQL</span>
  <span class="lp-badge">Redis</span>
  <span class="lp-badge">NATS JetStream / Kafka</span>
  <span class="lp-badge">Outbox relay</span>
  <span class="lp-badge">Vault / KMS + HKDF</span>
  <span class="lp-badge">Ingress Gateway</span>
  <span class="lp-badge">MinIO / CDN</span>
  <span class="lp-badge">Zamunda One OAuth 2.0</span>
</div>

</div>

{/* ──────────── CTA ──────────── */}
<div class="lp-cta">

<div class="lp-cta-text">
Csatlakozz a közösséghez — az első lépés a változás felé.
</div>

<a href="esettanulmany/" class="lp-cta-button">Megismerem az esettanulmányt →</a>

</div>

</div>


<!-- END SOURCE: docs/src/content/docs/index.mdx -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/esettanulmany.md -->

# Forrás: docs/src/content/docs/esettanulmany.md

---
title: Esettanulmány
description: Community Choice – Zamunda közösségi ötletplatform esettanulmánya
---

# 04: Community Choice

## Háttér

> Az [Amerikába jöttem](https://port.hu/adatlap/film/tv/amerikaba-jottem-coming-to-america/movie-11018) és az [Amerikába jöttem 2.](https://port.hu/adatlap/film/tv/amerikaba-jottem-2-coming-2-america/movie-212064) című filmek története alapján.

Jaffe Jofer király halála után Zamunda trónját immár fia, Akeem foglalhatta el. Hallva azonban az idők szavát, Akeem király úgy döntött: az uralkodásba bevonja lányát, Meekát is.

Meeka a modern kor eszközeit használva szeretné felvirágoztatni Zamundát. Felismerte, hogy a fejlődés zálogát a digitális transzformáció jelenti: független IT infrastruktúra és digitális államigazgatás, kombinálva a megújuló energiaforrások és a klímabarát megoldások használatával.

Ez a digitális transzformációs program a Zamunda Digitális Reneszánsz (ZDR).

### A ZDR program általános követelményei

- Mivel egy állami programról van szó, ezért nagyon fontos, hogy minden projekthez megfelelő mennyiségű és minőségű dokumentáció készüljön.
- Zamunda nem szegény ország, de feleslegesen nem is akarja szórni a pénzt: a projektek tervezésénél törekedni kell a takarékosságra. Szintén ezt igénylik a klímabarát célok!
- Figyelembe kell venni, hogy az ország bizonyos területeinek internetlefedettsége hagy némi kívánnivalót maga után. Ahol van internet, ott is előfordulhat magasabb késleltetés és alacsonyabb sávszélesség.

## Leírás

Zamunda szeretne lehetőséget biztosítani arra, hogy a lakosok helyi szintű, kisebb-nagyobb projekteket kezdeményezhessenek. Ilyen lehet például új zöldfelületek kialakítása, közösségi terek létrehozása vagy egyszerűen csak padok és kerékpártárolók kihelyezése.

### Valós kapcsolódás

Budapest és a kerületek közösségi költségvetése:
- [otlet.budapest.hu](https://otlet.budapest.hu/)
- [kozossegikoltsegvetes.terezvaros.hu](https://kozossegikoltsegvetes.terezvaros.hu/)

## Felhasználók

- Zamunda összes állampolgára, mintegy 10 millió fő.
- Adminisztrátorok a zamundai közigazgatásban.

## Követelmények

- A platformon minden önkormányzat tetszőleges időközönként ötletpályázatokat hirdethet.
- Adott önkormányzat pályázatára csak ottani lakosok adhatnak be ötleteket.
- Adott önkormányzat pályázatán leadott ötletekre csak ottani lakosok szavazhatnak.
- A lakosok új ötleteket javasolhatnak probléma-megoldás párok formájában. A beküldések részét képezhetik továbbá fotók és videók is.
- Az egyes pályázatokon minden lakos annyi ötletre szavazhat, amennyire csak szeretne.
- Szigorúan kontrollálni kell a szavazatokhoz való hozzáférést; szavazat adminisztrátori törlése és módosítása pedig egyáltalán nem lehet megoldható.
- A pályázatok és ötletek teljes életciklusa jelenjen meg a platformban.
- Az autentikációhoz és autorizációhoz a Zamunda One nevű API-t kell integrálni, mely megbízható adatokat biztosít a bejelentkezett felhasználó bejelentett lakóhelyéről. A kampány közbeni lakcímváltozások kezeléséhez feltétel, hogy a Zamunda One-ból lekérhető legyen a lakcím utolsó módosítási dátuma/időbélyege vagy egy ekvivalens lakcím-érvényességi metaadat.
  - Valós kapcsolódás: [SZEUSZ KAÜ](https://szeusz.gov.hu/szeusz/kau)  

## Kiegészítések

- Pályázati keretekkel, a keretek kimerülésével nem kell foglalkozni.
- Egy ötletre egy felhasználó csak egyszer szavazhat.
- Egy pályázatra egy felhasználó csak egy ötletet adhat be.


<!-- END SOURCE: docs/src/content/docs/esettanulmany.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/srs.mdx -->

# Forrás: docs/src/content/docs/srs.mdx

---
title: SRS
description: A Community Choice rendszer szoftverkövetelmény-specifikációja
---

import Mermaid from '../../components/Mermaid.astro';

# Community Choice – szoftverkövetelmény-specifikáció

**Verzió:** 1.1  
**Projekt:** Zamunda Digitális Reneszánsz – Community Choice  
**Dokumentum típusa:** Szoftverkövetelmény-specifikáció

## Verziótörténet

| Verzió | Dátum | Változás |
| --- | --- | --- |
| 1.0 | 2026-05-05 | Első beadandó-kompatibilis SRS-verzió |
| 1.1 | 2026-05-16 | Követelmények pontosítása, mérhetőbb nemfunkcionális követelmények és implementációs részletek különválasztása |
| 1.2 | 2026-05-18 | Perem gateway, rövid élettartamú kampánykulcs és takarékos outbox relay döntések átvezetése |
| 1.3 | 2026-05-18 | Jogosultsági pillanatkép bevezetése a kampány közbeni lakcímváltozások kezelésére |

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
- A személyes adatok kezelésénél a GDPR-hoz hasonló alapelveket lehet alapul venni.
- A szavazati rekordok nem tartalmazhatnak nyers személyes azonosítót.
- A lakcímváltozások kezelésére a rendszer jogosultsági pillanatképet alkalmaz. A jogosultság ellenőrzése a kampány kezdési időpontja és a Zamunda One-ból lekérhető lakcím-módosítási dátum/időbélyeg, például `address_updated_at`, összevetésével történik. Ha ilyen mező nem érhető el, a Zamunda One integrációnak ekvivalens hivatalos lakcím-érvényességi dátumot kell biztosítania.
- A leadott szavazat utólagos módosítását és törlését a rendszernek meg kell akadályoznia.
- A médiatartalmak kezelésénél sávszélesség- és tárhelytakarékos formátumokat kell használni.
- A publikus backend elérés dedikált, implementációfüggetlen Ingress/API Gateway rétegen keresztül történik; Traefik vagy Nginx javasolt önmenedzselt megoldás, de nem kötelező termékválasztás.
- A szavazati tranzakció és a hozzá tartozó audit/integrációs esemény között nem lehet alkalmazásszintű dual-write rés; a szavazási auditfolyam transactional outbox + outbox relay mintával készül.
- A pszeudonimizált szavazói kulcs képzéséhez használt kampány-mesterkulcsot dedikált KMS/Vault Transit jellegű szolgáltatásban kell kezelni; a szavazási kritikus útban pod memóriában tartott rövid élettartamú kampánykulcs használható.
- A szavazási csúcsterhelésnél a PostgreSQL írási út connection poolinggal és kampány szerinti particionálással védendő.

### 2.6. Felhasználói dokumentáció

A rendszer beépített online súgót és rövid, kontextusérzékeny útmutatókat biztosít. A felületeken elhelyezett információs szövegek, tooltip-ek és folyamat közbeni magyarázatok segítik a lakosokat az ötletek feltöltésében és a szavazásban, valamint az adminisztrátorokat a pályázatok kezelésében.

### 2.7. Feltételezések és függőségek

- A Zamunda One megbízhatóan biztosítja a bejelentkezett felhasználó hitelesített profilját és bejelentett lakóhelyét.
- A jogosultsági pillanatkép időbeli védelme feltételezi, hogy a Zamunda One API-ból lekérhető a lakcím utolsó hivatalos módosítási dátuma/időbélyege, vagy egy ezzel ekvivalens lakcím-érvényességi metaadat.
- A Zamunda One pontos technikai API-szerződése implementációs fázisban pontosítandó, de a rendszer biztonságos, titkosított integrációval számol.
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

A rendszer a felhasználók autentikációjához és autorizációjához a Zamunda One API-t használja. Bejelentkezéskor a rendszer ezen az interfészen keresztül kapja meg a felhasználó hitelesített profiladatait, különösen a bejelentett állandó lakóhelyet. A jogosultsági pillanatképhez a rendszernek szüksége van a lakcím utolsó hivatalos módosítási dátumára/időbélyegére is, amennyiben ez a Zamunda One API-ból lekérhető, vagy egy ekvivalens lakcím-érvényességi metaadatra. Ez az adatcsere képezi annak alapját, hogy kizárólag a kampány kezdetéhez képest jogosult helyi lakosok szavazhassanak vagy küldhessenek be ötletet az adott önkormányzat pályázatához.

A pontos protokollokat és adatszerkezeteket a Zamunda One hivatalos technikai specifikációjának ismeretében kell véglegesíteni. A tervezett integrációnak biztonságos, titkosított kapcsolaton és iparági szabványokra épülő azonosítási megoldáson kell alapulnia.

### 3.4. Kommunikációs interfészek

- A webes kliensalkalmazás és a backend HTTPS-en keresztül kommunikál.
- A külső HTTPS forgalom első belépési pontja dedikált Ingress/API Gateway, amely TLS terminációt, routingot, request size limiteket, durva rate limitinget és JWT elővalidálást végez.
- Az API-válaszokat a hálózati forgalom csökkentése érdekében tömöríteni kell.
- A pályázati értesítések e-mailben és push notification formában is megvalósíthatók.
- A fotók és videók feltöltését a rendszernek instabil hálózati kapcsolat esetén is hibatűrő módon kell kezelnie.
- Az aszinkron audit-, értesítési és médiafeldolgozási kommunikáció tartós event streamen keresztül történik; az induló takarékos profil NATS JetStream, országos/nagy replay profil esetén Kafka.

## 4. Rendszerfunkciók

### 4.1. Pályázatkezelés

#### 4.1.1. Leírás és prioritás

**Prioritás:** Magas.

A rendszer lehetővé teszi a zamundai önkormányzatok adminisztrátorai számára, hogy tetszőleges időközönként új ötletpályázatokat hozzanak létre, menedzseljenek és végigkísérjék azok teljes életciklusát.

A pályázati életciklus az alábbi állapotokból áll:

| Állapot | Jelentés |
| --- | --- |
| `tervezes_alatt` | A pályázat adminisztrátori előkészítés alatt áll, publikus művelet még nem érhető el. |
| `otletbekuldes` | A jogosult lakosok ötleteket küldhetnek be. |
| `szavazas` | A jogosult lakosok a közzétett ötletekre szavazhatnak. |
| `lezart` | A szavazási határidő lejárt, új szavazat nem adható le. |
| `kiertekeles` | Az adminisztrátorok ellenőrzik és előkészítik az eredményeket. |
| `megvalositas_alatt` | A nyertes vagy kiválasztott ötletek megvalósítási nyomon követés alatt állnak. |
| `megvalositva` | A megvalósítás lezárult, az eredmény publikus státuszban visszakereshető. |

Állapotátmeneti modell:

<Mermaid
	title="Pályázati életciklus – pályázati szakasz"
	chart={`
flowchart LR
	tervezes_alatt["tervezés"]
	otletbekuldes["ötletbeküldés"]
	szavazas["szavazás"]
	lezart["lezárt"]

	tervezes_alatt -->|"Publikálás"| otletbekuldes
	otletbekuldes -->|"Beküldés lezárva"| szavazas
	szavazas -->|"Szavazás lezárva"| lezart

	classDef ccState fill:#dcfce7,stroke:#15803d,color:#14532d,stroke-width:1px;
	class tervezes_alatt,otletbekuldes,szavazas,lezart ccState;
	`}
/>

<Mermaid
	title="Pályázati életciklus – utókövetés"
	chart={`
flowchart LR
	kiertekeles["kiértékelés"]
	megvalositas_alatt["megvalósítás alatt"]
	megvalositva["megvalósítva"]

	kiertekeles -->|"Jóváhagyás"| megvalositas_alatt
	megvalositas_alatt -->|"Lezárás"| megvalositva

	classDef ccState fill:#dcfce7,stroke:#15803d,color:#14532d,stroke-width:1px;
	class kiertekeles,megvalositas_alatt,megvalositva ccState;
	`}
/>

#### 4.1.2. Stimulus/Response szekvenciák

- Az adminisztrátor új pályázatot hoz létre; a rendszer elmenti, majd a megadott időpontban publikálja.
- Az adminisztrátor módosítja a pályázat életciklus-státuszát; a rendszer rögzíti a változást, és például lezárt szavazási szakasz esetén letiltja a további szavazatokat.
- A felhasználó megtekinti a pályázatok listáját; a rendszer lapozható formában jeleníti meg az aktuális és múltbeli kampányokat.

#### 4.1.3. Funkcionális követelmények

- **F-PK-01:** A rendszer felületet biztosít az adminisztrátorok számára új pályázatok létrehozására cím, leírás, határidők és érintett önkormányzat megadásával.
- **F-PK-02:** A rendszer támogatja a pályázatok és ötletek teljes életciklus-kezelését, beleértve a státuszok nyilvántartását és módosítását.
- **F-PK-03:** A rendszer publikus listanézetet biztosít a felhasználók számára az aktuális és múltbeli pályázatok böngészéséhez.
- **F-PK-04:** A rendszer automatikusan megnyitja és lezárja az ötletbeküldési és szavazási szakaszokat a pályázathoz beállított határidők alapján.

### 4.2. Ötletbeküldés multimédiás támogatással

#### 4.2.1. Leírás és prioritás

**Prioritás:** Magas.

A lakosok a rendszeren keresztül új ötleteket javasolhatnak az aktív pályázatokra, probléma-megoldás párok formájában. Az ötletekhez képek és videók is csatolhatók, figyelembe véve a ZDR program hálózat-optimalizálási és takarékossági követelményeit.

#### 4.2.2. Stimulus/Response szekvenciák

- A felhasználó elindítja az ötletbeküldést egy adott pályázaton; a rendszer ellenőrzi, hogy a felhasználó jogosultsági pillanatképe illeszkedik-e az önkormányzathoz, és még nem küldött-e be ötletet ugyanarra a kampányra.
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

- A felhasználó bejelentkezik; a rendszer a Zamunda One API-n keresztül elvégzi az autentikációt, és lekéri a bejelentett lakóhelyet, valamint - ha az API támogatja - a lakcím utolsó módosítási dátumát/időbélyegét.
- A felhasználó először lép interakcióba egy kampánnyal; a rendszer ellenőrzi vagy létrehozza a kampányhoz tartozó jogosultsági pillanatképet.
- A felhasználó szavazatot ad le egy helyi ötletre; a rendszer a jogosultsági pillanatkép alapján ellenőrzi, hogy jogosult-e és még nem szavazott-e az adott ötletre, majd megváltoztathatatlan módon rögzíti a szavazatot.
- A felhasználó megpróbál szavazni vagy ötletet beküldeni egy másik önkormányzat pályázatán; a rendszer jogosultság hiányára hivatkozva elutasítja a műveletet.
- Egy adminisztrátor megpróbál törölni vagy módosítani egy leadott szavazatot; a rendszer elutasítja a műveletet, és az esemény auditálható marad.

#### 4.3.3. Funkcionális követelmények

- **F-SZ-01:** A rendszer integrálódik a Zamunda One API-val az autentikáció és a hivatalos lakcímadatokra épülő autorizáció céljából; a lakcím mellett, feltéve hogy a Zamunda One API támogatja, lekéri a lakcím utolsó hivatalos módosítási dátumát/időbélyegét is.
- **F-SZ-02:** A rendszer szűri a hozzáférést: a felhasználó csak a jogosultsági pillanatképe szerinti önkormányzat pályázatain adhat be ötletet és szavazhat. A pillanatkép létrehozásakor a rendszer a Zamunda One lakcímét és - ha lekérhető - a lakcím-módosítási dátumot/időbélyeget a kampány kezdési időpontjához viszonyítja.
- **F-SZ-03:** A rendszer lehetővé teszi, hogy egy felhasználó egy pályázaton belül korlátlan számú különböző ötletre szavazzon, de egy konkrét ötletre csak egyetlen szavazatot adhat le.
- **F-SZ-04:** A rendszer megakadályozza a leadott szavazatok utólagos módosítását és törlését, beleértve az adminisztrátori felületről indított műveleteket is.
- **F-SZ-05:** A rendszer a szavazatokat pszeudonimizált szavazói kulccsal kapcsolja az ötletekhez. A szavazati rekord nem tartalmaz nyers személyes azonosítót, ugyanakkor a pszeudonim kulcs lehetővé teszi az egy ötletre egyszeri szavazás technológiai ellenőrzését.
- **F-SZ-06:** A rendszer a sikeresen rögzített szavazathoz tartozó audit/integrációs eseményt ugyanabban a PostgreSQL tranzakcióban outbox rekordként is rögzíti; a tartós event streambe kerülést outbox relay worker biztosítja.
- **F-SZ-07:** A rendszer a felhasználó első kampány-interakciójakor, vagy előzetes kampányindítási jogosultság-előkészítés esetén a kampány indulásakor, rögzíti a felhasználó azonosító hash-ét, a kampány azonosítóját, az önkormányzat azonosítóját, a lakcím-módosítási dátumot/időbélyeget, ha az a Zamunda One-ból lekérhető, és a jogosultság tényét egy megváltoztathatatlan `campaign_eligibility` pillanatkép táblában. A kampány során minden további ötletbeküldési és szavazási jogosultság-ellenőrzés ebből a pillanatképből dolgozik, függetlenül a kampány közben történő lakcímváltozásoktól.

## 5. Egyéb nemfunkcionális követelmények

### 5.1. Teljesítmény- és hatékonysági követelmények

- A publikus kezdőoldalnak, az aktív pályázatok listanézetének, egy konkrét pályázati kiírás oldalának, valamint egy konkrét ötlet leírását tartalmazó oldalnak a célzott First Contentful Paint értéke a 75. percentilisnél támogatott, átlagos hálózati környezetben legfeljebb 1,8 másodperc legyen.
- Támogatott átlagos hálózati környezetnek a legalább 10 Mbit/s letöltési sávszélességű, legfeljebb 100 ms körüli késleltetésű mobil- vagy vezetékes kapcsolat számít.
- Alacsony sávszélességű környezetben, legfeljebb 1 Mbit/s letöltési sávszélesség és 300 ms körüli késleltetés mellett, az aktív pályázatok listanézetének első tartalmi elemei 5 másodpercen belül jelenjenek meg a 75. percentilisnél.
- A publikus listanézetek lapozott választ adnak. Egy listaoldal válaszmérete médiafájlok nélkül legfeljebb 100 KB lehet.
- A publikus listanézetek csak a megjelenítéshez szükséges adatmezőket adják vissza; részletes leírásokat, teljes médiagalériákat és adminisztratív mezőket csak részletnézetben lehet lekérni.
- A rendszer a feltöltött képeket és animációkat automatikusan optimalizált, modern webes formátumokba konvertálja. Az optimalizált képfájl célzott mérete legfeljebb az eredeti fájlméret ~70%-a, amit vizuálisan veszteségmentes tömörítési beállításokkal kell elérni.
- A médiafeltöltés nem akadályozhatja a szavazási és pályázatböngészési funkciók kiszolgálását.

### 5.2. Üzembiztonsági követelmények

A rendszer nem vezérel fizikai biztonságkritikus folyamatot, ezért klasszikus safety követelmény nem releváns. Üzembiztonsági szempontból ugyanakkor fontos, hogy szavazási időszakban a szolgáltatás részleges hiba esetén is kontrolláltan működjön: a szavazatok rögzítése ne sérüljön, a hibás háttérfolyamatok pedig ne akadályozzák a szavazást.

### 5.3. Biztonsági és adatvédelmi követelmények

- Csak bejelentkezett és hitelesített felhasználó tud szavazatot leadni.
- A rendszernek szigorúan korlátoznia kell a szavazáshoz és ötletbeküldéshez való hozzáférést a jogosultsági pillanatkép alapján.
- A szavazatok védettséget élveznek; a módosítás és törlés technológiai szinten tiltott.
- A szavazati rekordok nem tartalmaznak nyers személyes azonosítót.
- A duplikált szavazat kizárásához a rendszer determinisztikus, pszeudonimizált szavazói kulcsot használ.
- A pszeudonimizáláshoz szükséges titkok csak az erre kijelölt szavazási komponens számára lehetnek hozzáférhetők.
- A HMAC kampány-mesterkulcs nem tárolható `.env` fájlban, alkalmazáskonfigurációban vagy CI/CD változóban; a kulcsszármaztatást KMS/Vault Transit jellegű szolgáltatás védi, a szavazási útban pedig rövid élettartamú kampánykulcs használható.
- A publikus API-kat dedikált gateway védi; a gateway JWT elővalidálása nem helyettesíti a domain szintű jogosultsági döntéseket.
- A személyes adatok kezelésénél az adatminimalizálás és célhoz kötöttség elvét kell követni.

### 5.4. Szoftverminőségi attribútumok

- **Elérhetőség:** a publikus böngészésnek és a szavazásnak szavazási időszakban részleges háttérfolyamat-hiba esetén is működőképesnek kell maradnia.
- **Hatékonyság:** a publikus listanézetek lapozottak, méretkorlátot teljesítenek és csak a szükséges mezőket adják vissza; a médiatartalmak optimalizált formában kerülnek kiszolgálásra.
- **Integritás:** a leadott szavazatok utólag nem módosíthatók és nem törölhetők; az egy ötletre egyszeri szavazást a rendszer technológiai garanciával védi.
- **Auditálhatóság:** a szavazati audit esemény nem best-effort mellékhatás, hanem PostgreSQL tranzakcióhoz kötött outbox + relay folyamat eredménye.
- **Biztonság:** a szavazáshoz és ötletbeküldéshez Zamunda One alapú hitelesítés és jogosultsági pillanatképre épülő lakcím-alapú jogosultságellenőrzés szükséges.
- **Robusztusság:** a médiafeltöltés hálózati megszakítás esetén is folytatható; a médiafeldolgozás hibája nem akadályozhatja a szavazást vagy a pályázatok böngészését.
- **Használhatóság:** a rendszer reszponzív webes felületet és kontextusérzékeny útmutatókat biztosít.
- **Akadálymentesség:** a publikus és szavazási felületeknek biztosítaniuk kell, hogy Zamunda állampolgárai azonos feltételek mellett férjenek hozzá a fő funkciókhoz, különösen billentyűzettel, képernyőolvasóval és megfelelő kontraszttal.
- **Bővíthetőség:** az aszinkron eseményfolyamhoz új fogyasztók, például későbbi analitikai komponensek kapcsolhatók a meglévő producerek módosítása nélkül.
- **Elaszticitás:** szavazási csúcsterhelés esetén a Szavazási szolgáltatás önállóan skálázható.
- **Skálázhatóság:** a szavazási, médiafeldolgozási és értesítési terhelés külön kezelhető; a PostgreSQL írási út connection poolinggal és kampány szerinti particionálással védett, a peremforgalmat dedikált gateway korlátozza.
- **Karbantarthatóság:** a rendszer néhány jól körülhatárolt szolgáltatásra épül, amelyek felelőssége dokumentált.

### 5.5. Üzleti szabályok

- **BR-1:** Adott önkormányzat pályázatára kizárólag az ottani jogosultsági pillanatképpel rendelkező lakosok adhatnak be ötleteket.
- **BR-2:** Adott önkormányzat pályázatán leadott ötletekre kizárólag az ottani jogosultsági pillanatképpel rendelkező lakosok szavazhatnak.
- **BR-3:** Egy felhasználó egy adott pályázatra legfeljebb egy ötletet nyújthat be.
- **BR-4:** Egy adott ötletre egy felhasználó kizárólag egyszer szavazhat.
- **BR-5:** Az egyes pályázatokon belül egy felhasználó tetszőleges számú, de egyedi ötletre adhat le szavazatot.
- **BR-6:** A platform nem kezeli és nem követi nyomon a pályázati költségvetési kereteket és azok kimerülését.
- **BR-7:** A közzétett ötleteken a szavazás eredményhirdetéséig nem jelenik meg a szavazatok száma.
- **BR-8:** Ha a lakos lakcíme egy aktív kampányidőszak alatt megváltozik a Zamunda One nyilvántartásban, és a lakcím-módosítás dátuma lekérhető vagy hitelesen megállapítható, a felhasználó a futó ciklusban nem jogosult az új lakcíme szerinti önkormányzat pályázatain részt venni, ha a korábbi lakcímén már interakcióba lépett a platformmal, vagy ha az átjelentkezés dátuma későbbi, mint a kampány hivatalos kezdési időpontja. A korábbi jogosultsági pillanatkép alapján leadott szavazatai az eredeti körzetben érvényesek maradnak.

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

Nyitott integrációs feltétel, hogy a Zamunda One API biztosítja-e a lakcím utolsó hivatalos módosítási dátumát/időbélyegét vagy egy ezzel ekvivalens lakcím-érvényességi metaadatot. Ha nem biztosítja, a jogosultsági pillanatkép időbeli védelméhez külön hivatalos adatforrás vagy üzleti szabály pontosítása szükséges. A Zamunda One pontos technikai API-szerződése implementációs fázisban véglegesítendő.


<!-- END SOURCE: docs/src/content/docs/srs.mdx -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/fogalomtar.md -->

# Forrás: docs/src/content/docs/fogalomtar.md

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
- **Transactional outbox / Outbox minta:** Megközelítés a DB-tranzakció és az eseménypublikálás konzisztens összekötésére; a szavazási auditfolyamban kötelező, mert a szavazati rekord és az outbox esemény egy PostgreSQL tranzakcióban jön létre.
- **Outbox relay worker:** Dedikált háttérfolyamat, amely az outbox táblát olvassa, például `SELECT ... FOR UPDATE SKIP LOCKED` stratégiával, majd a rekordokat tartós event streambe publikálja.

## Adatkezelés, biztonság, integritás

- **Zamunda One:** Külső azonosító/lakcím-ellenőrző szolgáltatás; autentikációhoz és autorizációhoz kötelező integráció.
- **Autentikáció:** A felhasználó azonosítása (bejelentkezés), a Zamunda One-on keresztül.
- **Autorizáció:** Jogosultság-ellenőrzés, például jogosultsági pillanatkép alapján szavazhat-e a lakos az adott önkormányzat kampányában.
- **Jogosultsági pillanatkép (Eligibility Snapshot):** Egy adott kampányhoz tartozó, időben befagyasztott autorizációs állapot. A felhasználó lakhelyi jogosultságát az első kampány-interakció pillanatában rögzíti az önkormányzati kampányhoz, hogy a kampányidőszak alatti lakcímváltoztatás ne vezethessen dupla részvételhez vagy dupla szavazáshoz.
- **Lakcím-módosítási dátum/időbélyeg (`address_updated_at` jellegű mező):** A Zamunda One API-ból feltételezetten lekérhető metaadat, amely a polgár állandó lakcímének utolsó hivatalos módosítási időpontját jelzi. Ha a Zamunda One nem ilyen néven vagy nem ilyen formában adja, ekvivalens hivatalos lakcím-érvényességi adat szükséges a kampányidőszak alatti spekulatív átjelentkezések kiszűréséhez.
- **GDPR:** Adatvédelmi megfelelési keret; a dokumentációban személyes adatok minimalizálásával és pszeudonimizálással kapcsolódik.
- **Pszeudonimizálás:** Személyes azonosítók helyettesítése visszafejtés nélkül nem egyértelmű kulccsal; itt a duplikáció-ellenőrzés mellett védi a szavazók személyazonosságát.
- **HMAC secret / HMAC kulcs:** Titok, amellyel determinisztikus pszeudonim (`voter_key`) képezhető; a kampány-mesterkulcs KMS/Vault Transit jellegű szolgáltatásban kezelendő, nem alkalmazáskonfigurációban.
- **Rövid élettartamú kampánykulcs:** Rövid élettartamú, pod memóriájában tartott operatív HMAC kulcs, amely kampányhoz és kulcsverzióhoz kötött, és nem írható lemezre vagy logba.
- **HKDF:** Kulcsszármaztatási minta, amellyel egy védett mesterkulcsból kontextushoz kötött, elkülönített operatív kulcs képezhető.
- **KMS (Key Management Service):** Dedikált kulcskezelő szolgáltatás, amely a kriptográfiai kulcsokat központilag védi és auditálja.
- **Vault Transit:** HashiCorp Vault secrets engine, amely kriptográfiai műveleteket végezhet anélkül, hogy az alkalmazás kiolvasná a nyers kulcsot.
- **Key rotation / Kulcsrotáció:** Kulcs vagy kulcsverzió cseréje; itt kampányonkénti HMAC kulcs/key version használatával csökkenti egy kompromittált kulcs hatókörét.
- **Szavazati tranzakciónapló:** Csak hozzáfűzhető szavazati tároló; UPDATE/DELETE tiltással támogatja a megmásíthatatlanságot.
- **UNIQUE constraint:** Adatbázis-szintű egyediségi szabály; itt a „egy ötletre egy szavazat” követelmény technológiai garanciája.
- **Particionálás:** Nagy táblák logikai/fizikai felosztása, például a szavazati tranzakciónapló `campaign_id` szerinti bontása kisebb indexek és kezelhetőbb csúcsidős írások érdekében.
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
- **Ingress / API Gateway:** Publikus peremréteg a webes kliensek és a backend között; TLS terminációt, routingot, request size limiteket, durva rate limitinget és JWT elővalidálást végezhet.
- **BFF (Backend for Frontend):** Alkalmazási backend belépési pont, amely a webes kliensek igényeihez igazított API-összeállítást és domain-specifikus jogosultsági logikát kezel.

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
- **Event stream / Tartós stream:** Visszajátszható eseményfolyam audit, értesítés és médiafeldolgozás céljára; technológiai profilja NATS JetStream vagy Kafka lehet.
- **NATS JetStream:** NATS tartós stream rétege; a projekt induló, takarékos brokerprofiljának jelöltje replay és at-least-once kézbesítés támogatásával, saját outbox relay workerrel.
- **Apache Kafka:** Eseményfolyam-platform; a projektben országos/nagy audit-replay vagy sok fogyasztós profilnál indokolt broker opció.
- **Topic / Stream:** Logikai csatorna az események számára (pl. „vote-cast” jellegű események).
- **Partition:** Kafka topic felosztása párhuzamos feldolgozásra és skálázásra; NATS JetStream profilban más fogalmi és skálázási beállítások érvényesek.
- **Consumer group:** Fogyasztók csoportja, amely együtt olvas egy topicot úgy, hogy egy partíciót egyszerre csak egy consumer kezeljen.
- **Offset:** A consumer által olvasott pozíció; visszatekerhető a visszajátszáshoz (audit/újrafeldolgozás).
- **KRaft:** Kafka beépített konszenzus/metadata rétege (ZooKeeper nélkül); üzemeltetési fogalom az ADR-ben.
- **RabbitMQ:** Alternatív üzenetközvetítő jelölt; a dokumentáció szerint visszajátszható, tartós eseménytörténethez kevésbé illeszkedik.
- **Redis Streams:** Alternatív streaming jelölt; könnyűsúlyú, de nagy volumenű tartós eseménytárolásra kevésbé optimális.
- **pgmq:** PostgreSQL-re épülő üzenetsor; takarékos alternatíva lehet kisebb háttérmunkákhoz, de kritikus szavazási auditfolyamnál nem elsődleges, mert a tranzakciós adatbázis terhét növeli.
- **PgBouncer:** Könnyű PostgreSQL connection pooler; a szolgáltatások és PostgreSQL közötti kapcsolatszám kontrolljára szolgál.

## Keresés és deduplikáció

- **pgvector:** PostgreSQL kiterjesztés vektoros hasonlósági kereséshez; későbbi opció az ötletduplikációk felismerésére.
- **RAG (Retrieval-Augmented Generation):** Olyan minta, amely meglévő adatok visszakeresésével támogat generatív vagy ajánló funkciót; itt későbbi, lokális embedding alapú ötlet-ajánlásra merül fel.
- **Embedding:** Szöveg vektoros reprezentációja, amely hasonló jelentésű ötletek kereséséhez használható.

## Multimédia és formátumok

- **WebP:** Képtömörítési formátum; a dokumentáció sávszélesség/energia miatt preferálja.
- **WebM:** Videóformátum; a dokumentáció szerveroldali konverziót említ optimalizálási céllal.


<!-- END SOURCE: docs/src/content/docs/fogalomtar.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/architektura/karakterisztikak.md -->

# Forrás: docs/src/content/docs/architektura/karakterisztikak.md

---
title: Architekturális karakterisztikák
description: A Community Choice rendszer architekturális karakterisztikáinak leírása
---

## Hatékonyság

**Mit jelent?**

* [https://quality.arc42.org/qualities/performance](https://quality.arc42.org/qualities/performance)

**Miért fontos?**

* A fejlesztés során kötelező a klímabarát és sávszélesség-takarékos technológiák alkalmazása. A rendszernek a lehető legkisebb energiafogyasztással és szervererőforrás-igénnyel kell működnie.
* Zamunda bizonyos területein az internetlefedettség hiányos, alacsony a sávszélesség és magas a késleltetés, ezért az adatforgalmat, különösen a multimédiás tartalmaknál, optimalizálni kell a használhatóság érdekében.
* Kapcsolódó követelmények: [F-PK-03](../srs/#413-funkcionális-követelmények), [F-OB-02 és F-OB-03](../srs/#423-funkcionális-követelmények), [5.1. teljesítmény- és hatékonysági követelmények](../srs/#51-teljesítmény--és-hatékonysági-követelmények).

### Forgatókönyv: alacsony sávszélességű böngészés

- **Forrás:** vidéki, gyenge mobilhálózaton böngésző lakos.
- **Stimulus:** a felhasználó megnyitja egy aktív önkormányzati pályázat ötletlistáját.
- **Környezet:** magas késleltetésű, alacsony sávszélességű hálózat; sok ötlethez tartozik kép vagy videó.
- **Válasz:** a rendszer lapozott, minimalizált mezőkészletű választ ad, és a nagy médiatartalmakat nem tölti le a lista első megjelenítéséhez.
- **Válaszmérték:** alacsony sávszélességű környezetben az első tartalmi elemek 5 másodpercen belül megjelennek a 75. percentilisnél; egy listaoldal válaszmérete médiafájlok nélkül legfeljebb 100 KB.
- **Kapcsolódó döntések:** [Implementációs javaslatok](./implementacios-javaslatok/), aszinkron médiafeldolgozás, cache-elhető publikus olvasási út.

## Integritás

**Mit jelent?**

* [https://quality.arc42.org/qualities/integrity](https://quality.arc42.org/qualities/integrity)

**Miért fontos?**

* A rendszer legkritikusabb funkciója a lakossági szavazás. A platformba vetett állampolgári bizalom megköveteli, hogy a szavazatokat utólagosan senki ne tudja módosítani vagy törölni, még a legmagasabb szintű rendszeradminisztrátorok sem.
* Az integritás része az is, hogy ugyanaz a felhasználó ugyanarra az ötletre ne adhasson le több szavazatot; ezt a rendszernek csúcsterhelés és hálózati újrapróbálkozás mellett is garantálnia kell.
* A szavazatok megbízhatóságát és a pályázatok tisztaságát technológiai garanciákkal kell védeni az illetéktelen beavatkozások ellen, a szavazói személyazonosságot pedig pszeudonimizált tárolással kell minimalizálni.
* Kapcsolódó követelmények: [F-SZ-03, F-SZ-04 és F-SZ-05](../srs/#433-funkcionális-követelmények), [5.3. biztonsági és adatvédelmi követelmények](../srs/#53-biztonsági-és-adatvédelmi-követelmények).

### Forgatókönyv: ismételt szavazási kísérlet és adminisztrátori beavatkozás tiltása

- **Forrás:** hitelesített lakos, illetve egy magas jogosultságú adminisztrátor.
- **Stimulus:** a lakos hálózati retry miatt ugyanarra az ötletre kétszer küldi el a szavazási kérést; később egy adminisztrátor megpróbálna szavazatot módosítani vagy törölni.
- **Környezet:** szavazási csúcsterhelés, párhuzamos kérések, tranzakciós szavazati tárolás.
- **Válasz:** a rendszer pszeudonimizált szavazói azonosítással és technológiai egyediségi garanciával kizárja a duplikált szavazatot. A leadott szavazatok utólagos módosítása és törlése tiltott.
- **Válaszmérték:** ugyanarra az ötletre ugyanattól a szavazótól legfeljebb egy érvényes szavazati rekord jön létre; meglévő szavazat utólagos módosítása vagy törlése nem hajtható végre alkalmazásszint megkerülésével sem.
- **Kapcsolódó döntések:** [ADR-005](../adrs/adr-005/), [ADR-006](../adrs/adr-006/), [ADR-007](../adrs/adr-007/), [ADR-008](../adrs/adr-008/), [Implementációs javaslatok](./implementacios-javaslatok/).

### Forgatókönyv: audit esemény nem veszhet el brokerhiba esetén

- **Forrás:** hitelesített lakos és a szavazási infrastruktúra.
- **Stimulus:** a lakos szavazata sikeresen commitol PostgreSQL-ben, miközben a tartós event stream átmenetileg nem elérhető.
- **Környezet:** szavazási csúcsterhelés, broker- vagy hálózati anomália, működő PostgreSQL tranzakciós tároló.
- **Válasz:** a szavazati rekorddal egy tranzakcióban outbox esemény jön létre; az outbox relay worker a hiba megszűnése után publikálja az eseményt.
- **Válaszmérték:** sikeres szavazati commit után a hozzá tartozó outbox rekord nem maradhat tartósan publikálatlan riasztás nélkül; az auditfolyam fogyasztói idempotensen kezelik az esetleges duplikált kézbesítést.
- **Kapcsolódó döntések:** [ADR-006](../adrs/adr-006/), [ADR-003](../adrs/adr-003/), [ADR-004](../adrs/adr-004/).

## Robusztusság

**Mit jelent?**

* [https://quality.arc42.org/qualities/robustness](https://quality.arc42.org/qualities/robustness)

**Miért fontos?**

* Zamunda bizonyos területein a hálózati kapcsolat instabil, lassú és magas késleltetésű. A rendszernek ilyen körülmények között is használhatónak kell maradnia, amit kliensoldali és szerveroldali gyorsítótárazással kell biztosítani, hogy az oldal váza és a korábban letöltött tartalmak a lehető legrövideb idő alatt és minimális adatforgalommal is elérhetőek legyenek.
* A polgárok által beküldött probléma-megoldás párokhoz tartozó nagyméretű multimédiás fájlok (fotók, videók) feltöltése során számítani kell a mobilnet gyakori megszakadására. A rendszernek robusztus, darabolt és hiba esetén automatikusan folytatható adatátvitelt kell alkalmaznia, hogy a feltöltés ne vesszen el egy pillanatnyi térerőhiány miatt.
* Kapcsolódó követelmények: [F-OB-02 és F-OB-03](../srs/#423-funkcionális-követelmények), [5.2. üzembiztonsági követelmények](../srs/#52-üzembiztonsági-követelmények).

### Forgatókönyv: megszakadó médiafeltöltés

- **Forrás:** lakos, aki ötlethez videót tölt fel mobilhálózaton.
- **Stimulus:** a feltöltés közben a kapcsolat többször megszakad vagy jelentősen belassul.
- **Környezet:** instabil internetkapcsolat, nagyméretű videófájl, aktív ötletbeküldési időszak.
- **Válasz:** a rendszer presigned S3-kompatibilis, darabolt és folytatható feltöltést alkalmaz; a sikeresen feltöltött darabokat nem kell újraküldeni. A nagy médiafájl közvetlenül a nyers média bucketbe kerül, a webes kérés nem végzi el szinkron módon a videótömörítést, hanem objektumhivatkozást tartalmazó eseményt küld a Médiafeldolgozó háttérfolyamatnak.
- **Válaszmérték:** rövid hálózati szakadás után a feltöltés folytatható, nem indul teljesen elölről; a médiafeldolgozás hibája vagy lassulása nem teszi elérhetetlenné az ötletbeküldési vagy szavazási funkciókat.
- **Kapcsolódó döntések:** [Implementációs javaslatok](./implementacios-javaslatok/), aszinkron médiafeldolgozás, folytatható feltöltési mechanizmus.

## Elaszticitás

**Mit jelent?**

* [https://quality.arc42.org/qualities/elasticity](https://quality.arc42.org/qualities/elasticity)

**Miért fontos?**

* Egy-egy népszerűbb önkormányzati ötletpályázat szavazási időszakának végén (a határidő lejárta előtti órákban) drasztikus, ugrásszerű terhelésnövekedés várható.
* A rendszernek képesnek kell lennie automatikusan felskálázni az erőforrásokat a csúcsidőszakokban, hogy a kiszolgálás zavartalan maradjon, majd a forgalom csökkenésével azonnal visszaskálázni. Ez garantálja a klímabarát és költséghatékony megvalósítást, elkerülve a feleslegesen üresjáratban lévő szerverparkok fenntartását.
* Kapcsolódó követelmények: [F-SZ-01, F-SZ-02 és F-SZ-03](../srs/#433-funkcionális-követelmények), [5.4. szoftverminőségi attribútumok](../srs/#54-szoftverminőségi-attribútumok).

### Forgatókönyv: szavazási hajrá csúcsterheléssel

- **Forrás:** nagy létszámú lakosság egy népszerű önkormányzati kampány utolsó órájában.
- **Stimulus:** a szavazási forgalom rövid idő alatt többszörösére nő.
- **Környezet:** kampányzárás előtti csúcsterhelés, a publikus böngészés és médiafeltöltés forgalma közben is folytatódik.
- **Válasz:** az üzemeltetés csak a Szavazási szolgáltatás példányszámát növeli, miközben a Pályázat- és adminisztrációkezelő szolgáltatás, az Értesítési szolgáltatás és a Médiafeldolgozó háttérfolyamat saját terhelésük szerint külön skálázhatók. A szavazási út szinkron része PostgreSQL tranzakcióra támaszkodik, amelyet PgBouncer connection pooling és `campaign_id` szerinti particionálás véd; az audit, értesítés és médiafeldolgozás tartós event streameken keresztül aszinkron történik.
- **Válaszmérték:** a szavazási kapacitás célzottan növelhető anélkül, hogy a teljes alkalmazást monolitként kellene replikálni; a PostgreSQL kapcsolatszám nem nőhet kontrollálatlanul az alkalmazáspéldányok számával; a csúcsidőszak után a Szavazási szolgáltatás visszaskálázható, csökkentve az üresjárati költséget és energiafogyasztást.
- **Kapcsolódó döntések:** [ADR-001](../adrs/adr-001/), [ADR-002](../adrs/adr-002/), [ADR-003](../adrs/adr-003/), [ADR-004](../adrs/adr-004/), [ADR-008](../adrs/adr-008/), SBA + EDA hibrid architektúra.


<!-- END SOURCE: docs/src/content/docs/architektura/karakterisztikak.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/architektura/szignifikans-kovetelmenyek.md -->

# Forrás: docs/src/content/docs/architektura/szignifikans-kovetelmenyek.md

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


<!-- END SOURCE: docs/src/content/docs/architektura/szignifikans-kovetelmenyek.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/architektura/stilusvalasztas.md -->

# Forrás: docs/src/content/docs/architektura/stilusvalasztas.md

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
- **Adatvédelem:** a `voter_key` HMAC kampány-mesterkulcsa KMS/Vault Transit jellegű kulcskezelésben él, a kritikus útban pedig rövid élettartamú kampánykulcs használható ([ADR-007](../adrs/adr-007/)).
- **Csúcsterhelés:** a PostgreSQL írási út PgBouncer poololással és `campaign_id` szerinti particionálással védett ([ADR-008](../adrs/adr-008/)).
- **Takarékos brokerprofil:** az induló profil NATS JetStream, a Kafka csak országos/nagy audit-replay profilnál indokolt ([ADR-004](../adrs/adr-004/)).
- **Peremvédelem:** a NestJS BFF elé dedikált, implementációfüggetlen Ingress/API Gateway kerül TLS terminációra, rate limitingre és JWT elővalidálásra ([ADR-009](../adrs/adr-009/)).


<!-- END SOURCE: docs/src/content/docs/architektura/stilusvalasztas.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/architektura/c4-modell.mdx -->

# Forrás: docs/src/content/docs/architektura/c4-modell.mdx

---
title: C4 modell
description: A Community Choice rendszer C4 rendszerkörnyezeti, konténer- és komponensdiagramjai
---

import LikeC4View from '../../../components/LikeC4View.astro';

A Community Choice platform architektúráját a [C4 modell](https://c4model.com/) szintjein és fókusznézetein keresztül mutatjuk be. A fő nézetek áttekintők; a szavazási integritás és a médiafeldolgozás külön diagramon látható, hogy a konténerdiagram ne zsúfolódjon túl.

## Rendszerkörnyezeti diagram

A legfelső szint megmutatja, kik használják a rendszert és milyen külső rendszerekkel (például a Zamunda One azonosítóval) áll kapcsolatban.

<LikeC4View viewId="context" />

## Konténerdiagram Áttekintő

A konténerdiagram áttekintő nézet: a webes felületeket, a dedikált Ingress/API Gatewayt, a NestJS BFF-et, a két fő domain szolgáltatást, az adattárolókat, a tartós event streameket és a háttérfogyasztókat mutatja. A részletes infrastruktúra-elemek, például PgBouncer, KMS és outbox relay, külön fókusznézetben szerepelnek.

A diagram a C4 ajánlás szerint nem magát az üzenetbrókert, hanem a logikai streameket jeleníti meg, mert ezek mutatják meg pontosan a producer és consumer oldali csatolást. A technológiai profil az [ADR-004](../adrs/adr-004/) szerint NATS JetStream vagy Kafka lehet.

A nyilak az elsődleges kérés-, adat- vagy eseményáramlást mutatják. Szinkron API-hívásoknál a válasz iránya nincs külön berajzolva; aszinkron folyamatoknál a nyíl az esemény tényleges útját követi, például `PostgreSQL -> outbox relay worker -> vote-cast-events stream`.

<LikeC4View viewId="containers" />

## Szavazási integritás és audit eseménykibocsátás

Ez a fókusznézet csak a szavazás kritikus integritási láncát mutatja. A Szavazási szolgáltatás nem végez közvetlen broker-publikálást. Egyetlen PostgreSQL tranzakcióban írja:

1. a szavazati rekordot,
2. az outbox eseményt.

Az outbox relay worker olvassa az outbox rekordokat `SELECT ... FOR UPDATE SKIP LOCKED` stratégiával, majd publikálja a `vote-cast-events` tartós streambe. Így ha a broker vagy a hálózat átmenetileg hibázik, a szavazati commit nem vész el, és az audit esemény később pótolható. A KMS/Vault Transit a kampány-mesterkulcsot és a rövid élettartamú kulcsok származtatását védi, a PgBouncer pedig az adatbázis-kapcsolatok kontrollját biztosítja.

<LikeC4View viewId="voteIntegrity" />

## Médiafeltöltés és Feldolgozás

Ez a fókusznézet azt mutatja, hogyan kerülnek a nagy médiafájlok a backend API megkerülésével objektumtárba. A lakosok ötletekhez, az adminisztrátorok pedig pályázati kiírásokhoz tölthetnek fel képet vagy videót. A megfelelő webes felület presigned S3-kompatibilis feltöltési URL-t kér, közvetlenül a nyers média bucketbe tölt, majd a backend csak objektumhivatkozást és metaadatot publikál a médiafeldolgozási streambe.

<LikeC4View viewId="mediaFlow" />

## Komponensdiagramok

A komponens szintű nézetek részletezik az egyes konténerek belső működését és felelősségi köreit.

### Szavazási szolgáltatás
Ez a szolgáltatás felel a jogosult, pszeudonimizált és megváltoztathatatlan szavazatok rögzítéséért. Tartalmazza a Zamunda One klienst, amely a lakcímet és - ha az API támogatja - a lakcím-módosítási dátumot/időbélyeget kéri le, valamint a Jogosultságkezelőt, amely a `campaign_eligibility` pillanatképet ellenőrzi vagy létrehozza. A szolgáltatás rövid élettartamú kampánykulcsból és a jogosultsági pillanatkép kontextusából pszeudonimizált szavazói kulcsot képez, majd a szavazatot PostgreSQL-ben, csak hozzáfűzhető szavazati tranzakciónaplóban tárolja.
Az audit esemény a szavazattal együtt outbox rekordként jön létre, így a broker vagy hálózat hibája nem tudja elszakítani a szavazati commitot az auditfolyamtól.

<LikeC4View viewId="compVoting" />

### Pályázat- és adminisztrációkezelő szolgáltatás
Kezeli a pályázatok életciklusát és a médiafeltöltés üzleti oldalát. Presigned S3-kompatibilis feltöltési URL-t ad ki, menti az ötlet- és média-metaadatokat, majd feldolgozási eseményt küld a média streambe. A nagy fájlok nem ezen a szolgáltatáson és nem event stream üzenetben utaznak.

<LikeC4View viewId="compCampaignAdmin" />

### Médiafeldolgozó háttérfolyamat
Egy tisztán eseményvezérelt komponens, amely a háttérben végzi a képek és videók tömörítését. Ez kulcsfontosságú a klímabarát működés és a takarékos sávszélesség-használat szempontjából.

<LikeC4View viewId="compMediaWorker" />


<!-- END SOURCE: docs/src/content/docs/architektura/c4-modell.mdx -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/architektura/implementacios-javaslatok.md -->

# Forrás: docs/src/content/docs/architektura/implementacios-javaslatok.md

---
title: Implementációs javaslatok
description: A követelményekből leválasztott technológiai és megvalósítási javaslatok gyűjtőoldala
---

# Implementációs javaslatok

Ez az oldal azokat a technológiai részleteket gyűjti, amelyek hasznos tervezési javaslatok, de nem önálló SRS-követelmények. A követelmények oldalon az üzleti vagy minőségi elvárás szerepel, itt pedig az egyik lehetséges megvalósítási irány.

## Hitelesítés és külső integráció

- A Zamunda One integráció megvalósítható HTTPS-alapú, tokenes megoldással.
- Ha a Zamunda One támogatja, érdemes OAuth 2.0 / OpenID Connect jellegű folyamatot használni.
- A kliens és backend közötti adatcsere RESTful API-kon és JSON üzenetformátumon alapulhat, amennyiben ez illeszkedik a végleges API-szerződéshez.

## Peremvédelem és API belépési pont

- A publikus webes forgalom dedikált Ingress/API Gateway rétegen keresztül érkezzen, ne közvetlenül a NestJS BFF vagy domain szolgáltatások felé.
- A gateway felelőssége a TLS termináció, routing, request size limitek, durva rate limiting, alapvető DDoS/abuse szűrés, biztonsági fejlécek és JWT formai/JWKS-alapú elővalidálás.
- A gateway implementációfüggetlen döntés: önmenedzselt környezetben Traefik vagy Nginx javasolt, plugin-orientált gateway igénynél Kong, felhőben natív API gateway/load balancer is megfelelő lehet.
- A NestJS BFF maradjon alkalmazási belépési pont az üzleti jogosultság, lakcím-alapú ellenőrzés, API-összeállítás és domain-specifikus hibakezelés számára.

## Hálózati hatékonyság

- Magas késleltetésű és alacsony sávszélességű régiókban HTTP/2 vagy HTTP/3 használata csökkentheti a kapcsolatkezelési és multiplexálási költségeket.
- A statikus erőforrásokhoz érdemes szabványos `Cache-Control` fejléceket beállítani.
- A publikus listanézeteknél javasolt a lapozás, a csak szükséges mezők visszaadása és a részletes mezők részletnézetbe helyezése.
- A képek és videók kliensoldali betöltésénél lazy loading alkalmazható, hogy a listaoldal ne töltsön le indokolatlan médiát.

## Médiafeltöltés és médiakiszolgálás

- Instabil hálózati kapcsolat esetén a lakossági ötletmédia és az adminisztrátori pályázati média feltöltése darabolt, megszakítás után folytatható S3-kompatibilis multipart upload mechanizmussal kezelhető.
- A backend csak presigned upload URL-t és objektumkulcsot adjon ki; a kliens a nagy bináris állományt közvetlenül az objektumtárba töltse fel.
- Az event stream üzenetek csak objektumtárbeli hivatkozást, metaadatot és feldolgozási paramétereket tartalmazzanak, ne magát a médiafájlt.
- A feltöltött képek WebP, a videók WebM változatra alakíthatók, ha a minőség és böngészőtámogatás alapján ez indokolt.
- A médiatartalmak kiszolgálása történhet közvetlenül az optimalizált média bucketből, vagy forgalmi és költségadatok alapján opcionális CDN / edge cache rétegen keresztül.
- A médiafeldolgozás fusson a felhasználói kérés kritikus útján kívül, aszinkron háttérfolyamatban.

## Gyorsítótárazás

- A ritkán változó publikus adatok, például a nyitott pályázatok listája vagy a településlista, szerveroldali memóriagyorsítótárból szolgálhatók ki, ha a konzisztenciaigény ezt megengedi.
- Redis használható cache célra, de a végleges döntést az üzemeltetési költség, konzisztenciaigény és rendelkezésre állási követelmény alapján kell meghozni.

## Szavazati integritás

- A szavazatok elsődleges igazságforrása PostgreSQL tranzakciós tároló.
- A leadott szavazatok módosításának és törlésének tiltása csak hozzáfűzhető szavazati tranzakciónaplóval, adatbázis-szintű jogosultságokkal és `UPDATE` / `DELETE` tiltással valósul meg.
- A kampányhoz kötött lakcímjogosultságot `campaign_eligibility` pillanatkép táblában kell rögzíteni felhasználóazonosító hash, kampányazonosító, önkormányzati azonosító, jogosultsági döntés, snapshot időpont és - ha a Zamunda One API-ból lekérhető - lakcím-módosítási dátum/időbélyeg mezőkkel; nyers lakcímet vagy nyers személyes azonosítót ez a tábla sem tárolhat.
- Az „egy felhasználó egy ötletre egyszer” szabályt adatbázis-szintű egyediségi szabály védi; particionált szavazati táblánál például `UNIQUE(campaign_id, idea_id, voter_key)`.
- A nyers személyes azonosító helyett determinisztikus, pszeudonimizált szavazói kulcs használatos.
- A kampány-mesterkulcs KMS/Vault Transit jellegű kulcskezelésben él; a szavazási kritikus útban a pod illékony memóriában tartott rövid élettartamú kampánykulcsból számolja a HMAC-et.
- A nyers kampány-mesterkulcs nem kerülhet `.env` fájlba, CI/CD változóba, alkalmazáslogba vagy lemezre; a rövid élettartamú kulcs TTL-je és rotációja üzemeltetési szabály.
- A szavazati tranzakciónaplót `campaign_id` szerint particionálni kell, hogy a kampányzárási írási terhelés kisebb indexeken fusson.
- Az alkalmazásszolgáltatások és a PostgreSQL között PgBouncer vagy kompatibilis connection pooler szükséges, szolgáltatásonként korlátozott poolokkal.

## Eseménykezelés és audit

- Az audit és integrációs eseményfolyam tartós event streamként működik; induló profilban NATS JetStream, országos/nagy replay profilban Kafka alkalmazható.
- A szavazat leadása, ötlet beküldése és adminisztrátori beavatkozás domain eseményként külön streamekbe kerül.
- Az audit, értesítés és médiafeldolgozás egymástól független fogyasztóként működhet, hogy ezek lassulása ne akadályozza a szavazási vagy pályázatkezelési kéréseket.
- A szavazási auditfolyamnál a megbízható eseménypublikálás kötelező transactional outbox mintával történik: a Szavazási szolgáltatás PostgreSQL tranzakcióban ír, valamint saját outbox relay worker publikál NATS JetStreambe.

## Későbbi opció: ötlet-deduplikáció RAG/pgvector alapon

- Az adminisztratív moderáció tehermentesítésére későbbi bővítésként lokális embedding modell és PostgreSQL `pgvector` használható.
- Az ötletbeküldés közben a rendszer hasonló korábbi ötleteket ajánlhat fel, például „ezt már többen javasolták, inkább támogasd a meglévő ötletet” jellegű UX-szel.
- Ez nem v1 kritikus követelmény: nem blokkolhatja az ötletbeküldést, és alapértelmezetten nem támaszkodik külső AI API-ra.


<!-- END SOURCE: docs/src/content/docs/architektura/implementacios-javaslatok.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/brand-spec.md -->

# Forrás: docs/src/content/docs/brand-spec.md

---
title: Brand Specification – Community Choice Zamunda
description: "A Community Choice vizuális identitásának hivatalos specifikációja: színek, tipográfia, design tokenek és használati szabályok"
---

# Brand Specification – Community Choice Zamunda

> **Verzió:** 1.0.0
> **Utolsó módosítás:** 2026-05-12
> **Státusz:** Forrásként szolgáltat a design rendszer és a UI Kit felépítéséhez. Minden vizuális döntés ehhez a dokumentumhoz igazodik.

<style>
  .brand-guide {
    --cc-green-50:  #f0fdf4;
    --cc-green-100: #dcfce7;
    --cc-green-200: #bbf7d0;
    --cc-green-300: #86efac;
    --cc-green-400: #4ade80;
    --cc-green-500: #22c55e;
    --cc-green-600: #16a34a;
    --cc-green-700: #15803d;
    --cc-green-800: #166534;
    --cc-green-900: #14532d;
    --cc-green-950: #052e16;
    --cc-blue-50:  #eff6ff;
    --cc-blue-100: #dbeafe;
    --cc-blue-200: #bfdbfe;
    --cc-blue-300: #93c5fd;
    --cc-blue-400: #60a5fa;
    --cc-blue-500: #3b82f6;
    --cc-blue-600: #2563eb;
    --cc-blue-700: #1d4ed8;
    --cc-blue-800: #1e40af;
    --cc-blue-900: #1e3a8a;
    --cc-gold-50:  #fefce8;
    --cc-gold-100: #fef9c3;
    --cc-gold-200: #fef08a;
    --cc-gold-300: #fde047;
    --cc-gold-400: #facc15;
    --cc-gold-500: #eab308;
    --cc-gold-600: #ca8a04;
    --cc-gold-700: #a16207;
    --cc-gold-800: #854d0e;
    --cc-gold-900: #713f12;
    --cc-neutral-0:   #ffffff;
    --cc-neutral-50:  #fafaf9;
    --cc-neutral-100: #f5f5f4;
    --cc-neutral-200: #e7e5e4;
    --cc-neutral-300: #d6d3d1;
    --cc-neutral-400: #a8a29e;
    --cc-neutral-500: #78716c;
    --cc-neutral-600: #57534e;
    --cc-neutral-700: #44403c;
    --cc-neutral-800: #292524;
    --cc-neutral-900: #1c1917;
    --cc-neutral-950: #0c0a09;
    --cc-earth-50:  #fdf8f0;
    --cc-earth-100: #f5e6d0;
    --cc-earth-200: #e8d0a8;
    --cc-earth-300: #d4b078;
    --cc-earth-400: #c09050;
    --cc-earth-500: #a87830;
    --cc-earth-600: #8a6020;
    --cc-earth-700: #6d4c18;
    --cc-earth-800: #503810;
    --cc-earth-900: #3a2808;
    --cc-red-50:  #fef2f2;
    --cc-red-300: #fca5a5;
    --cc-red-800: #991b1b;
    --cc-text-primary:     var(--cc-neutral-900);
    --cc-text-secondary:   var(--cc-neutral-600);
    --cc-text-muted:       var(--cc-neutral-400);
    --cc-text-on-primary:  var(--cc-neutral-0);
    --cc-text-link:        var(--cc-blue-600);
    --cc-surface-page:     var(--cc-neutral-50);
    --cc-surface-card:     var(--cc-neutral-0);
    --cc-surface-card-alt: var(--cc-neutral-100);
    --cc-border-default:   var(--cc-neutral-200);
    --cc-border-strong:    var(--cc-neutral-300);
    --cc-border-accent:    var(--cc-earth-500);
    --cc-cta-bg:           var(--cc-green-500);
    --cc-cta-bg-hover:     var(--cc-green-600);
    --cc-cta-text:         var(--cc-neutral-0);
    --cc-secondary-bg:      var(--cc-blue-500);
    --cc-secondary-bg-hover:var(--cc-blue-600);
    --cc-secondary-text:    var(--cc-neutral-0);
    --cc-status-success-bg:   var(--cc-green-100);
    --cc-status-success-text: var(--cc-green-800);
    --cc-status-info-bg:      var(--cc-blue-100);
    --cc-status-info-text:    var(--cc-blue-800);
    --cc-status-warning-bg:   var(--cc-gold-100);
    --cc-status-warning-text: var(--cc-gold-800);
    --cc-status-error-bg:     var(--cc-red-50);
    --cc-status-error-text:   var(--cc-red-800);
    --cc-status-error-border: var(--cc-red-300);
    --cc-accent-gold:  var(--cc-gold-400);
    --cc-accent-earth: var(--cc-earth-500);
    --cc-focus-ring: 0 0 0 2px var(--cc-neutral-0), 0 0 0 4px var(--cc-blue-500);
    --cc-font-body: 'Inter', system-ui, -apple-system, sans-serif;
    --cc-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --cc-radius-sm: 4px;
    --cc-radius-md: 8px;
    --cc-radius-lg: 12px;
    --cc-radius-xl: 16px;
    --cc-radius-full: 9999px;
    --cc-shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
    --cc-shadow-sm: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
    --cc-shadow-md: 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06);
    --cc-shadow-lg: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
    margin: 2rem 0 3rem;
    color: var(--cc-text-primary);
    font-family: var(--cc-font-body);
  }
  .brand-guide * { box-sizing: border-box; }
  .brand-hero {
    background: var(--cc-green-700);
    color: var(--cc-neutral-0);
    padding: 3rem 1.5rem;
    border-radius: var(--cc-radius-xl);
    text-align: center;
  }
  .brand-hero h2 {
    color: inherit;
    margin: 0;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: 0;
  }
  .brand-hero p {
    margin: .75rem 0 0;
    color: rgba(255,255,255,.86);
    font-size: 1.125rem;
  }
  .brand-version {
    display: inline-block;
    margin-top: 1rem;
    padding: .25rem .75rem;
    border-radius: var(--cc-radius-full);
    background: rgba(255,255,255,.16);
    color: var(--cc-neutral-0);
    font: 400 .75rem/1.4 var(--cc-font-mono);
  }
  .brand-nav {
    display: flex;
    flex-wrap: wrap;
    gap: .75rem 1.25rem;
    margin: 1.25rem 0 2rem;
    padding: .85rem 1rem;
    border: 1px solid var(--cc-border-default);
    border-radius: var(--cc-radius-lg);
    background: var(--cc-surface-card);
    font-size: .875rem;
    font-weight: 600;
  }
  .brand-nav a { color: var(--cc-text-secondary); text-decoration: none; }
  .brand-nav a:hover { color: var(--cc-text-link); }
  .brand-section {
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--cc-border-default);
  }
  .brand-section h2,
  .brand-section h3 {
    color: var(--cc-text-primary);
    letter-spacing: 0;
  }
  .brand-section h2 {
    margin: 0 0 .5rem;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .brand-section h3 {
    margin: 2rem 0 1rem;
    font-size: 1.125rem;
    font-weight: 600;
  }
  .brand-desc {
    max-width: 65ch;
    margin: 0 0 1.5rem;
    color: var(--cc-text-secondary);
  }
  .brand-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }
  .brand-card {
    padding: 1.25rem;
    border: 1px solid var(--cc-border-default);
    border-radius: var(--cc-radius-lg);
    background: var(--cc-surface-card);
    box-shadow: var(--cc-shadow-xs);
  }
  .brand-card strong {
    display: block;
    margin-bottom: .5rem;
    color: var(--cc-text-primary);
  }
  .brand-card span,
  .brand-card p {
    margin: 0;
    color: var(--cc-text-secondary);
    font-size: .875rem;
  }
  .brand-rule {
    margin: 1.5rem 0 0;
    padding: 1rem;
    border-left: 3px solid var(--cc-accent-earth);
    border-radius: var(--cc-radius-sm);
    background: var(--cc-surface-card-alt);
    color: var(--cc-text-secondary);
    font-size: .875rem;
  }
  .brand-palette-family { margin: 1.5rem 0 2rem; }
  .brand-family-name {
    margin-bottom: .75rem;
    color: var(--cc-text-secondary);
    font-size: .75rem;
    font-weight: 700;
    letter-spacing: .05em;
    text-transform: uppercase;
  }
  .brand-palette-row {
    display: flex;
    flex-wrap: wrap;
    gap: .75rem;
  }
  .brand-swatch {
    width: 76px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
  }
  .brand-swatch-color {
    width: 64px;
    height: 48px;
    border: 1px solid var(--cc-border-default);
    border-radius: var(--cc-radius-md);
  }
  .brand-swatch-label,
  .brand-swatch-value,
  .brand-token {
    color: var(--cc-text-secondary);
    font: 400 .65rem/1.2 var(--cc-font-mono);
    text-align: center;
    overflow-wrap: anywhere;
  }
  .brand-swatch-value { color: var(--cc-text-muted); }
  .brand-semantic-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: .85rem;
  }
  .brand-semantic-card {
    padding: 1rem;
    border: 1px solid var(--cc-border-default);
    border-radius: var(--cc-radius-lg);
    background: var(--cc-surface-card);
  }
  .brand-semantic-swatch {
    height: 40px;
    margin-bottom: .75rem;
    border: 1px solid var(--cc-border-default);
    border-radius: var(--cc-radius-sm);
  }
  .brand-type-row {
    display: flex;
    gap: 1.5rem;
    align-items: baseline;
    padding: .75rem 0;
    border-bottom: 1px solid var(--cc-border-default);
  }
  .brand-type-label {
    flex: 0 0 145px;
    color: var(--cc-text-muted);
    font: 400 .75rem/1.35 var(--cc-font-mono);
  }
  .brand-type-sample { flex: 1; color: var(--cc-text-primary); }
  .brand-space-row {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: .35rem 0;
  }
  .brand-space-label {
    flex: 0 0 110px;
    color: var(--cc-text-muted);
    font: 400 .75rem/1.3 var(--cc-font-mono);
  }
  .brand-space-bar {
    height: 16px;
    border-radius: var(--cc-radius-sm);
    background: var(--cc-green-300);
  }
  .brand-demo-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }
  .cc-btn {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    padding: .75rem 1.5rem;
    border: 0;
    border-radius: var(--cc-radius-md);
    cursor: pointer;
    font: 600 .875rem/1 var(--cc-font-body);
    letter-spacing: .05em;
    text-transform: uppercase;
  }
  .cc-btn:focus-visible { outline: none; box-shadow: var(--cc-focus-ring); }
  .cc-btn-primary { background: var(--cc-cta-bg); color: var(--cc-cta-text); }
  .cc-btn-primary:hover { background: var(--cc-cta-bg-hover); }
  .cc-btn-secondary { background: var(--cc-secondary-bg); color: var(--cc-secondary-text); }
  .cc-btn-secondary:hover { background: var(--cc-secondary-bg-hover); }
  .cc-btn-outline {
    border: 1px solid var(--cc-border-strong);
    background: transparent;
    color: var(--cc-text-primary);
  }
  .cc-btn-ghost {
    background: transparent;
    color: var(--cc-text-link);
  }
  .cc-btn:disabled { opacity: .5; cursor: not-allowed; }
  .cc-badge {
    display: inline-flex;
    align-items: center;
    min-height: 28px;
    padding: .25rem .75rem;
    border-radius: var(--cc-radius-full);
    font-size: .75rem;
    font-weight: 600;
  }
  .cc-badge-success { background: var(--cc-status-success-bg); color: var(--cc-status-success-text); }
  .cc-badge-info { background: var(--cc-status-info-bg); color: var(--cc-status-info-text); }
  .cc-badge-warning { background: var(--cc-status-warning-bg); color: var(--cc-status-warning-text); }
  .cc-badge-error {
    border: 1px solid var(--cc-status-error-border);
    background: var(--cc-status-error-bg);
    color: var(--cc-status-error-text);
  }
  .cc-badge-draft { background: var(--cc-neutral-100); color: var(--cc-neutral-600); }
  .cc-badge-submit { background: var(--cc-green-100); color: var(--cc-green-800); }
  .cc-badge-voting { background: var(--cc-blue-100); color: var(--cc-blue-800); }
  .cc-badge-closed { background: var(--cc-neutral-200); color: var(--cc-neutral-700); }
  .cc-badge-eval { background: var(--cc-gold-100); color: var(--cc-gold-800); }
  .cc-badge-built { background: var(--cc-green-200); color: var(--cc-green-900); }
  .cc-input {
    width: 100%;
    min-height: 44px;
    padding: .75rem 1rem;
    border: 1px solid var(--cc-border-strong);
    border-radius: var(--cc-radius-sm);
    background: var(--cc-surface-card);
    color: var(--cc-text-primary);
    font: 400 1rem/1.5 var(--cc-font-body);
  }
  .cc-input:focus {
    outline: none;
    border-color: var(--cc-blue-500);
    box-shadow: var(--cc-focus-ring);
  }
  .brand-radius-demo,
  .brand-shadow-demo {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .brand-radius-box {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    border: 2px solid var(--cc-green-500);
    background: var(--cc-surface-card);
    color: var(--cc-text-muted);
    font: 400 .75rem/1 var(--cc-font-mono);
  }
  .brand-shadow-box {
    width: 120px;
    height: 80px;
    display: grid;
    place-items: center;
    border-radius: var(--cc-radius-lg);
    background: var(--cc-surface-card);
    color: var(--cc-text-muted);
    font: 400 .75rem/1 var(--cc-font-mono);
  }
  .brand-token-box {
    max-width: 560px;
    padding: 1.25rem;
    border-radius: var(--cc-radius-lg);
    background: var(--cc-neutral-900);
    color: var(--cc-neutral-100);
    font: 400 .875rem/1.7 var(--cc-font-mono);
  }
  @media (max-width: 640px) {
    .brand-hero { padding: 2rem 1rem; }
    .brand-type-row { flex-direction: column; gap: .25rem; }
    .brand-type-label { flex: none; }
    .brand-swatch { width: 60px; }
    .brand-swatch-color { width: 52px; height: 38px; }
  }
</style>

<div class="brand-guide">
  <section class="brand-hero">
    <h2>Community Choice</h2>
    <p>Zamunda Digitális Reneszánsz - Brand Style Guide</p>
    <span class="brand-version">v1.0.0 - 2026-05-12</span>
  </section>

  <nav class="brand-nav" aria-label="Brand style guide navigáció">
    <a href="#vizualis-alapelvek">Alapelvek</a>
    <a href="#vizualis-paletta">Paletta</a>
    <a href="#vizualis-szemantika">Szemantikus színek</a>
    <a href="#vizualis-tipografia">Tipográfia</a>
    <a href="#vizualis-terkoz">Térköz</a>
    <a href="#vizualis-komponensek">Komponensek</a>
    <a href="#vizualis-eletciklus">Életciklus</a>
    <a href="#vizualis-tokenek">Token hierarchia</a>
  </nav>

  <section id="vizualis-alapelvek" class="brand-section">
    <h2>Alapelvek</h2>
    <p class="brand-desc">A vizuális identitás négy pilléren nyugszik. Minden szín-, tipográfiai- és layout-döntés ehhez igazodik.</p>
    <div class="brand-card-grid">
      <div class="brand-card" style="border-top: 3px solid var(--cc-green-500);"><strong>Közösség és demokrácia</strong><span>Kerek, összefogó formák; meleg színek; nem hagyja ki a lassú kapcsolatú lakost.</span></div>
      <div class="brand-card" style="border-top: 3px solid var(--cc-blue-500);"><strong>Bizalom és integritás</strong><span>Nyugodt, stabil színek; semmi villódzás; adat és szavazat látható.</span></div>
      <div class="brand-card" style="border-top: 3px solid var(--cc-gold-400);"><strong>Modern digitális állam</strong><span>Tiszta rács, modern sans-serif, takarékos whitespace.</span></div>
      <div class="brand-card" style="border-top: 3px solid var(--cc-earth-500);"><strong>Nyitottság és befogadás</strong><span>Nagy kattintási felületek, magas kontraszt, kor- és képességfüggetlen.</span></div>
    </div>
    <div class="brand-rule"><strong>Anti-elvek:</strong> neon színek, szürke tech-stílus, játékos maskot, nagy háttérkép, parallax, dekoratív animáció, kétharmad képernyőt elfedő modal.</div>
  </section>

  <section id="vizualis-paletta" class="brand-section">
    <h2>Paletta - Primitívek</h2>
    <p class="brand-desc">A teljes színrendszert 5 hue család és 53 árnyalat alkotja. A primitíveket komponensben közvetlenül nem használjuk.</p>
    <div id="brand-palette-render"></div>
  </section>

  <section id="vizualis-szemantika" class="brand-section">
    <h2>Szemantikus színek</h2>
    <p class="brand-desc">A komponensek ezekre a szerephez kötött tokenekre épülnek. A kártyák a végleges színt is renderelik.</p>
    <h3>Szöveg</h3>
    <div class="brand-semantic-grid">
      <div class="brand-semantic-card"><div class="brand-semantic-swatch" style="background:var(--cc-text-primary);"></div><div class="brand-token">--cc-text-primary</div></div>
      <div class="brand-semantic-card"><div class="brand-semantic-swatch" style="background:var(--cc-text-secondary);"></div><div class="brand-token">--cc-text-secondary</div></div>
      <div class="brand-semantic-card"><div class="brand-semantic-swatch" style="background:var(--cc-text-muted);"></div><div class="brand-token">--cc-text-muted</div></div>
      <div class="brand-semantic-card"><div class="brand-semantic-swatch" style="background:var(--cc-text-link);"></div><div class="brand-token">--cc-text-link</div></div>
    </div>
    <h3>CTA, felületek és státuszok</h3>
    <div class="brand-semantic-grid">
      <div class="brand-semantic-card"><div class="brand-semantic-swatch" style="background:var(--cc-cta-bg);"></div><div class="brand-token">--cc-cta-bg</div></div>
      <div class="brand-semantic-card"><div class="brand-semantic-swatch" style="background:var(--cc-secondary-bg);"></div><div class="brand-token">--cc-secondary-bg</div></div>
      <div class="brand-semantic-card"><div class="brand-semantic-swatch" style="background:var(--cc-surface-page);"></div><div class="brand-token">--cc-surface-page</div></div>
      <div class="brand-semantic-card"><div class="brand-semantic-swatch" style="background:transparent;border:2px solid var(--cc-border-accent);"></div><div class="brand-token">--cc-border-accent</div></div>
      <div class="brand-semantic-card" style="background:var(--cc-status-success-bg);"><div class="brand-semantic-swatch" style="background:var(--cc-status-success-text);height:24px;width:44px;"></div><div class="brand-token" style="color:var(--cc-status-success-text);">--cc-status-success</div></div>
      <div class="brand-semantic-card" style="background:var(--cc-status-info-bg);"><div class="brand-semantic-swatch" style="background:var(--cc-status-info-text);height:24px;width:44px;"></div><div class="brand-token" style="color:var(--cc-status-info-text);">--cc-status-info</div></div>
      <div class="brand-semantic-card" style="background:var(--cc-status-warning-bg);"><div class="brand-semantic-swatch" style="background:var(--cc-status-warning-text);height:24px;width:44px;"></div><div class="brand-token" style="color:var(--cc-status-warning-text);">--cc-status-warning</div></div>
      <div class="brand-semantic-card" style="background:var(--cc-status-error-bg);border-color:var(--cc-status-error-border);"><div class="brand-semantic-swatch" style="background:var(--cc-status-error-text);height:24px;width:44px;"></div><div class="brand-token" style="color:var(--cc-status-error-text);">--cc-status-error</div></div>
    </div>
  </section>

  <section id="vizualis-tipografia" class="brand-section">
    <h2>Tipográfia</h2>
    <p class="brand-desc">Inter a fő betűtípus, JetBrains Mono az azonosítókhoz és kódszerű tartalmakhoz.</p>
    <div class="brand-type-row"><span class="brand-type-label">--cc-text-4xl<br>36px / 800</span><span class="brand-type-sample" style="font-size:2.25rem;font-weight:800;line-height:1.25;">Zamunda Digitális Reneszánsz</span></div>
    <div class="brand-type-row"><span class="brand-type-label">--cc-text-3xl<br>30px / 700</span><span class="brand-type-sample" style="font-size:1.875rem;font-weight:700;line-height:1.25;">Közösségi ötletpályázat</span></div>
    <div class="brand-type-row"><span class="brand-type-label">--cc-text-2xl<br>24px / 700</span><span class="brand-type-sample" style="font-size:1.5rem;font-weight:700;">Szavazz az ötletekre</span></div>
    <div class="brand-type-row"><span class="brand-type-label">--cc-text-base<br>16px / 400</span><span class="brand-type-sample" style="font-size:1rem;">Bekezdés szöveg, űrlapmező tartalom. A lakosok helyi közösségi fejlesztési ötleteket javasolhatnak.</span></div>
    <div class="brand-type-row"><span class="brand-type-label">JetBrains Mono</span><span class="brand-type-sample" style="font-family:var(--cc-font-mono);">PK-2026-042 - F-SZ-01 - voter_key: a3f8c1</span></div>
  </section>

  <section id="vizualis-terkoz" class="brand-section">
    <h2>Térköz, lekerekítés és árnyék</h2>
    <p class="brand-desc">A 4px alapú skála és a radius/shadow tokenek tényleges méretben jelennek meg.</p>
    <div class="brand-space-row"><span class="brand-space-label">--cc-space-1<br>4px</span><div class="brand-space-bar" style="width:10px;"></div></div>
    <div class="brand-space-row"><span class="brand-space-label">--cc-space-2<br>8px</span><div class="brand-space-bar" style="width:20px;"></div></div>
    <div class="brand-space-row"><span class="brand-space-label">--cc-space-4<br>16px</span><div class="brand-space-bar" style="width:40px;"></div></div>
    <div class="brand-space-row"><span class="brand-space-label">--cc-space-8<br>32px</span><div class="brand-space-bar" style="width:80px;"></div></div>
    <div class="brand-space-row"><span class="brand-space-label">--cc-space-16<br>64px</span><div class="brand-space-bar" style="width:160px;"></div></div>
    <h3>Lekerekítés</h3>
    <div class="brand-radius-demo">
      <div class="brand-radius-box" style="border-radius:0;">none</div>
      <div class="brand-radius-box" style="border-radius:var(--cc-radius-sm);">sm</div>
      <div class="brand-radius-box" style="border-radius:var(--cc-radius-md);">md</div>
      <div class="brand-radius-box" style="border-radius:var(--cc-radius-lg);">lg</div>
      <div class="brand-radius-box" style="border-radius:var(--cc-radius-xl);">xl</div>
      <div class="brand-radius-box" style="border-radius:var(--cc-radius-full);">full</div>
    </div>
    <h3>Árnyék</h3>
    <div class="brand-shadow-demo">
      <div class="brand-shadow-box" style="box-shadow:var(--cc-shadow-xs);">xs</div>
      <div class="brand-shadow-box" style="box-shadow:var(--cc-shadow-sm);">sm</div>
      <div class="brand-shadow-box" style="box-shadow:var(--cc-shadow-md);">md</div>
      <div class="brand-shadow-box" style="box-shadow:var(--cc-shadow-lg);">lg</div>
    </div>
  </section>

  <section id="vizualis-komponensek" class="brand-section">
    <h2>Komponensek</h2>
    <p class="brand-desc">A mintaelemek szemantikus tokeneket használnak, ezért a gombok, badge-ek, kártyák és inputok a tényleges brand színekkel jelennek meg.</p>
    <h3>Gombok</h3>
    <div class="brand-demo-row">
      <button class="cc-btn cc-btn-primary">Szavazok</button>
      <button class="cc-btn cc-btn-secondary">Részletek</button>
      <button class="cc-btn cc-btn-outline">Mégsem</button>
      <button class="cc-btn cc-btn-ghost">Bejelentkezés</button>
      <button class="cc-btn cc-btn-primary" disabled>Tiltva</button>
    </div>
    <h3>Kártyák és űrlap</h3>
    <div class="brand-card-grid">
      <div class="brand-card">
        <span class="cc-badge cc-badge-submit">Ötletbeküldés</span>
        <strong style="margin-top:1rem;">Zöldfelület a Vásártér mellett</strong>
        <p>A lakosok kis parkot és padokat javasolnak a vásártér déli oldalán.</p>
        <button class="cc-btn cc-btn-primary" style="width:100%;margin-top:1rem;">Ötlet beküldése</button>
      </div>
      <div class="brand-card">
        <span class="cc-badge cc-badge-voting">Szavazás</span>
        <strong style="margin-top:1rem;">Kerékpártárolók az iskoláknál</strong>
        <p>Fedett kerékpártárolók kihelyezése a nagyobb zamundai iskolák bejáratához.</p>
        <button class="cc-btn cc-btn-primary" style="width:100%;margin-top:1rem;">Szavazok</button>
      </div>
      <div class="brand-card">
        <label style="display:block;margin-bottom:.5rem;font-weight:600;">Ötlet címe</label>
        <input class="cc-input" type="text" placeholder="Pl. Zöldfelület a piac mögött">
        <label style="display:block;margin:.9rem 0 .5rem;font-weight:600;">Leírás</label>
        <textarea class="cc-input" rows="3" placeholder="Írd le a problémát és a javasolt megoldást"></textarea>
      </div>
    </div>
    <h3>Státusz badge-ek</h3>
    <div class="brand-demo-row">
      <span class="cc-badge cc-badge-success">Sikeres mentés</span>
      <span class="cc-badge cc-badge-info">Feldolgozás alatt</span>
      <span class="cc-badge cc-badge-warning">Határidő közeledik</span>
      <span class="cc-badge cc-badge-error">Hiba történt</span>
    </div>
  </section>

  <section id="vizualis-eletciklus" class="brand-section">
    <h2>Életciklus státuszok</h2>
    <p class="brand-desc">A pályázat- és ötletéletciklus színkódolása. A státusz nem hordozható csak színnel: szöveg és ikon is szükséges.</p>
    <div class="brand-demo-row">
      <span class="cc-badge cc-badge-draft">Tervezés alatt</span>
      <span class="cc-badge cc-badge-submit">Ötletbeküldés</span>
      <span class="cc-badge cc-badge-voting">Szavazás</span>
      <span class="cc-badge cc-badge-closed">Lezárt</span>
      <span class="cc-badge cc-badge-eval">Kiértékelés</span>
      <span class="cc-badge cc-badge-built">Megvalósuló</span>
    </div>
  </section>

  <section id="vizualis-tokenek" class="brand-section">
    <h2>Token hierarchia</h2>
    <p class="brand-desc">A primitívek csak a gyökérrétegben jelennek meg, a komponensek szemantikus és komponens tokeneken keresztül kapnak értéket.</p>
    <div class="brand-token-box">
      <div style="color:var(--cc-green-400);">/* 1. Primitívek - csak :root */</div>
      <div>--cc-green-500: #22c55e;</div>
      <div style="color:var(--cc-neutral-500);">↓</div>
      <div style="color:var(--cc-blue-400);">/* 2. Szemantikus tokenek */</div>
      <div>--cc-cta-bg: var(--cc-green-500);</div>
      <div style="color:var(--cc-neutral-500);">↓</div>
      <div style="color:var(--cc-gold-400);">/* 3. Komponens token */</div>
      <div>--cc-button-bg: var(--cc-cta-bg);</div>
      <div style="color:var(--cc-neutral-500);">↓</div>
      <div>.cc-btn { background: var(--cc-button-bg); }</div>
    </div>
  </section>
  <script>
    (function () {
      var families = [
        ['Savanna - elsődleges zöld', 'cc-green', [[50,'#f0fdf4'],[100,'#dcfce7'],[200,'#bbf7d0'],[300,'#86efac'],[400,'#4ade80'],[500,'#22c55e'],[600,'#16a34a'],[700,'#15803d'],[800,'#166534'],[900,'#14532d'],[950,'#052e16']]],
        ['River - hivatalos kék', 'cc-blue', [[50,'#eff6ff'],[100,'#dbeafe'],[200,'#bfdbfe'],[300,'#93c5fd'],[400,'#60a5fa'],[500,'#3b82f6'],[600,'#2563eb'],[700,'#1d4ed8'],[800,'#1e40af'],[900,'#1e3a8a']]],
        ['Sun - arany', 'cc-gold', [[50,'#fefce8'],[100,'#fef9c3'],[200,'#fef08a'],[300,'#fde047'],[400,'#facc15'],[500,'#eab308'],[600,'#ca8a04'],[700,'#a16207'],[800,'#854d0e'],[900,'#713f12']]],
        ['Neutral - meleg szürke', 'cc-neutral', [[0,'#ffffff'],[50,'#fafaf9'],[100,'#f5f5f4'],[200,'#e7e5e4'],[300,'#d6d3d1'],[400,'#a8a29e'],[500,'#78716c'],[600,'#57534e'],[700,'#44403c'],[800,'#292524'],[900,'#1c1917'],[950,'#0c0a09']]],
        ['Earth - földszín', 'cc-earth', [[50,'#fdf8f0'],[100,'#f5e6d0'],[200,'#e8d0a8'],[300,'#d4b078'],[400,'#c09050'],[500,'#a87830'],[600,'#8a6020'],[700,'#6d4c18'],[800,'#503810'],[900,'#3a2808']]]
      ];
      var target = document.getElementById('brand-palette-render');
      if (!target) return;
      families.forEach(function (family) {
        var wrapper = document.createElement('div');
        wrapper.className = 'brand-palette-family';
        var title = document.createElement('div');
        title.className = 'brand-family-name';
        title.textContent = family[0];
        var row = document.createElement('div');
        row.className = 'brand-palette-row';
        family[2].forEach(function (shade) {
          var swatch = document.createElement('div');
          swatch.className = 'brand-swatch';
          swatch.innerHTML = '<div class="brand-swatch-color" style="background:var(--' + family[1] + '-' + shade[0] + ');"></div><span class="brand-swatch-label">' + shade[0] + '</span><span class="brand-swatch-value">' + shade[1] + '</span>';
          row.appendChild(swatch);
        });
        wrapper.appendChild(title);
        wrapper.appendChild(row);
        target.appendChild(wrapper);
      });
    })();
  </script>
</div>

---

## 1. Alapelvek

A Community Choice vizuális identitása négy pilléren nyugszik. Ezek nem marketing szlogenek – minden szín-, tipográfiai- és layout-döntés ezen elvek felé mutasson.

| # | Elv | Mit jelent vizuálisan |
| --- | --- | --- |
| 1 | Közösség és demokrácia | Kerek, összefogó formák; meleg színek; nem hagyja ki a gyengébb kapcsolatú lakost sem |
| 2 | Bizalom és integritás | Nyugodt, stabil színek; semmi villódzás, semmi trükk; adat és szavazat látható |
| 3 | Modern digitális állam | Tiszta rács, modern sans-serif, takarékos whitespace – nem palota, de nem is startup |
| 4 | Nyitottság és befogadás | Nagy kattintási felületek, magas kontraszt, olvasható méretek – kor és képesség független |

### Anti-elvek (tiloslista)

- ❌ Neon, szaturált cián/magenta, „SaaS gradient" háttér
- ❌ Szürke tech-stílus, „dark mode only" atmoszféra
- ❌ Játékos, gyermekded illusztrációk vagy maskotok
- ❌ Nagy háttérképek, parallax, dekoratív animáció
- ❌ Kétharmad képernyő elfedése modal/overlay által

---

## 2. Színrendszer

### 2.1. Primitívek (palette)

A paletta szigorúan limitált: 5 hue család, összesen 25 árnyalat. Minden `--cc-` (Community Choice) névtér alá tartozik.

| Család | Token | Érték | Megjegyzés |
| --- | --- | --- | --- |
| **Savanna (elsődleges zöld)** | `--cc-green-50` | `#f0fdf4` | világos háttér |
| | `--cc-green-100` | `#dcfce7` | kártya kiemelés |
| | `--cc-green-200` | `#bbf7d0` | hover háttér |
| | `--cc-green-300` | `#86efac` | — |
| | `--cc-green-400` | `#4ade80` | — |
| | `--cc-green-500` | `#22c55e` | ⬛ elsődleges gomb |
| | `--cc-green-600` | `#16a34a` | ⬛ elsődleges gomb hover |
| | `--cc-green-700` | `#15803d` | ⬛ elsődleges gomb active |
| | `--cc-green-800` | `#166534` | sötét szöveg zöldön |
| | `--cc-green-900` | `#14532d` | — |
| **Savanna Dark** | `--cc-green-950` | `#052e16` | legsötétebb |
| **River (hivatalos kék)** | `--cc-blue-50` | `#eff6ff` | világos háttér |
| | `--cc-blue-100` | `#dbeafe` | info sáv |
| | `--cc-blue-200` | `#bfdbfe` | — |
| | `--cc-blue-300` | `#93c5fd` | — |
| | `--cc-blue-400` | `#60a5fa` | — |
| | `--cc-blue-500` | `#3b82f6` | ⬛ link, másodlagos CTA |
| | `--cc-blue-600` | `#2563eb` | ⬛ link hover |
| | `--cc-blue-700` | `#1d4ed8` | — |
| | `--cc-blue-800` | `#1e40af` | — |
| | `--cc-blue-900` | `#1e3a8a` | — |
| **Sun (arany)** | `--cc-gold-50` | `#fefce8` | világos háttér |
| | `--cc-gold-100` | `#fef9c3` | banner/sáv |
| | `--cc-gold-200` | `#fef08a` | — |
| | `--cc-gold-300` | `#fde047` | — |
| | `--cc-gold-400` | `#facc15` | ⬛ akcent, badge |
| | `--cc-gold-500` | `#eab308` | ⬛ badge sötétebb |
| | `--cc-gold-600` | `#ca8a04` | — |
| | `--cc-gold-700` | `#a16207` | — |
| | `--cc-gold-800` | `#854d0e` | — |
| | `--cc-gold-900` | `#713f12` | — |
| **Neutral (meleg szürke)** | `--cc-neutral-0` | `#ffffff` | fehér felület |
| | `--cc-neutral-50` | `#fafaf9` | fő háttér |
| | `--cc-neutral-100` | `#f5f5f4` | kártya háttér |
| | `--cc-neutral-200` | `#e7e5e4` | határoló |
| | `--cc-neutral-300` | `#d6d3d1` | — |
| | `--cc-neutral-400` | `#a8a29e` | placeholder |
| | `--cc-neutral-500` | `#78716c` | — |
| | `--cc-neutral-600` | `#57534e` | másodlagos szöveg |
| | `--cc-neutral-700` | `#44403c` | — |
| | `--cc-neutral-800` | `#292524` | — |
| | `--cc-neutral-900` | `#1c1917` | elsődleges szöveg |
| | `--cc-neutral-950` | `#0c0a09` | legsötétebb |
| **Earth (földszín)** | `--cc-earth-50` | `#fdf8f0` | világos háttér |
| | `--cc-earth-100` | `#f5e6d0` | — |
| | `--cc-earth-200` | `#e8d0a8` | — |
| | `--cc-earth-300` | `#d4b078` | — |
| | `--cc-earth-400` | `#c09050` | — |
| | `--cc-earth-500` | `#a87830` | ⬛ határoló, divíder |
| | `--cc-earth-600` | `#8a6020` | — |
| | `--cc-earth-700` | `#6d4c18` | — |
| | `--cc-earth-800` | `#503810` | — |
| | `--cc-earth-900` | `#3a2808` | — |

### 2.2. Szemantikus tokenek (light mode)

A primitíveket **soha** nem használjuk közvetlenül komponensben. Ezeket a szemantikus tokenek kötik össze a felületi szereppel.

```css
:root {
  /* ── Szöveg ── */
  --cc-text-primary:       var(--cc-neutral-900);
  --cc-text-secondary:     var(--cc-neutral-600);
  --cc-text-muted:         var(--cc-neutral-400);
  --cc-text-on-primary:   var(--cc-neutral-0);   /* zöld gombon */
  --cc-text-link:          var(--cc-blue-600);
  --cc-text-link-hover:    var(--cc-blue-700);

  /* ── Felületek ── */
  --cc-surface-page:      var(--cc-neutral-50);
  --cc-surface-card:      var(--cc-neutral-0);
  --cc-surface-card-alt:  var(--cc-neutral-100);
  --cc-surface-elevated:  var(--cc-neutral-0);     /* modals, dropdowns */

  /* ── Határolók ── */
  --cc-border-default:    var(--cc-neutral-200);
  --cc-border-strong:     var(--cc-neutral-300);
  --cc-border-accent:     var(--cc-earth-500);

  /* ── Elsődleges (CTA) ── */
  --cc-cta-bg:            var(--cc-green-500);
  --cc-cta-bg-hover:      var(--cc-green-600);
  --cc-cta-bg-active:     var(--cc-green-700);
  --cc-cta-text:          var(--cc-neutral-0);

  /* ── Másodlagos ── */
  --cc-secondary-bg:      var(--cc-blue-500);
  --cc-secondary-bg-hover:var(--cc-blue-600);
  --cc-secondary-text:    var(--cc-neutral-0);

  /* ── Státusz ── */
  --cc-status-success-bg:   var(--cc-green-100);
  --cc-status-success-text: var(--cc-green-800);
  --cc-status-info-bg:      var(--cc-blue-100);
  --cc-status-info-text:    var(--cc-blue-800);
  --cc-status-warning-bg:   var(--cc-gold-100);
  --cc-status-warning-text: var(--cc-gold-800);
  --cc-status-error-bg:     #fef2f2;               /* red-50 */
  --cc-status-error-text:   #991b1b;               /* red-800 */
  --cc-status-error-border: #fca5a5;               /* red-300 */

  /* ── Akcent ── */
  --cc-accent-gold:    var(--cc-gold-400);
  --cc-accent-earth:   var(--cc-earth-500);

  /* ── Fókusz (a11y) ── */
  --cc-focus-ring:    0 0 0 2px var(--cc-neutral-0), 0 0 0 4px var(--cc-blue-500);
}
```

### 2.3. Színhasználati szabályok

| Szabály | Indoklás |
| --- | --- |
| Egy képernyőn legfeljebb **2 hue család** színhangsúly (zöld + kék, vagy zöld + arany) | Vizuális zaj csökkentése, hivatalos hatás |
| `--cc-green-*` az **egyetlen** CTA szín; soha nem használjuk figyelmeztetésre | A zöld = szavazás/beküldés pozitív visszajelzés |
| A `--cc-gold-*` csak badge, kitüntetés, sztátuszlő hangsúlyozásra | Nem gomb, nem link |
| Neutral + Earth színek a **többségi** felületen; Savanna/River csak akcent | Takarékos, hivatalos karakter |
| Ha `--cc-status-error-*` jelenik meg, annak **mindig** szöveges magyarázata van | A szín önmagában nem közöl okot |

---

## 3. Tipográfia

### 3.1. Betűtípusok

| Szerep | Család | Betűkészlet | Súlyok | Indoklás |
| --- | --- | --- | --- | --- |
| **Fő (body)** | Inter | Google Fonts / self-hosted | 400, 600 | Széles x-height, magyar ékezetes kivitel, kis fájlméret |
| **Címsor** | Inter | — | 700, 800 | Családon belüli kontraszt elegendő |
| **Monospace** | JetBrains Mono | Google Fonts / self-hosted | 400 | Azonosítók, kód, sorszámok |

> **Font subsetting kötelező.** Csak a latin-ext + magyar szükséges glyph-ek töltődjenek. `unicode-range` és `font-display: swap` használata kötelező.

### 3.2. Skála

A skála **1.25 major third** arányú, de a gyakorlatban csak az alábbi lépések élnek:

| Token | Érték | rem (16px alap) | Használat |
| --- | --- | --- | --- |
| `--cc-text-xs` | `12px` | `0.75rem` | caption, badge, timestamp |
| `--cc-text-sm` | `14px` | `0.875rem` | másodlagos szöveg, táblázat cella |
| `--cc-text-base` | `16px` | `1rem` | bekezdés, űrlap mező |
| `--cc-text-lg` | `18px` | `1.125rem` | kártya cím, kiemelt bekezdés |
| `--cc-text-xl` | `20px` | `1.25rem` | szekció alcím |
| `--cc-text-2xl` | `24px` | `1.5rem` | oldalalcím |
| `--cc-text-3xl` | `30px` | `1.875rem` | főcím |
| `--cc-text-4xl` | `36px` | `2.25rem` | hero cím |

```css
:root {
  --cc-font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --cc-font-mono: 'JetBrains Mono', ui-monospace, monospace;

  --cc-leading-tight:  1.25;
  --cc-leading-normal: 1.5;
  --cc-leading-relaxed:1.625;

  --cc-weight-regular: 400;
  --cc-weight-semibold:600;
  --cc-weight-bold:    700;
  --cc-weight-extrabold:800;
}
```

### 3.3. Tipográfiai szabályok

| Szabály | Részlet |
| --- | --- |
| Bekezdés | `--cc-text-base`, `--cc-weight-regular`, `--cc-leading-normal` |
| Címsor | H1 = `--cc-text-4xl`/`extrabold`, H2 = `--cc-text-3xl`/`bold`, H3 = `--cc-text-2xl`/`bold`, H4 = `--cc-text-xl`/`semibold` |
| Szöveges gomb | `--cc-text-sm`, `--cc-weight-semibold`, `uppercase`, `0.05em` tracking |
| Legalsó sor | `--cc-text-xs`, `--cc-text-muted` szín |
| Sorhossz | max `65ch` olvasható bekezdésnél |
| **Soha** | italic a címsorban, vagy `font-weight: 300` (light) bármely szövegen |

---

## 4. Térköz és rács

### 4.1. Térköz skála

4px alap, 2× skála a `--cc-space-128`-ig:

| Token | Érték |
| --- | --- |
| `--cc-space-1` | `4px` |
| `--cc-space-2` | `8px` |
| `--cc-space-3` | `12px` |
| `--cc-space-4` | `16px` |
| `--cc-space-5` | `20px` |
| `--cc-space-6` | `24px` |
| `--cc-space-8` | `32px` |
| `--cc-space-10` | `40px` |
| `--cc-space-12` | `48px` |
| `--cc-space-16` | `64px` |
| `--cc-space-20` | `80px` |
| `--cc-space-24` | `96px` |

```css
:root {
  --cc-space-1:  4px;
  --cc-space-2:  8px;
  --cc-space-3:  12px;
  --cc-space-4:  16px;
  --cc-space-5:  20px;
  --cc-space-6:  24px;
  --cc-space-8:  32px;
  --cc-space-10: 40px;
  --cc-space-12: 48px;
  --cc-space-16: 64px;
  --cc-space-20: 80px;
  --cc-space-24: 96px;
}
```

### 4.2. Rács

| Paraméter | Érték |
| --- | --- |
| Oszlopok | 12 |
| Maximális tartalom | `1200px` |
| Gutters | `--cc-space-6` (24px) |
| Oldalmargó | `--cc-space-4` (16px mobil), `--cc-space-8` (32px asztali) |
| Breakpointok | `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1200px` |

---

## 5. Lekerekítés és árnyék

### 5.1. Lekerekítés

| Token | Érték | Használat |
| --- | --- | --- |
| `--cc-radius-none` | `0` | — |
| `--cc-radius-sm` | `4px` | input, badge |
| `--cc-radius-md` | `8px` | gomb, kártya belső elem |
| `--cc-radius-lg` | `12px` | kártya, modal |
| `--cc-radius-xl` | `16px` | hero kártya |
| `--cc-radius-full` | `9999px` | pill, avatar |

> **Szabály:** A lekerekítés konzisztens marad a teljes rendszerben. Ha egy gomb `--cc-radius-md`, akkor minden gomb `--cc-radius-md`. Keverés tilos.

### 5.2. Árnyék

| Token | Érték | Használat |
| --- | --- | --- |
| `--cc-shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | kártya alap |
| `--cc-shadow-sm` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | gomb hover |
| `--cc-shadow-md` | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)` | dropdown |
| `--cc-shadow-lg` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` | modal |

> **Szabály:** Felületenként legfeljebb egy árnyékszint. Soha nem alkalmazunk `shadow-lg`-t és `shadow-sm`-t ugyanazon a komponensen.

---

## 6. Ikonográfia

| Paraméter | Érték |
| --- | --- |
| Stílus | Vonalas (outlined), 1.5px stroke |
| Rács | 24 × 24 px |
| Forrásajánlás | Lucide Icons (MIT, futas-kompatibilis) |
| Formátum | SVG inline vagy sprite |
| Szín | `currentColor` – az ikon színe örökli a szülő `color` értékét |

### Kulcsikonok

| Funkció | Ikon | Lucide azonosító |
| --- | --- | --- |
| Szavazat / pip | `check-circle` | `circle-check` |
| Ötlet | izzó | `lightbulb` |
| Pályázat | zászló | `flag` |
| Közösség | emberek | `users` |
| Lakcím / hely | térképjel | `map-pin` |
| Média / fotó | kamera | `camera` |
| Értesítés | harang | `bell` |
| Admin / fogaskerék | `settings` | `settings` |
| Keresés | nagyító | `search` |
| Vissza / nyíl | balra nyíl | `arrow-left` |

---

## 7. Státusz-színek leképezés

A pályázat- és ötletéletciklus színkódolása:

| Állapot | Háttér | Szöveg | Ikon |
| --- | --- | --- | --- |
| Tervezés alatt | `--cc-neutral-100` | `--cc-neutral-600` | `pencil` |
| Ötletbeküldési szakasz | `--cc-green-100` | `--cc-green-800` | `lightbulb` |
| Szavazási szakasz | `--cc-blue-100` | `--cc-blue-800` | `circle-check` |
| Lezárt | `--cc-neutral-200` | `--cc-neutral-700` | `lock` |
| Kiértékelés alatt | `--cc-gold-100` | `--cc-gold-800` | `search` |
| Megvalósuló | `--cc-green-200` | `--cc-green-900` | `check-circle-2` |

---

## 8. Logo rendszer

| Változat | Elrendezés | Felhasználás |
| --- | --- | --- |
| **Horizontális** | Szimbólum + „Community Choice" jobbra | Fejléc, e-mail aláírás |
| **Vertikális** | Szimbólum felett, „Community Choice" alatta | Kártya, mobil fejléc, nyomtatott anyag |
| **Csak szimbólum** | Ikonográfia önállóan | Favicon, app ikon, avatar |
| **Kizárólag szöveg** | „Community Choice" tipográfiai logó | Footer, dokumentum fejléc |

### Logo safe zone

- A logót körülvevő szabad terület mindkét irányban **minimum az ikon magasságának 50%-a**.
- A logó soha nem jelenik meg 24px-nél kisebb magasságban.

---

## 9. Hozzáférhetőség (WCAG 2.1 AA)

| Szabály | Küszöb |
| --- | --- |
| Normál szöveg kontraszt | ≥ 4.5:1 |
| Nagy szöveg (≥18px bold / ≥24px) kontraszt | ≥ 3:1 |
| Interaktív elem kontraszt | ≥ 3:1 a szomszédos felülethez |
| Fókuszjel | `--cc-focus-ring` minden fókuszálható elemben |
| Érintési felület | minimum 44 × 44 px |
| Színfüg függetlenség | státuszinformáció nem hordozható csak színnel |

> **Ellenőrzendő párok:** `--cc-cta-text` on `--cc-cta-bg` (fehér zöld-500-ön) ≈ 4.6:1 ✓; `--cc-text-secondary` on `--cc-surface-page` ≈ 5.7:1 ✓

---

## 10. Sávszélesség-takarékos követelmények

| Elvárás | Megvalósítás |
| --- | --- |
| Betűtípus teljes méret | ≤ 100 KB / súly (WOFF2, latin-ext subset) |
| Betűtípus betöltés | `font-display: swap` + `preload` |
| Ikon betöltés | SVG sprite vagy inline SVG, ≤ 2 KB / ikon |
| CSS teljes méret | ≤ 30 KB (gzip) indításkor |
| Dekoratív kép | Tilos. Csak funkcionális illusztráció, WebP, lazy |
| Animáció | Csak `prefers-reduced-motion` biztonságos micro-interakció (gomb-nyomás, focus ring) |

---

## 11. Token-használati hierarchia

```
Primitívek (--cc-green-500, --cc-neutral-200, …)
    ↘
Szemantikusok (--cc-cta-bg, --cc-text-primary, …)
    ↘
Komponens tokenek (--cc-button-bg, --cc-card-border, …)
    ↘
Komponens CSS (.cc-button { background: var(--cc-button-bg) })
```

- **Primitíveket csak** a `:root` réteg és a szemantikus definíciók használják.
- **Szemantikus tokeneket** komponens tokenek és layoutok használják.
- **Komponens tokeneket** csak a komponens saját CSS-je használja.
- **Hardcoded érték** (pl. `#22c55e` közvetlenül egy komponensben) **tilos**.

---

## 12. Starlight korlátok – mi NEM lehetséges standard tokenekkel

A dokumentációs oldal Astro Starlight-ra épül. A következő brand-spec követelményeket **nem** lehet megvalósítani kizárólag a Starlight `--sl-*`_token-rendszerével. Ezekhez egyedi CSS felülbírálás vagy komponens-fejlesztés szükséges.

| # | Brand-spec követelmény | Starlight korlát | Lehetéges megoldás |
| --- | --- | --- | --- |
| 1 | **Link szín = kék** (`--cc-text-link: --cc-blue-600`) | Starlight linkek és aktív navigáció egyetlen `--sl-color-accent` tokenre támaszkodik. Nincs külön link-token. | Egyedi CSS: `a { color: var(--cc-blue-600); }` a tartalomban, de így a nav-aktiválás is kék marad, vagy szelektív override szükséges. |
| 2 | **Életciklus státusz badge-ek** (Tervezés, Beküldés, Szavazás, stb.) | Starlight-nak nincsenek státusz-badge tokenek vagy komponensei. | Egyedi MDX komponens vagy inline CSS osztály. |
| 3 | **Lekerekítés skála** (`--cc-radius-*`) | Starlight nem tesz közzé border-radius tokeneket; komponensek hardcoded értékeket használnak. | Egyedi CSS override komponensenként. |
| 4 | **Térköz skála** (`--cc-space-*`) | Starlight nem tesz közzé spacing tokeneket CSS custom property-ként. | Egyedi CSS; a Starlight layoutot nem érdemes átírni. |
| 5 | **Tipográfiai skála felülbírálás** | A `--sl-text-*` tokenek módosíthatók, de a Starlight UI (sidebar, nav, footer) ezekre épül – módosítás kitörhet a vizuális ritmust. | Csak a tartalmi `--sl-text-h*` értékek módosítása javasolt, az UI-érintőket nem. |
| 6 | **Árnyék skála** (`--cc-shadow-*`) | A `--sl-shadow-*` tokenek felülbírálhatók, de a brand-spec 4 szintje nem feleltethető egyértelműen a Starlight 3 szintjének. | Részleges override; a különbség minimális. |
| 7 | **Lila aside szín** | A brand palettában **nincs lila**. Starlight a „note" asidehoz lilát használ. | Megtartva kompatibilitásból; dokumentálva, hogy a lila nem része a brand-palettának. |
| 8 | **Narancs → arany leképezés** | A brand-spec „Sun" családja arany, narancs nem szerepel. Starlight a „caution" aside-hoz narancsot használ. | Gold család mapped a narancs aside tokenekre; színárnyalat eltérés elfogadható. |
| 9 | **Fókusz-jel stílus** | A brand-spec `--cc-focus-ring` (box-shadow alapú) specifikálva. Starlight `outline`-ot használ fókuszjelzésre. | Egyedi CSS `:focus-visible` override szükséges a box-shadow mintához. |
| 10 | **Dark mode accent kontraszt** | Green-600 (`#16a34a`) csak 3.30:1 fehérön → nem AA normál szövegre. | Light mode accent = green-700 (`#15803d`, 5.02:1 ✅). Ez sötétebb, mint a brand-spec green-500/green-600 CTA ajánlás, de WCAG megfelelőséget biztosít. |

### Accent szín kompromisszum

A brand-spec a CTA gombokhoz `--cc-green-500` (`#22c55e`) és `--cc-green-600` (`#16a34a`) értékeket javasolja. Ezek a Starlight **dokumentációs oldal** kontextusában nem felelnek meg a WCAG AA kontrasztkövetelménynek fehér háttéren:

| Szín | Kontraszt fehérön | WCAG normál szöveg |
| --- | --- | --- |
| `#22c55e` (green-500) | 2.28:1 | ❌ Sikertelen |
| `#16a34a` (green-600) | 3.30:1 | ❌ Csak nagy szöveg (AA 18px+ bold) |
| `#15803d` (green-700) | 5.02:1 | ✅ AA normál szöveg |

**Döntés:** A Starlight téma accent színe light mode-ban `#15803d` (green-700), dark mode-ban `#4ade80` (green-400). Ez biztosítja a WCAG AA megfelelést mindkét módban. A gomb és CTA színek az alkalmazásban továbbra is használhatják a green-500/green-600 értékeket, ahol a gomb szövege fehér (invertált) színű.


<!-- END SOURCE: docs/src/content/docs/brand-spec.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-001.md -->

# Forrás: docs/src/content/docs/adrs/adr-001.md

---
title: "ADR-001"
description: "ADR-001: Hibrid architektúra"
---

# Hibrid architektúra
- Státusz: Aktív

**In the context of**
- a teljes rendszer architektúrájának megtervezésekor, ahol az egyes komponensek eltérő működési, skálázhatósági és konzisztencia-igényekkel rendelkeznek

**Facing the need for**
- olyan architektúrális megközelítésre, amely egyszerre képes kiszolgálni az erős adatintegritást és szoros konzisztenciát igénylő szolgáltatásokat, valamint az aszinkron, laza csatolású kommunikációt igénylő komponenseket — egyetlen, egységes stílussal ez nem megvalósítható

**We decided for**
- hibrid architektúra alkalmazása, amely ötvözi a [Service-Based Architecture-t (SBA)](../adr-002/) és az [Event-Driven Architecture-t (EDA)](../adr-003/): az SBA a szavazási, kampány- és adminisztrációs szolgáltatásokat fedi le, az EDA pedig az értesítési, analitikai és audit komponenseket

**Achieving**
- minden komponens pontosan azt az architektúrális stílust kapja, amely a saját igényeit a legjobban kiszolgálja (pl. a Szavazási szolgáltatás az SBA erős konzisztencia-garanciáival, az Auditnaplózó szolgáltatás az EDA aszinkron eseménykezelésével)
- a szinkron, adatintegritást igénylő folyamatok az SBA erős konzisztencia-garanciái mögé kerülnek
- az eseményvezérelt folyamatok az EDA révén lazán csatolt, könnyen bővíthető kommunikációs csatornákon futnak

**Accepting that**
- a két stílus együttes kezelése növeli az architektúrális döntések számát és komplexitását
- különböző képességkészletek és esetlegesen különböző csapatok szükségesek az SBA és az EDA területek karbantartásához
- eltérő technológiai stackek alkalmazása válhat szükségessé a különböző architektúrális szegmensekben
- a rendszer egészének megértéséhez és hibakeresési folyamataihoz magasabb szintű rendszerismeretre van szükség


<!-- END SOURCE: docs/src/content/docs/adrs/adr-001.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-002.md -->

# Forrás: docs/src/content/docs/adrs/adr-002.md

---
title: "ADR-002"
description: "ADR-002: Service-Based Architecture"
---

# Service-Based Architecture
- Státusz: Aktív

**In the context of**
- a *Szavazási szolgáltatás* és a *Pályázat- és adminisztrációkezelő szolgáltatás* tervezésekor, ahol a szolgáltatások önállóan futtathatók és skálázhatók, de közös relációs adatmodellen osztoznak

**Facing the need for**
- olyan architektúrára, amely egyszerre biztosítja a célzott skálázhatóságot (szavazási csúcs idején csak a *Szavazási szolgáltatás* példányszámát kell növelni), az erős adatintegritást (megmásíthatatlan szavazatok, tranzakciós határok) és a takarékos üzemeltetést — mikroszolgáltatásokkal mindez indokolatlanul drága és komplex lenne, monolit esetén pedig az egész rendszert kellene replikálni

**We decided for**
- Service-Based Architecture alkalmazása: néhány jól körülhatárolt, önállóan deployolható domain-szolgáltatás, amelyek egyetlen közös PostgreSQL adatbázison osztoznak; ez a stílus lefedi a *Szavazási szolgáltatás* és a *Pályázat- és adminisztrációkezelő szolgáltatás* működését

**Achieving**
- a *Szavazási szolgáltatás* önállóan skálázható szavazási csúcsidőszakban anélkül, hogy a teljes rendszert replikálni kellene — ez megfelel az Elaszticitás és Hatékonyság architektúrális karakterisztikáknak
- a közös adatbázis adatbázis-szintű tranzakciókkal és triggerekkel garantálja a szavazatok megmásíthatatlanságát, elosztott tranzakciók nélkül
- a szavazati integritás (duplikáció kizárása, pszeudonimizált szavazói kulcs, append-only szavazati tranzakciónapló) adatbázis-szintű garanciákkal biztosítható (lásd [ADR-005](../adr-005/))
- a PostgreSQL mint egyetlen írási igazságforrás tudatos szűk keresztmetszet; PgBouncer poololással, kampány szerinti particionálással és limitált szolgáltatáspoolokkal védjük (lásd [ADR-008](../adr-008/))
- az üzemeltetési komplexitás alacsony marad: nincs szolgáltatásháló, nincs komplex szolgáltatások közötti autentikáció, a deployment egységek száma minimális — ez teljesíti a Takarékosság ASR-t

**Accepting that**
- a közös adatbázis szorosabb adatkapcsolást jelent a szolgáltatások között: sémaváltozás esetén több szolgáltatást érinthet a módosítás
- a deployment önállósága korlátozott — adatbázis-migrációknál koordináció szükséges a szolgáltatások között
- a hibaizoláció gyengébb, mint mikroszolgáltatásoknál: egy adatbázis-szintű probléma egyszerre több szolgáltatást érinthet
- a skálázhatóság szemcsézettsége durvább, mint mikroszolgáltatásoknál — szolgáltatásszinten, nem komponensszinten skálázunk
- a PostgreSQL írási kapacitása nem skálázódik lineárisan az alkalmazáspéldányok számával; ezt terhelésvédelemmel kezeljük, nem tüntetjük el


<!-- END SOURCE: docs/src/content/docs/adrs/adr-002.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-003.md -->

# Forrás: docs/src/content/docs/adrs/adr-003.md

---
title: "ADR-003"
description: "ADR-003: Event-Driven Architecture"
---

# Event-Driven Architecture
- Státusz: Aktív

**In the context of**
- az *Értesítési szolgáltatás*, az *Auditnaplózó szolgáltatás* és a médiafeldolgozási pipeline tervezésekor, ahol ezek a komponensek domain eseményekre reagálnak, de nem léphetnek be a szavazási kérések szinkron feldolgozási útjába

**Facing the need for**
- olyan kommunikációs mintára, amellyel a *Szavazási szolgáltatás* és a *Pályázat- és adminisztrációkezelő szolgáltatás* képes domain eseményeket kibocsátani anélkül, hogy tudnia kellene, ki és mikor fogyasztja azokat — a szoros runtime csatolás auditnaplózásnál és értesítéseknél elfogadhatatlan, mert közvetlen hatással lenne a szavazási kérések kiszolgálási idejére

**We decided for**
- Event-Driven Architecture alkalmazása tartós, visszajátszható event streamekkel ([ADR-004](../adr-004/)): a *Pályázat- és adminisztrációkezelő szolgáltatás* domain eseményeket bocsát ki kampány- és médiafeldolgozási streamekbe, a *Szavazási szolgáltatás* pedig közvetlen broker-publikálás helyett PostgreSQL tranzakcióban rögzített outbox eseményt ír ([ADR-006](../adr-006/))
- a szavazási audit/integrációs streambe az outbox események outbox relay worker segítségével kerülnek be, így a szavazati tranzakció és az eseménykibocsátás nem válik alkalmazásszintű dual-write problémává
- az *Értesítési szolgáltatás*, az *Auditnaplózó szolgáltatás* és a *Médiafeldolgozó háttérfolyamat* egymástól független fogyasztóként olvassa a releváns streameket

**Achieving**
- az *Értesítési szolgáltatás* és az *Auditnaplózó szolgáltatás* meghibásodása vagy lassulása nem gyűrűzik vissza a szavazási folyamatba — a felhasználói kérések kiszolgálási ideje nem függhet az auditnaplózás vagy az értesítés-küldés sebességétől
- a szavazat elsődleges igazságforrása továbbra is a PostgreSQL tranzakciós tároló; az event stream audit és integrációs célú
- az *Auditnaplózó szolgáltatás* fogyasztói pozíciója révén visszajátszhatja az eseménytörténetet újraindulás vagy adatvesztés esetén, ami biztosítja a napló teljességét
- új fogyasztók (pl. egy jövőbeli Analitikai szolgáltatás) a meglévő producerek módosítása nélkül csatlakozhatnak az eseményfolyamhoz
- a médiafeldolgozási pipeline teljesen leválik a webes szálakról: videófeltöltés után csak objektumtárbeli hivatkozás kerül a médiafeldolgozási streambe, a tömörítés aszinkron, a *Médiafeldolgozó háttérfolyamatban* fut

**Accepting that**
- az aszinkron feldolgozás eventual consistency-t jelent: az auditnaplóba kerülés nem azonnali, néhány másodperces késéssel számolni kell
- az elosztott eseményfolyam hibakeresése és nyomkövetése (distributed tracing) összetettebb, mint egy szinkron hívássorozaté
- az esemény-séma evolúciója körültekintést igényel: egy már publikált eseménytípus mezőinek eltávolítása visszafelé inkompatibilis változtatás, ami a fogyasztókat is érinti
- a tartós event stream technológiai profilja üzemeltetési döntés: takarékos induló profilként NATS JetStream, országos/nagy replay igénynél Kafka alkalmazható (lásd [ADR-004](../adr-004/))


<!-- END SOURCE: docs/src/content/docs/adrs/adr-003.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-004.md -->

# Forrás: docs/src/content/docs/adrs/adr-004.md

---
title: "ADR-004"
description: "ADR-004: Fázisos event stream és üzenetbroker döntés"
---

# Fázisos event stream és üzenetbroker döntés
- Státusz: Aktív

**In the context of**
- az aszinkron kommunikáció tervezésekor, ahol a médiafeldolgozás (*Médiafeldolgozó háttérfolyamat*), az auditnaplózás (*Auditnaplózó szolgáltatás*) és az értesítések (*Értesítési szolgáltatás*) logikai streameken keresztül kapcsolódnak a producer szolgáltatásokhoz
- a ZDR program takarékos és klímabarát működést vár el, miközben a szavazási auditfolyam tartós megőrzése és visszajátszhatósága architekturális követelmény

**Facing the need for**
- olyan event stream megoldásra, amely kezeli a média-, szavazási és kampányeseményeket, támogat több független fogyasztót, visszajátszható eseménytörténetet biztosít, de nem kényszerít folyamatosan magas erőforrásigényű infrastruktúrát egy szakaszos terhelésű önkormányzati rendszerre

**We decided for**
- fázisos broker-döntés:
  - **Induló, takarékos profil:** NATS JetStream alkalmazása tartós streamekhez, at-least-once kézbesítéshez, replay képességhez és alacsonyabb üzemeltetési lábnyomhoz.
  - **Országos/nagy audit-replay profil:** Apache Kafka alkalmazása akkor, ha a forgalmi mérések, retention igény, consumer group szám vagy szervezeti standard miatt a Kafka többletkomplexitása indokolt.
  - **Szavazási auditfolyam:** az induló profilban transactional outbox + saját outbox relay worker publikál NATS JetStreambe ([ADR-006](../adr-006/)); Kafka csak későbbi skálázási vagy szervezeti-standard profil. A Szavazási szolgáltatás nem végez közvetlen dual-write publikálást.
- a mérlegelés során öt jelölt merült fel:
  - **RabbitMQ**: hagyományos, push-alapú ("okos bróker, buta fogyasztó") üzenetsor; a kézbesítés után törli az üzeneteket, így a visszajátszható, hosszabb ideig megőrzött eseménytörténet fenntartása fan-out mellett körülményesebb
  - **Redis Streams**: könnyűsúlyú, log-alapú streaming; a Redis már jelen van a stackben (cache), de a két felhasználási mód keveri a felelősségeket, és tartós, nagy volumenű eseménytárolásra nem optimalizált
  - **pgmq**: PostgreSQL-re épülő üzenetsor; takarékos és egyszerű üzemeltetési jelölt, mert a PostgreSQL amúgy is része a stacknek, de a kritikus szavazási csúcsnál ugyanarra az adatbázisra terhelné az üzenetsort, amely a tranzakciós igazságforrás és az egyediségi garanciák helye is
  - **NATS JetStream**: könnyűsúlyú, tartós stream réteggel rendelkező üzenetplatform; támogatja a visszajátszhatóságot, tartós fogyasztókat és at-least-once kézbesítést, miközben egyszerűbben illeszkedik a szakaszos, takarékos önkormányzati terhelési profilhoz
  - **Apache Kafka**: elosztott, append-only naplóra épülő platform ("buta bróker, okos fogyasztó"); az események tartósan megmaradnak lemezen, a fogyasztók pull-alapon, saját offsettel olvasnak, így több independent consumer group ugyanazt az eseménynaplót olvassa duplikáció nélkül

**Achieving**
- az *Auditnaplózó szolgáltatás* bármikor visszatekerheti az offsetjét és visszajátszhatja az eseménytörténetet, ha újraindul vagy egy új szolgáltatás kerül bevezetésre
- több független fogyasztó (*Értesítési szolgáltatás*, *Auditnaplózó szolgáltatás*, *Médiafeldolgozó háttérfolyamat*) párhuzamosan olvas a releváns streamekből, duplikáció nélkül — az egyik elakadása nem befolyásolja a többit
- az induló profil nem kényszerít Kafka klasztert ott, ahol a szakaszos forgalom és a takarékossági ASR alapján könnyebb tartós stream és saját outbox relay is elég
- országos terítésnél vagy sok független fogyasztónál a Kafka profilra váltás dokumentált, nem ad hoc technológiai csere
- a PostgreSQL megtartható elsődleges tranzakciós adattárnak, miközben az audit/integrációs eseményfolyam külön infrastruktúrán fut; így a média- és értesítési streamek nem terhelik közvetlenül a szavazati tranzakciós adatbázist

**Accepting that**
- két brokerprofil dokumentálása több üzemeltetési döntést jelent, mint egyetlen fix technológia kijelölése
- NATS JetStream és Kafka között eltérnek a fogalmak, kliensek, metrikák és retention beállítások; az alkalmazásnak brokerfüggetlen eseménykontraktusokra kell épülnie
- pgmq továbbra is takarékos alternatíva kisebb háttérmunkákhoz, de a kritikus szavazási auditfolyamnál nem elsődleges, mert a szavazási csúcs terhét visszaterhelné a PostgreSQL-re
- az induló NATS profilhoz saját outbox relay worker tartozik, amely külön fejlesztési és monitorozási felelősség
- Kafka profilban a klaszter üzemeltetése (partíciók, replikációs faktor, KRaft konszenzus mechanizmus) összetettebb és drágább; csak mért igény vagy országos működési követelmény indokolhatja

**References**
- [NATS JetStream documentation](https://docs.nats.io/nats-concepts/jetstream)
- [Apache Kafka documentation](https://kafka.apache.org/documentation/)
- [pgmq documentation](https://pgmq.github.io/pgmq/)


<!-- END SOURCE: docs/src/content/docs/adrs/adr-004.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-005.md -->

# Forrás: docs/src/content/docs/adrs/adr-005.md

---
title: "ADR-005"
description: "ADR-005: Szavazatok integritása és pszeudonimizált tárolása"
---

# Szavazatok integritása és pszeudonimizált tárolása
- Státusz: Aktív

**In the context of**
- a hitelesített, lakcímhez kötött szavazási folyamat tervezésekor, ahol egy felhasználó egy adott ötletre csak egyszer szavazhat, a leadott szavazat nem módosítható és nem törölhető, ugyanakkor a szavazati rekord nem tárolhat nyers személyes azonosítót

**Facing the need for**
- olyan tárolási modellre, amely egyszerre biztosítja a duplikált szavazatok kizárását, a szavazatok megváltoztathatatlanságát és a szavazói személyazonosság védelmét; teljes anonimitás mellett a duplikációellenőrzés nem lenne megbízható, a dinamikus lakcím-ellenőrzés pedig visszaélési lehetőséget biztosítana kampány közbeni költözéssel történő többszörös, körzetek közötti szavazásra

**We decided for**
- PostgreSQL-alapú, csak hozzáfűzhető szavazati tranzakciónapló alkalmazása **pszeudonimizált szavazói kulccsal**: a *Szavazási szolgáltatás* a Zamunda One által biztosított stabil felhasználói azonosítóból, a kampánykontextusból és a rögzített jogosultsági pillanatképből determinisztikus, HMAC-alapú `voter_key` értéket képez
- a jogosultság időbeli alapja a Zamunda One-ból lekérhető lakcím-módosítási dátum/időbélyeg, például `address_updated_at`, és a kampány kezdési időpontja: ha a lakcím módosítása a kampány kezdete utáni, a rendszer nem enged új körzet szerinti jogosultságot létrehozni, hanem a meglévő jogosultsági pillanatképet tekinti irányadónak
- a `campaign_eligibility` tábla megváltoztathatatlan jogosultsági pillanatképet tárol: felhasználóazonosító hash, kampányazonosító, önkormányzati azonosító, lakcím-módosítási dátum/időbélyeg, ha a Zamunda One-ból lekérhető, jogosultsági döntés és snapshot időpont; nyers lakcímet vagy nyers személyes azonosítót nem tárol
- a szavazati tranzakciónapló **nem** tartalmaz nyers személyes azonosítót (pl. `user_id`, név, e-mail, lakcím)
- az „egy felhasználó egy ötletre egyszer” szabályt adatbázis-szintű `UNIQUE` constraint garantálja; particionált szavazati táblánál a partíciós kulcsot is tartalmazó egyediség szükséges, például `UNIQUE(campaign_id, idea_id, voter_key)` ([ADR-008](../adr-008/))
- a szavazati rekordok `UPDATE` és `DELETE` műveletei adatbázis-szinten tiltottak
- az event stream felé kibocsátott események audit és integrációs célúak; a szavazat elsődleges igazságforrása a PostgreSQL tranzakciós tároló marad
- a HMAC művelethez használt kampány-mesterkulcs nem lehet alkalmazás `.env` fájlban vagy CI/CD változóban tárolt statikus secret; dedikált KMS/Vault Transit jellegű kulcskezelés és rövid élettartamú kampánykulcs szükséges ([ADR-007](../adr-007/))

**Considered alternatives**
- **Nyers Zamunda One felhasználói azonosító tárolása:** egyszerűvé tenné a duplikációellenőrzést, de szükségtelenül erős személyesadat-kitettséget okozna, és sértené az adatminimalizálási célt.
- **Teljesen anonim szavazati rekord:** erősen védené a személyazonosságot, de nem adna megbízható technológiai alapot az „egy felhasználó egy ötletre egyszer” szabályhoz, különösen retry és versenyhelyzet esetén.
- **Minden kérésnél aktuális lakcím alapján dönteni:** egyszerűbb lenne, de kampány közbeni átjelentkezéssel új jogosultsági körzetet nyithatna, ezért nem védi az időbeli konzisztenciát.
- **Titkosított nyers azonosító tárolása:** csökkentené a közvetlen olvashatóságot, de a rendszer továbbra is visszafejthető személyes azonosítót őrizne, kulcsszivárgás esetén pedig a teljes szavazati múlt összeköthetővé válna.
- **Salted hash felhasználói azonosítóból:** egyszerűbb, mint a HMAC-alapú kulcsképzés, de a só és a kulcsképzési kontextus kezelése kevésbé választja szét egyértelműen a biztonsági titkot és a kampánykontextust; a HMAC jobban illeszkedik a determinisztikus, titokkal védett pszeudonimizáláshoz.

**Achieving**
- a duplikált szavazatok kizárása versenyhelyzetben és retry esetén is adatbázis-szinten védett
- a kampány közbeni lakcímváltoztatás nem eredményezhet új körzet szerinti második részvételi lehetőséget
- a szavazatok megváltoztathatatlansága technológiai garanciákkal védett
- a szavazati rekordból közvetlenül nem derül ki a szavazó személyazonossága
- az auditálás és értesítés nem lassítja a szavazás szinkron útját (lásd [ADR-003](../adr-003/) és [ADR-004](../adr-004/))

**Accepting that**
- a megoldás nem teljes anonimitást, hanem pszeudonimizálást biztosít
- a Zamunda One lakcím-módosítási dátum/időbélyeg mezőjének megléte, megbízhatósága és időszinkronja autorizációs függőség; ha ez nem lekérhető, ekvivalens hivatalos lakcím-érvényességi adat vagy módosított üzleti szabály szükséges
- a `campaign_eligibility` tábla külön migrációs és adatmegőrzési szabályokat igényel, mert a szavazatok nélkül is bizonyítja a kampány alatti jogosultsági döntést
- a HMAC kulcs kezelése kritikus üzemeltetési felelősség, ezért a kulcskezelés önálló architekturális döntés ([ADR-007](../adr-007/))
- az audit események megbízható publikálása PostgreSQL tranzakcióhoz kötött outbox + relay mintával kötelező ([ADR-006](../adr-006/))


<!-- END SOURCE: docs/src/content/docs/adrs/adr-005.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-006.md -->

# Forrás: docs/src/content/docs/adrs/adr-006.md

---
title: "ADR-006"
description: "ADR-006: Transactional outbox és outbox relay a szavazási auditfolyamhoz"
---

# Transactional outbox és outbox relay a szavazási auditfolyamhoz
- Státusz: Aktív

**In the context of**
- a szavazatleadás rögzítésekor, ahol a PostgreSQL szavazati tranzakciónapló az elsődleges igazságforrás, de az auditnaplózásnak és integrációs fogyasztóknak tartós, visszajátszható event streamből kell dolgozniuk
- a ZDR takarékos üzemeltetési elvárása miatt az induló profilban kerülni kell a nehéz, JVM alapú connector-infrastruktúra kötelező bevezetését, ha ugyanaz az integritási garancia könnyebb komponenssel is megvalósítható

**Facing the need for**
- olyan eseménykibocsátási mintára, amely kizárja a dual-write hibát: nem fordulhat elő, hogy a szavazat bekerül a PostgreSQL-be, de a hozzá tartozó audit/integrációs esemény hálózati hiba, brokerhiba vagy alkalmazás-újraindulás miatt kimarad

**We decided for**
- transactional outbox minta alkalmazása a szavazási auditfolyamhoz
- a *Szavazási szolgáltatás* kizárólag PostgreSQL-be ír: ugyanabban az adatbázis-tranzakcióban rögzíti a szavazati rekordot és az outbox eseményt
- az induló, takarékos profilban egy dedikált *Outbox relay worker* olvassa az outbox táblát PostgreSQL-ből `SELECT ... FOR UPDATE SKIP LOCKED` zárolási stratégiával, majd at-least-once kézbesítéssel publikálja az eseményt NATS JetStreambe
- az outbox relay több példányban futtatható; a `SKIP LOCKED` miatt az egyes példányok egymás munkáját nem blokkolják, a feldolgozott rekordokat pedig státusz, publikálási idő és próbálkozásszám alapján kell lezárni
- a szavazási események fogyasztóinak idempotens feldolgozást kell alkalmazniuk, mert az outbox relay és a stream kézbesítés at-least-once jellegű

**Considered alternatives**
- **Közvetlen broker-publikálás az alkalmazásból:** egyszerűbb, de a PostgreSQL commit és a broker publish között dual-write rés marad.
- **Szinkron auditnaplózó hívás:** erősebb visszajelzést adna, de az audit szolgáltatás hibája közvetlenül lassítaná vagy blokkolná a szavazást.
- **Csak adatbázis audit trigger:** védi a lokális adatbázisnaplót, de nem ad brokerfüggetlen replay/fan-out mechanizmust az értesítési és audit fogyasztóknak.
- **Későbbi Debezium/WAL-CDC profil:** ha országos terhelés, szervezeti standard vagy bizonyított üzemeltetési előny indokolja, az outbox relay kiváltható Debezium-alapú CDC-vel. Ebben az esetben a PostgreSQL publication a partícionált gyökértáblára épüljön `publish_via_partition_root = true` beállítással, hogy az új kampánypartíciók ne igényeljenek connector-újrakonfigurálást.

**Achieving**
- a szavazati rekord és az outbox esemény atomi egységként jön létre
- broker- vagy hálózati hiba esetén az outbox relay később folytathatja a publikálást, mert az outbox esemény már a PostgreSQL-ben van
- az audit és értesítési fogyasztók továbbra sem kerülnek a szavazás szinkron kritikus útjába
- az induló profil megtartja az outbox integritási garanciáját külön connector-platform kötelező üzemeltetése nélkül

**Accepting that**
- saját outbox relay komponens fejlesztése, tesztelése és monitorozása szükséges
- az eseményfogyasztóknak duplikátumtűrőnek kell lenniük
- monitorozni kell az outbox backlogot, a relay késleltetését, a sikertelen publikálási kísérleteket és a poison-message arányt

**References**
- [PostgreSQL SELECT locking clauses](https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE)
- [NATS JetStream documentation](https://docs.nats.io/nats-concepts/jetstream)
- [PostgreSQL CREATE PUBLICATION](https://www.postgresql.org/docs/current/sql-createpublication.html)
- [Debezium Outbox Event Router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)
- [Debezium PostgreSQL connector](https://debezium.io/documentation/reference/stable/connectors/postgresql.html)


<!-- END SOURCE: docs/src/content/docs/adrs/adr-006.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-007.md -->

# Forrás: docs/src/content/docs/adrs/adr-007.md

---
title: "ADR-007"
description: "ADR-007: Kampányhoz kötött rövid élettartamú HMAC kulcsok KMS/Vault alapon"
---

# Kampányhoz kötött rövid élettartamú HMAC kulcsok KMS/Vault alapon
- Státusz: Aktív

**In the context of**
- a pszeudonimizált `voter_key` képzésekor, ahol a determinisztikus HMAC lehetővé teszi a duplikált szavazatok kizárását, de a HMAC kulcs kompromittálódása a szavazati adatok visszakapcsolhatóságát kockáztatná
- szavazási csúcsidőben a másodpercenkénti sok ezer HMAC művelet nem tehető szinkron KMS/Vault hálózati hívássá, mert a kulcskezelő így a szavazási út szűk keresztmetszetévé válna

**Facing the need for**
- olyan kulcskezelési megoldásra, amely nem tárolja a HMAC secretet alkalmazáskonfigurációban, `.env` fájlban vagy CI/CD pipeline változóban, kampányonként korlátozza egy esetleges kulcsszivárgás hatását, és a szavazási kritikus útból kiveszi a hálózati KMS/Vault függést

**We decided for**
- dedikált Key Management Service használata, például HashiCorp Vault Transit vagy kompatibilis KMS, amely a kampány-mesterkulcsokat védi
- a *Szavazási szolgáltatás* podjai induláskor, kampányváltáskor vagy rotációs eseménynél rövid élettartamú, kampányhoz és kulcsverzióhoz kötött operatív HMAC kulcsot kapnak vagy származtatnak HKDF jellegű kulcsszármaztatással
- a `voter_key` HMAC számítása lokálisan, a pod illékony memóriájában lévő rövid élettartamú kulccsal történik; a nyers kampány-mesterkulcs nem kerül az alkalmazáshoz, az operatív kulcs nem írható lemezre, konfigurációba, logba vagy crash dumpba
- minden kampány saját kulcsot vagy kulcsverziót kap; a szavazati rekordban a `key_version`/kulcsazonosító auditálható metaadatként tárolható, nyers személyes azonosító nélkül
- kulcsrotáció új kampányokra kötelező, aktív kampány közben csak incidenskezelési eljárással engedélyezett
- a rövid élettartamú kulcs TTL-je például órás nagyságrendű; a podnak rotációkor átfedő `key_version` kezelést, memóriából törlést és riasztott frissítési hibát kell támogatnia
- a KMS hozzáférést szolgáltatásidentitással, minimális jogosultsággal és auditnaplóval kell védeni; normál szavazatleadáskor a KMS/Vault nem lehet per-request függőség

**Considered alternatives**
- **Statikus `.env` secret:** egyszerű, de a teljes pszeudonimizáció egy konfigurációs szivárgáson múlna.
- **CI/CD secret változó:** jobb, mint a repóban tárolt secret, de továbbra is sok rendszer és napló érintheti.
- **Adatbázisban tárolt kulcs:** a szavazati adatokkal azonos védelmi zónába helyezné a visszakapcsolás kulcsát, ezért nem fogadható el.
- **Per-request Vault Transit HMAC:** erősen auditálható, de szavazási csúcsban minden szavazatot szinkron hálózati és kulcskezelő-híváshoz kötne, ezért kritikus útvonalon nem fogadható el.

**Achieving**
- a HMAC művelet a szavazási útban lokális CPU művelet, ezért a KMS/Vault késleltetése és rendelkezésre állása nem terheli minden szavazatot
- a kampány-mesterkulcs nem kerül alkalmazásmemóriába; az operatív rövid élettartamú kulcs csak rövid ideig él a pod memóriájában
- egy kampány kulcsának kompromittálódása nem teszi automatikusan visszakapcsolhatóvá a teljes történeti szavazati adatbázist
- a kulcskiadás, kulcsverzió és rotáció auditálható, ami illeszkedik a közbizalmi rendszer integritási elvárásaihoz

**Accepting that**
- a KMS/Vault rendelkezésre állása továbbra is kritikus induláskor, kampányváltáskor és rotációkor, de nem minden szavazatleadáskor
- a rövid élettartamú kulcs memóriakezelése, TTL-je, nullázása és crash dump tiltása üzemeltetési és implementációs fegyelmet igényel
- a KMS késleltetésére és hibáira circuit breaker, kontrollált retry stratégia és üzemeltetési riasztás szükséges
- a kulcsrotációs szabályokat dokumentált üzemeltetési eljárásban kell véglegesíteni

**References**
- [HashiCorp Vault Transit secrets engine](https://developer.hashicorp.com/vault/docs/secrets/transit)
- [Vault Transit API](https://developer.hashicorp.com/vault/api-docs/secret/transit)
- [RFC 5869: HKDF](https://www.rfc-editor.org/rfc/rfc5869)


<!-- END SOURCE: docs/src/content/docs/adrs/adr-007.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-008.md -->

# Forrás: docs/src/content/docs/adrs/adr-008.md

---
title: "ADR-008"
description: "ADR-008: PostgreSQL írási út védelme PgBouncerrel és particionálással"
---

# PostgreSQL írási út védelme PgBouncerrel és particionálással
- Státusz: Aktív

**In the context of**
- a kampányzárás előtti szavazási hajrában, ahol a *Szavazási szolgáltatás* horizontálisan skálázható, de a PostgreSQL továbbra is egyetlen elsődleges írási igazságforrás

**Facing the need for**
- olyan adatbázis-hozzáférési és táblaszervezési mintára, amely kontrollálja a kapcsolatfelépítési rohamot, csökkenti a nagy indexekből eredő lock contention kockázatát, és megőrzi az „egy felhasználó egy ötletre egyszer” adatbázis-szintű garanciáját

**We decided for**
- PgBouncer vagy kompatibilis PostgreSQL connection pooler kötelező használata az alkalmazásszolgáltatások és a PostgreSQL között
- a *Szavazási szolgáltatás*, a *Pályázat- és adminisztrációkezelő szolgáltatás*, az audit komponens és az outbox relay külön, limitált pool konfigurációt kap
- a szavazati tranzakciónapló és a `campaign_eligibility` jogosultsági pillanatkép tábla `campaign_id` szerint natívan particionált PostgreSQL tábla legyen
- a duplikációt védő egyediség a partíciós kulcsot is tartalmazza, például `UNIQUE(campaign_id, idea_id, voter_key)`, mert PostgreSQL-ben partícionált táblán a globális egyediség csak így kényszeríthető ki biztonságosan

**Considered alternatives**
- **Csak alkalmazásszintű connection pool:** szükséges, de horizontális skálázásnál nem védi elég jól a PostgreSQL backend connection limitjét.
- **Particionálás nélkül, egy nagy szavazati tábla:** egyszerűbb, de hosszú távon nagyobb indexeket, nehezebb karbantartást és nagyobb csúcsidős contention kockázatot okoz.
- **Teljesen külön adatbázis szavazáshoz:** erősebb izoláció, de a jelenlegi SBA döntéshez képest nagyobb üzemeltetési és migrációs költség.

**Achieving**
- a hirtelen felszaporodó HTTP kérések nem nyitnak aránytalanul sok PostgreSQL kapcsolatot
- aktív kampányok szavazatai kisebb, célzott indexekbe íródnak
- a kampányhoz kötött jogosultsági pillanatképek ugyanazon particionálási logika szerint kezelhetők, mint a szavazati tranzakciónapló
- a kampányzárás utolsó órájában a szavazási út terhelése jobban előrejelezhető és mérhető

**Accepting that**
- PgBouncer transaction pooling mellett kerülni vagy tudatosan kezelni kell a sessionhöz kötött adatbázisfunkciókat
- a particionálás migrációs és karbantartási fegyelmet igényel, például új kampánypartíció létrehozását és archiválási eljárást
- a PostgreSQL továbbra is írási szűk keresztmetszet marad; ez tudatos SBA trade-off, nem teljesen eltüntethető kockázat

**References**
- [PgBouncer documentation](https://www.pgbouncer.org/)
- [PostgreSQL table partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html)
- [PostgreSQL connection settings](https://www.postgresql.org/docs/current/runtime-config-connection.html)


<!-- END SOURCE: docs/src/content/docs/adrs/adr-008.md -->

---

<!-- BEGIN SOURCE: docs/src/content/docs/adrs/adr-009.md -->

# Forrás: docs/src/content/docs/adrs/adr-009.md

---
title: "ADR-009"
description: "ADR-009: Dedikált Ingress/API Gateway a NestJS BFF előtt"
---

# Dedikált Ingress/API Gateway a NestJS BFF előtt
- Státusz: Aktív

**In the context of**
- a webes kliensek publikus internet felől érik el a Community Choice backend API-kat, miközben a NestJS szolgáltatások üzleti logikára, jogosultsági döntésekre és BFF-szerű API-összeállításra optimalizáltak
- a szavazási időszakban a peremvédelmi feladatok, például TLS termináció, durva rate limiting és rosszindulatú forgalom szűrése nem terhelheti közvetlenül a Node.js event loopot

**Facing the need for**
- olyan peremrétegre, amely implementációfüggetlenül leválasztja a nyers internetes forgalom kezelését a NestJS BFF és domain szolgáltatások üzleti felelősségeiről

**We decided for**
- dedikált Ingress/API Gateway réteg bevezetése a webes kliensek és a NestJS BFF/domain API-k elé
- a gateway technológiai döntése implementációfüggetlen: önmenedzselt környezetben Traefik vagy Nginx, erősebb plugin-igénynél Kong, felhős környezetben pedig a szolgáltató natív API gateway / load balancer megoldása alkalmazható
- a gateway felelőssége a TLS termináció, HTTP routing, request size limitek, durva IP- és route-alapú rate limiting, alapvető DDoS/abuse szűrés, biztonsági fejlécek, valamint a JWT tokenek formai/JWKS-alapú elővalidálása
- a NestJS BFF továbbra is megmarad alkalmazási belépési pontként: üzleti jogosultságot, lakcím-alapú ellenőrzést, API-összeállítást és domain-specifikus hibakezelést végez
- a domain szolgáltatások közvetlenül nem publikálandók az internetre; csak a gateway/BFF útvonalon vagy belső hálózaton érhetők el

**Considered alternatives**
- **NestJS közvetlen internetes belépési pontként:** egyszerűbb, de a TLS, rate limiting és nyers hálózati forgalom kezelése túl sok peremvédelmi felelősséget rakna a Node.js folyamatokra.
- **Gateway és BFF összevonása:** csökkenti a komponensek számát, de összekeveri az infrastruktúra-védelmi és alkalmazási API-összeállítási felelősségeket.
- **Felhőspecifikus API Gateway kötelezővé tétele:** erős menedzselt opció, de sértené a hordozhatóságot és a projekt implementációfüggetlen dokumentációs célját.

**Achieving**
- a Node.js/NestJS réteg csak előszűrt, méret- és forgalomlimitált kéréseket kap
- a TLS és peremvédelmi szabályok központilag konfigurálhatók, cserélhető gateway implementációval
- a webes kliensek számára egységes API belépési pont marad, miközben a belső SBA szolgáltatások nem válnak publikus hálózati felületté

**Accepting that**
- a gateway külön komponensként üzemeltetendő és monitorozandó
- a JWT elővalidálás a gatewayben csak formai és kriptográfiai ellenőrzés; a végső üzleti jogosultsági döntés továbbra is a BFF/domain szolgáltatások felelőssége
- a rate limiting szabályokat össze kell hangolni a szolgáltatásszintű idempotency és védelmi limitekkel

**References**
- [Traefik RateLimit middleware](https://doc.traefik.io/traefik/reference/routing-configuration/http/middlewares/ratelimit/)
- [NGINX security controls](https://docs.nginx.com/nginx/admin-guide/security-controls/)
- [Kong Gateway rate limiting](https://developer.konghq.com/gateway/rate-limiting/)


<!-- END SOURCE: docs/src/content/docs/adrs/adr-009.md -->

---

<!-- BEGIN SOURCE: docs/src/community-choice.c4 -->

# Forrás: docs/src/community-choice.c4

specification {
	element actor {
		style {
			shape person
			color green
		}
	}

	element system {
		style {
			color primary
		}
	}

	element externalSystem {
		style {
			color amber
		}
	}

	element webapp {
		style {
			shape browser
			color sky
			icon tech:react
		}
	}

	element service {
		style {
			shape component
			color indigo
			icon tech:nodejs
		}
	}

	element gateway {
		style {
			shape component
			color amber
		}
	}

	element worker {
		style {
			shape component
			color green
			icon tech:nodejs
		}
	}

	element stream {
		style {
			shape queue
			color red
		}
	}

	element database {
		style {
			shape cylinder
			color blue
			icon tech:postgresql
		}
	}

	element cache {
		style {
			shape cylinder
			color red
			icon tech:redis
		}
	}

	element storage {
		style {
			shape cylinder
			color amber
		}
	}

	element component {
		style {
			shape rectangle
			color slate
		}
	}
}

model {
	allampol = actor 'Zamundai állampolgár' 'Ötleteket javasol és szavaz a helyi pályázatokon' 'Reszponzív böngésző'
	admin = actor 'Közigazgatási adminisztrátor' 'Pályázatokat hirdet és moderál' 'Hivatali böngésző'

	zamundaOne = externalSystem 'Zamunda One' 'Külső állami azonosítás és lakcímadat-szolgáltatás; feltételezett lakcím-módosítási metaadattal.' 'OAuth2 / OpenID Connect + REST API' {
		style {
			color amber
		}
	}

	cdn = externalSystem 'CDN / edge cache' 'Opcionális gyorsítóréteg optimalizált médiatartalmakhoz.' 'Cloudflare CDN vagy kompatibilis edge cache' {
		style {
			color amber
		}
	}

	emailApi = externalSystem 'E-mail kézbesítő API' 'Külső tranzakciós e-mail kézbesítés.' 'SMTP / HTTP API' {
		style {
			color amber
		}
	}

	pushApi = externalSystem 'Push értesítési API' 'Külső böngészős vagy mobil push kézbesítés.' 'Web Push / HTTP API' {
		style {
			color amber
		}
	}

	kms = externalSystem 'KMS / Vault Transit' 'Kampány-mesterkulcsok és rövid élettartamú kulcsok származtatásának védett kezelése.' 'HashiCorp Vault Transit vagy kompatibilis KMS' {
		style {
			color amber
		}
	}

	cc = system 'Community Choice platform' 'Lehetővé teszi a polgárok számára helyi fejlesztési ötletek beküldését és szavazását' {
		publicPortal = webapp 'Publikus portál' 'Pályázatok és ötletek böngészése alacsony adatforgalommal.' 'React + TypeScript' {
			style {
				color sky
				icon tech:react
				shape browser
			}
		}

		citizenDashboard = webapp 'Lakossági vezérlőpult' 'Bejelentkezett lakos ötletei, szavazása és ötlethez tartozó médiafeltöltése.' 'React + TypeScript' {
			style {
				color sky
				icon tech:react
				shape browser
			}
		}

		adminPanel = webapp 'Közigazgatási panel' 'Pályázatok, kiíráshoz tartozó média, moderáció és adminisztratív folyamatok kezelése.' 'React + TypeScript' {
			style {
				color sky
				icon tech:react
				shape browser
			}
		}

		edgeGateway = gateway 'Ingress / API Gateway' 'Publikus peremréteg: TLS termináció, routing, request limit, durva rate limit és JWT elővalidálás.' 'Traefik / Nginx / Kong / cloud gateway' {
			style { color amber }
		}

		apiBff = service 'Backend API / BFF' 'Alkalmazási belépési pont: API-összeállítás, üzleti jogosultság és domain routing.' 'Node.js + NestJS BFF' {
			style { color indigo; icon tech:nestjs }
		}

		votingService = service 'Szavazási szolgáltatás' 'Jogosultsági pillanatkép, voter_key képzés, append-only szavazat + outbox írás.' 'Node.js + NestJS' {
			style { color green; icon tech:nestjs }

			votingController = component 'Szavazási vezérlő' 'Kezeli a BFF felől érkező szavazási kéréseket' 'NestJS vezérlő'
			votingLogic = component 'Szavazási logika' 'Üzleti logika: egy felhasználó egy ötletre csak egyszer szavazhat' 'NestJS szolgáltatás'
			eligibilityManager = component 'Jogosultságkezelő' 'Kampányhoz kötött jogosultsági pillanatkép ellenőrzése és létrehozása' 'NestJS szolgáltatás'
			voteZamundaClient = component 'Zamunda One kliens' 'Lakcím és opcionális lakcím-módosítási metaadat lekérése' 'HTTP kliens'
			keyClient = component 'Kulcsszármaztatási kliens' 'Rövid élettartamú kampánykulcs frissítése KMS/Vault által védett mesterkulcsból' 'Vault/KMS kliens + HKDF'
			voteRepo = component 'Szavazati, jogosultsági és outbox adattár' 'A campaign_eligibility snapshot, a csak hozzáfűzhető szavazatok és outbox események mentése' 'TypeORM'
			rateLimiter = component 'Forgalomkorlátozó' 'Szolgáltatásszintű védelmi limit a gateway-n túli biztonsági rétegként' 'NestJS elfogó'

			votingController -> rateLimiter 'Ellenőrzi a limitet'
			votingController -> votingLogic 'Szavazat feldolgozása'
			votingLogic -> voteZamundaClient 'Lakcím és módosítási metaadat lekérése'
			votingLogic -> eligibilityManager 'Jogosultsági pillanatkép kérése'
			eligibilityManager -> voteRepo 'campaign_eligibility olvasása vagy létrehozása'
			eligibilityManager -> votingLogic 'Snapshot adatok visszaadása'
			votingLogic -> keyClient 'Snapshot-alapú voter_key képzése'
			votingLogic -> voteRepo 'Szavazat és outbox mentése snapshot alapján'
		}

		campaignAdminService = service 'Pályázat- és adminisztrációkezelő szolgáltatás' 'Kampányok, ötletek, moderáció, pályázati és ötletmédia metaadatainak kezelése.' 'Node.js + NestJS' {
			style { color indigo; icon tech:nestjs }

			publicApi = component 'Nyilvános lista API' 'Optimalizált, alacsony sávszélességű lekérdezések' 'NestJS vezérlő'
			ideaApi = component 'Ötletbeküldő API' 'Ötletek és probléma-megoldás párok beküldése' 'NestJS vezérlő'
			adminApi = component 'Adminisztrációs API' 'Pályázatok meghirdetése és moderációja' 'NestJS vezérlő'
			uploadUrlIssuer = component 'Presigned URL kiadó' 'S3-kompatibilis feltöltési URL-ek és objektumkulcsok kiadása' 'MinIO kliens'
			eventPublisher = component 'Médiaesemény-küldő' 'Feldolgozási és domain események küldése tartós streamekbe' 'NATS/Kafka kliens'
			campaignRepo = component 'Pályázati adattár' 'Adatbázisműveletek' 'TypeORM'

			publicApi -> campaignRepo 'Lekérdezések (paginált JSON)'
			ideaApi -> uploadUrlIssuer 'Feltöltési URL kérése'
			ideaApi -> campaignRepo 'Ötlet metaadatok mentése'
			adminApi -> campaignRepo 'Adminisztrációs adatok mentése'
			uploadUrlIssuer -> eventPublisher 'Feltöltés kész esemény előkészítése'
		}

		mediaProcessingRequests = stream 'media-processing-requests stream' 'Objektumhivatkozást tartalmazó médiafeldolgozási kérések.' 'NATS JetStream / Kafka stream' {
			style { color red }
		}

		voteCastEvents = stream 'vote-cast-events stream' 'Outbox relay workeren keresztül érkező szavazási audit események.' 'NATS JetStream / Kafka stream' {
			style { color red }
		}

		campaignEvents = stream 'campaign-events stream' 'Kampány-, ötlet- és adminisztratív domain események.' 'NATS JetStream / Kafka stream' {
			style { color red }
		}

		mediaWorker = worker 'Médiafeldolgozó háttérfolyamat' 'Képek és videók aszinkron átméretezése, tömörítése és feltöltése.' 'Node.js háttérfolyamat' {
			style { color amber; icon tech:ffmpeg }

			consumer = component 'Eseményfeldolgozó' 'Médiafeldolgozási kérések fogadása tartós streamből' 'NATS/Kafka kliens'
			rawStorageReader = component 'Nyers média olvasó' 'A feldolgozandó objektumok letöltése a nyers bucketből' 'MinIO kliens'
			imageProcessor = component 'Képtömörítő' 'Képek átméretezése klímabarát méretre' 'Sharp'
			videoProcessor = component 'Videótömörítő' 'Videók tömörítése alacsony sávszélességhez' 'FFmpeg'
			storageUploader = component 'Optimalizált média feltöltő' 'A feldolgozott fájlok feltöltése az optimalizált bucketbe' 'MinIO kliens'

			consumer -> rawStorageReader 'Objektum letöltése'
			rawStorageReader -> imageProcessor 'Kép feldolgozása'
			rawStorageReader -> videoProcessor 'Videó feldolgozása'
			imageProcessor -> storageUploader 'Kész kép átadása'
			videoProcessor -> storageUploader 'Kész videó átadása'
		}

		dbPooler = service 'Adatbázis connection pooler' 'Limitált PostgreSQL kapcsolatpool az alkalmazásszolgáltatások előtt.' 'PgBouncer' {
			style { color blue; icon tech:postgresql }
		}

		outboxRelay = worker 'Outbox relay worker' 'PostgreSQL outbox rekordok publikálása a szavazási streambe SKIP LOCKED feldolgozással.' 'Go / Rust / NestJS worker + NATS JetStream' {
			style { color green }
		}

		database = database 'Relációs adatbázis' 'Kampányok, ötletek, jogosultsági pillanatképek, szavazati napló és outbox elsődleges tárolója.' 'PostgreSQL' {
			style { color blue; icon tech:postgresql }
		}

		cache = cache 'Gyorsítótár' 'Publikus listák, session/rate limit és idempotency kulcsok cache-elése.' 'Redis' {
			style { color red; icon tech:redis }
		}

		rawMediaBucket = storage 'Nyers média bucket' 'Felhasználók által közvetlenül feltöltött eredeti média.' 'MinIO / S3-kompatibilis bucket' {
			style { color amber }
		}

		optimizedMediaBucket = storage 'Optimalizált média bucket' 'Webre optimalizált képek és videók origin tárolója.' 'MinIO / S3-kompatibilis bucket' {
			style { color amber }
		}

		notificationService = service 'Értesítési szolgáltatás' 'Domain eseményekből e-mail és push értesítések készítése.' 'Node.js + NestJS' {
			style {
				color indigo
				icon tech:nestjs
			}
		}

		auditService = service 'Auditnaplózó szolgáltatás' 'Jelentős domain események visszakereshető auditnaplózása.' 'Node.js + NestJS' {
			style {
				color indigo
				icon tech:nestjs
			}
		}

		publicPortal -> edgeGateway 'Pályázatok és ötletek böngészése' '' 'HTTPS + REST/JSON'
		citizenDashboard -> edgeGateway 'Bejelentkezés, ötletbeküldés, szavazás, feltöltési URL kérése' '' 'HTTPS + REST/JSON'
		adminPanel -> edgeGateway 'Pályázatok és moderáció kezelése' '' 'HTTPS + REST/JSON'
		edgeGateway -> zamundaOne 'JWT kulcskészlet és token formai elővalidálása' '' 'OIDC / JWKS'
		edgeGateway -> apiBff 'Előszűrt API kérések továbbítása' '' 'HTTPS + REST/JSON'
		apiBff -> zamundaOne 'Bejelentkezési és profil integráció koordinálása' '' 'OAuth2 / OpenID Connect'
		apiBff -> votingService 'Szavazási műveletek továbbítása' '' 'HTTPS + REST/JSON'
		apiBff -> campaignAdminService 'Publikus, lakossági és admin műveletek továbbítása' '' 'HTTPS + REST/JSON'
		citizenDashboard -> rawMediaBucket 'Ötletmédia közvetlen feltöltése presigned URL-lel' '' 'HTTPS + S3 API'
		adminPanel -> rawMediaBucket 'Pályázati média közvetlen feltöltése presigned URL-lel' '' 'HTTPS + S3 API'
		campaignAdminService -> rawMediaBucket 'Presigned upload URL és objektumkulcs kiadása' '' 'S3 API'
		campaignAdminService -> mediaProcessingRequests 'Médiafeldolgozási kérés publikálása' '' 'NATS JetStream / Kafka'
		campaignAdminService -> campaignEvents 'Kampány-, ötlet- és admin esemény publikálása' '' 'NATS JetStream / Kafka'
		outboxRelay -> voteCastEvents 'Outboxból olvasott szavazatleadási esemény publikálása' '' 'PostgreSQL SKIP LOCKED + NATS JetStream'
		mediaProcessingRequests -> mediaWorker 'Médiafeldolgozási feladat fogyasztása' '' 'NATS JetStream / Kafka'
		voteCastEvents -> auditService 'Szavazási audit esemény fogyasztása' '' 'NATS JetStream / Kafka'
		voteCastEvents -> notificationService 'Szavazási értesítési esemény fogyasztása' '' 'NATS JetStream / Kafka'
		campaignEvents -> auditService 'Kampány- és admin audit esemény fogyasztása' '' 'NATS JetStream / Kafka'
		campaignEvents -> notificationService 'Kampányértesítési esemény fogyasztása' '' 'NATS JetStream / Kafka'
		mediaWorker -> rawMediaBucket 'Nyers fájl olvasása' '' 'MinIO S3 API'
		mediaWorker -> optimizedMediaBucket 'Optimalizált fájl tárolása' '' 'MinIO S3 API'
		optimizedMediaBucket -> cdn 'Opcionális gyorsítótárazott kiszolgálás' '' 'HTTPS'
		notificationService -> emailApi 'E-mail küldése' '' 'SMTP / HTTP API'
		notificationService -> pushApi 'Push értesítés küldése' '' 'Web Push / HTTP API'
		votingService -> zamundaOne 'Lakcím és opcionális módosítási metaadat lekérése' '' 'REST API'
		votingService -> kms 'Rövid élettartamú kampánykulcs frissítése' '' 'Vault/KMS API + HKDF'
		votingService -> dbPooler 'Jogosultsági snapshot, szavazat és outbox írása' '' 'PostgreSQL wire protocol'
		campaignAdminService -> dbPooler 'Pályázatokat, ötleteket és admin adatokat ír/olvas' '' 'PostgreSQL wire protocol'
		auditService -> dbPooler 'Auditnaplót ír' '' 'PostgreSQL wire protocol'
		dbPooler -> database 'Korlátozott backend kapcsolatok' '' 'PostgreSQL wire protocol'
		database -> outboxRelay 'Outbox rekordok zárolt olvasása' '' 'PostgreSQL SELECT FOR UPDATE SKIP LOCKED'
		edgeGateway -> cache 'Elosztott rate limit állapot' '' 'Redis protocol'
		apiBff -> cache 'Session-adatok és BFF cache' '' 'Redis protocol'
		votingService -> cache 'Idempotency és szolgáltatásszintű limit kulcsok' '' 'Redis protocol'
		campaignAdminService -> cache 'Publikus listanézet cache és limit kulcsok' '' 'Redis protocol'
	}

	allampol -> cc.publicPortal 'Böngész és ötleteket néz meg' '' 'HTTPS'
	allampol -> cc.citizenDashboard 'Bejelentkezik, ötletet javasol, szavaz, médiát tölt fel' '' 'HTTPS'
	admin -> cc.adminPanel 'Pályázatot hirdet, ötleteket moderál' '' 'HTTPS'
	allampol -> cc 'Ötletet javasol és szavaz' '' 'HTTPS'
	admin -> cc 'Pályázatot és moderációt kezel' '' 'HTTPS'
	cc -> zamundaOne 'Azonosítás, lakcím és opcionális módosítási metaadat ellenőrzése' '' 'OIDC / REST'
	cc -> kms 'Kampánykulcsok és rövid élettartamú kulcsok származtatása' '' 'Vault/KMS API'
	cc -> emailApi 'Tranzakciós e-mail kézbesítés' '' 'SMTP / HTTP API'
	cc -> pushApi 'Push értesítés kézbesítés' '' 'Web Push / HTTP API'
	cc -> cdn 'Optimalizált médiatartalom kiszolgálása' '' 'HTTPS'
}

views {
	view context {
		title 'Community Choice - rendszerkörnyezeti diagram'
		include allampol
		include admin
		include cc
		include zamundaOne
		include kms
		include emailApi
		include pushApi
		include cdn
	}

	view containers of cc {
		title 'Community Choice - konténerdiagram áttekintő'
		include allampol
		include admin
		include cc.publicPortal
		include cc.citizenDashboard
		include cc.adminPanel
		include cc.edgeGateway
		include cc.apiBff
		include cc.votingService
		include cc.campaignAdminService
		include cc.dbPooler
		include cc.database
		include cc.outboxRelay
		include cc.cache
		include cc.mediaProcessingRequests
		include cc.campaignEvents
		include cc.voteCastEvents
		include cc.mediaWorker
		include cc.auditService
		include cc.notificationService
		include cc.rawMediaBucket
		include cc.optimizedMediaBucket
	}

	view voteIntegrity {
		title 'Community Choice - szavazási integritás és audit eseménykibocsátás'
		include zamundaOne
		include kms
		include cc.edgeGateway
		include cc.apiBff
		include cc.votingService
		include cc.dbPooler
		include cc.database
		include cc.outboxRelay
		include cc.voteCastEvents
		include cc.auditService
		include cc.notificationService
	}

	view mediaFlow {
		title 'Community Choice - médiafeltöltés és feldolgozás'
		include allampol
		include admin
		include cc.citizenDashboard
		include cc.adminPanel
		include cc.edgeGateway
		include cc.apiBff
		include cc.campaignAdminService
		include cc.rawMediaBucket
		include cc.mediaProcessingRequests
		include cc.mediaWorker
		include cc.optimizedMediaBucket
		include cdn
	}

	view compVoting of cc.votingService {
		title 'Community Choice - szavazási szolgáltatás komponensdiagramja'
		include *
	}

	view compCampaignAdmin of cc.campaignAdminService {
		title 'Community Choice - pályázat- és adminisztrációkezelő szolgáltatás komponensdiagramja'
		include *
	}

	view compMediaWorker of cc.mediaWorker {
		title 'Community Choice - médiafeldolgozó háttérfolyamat komponensdiagramja'
		include *
	}
}


<!-- END SOURCE: docs/src/community-choice.c4 -->

---
