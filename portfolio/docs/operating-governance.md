# Engineering, Security, CA/MBA and Management Governance

**Scope:** An operating decision checklist for a **public static portfolio**—not a second architecture specification or a claim that seven humans/agents are employed. Root [AGENTS](../../AGENTS.md) governs agent boundaries; [seven-level model](seven-level-engineering-model.md) explains L1–L7 review lenses; [product/finance model](product-strategy-and-unit-economics.md) governs business measurement.

## One owner, proportionate review

| Lens | Decision this reviewer checks | Necessary proof |
| --- | --- | --- |
| L1/L2 engineer | Exact source, requirement and small working change | Repro, focused diff |
| L3 engineer | Input/error/boundary regressions | Tests of missing slug, theme, URL, search and drafts |
| L4/L5 staff | Typed content contract, component reuse, build/SEO/a11y | HLD/LLD/ADR when changed, affected journey checks |
| L6/L7 principal/distinguished | Is this feature necessary and is the static architecture still sufficient? | Alternatives, security/cost/maintenance/reversal decision |
| Security engineer | Dependencies, untrusted Markdown, privacy, production publish authority | Threat model, audit, secure diff/approval |
| CA/finance | Spending, maintenance time, realistic leads/revenue attribution | Cost assumptions, no fabricated ROI, explicit purchases |
| MBA/product | Visitor intent, credibility, proof and conversion friction | Persona, desired action, evidence, quality metric |
| Engineering management | One bounded milestone, scope/owner/dependencies/review/release | `next.md` status, exact-SHA checks, risk and handoff |

**Not every PR requires a meeting or seven long essays.** A typo needs content accuracy and a link check; security/workflow/third-party upload changes need escalation and independent review. No agent may override repository owner approval, merge, public deployment, license choice, purchase or publication of personal data.

## Decision rights and approval gates

| Decision | Agent may propose | Requires human authorization |
| --- | --- | --- |
| Docs correction or tests on a feature branch | Yes | Merge into main if not already authorized |
| Narrow Vue/TS refactor scoped in `next.md` | Yes, with tests and PR | Production-changing merge/deployment |
| Analytics, external email/form, personal data collection | Assess and ADR | Provider choice, privacy notices, consent, costs and publication |
| Rust/WASM demonstration | Design and benchmark plan | Package/toolchain introduction and public feature scope |
| Branch protection/security settings | Recommend based on current state | Actual repository/admin setting change |
| License selection or use of private client work | No unilateral decision | Explicit rights/provenance/owner approval |
| Urgent security fix | Investigate safely, prepare PR | Risk acceptance, secrets rotation and deployment |

## Monthly / per-change operating rhythm

- At **each go ahead**: reconcile GitHub main/PR/checks to [next.md](../../next.md); pick one eligible bounded task, not history.
- At **each PR**: document business/visitor objective, security and a11y effects, scoped verification and rollback.
- At **each actual merge**: observe CI and Pages result; only mark RELEASED after true production verification.
- **Monthly or meaningful update:** review content freshness, public resume claims, package advisories, deployment settings, broken links, hosting/cost exposure and missed visitor journeys. This is a suggested cadence, **not** a scheduled automation.
- Finance records: track only actual invoices/fees and recorded owner time; don't calculate lead conversion, profit or return on investment from guesses.

## Source of truth

[Status + evidence](status-and-evidence.md) · [Risk register](29-risk-register.md) · [Release checklist](Production%20Readiness%20Checklist.md) · [Security policy](../../SECURITY.md) · [Rust/WASM proposed ADR](../adr/0005-optional-rust-wasm-demo.md). Do not create a second backlog or copy complete audit logs into this file.
