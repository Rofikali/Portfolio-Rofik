# Portfolio Analytics Strategy — Decision Pending

**Current status: PLANNED, not deployed or configured.** No trustworthy visitor/recruiter count, click-through rate, funnel conversion or paid project revenue is available merely from code or documentation.

## Product objective

Help potential employers, clients and peers verify actual engineering work and contact the owner. The success metric is **qualified conversations and credible project evidence**, not maximum page-view tracking.

## Suggested low-intrusion metrics (only if approved and collected)

- **Content quality:** number of featured projects with repository and real implementation/test evidence.
- **Reliability:** successful exact-SHA CI/deploy checks; broken links and content age.
- **Experience:** measured Lighthouse LCP/CLS/INP, accessibility regressions and mobile behavior.
- **Business:** manually reported qualified inquiries / time window, actual meetings, owner-confirmed attributed work. Conversion rate requires a meaningful denominator; do not invent traffic/revenue.
- **Cost:** optional domain/analytics/support bills plus maintenance time; compare benefit and opportunity cost.

## Privacy and compliance gate

Before introducing any tracker (including Plausible, cookies, Sentry, social pixels or event scripts), obtain owner approval, define need and legal basis under relevant privacy obligations, review provider/data processing and jurisdictions, avoid storing PII, secrets or uploaded files, and record a deletion/retention policy. Prefer no tracking by default and aggregated manual observations.

## Status and next action

No provider installed or subscription approved by this strategy. If business demand justifies analytics, create a small ADR with alternatives, recurring cost, data map, user notices, consent requirements, test plan and success metric. See [product strategy](product-strategy-and-unit-economics.md) and [security reporting](../../SECURITY.md).
