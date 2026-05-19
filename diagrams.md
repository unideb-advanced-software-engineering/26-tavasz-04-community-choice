# Prezentációs diagramok

## 1. Szinkron makroszolgáltatások

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {
  'background': '#fafaf9',
  'primaryColor': '#dcfce7',
  'primaryTextColor': '#1c1917',
  'primaryBorderColor': '#16a34a',
  'lineColor': '#57534e',
  'secondaryColor': '#dbeafe',
  'secondaryTextColor': '#1c1917',
  'secondaryBorderColor': '#2563eb',
  'tertiaryColor': '#f5e6d0',
  'tertiaryBorderColor': '#a87830'
}}}%%
flowchart LR
    U[Felhasználó] --> WEB[Web felület]
    WEB --> API[API / BFF]
    API --> S1[Szavazási szolgáltatás]
    API --> S2[Admin szolgáltatás]
    S1 --> DB[(Adatbázis)]
    S2 --> DB

    class WEB,API,S1,S2 sync;
    class DB support;
    classDef sync fill:#dcfce7,stroke:#16a34a,color:#1c1917,stroke-width:2px;
    classDef support fill:#f5f5f4,stroke:#a8a29e,color:#1c1917;
```

## 2. Eseményvezérelt háttérfolyamatok

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {
  'background': '#fafaf9',
  'primaryColor': '#dbeafe',
  'primaryTextColor': '#1c1917',
  'primaryBorderColor': '#2563eb',
  'lineColor': '#57534e',
  'secondaryColor': '#dcfce7',
  'secondaryTextColor': '#1c1917',
  'secondaryBorderColor': '#16a34a',
  'tertiaryColor': '#f5e6d0',
  'tertiaryBorderColor': '#a87830'
}}}%%
flowchart LR
    APP[Alapszolgáltatások] --> EVT[[Események]]
    EVT --> W1[Médiafeldolgozó]
    EVT --> W2[Audit]
    EVT --> W3[Értesítések]

    class EVT,W1,W2,W3 async;
    class APP,OUT support;
    classDef async fill:#dbeafe,stroke:#2563eb,color:#1c1917,stroke-width:2px;
    classDef support fill:#f5f5f4,stroke:#a8a29e,color:#1c1917;
```

## 3. Valós idejű jogosultság-ellenőrzés problémája

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {
  'background': '#fafaf9',
  'primaryColor': '#f5f5f4',
  'primaryTextColor': '#1c1917',
  'primaryBorderColor': '#a8a29e',
  'lineColor': '#57534e',
  'secondaryColor': '#fef9c3',
  'secondaryTextColor': '#1c1917',
  'secondaryBorderColor': '#eab308',
  'tertiaryColor': '#fef2f2',
  'tertiaryBorderColor': '#991b1b'
}}}%%
flowchart TB
    A[Sok egyidejű belépés<br/>kampányhajrában] --> B[Valós idejű jogosultság-ellenőrzés<br/>minden kérésnél]
    B --> C[Szinkron hívás a Zamunda One felé]
    B --> D[Adminisztratív kiértékelés]
    C --> E[Terhelési torlódás<br/>a kritikus útvonalon]
    D --> F[Jogosultság közben is változhat<br/>pl. költözés miatt]
    E --> G[Belassulás vagy összeomlás]
    F --> H[Időbeli inkonzisztencia]

    class A,B support;
    class C,D warning;
    class E,F,G,H risk;
    classDef support fill:#f5f5f4,stroke:#a8a29e,color:#1c1917;
    classDef warning fill:#fef9c3,stroke:#eab308,color:#1c1917,stroke-width:2px;
    classDef risk fill:#fef2f2,stroke:#991b1b,color:#1c1917,stroke-width:2px;
```

## 4. Megváltoztathatatlan jogosultsági pillanatkép

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {
  'background': '#fafaf9',
  'primaryColor': '#dbeafe',
  'primaryTextColor': '#1c1917',
  'primaryBorderColor': '#2563eb',
  'lineColor': '#57534e',
  'secondaryColor': '#dcfce7',
  'secondaryTextColor': '#1c1917',
  'secondaryBorderColor': '#16a34a',
  'tertiaryColor': '#fef9c3',
  'tertiaryBorderColor': '#eab308'
}}}%%
flowchart TB
    Z[Zamunda One<br/>profil + lakcím] --> P[Előkészítés<br/>kampány előtt]
    P --> S[(campaign_eligibility)]

    U[Felhasználó] --> C{Van snapshot?}
    C -- nincs --> F[Első aktív interakció]
    F -- Zamunda One alapú cím ellenőrzés --> S
    C -- igen --> S

    S --> R[Szavazás / ötletküldés]
    U --> V[Publikus megtekintés]

    M[Költözés kampány közben] --> X[Publikus láthatóság marad,<br/>új aktív jog nem jár]

    class Z,P,F prep;
    class S snapshot;
    class C,R,V support;
    class M,X rule;
    classDef prep fill:#dbeafe,stroke:#2563eb,color:#1c1917,stroke-width:2px;
    classDef snapshot fill:#dcfce7,stroke:#16a34a,color:#1c1917,stroke-width:2px;
    classDef support fill:#f5f5f4,stroke:#a8a29e,color:#1c1917;
    classDef rule fill:#fef9c3,stroke:#eab308,color:#1c1917,stroke-width:2px;
```
