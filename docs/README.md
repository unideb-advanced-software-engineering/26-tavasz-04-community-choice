# A dokumentációs oldal

Ez a könyvtár tartalmazza a Community Choice projekt Astro + Starlight alapú dokumentációs oldalát.

## Könyvtárszerkezet

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   └── docs/
│   ├── community-choice.c4
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- A `src/content/docs/` könyvtár tartalmazza az oldalak tartalmát `.md` és `.mdx` fájlokban.
- A `src/community-choice.c4` fájl írja le a megjelenített C4 diagramokat.
- Az `src/components/` könyvtárban találhatók az egyedi Astro komponensek.
- A `public/` könyvtár statikus fájlokat, például ikont tartalmaz.

## Parancsok

A parancsokat a `docs/` könyvtárból érdemes futtatni:

| Parancs | Jelentés |
| :------- | :------- |
| `npm install` | Függőségek telepítése |
| `npm run dev` | Helyi fejlesztői kiszolgáló indítása a `localhost:4321` címen |
| `npm run build` | A statikus oldal előállítása a `dist/` könyvtárba |
| `npm run preview` | A lefordított oldal helyi előnézete |
| `npm run astro -- --help` | Az Astro CLI súgójának megnyitása |

## Megjegyzés

A projekt elsődleges nyelve a magyar. Az ADR-ek kivételével minden felhasználó számára látható tartalom magyarul szerepel, a technológiák és tulajdonnevek eredeti alakjukban maradnak.
