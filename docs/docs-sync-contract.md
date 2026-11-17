# Documentation synchronization — DOCSYNC-001

This project uses a **single structured state register** ([`docs/engineering-state.json`](engineering-state.json)) for verified milestones, pull requests, open priorities and risks. It is **not** a system that writes security, finance or architecture claims using guessed evidence.

## Managed documents

A Node 22 script updates **only fenced generated sections** of [next.md](../next.md), [AGENTS.md](../AGENTS.md), [skills.md](../skills.md), [root README](../README.md), [portfolio README](../portfolio/README.md) and the [evidence register](../portfolio/docs/status-and-evidence.md). HLD/LLD/ADRs and the human-written portions are not overwritten. The former stale `next.md` board is replaced once with an automatically generated board; old evidence remains available in linked historic PRs.

## How to update for every change

From repository root:

~~~sh
node scripts/docs-sync.mjs --write
node scripts/docs-sync.mjs --check
~~~

Before any substantive app/tests/dependency/CI change, record the milestone ID, current state, summary, PR (when available) and actual verified evidence in `docs/engineering-state.json`. The standard PR workflow rejects stale generated content and requires an updated manifest if app/tests/workflow/package code changed. No package install or paid software is required to generate docs.

**Not everything is machine-written:** architecture decisions, test claims, CI results, threat models, source-specific docs, legal ownership, user data, accessibility, business outcomes and risk acceptance require real engineering/CA/MBA/security/management review.

## What runs automatically on GitHub merges

The [reconciliation workflow](../.github/workflows/docs-reconcile.yml) runs on pushes to trusted **main** and on manual dispatch. Only that main-only job gets `contents: write` and `pull-requests: write`. It checks each registered unmerged PR through GitHub API and only records MERGED when **both** `merged_at` and the 40-character `merge_commit_sha` are returned. It never changes a user-facing release claim from CI evidence alone, nor clears existing risks.

If there is a difference, it pushes a dedicated docs-only branch and opens a **draft pull request** for review. It does not push the main branch or approve, merge, deploy, spend money, rotate credentials or publish private information. GitHub repository settings may prohibit GitHub Actions from creating PRs; in that case the action reports the failure and a maintainer can run the local generator to prepare the same changes.

GitHub's default `GITHUB_TOKEN` typically does **not** trigger `pull_request` CI on PRs created by the workflow itself. Human review must validate the generated diff and arrange independent checks before merging. There is no invisible background ChatGPT agent.

## Seven-level engineering and business review

A small PR gets proportionate review: junior/mid — accurate source and IDs; senior — tests/failure paths; lead/staff — docs/architecture/CI consistency; principal — simplicity and long-term maintenance; distinguished — why automate this and how it fails safely; security — scoped bot token, static-site trust boundary and persistent advisories; CA/MBA — cost, ROI and privacy claims require real records; management — human decision rights, bounded PR and release approval.

## Rollback and exceptions

Revert the DOCSYNC-001 changes via a reviewed PR if the generator misbehaves; historic docs remain in Git. A failing `--check` lists stale files; regenerate from manifest and review diff. Do not silence the check just to get green CI. When a security fix needs immediate release, track it in the manifest and document any temporarily omitted check with owner decision; still no secret or merge bypass.
