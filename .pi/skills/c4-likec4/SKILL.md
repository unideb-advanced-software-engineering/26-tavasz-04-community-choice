---
name: c4-likec4
description: LikeC4/C4 modell karbantartása a docs/src/community-choice.c4 fájlban és Starlight MDX beágyazásban. Használd diagram, nézet, komponens vagy kapcsolat módosításakor.
---

# C4 / LikeC4

## Fájlok

- Modell: `docs/src/community-choice.c4`
- Beágyazás: `docs/src/content/docs/architektura/c4-modell.mdx`
- Astro komponens: `docs/src/components/LikeC4View.astro`

## Szabályok

1. Tartsd konzisztensen a C4 szinteket:
   - context view: szereplők, külső rendszerek, Community Choice platform.
   - containers view: webapp, szolgáltatások, broker, worker, database/cache/storage, külső rendszerek.
   - component view: csak az adott konténer belső komponensei.
2. Magyar megjelenített nevek és leírások; technológianevek eredeti formában.
3. Kapcsolatoknál add meg a szándékot és lehetőleg a technológiát/protokollt.
4. Ne vezess be új technológiát az ADR-ek és architektúra szöveges indoklása nélkül.
5. Ha broker technológiát vagy protokollt módosítasz, frissítsd az ADR-t és az architektúra oldalakat is.

## Ellenőrzés

Módosítás után futtasd:

```bash
cd docs && npm run build
```

Ha a build Node verzió miatt nem fut, jelezd külön, és ne tekintsd tartalmi hibának.
