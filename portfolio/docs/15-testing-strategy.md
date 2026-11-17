# Testing Strategy — Implemented and Next Gates

**Verified baseline:** main at `e6575b727600dcbcf4ca4630bb7689a82ef387ac` on 2026-11-17; [post-merge CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44068305034) and [Pages](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44068305039) passed. This proposed TEST-001 branch updates source/tests; results are not PASS until verified at exact PR HEAD.

## TEST-001 scope

- `tests/unit/documentation-repository.test.ts`: focused Vitest tests for Published-only listing/detail, missing/invalid status fail-closed, unknown/blank slug, category filter, related links and max-4 cap. The implementation now checks `status = Published` in direct lookup and rejects malformed status. Engineering and system-design detail pages also query Published-only content.
- `tests/unit/navigation-routes.test.ts`: real navigation destinations must exist in the Nuxt page tree; link paths/labels must be unique and local.
- `tests/smoke.test.ts`: replace arithmetic with static source/CI base-path assertions.
- `e2e/portfolio.e2e.ts` + `playwright.config.ts`: optional generated-site browser smoke for home/projects, theme persistence and narrow-screen navigation. It requires a browser binary and a generated `/Portfolio-Rofik/` static artifact. **Not part of the default CI gate** until the runner and browser results are measured.
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

Playwright starts `pnpm preview` on localhost:4173, points to the repository base path, and uses local Chromium. Installing a browser is a one-time network/download and is **not** done by normal CI; do not claim tests passed merely because the source exists. Make the Docker CI image/browser installation explicit in a follow-up PR after cost/time validation.

## Verification promises and remaining gaps

- This first slice covers important **unit/access-control regression risks**. It does **not** prove all published documents are prerendered, anonymous direct URLs cannot be indexed, actual mobile contrast, cross-browser keyboard/axe, asset weight or Lighthouse/INP targets.
- Publishing source Markdown as part of a static GitHub repository means filtering application routes is **not** a confidentiality mechanism for raw Markdown already committed publicly. **Never commit confidential drafts.**
- A successful `nuxt generate` does not mean a browser test ran. Record each separately as PASS, FAIL, NOT RUN, PENDING at exact SHA.
- Next slices: meaningful content/route generation assertions, unified search tests after SEARCH-001, aria/keyboard/a11y, broken assets, and measured mobile Lighthouse. Keep PRs small.

[Root board](../../next.md) · [Release checklist](Production%20Readiness%20Checklist.md) · [Security reporting](../../SECURITY.md) · [Evidence register](status-and-evidence.md).
