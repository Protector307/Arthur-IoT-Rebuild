# Document Capture Integrity Gateway documented rebuild

This repository records a new rebuild of an existing Node-RED prototype. Earlier report drafts, exports and screenshots are retained separately as historical material. The new commits record work from this rebuild onward.

Rebuild started: [enter the actual date]
Person rebuilding: [enter name]
Node-RED version: [enter observed version]
Mosquitto version: [enter observed version]

## Scope

Recreate the baseline MQTT path, add the existing checksum comparison, and record the four prepared tests. The input is simulated. The check is an unkeyed rolling checksum; it is not HMAC or a cryptographic digital signature.

## Planned local configuration

Broker: 127.0.0.1, port 1884. MQTT 3.1.1, TLS disabled, QoS 0 for publishers and subscribers, retain disabled. These are planned settings until confirmed in the rebuilt flow.

## Records

- flows/project-flow.json: export the current rebuild tab here after each stage.
- tests/test-results.csv: enter actual observations and the operator after running each test.
- tests/screenshots: save new screenshots with clear filenames.
- notes/activity-log.md: record work and decisions as they happen.

## Sources and assistance

The starting design and Function-node code come from the existing project export and supplied implementation guide. This rebuild checklist, starter documents and local broker configuration were prepared with generative AI assistance. Record any further assistance and the changes each member actually completes.
