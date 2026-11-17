# Portfolio-Rofik — Engineering Constitution

**Scope:** This repository is a public, content-driven engineering portfolio, not IMGENGINE's production image API. These instructions are repo policy for human/AI contributors, not an installed autonomous runner. Adapted in method—not in technology or release authority—from [IMGENGINE AGENTS](https://github.com/Rofikali/imgengine/blob/main/AGENTS.md) on 2026-11-17.

## Start here (minimal-context order)

1. Read this file, [next.md](next.md), and the touched source/configuration. Recheck current main HEAD, existing PRs and exact-SHA checks before choosing work.
2. Read only the corresponding section of [skills.md](skills.md), [HLD](portfolio/docs/hld.md), [LLD](portfolio/docs/lld.md), and domain-specific design document. Do not preload the entire knowledge base or repeat old CI success logs.
3. If the owner says **"go ahead"**, choose the next **READY** bounded milestone from the live NOW/NEXT/LATER board, after reconciling GitHub reality. Do not restart a merged or in-progress PR. If another approval is required, stop at that decision point.
4. One small branch/PR per milestone; update `next.md`, affected docs and evidence in the same PR. A proposed status change is not reflected on main until merge.

## Technology and architecture boundary

- Deployed product: **static Nuxt 4 + Vue 3 + TypeScript + Nuxt Content 3 + Tailwind CSS**, pnpm 10, Node 22, GitHub Actions/GitHub Pages. Application code is in `portfolio/`. Read `portfolio/package.json` and `portfolio/nuxt.config.ts` before changing the stack.
- Keep domain types/contracts framework-independent where useful. Use cases orchestrate retrieval, infrastructure adapters access Nuxt Content, Vue pages/components render. Some current pages query Nuxt Content directly: these are known boundary gaps, not a reason for wholesale rewrites.
- Prefer static Markdown content and build-time validation. **No runtime database, authentication server, payment processor, API, microservice, Rust, C FFI, Kafka or Redis for the portfolio without a written need and approved ADR.** Those may be subjects of linked portfolio case studies, not portfolio dependencies.
- Prioritize factual project evidence, accessible reader experience, responsive assets, working links, crawlable routes, and a clear contact path. Do not present planned IMGENGINE features as shipped or a GitHub link as a live product demo.
- Existing case studies and old docs may describe historical stack choices; distinguish **implemented / recorded-verified / partial / planned / historical** using [status register](portfolio/docs/status-and-evidence.md).

## Engineering quality (seven review lenses)

Apply [seven-level review](portfolio/docs/seven-level-engineering-model.md) proportionately: L1 requirement + repro; L2 focused implementation; L3 tests/failure paths; L4 interfaces and review; L5 cross-page/SEO/accessibility; L6 risks/cost/security/release; L7 simplicity, reproducibility and long-term evolution. Security, privacy, product, CA/MBA economics and management are additional reviews, not job titles or separate autonomous agents.

- **Clean, modular, secure code:** avoid needless duplication and premature abstraction; use SOLID/DRY/KISS/YAGNI as tradeoff tools, not mandates for many files.
- **Security:** treat dependencies, Markdown/HTML, URLs, GitHub Actions permissions, personal contact/resume information and client-side storage as trust boundaries. Never commit secrets; no server endpoint exists to protect by default. See [threat model](portfolio/docs/security-threat-model.md).
- **Accessibility:** keyboard, focus, landmarks, correct heading structure, reduced-motion, light/dark contrast, image alt text and mobile testing are required on changed user flows.
- **Performance:** measure before optimizing. Static generation and a passing build do not prove Lighthouse budgets or browser correctness. See [performance budget](portfolio/docs/23-performance-budget.md).
- **SEO/content:** make paths and slugs valid and unique; prevent draft exposure, broken links, misleading statistics and stale resumes. See [content/SEO policy](portfolio/docs/content-seo-accessibility.md).
- **Product/cost:** respect the portfolio's job-to-be-done (credible evidence to clients/hiring managers). Free Pages hosting is intentional; never add paid tools, analytics, tracking pixels, domains or services without owner approval and privacy/cost review.

## Verification and authority

- Docs-only: inspect changed links, path correctness and consistency; mark runtime checks **NOT RUN** if not executed. Do not claim a PR passes CI before the exact head is green.
- Code/UI: run impacted Vitest, `pnpm typecheck`, `NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate`; add focused Playwright/manual accessibility checks for altered browser journeys. Required CI still runs.
- Dependencies/CI/deployment: review advisories, lockfile, supply chain, Action versions/permissions and production branch triggers. Never suppress critical/high results by muting the audit. See [verification policy](portfolio/docs/change-scoped-verification.md).
- Avoid speculative performance/security claims. Report SHA, environment, tests passed/failed/pending/not-run, PR URL and risks; distinguish static source findings from executed tests.
- **No unsolicited merge, force push, production deploy, secret changes, purchase, publishing personal information, branch protection change or license selection.** Open a reviewable PR when the owner authorizes repository updates; merge/deploy only when authorized for that operation. CI auto-deployment after main merge is a release effect to surface before merge.
- Do not delete historical work without migration/evidence. Do not copy IMGENGINE's C/Rust/ABI or seven-job test gates into a Nuxt portfolio.

## Documentation index

[README](README.md) · [Current board](next.md) · [Skills](skills.md) · [Architecture HLD](portfolio/docs/hld.md) · [Source LLD](portfolio/docs/lld.md) · [Design patterns](portfolio/docs/design-patterns.md) · [DSA](portfolio/docs/dsa-algorithms.md) · [Security](portfolio/docs/security-threat-model.md) · [Product/finance](portfolio/docs/product-strategy-and-unit-economics.md) · [Evidence](portfolio/docs/status-and-evidence.md).

## Generated milestone state

<!-- docs-sync:begin -->
**NOW:** SEARCH-001 (IN_PROGRESS). **NEXT:** TEST-003, PERF-A11Y-001.

Every substantive app/test/dependency/workflow milestone MUST update `docs/engineering-state.json`, then run `node scripts/docs-sync.mjs --write` and `--check`. CI rejects stale generated blocks or a relevant code PR that omits the manifest. Generated sections of `next.md`, `AGENTS.md`, `skills.md`, both READMEs and the evidence register are **not hand-edited**. Source-specific HLD/LLD/ADR/security/test docs still require human engineering judgment.

After a main merge the trusted reconciliation workflow verifies registered PR merge SHAs and can open a **draft docs PR only**; it cannot merge, deploy, accept risk, spend, publish personal data, create fictitious proof or choose licenses. [Full runbook](docs/docs-sync-contract.md).

**Blocked:** SEC-002, BRANCH-001. Passing CI is not proof of clean audit or production readiness.
<!-- docs-sync:end -->
