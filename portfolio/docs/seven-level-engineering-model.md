# Seven-Level Engineering + Security, CA/MBA and Management Model

**Status:** proportionate review framework for Portfolio-Rofik; not seven independent agents, job titles, proof of competency or permission to merge/spend/deploy. Adapted in method from [IMGENGINE's operating model](https://github.com/Rofikali/imgengine/blob/main/docs/SEVEN_LEVEL_ENGINEERING_OPERATING_MODEL.md), not its C/Rust stack.

| Lens | Key question | Review for this site | Deliverable |
| --- | --- | --- | --- |
| **L1 Junior** | What exists? | Find route/component, reproduce issue, check content path | Source links + clear acceptance statement |
| **L2 Mid-level** | Is the change correct? | Small typed Vue/TS or Markdown change; predictable errors | Focused diff + simple tests |
| **L3 Senior** | What breaks? | 404, cross-link, theme persistence, mobile, missing image, content schema | Regression and edge-case evidence |
| **L4 Staff** | Are boundaries clear? | Content adapter vs domain vs presentation, routing reuse, ADR | Architecture tradeoffs, no needless ceremony |
| **L5 Senior Staff** | Does system quality hold? | SEO, a11y, static generation, image delivery, maintainability | Cross-route quality gate and rollback |
| **L6 Principal** | Does it meet stakeholder/risk needs? | Credible portfolio, privacy, dependency security, cost, project claims, CI policy | Decision memo with risks and owner gates |
| **L7 Distinguished** | Is it simpler and durable? | Long-term content taxonomy, reproducibility, build/hosting economics, portable docs | Strategic simplification with measurable rationale |

## Security engineer lens

Threat model: hostile third-party dependencies, unsafe links/HTML, publicly committed resume data, compromised GitHub Actions, malicious Markdown contributions and tracking consent. For every PR evaluate reachability, least privilege, secret boundaries and publication blast radius. A passing local build is not a clean vulnerability scan. See [security threat model](security-threat-model.md).

## CA/finance lens

This site is an **acquisition/credibility asset**, not a SaaS billing platform. Record monthly direct and indirect cost, time spent writing/maintaining, domain/analytics subscriptions (only if actually chosen), leads contacted, qualified inquiries and conversion rates. Never invent revenue, traffic, ROI, profit or percentages. Variable cost per visit for free Pages may be low but must not be asserted zero for all circumstances. See [unit economics](product-strategy-and-unit-economics.md).

## MBA/product lens

Define persona and job-to-be-done, positioning, evidence quality, navigation friction, clear calls to action, differentiation through system work, search discoverability, and credible portfolio narrative. Confirm actual customer value before adding galleries, animation, AI chatbots or conversion tracking.

## Engineering manager lens

One owner, one bounded PR, one status register. Keep a scoped Definition of Ready, owner approval gates, Definition of Done, rollout/rollback, evidence and backlog prioritization. No seven-persona narration for simple typo fixes; use proportional depth.

## Example quality decision

"Add a live GitHub activity dashboard": L1 verify GitHub API constraints; L2 minimal static alternative; L3 handle rate limiting/network failure; L4 check whether it belongs at build time; L5 performance/a11y; L6 privacy/consent/cost; L7 ask whether pinned proof-bearing case studies provide more value with less code. Do not implement without a demonstrated user need.

## Definition of Done

Scope met, content claims sourced, security/a11y/SEO consequences reviewed, focused checks recorded at exact revision, CI result known, documentation/status updated and rollback understood. A PR being open is neither merged nor deployed; production release is an additional explicit gate.
