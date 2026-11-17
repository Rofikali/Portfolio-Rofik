# Testing Strategy — Implemented and Next Gates

**Verified baseline:** TEST-001 [PR #5 merged](https://github.com/Rofikali/Portfolio-Rofik/pull/5) at `f2d54641be2de66ae0be720ecf2b3aa912408fd0`; [main CI PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44069632333). Browser runs are a separate TEST-002 milestone and must be verified at an exact workflow SHA.

## TEST-001 scope

- `tests/unit/documentation-repository.test.ts`: focused Vitest tests for Published-only listing/detail, missing/invalid status fail-closed, unknown/blank slug, category filter, related links and max-4 cap. The implementation now checks `status = Published` in direct lookup and rejects malformed status. Engineering and system-design detail pages also query Published-only content.
- `tests/unit/navigation-routes.test.ts`: real navigation destinations must exist in the Nuxt page tree; link paths/labels must be unique and local.
- `tests/smoke.test.ts`: replace arithmetic with static source/CI base-path assertions.
- `e2e/portfolio.e2e.ts` + `playwright.config.ts`: optional generated-site browser smoke for home/projects, theme persistence and narrow-screen navigation. It requires a browser binary and a generated `/Portfolio-Rofik/` static artifact. **Browser workflow in TEST-002**: Linux/Playwright Chromium job on relevant PR file paths; its result is independent of standard Node CI. Do not call it a passing browser gate until a real run completes.
- Existing `tests/unit/case-study-content.test.ts` remains a frontmatter presence check; it does not prove all business claims/content correctness.

## Commands and safe scopes

From `portfolio/`, with Node 22 and pnpm 10:

~~~sh
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate
~~~

Optional browser check **after** generation, using your Linux/Docker environment (do not install browsers on the Windows host):

~~~sh
pnpm exec playwright install chromium
pnpm test:e2e
~~~

Playwright starts `node scripts/serve-generated.mjs` on localhost:4173. It serves only the actual `.output/public` files under the repository base path, returning 404 for missing pages instead of silently substituting a Nuxt server or SPA fallback. Installing a browser is a one-time network/download and is **not** done by normal CI; do not claim tests passed merely because the source exists. Make the Docker CI image/browser installation explicit in a follow-up PR after cost/time validation.

## Verification promises and remaining gaps

- This first slice covers important **unit/access-control regression risks**. It does **not** prove all published documents are prerendered, anonymous direct URLs cannot be indexed, actual mobile contrast, cross-browser keyboard/axe, asset weight or Lighthouse/INP targets.
- Publishing source Markdown as part of a static GitHub repository means filtering application routes is **not** a confidentiality mechanism for raw Markdown already committed publicly. **Never commit confidential drafts.**
- A successful `nuxt generate` does not mean a browser test ran. Record each separately as PASS, FAIL, NOT RUN, PENDING at exact SHA.
- Next slices: meaningful content/route generation assertions, unified search tests after SEARCH-001, aria/keyboard/a11y, broken assets, and measured mobile Lighthouse. Keep PRs small.

[Root board](../../next.md) · [Release checklist](Production%20Readiness%20Checklist.md) · [Security reporting](../../SECURITY.md) · [Evidence register](status-and-evidence.md).

## TEST-002 — Browser CI design (proposed)

- Workflow [`browser-smoke.yml`](../../.github/workflows/browser-smoke.yml) is scoped to pull requests changing application, dependency, Playwright or workflow files; **doc-only PRs do not launch the heavy browser job**. Manual dispatch is available after the workflow is merged into the default branch.
- Official pinned `mcr.microsoft.com/playwright:v1.65.1-noble` container matches the committed Playwright package, includes Chromium and system dependencies. Do not install browser binaries again in this container. The Linux CI job never accesses the Windows host.
- Node 22 + pnpm 10 install from frozen lockfile; static `pnpm generate` under `/Portfolio-Rofik/`; the dependency-free `scripts/serve-generated.mjs` serves the generated static artifact at localhost:4173 for `pnpm test:e2e`.
- Chromium only, one worker on CI and one retry for diagnosis; failed screenshots/traces retained for three days. No user data, production secrets, Pages publishing permissions or paid external browser service. `contents: read` token only.
- Status is **PROPOSED** until a real browser workflow passes at the exact PR head. A passing test run doesn't prove the live Pages CDN, WebKit/Firefox, a11y, Lighthouse or true route prerender guarantees.
- Follow-up efficiency: read actual workflow duration on one meaningful PR; avoid browser checks on docs, share existing lockfile cache, and only expand browser matrix if a tested risk justifies the time.

**First TEST-002 attempt:** [Browser job #44070145899](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44070145899) failed before any browser test because `pnpm preview` expected `.output/server/index.mjs`, which static generation does not produce. Corrected by a minimal static-artifact server, not by adding an API or falling back to the Nuxt SSR runtime. That initial failure is retained as evidence; later browser results must be checked at their own SHA.

## TEST-002 verified candidate evidence (2026-11-17)

- **First experiment [run 44070145899](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44070145899) FAILED** before starting tests: `pnpm preview` requires `.output/server/index.mjs`, unavailable after static `nuxt generate`. No browser result was claimed for that run.
- **Corrected Chromium [run 44070503634](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44070503634) PASSED** at `677ef4c259ca725d62ebf6f5a1b9b0a84c50e6d1`, running 3 tests on one worker in approximately **3.0 seconds of test time**: home/project deep-link, persisted theme, and mobile navbar. Static generation, browser container initialization and pnpm installation add additional workflow duration (roughly 71 seconds for the full run by GitHub timestamps).
- **Standard [CI run 44070503643](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44070503643) PASSED** at the same candidate commit.
- Root cause was **test harness**, not demonstrated application failure. Instead of silently using SSR fallback, a small dependency-free `scripts/serve-generated.mjs` serves actual generated files under `/Portfolio-Rofik/` and returns 404 for missing assets/routes.
- This verified candidate is **not automatically the final PR SHA** if this file changes; check final head and both workflows. Exact-head browser PASS demonstrates these three Chromium flows, **not** full WCAG, production Pages CDN, security audit, Firefox/WebKit or all generated dynamic routes.
