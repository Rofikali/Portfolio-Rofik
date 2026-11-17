# Portfolio-Rofik — Delivery Roadmap (source-reconciled)

**As of 2026-11-17:** this is strategic sequencing, not the live task selector. [Root next.md](../../next.md) is authoritative for NOW/NEXT/LATER after cross-checking GitHub. Avoid old blanket "planned" labels when source already exists.

| Phase | Source status | Completed evidence | Remaining gate |
| --- | --- | --- | --- |
| 0 — Static platform baseline | IMPLEMENTED; historic CI passes | Nuxt app, repo, root workflows, GitHub Pages deploy runs | Follow-up failed deployment analysis and fresh verification |
| 1 — Core portfolio | IMPLEMENTED source | Homepage, navigation, project detail/list, contact links, resume, profile | Accessibility/content credibility/broken-link checks |
| 2 — Technical content | IMPLEMENTED source; quality PARTIAL | Markdown projects, three case studies, HLD/LLD, ADR, architecture/system-design articles | Remove empty/stale docs, validate draft/status/canonical routes |
| 3 — Discovery and UX | PARTIAL | Search page, tag pages, theme toggle, mobile menu | Unified search, meaningful automated journeys, theme accessibility |
| 4 — Release reliability/security | BLOCKED/PARTIAL | CI, security workflow and Pages setup exist | Audit fixes; protected main; one reviewed prod trigger; dependable deployed SHA |
| 5 — Proof and growth | PLANNED | Content strategy documented | Owner-reviewed career claims, measured Lighthouse, optional domain/analytics after cost/privacy review |

## Delivery order

1. DOC-001 documentation policy/HLD/LLD/patterns/DSA/skills/board (current docs-only review).
2. SEC-001 supply-chain vulnerability remediation in a bounded independent PR.
3. CICD-001 deployment/branch protection gate; TEST-001 meaningful tests; SEARCH-001 all content types.
4. CONTENT-001 real evidence and truthful resume/case studies; PERF-A11Y-001 measured mobile/user quality.
5. DOC-002 deduplicate old placeholder documentation, align public readable HLD/LLD to source.
6. GROWTH-001 optional conversion improvements only if user benefit/cost/privacy justify them.

## Release gates

Correct route rendering, green exact-SHA CI, resolved/triaged security issues, measured accessibility and performance, no misleading copy, correct public assets/metadata, human approval for release-impacting changes. A merged docs PR cannot satisfy these runtime gates.

## Non-goals

IMGENGINE's native C17/Rust/FFI stack, microservices, SaaS billing, Kafka, Redis and a hosted database are **case-study subjects**, not the portfolio runtime architecture.
