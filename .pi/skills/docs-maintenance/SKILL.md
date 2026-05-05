---
name: docs-maintenance
description: Astro Starlight dokumentáció karbantartása ebben a repóban. Használd, ha a feladat magyar dokumentációs oldal, sidebar, frontmatter, build, linkek vagy docs/src/content/docs tartalom módosítása.
---

# Docs Maintenance

## Cél

A `docs/` alatti Astro + Starlight oldal konzisztens, magyar nyelvű karbantartása.

## Lépések

1. Térképezd fel az érintett fájlokat:
   - `docs/src/content/docs/**`
   - `docs/astro.config.mjs`
   - szükség esetén a gyökérbeli kapcsolódó `*.md` jegyzeteket.
2. A publikált tartalom elsődleges helye mindig `docs/src/content/docs/`.
3. Ellenőrizd a frontmattert:
   - `title` kötelező,
   - `description` ajánlott,
   - MDX fájlnál importok csak frontmatter után.
4. Linkeknél Starlight útvonalat használj, ne gyökérbeli fájlnevet.
5. Ha új oldalt adsz hozzá, frissítsd a `docs/astro.config.mjs` sidebarját, kivéve ha autogenerate kezeli.
6. Ne szerkeszd kézzel:
   - `docs/dist/`
   - `docs/.astro/`
   - `docs/node_modules/`
7. Ellenőrzés:
   ```bash
   cd docs && npm run build
   ```
   Ha Node verzió miatt hibázik, jelezd: `.nvmrc` = `v22`, Astro >= 22.12.0-t igényel.

## Stílus

- Magyar, világos, szakmai hangnem.
- Technológianevek eredeti formában: Astro, Starlight, LikeC4, Kafka, PostgreSQL, Redis, MinIO, NestJS.
- Kerüld a túlmarketingelt megfogalmazásokat; indoklás legyen követelmény- és trade-off alapú.
