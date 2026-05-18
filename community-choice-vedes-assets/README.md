# Community Choice védés — kép placeholder lista

A prezentációban jelenleg CSS/HTML placeholder blokkok vannak. Ha elkészülnek a képek, tedd őket ebbe a mappába, majd a `community-choice-vedes.html` megfelelő placeholder `<div>` elemét cseréld `<img>` elemre.

Ajánlott fájlok:

1. `zdr-context.png`
   - 03. dia: ZDR kontextus, közbizalmi állami környezet, gyenge hálózat, fenntarthatóság.

2. `vote-integrity-schema.png`
   - 10. dia: PostgreSQL vote schema, audit log vagy admin mockup.

3. `qr-or-logo.png`
   - 13. dia: dokumentáció QR-kód, Community Choice logó vagy záró illusztráció.

Képméret javaslat:
- 16:9 vagy 4:3 arány.
- Webre optimalizált PNG/WebP.
- Max. kb. 1600 px széles.

Beillesztési példa:

```html
<img src="community-choice-vedes-assets/zdr-context.png" alt="ZDR kontextus illusztráció" class="slide-image" />
```

A prezentáció CSS-e már tartalmazza a kötelező képkorlátot: `max-height: min(50vh, 400px)`.
