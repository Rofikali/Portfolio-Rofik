# Portfolio application — Nuxt static site

This is the implementation workspace for [Portfolio-Rofik](../README.md), a portfolio and engineering knowledge platform. The app is **Nuxt 4 + Vue 3 + TypeScript + Nuxt Content 3 + Tailwind CSS**, statically generated to GitHub Pages. It is not an IMGENGINE backend and does not require a server database, Rust, C, Kafka or Redis.

## Development and verification

~~~sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm typecheck
NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate
~~~

Use Node 22 (`.nvmrc`); CI uses pnpm 10. The generated site is `.output/public`. Root workflows implement test, security scan and Pages publish. Historical successful checks are not substitutes for fresh checks on the proposed SHA.

## Source layout

- `src/content/`: Markdown project, case-study, documentation, architecture and blog content.
- `content.config.ts`: Zod schemas and Nuxt Content collection declarations.
- `src/domain/`: framework-light types, entities and repository interfaces.
- `src/application/`: content use cases.
- `src/infrastructure/`: Nuxt Content repositories, mappers, static profile/navigation/skills.
- `src/presentation/`: Vue components, layout and composables.
- `src/pages/`: Nuxt routes, including homepage, projects, case studies, architecture, blog, engineering, system design, tags, search and resume.
- `tests/`: a minimal existing Vitest suite; browser/integration coverage is future work.

The adapter boundary is partially applied: some routes and the featured project use case query Nuxt Content directly. This is a documented design debt, not an implemented full hexagonal architecture.

## Documentation navigation

[Root AGENTS](../AGENTS.md) · [Contributing](CONTRIBUTING.md) · [Live board](../next.md) · [Skill recipes](../skills.md) · [HLD](docs/hld.md) · [LLD](docs/lld.md) · [Patterns](docs/design-patterns.md) · [DSA](docs/dsa-algorithms.md) · [Testing](docs/15-testing-strategy.md) · [Security](docs/security-threat-model.md) · [Product/finance](docs/product-strategy-and-unit-economics.md) · [Management governance](docs/operating-governance.md) · [Release checklist](docs/Production%20Readiness%20Checklist.md) · [ADR decisions](adr/0001-use-nuxt.md).

## Evidence and publication

Portfolio case studies may include *designed* API schemas, caching or observability architecture. Tag whether a capability is implemented, recorded-tested, partial, planned or illustrative; do not confuse a diagram with deployed infrastructure. Review personal experience/resume claims with the owner before publishing changes.

Recommended targets, not measured current scores: Lighthouse 95+, LCP below 2.5 s, CLS below 0.1, INP below 200 ms, WCAG 2.2 AA. See [performance policy](docs/23-performance-budget.md).

## Document update rules

- Keep the current fact register in [status-and-evidence](docs/status-and-evidence.md) and near-term plan in [root next](../next.md).
- Design docs explain *why/how*, not fictional deployments. ADRs record alternatives and consequences.
- Replace obsolete statements rather than creating parallel conflicting standards.
- Changes to runtime behavior need focused tests; docs-only changes need path/Markdown consistency review and accurate NOT RUN reporting.
