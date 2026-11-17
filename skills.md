# Portfolio-Rofik — Reusable Engineering Skill Recipes

**Not an executable installed tool or background automation.** `AGENTS.md` governs permissions; `next.md` selects work; this file explains *how*. Inspired by IMGENGINE's concise task/evidence discipline, but scoped to this static website.

## Startup / "go ahead" skill
1. Fetch current main SHA, open PRs, relevant CI and `next.md`. Classify any old board claim against fresh GitHub evidence.
2. Select one READY milestone with no unresolved safety/owner prerequisite; never redo merged work. Create a small branch and acceptance checklist.
3. Read touched source, tests and ONE relevant canonical design doc; keep evidence short.
4. Implement, validate, document, open PR, and stop at review/merge boundary unless explicit authorization exists.
5. Write handoff: task ID, exact branch/head SHA, changed paths, source facts, PASS/FAIL/NOT RUN/PENDING by command, PR/check URLs, risks, next action.

## Skill 1 — Content and portfolio credibility
- Trace each headline to a real project/repo, feature, screenshot or measured evidence. Link both source and actual public demo only if operational.
- Use **Implemented**, **Recorded verified (SHA/date)**, **Partial**, **Planned**, or **Historical** per [evidence policy](portfolio/docs/status-and-evidence.md).
- Check frontmatter fields, unique slugs, dates, navigation and generated routes; never silently invent users, revenue, employers, years or benchmark numbers.
- Use domain-neutral case-study sections: problem, constraints, alternatives, architecture, security, validation, measurable result, tradeoffs, lessons and current status.

## Skill 2 — Nuxt route/UI feature
- Identify pages/components/composable/metadata that change; prefer native HTML and small typed Vue components.
- Validate mobile, keyboard, focus order, labels, light/dark contrast, reduced motion, missing assets and 404 states.
- Run targeted Vitest, typecheck, static generate; Playwright E2E for navigation, search, theme, or download changes. Browser tests require an actual browser.

## Skill 3 — Content repositories and boundaries
- Define a typed query contract only where two+ consumers need it. Domain types and repository interfaces should not import Vue or Nuxt Content.
- Use adapter for `queryCollection` interactions where it improves testability; avoid DDD ceremony for trivial static data.
- Test mapper fallbacks, published-only filtering, unique slugs and known-invalid paths. Never claim an abstraction exists where the route directly queries Nuxt.

## Skill 4 — Algorithms and search
- Begin with data size and target UX. Small static arrays may use O(n) scan; document complexity rather than implementing speculative infrastructure.
- For unified search, normalize case/whitespace, create build-time or once-per-session index, search projects + case studies + docs, preserve stable ranks, derive canonical paths and avoid unbounded highlighting/HTML.
- Add tests for Unicode/empty query/multiple types/duplicate slugs; measure bundle/download/interaction before selecting Fuse, trie or hosted search. See [DSA](portfolio/docs/dsa-algorithms.md).

## Skill 5 — Security and dependency repair
- Run `pnpm audit --audit-level high`; classify prod, build and dev dependency reachability, fixed versions and advisory dates. Do not claim the GitHub Actions historical result is fresh.
- Apply minimal compatible dependency updates and lockfile changes, run install with frozen lockfile, tests, typecheck and generate. Verify Actions permissions/triggers if touched.
- Do not publish secrets, resume personal data beyond owner-reviewed text, form submissions, tracker data or outbound services without explicit decision.

## Skill 6 — SEO, content and accessibility
- Test `NUXT_APP_BASE_URL=/Portfolio-Rofik/` links/assets on generated HTML, sitemap, robots, canonical and social preview.
- Generate rather than hand-maintain sitemap when content grows; require discoverability and no route collisions.
- Use keyboard, screen reader checks where available, contrast checks, viewport tests, axe and manual verification. Lighthouse scores are measured only when run.

## Skill 7 — Performance discipline
- Capture page and asset size, LCP/CLS/INP, JS/CSS size and cache behavior under repeatable conditions.
- Optimize initial hero visual, project thumbnails, fonts and client hydration. Verify before/after; avoid universal 95+ claims without a report.
- Keep accessibility and image clarity while compressing. Avoid deploying instrumentation that collects personal data by default.

## Skill 8 — CI and releases
- Work in `portfolio/`, use pnpm + Node 22 and root workflows. Run focused tests first.
- Document distinction between GitHub Actions **test CI**, **audit** and **Pages deploy**; deployment to production is a release effect. No bypass of failed checks.
- Any workflow trigger/permission/branch policy change needs independent review and rollback. See [CI design](portfolio/docs/cicd.md).

## Skill 9 — Architecture (HLD/LLD/patterns/ADR)
- Update architecture diagrams only after tracing source. Mark conceptual sketches as *planned*.
- For ADR record decision, context, alternatives, consequence, status and date; do not insert unnecessary Redis/Kafka/DB to impress reviewers.
- Match class/route names to tracked source. See [HLD](portfolio/docs/hld.md), [LLD](portfolio/docs/lld.md), [patterns](portfolio/docs/design-patterns.md).

## Skill 10 — CA/MBA/management review
- Define audience, portfolio conversion goal and what counts as an inquiry, interview or client lead.
- Compare low-cost/static alternatives and recurring cost, privacy exposure, maintainability and opportunity cost.
- Distinguish traffic/engagement from conversion and revenue; do not invent analytics, ROI, CAC or LTV figures. See [commercial model](portfolio/docs/product-strategy-and-unit-economics.md).

## Skill 11 — PR review and evidence
- Review changed behavior against one stated acceptance contract. Check URLs, spelling, claims, security, a11y, architecture and rollback.
- Summarize tests with exact SHA; do not paste all success logs or consume tokens by running unrelated suites twice.
- Verify no unsanctioned code, deployment, publishing, personal data or dependencies were introduced by a documentation-only PR.

## Skill 12 — Doc-only milestone
- Check Markdown headings, relative link destinations, duplicate/contradictory rules, stale status and actual source paths.
- No automatic need for a full build, Docker, Rust, C fuzz or load test. CI remains the authority for what its workflow executed.
- Explain exactly which checks were not run.
