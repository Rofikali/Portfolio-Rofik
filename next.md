# Portfolio-Rofik — Live NOW / NEXT / LATER

**Managed status:** edit `docs/engineering-state.json`, then run `node scripts/docs-sync.mjs --write`. No automatic merge or deployment authority.

<!-- docs-sync:begin -->
**Verified workflow snapshot (2026-11-17):** main `e76829c25223` · [CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44075217503) · [Pages](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44075217337). Workflow completion verified; no full accessibility/security/production-site certificate.

Generated status from [docs/engineering-state.json](docs/engineering-state.json). **Not a live API or scheduled agent.** Always check actual PR/CI/main before proceeding.

## NOW / NEXT / BLOCKED / LATER
| Milestone | Work | State | Next action / limitation | PR |
| --- | --- | --- | --- | --- |
| DOCSYNC-001 | Automated documentation synchronization | **IN_PROGRESS** | Generate milestone status across docs; PR drift gate and reviewed post-merge reconciliation. | [PR #7](https://github.com/Rofikali/Portfolio-Rofik/pull/7) |
| SEARCH-001 | Unified published content search | **READY** | Projects, cases and published docs with path/empty/Unicode tests. | — |
| TEST-003 | Browser accessibility coverage | **PLANNED** | Keyboard, focus, contrast, generated links and measured browser checks. | — |
| PERF-A11Y-001 | CSS and performance | **PLANNED** | Tailwind/PostCSS warning, mobile contrast, image size and Lighthouse. | — |
| SEC-002 | Transitive dependency advisories | **BLOCKED** | 1 high Zod and 1 moderate minimatch advisory; safe compatible remediation unverified. | — |
| BRANCH-001 | Main branch ruleset | **BLOCKED** | Owner-controlled setting: main currently unprotected. | — |
| DOC-003 | Content taxonomy and sitemap | **PLANNED** | Reconcile duplicated content globs and static sitemap evidence. | — |
| WASM-DEMO-01 | Optional Rust/WASM demo | **DEFERRED** | Proposed only; benchmark and separate owner decision before code. | — |

## GitHub-verified merges (MERGED does not equal RELEASED)
| Milestone | Work | State | Verified scope | PR |
| --- | --- | --- | --- | --- |
| DOC-001 | Engineering playbook | **MERGED** | HLD/LLD, seven-level engineering and evidence governance. | [PR #1](https://github.com/Rofikali/Portfolio-Rofik/pull/1) |
| SEC-001 | Dependency refresh | **MERGED** | Nuxt dependency updates; two advisories remain. | [PR #2](https://github.com/Rofikali/Portfolio-Rofik/pull/2) |
| CICD-001 | Main-only Pages deployment | **MERGED** | Deploy only from main and minimize workflow token permissions. | [PR #3](https://github.com/Rofikali/Portfolio-Rofik/pull/3) |
| DOC-002 | Governance and architecture decisions | **MERGED** | Security disclosure, ADRs, release and CA/MBA reviews. | [PR #4](https://github.com/Rofikali/Portfolio-Rofik/pull/4) |
| TEST-001 | Publication and navigation tests | **MERGED** | Published-only documents and focused unit tests. | [PR #5](https://github.com/Rofikali/Portfolio-Rofik/pull/5) |
| TEST-002 | Chromium browser smoke | **MERGED** | Three browser journeys and project heading hierarchy fixes. | [PR #6](https://github.com/Rofikali/Portfolio-Rofik/pull/6) |

## Open risks — no automatic waiver
- **HIGH SEC-002:** Zod high and minimatch moderate advisories unresolved. A passing build does not clear the audit.
- **HIGH BRANCH-001:** GitHub main was unprotected at latest verified API check; source workflow guards are not rulesets.
- **MODERATE PERF-A11Y-001:** Tailwind nesting warning and no complete Lighthouse/WCAG/public-CDN validation.

## Go-ahead contract
Reconcile PRs, checks and main. Register/update one milestone in the manifest and run `node scripts/docs-sync.mjs --write`; CI checks the generated sections. A trusted post-merge workflow may propose a **draft docs PR**, never merge or deploy. [AGENTS](AGENTS.md) · [Skills](skills.md) · [Runbook](docs/docs-sync-contract.md).
<!-- docs-sync:end -->
