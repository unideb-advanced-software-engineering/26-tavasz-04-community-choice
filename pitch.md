Pitch szöveg 

Sziasztok, a projektünk a Community Choice, egy Zamunda Digitális Reneszánsz programba illeszkedő közösségi javaslattételi és szavazási platform. 

A kiinduló probléma az volt, hogy Zamundában szükség van egy hiteles, egységes digitális csatornára, ahol a lakosok helyi fejlesztési ötleteket adhatnak be, majd ezekre lakcím alapján jogosultan szavazhatnak. A valós analógia a közösségi költségvetés: például zöldfelületek, közösségi terek, padok vagy kerékpártárolók kezdeményezése. 

A platform lényege három lépésben összefoglalható: javasolj, szavazz, megvalósul. A lakos probléma-megoldás formában beküld egy ötletet, a helyi lakosok szavaznak rá, majd a pályázat és az ötlet teljes életciklusa követhető marad. 

A rendszer nagyjából 10 millió zamundai állampolgárral számol, emellett közigazgatási adminisztrátorokkal és technikai super user szerepkörrel. A legfontosabb scope-döntés, hogy a jogosultság lakcímhez kötött: csak az adott önkormányzat lakosai adhatnak be ötletet és szavazhatnak az adott kampányban. 

A legnehezebb követelmények nem a klasszikus CRUD műveletek voltak, hanem az integritás és az üzemeltetési környezet. Egy felhasználó egy ötletre csak egyszer szavazhat, a leadott szavazat nem módosítható és nem törölhető, közben pedig a szavazati rekord nem tartalmazhat nyers személyes azonosítót. Emellett Zamunda egyes régióiban alacsony sávszélességgel és magas késleltetéssel kell számolni, a ZDR program pedig takarékos és klímabarát működést vár el. 

Ezért az architekturális döntést nem divat alapján hoztuk meg. A fő karakterisztikák az integritás, hatékonyság, robusztusság és elaszticitás voltak. A mikroszolgáltatásokat elvetettük, mert túl nagy üzemeltetési és hálózati overheadet hoznának. A tiszta monolitot sem választottuk, mert szavazási csúcsidőben az egész rendszert kellene skálázni, ami pazarló. 

A választott megoldás egy hibrid szolgáltatásalapú architektúra eseményvezérelt kiegészítéssel. Az SBA adja a fő domain szolgáltatásokat, például a szavazási és kampánykezelési szolgáltatást, az EDA pedig az aszinkron részeket: médiafeldolgozás, értesítések és auditnaplózás. 

A rendszerben a kritikus szavazási út szinkron. A szavazat elsődleges igazságforrása PostgreSQL. A Szavazási szolgáltatás ellenőrzi a jogosultságot a Zamunda One integráción keresztül, HMAC-alapú pszeudonimizált voter_key-t képez, majd a szavazatot append-only tranzakciónaplóban tárolja. A duplikációt adatbázis-szintű unique constraint védi, az update és delete műveletek pedig adatbázis-szinten tiltottak. 

Ez azért fontos, mert a megmásíthatatlanság nem csak alkalmazásszintű szabály. Nem arról van szó, hogy az admin felület nem kínál törlés gombot, hanem arról, hogy a rendszer technológiai szinten sem engedi a szavazat törlését vagy módosítását. 

Az aszinkron részeket különválasztottuk. A médiafeltöltés, a videótömörítés, az értesítések és az auditnaplózás Kafka-alapú eseményfolyamon keresztül működik. Így egy videófeldolgozási hullám, egy lassú értesítési szolgáltatás vagy egy audit consumer késése nem lassítja a szavazási kéréseket. 

A technológiai stack ehhez React és TypeScript frontendből, NestJS backend szolgáltatásokból, PostgreSQL adatbázisból, Redis cache-ből, Kafka üzenetbrokerből, MinIO/CDN média kiszolgálásból és Zamunda One OAuth2/OIDC integrációból áll. Az ADR-ek dokumentálják, hogy miért ezeket a döntéseket hoztuk meg. 

Összefoglalva: a Community Choice egy hiteles közösségi döntéstámogató platform, ahol a kritikus szavazási integritást erős, szinkron adatbázis-garanciák védik, míg a lassabb és erőforrás-igényes folyamatok aszinkron háttérfeldolgozásba kerülnek. Így a rendszer egyszerre marad megbízható, skálázható, takarékos és jól dokumentált. 

Köszönjük a figyelmet, várjuk a kérdéseket. 

 