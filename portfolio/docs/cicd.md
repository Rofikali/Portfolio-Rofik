# CI/CD and Deployment — Current GitHub Pages Contract

**Latest verified main:** `2ff1e48e5d9b7de2ff27edf36cf367dfb1708d54` (2026-11-17), after [CICD-001 PR #3 MERGED](https://github.com/Rofikali/Portfolio-Rofik/pull/3). [Exact-main CI PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624587) and [Pages deployment PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624434). This is **not** a measured browser/SEO/a11y/security release certification; check [live board](../../next.md).

## Actual workflow topology

1. [`ci.yml`](../../.github/workflows/ci.yml): PR/push test, Nuxt typecheck and static generation in `portfolio/`, using pnpm frozen install and `NUXT_APP_BASE_URL=/Portfolio-Rofik/`.
2. [`security.yml`](../../.github/workflows/security.yml): weekly/manual `pnpm audit --audit-level high`. **Still not a clean audit** after dependency PR #2: a high Zod + moderate minimatch advisory require SEC-002.
3. [`deploy-pages.yml`](../../.github/workflows/deploy-pages.yml): push only to `main`; manual workflow dispatch allowed but **build and deploy jobs both require main ref**. Root token is `contents: read`; build/test has read-only access; the deploy job alone has `pages: write` and `id-token: write`. Build uses `needs` ordering and uploads `portfolio/.output/public` to Pages; deploy job owns `github-pages` environment.

## Why the workflow guard matters

Before PR #3, `master` and `featured/v2` pushes could also trigger production publishing, and workflow-level Pages/OIDC write permissions were available during install/build. The merged guard closes those *workflow* paths. However a contributor with direct write permission to `main` might still change its code; workflow hardening is **not a replacement for branch protection**.

## Owner-controlled protection status

At the 2026-11-17 GitHub branch API inspection, `main` was **unprotected**. No setting was modified by the docs or workflow PR. Recommend GitHub Settings → Rules/Rulesets/Branch protection for reviewed main changes and required exact CI checks, plus `github-pages` environment branch restriction to main where supported. Do not promise that approval counts, secret scanning, Dependabot or deployment restrictions are actually enabled before verifying. [Branch policy](13-branch-protection.md).

## Verification and rollback

- A PR CI success is **not** a Pages deployment verification. A post-merge Pages success proves deployment job completion, not every public route or browser style.
- On any new workflow change, inspect GitHub ref guards, token permissions, job dependencies and current Pages environment; verify exact head CI.
- After authorized merge, inspect main workflow and visit homepage/project/detail/docs/image URLs under `/Portfolio-Rofik/`; test keyboard/mobile/theme if UI changed.
- Earlier [July 2 Pages deploy failure](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28586292162) remains historically unexplained, although later main Pages jobs succeeded. Never invent a resolution.
- For bad release, revert with reviewed PR; observe main CI, Pages and public site. Avoid force pushes or unapproved publishing.

## Governance and release gate

[Release checklist](Production%20Readiness%20Checklist.md) · [Security policy](../../SECURITY.md) · [Status/evidence register](status-and-evidence.md) · [Business/management ownership](operating-governance.md). A clean `pnpm audit`, meaningful browser/a11y validation and human release approval remain separately required where applicable.
