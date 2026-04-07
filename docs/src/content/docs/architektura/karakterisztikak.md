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

## Integritás

**Mit jelent?**

* [https://quality.arc42.org/qualities/integrity](https://quality.arc42.org/qualities/integrity)

**Miért fontos?**

* A rendszer legkritikusabb funkciója a lakossági szavazás. A platformba vetett állampolgári bizalom megköveteli, hogy a szavazatokat utólagosan senki ne tudja módosítani vagy törölni, még a legmagasabb szintű rendszeradminisztrátorok sem.
* A szavazatok megbízhatóságát és a pályázatok tisztaságát technológiai garanciákkal kell védeni az illetéktelen beavatkozások ellen.

## Robusztusság

**Mit jelent?**

* [https://quality.arc42.org/qualities/robustness](https://quality.arc42.org/qualities/robustness)

**Miért fontos?**

* Zamunda bizonyos területein a hálózati kapcsolat instabil, lassú és magas késleltetésű. A rendszernek ilyen körülmények között is használhatónak kell maradnia, amit kliensoldali és szerveroldali gyorsítótárazással kell biztosítani, hogy az oldal váza és a korábban letöltött tartalmak a lehető legrövideb idő alatt és minimális adatforgalommal is elérhetőek legyenek.
* A polgárok által beküldött probléma-megoldás párokhoz tartozó nagyméretű multimédiás fájlok (fotók, videók) feltöltése során számítani kell a mobilnet gyakori megszakadására. A rendszernek robusztus, darabolt és hiba esetén automatikusan folytatható adatátvitelt kell alkalmaznia, hogy a feltöltés ne vesszen el egy pillanatnyi térerőhiány miatt.

## Elaszticitás

**Mit jelent?**

* [https://quality.arc42.org/qualities/elasticity](https://quality.arc42.org/qualities/elasticity)

**Miért fontos?**

* Egy-egy népszerűbb önkormányzati ötletpályázat szavazási időszakának végén (a határidő lejárta előtti órákban) drasztikus, ugrásszerű terhelésnövekedés várható a 10 milliós lakosság részéről.
* A rendszernek képesnek kell lennie automatikusan felskálázni az erőforrásokat a csúcsidőszakokban, hogy a kiszolgálás zavartalan maradjon, majd a forgalom csökkenésével azonnal visszaskálázni. Ez garantálja a klímabarát és költséghatékony megvalósítást, elkerülve a feleslegesen üresjáratban lévő szerverparkok fenntartását.
