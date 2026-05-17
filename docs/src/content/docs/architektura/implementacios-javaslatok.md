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

- Instabil hálózati kapcsolat esetén a fotók és videók feltöltése darabolt, megszakítás után folytatható S3-kompatibilis multipart upload mechanizmussal kezelhető.
- A backend csak presigned upload URL-t és objektumkulcsot adjon ki; a kliens a nagy bináris állományt közvetlenül az objektumtárba töltse fel.
- A Kafka üzenetek csak objektumtárbeli hivatkozást, metaadatot és feldolgozási paramétereket tartalmazzanak, ne magát a médiafájlt.
- A feltöltött képek WebP, a videók WebM változatra alakíthatók, ha a minőség és böngészőtámogatás alapján ez indokolt.
- A médiatartalmak kiszolgálása történhet közvetlenül az optimalizált média bucketből, vagy forgalmi és költségadatok alapján opcionális CDN / edge cache rétegen keresztül.
- A médiafeldolgozás fusson a felhasználói kérés kritikus útján kívül, aszinkron háttérfolyamatban.

## Gyorsítótárazás

- A ritkán változó publikus adatok, például a nyitott pályázatok listája vagy a településlista, szerveroldali memóriagyorsítótárból szolgálhatók ki, ha a konzisztenciaigény ezt megengedi.
- Redis használható cache célra, de a végleges döntést az üzemeltetési költség, konzisztenciaigény és rendelkezésre állási követelmény alapján kell meghozni.

## Szavazati integritás

- A szavazatok elsődleges igazságforrása PostgreSQL tranzakciós tároló lehet.
- A leadott szavazatok módosításának és törlésének tiltása megvalósítható csak hozzáfűzhető szavazati tranzakciónaplóval, adatbázis-szintű jogosultságokkal és `UPDATE` / `DELETE` tiltással.
- Az „egy felhasználó egy ötletre egyszer” szabályt adatbázis-szintű egyediségi szabály, például `UNIQUE(idea_id, voter_key)` jellegű constraint védheti.
- A nyers személyes azonosító helyett determinisztikus, pszeudonimizált szavazói kulcs használható.
- A pszeudonimizált kulcs HMAC-alapú képzése jó jelölt, ha a kulcsképzéshez szükséges titok kizárólag a szavazási komponens számára hozzáférhető.

## Eseménykezelés és audit

- Kafka használható audit és integrációs eseményfolyamként, miközben a szavazatok elsődleges igazságforrása továbbra is a tranzakciós adatbázis marad.
- A szavazat leadása, ötlet beküldése és adminisztrátori beavatkozás domain eseményként publikálható külön Kafka topicokba.
- Az audit, értesítés és médiafeldolgozás egymástól független fogyasztóként működhet, hogy ezek lassulása ne akadályozza a szavazási vagy pályázatkezelési kéréseket.
- A megbízható eseménypublikáláshoz outbox jellegű minta alkalmazható, ha az adatbázis-tranzakció és az eseménykibocsátás konzisztenciáját garantálni kell.
