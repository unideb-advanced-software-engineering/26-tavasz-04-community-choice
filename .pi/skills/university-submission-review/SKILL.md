---
name: university-submission-review
description: Egyetemi szoftvertervezési projektmunka/beadandó ellenőrzése. Használd, ha a feladat beadandó minőségének, követelmény-lefedettségének, szakmai koherenciájának, értékelhetőségének vagy prezentálhatóságának vizsgálata.
---

# University Submission Review

## Cél

A Community Choice dokumentációt egyetemi szoftvertervezési beadandóként ellenőrizni: legyen szakmailag koherens, követelményvezérelt, jól indokolt és könnyen értékelhető.

## Ellenőrzési dimenziók

1. **Feladat- és követelmény-lefedettség**
   - Megjelenik-e az esettanulmányból következő probléma?
   - Követhetők-e a funkcionális és nem-funkcionális követelmények?
   - Az ASR-ek tényleg architektúrát befolyásoló követelmények-e?

2. **Architekturális gondolkodás**
   - Világos-e a választott architektúra: hibrid SBA + EDA?
   - Látszanak-e az alternatívák és az elvetés okai?
   - A minőségi attribútumok, ASR-ek, ADR-ek és C4 diagramok összhangban vannak-e?
   - Vannak-e túlzó vagy nem indokolt technológiai döntések?

3. **ADR minőség**
   - Van-e kontextus, döntés, indoklás, következmény?
   - Kimondja-e a trade-offokat?
   - Kapcsolódik-e konkrét követelményekhez vagy karakterisztikákhoz?

4. **C4 és modellezés**
   - A context/container/component szintek nem keverednek-e?
   - A diagramok támogatják-e a szöveges döntéseket?
   - A kapcsolatok nevei/protokolljai érthetők-e?

5. **Beadandó olvashatóság**
   - Magyar szakmai nyelv következetes-e?
   - Van-e redundancia vagy ellentmondás?
   - Az oldalak sorrendje logikus-e egy értékelő számára?
   - A fogalmak első előforduláskor érthetők-e?

6. **Technikai leadhatóság**
   - Build fut-e: `cd docs && npm run build`?
   - Starlight sidebarban elérhető-e minden fontos oldal?
   - Nincsenek-e törött relatív linkek vagy rossz útvonalak?

## Ajánlott munkamenet

1. Olvasd el legalább:
   - `README.md`
   - `docs/README.md`
   - `docs/src/content/docs/esettanulmany.md`
   - `docs/src/content/docs/srs.md`
   - `docs/src/content/docs/architektura/*.md`
   - `docs/src/content/docs/adrs/*.md`
   - `docs/src/content/docs/architektura/c4-modell.mdx`
   - `docs/src/community-choice.c4`
2. Készíts rövid értékelői szemléletű összefoglalót.
3. Sorold a problémákat prioritással:
   - **Kritikus**: értékelést vagy buildet veszélyeztet.
   - **Fontos**: szakmai koherenciát ront.
   - **Javító**: stílus, érthetőség, prezentálhatóság.
4. Adj konkrét javítási javaslatot fájlútvonallal.
5. Ha a felhasználó kéri, végezd el a javításokat kis lépésekben.

## Output forma

```markdown
## Beadandó állapot

Rövid összegzés 3-5 mondatban.

## Erősségek

- ...

## Kritikus teendők

- [ ] `fájl`: probléma → javaslat

## Fontos javítások

- [ ] `fájl`: probléma → javaslat

## Javító finomítások

- [ ] `fájl`: probléma → javaslat

## Javasolt következő lépés

1. ...
```

## Hangnem

Legyél támogató, de értékelői szemléletű. Ne csak hibákat keress: emeld ki, ami jól alátámasztja a beadandó szakmai minőségét.
