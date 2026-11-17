# Source/Delivery Status and Evidence Register

**Baseline snapshot:** Public GitHub main `46bd300ba74e6a2ccabd916f00f9da720f7aca14` at 2026-11-17. Facts below derive from reviewed source and historical Actions. **No fresh local install, browser E2E, Lighthouse or dependency scan was performed for this documentation update.** Verify fresh HEAD before acting.

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
