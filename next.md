# Portfolio-Rofik — Live NOW / NEXT / LATER

**Reconciled 2026-11-17 (DOC-002 draft [PR #4](https://github.com/Rofikali/Portfolio-Rofik/pull/4), exact-head CI pending at publication).** This is the task selector; actual GitHub main/PR/check state supersedes a dated board.

**Latest verified main:** `2ff1e48e5d9b7de2ff27edf36cf367dfb1708d54`. Three bounded milestones have been **MERGED**: [DOC-001 PR #1](https://github.com/Rofikali/Portfolio-Rofik/pull/1), [SEC-001 PR #2](https://github.com/Rofikali/Portfolio-Rofik/pull/2) and [CICD-001 PR #3](https://github.com/Rofikali/Portfolio-Rofik/pull/3). Exact-main [CI PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624587) and [GitHub Pages deploy PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624434). Do not repeat #1–#3 or claim that CI equates to a clean security audit or browser readiness.

## NOW / NEXT / LATER

| Lane | Milestone / status | Next small task and acceptance evidence |
| --- | --- | --- |
| **NOW P1** | **DOC-002 — PR_OPEN / CI_PENDING ([draft PR #4](https://github.com/Rofikali/Portfolio-Rofik/pull/4))** | Fill empty ADR, contributor/security and operations placeholders without duplicating HLD/LLD; reconcile misleading deployment/SEO/analytics/branch-protection claims, add release checklist, Rust/WASM *proposal* only. Docs-only path/links and current CI required; no license selection, code or deployment change. |
| **BLOCKED P0** | **SEC-002 — PATCH BLOCKED / OPEN SECURITY RISK** | Remaining 1 HIGH `zod@3.25.76` and 1 MODERATE `minimatch@10.2.6` via Nuxt Content after fresh SEC-001 audit. Major patched versions require upstream compatibility or isolated tested fix; do not suppress `pnpm audit` or declare accepted risk unilaterally. |
| **OWNER SETTING** | **BRANCH-001 — NOT IMPLEMENTED** | Main unprotected at latest inspection; owner should configure branch rulesets/required CI and Pages deployment environment restriction. Merged CICD-001 guards alone are insufficient. |
| **NEXT P1** | **TEST-001 — READY AFTER DOC-002 REVIEW** | Implement meaningful unit tests for published/slug/search logic and core browser journey smoke with Playwright when a browser is available; separate small PR, exact-SHA tests/typecheck/generate. |
| **NEXT P1** | **PERF-A11Y-001 — PLANNED** | Check Tailwind/PostCSS warning, mobile themes, contrast, oversized images and measured Lighthouse. |
| **NEXT P1** | **SEARCH-001 — PLANNED** | Unified projects, case studies, published docs search with stable safe URLs and regression tests. |
| **NEXT P1** | **CONTENT-001 — PLANNED** | Owner-verify public resume claims, project demo/status evidence and contact data. |
| **LATER P2** | **DOC-003 — PLANNED** | Audit duplicate/legacy public documentation, actual sitemap generation and category contracts after code/test evidence; avoid bulk rewrite. |
| **OPTIONAL** | **WASM-DEMO-01 — DEFERRED / NO IMPLEMENTATION AUTHORIZATION** | [ADR-0005](portfolio/adr/0005-optional-rust-wasm-demo.md) outlines a lazy-loaded browser-only Rust/WASM demo, benchmarked against JS/TS; not part of active site's stack. |
| **LATER** | **GROWTH-001 — OWNER DECISION** | Paid domain or analytics only if real audience/cost/privacy need exists. |

## State truth and permission rules

Statuses: `PLANNED`, `READY`, `IN_PROGRESS`, `PR_OPEN/CI_PENDING`, `READY_FOR_REVIEW`, `BLOCKED`, `MERGED`, `RELEASED`, plus `PARTIAL` / `RECORDED_VERIFIED` / `HISTORICAL`. GitHub merge SHA proves MERGED; only actual deployed-site verification supports RELEASED. When owner says **go ahead**: inspect current main, PRs and CI; choose the next eligible small milestone; implement one branch and reviewable PR with current evidence; update board; stop at human approval gates. Written instructions do not run a background agent.

**Handoff minimum:** milestone ID, baseline/head SHA, PR, changed files, PASS/FAIL/NOT RUN/PENDING checks, security/UX/cost impact, rollback, next action. [AGENTS](AGENTS.md) · [Skills](skills.md) · [Governance](portfolio/docs/operating-governance.md) · [Security](SECURITY.md).
