# Noted

Magyarázatok, amik chaten hangzottak el, de érdemes megjegyezni.

---

## Miért bonyolultabb a Kafka üzemeltetése a RabbitMQ-nál?

**Kérdés:** Az ADR-004 megemlíti, hogy a Kafka üzemeltetési komplexitása magasabb (broker klaszter, ZooKeeper vagy KRaft mód) — ezt mire kell érteni?

**Válasz:** A Kafka nem egyetlen processz, hanem klaszterben fut — több broker node-ból áll, amelyek együtt kezelik a partíciókat és a replikációt. Ehhez koordinációs réteg is kell:

- **ZooKeeper** (régebbi Kafka verziókban): külön service, ami a klaszter metaadatait és a leader-választást kezeli — önmagában egy külön rendszer
- **KRaft mód** (Kafka 3.x+): a ZooKeeper kiváltója, a Kafka beépítve kezeli a koordinációt — egyszerűbb, de más konfigurációt igényel

RabbitMQ-nál ezzel szemben elindítasz egy processzt és kész; fejlesztői környezetben egyetlen Docker konténer elég. Kafkánál lokálisan is minimum egy broker + KRaft (vagy ZooKeeper) kell, prodban pedig minimum 3 brokert szokás futtatni a fault tolerance miatt.

**Összefoglalva:** Kafka erősebb, de több mozgó alkatrész, több konfiguráció és több üzemeltetési tudás kell hozzá.
