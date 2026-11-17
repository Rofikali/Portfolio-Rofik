# Portfolio-Rofik — Live NOW / NEXT / LATER board

**Updated:** 2026-11-17 (draft [PR #1](https://github.com/Rofikali/Portfolio-Rofik/pull/1) open for review; no main merge or release is implied). This is the **single task-selection board**, not a long historical chat. Cross-check GitHub HEAD, open PRs and exact-head CI before any continuation. Source-of-truth precedence: GitHub merged source/checks > current board > historic planning prose.

**Verified baseline before this proposal:** `main` at `46bd300ba74e6a2ccabd916f00f9da720f7aca14` (2026-07-02); CI succeeded on that SHA; Pages deployed successfully on an earlier run but a later July 2 deployment attempt failed after build; security audit on 2026-08-31 failed with **35 advisories (2 critical, 27 high, 5 moderate, 1 low)**. No fresh dependency audit, Lighthouse run, local browser run, or production status certification is claimed. [CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28585405339) · [Pages success](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28585405304) · [Pages later failure](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/28586292162) · [Audit](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/33391514956).

## NOW / NEXT / LATER

| Lane | ID / state at proposal time | Smallest next action | Acceptance / stop condition |
| --- | --- | --- | --- |
| **NOW** | DOC-001 — **PR_OPEN / CI_PENDING (draft [#1](https://github.com/Rofikali/Portfolio-Rofik/pull/1))** | Adapt IMGENGINE-style AGENTS/skills/next/readmes/HLD/LLD/patterns/DSA/security/a11y/SEO/finance to portfolio | Reviewable docs diff; source links accurate; exact PR/CI evidence added after available; no runtime/production claims |
| **NEXT P0** | SEC-001 — **READY after DOC-001 review** | Triage and fix current dependency advisories in isolated PR | Fresh `pnpm audit` and compatible update + test/typecheck/generate evidence; never hide findings |
| **NEXT P1** | CICD-001 — **PLANNED** | Review Pages trigger scope, subsequent failed deployment and branch protection | One guarded production deployment path; failure explained; no unauthorized merge/deploy |
| **NEXT P1** | TEST-001 — **PLANNED** | Replace arithmetic smoke as meaningful gate; cover theme, route, content and search | Focused Vitest plus Playwright critical journeys; real head-SHA checks |
| **NEXT P1** | SEARCH-001 — **PLANNED** | Search projects and case studies as well as documentation | Query returns relevant items across three types; empty/no-match states and URL tests |
| **NEXT P1** | CONTENT-001 — **PLANNED** | Truth-check experience/skill percentages and project proof | Owner-verified claims; links/sitemap; no invented project production status |
| **NEXT P1** | PERF-A11Y-001 — **PLANNED** | Optimize oversized images and validate accessible themes | Measured mobile Lighthouse/axe/keyboard and assets; before/after evidence |
| **LATER P2** | DOC-002 — **PLANNED** | Reconcile empty/overlapping old docs, published metadata, generated sitemap | No duplicate source of truth, missing content, draft leakage or dead route |
| **LATER P3** | GROWTH-001 — **PLANNED / OWNER DECISION** | Evaluate custom domain or privacy-conscious analytics against real demand | Cost/privacy ADR and owner consent; no added paid subscription by default |

## State vocabulary and transitions

`PLANNED` = idea only; `READY` = authorized and unblocked; `IN_PROGRESS` = work started; `PR_OPEN/CI_PENDING` = branch published but not verified; `READY_FOR_REVIEW` = required exact-head evidence green; `MERGED` = GitHub verified merge; `RELEASED` = verified live deployment and owner authorization; `BLOCKED` = missing dependency/decision. Additionally use `RECORDED_VERIFIED` for historic tests, `PARTIAL` for incomplete user flow and `HISTORICAL` for superseded docs.

An agent receiving **"go ahead"** should reconcile this board and work on the next eligible milestone in scope, create a bounded PR when authorized, and stop at approval/merge/release gates. The instruction file itself does not run an agent in the background. **DOC-001 is not MERGED**; after PR #1 checks and owner review, record actual checked head SHA and merge SHA in the next authorized status reconciliation. Do not add numbers for PRs, CI or performance until verifiable.

## Current priority decision

DOC-001 was requested before security remediation. Once its PR is reviewed/merged, SEC-001 is the first technical correction. Confirm the security state is still true on current HEAD when work begins.

## Compact milestone report

- ID / intent / owner-approved boundary
- Main baseline SHA / branch head SHA / PR
- Paths changed / acceptance contract
- Exact commands: PASS, FAIL, NOT RUN, PENDING
- Security/a11y/SEO/operating-cost risks
- Decision needed / next milestone after verified merge

More detailed evidence: [status register](portfolio/docs/status-and-evidence.md). Operational recipes: [skills](skills.md).
