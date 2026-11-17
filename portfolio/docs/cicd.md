# CI/CD and Deployment — Portfolio-Rofik

**Source baseline:** main commit `e9b94a0a9f8273c9f22b8b9b2aaf1e08571d9ca4` (2026-11-17). This page describes the **proposed CICD-001 PR**, not a merged workflow or freshly verified live Pages deployment. Follow [root next.md](../../next.md) for current state.

## Application pipeline

- [`ci.yml`](../../.github/workflows/ci.yml): PR/push validation from `portfolio/`; pnpm frozen install, Vitest, `nuxt typecheck`, static generation under `/Portfolio-Rofik/`.
- [`security.yml`](../../.github/workflows/security.yml): weekly/manual `pnpm audit --audit-level high`. **This security check is not clean** after the merged [SEC-001 PR #2](https://github.com/Rofikali/Portfolio-Rofik/pull/2); one high Zod and one moderate minimatch advisory remain. Do not conflate passing CI with passing audit.
- [`deploy-pages.yml`](../../.github/workflows/deploy-pages.yml): production static build + artifact upload + GitHub Pages publication. Existing main pipeline succeeded at [run 44064056826](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44064056826).

## CICD-001: proposed production branch hardening

**Problem before this PR:** deployment workflow watched `main`, `master`, and `featured/v2`; workflow-level `pages: write` and `id-token: write` were available to build/test/dependency installation as well as deployment. Main was unprotected as of 2026-11-17.

**Proposed change:**
1. A push triggers the Pages workflow **only on `main`** (not `master`, `featured/v2` or arbitrary feature branches).
2. For `workflow_dispatch`, both `build` and `deploy` run only when `github.ref == 'refs/heads/main'`. Manually choosing another branch must not publish its artifact.
3. Global `GITHUB_TOKEN` gets `contents: read`; the build job also has read-only access. The deploy job alone gets `pages: write` and `id-token: write`, with `contents: read`.
4. Preserve existing `needs: build`, `github-pages` environment, tests, typecheck, Nuxt generate, artifact upload and deploy actions. Do not change dependency versions, app code, production secrets or pricing.

**Intended effect:** a feature-branch push cannot directly invoke this workflow's production deployment; an accidental manual run against a feature branch is job-gated. This is defense in depth, **not equivalent to a protected `main`**.

## Required owner-controlled settings

The repository's `main` branch is currently **unprotected**. The owner should configure Settings → Rules → Rulesets/Branch protection (available controls may depend on plan): require pull-request review as appropriate, required exact-head CI, prevent force pushes and deletion, and restrict who can publish. Also configure Settings → Environments → `github-pages` deployment branch restriction to `main` where available. These account settings **have not been changed** by this PR.

**Audit residuals:** Nuxt Content's transitive Zod 3 and minimatch 10 have [published](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5) [advisories](https://github.com/advisories/GHSA-g3hv-75wg-m249); patched versions require major compatibility review. Treat the findings as outstanding SEC-002, rather than disabling audit or forcing a bulk override. Static visitors cannot submit build-time content on this GitHub Pages deployment, but a malicious/unreviewed content contribution can target the build process.

## Verification plan

- Static review: `push.branches == [main]`; root token read-only; build has no Pages write/OIDC; deploy has Pages write/OIDC, `needs: build` and `github-pages` environment; both jobs guard `github.ref`.
- PR validation: the existing CI still runs pnpm test/typecheck/generate on the PR HEAD; this does not execute a production Pages deploy and does not guarantee workflow permissions are accepted in production.
- First authorized main merge: inspect resulting Pages action at exact merged SHA for build/deploy PASS; smoke-test generated deep routes and assets. If deployment fails, follow [runbook](#rollback-and-known-history) rather than marking complete.
- Optional: test manual dispatch on a non-main ref only with owner approval, and confirm **skipped** jobs (not actual deployment).

## Rollback and known history

A [July 2 deploy job](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28586292162) failed even though the preceding build succeeded; its root cause is not established. Later [Nov 17 Pages run](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44064056826) passed, so there is no evidence that the historical failure is currently recurring. Do not fabricate a root-cause fix.

If the new workflow prevents valid main deployment, revert the guarded workflow via a reviewed PR, confirm appropriate token/environment permissions, rerun a controlled main deployment and inspect the artifact. Never force push or bypass security checks simply to get a green result.

## Definition of Done

Exact-head PR CI green; static workflow policy correct; owner approval; merge verified; post-merge Pages deploy and site smoke verified. **Before merge, this proposal is only a PR, not a deployed protection.**
