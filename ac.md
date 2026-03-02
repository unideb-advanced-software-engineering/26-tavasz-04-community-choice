# Architekturális karakterisztikák

## Hatékonyság (Performance Efficiency)

**Mit jelent?**

* [https://quality.arc42.org/qualities/performance_efficiency](https://www.google.com/search?q=https://quality.arc42.org/qualities/performance_efficiency)

**Miért fontos?**

* A fejlesztés során kötelező a klímabarát és sávszélesség-takarékos technológiák alkalmazása. A rendszernek a lehető legkisebb energiafogyasztással és szervererőforrás-igénnyel kell működnie.


* Zamunda bizonyos területein az internetlefedettség hiányos, alacsony a sávszélesség és magas a késleltetés, ezért az adatforgalmat (különösen a multimédiás tartalmaknál) a végletekig optimalizálni kell a használhatóság érdekében.

## Integritás (Integrity)

**Mit jelent?**

* [https://quality.arc42.org/qualities/integrity](https://www.google.com/search?q=https://quality.arc42.org/qualities/integrity)

**Miért fontos?**

* A rendszer legkritikusabb funkciója a lakossági szavazás. A platformba vetett állampolgári bizalom megköveteli, hogy a szavazatokat utólagosan senki ne tudja módosítani vagy törölni, még a legmagasabb szintű rendszeradminisztrátorok sem.
* A szavazatok megbízhatóságát és a pályázatok tisztaságát technológiai (pl. kriptográfiai láncolás, append-only adatbázisok) garanciákkal kell védeni az illetéktelen beavatkozások ellen.

## Robusztusság (Robustness)

**Mit jelent?**

* [https://quality.arc42.org/qualities/robustness](https://quality.arc42.org/qualities/robustness)

**Miért fontos?**

* Az instabil zamundai hálózati viszonyok miatt a rendszernek hibatűrőnek kell lennie. Például, ha egy polgár feltölt egy nagyobb videót a parkosítási ötletéhez, és a kapcsolat megszakad, a rendszernek képesnek kell lennie adatvesztés nélkül folytatni a műveletet a kapcsolat helyreállásakor (chunked upload).
* A platformnak akkor is elegánsan kell kezelnie a hibákat, ha a külső Zamunda One API (amely a bejelentkezésért és a lakcímhitelesítésért felelős) átmenetileg lassul vagy elérhetetlenné válik.

## Elaszticitás (Elasticity)

**Mit jelent?**

* [https://quality.arc42.org/qualities/elasticity](https://quality.arc42.org/qualities/elasticity)

**Miért fontos?**

* Egy-egy népszerűbb önkormányzati ötletpályázat szavazási időszakának végén (a határidő lejárta előtti órákban) drasztikus, ugrásszerű terhelésnövekedés várható a 10 milliós lakosság részéről.
* A rendszernek képesnek kell lennie automatikusan felskálázni az erőforrásokat a csúcsidőszakokban, hogy a kiszolgálás zavartalan maradjon, majd a forgalom csökkenésével azonnal visszaskálázni. Ez garantálja a klímabarát és költséghatékony megvalósítást, elkerülve a feleslegesen üresjáratban lévő szerverparkok fenntartását.
