Pitch szöveg

Tisztelt Bizottság, a szoftvertervezés tárgy keretében a Community Choice rendszert terveztük meg. Ez egy közösségi javaslattételi és szavazási platform a Zamunda Digitális Reneszánsz programhoz.

A rendszer célja, hogy a lakosok helyi fejlesztési ötleteket tudjanak beküldeni, majd a saját lakóhelyükhöz tartozó kampányokban hitelesen szavazhassanak. Ilyen ötlet lehet például egy új zöldfelület, közösségi tér, pad, kerékpártároló vagy bármilyen kisebb helyi fejlesztés.

A felhasználói folyamatot három szóban foglaltuk össze: javasolj, szavazz, megvalósul. A lakos azonosítja magát, beküld egy probléma-megoldás alapú ötletet, a helyi közösség szavaz, az önkormányzat pedig végig követhető állapotokon keresztül kezeli a pályázat életciklusát.

A tervezésnél nem technológiából indultunk ki, hanem a rendszer felelősségéből. Ez nem egy egyszerű ötletgyűjtő felület, hanem közbizalmi rendszer. Ezért három alapelvet rögzítettünk: csak jogosult lakos vehessen részt az adott kampányban, egy ötletre egy felhasználó csak egyszer szavazhasson, és a leadott szavazat utólag ne legyen módosítható vagy törölhető.

Ezekből következett az első fontos döntés: a szavazás nem kerülhet laza, később feldolgozott folyamatba. A szavazat leadásakor azonnali, erős konzisztenciára van szükség. Ezért a kritikus szavazási út szinkron, és relációs adatbázis-garanciákra épül. A jogosultságellenőrzés lakcím alapján történik, a szavazat pedig csak hozzáfűzhető tranzakciónaplóba kerül. A duplikált szavazást adatbázis-szintű egyediségi szabály akadályozza meg, a módosítást és törlést pedig szintén adatbázis-szinten tiltjuk.

Ez a döntés azért fontos, mert a szavazati integritást nem felületi szabályokra bízzuk. Nem az a garancia, hogy az adminisztrációs felületen nincs törlés gomb, hanem az, hogy a rendszer adatmodellje és perzisztencia-rétege sem engedi a szavazat utólagos átírását.

A második döntés az volt, hogy nem mindent kell ugyanazon a kritikus úton kezelni. A médiafeltöltés, a videófeldolgozás, az értesítések és az auditnaplózás természetük szerint háttérfolyamatok. Ezeknél nem az a cél, hogy a szavazási kérés részeként azonnal minden megtörténjen, hanem az, hogy megbízhatóan, újrapróbálhatóan és a szavazástól függetlenül fussanak le.

Ezért választottunk hibrid szolgáltatásalapú architektúrát eseményvezérelt kiegészítéssel. A szolgáltatásalapú rész jól illik a fő üzleti képességekhez: kampánykezelés, szavazás, adminisztráció, értesítés, audit. Az eseményvezérelt rész pedig azokhoz a folyamatokhoz illik, ahol a leválasztás növeli a robusztusságot. Egy Kafka-szerű üzenetbroker például erős jelölt erre, mert a háttérfeldolgozást leválasztja a felhasználói kérésekről, és kezelhetővé teszi a fogyasztók lassulását vagy újraindítását.

A harmadik döntés a skálázásról szólt. Egy teljes mikroszolgáltatásos rendszer ehhez a feladathoz túl sok üzemeltetési és hálózati többletet hozna. Egy tiszta monolit ezzel szemben egyszerű lenne, de szavazási csúcsidőben az egész rendszert kellene skálázni, nem csak azt a részt, amelyik ténylegesen terhelődik. A hibrid szolgáltatásalapú megközelítés köztes, praktikus megoldás: a fontos domain részek külön kezelhetők, de a rendszer nem válik indokolatlanul széttördelté.

A technológiákat ezért nem végleges terméklistaként kezeltük, hanem megvalósítási jelöltekként. A dokumentációban szereplő React és TypeScript, Node.js és NestJS, PostgreSQL, Redis, Kafka, MinIO vagy CDN mind olyan opciók, amelyek illeszkednek a megtervezett architektúrához. A lényeg azonban nem önmagában ezek kiválasztása, hanem az, hogy a döntések mögött világos tervezési indok áll: integritás a szavazásnál, leválasztás a háttérfolyamatoknál, és célzott skálázás a terhelési csúcsoknál.

A projektmunkában elkészítettük a követelményspecifikációt, az architekturális karakterisztikákat, a C4 modellt és az ADR-eket. Ezek együtt azt mutatják be, hogy a rendszerterv követelményekből épül fel: először meghatároztuk, mi számít lényegesnek, majd ehhez választottunk architekturális stílust, adatkezelési szabályokat és technológiai jelölteket.

Összefoglalva: a Community Choice egy lakcímhez kötött, hiteles közösségi döntéstámogató platform terve. A szavazás integritását erős, szinkron adatréteg védi, a háttérfolyamatok eseményvezérelten leválaszthatók, a rendszer pedig úgy skálázható, hogy közben takarékos és átlátható marad.

Köszönjük a figyelmet, várjuk a kérdéseket.
