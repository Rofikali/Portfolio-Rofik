# Portfolio-Rofik — Live NOW / NEXT / LATER

**Reconciled 2026-11-17 — TEST-002 browser workflow proposed.** GitHub main, PR state and exact-head checks supersede any snapshot here. No unattended background runner is implied.

**Current verified main:** `f2d54641be2de66ae0be720ecf2b3aa912408fd0`. [DOC-001 #1](https://github.com/Rofikali/Portfolio-Rofik/pull/1), [SEC-001 #2](https://github.com/Rofikali/Portfolio-Rofik/pull/2), [CICD-001 #3](https://github.com/Rofikali/Portfolio-Rofik/pull/3), [DOC-002 #4](https://github.com/Rofikali/Portfolio-Rofik/pull/4), [TEST-001 #5](https://github.com/Rofikali/Portfolio-Rofik/pull/5) **MERGED**. [Main CI PASS](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44069632333). [Pages deploy run](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44069632342) was in progress when initially checked; do not claim it succeeded without a fresh result. Do not redo the merged milestones.

## NOW / NEXT / LATER

| Lane | Milestone and status | Scope / acceptance |
| --- | --- | --- |
| **NOW P1** | **TEST-002 — IN_PROGRESS / BROWSER RESULT REQUIRED** | Run Playwright Chromium browser suite against generated Pages-base site in a pinned Linux Docker container on relevant PR changes; review actual test duration and failures. Unit/access tests are already merged in #5. [Test strategy](portfolio/docs/15-testing-strategy.md). |
| **BLOCKED P0** | **SEC-002 — OPEN HIGH RISK** | 1 high transitive `zod@3.25.76` and 1 moderate `minimatch@10.2.6` from latest isolated audit after SEC-001. Safe fix needs upstream compatibility or a bounded experimental PR. Do not force overrides or suppress audit. |
| **OWNER SETTINGS** | **BRANCH-001 — NOT IMPLEMENTED** | Main remained unprotected at API check. Owner to configure PR/required CI and Pages environment restrictions. |
| **NEXT P1** | **TEST-003 — PLANNED** | Add accessible keyboard/contrast and production-link smoke only after the core browser suite proves stable and useful. |
| **NEXT P1** | **SEARCH-001 — PLANNED** | Search published docs, projects and case studies with clear URL/empty/unsafe input tests. |
| **NEXT P1** | **PERF-A11Y-001 — PLANNED** | Reconcile Tailwind/PostCSS nesting warning, measure project images, mobile themes/contrast and Lighthouse. |
| **NEXT P1** | **CONTENT-001 — PLANNED** | Owner-verify resume, proof/status statements and private data before editing public claims. |
| **LATER P2** | **DOC-003 — PLANNED** | Reconcile duplicate content collections, sitemap and public generated-route correctness with source tests. |
| **OPTIONAL** | **WASM-DEMO-01 — DEFERRED** | [Proposed ADR](portfolio/adr/0005-optional-rust-wasm-demo.md) for benchmarked lazy-loaded Rust/WASM browser demo; no runtime change authorized. |
| **LATER** | **GROWTH-001 — OWNER DECISION** | Domain/analytics only with measured demand, privacy review and explicit cost approval. |

## Continuation, safety and business authority

For each **go ahead**: check main SHA, merged/open PRs and checks; pick one eligible milestone; create scoped branch/PR; give exact SHA, PASS/FAIL/PENDING/NOT RUN, tests, risk/rollback; stop before merge/release/paid/secret/licensing/personal-data changes. `MERGED` requires a GitHub merge SHA, `RELEASED` requires an observed site, and a green CI build **does not** mean a clean audit.

[AGENTS](AGENTS.md) · [Skills](skills.md) · [Seven-level/CA/MBA governance](portfolio/docs/operating-governance.md) · [Security](SECURITY.md).
