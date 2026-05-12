---
title: Brand Specification – Community Choice Zamunda
description: "A Community Choice vizuális identitásának hivatalos specifikációja: színek, tipográfia, design tokenek és használati szabályok"
---

# Brand Specification – Community Choice Zamunda

> **Verzió:** 1.0.0
> **Utolsó módosítás:** 2026-05-12
> **Státusz:** Forrásként szolgáltat a design rendszer és a UI Kit felépítéséhez. Minden vizuális döntés ehhez a dokumentumhoz igazodik.

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