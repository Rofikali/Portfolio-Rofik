# Contributing to Portfolio-Rofik

This is a publicly deployed, **static Nuxt 4 / Vue 3 / TypeScript / Nuxt Content** portfolio. Before editing, read [root AGENTS](../AGENTS.md), the short [live milestone board](../next.md) and the relevant [skill recipe](../skills.md). The website is not an IMGENGINE Rust API.

## Getting started

Use **Node 22** and **pnpm 10**; run commands from `portfolio/`:

~~~sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
~~~

Do not add a runtime API/database, third-party analytics, paid service, authentication, Rust/WASM bundle or public personal data without a relevant owner-approved ADR and scoped milestone.

## Small pull request workflow

1. Reconcile main SHA, open PRs, current `next.md` and affected source. Do not repeat already merged work.
2. State one outcome, scope, threat/a11y/SEO implications, acceptance criteria and rollback.
3. Use a dedicated feature branch, keep source and tests together, and update *canonical* docs instead of duplicating them.
4. Run focused tests; normal quality baseline:

~~~sh
pnpm test
pnpm typecheck
NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate
~~~

5. For dependency changes, also run `pnpm audit --audit-level high`, record remaining advisories and do not bypass the audit. For page/interaction changes, perform relevant keyboard, mobile and browser checks rather than treating typecheck as an accessibility test.
6. Open a PR with exact SHA, files changed, test results (**PASS/FAIL/NOT RUN/PENDING**), screenshots if UI changed, security impact, rollback and the next milestone. Human approval is required before merge, deployment, spending, license selection or publishing sensitive information.

## Content rules

- Project and employment claims require owner-reviewed evidence; no invented users, revenue, client testimonials, metrics or production deployments.
- Differentiate **implemented, recorded-verified, partial, planned and illustrative**.
- Use Nuxt Content schemas in `content.config.ts`, valid unique slugs and correct GitHub Pages `/Portfolio-Rofik/` links. Draft docs must not be accidentally exposed by detail routes.
- For case studies use [editorial standard](docs/Project%20Case%20Study%20Standard.md); for SEO/accessibility use [canonical guide](docs/content-seo-accessibility.md).
- Do not commit secrets, tokens, private customer data, local environment files, `node_modules/`, generated build output or unrelated code.

## Where to find decisions

[HLD](docs/hld.md) · [LLD](docs/lld.md) · [ADRs](adr/0001-use-nuxt.md) · [Testing](docs/15-testing-strategy.md) · [Release checks](docs/Production%20Readiness%20Checklist.md) · [Security policy](../SECURITY.md) · [Live milestones](../next.md).

**License:** A zero-byte `LICENSE` is not a permission to reuse the software. Do not infer MIT or another license; licensing is an explicit owner decision.
