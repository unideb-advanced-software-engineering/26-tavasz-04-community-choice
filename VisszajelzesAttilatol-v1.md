# SRS

 > A személyes adatok kezelésénél GDPR-kompatibilis és adatminimalizáló
megközelítést kell alkalmazni.

A GDPR-kompatibilitás nem egy feltétlenül adott korlát, hiszen nem
beszélünk EU-tagállamról. Ettől függetlenül, mint önkorlátozás jó
választás lehet!

 > A pályázati költségvetési keretek kezelése és a keretek kimerülésének
nyomon követése nem része az első verzió hatókörének.

Örülök, hogy a Kiegészítések részből ez explicit módon átkerült; nagyon
szuper!

 > A pályázati életciklus például az alábbi állapotokat tartalmazhatja:
tervezés alatt, ötletbeküldési szakasz, szavazási szakasz, lezárt,
kiértékelés alatt, megvalósuló.

Feltételes mód helyett érdemes lehet konkrétan megkötni, hogy az
életciklus milyen állapotokból áll. Sőt, érdemes lehet egy
állapotátmeneti-diagramot készíteni.

 > F-PK-03: A rendszer publikus, optimalizált, alacsony hálózati
terhelésű listanézetet biztosít a felhasználók számára a pályázatok
böngészéséhez.

Ez sajnos nem lesz funkcionális követelmény, hiszen a pályázatok
megtekintésének milyenségét írja le: optimalizált, alacsony hálózati
terhelésű. Ezt más formában kell megkötni.

 > F-SZ-04: A rendszer a leadott szavazatokat PostgreSQL-alapú, csak
hozzáfűzhető szavazati tranzakciónaplóban tárolja. A módosítást és
törlést adatbázis-szintű jogosultságokkal és védelmi mechanizmusokkal
tiltja.

Ez inkább egy implementációs részlet, semmint követelmény. A követelmény
csupán annyi, hogy ne lehssen "csak úgy" törölni szavazatokat.

 > F-SZ-05: A rendszer a szavazatokat pszeudonimizált szavazói kulccsal
kapcsolja az ötletekhez. A szavazati rekord nem tartalmaz nyers
személyes azonosítót, ugyanakkor a pszeudonim kulcs lehetővé teszi az
egy ötletre egyszeri szavazás adatbázis-szintű ellenőrzését.

Ez is billeg egy kicsit az implementációs részlet és a valódi, üzleti
követelmény határán. Ugyanakkor el tudom képzelni, hogy konkrétan ilyen
üzleti követelményt kapjunk, szóval maradhat.

 > A webes felület célzott First Contentful Paint értéke a 75.
percentilisnél legfeljebb 1,8 másodperc legyen a támogatott, átlagos
hálózati környezetekben.

Nagyon jól megfogalmazott követelmény, de két dologgal még kiegészíteném:

- Mi az átlagos hálózati környezet?
- A webes felület mely lapjának FCP értéke legyen ennyi? Az összesnek? A
kezdőlapnak?

 > A publikus listanézetek lapozottak, gyorsítótárazhatók és csak a
megjelenítéshez szükséges mezőket adják vissza.

Ebben a formában ez inkább több implementációs megkötés, semmint
egyetlen nemfunkcionális követelmény. Érdemes lehet szétbontani és
valahogy mérhetővé tenni:

- Minőségi jellemző: Hatékonyság
- Inger: A kliens listanézetet kér le.
- Válasz: A rendszer lapozott választ ad vissza.
- Metrika: A válaszméret legfeljebb 100 KB.

 > A rendszer a feltöltött videókat és képeket szerveroldalon
optimalizált webes formátumokra alakítja, például WebM és WebP változatokra.

Ez sokkal inkább funkcionális követelmény és implementációs megkötés. Ha
szeretnétek valamilyen minőségi jellemző felé vinni:

- Minőségi jellemző: Hatékonyság.
- Inger: A kliens képfájlt tölt fel.
- Válasz: A rendszer optimalizált formában tárolja el a képfájlt.
- Metrika: Az optimalizált fájlméret legfeljebb az eredeti méret 70%-a.

 > Használhatóság.

Felvenném ezen felül az akadálymentességet is, hiszen Zamunda
tetszőleges állampolgára azonos feltételek mentén kell, hogy
használhassa a szoftvert.

 > Összességében

A nemfunkcionális részt lehet érdemes finomítani, kicsit mérhetőbben,
kevésbé implementációs szinten megfogalmazni a dolgokat. Gondoljatok az
egyes üzleti folyamatokra (akár funkcionális követelményekre), és
csatoljatok hozzájuk metrikákat.

# Fogalomtár

NAGYON, NAGYON, NAGYON JÓ!

# Karakterisztikák

 > Forgatókönyv: alacsony sávszélességű böngészés

Na, ilyeneket nyugodtan be lehet emelni az SRS-be, s aztán legfeljebb
mindkét helyen megjelennek. Annyit tennék hozzá, hogy a
válaszmérték/metrika lehet konkrétabb.

 > Forgatókönyv: ismételt szavazási kísérlet és adminisztrátori
beavatkozás tiltása

Szuper, hogy konkrétan meg van hivatkozva az ADR. Pontosan így kell
traceabilityt csinálni!

 > Összességében

Szerintem remekül választottátok ki a legfontosabb minőségi jellemzőket.
Ezek mentén valóban olyan rendszert lehet tervezni, mint az elképzelt.

Annyit tennék hozzá, hogy érdemes lehet a "Miért fontos?" részek alá
konkrétan számozva behivatkozni a kapcsolódó funkcionális
követelményeket, esetleg az esettanulmány megfelelő részeit, ezzel
fokozva a traceabilityt.

# Architekturálisan szignifikáns követelmények

Egy kivétellel rendre nagyon szuper választások! Örülök, hogy ennyi
funkcionális követelményt be tudtatok pakolni ide.

 > F-PK-03: Alacsony hálózati terhelésű publikus listanézet

Önmagában ez a követelmény szerintem nem lesz szignifikáns. Sokkal
inkább a hatékonyság és a takarékos működés lesznek szignifikánsak, nem
ez az egyetlen FR. Inkább azoknak a következménye már ez az FR is,
valamint a felsorolt implementációs döntések.

 > F-OB-02 és F-OB-03: Multimédia feltöltés és automatikus tömörítés

Na, ezek viszont abszolút szignifikánsak; kiváló döntés! Egészen más
architektúrát igényelne, ha csak szöveges ötleteket lehetne beküldeni.

 > F-SZ-03, F-SZ-04 és F-SZ-05: Egyedi, megváltoztathatatlan és
pszeudonimizált szavazatok

Ezek is rendben vannak; sok helyen befolyásolják a tervezést.

# Stílusválasztás

Térelemekre épülő architektúrától agyvérzést kaptam.

 > Miért ez a tökéletes választás?

A tökéletes talán túlzó, inkább "Miért ez a megfelelő választás?"

 > Második helyezett: Moduláris monolit

A fault-tolerance/robustness miatt is érdemes elvetni a moduláris
monolitot, hiszen az egy single point of failure. Szóval ha a monolit
bukik, az egész rendszer bukik.
