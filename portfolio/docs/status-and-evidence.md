# Source/Delivery Status and Evidence Register

**Baseline snapshot:** Public GitHub main `46bd300ba74e6a2ccabd916f00f9da720f7aca14` at 2026-11-17. Facts below derive from reviewed source and historical Actions. **No fresh local install, browser E2E, Lighthouse or dependency scan was performed for this documentation update.** Verify fresh HEAD before acting.

## Current reconciliation after earlier milestones (2026-11-17)

This section supersedes outdated point-in-time conclusions in the original July/August baseline table below, without erasing that historical evidence.

| Milestone | Verified event | Remaining limitation |
| --- | --- | --- |
| DOC-001 | [PR #1 merged](https://github.com/Rofikali/Portfolio-Rofik/pull/1) | Docs alone do not validate all user paths |
| SEC-001 | [PR #2 merged](https://github.com/Rofikali/Portfolio-Rofik/pull/2) | A new audit reported **2 residual findings: 1 high Zod + 1 moderate minimatch**; `pnpm audit --audit-level high` is not clean |
| CICD-001 | [PR #3 merged](https://github.com/Rofikali/Portfolio-Rofik/pull/3) | Main-only Pages trigger and deploy-only write credentials present; **main branch protection not verified as enabled** |
| Post-merge checks | [CI succeeded](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624587), [Pages succeeded](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44065624434) at `2ff1e48e5d9b7de2ff27edf36cf367dfb1708d54` | No freshly recorded browser, accessibility, Lighthouse or full live-route smoke proof |
| DOC-002 | Feature-branch documentation proposal | Pending PR review/CI; does not update main until merged |

**License status:** tracked `portfolio/LICENSE` is zero bytes, so no MIT/Apache or other license is granted by that file; legal/provenance decisions are owner-controlled. [Security disclosure](../../SECURITY.md), [contributor rules](../CONTRIBUTING.md), [governance](operating-governance.md), [Rust/WASM proposed ADR](../adr/0005-optional-rust-wasm-demo.md).

## Status vocabulary

- **PLANNED:** document proposal, no implementation evidence.
- **IMPLEMENTED:** source or committed configuration exists, but may not be tested.
- **RECORDED-VERIFIED:** dated passing tests/checks at a particular SHA; not fresh.
- **PARTIAL:** a relevant component exists but a full visitor/user journey is incomplete.
- **PR_OPEN / CI_PENDING:** branch exists or checks running, not yet merged.
- **MERGED:** verified GitHub merge SHA on main.
- **RELEASED:** separately verified publication of that exact release, not implied by docs or an in-flight PR.
- **BLOCKED:** prerequisite or owner/security decision missing.
- **HISTORICAL:** superseded documentation or older architecture.

## Audited inventory

| Capability | Status | Evidence / gap |
| --- | --- | --- |
| Nuxt 4/Vue/TS static application | IMPLEMENTED; RECORDED-VERIFIED build/CI | `package.json`, `nuxt.config.ts`, [July 2 CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28585405339) |
| Github Pages production deployment | RECORDED success plus later failure | [Successful run](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28585405304), [later failure](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28586292162); current live deploy state not revalidated |
| Three featured project pages and case studies | IMPLEMENTED source | `src/content/projects`, `src/content/case-studies`; evidence/accuracy must be owner reviewed |
| Theme preference toggle | IMPLEMENTED source | `useThemeMode.ts` and navbar; automated browser/a11y proof absent |
| Search across every content type | PARTIAL | `src/pages/search.vue` filters documentation only; project/case-study counts displayed |
| Documentation route + repository | PARTIAL correctness | `getAll()` filters Published, `getBySlug()` lacks Published check |
| Vitest checks | RECORDED run, inadequate behavioral tests | Two test files: arithmetic smoke + required field presence |
| Playwright E2E | PLANNED | Dependency present; no committed browser suite found |
| Security dependency audit | BLOCKED on 2026-08-31 historical run | [35 advisories (2 critical, 27 high)](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/33391514956); current severity needs fresh run |
| Mobile accessibility and Lighthouse 95+ | PLANNED targets | No measured report in reviewed evidence |
| Protected main / single production trigger | PLANNED | Main unprotected and Pages trigger includes feature branch at audited point |
| Analytics, hosted API, DB, runtime microservices | NOT VERIFIED / OUT OF SCOPE | Do not claim installed by architecture prose alone |

## Source of truth and change discipline

Historical screenshots, old architecture docs, commit messages and marketing copy are weaker evidence than actual source/tests/CI. Never call a project "live" merely because its `demoUrl` points to GitHub. For benchmark, security or business claims record: commit SHA, command, machine/browser, inputs, baseline, result, date and remaining limitations.

**Public content policy:** distinguish (a) architecture illustration, (b) implemented source, (c) recorded test at SHA, (d) current measured production behavior, (e) planned. Mark unverified technology references within portfolio case studies accordingly.

Canonical task priority is [root next.md](../../next.md), not historic `docs/30-roadmap.md` or an old article. Update this register when evidence changes; minimize repeating history across files.

## Generated milestone state

<!-- docs-sync:begin -->
**Verified workflow snapshot (2026-11-17):** main `e76829c25223` · [CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44075217503) · [Pages](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44075217337). Workflow completion verified; no full accessibility/security/production-site certificate.

**Current registered work:** DOCSYNC-001 IN_PROGRESS.

| Verified merge | Pull request | Merge SHA |
| --- | --- | --- |
| DOC-001 | [PR #1](https://github.com/Rofikali/Portfolio-Rofik/pull/1) | `ded33dcc0564` |
| SEC-001 | [PR #2](https://github.com/Rofikali/Portfolio-Rofik/pull/2) | `e9b94a0a9f82` |
| CICD-001 | [PR #3](https://github.com/Rofikali/Portfolio-Rofik/pull/3) | `2ff1e48e5d9b` |
| DOC-002 | [PR #4](https://github.com/Rofikali/Portfolio-Rofik/pull/4) | `e6575b727600` |
| TEST-001 | [PR #5](https://github.com/Rofikali/Portfolio-Rofik/pull/5) | `f2d54641be2d` |
| TEST-002 | [PR #6](https://github.com/Rofikali/Portfolio-Rofik/pull/6) | `e76829c25223` |

**Open risks (not automatically resolved):**
- **HIGH SEC-002:** Zod high and minimatch moderate advisories unresolved. A passing build does not clear the audit.
- **HIGH BRANCH-001:** GitHub main was unprotected at latest verified API check; source workflow guards are not rulesets.
- **MODERATE PERF-A11Y-001:** Tailwind nesting warning and no complete Lighthouse/WCAG/public-CDN validation.

This generated section supersedes dated historical tables below. A PR merge SHA does not certify production release, browser behavior, security, conversions or financial results. [Runbook](../../docs/docs-sync-contract.md).
<!-- docs-sync:end -->
