# Deployment Strategy — GitHub Pages

**Canonical contract:** [CI/CD and deployment](cicd.md). **Decision:** [ADR-0002](../adr/0002-static-site.md).

The portfolio uses `pnpm generate` with `NUXT_APP_BASE_URL=/Portfolio-Rofik/` and publishes `portfolio/.output/public` using the repository-root Pages workflow. Public code, images and resume are embedded in the static artifact; there is no runtime VPS, database or portfolio API to deploy.

**Current verified baseline (2026-11-17):** [merge PR #3](https://github.com/Rofikali/Portfolio-Rofik/pull/3) hardened the production trigger to `main` and isolated Pages/OIDC credentials to the deploy job. [CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624587) and [deployment](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624434) passed at commit `2ff1e48e`. This does not prove all deep links, visual fidelity or client accessibility.

**Owner settings not established:** a guarded workflow is not enough by itself. Check GitHub branch rulesets, protected `main`, and `github-pages` environment deployment restrictions in Settings; preserve the PR/approval policy. Do not claim configured until verified.

**Rollback:** revert an offending merged commit by reviewed PR; monitor the resulting main CI/Pages run and smoke-test homepage, projects, a deep docs route and images. Never force-push main or publish a stale artifact without approval.
