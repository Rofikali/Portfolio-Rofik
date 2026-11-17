# Database Design Section — Case Studies Only

**Current portfolio runtime has no application database.** Nuxt Content may use build-time database tooling, but the public generated GitHub Pages site does not run a relational/Redis/microservice backend.

Use this template **only when documenting a featured project that actually needs persistence** (e.g. a separate business app, not the portfolio).

- Problem and entities: what data must survive and who owns it?
- Data model: fields, keys, relationships and constraints; differentiate planned from deployed.
- Trust, authorization, privacy and retention; never publish real customers, tokens, financial records or secrets.
- Read/write patterns, indexes, transactions, migration and failure recovery if relevant.
- Performance/storage/cost evidence based on actual measurements and workload, not generic claims.

If a case study has no database, say **Not applicable (static/client-only)** rather than invent tables. See [case study standard](Project%20Case%20Study%20Standard.md) and [ADR-0002](../adr/0002-static-site.md).
