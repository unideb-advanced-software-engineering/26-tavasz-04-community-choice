# Project instructions for pi agents

## Projektkép

- A repó a **Community Choice** (Zamunda Digitális Reneszánsz) architekturális és esettanulmány-alapú dokumentációja.
- Elsődleges kimenet: `docs/` alatti Astro + Starlight statikus dokumentációs oldal.
- Elsődleges nyelv: magyar. Technológianeveket és tulajdonneveket hagyj eredeti alakban.

## Fontos útvonalak

- `docs/src/content/docs/` – publikált dokumentációs oldalak, ez legyen a felhasználó által látható tartalom elsődleges helye.
- `docs/src/content/docs/adrs/` – ADR-ek.
- `docs/src/content/docs/architektura/` – architekturális tartalmak.
- `docs/src/community-choice.c4` – LikeC4/C4 modell.
- `docs/src/components/LikeC4View.astro` – C4 nézetek beágyazása.
- Gyökérben lévő `*.md` fájlok történeti/forrás jegyzetek; módosítás előtt ellenőrizd, kell-e szinkronizálni őket a `docs/src/content/docs/` megfelelő oldalával.

## Parancsok

Mindig a `docs/` könyvtárban futtasd az npm parancsokat:

```bash
cd docs && npm install
cd docs && npm run dev
cd docs && npm run build
cd docs && npm run preview
```

A projekt `.nvmrc` fájlja `v22`; Astro buildhez Node >= 22.12.0 szükséges. Ha a build Node verzió miatt hibázik, előbb válts Node 22-re az elérhető verziókezelővel.

## Munkaszabályok

- Ne módosítsd kézzel a `docs/dist/`, `docs/.astro/` és `docs/node_modules/` tartalmát.
- Ne futtass npm parancsot a repó gyökerében, mert nincs gyökér `package.json`.
- Dokumentációs módosításnál ellenőrizd a Starlight frontmattert (`title`, `description`) és a sidebar illeszkedését (`docs/astro.config.mjs`).
- Relatív linkeknél Starlight útvonalakat használj, ne a gyökérbeli forrásfájlokra mutass.
- Architekturális állításoknál tartsd konzisztensen a jelenlegi döntést: **hibrid Service-Based Architecture + Event-Driven Architecture**, PostgreSQL, Redis, Kafka, MinIO/CDN, React/TypeScript webalkalmazás, Node.js/NestJS szolgáltatások.
- C4/LikeC4 módosítás után építsd a dokumentációt, ha a Node verzió engedi.

## Pi workflow

- Használd a projekt skilljeit: `/skill:docs-maintenance`, `/skill:architecture-review`, `/skill:c4-likec4`, `/skill:university-submission-review`, `/skill:senior-software-architect`, `/skill:starlight-doc-writer`, `/skill:adr-researcher`.
- Használd a prompt sablonokat: `/repo-map`, `/doc-review`, `/adr`, `/next-step`, `/submission-review`, `/architect-proposal`, `/write-doc-from-decision`, `/adr-research`.
- Nagyobb változtatás előtt röviden foglald össze a tervet, majd kis, ellenőrizhető módosításokban dolgozz.
