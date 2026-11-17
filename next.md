# Portfolio-Rofik — Live NOW / NEXT / LATER

**Reconciled 2026-11-17.** This board selects one bounded milestone per "go ahead", but GitHub main HEAD / PR / CI evidence takes precedence over historic text. Documentation changes do not run background agents.

**Verified main baseline:** `e9b94a0a9f8273c9f22b8b9b2aaf1e08571d9ca4`. [DOC-001 PR #1 MERGED](https://github.com/Rofikali/Portfolio-Rofik/pull/1) and [SEC-001 PR #2 MERGED](https://github.com/Rofikali/Portfolio-Rofik/pull/2). Post-merge [CI PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44064056714) and [Pages deployment PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44064056826). No further live-site/browser audit is claimed.

## NOW / NEXT / LATER

| Priority | ID / current proposal state | Smallest next eligible action |
| --- | --- | --- |
| **NOW P1** | **CICD-001 — IN_PROGRESS / PR PROPOSED** | Restrict GitHub Pages push trigger to `main`, guard manual dispatch against non-main refs, grant Pages/OIDC write only to deploy job. Review [CI/CD policy](portfolio/docs/cicd.md); verify PR CI on exact SHA and require owner approval before merge/release. |
| **BLOCKED P0 security** | **SEC-002 — PATCH BLOCKED / NOT ACCEPTED** | Fresh audit after SEC-001 reported **one HIGH `zod@3.25.76`** and **one MODERATE `minimatch@10.2.6`** via Nuxt Content. Patched versions [Zod >=4.6.6](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5), [minimatch >=11.0.1](https://github.com/advisories/GHSA-g3hv-75wg-m249) cross major-version bounds; Nuxt Content's public schema docs describe Zod v4, but internal transitive compatibility needs separately reviewed experiment. No silent override or vulnerability waiver. |
| **NEXT P1 owner setting** | **BRANCH-001 — OWNER APPROVAL / NOT DONE** | Main is not protected (verified 2026-11-17). Configure appropriate GitHub branch rules and `github-pages` environment restrictions; workflows alone cannot prevent direct writes to main. |
| **NEXT P1 testing** | **TEST-001 — PLANNED** | Meaningful unit + Playwright browser tests: navigation, theme, static routes, search, contrast and project images. |
| **NEXT P1 experience** | **PERF-A11Y-001 — PLANNED** | Recheck Tailwind nesting warning, asset budgets, mobile light/dark accessibility, performance and actual screenshots. |
| **NEXT P1 search** | **SEARCH-001 — PLANNED** | Search projects + cases + docs, with correct canonical paths and published-only behavior. |
| **LATER content** | **CONTENT-001 / DOC-002 — PLANNED** | Owner-verify portfolio/resume claims, deduplicate content taxonomy, validate sitemap and publish status. |
| **OPTIONAL — DESIGN ONLY** | **WASM-DEMO-01 — IDEA / NO IMPLEMENTATION AUTHORIZATION** | Consider one lazy-loaded Rust/WASM browser demo only if it has a real CPU-bound task and measured benefit. Keep ordinary Nuxt pages JS/TS and static. Benchmark module size, cold start, memory, accessibility and JS fallback first. Not a blocker for any current milestone. |
| **LATER business** | **GROWTH-001 — OWNER DECISION** | Consider domain/analytics/contact enhancements only with evidence, privacy and cost review. |

## Continuation rules

One branch and reviewable PR per milestone. Verify current GitHub evidence, classify status as `PLANNED`, `READY`, `IN_PROGRESS`, `PR_OPEN/CI_PENDING`, `READY_FOR_REVIEW`, `BLOCKED`, `MERGED` or `RELEASED`. Only actual merge/deploy evidence moves those states; no repeating merged work. A security audit failure cannot be converted to PASS by a passing CI build. **Do not merge, force push, deploy, publish private data or spend without the relevant owner authorization.**

Compact handoff: milestone ID, base SHA, head SHA, changed paths, tests PASS/FAIL/PENDING/NOT RUN, PR/run links, open risks, owner decision and next action. [AGENTS](AGENTS.md) · [Skills](skills.md) · [Evidence register](portfolio/docs/status-and-evidence.md).
