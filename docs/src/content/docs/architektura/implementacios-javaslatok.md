---
title: Implementációs javaslatok
description: A követelményekből leválasztott technológiai és megvalósítási javaslatok gyűjtőoldala
---

Ez az oldal azokat a technológiai részleteket gyűjti, amelyek hasznos tervezési javaslatok, de nem önálló SRS-követelmények. A követelmények oldalon az üzleti vagy minőségi elvárás szerepel, itt pedig az egyik lehetséges megvalósítási irány.

## Hitelesítés és külső integráció

- A Zamunda One integráció megvalósítható HTTPS-alapú, tokenes megoldással.
- Ha a Zamunda One támogatja, érdemes OAuth 2.0 / OpenID Connect jellegű folyamatot használni.
- A kliens és backend közötti adatcsere RESTful API-kon és JSON üzenetformátumon alapulhat, amennyiben ez illeszkedik a végleges API-szerződéshez.

## Peremvédelem és API belépési pont

- A publikus webes forgalom dedikált API Gateway rétegen keresztül érkezzen, ne közvetlenül a NestJS BFF vagy domain szolgáltatások felé.
- A gateway felelőssége a TLS termináció, routing, request size limitek, durva rate limiting, alapvető DDoS/abuse szűrés, biztonsági fejlécek és JWT formai/JWKS-alapú elővalidálás.
- A gateway implementációfüggetlen döntés: önmenedzselt környezetben Traefik vagy Nginx javasolt, plugin-orientált gateway igénynél Kong, felhőben natív API gateway/load balancer is megfelelő lehet.
- A NestJS BFF maradjon alkalmazási belépési pont az üzleti jogosultság, lakcím-alapú ellenőrzés, API-összeállítás és domain-specifikus hibakezelés számára.

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
- A kampányhoz kötött lakcímjogosultságot `campaign_eligibility` pillanatkép táblában kell rögzíteni `user_id_hash`, kampányazonosító, önkormányzati azonosító, jogosultsági döntés, snapshot időpont és - ha a Zamunda One API-ból lekérhető - lakcím-módosítási dátum/időbélyeg mezőkkel; nyers lakcímet vagy nyers személyes azonosítót ez a tábla sem tárolhat (lásd [ADR-010](../adrs/adr-010/)).
- A `user_id_hash` értéket HashiCorp Vault Transit HMAC-kal javasolt képezni egy dedikált, például `zdr-eligibility-pepper` kulccsal. A NestJS BFF vagy a jogosultsági pillanatképet létrehozó NestJS szolgáltatás a nyers Zamunda One ID-t elküldi a Vault Transit HMAC API-nak, majd kizárólag a visszakapott HMAC értéket menti. A pepper nem hagyja el a Vault memóriáját (lásd [ADR-007](../adrs/adr-007/)).
- Ez a szinkron Vault-hívás nem része minden szavazatleadásnak: csak a jogosultsági pillanatkép létrehozásakor történik meg felhasználónként és kampányonként, ezért nem várható szűk keresztmetszetnek a szavazási csúcsidőszakban.
- Az „egy felhasználó egy ötletre egyszer” szabályt adatbázis-szintű egyediségi szabály védi; particionált szavazati táblánál például `UNIQUE(campaign_id, idea_id, voter_key)`.
- A nyers személyes azonosító helyett determinisztikus, pszeudonimizált szavazói kulcs használatos.
- A kampány-mesterkulcs KMS/Vault Transit jellegű kulcskezelésben él; a szavazási kritikus útban a pod illékony memóriában tartott rövid élettartamú kampánykulcsból számolja a HMAC-et.
- A nyers kampány-mesterkulcs nem kerülhet `.env` fájlba, CI/CD változóba, alkalmazáslogba vagy lemezre; a rövid élettartamú kulcs TTL-je és rotációja üzemeltetési szabály.
- A szavazati tranzakciónaplót `campaign_id` szerint particionálni kell, hogy a kampányzárási írási terhelés kisebb indexeken fusson.
- Az alkalmazásszolgáltatások és a PostgreSQL között PgBouncer vagy kompatibilis connection pooler szükséges, szolgáltatásonként korlátozott poolokkal.

## Eseménykezelés és audit

- Az audit és integrációs eseményfolyam tartós event streamként működik; induló profilban NATS JetStream, országos/nagy replay profilban Kafka alkalmazható.
- A szavazat leadása, ötlet beküldése és adminisztrátori beavatkozás domain eseményként külön streamekbe kerül.
- Az audit, értesítés és médiafeldolgozás egymástól független fogyasztóként működhet, hogy ezek lassulása ne akadályozza a szavazási vagy pályázatkezelési kéréseket.
- A szavazási auditfolyamnál a megbízható eseménypublikálás kötelező transactional outbox mintával történik: a Szavazási szolgáltatás PostgreSQL tranzakcióban ír, valamint saját outbox relay worker publikál NATS JetStreambe.

## Későbbi opció: ötlet-deduplikáció RAG/pgvector alapon

- Az adminisztratív moderáció tehermentesítésére későbbi bővítésként lokális embedding modell és PostgreSQL `pgvector` használható.
- Az ötletbeküldés közben a rendszer hasonló korábbi ötleteket ajánlhat fel, például „ezt már többen javasolták, inkább támogasd a meglévő ötletet” jellegű UX-szel.
- Ez nem v1 kritikus követelmény: nem blokkolhatja az ötletbeküldést, és alapértelmezetten nem támaszkodik külső AI API-ra.
