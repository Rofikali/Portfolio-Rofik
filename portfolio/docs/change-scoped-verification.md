# Change-Scoped Verification and AI/CI Cost Policy

**Goal:** reduce redundant developer/agent runtime and log tokens without weakening mandatory CI. Source contract: Node 22, pnpm 10, Nuxt static generation under `NUXT_APP_BASE_URL=/Portfolio-Rofik/`. This is a policy document, not a workflow edit or proof that tests ran.

| Diff scope | Local fast checks | Additional evidence when relevant | Required pre-merge stance |
| --- | --- | --- | --- |
| Docs only | Markdown/link/path/consistency review | Metadata references to existing paths | Record full CI pending/not run honestly |
| Content Markdown | Frontmatter validation, generation, link/slug review | Broken-link, screenshot/resume/privacy review | Current required CI |
| Vue CSS/components | Impacted Vitest + typecheck + generate | Keyboard/mobile/a11y and targeted Playwright | Current required CI |
| Search/route/repository | Unit tests for queries + typecheck/generate | Dynamic route E2E, draft/404/Unicode | Current required CI and user-journey proof |
| Dependencies/security | Lockfile review + `pnpm audit --audit-level high` | Tests, typecheck, generate; advisory reachability | Never skip audit by masking failure |
| CI/deployment/security policy | Validate YAML/triggers/permissions, diff | Real PR checks, guarded deploy and rollback | Separate high-risk review |
| Public release or external service | Relevant full matrix | Page smoke, SEO, accessibility, privacy, costs and rollback | Owner approval and release evidence |

## Reproducible commands

~~~sh
cd portfolio
corepack enable
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate
pnpm audit --audit-level high
~~~

Those commands can fail on existing advisories or environment issues; **never report PASS without execution**. For docs-only changes, explain NOT RUN when commands were not executed and let normal required CI validate the PR. Browser tests require an installed working browser and controlled server; not inferred from presence of Playwright dependency.

## Evidence record per PR

~~~text
Task ID:
Base SHA:
Head SHA:
Scope / changed paths:
Checks: test PASS|FAIL|NOT RUN|PENDING; typecheck ...; generate ...; audit ...
Evidence URLs:
A11y / SEO / privacy:
Residual risks:
Owner approval required:
~~~

## Context discipline

Use one short status summary and only relevant failed-step excerpts from GitHub Actions; avoid reading giant successful logs repeatedly. GitHub Actions minutes and model/Codex token costs are different resources; no guaranteed savings without measurement. Do not build IMGENGINE native C/Rust targets for this portfolio.
