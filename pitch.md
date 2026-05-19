Amikor szoftvert tervezünk, általában a funkciókra fókuszálunk: mit tudjon a rendszer, hogyan nézzen ki. Azonban amikor a Zamunda Digitális Reneszánsz program részeként a Community Choice közösségi javaslattételi és szavazási platformot terveztük, egy ennél sokkal nehezebb kérdéssel találtuk szembe magunkat.

A kérdés az volt: hogyan építsünk be technológiai szinten egy olyan fogalmat, mint a bizalom?

[Rövid szünet – kontaktus a hallgatósággal]

Egy állami, közbizalmi környezetben működő szavazási platform nem engedhet meg magának kompromisszumokat. Ha a lakosok azt érzik, hogy a szavazatuk elveszhet, manipulálható, vagy hogy a rendszerrel vissza lehet élni, a platform elveszíti a létjogosultságát. Emellett a ZDR program szigorú kereteket is szabott: a rendszernek klímabarátnak, takarékosnak és a gyenge hálózatokon is robusztusnak kell lennie.

[Az architekturális alapok – kb. 1.5 perc]

Ezek a peremfeltételek vezéreltek minket az architekturális stílus kiválasztásakor. A tiszta monolitikus megközelítést elvetettük, mert egy kampányzárás utolsó órájában, amikor a szavazási forgalom ugrásszerűen megnőhet, a teljes rendszer horizontális skálázása indokolatlanul nagy erőforrás-pazarlással járna, valamint fenáll a single point of failure probléma is. Ugyanakkor a teljes mikroszolgáltatásos architektúrát is elvetettük – a hálózati többlet, az elosztott tranzakciók kezelése és a komplex üzemeltetés szembement volna a takarékossági elvárásokkal.

Így jutottunk el a Hibrid Service-Based és Event-Driven architektúrához.

A koncepciónk lényege: a kritikus, erős konzisztenciát igénylő folyamatokat – mint maga a szavazás rögzítése – makroszolgáltatásokba zártuk, közös tranzakciós adatbázissal. A nehézkes, időigényes, de szinkron választ nem igénylő feladatokat – mint a médiafeldolgozás vagy az értesítések küldése – pedig eseményvezérelt háttérfolyamatokra bíztuk.

[Szünet, hogy az architektúra koncepciója rögzüljön]

Bemutatjuk a szerintünk legérdekesebb architekturális döntéseket, ahol a hagyományos megközelítések elbuktak volna, és ahol nekünk kellett új utakat keresni.

[1. Pillér: A jogosultság előzetes befagyasztása és a villámgyors olvasás – kb. 1.5 perc]

Az első ilyen probléma a jogosultságkezelés és a teljesítmény súlyos konfliktusa volt. Képzeljük el a helyzetet: egy lakos belép a platformra, és a rendszernek azonnal el kell döntenie, hogy az éppen futó kampányokat csak olvashatja, vagy jogosult javaslatot tenni és szavazni is az adott kerületben.

Ha minden bejelentkezésnél vagy kattintásnál valós időben lekérdezzük a központi állami nyilvántartást (Zamunda One), vagy komplex térinformatikai számításokat végzünk, a rendszer egy szavazási hajrában pillanatok alatt összeomlana. Arról nem is beszélve, hogy így egy átláthatatlan, folyamatosan mozgó célpont lenne a jogosultság.

[Enyhe szünet]

A megoldásunk az volt, hogy a kiértékelést teljesen leválasztottuk a felhasználói interakcióról. Bevezettük a "Megváltoztathatatlan Jogosultsági Pillanatkép" (Campaign Eligibility Snapshot) koncepcióját.

Ez azt jelenti, hogy a kampány indulása előtt – például 24 órával – egy aszinkron háttérfolyamat előre kiszámolja és legenerálja a digitális választási névjegyzéket. Ezt a listát egy horizontálisan particionált, célzottan indexelt adatbázistáblában fagyasztjuk le. Amikor a felhasználó belép, a jogosultságának ellenőrzése egy úgynevezett O(1)-es idejű, vagyis szinte azonnali művelet. Ezzel tehermentesítettük az állami azonosító rendszert, villámgyorssá tettük az oldalbetöltést, és garantáltuk, hogy a kampány ideje alatt a jogosultságok nem manipulálhatók.

