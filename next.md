# Portfolio-Rofik — Live NOW / NEXT / LATER board

**Updated 2026-11-17 — security update proposal only.** Current GitHub PR/merge/CI evidence overrides this historical snapshot. Any running agent must check open PRs and main SHA before selecting work.

**Current verified main:** `ded33dcc0564bc53df209bca4b2f2fd5687b0167`, after [documentation PR #1 MERGED](https://github.com/Rofikali/Portfolio-Rofik/pull/1). [Main CI PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44060103176) and [Pages deploy PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44060103149). Do not redo DOC-001.

## NOW / NEXT / LATER

| Lane | Milestone | Verified state / smallest next action |
| --- | --- | --- |
| **NOW P0** | **SEC-001 — IN_PROGRESS, candidate tested / PR CHECKS REQUIRED** | Compatible dependency update (Nuxt 4.6.4 / Content 3.16.2 / Vitest 4.1.12 / explicit vue-tsc). [Temporary candidate job PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44063115029) for frozen install, tests, typecheck and generate; `pnpm audit` still reports **1 high Zod + 1 moderate minimatch**. Review isolated PR; do not claim clean audit or production readiness. See [SEC-001 report](portfolio/docs/SEC001_DEPENDENCY_REMEDIATION_2026-11-17.md). |
| **NEXT P0** | **SEC-002 — PLANNED / BLOCKED BY UPSTREAM-COMPATIBILITY EVIDENCE** | Review transitive `@nuxt/content → zod@3.25.76` (patched advisory >=4.6.6) and minimatch@10.2.6 (patched >=11.0.1), reproduce and fix safely or record owner-approved risk treatment; never suppress scans merely for green CI. |
| **NEXT P1** | CICD-001 — PLANNED | Restrict production deployment branch, inspect historical failed deploy, request main protection; no automatic policy changes. |
| **NEXT P1** | TEST-001 — PLANNED | Meaningful Vitest + Playwright for navigation/theme, project pages, generated routes, browser regressions. |
| **NEXT P1** | SEARCH-001 — PLANNED | Unified searchable projects, case studies and documentation; correct URLs and empty results. |
| **NEXT P1** | PERF-A11Y-001 — PLANNED | Review Tailwind/PostCSS warning, large project images, keyboard, mobile, light/dark contrast, measured Lighthouse. |
| **LATER** | CONTENT-001 / DOC-002 / GROWTH-001 — PLANNED | Owner-verified resume and claims; old doc consolidation and sitemap; optional growth only after cost/privacy decision. |

## Status vocabulary

`PLANNED`, `READY`, `IN_PROGRESS`, `PR_OPEN/CI_PENDING`, `READY_FOR_REVIEW`, `BLOCKED`, `MERGED`, `RELEASED`, plus `PARTIAL`, `RECORDED_VERIFIED` and `HISTORICAL`. A passing build is not a passing security audit; a PR or documentation update is not a public release. Only a GitHub merge SHA proves MERGED.

## "Go ahead" continuation contract

Check current main, PRs, checks and this board; select the next **eligible** single milestone, do not redo merged work, implement a reviewable small PR, report exact SHA and PASS/FAIL/PENDING/NOT RUN, and stop at protected merge/deploy or cost/secret/personal-data decisions. An agent instruction file is not background automation.

## Evidence and next decision

DOC-001: [PR #1 merged](https://github.com/Rofikali/Portfolio-Rofik/pull/1), post-merge main `ded33dcc` with passing CI and Pages workflow. SEC-001: [candidate report](portfolio/docs/SEC001_DEPENDENCY_REMEDIATION_2026-11-17.md), browser visual tests **NOT RUN**, audit **NOT CLEAN**, production deployment **NOT REQUESTED**. Select SEC-002 if compatibility remediation can safely proceed, or CICD-001 after owner review.

For skills and permissions see [AGENTS.md](AGENTS.md), [skills.md](skills.md); for general status and claims see [evidence register](portfolio/docs/status-and-evidence.md).
