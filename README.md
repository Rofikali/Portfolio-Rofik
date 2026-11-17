# Portfolio-Rofik — Engineering Portfolio

A public, static, content-driven **software engineering portfolio and technical knowledge base** built with **Nuxt 4, Vue 3, TypeScript, Tailwind CSS and Nuxt Content 3**. It showcases project work, case studies, HLD/LLD, architecture decisions, engineering articles and professional experience.

**Website:** https://rofikali.github.io/Portfolio-Rofik/  
**Application directory:** [`portfolio/`](portfolio/)  
**Status:** implementation exists and historic CI passed; this is **not** a claim that all security, accessibility, SEO and production gates are currently green. Read [live milestone board](next.md) for dated evidence and unresolved work.

## Quick start (Node 22 / pnpm 10)

~~~sh
cd portfolio
corepack enable
pnpm install --frozen-lockfile
pnpm dev
~~~

Verify the current static site (commands are guidance, not a claim of a new passing run):

~~~sh
cd portfolio
pnpm test
pnpm typecheck
NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate
~~~

The Pages deploy artifact is `portfolio/.output/public/`. CI/CD runs from repo-root [GitHub Actions](.github/workflows/). The Pages deployment workflow is guarded to publish only from reviewed `main`; check the [CI policy](portfolio/docs/cicd.md) and the still-open branch-protection settings before merging.

## Engineering documentation — start here

| Goal | Canonical entry |
| --- | --- |
| Agent and contributor boundaries | [AGENTS.md](AGENTS.md) · [Contributing](portfolio/CONTRIBUTING.md) |
| Current NOW / NEXT / LATER | [next.md](next.md) |
| Reusable implementation/review workflows | [skills.md](skills.md) |
| System components and constraints | [High-Level Design](portfolio/docs/hld.md) |
| Concrete routes, contracts and sequences | [Low-Level Design](portfolio/docs/lld.md) |
| Patterns and tradeoffs | [Design patterns](portfolio/docs/design-patterns.md) |
| Algorithms and complexity | [DSA & algorithms](portfolio/docs/dsa-algorithms.md) |
| Seven engineering levels and security/product checks | [Operating model](portfolio/docs/seven-level-engineering-model.md) · [Governance](portfolio/docs/operating-governance.md) |
| Privacy and supply-chain threats | [Security threat model](portfolio/docs/security-threat-model.md) · [Report a vulnerability](SECURITY.md) |
| Content, SEO, accessibility | [Experience and SEO](portfolio/docs/content-seo-accessibility.md) |
| Product, CA/MBA, management economics | [Commercial strategy](portfolio/docs/product-strategy-and-unit-economics.md) |
| Truth, evidence, release status | [Status register](portfolio/docs/status-and-evidence.md) |
| CI, scoped validation, roadmap | [CI/CD](portfolio/docs/cicd.md) · [Release gate](portfolio/docs/Production%20Readiness%20Checklist.md) · [Verification](portfolio/docs/change-scoped-verification.md) · [Roadmap](portfolio/docs/30-roadmap.md) |
| Architecture decisions and optional Rust/WASM | [ADRs](portfolio/adr/0001-use-nuxt.md) · [Rust/WASM proposal](portfolio/adr/0005-optional-rust-wasm-demo.md) |

## Architecture in one minute

~~~text
Markdown content / typed metadata -> Nuxt Content collection
   -> repository adapter or direct page query (current mixed state)
   -> use case / Vue page + components -> Nuxt static generation
   -> .output/public -> GitHub Actions -> GitHub Pages -> visitor
~~~

The portfolio itself has no public application database or runtime API. Nuxt Content's build-time tooling does not make it a hosted database service. IMGENGINE's C/Rust/FFI guidance is not binding here.

## Featured portfolio content

- IMGENGINE — systems and image-processing work; do not confuse published portfolio material with proof that all planned SaaS products shipped.
- Lakhimpur Agri-Business — business-platform architecture and project case study.
- TikTok Clone — social media architecture and project case study.

Other portfolio documentation includes engineering principles, system-design exercises, and articles. Claims in these pages should point to actual source/tests, and not present illustrative diagrams or sample endpoints as verified production installations.

## Contributions and safe changes

Use a small PR, follow [AGENTS](AGENTS.md), select milestone from [next](next.md), and report exact SHA/checks. No silent merges, automatic claims of release, new paid infrastructure, or publication of private resume/contact data without owner approval.

**License state:** The tracked `portfolio/LICENSE` file is empty. It is **not** an MIT or other open-source license grant. License selection needs explicit owner decision.

**Source of adaptation:** The milestone/agent-doc structure was inspired by [IMGENGINE](https://github.com/Rofikali/imgengine), but all content here is scoped to Portfolio-Rofik.