Minden architekturális döntés kompromisszummal jár, így ennek is megvan a maga trade-offja. [Rövid szünet]

Az ár, amit ezért a sebességért fizetünk, hogy be kellett vezetnünk egy adminisztratív „cut-off” időszakot a kampány kezdete előtt, és a háttérben ki kellett építenünk egy robusztus adatelőkészítő (ETL) infrastruktúrát. Emellett biztosítanunk kell egy dedikált, manuális felülbírálati folyamatot is azok számára, akik pont a befagyasztási ablakban költöznek. De a másodperctört része alatti válaszidő és a rendszer bebetonozott stabilitása bőven megérte ezt az árat.

[2. Pillér: GDPR és a Pszeudonimizáció – kb. 1.5 perc]

A második kihívás az adatvédelem volt. Annak érdekében, hogy a duplikált szavazatokat az adatbázis technológiailag, egy UNIQUE szabállyal is blokkolni tudja, szükségünk volt egy szavazói azonosítóra. A nyers személyes adatokat természetesen nem tárolhatjuk.

De a sima kriptográfiai hash-elés (például SHA-256) önmagában nem elég biztonságos. Ha az adatbázis véletlenül kiszivárog, a hash-ek úgynevezett Rainbow Table-ök segítségével, nyers számítási kapacitással gyorsan visszafejthetők lennének.

[Enyhe hangsúlyváltás, egy picit lassabb tempó]

Ezért a rendszerbe bevezettünk egy dedikált Kulcskezelő Szolgáltatást (KMS). A felhasználói azonosítókat egy úgynevezett Globális Pepperrel titkosítjuk, amely soha, egyetlen pillanatra sem hagyja el a kulcskezelő biztonságos memóriáját, és sosem kerül be az adatbázisba. Így a szavazati adatbázis még a legrosszabb forgatókönyv – egy teljes adatszivárgás – esetén is csak értelmezhetetlen, visszafejthetetlen adatsor marad a támadók számára.

[3. Pillér: Az Audit és a Dual-Write probléma – kb. 1 perc]

A harmadik terület az auditálhatóság kérdése volt. A rendszer minden szavazatról eseményt küld egy tartós, visszajátszható eseményfolyamba (brokerbe). De itt egy klasszikus elosztott rendszerbeli problémával, a Dual-Write anomáliával szembesültünk: mi van, ha a szavazat sikeresen bekerül a fő adatbázisba, de a hálózat abban a pillanatban megszakad, és az audit esemény sosem jut el a brokerbe?

A megoldásunk a Transactional Outbox és a CDC (Change Data Capture) minta alkalmazása volt. A szavazatot és az audit eseményt a szolgáltatásunk egyetlen felbonthatatlan adatbázis-tranzakcióban rögzíti. Ezt a tranzakciós naplót figyeli egy független, háttérben futó CDC komponens, amely garantálja, hogy az esemény – hálózati szakadás esetén akár egy perccel később is, de – biztosan kikerül az audit rendszerbe. Nincs elveszett szavazat, nincs elveszett nyom.

Amikor a Community Choice dokumentációját összeállítottuk, arra törekedtünk, hogy a végeredmény ne egy felszínes technológiai kívánságlista legyen. Minden architekturális döntésünket (ADR) visszavezettük az esettanulmányból fakadó szignifikáns követelményekre. Legyen szó a szavazási csúcsokat védő adatbázis-particionálásról, adat védelem vagy az eseményvezérelt aszinkron médiafeldolgozásról.

Úgy véljük, hogy a Community Choice nem csupán egy egyetemi projektmunka. Ezzel az architekturális alappal és egy kis célzott továbbdolgozással a koncepció akár egy valódi, éles állami környezetben működő projektté is ki tudna alakulni – biztosítva egy transzparens és manipulálhatatlan digitális demokráciát.
