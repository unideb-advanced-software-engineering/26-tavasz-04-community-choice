# C4 Modell

## Webalkalmazás

Az SRS-ben említettétek, hogy három felhasználói interfész lesz. Úgy gondolom, érdemes lehet itt is szétválasztani, és három felüetet pakolni a C4 modellre, hiszen implementációt tekintve is így lehet előnyös.

## API Gateway

Megfontolandó valamilyen API gateway elhelyezése a backend elé. Az is rendben van, ha a webalkalmazás direktben hívja a PA és a SZ szolgáltatásokat, de autentikáció, rate limiting, stb. miatt jó ötlet lehet egy explicit API gateway megjelenítése.

## Üzenetbróker

Ne a brókert, hanem a topic-okat jelenítsétek meg inkább a diagramon. A bróker inkább egy deployment diagramon lehet érdekes.

https://c4model.com/abstractions/queues-and-topics

## CDN

Nem vagyok teljesen meggyőzve arról, hogy feltétlenül szükséges ilyen szintű CDN, ha csak országon belüli megtekintések várhatók. Ugyanakkor jó megoldás lehet.

## Köztes tár

Úgy gondolom, szükséges lehet valamilyen köztes tár a médiafájlok számára. Nem gondolom jó megoldásnak, hogy nagyméretű állományokat utaztassunk Kafkán, illetve fogadjunk saját webalkalmazásokkal.

Jobb megoldás lehet valami hasonló folyamat:
0. S3-kompatibilis bucket.
1. A webalkalmazás kér egy presigned upload URL-t.
2. A webalkalmazás feltölti a presigned upload URL-en keresztül a fájlt.
3. Vagy valamilyen even triggereli a feldolgozást, vagy a webalkalmazás, vagy egy periodic task. A lényeg, hogy berobban egy üzi Kafkába.
4. A feldolgozó felkapja a fájlt a bucketből.
5. A feldolgozó felküldi az optimalizált fájlt CDN-re/másik bucketbe.
6. Profit.

## Értesítési szolgáltatás

Ha ez a szolgáltatás email/push dolgokat küld, akkor ne felejtsük el ezeket (email/push API) megjeleníteni a diagramon!

# ADR-ek

## ADR-004

>  a Takarékosság ASR értelmében indokolatlan infrastrukturális többletköltség nélkül

Hááááááááááááááát, azért Kafkát üzemeltetni :DDD De egy ekkora célközönséget kiszolgáló szoftvernél belefér!

Szerintem az összehasonlításba még egy pgmq is beleférhet, ha már pg-t eleve használtok.

## ADR-005

Állati jó ötlet a pszeudonimizált tárolás!

Egy dolgot jegyeznék meg: hiányoznak az alternatívák.

Ami csudijó:

Ismét, lenyűgöző, hogy milyen részletességgel oldottátok meg a feladatot!
Nagyon szuper lett a container diagram; a leírások nagyon sokat segítenek!
Tök jó, hogy gondoltatok az implementációra: konkrét technológiák, ajánlások.
Abszolút megvalósíthatónak tűnik ezek alapján a projekt. 
Amit pörgessetek még esetleg:
A követelményeket érdemes lehet átnézni, ahogy korábban írtam.
A container diagram itt-ott módosításra szorul.
Az ADR-ekben legyenek alternatívák. Valódiak!
