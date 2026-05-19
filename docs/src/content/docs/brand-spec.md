---
title: Brand Specification – Community Choice Zamunda
description: "A Community Choice vizuális identitásának hivatalos specifikációja: színek, tipográfia, design tokenek és használati szabályok"
---

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
