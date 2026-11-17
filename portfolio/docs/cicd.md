# CI/CD and Deployment — Verified Workflow Contract

**Main baseline 2026-11-17:** inspected existing workflow YAML, not a proposed new pipeline. Workflows live at repository root in `.github/workflows/`, app workspace is `portfolio/`.

## Current paths

- `ci.yml`: on PR and push to main, uses Node from `portfolio/.nvmrc` (=22), pnpm 10, frozen lockfile, `pnpm test`, `pnpm typecheck`, `pnpm generate` with `NUXT_APP_BASE_URL=/Portfolio-Rofik/`.
- `security.yml`: weekly/dispatch, frozen install, `pnpm audit --audit-level high`. Historical Aug 31 result failed with 35 advisories.
- `deploy-pages.yml`: build/test/typecheck/generate/upload/deploy to Pages, with deploy permissions `pages: write` and `id-token: write`. Currently triggered by pushes to `main`, `master`, **and `featured/v2`** plus manual dispatch. That is a production integrity concern to review in CICD-001.

## Verified historic runs

| Run | Date | Conclusion |
| --- | --- | --- |
| [CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28585405339) | 2026-07-02 | SUCCESS |
| [Pages](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28585405304) | 2026-07-02 | SUCCESS |
| [Later Pages](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28586292162) | 2026-07-02 | FAILED in deploy job after successful build; exact cause not established |
| [Security audit](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/33391514956) | 2026-08-31 | FAILED on `pnpm audit` |

Current default branch `main` was unprotected at audit time. No current live-site check is asserted.

## Target proposal (not yet implemented)

- Protect main, require review and exact required checks; decide whether owner allows self-merge on a single-owner project.
- Only `main` may trigger production Pages deployment. Use explicit preview environment for feature branches rather than publishing to production.
- Add meaningful lint/Playwright/links/a11y gates **after they have real implementation**; do not mark them currently running.
- Apply minimal permissions per job, pinned/maintained trusted GitHub Actions and dependency-update review.
- Keep deployment artifact provenance and fallback to prior known-good commit; review actual Pages environment state before release claims.

## Rollback / incident response

Investigate failed job and last deployed SHA first. For a bad release, revert on a reviewed PR and let the approved main pipeline deploy; do not force-push main or publish an unverified previous artifact. For a compromised credential, use documented revocation outside code review.

## Definition of Done

Exact HEAD checks run, expected Pages paths generated, vulnerability state triaged, owner approves merge/release, deployment succeeds and public pages are checked. The documentation-only DOC-001 PR does not modify these workflows.
