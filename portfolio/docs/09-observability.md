# Observability — Static Portfolio

**Canonical architecture:** [observability design](25-observability-architecture.md); [privacy and economics](product-strategy-and-unit-economics.md).

There is no always-on portfolio application server. Actual operational evidence comes from **GitHub Actions** (test/typecheck/build/deploy/security audit) and, if explicitly run, browser synthetic tests and field/lab web performance data.

**Current baseline:** the repo has CI and Pages workflows; no independently verified Plausible, Sentry, OpenTelemetry, server traces, contact-form event stream or automatic alerting installation. Do not claim visitor metrics or error telemetry were collected.

**Minimum manual monitoring:** confirm deploy status and exact SHA after authorized merges, periodically check core routes, broken assets, Pages status, advisory audit, responsive/a11y/performance budgets. Record failure and remediation with links in [risk register](29-risk-register.md).

**Privacy and cost:** any third-party tracking/error monitoring must pass owner consent, data minimization, privacy notice, regional compliance and recurring-cost review. Prefer privacy-preserving aggregate data and no tracking by default.
