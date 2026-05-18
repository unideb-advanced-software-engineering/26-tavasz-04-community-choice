Pitch szöveg

Szoftvertervezés tárgy keretében a Community Choice rendszert terveztük meg. Ez egy közösségi javaslattételi és szavazási platform a Zamunda Digitális Reneszánsz programhoz.

A rendszer célja egyszerű: a lakosok helyi fejlesztési ötleteket tudjanak beküldeni, majd a saját lakóhelyükhöz tartozó kampányokban hitelesen szavazhassanak.

A tervezés során négy területet kezeltünk meghatározóként: a szavazási integritást, a jogosultságkezelést, az alacsony sávszélességű működést és a célzott skálázhatóságot. Ezek alapján a rendszer fő kérdése nem az volt, hogy hogyan lehet ötleteket beküldeni és listázni, hanem az, hogy egy közbizalmi környezetben működő döntéstámogató platform milyen garanciákat igényel.

Az első ilyen garancia a szavazatok integritása. A dokumentációban abból indultunk ki, hogy a leadott szavazat nem lehet utólag módosítható vagy törölhető, és az egy ötletre vonatkozó ismételt szavazást nem elég alkalmazásszinten tiltani. Ezt architekturális szinten is védeni kell, elsődlegesen erős konzisztenciát adó, tranzakciós adattárolással és adatbázis-szintű egyediségi szabályokkal.

A második fontos döntési pont az adatvédelem és az ellenőrizhetőség egyensúlya volt. A teljes anonimitás nem illeszkedik a duplikált szavazás kizárásához, a nyers személyes azonosító tárolása viszont adatvédelmi szempontból túl erős kitettséget jelentene. Ezért pszeudonimizált szavazói kulcsot javasoltunk: olyan megoldási irányt, amely támogatja az ismételt szavazás kizárását, de nem köti közvetlen személyes azonosítóhoz a szavazati rekordot.

A harmadik döntési pont a kritikus és nem kritikus folyamatok szétválasztása volt. A szavazat rögzítése szinkron, konzisztens és rövid kritikus útvonalat igényel. Ezzel szemben az audit, az értesítés és a médiafeldolgozás leválasztható háttérfolyamat. Ezért a dokumentációban eseményvezérelt kiegészítést javasoltunk ezekre a területekre. Konkrét technológiaként Kafka-jellegű eseményfolyam-platform szerepelhet, de a döntés lényege nem a termékválasztás, hanem a felelősségek szétválasztása.

A médiafeltöltésnél ugyanez a gondolkodás jelent meg. A nagy bináris állományok kezelése nem terhelheti a fő backend útvonalakat, és nem akadályozhatja a szavazási vagy pályázatböngészési funkciókat. Ezért objektumtár-alapú, darabolt és folytatható feltöltési irányt javasoltunk, aszinkron médiaoptimalizálással. Ez egyszerre támogatja a robusztusságot, az alacsony sávszélességű használhatóságot és az erőforrás-takarékosságot.

Az architekturális stílus kiválasztásánál az arányosság volt a fő szempont. A teljes mikroszolgáltatásos megközelítést túlzott üzemeltetési és hálózati komplexitásnak tartottuk az esettanulmányhoz képest. A tiszta monolit egyszerűbb lenne, de a szavazási csúcsterhelés célzott kezelését gyengébben támogatná. A moduláris monolit erős alternatíva, de a futtatási és skálázási határok kevésbé választhatók szét.

Ezért jutottunk el a hibrid Service-Based Architecture és Event-Driven Architecture kombinációjához. A javasolt irányban a szavazás, a pályázatkezelés és az adminisztratív képességek szolgáltatási határok mentén elkülöníthetők, miközben a rendszer nem válik indokolatlanul sok apró, drágán üzemeltethető mikroszolgáltatásból álló struktúrává. Az eseményvezérelt rész pedig azokat a folyamatokat kezeli, ahol a laza csatolás és az aszinkron feldolgozás valódi előnyt jelent.

A dokumentációban ezt a logikát igyekeztünk végig következetesen felépíteni. Az SRS rögzíti a működési és minőségi követelményeket, az architekturális karakterisztikák kijelölik a fő tervezési prioritásokat, az ASR-ek elkülönítik a valóban architektúrát formáló követelményeket, a stílusválasztás pedig bemutatja az elvetett és elfogadott irányokat.

Az ADR-ekben a fő döntéseket külön is dokumentáltuk: a hibrid architektúrát, a service-based megközelítést, az eseményvezérelt háttérfolyamatokat, az üzenetbroker lehetséges kiválasztását, valamint a szavazatok integritásának és pszeudonimizált tárolásának döntését. A C4 modell ezekhez vizuális szerkezeti nézetet ad, az implementációs javaslatok pedig elkülönítik a lehetséges technológiai irányokat a követelményektől.

Fontosnak tartottuk, hogy a technológiák ne végleges implementációs vállalásként jelenjenek meg. A dokumentációban például PostgreSQL-jellegű tranzakciós adatbázis, Kafka-jellegű eseményfolyam, Redis-jellegű gyorsítótár vagy S3-kompatibilis objektumtár lehetséges opcióként szerepel. Ezek nem önálló célok, hanem a megfogalmazott architekturális problémákra adott indokolt technológiai irányok.

Összességében a Community Choice-ra egy olyan architekturális tervet javasoltunk, amely a szavazási integritást erős konzisztenciával védi, a személyesadat-kitettséget pszeudonimizálással csökkenti, a háttérfolyamatokat leválasztja a kritikus útvonalakról, és a skálázást nem általánosan, hanem célzottan kezeli.

A fő eredményünk tehát nem egy konkrét technológiai stack kijelölése, hanem egy követhető döntési lánc: az esettanulmányból azonosított minőségi elvárásokból vezettük le az architekturális karakterisztikákat, azokból az ASR-eket, majd ezek alapján a stílusválasztást, a C4 modellt és az ADR-eket.

Köszönjük a figyelmet, várjuk a kérdéseket.
