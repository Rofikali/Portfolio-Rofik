# Branch Protection — Policy vs Actual GitHub Settings

**Important status (2026-11-17):** GitHub `main` was returned as **unprotected** in the repository API audit. This document is a **recommended owner configuration**, not proof any ruleset is applied. Do not represent "no direct pushes", "1 approval required" or "secret scanning enabled" as current facts unless verified in Settings/API.

## Current source-level safeguard

Merged [CICD-001 PR #3](https://github.com/Rofikali/Portfolio-Rofik/pull/3) restricts Pages publishing to the `main` ref for pushes and manual dispatches, and narrows token permissions to the deploy job. [Post-merge CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624587) and [Pages deploy](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624434) passed. A workflow restriction alone **does not prevent someone with write access from pushing to main**.

## Owner decision and configuration

GitHub Settings → Rules → Rulesets (or Branches, depending on repository settings):

1. Set the `main` branch target and prevent force-push/deletion.
2. Prefer PR-based updates and require the existing **CI** required status/check name, confirmed from actual Actions output. Do not invent a "Lint" check not present in current workflows.
3. Choose approval-count / stale-review rules based on owner workflow and plan. Do not block a single-owner project with an impossible reviewer requirement.
4. If supported, restrict `github-pages` environment deployments to `main`.
5. Inspect dependency alerts, secret scanning and Dependabot settings separately; only enable with owner approval and a defined maintenance process.

## Verification

After an approved configuration change, read actual Rulesets/branch-protection API or settings and confirm an unreviewed test PR can't merge. Record the exact policy and who is authorized to bypass it. Never force-push or bypass protection just to save time. See [CI contract](cicd.md) and [release checklist](Production%20Readiness%20Checklist.md).
