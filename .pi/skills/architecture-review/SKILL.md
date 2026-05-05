---
name: architecture-review
description: Community Choice architektúra, ADR-ek, ASR-ek és stílusválasztás szakmai ellenőrzése. Használd architekturális döntések, trade-offok, követelmények és konzisztencia vizsgálatakor.
---

# Architecture Review

## Referencia architektúra

A jelenlegi döntés: **hibrid Service-Based Architecture (SBA) + Event-Driven Architecture (EDA)**.

Fő elemek:
- React + TypeScript webalkalmazás.
- Node.js + NestJS szolgáltatások.
- Szavazási szolgáltatás külön skálázható terhelési csúcsokra.
- Pályázat- és adminisztrációkezelő szolgáltatás ötletekhez, médiához, moderációhoz.
- Kafka üzenetbroker domain eseményekhez és médiafeldolgozáshoz.
- Médiafeldolgozó worker Sharp/FFmpeg jellegű feldolgozással.
- PostgreSQL relációs adatbázis, Redis gyorsítótár/rate limit/idempotency, MinIO + CDN médiához.
- Zamunda One külső OIDC/REST azonosítás és lakcím/jogosultság ellenőrzés.

## Ellenőrzési szempontok

1. Követelménykapcsolat:
   - hatékonyság,
   - integritás,
   - robusztusság,
   - elaszticitás,
   - klímabarát/takarékos működés,
   - alacsony sávszélesség és instabil hálózat.
2. Trade-offok:
   - miért nem microservices,
   - miért nem teljes EDA,
   - miért nem tiszta moduláris monolit,
   - hol indokolt az SBA és hol az EDA.
3. Integritás:
   - szavazatok append-only jellegű kezelése,
   - idempotencia és rate limit,
   - auditálhatóság,
   - adminisztrátori módosíthatatlanság.
4. Üzemeltethetőség:
   - skálázás csak kritikus komponenseken,
   - aszinkron médiafeldolgozás,
   - monitoring/audit/értesítés különválasztása.

## Output minta

- Rövid összegzés.
- Talált inkonzisztenciák fájlútvonallal.
- Javasolt módosítások prioritással.
- Ha módosítasz, ellenőrizd a dokumentáció buildjét, amikor lehetséges.
