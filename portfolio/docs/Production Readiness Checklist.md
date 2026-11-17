# Portfolio-Rofik — Production Readiness / Release Gate

**Status:** Evidence checklist, not a release certificate. Read [release management](16-release-management.md), [current board](../../next.md), [risk register](29-risk-register.md) and [security policy](../../SECURITY.md). Applies before claiming the *current* website or a new milestone is production-ready.

## Pre-merge code and content

- [ ] Main/PR SHA, change scope and reviewer decision recorded; branch protection/settings inspected.
- [ ] Changed behavior tests have credible assertions; no hidden failing tests.
- [ ] `pnpm install --frozen-lockfile`, `pnpm test`, `pnpm typecheck` and `NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate` PASS **at exact PR SHA** in CI.
- [ ] `pnpm audit --audit-level high` checked and any HIGH/CRITICAL finding resolved or explicitly escalated for separate owner security decision; **never silently ignore**.
- [ ] Dependency lockfile, Actions permissions and assets audited for changes; third-party licenses/provenance checked.
- [ ] Public resume, project credibility claims, screenshots and customer/personal information owner-approved.
- [ ] Documentation, ADR (if applicable), milestone status and rollback plan updated.

## Visitor/browser release checks

- [ ] Static Pages subpath `/Portfolio-Rofik/`, homepage, projects, case studies, docs/search and 404s smoke-tested.
- [ ] CSS/font/images checked in mobile and desktop browsers; Tailwind nesting warning evaluated visually.
- [ ] Keyboard/focus/landmark labels, light/dark, contrast and reduced-motion tested (WCAG 2.2 AA target).
- [ ] SEO canonical/sitemap/robots/OG metadata and page titles checked against generated URLs.
- [ ] Measured performance/Lighthouse targets reported with device, network, SHA and date; no invented 95+ scores.
- [ ] Contact/outbound links and resume download inspected, without collecting private data inadvertently.
- [ ] Correct production environment and reviewed deployment branch; no accidental feature-branch publish.

## Post-merge / release evidence

- [ ] GitHub merge SHA and authorized deployment/run links recorded.
- [ ] Published site verified against expected SHA; no independent security/privacy/data leak.
- [ ] Failure response: revert by reviewed PR, deploy and verify previous known-good behavior.
- [ ] Update [risk register](29-risk-register.md) and [live status board](../../next.md) as **MERGED**, **RELEASED**, **BLOCKED** or **PARTIAL** based on *actual* evidence.

**As of 2026-11-17:** PR #3 post-merge CI and Pages deploy passed at `2ff1e48e`. Browser/Lighthouse tests were not newly run for this document, `main` branch protection was previously not enabled, and two dependency advisories remain. This checklist is **not fully checked**.
