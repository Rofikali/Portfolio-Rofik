# Git Strategy — Portfolio-Rofik

**Verified source baseline:** `main` is the production branch, with feature branches and bounded PRs; no requirement for a separate `develop` branch is established by the current workflows. Source of truth: [root AGENTS](../../AGENTS.md) and [live milestones](../../next.md).

## Branch and commit discipline

- `main`: released site source after authorized merge. Changes here trigger the GitHub Pages build/deploy pipeline.
- `docs/*`, `feature/*`, `fix/*`, `test/*`, `ci/*`, `security/*`: short-lived, descriptive milestone branches. Do not use `featured/v2` to publish production.
- Conventional Commits are preferred: `docs(adr): ...`, `feat(search): ...`, `test(theme): ...`, `fix(content): ...`, `ci(pages): ...`.
- Make one branch/PR per bounded outcome; preserve others' work, never force-push protected/main branches to shortcut review.

## PR lifecycle

1. Reconcile merged SHA, branch/PR state and [next.md](../../next.md).
2. Identify acceptance tests and exact affected files; keep changes small and reviewable.
3. Run focused tests plus required CI; attach output labels PASS/FAIL/PENDING/NOT RUN and links, not a huge log dump.
4. Include security/a11y/content/cost impact and rollback.
5. Human authorizes merge; capture actual GitHub merge SHA and post-merge Pages result. A PR-head PASS is not proof of deployment.

## Policy vs actual settings

The repo's `main` was unprotected at the last API audit; a recommended PR rule is not an enforced GitHub ruleset. Setting up actual review requirements is a separate owner decision. See [branch protection](13-branch-protection.md). No license or private data publication is authorized by a PR convention.
