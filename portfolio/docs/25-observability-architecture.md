# Observability Architecture — GitHub Pages Static Site

**Source reality (2026-11-17):** There is no production application server, internal trace pipeline, telemetry collector or verified installed Plausible/Sentry/OpenTelemetry service. Observability today means GitHub Actions results, human smoke tests and any separately run browser/a11y/performance checks. Consult [operating guide](09-observability.md), [release checklist](Production%20Readiness%20Checklist.md) and [cost/privacy model](product-strategy-and-unit-economics.md).

## Existing signals

| Signal | Actual source | Missing evidence / action |
| --- | --- | --- |
| Unit, typecheck, build | `.github/workflows/ci.yml` | Unit suite currently thin; need user-journey tests |
| Dependency advisories | `.github/workflows/security.yml` weekly audit | 1 HIGH Zod + 1 MODERATE minimatch recorded after SEC-001; gate still fails |
| Publication | `deploy-pages.yml` Pages run | Verify deployed SHA and representative routes/visual content |
| Client errors | Browser console / manual test | No verified error reporting SDK; do not claim Sentry active |
| Web Vitals | Lighthouse/manual reproducible capture | No current field data or scheduled synthetic measurement verified |
| Visitor inquiries | Owner-managed business records, if any | No inferred visitor analytics, conversion count or event telemetry |

## Minimal incident workflow

Detect failed action or reported broken page → identify source SHA, route and browser → classify severity/privacy/release scope → stop affected deploy → create bounded patch/rollback → verify CI and deployment → record follow-up in [risk register](29-risk-register.md). Do not paste sensitive logs, credentials or personal contact information in public PRs.

## If monitoring is proposed later

Compare no-code/manual checks, privacy-friendly analytics, and optional error reporting against user value, consent and recurring cost. Define retention, access, PII redaction and an opt-out/privacy notice before implementation. No API keys or tracking SDK are authorized here.
