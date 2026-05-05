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

### Forgatókönyv: alacsony sávszélességű böngészés

- **Forrás:** vidéki, gyenge mobilhálózaton böngésző lakos.
- **Stimulus:** a felhasználó megnyitja egy aktív önkormányzati pályázat ötletlistáját.
- **Környezet:** magas késleltetésű, alacsony sávszélességű hálózat; sok ötlethez tartozik kép vagy videó.
- **Válasz:** a rendszer lapozott, minimalizált mezőkészletű API-választ ad, a kliens lazy loadingot használ, a médiatartalmak optimalizált WebP/WebM változatai CDN-ről töltődnek.
- **Válaszmérték:** a felhasználó a lista első tartalmi elemeit nagy médiatartalmak letöltése nélkül látja; a szerver nem küld le szükségtelen részletes adatokat vagy eredeti méretű médiafájlokat.
- **Kapcsolódó döntések:** Redis cache, MinIO/CDN, aszinkron Médiafeldolgozó háttérfolyamat, React/TypeScript kliens.

## Integritás

**Mit jelent?**

* [https://quality.arc42.org/qualities/integrity](https://quality.arc42.org/qualities/integrity)

**Miért fontos?**

* A rendszer legkritikusabb funkciója a lakossági szavazás. A platformba vetett állampolgári bizalom megköveteli, hogy a szavazatokat utólagosan senki ne tudja módosítani vagy törölni, még a legmagasabb szintű rendszeradminisztrátorok sem.
* Az integritás része az is, hogy ugyanaz a felhasználó ugyanarra az ötletre ne adhasson le több szavazatot; ezt a rendszer adatbázis-szintű egyediségi constrainttel biztosítja.
* A szavazatok megbízhatóságát és a pályázatok tisztaságát technológiai garanciákkal kell védeni az illetéktelen beavatkozások ellen, a szavazói személyazonosságot pedig pszeudonimizált tárolással kell minimalizálni.

### Forgatókönyv: ismételt szavazási kísérlet és adminisztrátori beavatkozás tiltása

- **Forrás:** hitelesített lakos, illetve egy magas jogosultságú adminisztrátor.
- **Stimulus:** a lakos hálózati retry miatt ugyanarra az ötletre kétszer küldi el a szavazási kérést; később egy adminisztrátor megpróbálna szavazatot módosítani vagy törölni.
- **Környezet:** szavazási csúcsterhelés, párhuzamos kérések, PostgreSQL tranzakciós tároló.
- **Válasz:** a Szavazási szolgáltatás determinisztikus pszeudonimizált `voter_key` értéket képez, majd a PostgreSQL `UNIQUE(idea_id, voter_key)` jellegű constraintje kizárja a duplikált szavazatot. A szavazati táblán az `UPDATE` és `DELETE` adatbázis-szinten tiltott.
- **Válaszmérték:** ugyanarra az ötletre ugyanattól a szavazótól legfeljebb egy érvényes szavazati rekord jön létre; meglévő szavazat utólagos módosítása vagy törlése nem hajtható végre alkalmazásszint megkerülésével sem.
- **Kapcsolódó döntések:** [ADR-005](../adrs/adr-005/), PostgreSQL append-only szavazati tranzakciónapló, Kafka audit eseményfolyam.

## Robusztusság

**Mit jelent?**

* [https://quality.arc42.org/qualities/robustness](https://quality.arc42.org/qualities/robustness)

**Miért fontos?**

* Zamunda bizonyos területein a hálózati kapcsolat instabil, lassú és magas késleltetésű. A rendszernek ilyen körülmények között is használhatónak kell maradnia, amit kliensoldali és szerveroldali gyorsítótárazással kell biztosítani, hogy az oldal váza és a korábban letöltött tartalmak a lehető legrövideb idő alatt és minimális adatforgalommal is elérhetőek legyenek.
* A polgárok által beküldött probléma-megoldás párokhoz tartozó nagyméretű multimédiás fájlok (fotók, videók) feltöltése során számítani kell a mobilnet gyakori megszakadására. A rendszernek robusztus, darabolt és hiba esetén automatikusan folytatható adatátvitelt kell alkalmaznia, hogy a feltöltés ne vesszen el egy pillanatnyi térerőhiány miatt.

### Forgatókönyv: megszakadó médiafeltöltés

- **Forrás:** lakos, aki ötlethez videót tölt fel mobilhálózaton.
- **Stimulus:** a feltöltés közben a kapcsolat többször megszakad vagy jelentősen belassul.
- **Környezet:** instabil internetkapcsolat, nagyméretű videófájl, aktív ötletbeküldési időszak.
- **Válasz:** a rendszer darabolt, folytatható feltöltést alkalmaz; a sikeresen feltöltött darabokat nem kell újraküldeni. A webes kérés nem végzi el szinkron módon a videótömörítést, hanem eseményt küld a Médiafeldolgozó háttérfolyamatnak.
- **Válaszmérték:** rövid hálózati szakadás után a feltöltés folytatható, nem indul teljesen elölről; a médiafeldolgozás hibája vagy lassulása nem teszi elérhetetlenné az ötletbeküldési vagy szavazási funkciókat.
- **Kapcsolódó döntések:** TUS/chunked upload, Kafka, Médiafeldolgozó háttérfolyamat, MinIO/CDN.

## Elaszticitás

**Mit jelent?**

* [https://quality.arc42.org/qualities/elasticity](https://quality.arc42.org/qualities/elasticity)

**Miért fontos?**

* Egy-egy népszerűbb önkormányzati ötletpályázat szavazási időszakának végén (a határidő lejárta előtti órákban) drasztikus, ugrásszerű terhelésnövekedés várható a 10 milliós lakosság részéről.
* A rendszernek képesnek kell lennie automatikusan felskálázni az erőforrásokat a csúcsidőszakokban, hogy a kiszolgálás zavartalan maradjon, majd a forgalom csökkenésével azonnal visszaskálázni. Ez garantálja a klímabarát és költséghatékony megvalósítást, elkerülve a feleslegesen üresjáratban lévő szerverparkok fenntartását.

### Forgatókönyv: szavazási hajrá csúcsterheléssel

- **Forrás:** nagy létszámú lakosság egy népszerű önkormányzati kampány utolsó órájában.
- **Stimulus:** a szavazási forgalom rövid idő alatt többszörösére nő.
- **Környezet:** kampányzárás előtti csúcsterhelés, a publikus böngészés és médiafeltöltés forgalma közben is folytatódik.
- **Válasz:** az üzemeltetés csak a Szavazási szolgáltatás példányszámát növeli, miközben a Pályázat- és adminisztrációkezelő szolgáltatás, az Értesítési szolgáltatás és a Médiafeldolgozó háttérfolyamat saját terhelésük szerint külön skálázhatók. A szavazási út szinkron része PostgreSQL tranzakcióra támaszkodik, az audit és értesítés Kafka-n keresztül aszinkron történik.
- **Válaszmérték:** a szavazási kapacitás célzottan növelhető anélkül, hogy a teljes alkalmazást monolitként kellene replikálni; a csúcsidőszak után a Szavazási szolgáltatás visszaskálázható, csökkentve az üresjárati költséget és energiafogyasztást.
- **Kapcsolódó döntések:** [ADR-001](../adrs/adr-001/), [ADR-002](../adrs/adr-002/), [ADR-003](../adrs/adr-003/), SBA + EDA hibrid architektúra.
