# ADR-0001 — Use Nuxt 4 for the Portfolio

**Status:** Accepted in existing repository source; retroactively documented 2026-11-17. Not a new framework adoption.

## Context

The portfolio needs a responsive site, reusable Vue UI, structured Markdown, SEO-friendly pages, dynamic content slugs and a GitHub Pages static deployment. Visitor requests should not require an application server.

## Decision

Keep **Nuxt 4** with Vue 3, TypeScript and Nuxt Content, and statically generate with `NUXT_APP_BASE_URL=/Portfolio-Rofik/` for the Pages repository subpath. Actual config: `../nuxt.config.ts` and `../content.config.ts`.

## Alternatives considered

- Plain static HTML/JS: lower runtime/build complexity, but manual templates/routes/content indexing.
- Vue-only SPA: simpler bundling, but crawler/deep-link and first-render metadata work increases.
- Another static generator: viable, but migration cost is unjustified by current requirements.

## Consequences

**Benefits:** Vue composition, typed components, generated routes, content model, build-time rendering and shareable source.

**Costs:** Nuxt/Vite/Content dependency and advisory surface, build complexity, hydrated JS bundle, dynamic-route prerender correctness and CSS/toolchain regressions. These must be measured, not waved away by static hosting.

## Evidence and revisiting

[Architecture HLD](../docs/hld.md), [LLD](../docs/lld.md), [CI](../docs/cicd.md). Revisit only if actual benchmark, accessibility, dependency risk or business cost justifies it; a change requires an approved new ADR and migration gates.
