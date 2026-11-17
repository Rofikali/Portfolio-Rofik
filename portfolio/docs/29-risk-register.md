# Portfolio Risk Register — Audited Baseline

**Review:** 2026-11-17 at main `46bd300`. Qualitative likelihood/impact reflect investigation priority, not quantified probability.

| ID | Risk | Likelihood / impact | Evidence | Next treatment |
| --- | --- | --- | --- | --- |
| R-01 | Dependency vulnerability / build-time exploit | High / High | Aug 31 audit: 35 advisories, 2 critical | SEC-001; fresh audit, patch, exact-head gates |
| R-02 | Unreviewed production publishing branch | Medium / High | Deploy triggers include `featured/v2` | CICD-001 restrict production to reviewed main |
| R-03 | Later Pages deployment failure | Medium / High | July 2 build passed, deploy job failed | CICD-001 inspect job/environment; verify live artifact |
| R-04 | Weak automated behavior coverage | High / Medium | arithmetic smoke + frontmatter label checks | TEST-001 meaningful unit/E2E suite |
| R-05 | Content credibility/experience claims | Medium / High | hard-coded years, skill percentages, demo URLs linking GitHub | CONTENT-001 owner-verified resume/projects |
| R-06 | Broken/discoverability routes | Medium / Medium | manual sitemap, overlapping collection globs, mixed route resolver | SEARCH-001 / DOC-002 route generator + validation |
| R-07 | Published/draft exposure | Medium / Medium | `getBySlug()` does not filter Published | TEST-001 / DOC-002 authorized change |
| R-08 | Performance budget violation | High / Medium | 1.88 MB / 611 KB tracked images | PERF-A11Y-001 compress and measure |
| R-09 | Theme contrast and keyboard gaps | Medium / Medium | CSS overrides; no committed E2E | PERF-A11Y-001 axe + manual audit |
| R-10 | New service costs/privacy creep | Medium / Medium | potential analytics/form/custom domain | product ADR and owner approval |
| R-11 | Documentation drift / agent duplication | High / Medium | old roadmap says planned; empty docs | DOC-001 then DOC-002 canonical links/status |

Escalate immediately for confirmed credential leakage, public sensitive data, dependency exploit exposure, or unintended production publish. Review register when new CI/PR evidence arrives. No risk is considered fixed merely because a documentation PR is merged.
