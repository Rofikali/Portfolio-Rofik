# Feature Inventory — Source vs Shipped vs Planned

**Evidence baseline:** main `2ff1e48e`, 2026-11-17. **IMPLEMENTED source** means tracked code exists, not all workflows/links are browser-validated. For dated CI and vulnerabilities use [live board](../../next.md) and [evidence register](status-and-evidence.md).

| Visitor feature | Evidence / status | Acceptance still needed |
| --- | --- | --- |
| Home, about, projects and case studies | Source implemented in `src/pages`; Markdown collections in `content.config.ts` | Correct static deep links, mobile layout, a11y and factual project claims |
| Resume and contact links | Source implemented; PDF publicly shipped as asset | Owner review of private data, links and resume facts |
| Engineering / HLD / LLD / system-design content | Source implemented in `src/content/documentation` | Published-only detail access, category and unique slug verification |
| Tag and search pages | Partial: search displays documentation matches but only counts projects/case studies | Unified result types and links; see SEARCH-001 |
| Theme toggle | Source implemented via `useThemeMode` and CSS | Light/dark contrast, persistence, no flash, keyboard tests |
| SEO metadata, robots, sitemap | Partial; hand-maintained `public/sitemap.xml` | Route coverage, canonical prefix and generated metadata validation |
| CI / Pages | Source implemented and last post-merge passed at [main CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624587) and [Pages](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624434) | Branch-protection settings, browser smoke and complete security audit |
| Rust/WASM demo | **Idea only** | [ADR-0005](../adr/0005-optional-rust-wasm-demo.md) decision/benchmark; not in app |

Do not add user accounts, CMS service, database, Kafka, analytics SDK, API backend or paid hosting merely to make the feature list longer. Planned features have no implementation status until source and tests prove otherwise.
