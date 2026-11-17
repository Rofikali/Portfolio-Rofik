# Security — Portfolio-Rofik

This placeholder is the **short index**, not a competing security policy.

- [Security reporting and disclosure](../../SECURITY.md): private report handling, triage and release rules.
- [Threat model](security-threat-model.md): Markdown/rendering, dependencies, CI, public assets, privacy and external links.
- [Security architecture](24-security-architecture.md): audited posture and technical controls.
- [Dependency policy](28-dependency-management.md): lockfile, audit, upgrades and residual findings.
- [Security remediation evidence](SEC001_DEPENDENCY_REMEDIATION_2026-11-17.md): 2026-11-17 fresh audit and known residual advisories.
- [Deployment controls](cicd.md): Pages trigger/permissions, owner-controlled branch and environment settings.

**Current risk:** a previous compatible refresh reduced the audit to one **HIGH Zod** and one **MODERATE minimatch** finding. These require separate safe resolution or documented human risk decision; passing CI or static deployment is not a clean audit certificate. No secret scanner, branch protection or monitoring feature is assumed enabled merely because it appears in documentation.
