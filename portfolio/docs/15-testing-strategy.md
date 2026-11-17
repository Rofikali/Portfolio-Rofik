# Testing Strategy — Reality and Target Gates

**Current source:** two Vitest test files: `tests/smoke.test.ts` (arithmetic only) and `tests/unit/case-study-content.test.ts` (required frontmatter labels). Existing GitHub CI successfully invoked `pnpm test` on July 2, 2026, but that does **not** establish behavior coverage or 80% code coverage. Playwright is a dependency, not a committed E2E suite.

## Test levels

| Level | Proposed targets | Requirement |
| --- | --- | --- |
| Unit | URL builder, slug normalizer, Published predicate, content mapper, search normalization/ranking, theme logic | Pure/isolated Vitest tests with edge cases |
| Component | Navbar, theme control, project cards, search result/empty state | Vue Test Utils or agreed Vue test approach, keyboard and state |
| Integration | Nuxt Content adapters, projects/case studies/docs, dynamic route 404, sitemap/link integrity | Real fixtures and schema/parsing tests |
| E2E | homepage → project, case-study, search, theme persist, resume, mobile menu, missing route | Playwright with actual browser and generated/deployed base path |
| Accessibility | Focus, keyboard, contrast, reduced motion, labels, headings, 320px layout | axe plus manual checks; WCAG 2.2 AA target |
| Security | Dependency advisory triage, untrusted URLs/content, public file review and branch/workflow rules | Current audit + security review |
| Performance | LCP/CLS/INP and image/bundle budgets | Measured lab/field evidence, never fake pass |

## Target quality gate

On code changes: `pnpm test`, `pnpm typecheck`, `NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate` plus affected browser checks. After meaningfully implementing test suites, decide what runs as required CI; do not mark existing CI as running missing tools.

Content-specific cases: missing frontmatter, duplicate slug, invalid URL, unpublished doc, invalid category, unknown linked target, nonexistent image, bad heading anchor, multilingual search and missing route. Security critical/high advisory findings must be explicitly triaged.

Coverage is a quality signal, not a substitute for user-journey proof. No 80% claim without an actual coverage report.

## Docs-only verification

Review paths, links, facts and consistency. Report runtime tests as **NOT RUN** if none were performed; CI may later validate the exact PR SHA. See [change-scoped policy](change-scoped-verification.md).
