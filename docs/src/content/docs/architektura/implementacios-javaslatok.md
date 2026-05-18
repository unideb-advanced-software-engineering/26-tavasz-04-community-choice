---
title: Implementációs javaslatok
description: A követelményekből leválasztott technológiai és megvalósítási javaslatok gyűjtőoldala
---

# Implementációs javaslatok

Ez az oldal azokat a technológiai részleteket gyűjti, amelyek hasznos tervezési javaslatok, de nem önálló SRS-követelmények. A követelmények oldalon az üzleti vagy minőségi elvárás szerepel, itt pedig az egyik lehetséges megvalósítási irány.

## Hitelesítés és külső integráció

- A Zamunda One integráció megvalósítható HTTPS-alapú, tokenes megoldással.
- Ha a Zamunda One támogatja, érdemes OAuth 2.0 / OpenID Connect jellegű folyamatot használni.
- A kliens és backend közötti adatcsere RESTful API-kon és JSON üzenetformátumon alapulhat, amennyiben ez illeszkedik a végleges API-szerződéshez.

## Hálózati hatékonyság

- Magas késleltetésű és alacsony sávszélességű régiókban HTTP/2 vagy HTTP/3 használata csökkentheti a kapcsolatkezelési és multiplexálási költségeket.
- A statikus erőforrásokhoz érdemes szabványos `Cache-Control` fejléceket beállítani.
- A publikus listanézeteknél javasolt a lapozás, a csak szükséges mezők visszaadása és a részletes mezők részletnézetbe helyezése.
- A képek és videók kliensoldali betöltésénél lazy loading alkalmazható, hogy a listaoldal ne töltsön le indokolatlan médiát.

## Médiafeltöltés és médiakiszolgálás

- Instabil hálózati kapcsolat esetén a lakossági ötletmédia és az adminisztrátori pályázati média feltöltése darabolt, megszakítás után folytatható S3-kompatibilis multipart upload mechanizmussal kezelhető.
- A backend csak presigned upload URL-t és objektumkulcsot adjon ki; a kliens a nagy bináris állományt közvetlenül az objektumtárba töltse fel.
- Az event stream üzenetek csak objektumtárbeli hivatkozást, metaadatot és feldolgozási paramétereket tartalmazzanak, ne magát a médiafájlt.
- A feltöltött képek WebP, a videók WebM változatra alakíthatók, ha a minőség és böngészőtámogatás alapján ez indokolt.
- A médiatartalmak kiszolgálása történhet közvetlenül az optimalizált média bucketből, vagy forgalmi és költségadatok alapján opcionális CDN / edge cache rétegen keresztül.
- A médiafeldolgozás fusson a felhasználói kérés kritikus útján kívül, aszinkron háttérfolyamatban.

## Gyorsítótárazás

- A ritkán változó publikus adatok, például a nyitott pályázatok listája vagy a településlista, szerveroldali memóriagyorsítótárból szolgálhatók ki, ha a konzisztenciaigény ezt megengedi.
- Redis használható cache célra, de a végleges döntést az üzemeltetési költség, konzisztenciaigény és rendelkezésre állási követelmény alapján kell meghozni.

## Szavazati integritás

- A szavazatok elsődleges igazságforrása PostgreSQL tranzakciós tároló.
- A leadott szavazatok módosításának és törlésének tiltása csak hozzáfűzhető szavazati tranzakciónaplóval, adatbázis-szintű jogosultságokkal és `UPDATE` / `DELETE` tiltással valósul meg.
- Az „egy felhasználó egy ötletre egyszer” szabályt adatbázis-szintű egyediségi szabály védi; particionált szavazati táblánál például `UNIQUE(campaign_id, idea_id, voter_key)`.
- A nyers személyes azonosító helyett determinisztikus, pszeudonimizált szavazói kulcs használatos.
- A pszeudonimizált kulcs HMAC-alapú képzése KMS/Vault Transit jellegű kulcskezelésre támaszkodik; a nyers HMAC secret nem kerülhet `.env` fájlba vagy CI/CD változóba.
- A szavazati tranzakciónaplót `campaign_id` szerint particionálni kell, hogy a kampányzárási írási terhelés kisebb indexeken fusson.
- Az alkalmazásszolgáltatások és a PostgreSQL között PgBouncer vagy kompatibilis connection pooler szükséges, szolgáltatásonként korlátozott poolokkal.

## Eseménykezelés és audit

- Az audit és integrációs eseményfolyam tartós event streamként működik; induló profilban NATS JetStream, országos/nagy replay profilban Kafka alkalmazható.
- A szavazat leadása, ötlet beküldése és adminisztrátori beavatkozás domain eseményként külön streamekbe kerül.
- Az audit, értesítés és médiafeldolgozás egymástól független fogyasztóként működhet, hogy ezek lassulása ne akadályozza a szavazási vagy pályázatkezelési kéréseket.
- A szavazási auditfolyamnál a megbízható eseménypublikálás kötelező transactional outbox + CDC mintával történik: a Szavazási szolgáltatás PostgreSQL tranzakcióban ír, Debezium vagy kompatibilis CDC relé publikál a streambe.

## Későbbi opció: ötlet-deduplikáció RAG/pgvector alapon

- Az adminisztratív moderáció tehermentesítésére későbbi bővítésként lokális embedding modell és PostgreSQL `pgvector` használható.
- Az ötletbeküldés közben a rendszer hasonló korábbi ötleteket ajánlhat fel, például „ezt már többen javasolták, inkább támogasd a meglévő ötletet” jellegű UX-szel.
- Ez nem v1 kritikus követelmény: nem blokkolhatja az ötletbeküldést, és alapértelmezetten nem támaszkodik külső AI API-ra.
