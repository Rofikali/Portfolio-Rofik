# Portfolio-Rofik — High-Level Design (HLD)

**Scope:** Audited source architecture at main `46bd300ba74e6a2ccabd916f00f9da720f7aca14`, reviewed 2026-11-17. This is the canonical source-grounded HLD under `portfolio/docs`; public readable article: [`src/content/documentation/hld/portfolio-hld.md`](../src/content/documentation/hld/portfolio-hld.md). The article may contain conceptual diagrams and should be reconciled before updating it. This document does not certify a passing new build.

## Purpose and personas

A static, low-operating-cost online portfolio that helps **recruiters, technical hiring managers, prospective clients and peer engineers** evaluate actual project evidence, technical communication and implementation judgment. Primary tasks: view introduction → inspect project/code/evidence → read case study/design notes → contact/download resume. Secondary: browse engineering notes by topic and search.

## Requirements and exclusions

- **Functional:** responsive homepage, skills, project listing/detail, case-study listing/detail, engineering knowledge, HLD/LLD/ADR and system-design pages, blog, search/tags, contact links, resume, dark/light preference.
- **Quality:** accessible keyboard/mobile UX, correct static paths, SEO metadata, stable deep links, low asset cost, secure dependencies, reproducible CI and accurate content claims.
- **Not currently in scope:** a live contact database, authentication, profile backend, subscriptions, messaging queue, Rust/C processing, production analytics, or dynamically generated AI content. GitHub Pages cannot run server endpoints after static export.

## System context

~~~mermaid
flowchart LR
  Visitor[Visitor / Hiring Manager] -->|HTTPS| Pages[GitHub Pages Static Site]
  Contributor[Owner / Contributor] -->|reviewed commits| GitHub[GitHub Repository]
  GitHub --> CI[GitHub Actions]
  CI -->|test / generate / deploy| Pages
  Markdown[Markdown + metadata] --> Build[Nuxt Build + Nuxt Content]
  Build -->|.output/public| CI
  Pages -->|external navigation| Repo[Linked source / external demos]
~~~

The build graph above represents ownership, not the exact execution order of every workflow. The actual deploy workflow builds and uploads within GitHub Actions.

## Container/component view

~~~mermaid
flowchart TD
  Content[src/content Markdown] --> NuxtContent[Nuxt Content collections + Zod]
  Static[src/infrastructure/content profile + navigation + skills] --> Pages[Nuxt pages]
  NuxtContent --> Adapter[Infrastructure repositories / mappers]
  Adapter --> UseCase[Application use cases]
  UseCase --> Pages
  NuxtContent -->|some current direct queries| Pages
  Pages --> UI[Vue presentation components / layouts / composables]
  UI --> Nuxt[Nuxt SSR prerender / generate]
  Nuxt --> Artifact[Static HTML/CSS/JS and assets]
  Artifact --> GH[GitHub Pages]
~~~

**Boundaries:** `domain/` contains types/contracts; `application/` orchestrates; `infrastructure/` adapts Nuxt Content; `presentation/` renders; `pages/` supplies route entry points. The direct query edges are a current exception—do not claim perfect hexagonal enforcement.

## Deployment and trust boundaries

- Repository root `.github/workflows/ci.yml`: pnpm install, Vitest, Nuxt typecheck, static generation.
- `deploy-pages.yml`: build and deploy artifact from `portfolio/.output/public` using `NUXT_APP_BASE_URL=/Portfolio-Rofik/`. At audited revision, triggers on `main`, `master`, `featured/v2`; production trigger broadness requires review.
- `security.yml`: scheduled `pnpm audit --audit-level high`. Latest historical scan 2026-08-31 failed with 35 advisories; exact up-to-date vulnerability reachability is not verified.
- Public static assets in `portfolio/public` include project images and resume PDF. **All public files are effectively published**. No private information should be checked in.
- Browser localStorage retains a theme preference; no known in-repository account or contact submission service.

## Data/content model

Content collections in `content.config.ts` define `projects`, `caseStudies`, `blog`, `architecture` and `documentation`. Blog and architecture currently reference the same source glob and require naming/slug integrity checks. Project and case-study schemas use strongly typed frontmatter. Documentation repository filters Published in `getAll()`; `getBySlug()` does not filter, so direct paths need a published-status gate.

## Reliability, security, SEO and cost tradeoffs

| Choice | Benefit | Cost / risk |
| --- | --- | --- |
| Static GitHub Pages | Low hosting/ops cost, limited server attack surface | No runtime API; static route/prerender correctness |
| Markdown collections | Fast editing and repeatable build-time metadata | Slug collisions, broken links, stale claims |
| Nuxt 4 | Reusable layouts, SEO-friendly generation | Build dependency graph, bundle/runtime overhead |
| Layered content adapters | Unit-testable retrieval and replaceable content source | Extra complexity; currently inconsistent direct queries |
| Client theme state | No backend for preference | Flash risk, localStorage/privacy/SSR styling mismatch |
| Hand-maintained sitemap | Simple starter | Missing content routes/stale entries |

For performance see [budget](23-performance-budget.md); accessibility/SEO [contract](content-seo-accessibility.md); threat model [here](security-threat-model.md); practical low-level trace [LLD](lld.md).

## Decisions and next gates

Preserve the static platform until measured requirements demand otherwise. Prioritize security advisory updates, guarded deployment, meaningful tests, unified search and evidence-backed content. Any new database, paid domain, analytics or form provider needs a separate cost/privacy ADR and owner approval.
