# Release Management — Static Portfolio

**Canonical source:** [deployment and CI](cicd.md); [release checklist](Production%20Readiness%20Checklist.md); [current milestones](../../next.md). No continuous backend service or commercial product API is deployed by this repo.

## What is a release?

A release is a reviewed exact revision successfully built and published to GitHub Pages **and verified as serving the intended content**. A passing test PR, build or a GitHub merge alone is not a release. Semantic version labels are optional for this continuous static site; a Git commit SHA is the operational version of record.

## Sequence

1. Confirm approved scope, tracked regression tests, accessibility/content/security implications, and residual risks.
2. Review small PR with relevant exact-head CI. Security audit and release blocker treatment are separate from CI being green.
3. Obtain required owner/reviewer approval before merge.
4. Main-only Pages workflow generates `portfolio/.output/public` and publishes; capture merge SHA, workflow run and deployed URL.
5. Perform representative desktop/mobile smoke, broken assets and route/SEO/keyboard checks; record which were actually performed.
6. Reconcile [next.md](../../next.md) and risk register in a *subsequent authorized PR/checkpoint* if the merge SHA only becomes available after merging.

## Rollback

If production regresses, stop further publication, identify exact bad SHA and damage, revert with a reviewed PR, wait for main CI and Pages success, then smoke test. Do not force-push or manually deploy an unverified artifact.

## Current evidence

The post-PR #3 [main CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624587) and [Pages deploy](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624434) succeeded at `2ff1e48e`. This is **not** evidence of a clean dependency audit, measured Lighthouse score, every browser journey or branch protection. Consult [risks](29-risk-register.md) before a new release claim.
