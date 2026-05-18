# Community Choice védés — Mermaid diagramforrások

Ezek a diagramok a `community-choice-vedes.html` prezentáció vizuális ábráinak Mermaid-verziói. A színek a `design/brand-styleguide.html` palettájához igazodnak.

## 1. Architekturális döntési tér

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#dcfce7', 'primaryBorderColor': '#15803d', 'primaryTextColor': '#1c1917', 'lineColor': '#a87830', 'secondaryColor': '#dbeafe', 'tertiaryColor': '#fef9c3', 'fontFamily': 'Inter'}}}%%
graph LR
  Problem["Közbizalmi platform\n+ csúcsforgalom\n+ takarékosság"]
  Monolith["Monolit\nEgyszerű, de csúcsnál pazarló"]
  Micro["Teljes microservices\nSkálázható, de túl komplex"]
  Hybrid["Hibrid SBA + EDA\nArányos, célzott skálázás"]

  Problem --> Monolith
  Problem --> Micro
  Monolith -. elvetve .-> Hybrid
  Micro -. elvetve .-> Hybrid

  classDef chosen fill:#dcfce7,stroke:#15803d,stroke-width:3px,color:#14532d;
  classDef rejected fill:#fafaf9,stroke:#d6d3d1,color:#57534e;
  classDef problem fill:#fef9c3,stroke:#ca8a04,color:#713f12;
  class Hybrid chosen;
  class Monolith,Micro rejected;
  class Problem problem;
```

## 2. C4 / konténer nézet

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f0fdf4', 'primaryBorderColor': '#22c55e', 'lineColor': '#78716c', 'fontFamily': 'Inter'}}}%%
graph TB
  User["Lakos / Admin"] --> Web["React + TypeScript webalkalmazás"]
  Web --> Vote["Voting Service\nNestJS"]
  Web --> Campaign["Campaign/Admin Service\nNestJS"]
  Vote --> Auth["Zamunda One\nOAuth2/OIDC"]
  Vote --> Pg[("PostgreSQL\ntruth source")]
  Campaign --> Pg
  Vote --> Kafka[("Kafka\naudit/events")]
  Campaign --> Kafka
  Kafka --> Media["Media worker"]
  Kafka --> Notify["Notification service"]
  Kafka --> Audit["Audit consumer"]
  Media --> Minio[("MinIO / CDN")]
  Vote --> Redis[("Redis cache")]

  classDef service fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d;
  classDef data fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a;
  classDef external fill:#fdf8f0,stroke:#a87830,stroke-width:2px,color:#6d4c18;
  classDef queue fill:#fef9c3,stroke:#eab308,stroke-width:2px,color:#713f12;
  class Vote,Campaign,Media,Notify,Audit service;
  class Pg,Redis,Minio data;
  class Auth,User external;
  class Kafka queue;
```

## 3. Jogosultsági pillanatkép

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#dcfce7', 'primaryBorderColor': '#15803d', 'actorBkg': '#fdf8f0', 'actorBorder': '#a87830', 'lineColor': '#57534e', 'fontFamily': 'Inter'}}}%%
sequenceDiagram
  actor Lakos
  participant Platform as Community Choice
  participant Z1 as Zamunda One
  participant DB as PostgreSQL

  Lakos->>Platform: Első interakció kampányban
  Platform->>Z1: Lakcím + utolsó módosítás időbélyeg lekérése
  Z1-->>Platform: Hiteles lakcímadat
  Platform->>DB: Eligibility Snapshot mentése
  Note over DB: Digitális választási névjegyzék
  Lakos->>Z1: Kampány közben átjelentkezik
  Lakos->>Platform: Új szavazási próbálkozás
  Platform->>DB: Snapshot alapján jogosultság ellenőrzés
  DB-->>Platform: Spekulatív duplázás blokkolva
```

## 4. Paranoiás pszeudonimizáció KMS pepperrel

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f0fdf4', 'primaryBorderColor': '#15803d', 'secondaryColor': '#292524', 'tertiaryColor': '#dbeafe', 'lineColor': '#a87830', 'fontFamily': 'Inter'}}}%%
graph LR
  UserCtx["user_context\n+ campaign_context"] --> HMAC["HMAC-SHA256"]
  KMS["KMS\nGlobal Pepper\n(nem kerül DB-be)"] --> HMAC
  HMAC --> Key["voter_key\npszeudonim"]
  Key --> Vote["vote record"]
  Key --> Unique["UNIQUE(idea_id, voter_key)"]

  Leak["DB leak"] -. nem elég .-> PlainHash["sima SHA-256\nrainbow table kockázat"]
  Leak -. továbbra is védett .-> Key

  classDef safe fill:#dcfce7,stroke:#15803d,stroke-width:2px,color:#14532d;
  classDef secret fill:#292524,stroke:#292524,color:#ffffff;
  classDef risk fill:#fef2f2,stroke:#991b1b,color:#991b1b;
  class Key,Vote,Unique,HMAC safe;
  class KMS secret;
  class Leak,PlainHash risk;
```

## 5. Transactional Outbox + CDC

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#dcfce7', 'primaryBorderColor': '#15803d', 'secondaryColor': '#dbeafe', 'tertiaryColor': '#fef9c3', 'lineColor': '#15803d', 'fontFamily': 'Inter'}}}%%
graph LR
  VoteService["Vote Service"] --> Tx["Egyetlen DB tranzakció"]
  Tx --> Votes[("votes\nimmutable row")]
  Tx --> Outbox[("outbox\naudit event")]
  Outbox --> CDC["CDC komponens"]
  CDC --> Kafka[("Kafka\ntartós audit stream")]
  Kafka --> Audit["Audit / replay"]

  Broken["Dual-write hiba:\nDB OK, broker fail"] -. kiváltva .-> Tx

  classDef tx fill:#dcfce7,stroke:#15803d,stroke-width:3px,color:#14532d;
  classDef data fill:#dbeafe,stroke:#2563eb,color:#1e3a8a;
  classDef queue fill:#fef9c3,stroke:#eab308,color:#713f12;
  classDef bad fill:#fef2f2,stroke:#991b1b,color:#991b1b;
  class VoteService,Tx,CDC,Audit tx;
  class Votes data;
  class Outbox,Kafka queue;
  class Broken bad;
```
