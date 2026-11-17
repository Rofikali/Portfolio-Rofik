# Security Architecture — Portfolio-Rofik

**Canonical detailed analysis:** [Threat model](security-threat-model.md). This page records operational controls and their current evidence; it is not a claim that every control is enabled.

## Security posture

A statically generated GitHub Pages site has no portfolio application server or customer database after deployment. The main attack surfaces are third-party build dependencies, GitHub Actions workflows, content/URL injection, publicly published PDF and image assets, malicious external links, and release branch permissions.

## Audited 2026-11-17 status

- Existing `.github/workflows/security.yml` runs `pnpm audit --audit-level high` weekly; latest recorded result on Aug 31 failed with **35 advisories, including 2 critical and 27 high**. This must be revalidated with current dependencies.
- Production Pages workflow accepts pushes from `main`, `master` and `featured/v2`; restrict after a separate reviewed workflow change.
- Main branch is not protected as of this audit.
- No repo evidence of a hosted auth backend or runtime contact database.
- Public `public/resume.pdf` and project images are visible to anyone; review for personal data before updates.
- A claim like "Dependabot enabled", "CSP enforced" or "all links sanitized" requires independent configuration proof, not a policy sentence.

## Rules

1. Never check secrets into repo, `public` or client env. Assume every built asset is public.
2. Review trusted Markdown, URL schemes and rendering; do not enable unsafe raw HTML casually.
3. For external `target="_blank"` links use safe rel and validate approved URL schemes.
4. Audit current lockfile and classify advisory reachability without ignoring vulnerable dev/build dependencies.
5. CI least privilege, protected prod branch, reproducible install and reviewed deployment are mandatory reliability/security priorities.
6. New contact forms, analytics, cookies or paid external services require approved data/privacy and cost ADRs.
7. Static host headers (CSP/HSTS/etc.) must be verified against GitHub Pages platform capabilities; do not invent a configurable origin server.

Incident workflow: identify affected SHA, halt release, assess credentials/content, patch or revert in a reviewed PR, run security/test/build gates and verify published artifact after authorized deployment.
