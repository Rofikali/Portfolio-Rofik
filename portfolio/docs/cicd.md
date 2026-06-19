# CI/CD Design

## Goal

Every commit should be:

* Verified
* Tested
* Built
* Deployed automatically

No manual deployment.

---

# Pipeline

Developer
↓
Git Push
↓
GitHub Actions
↓
Lint
↓
Type Check
↓
Unit Tests
↓
Build
↓
Deploy
↓
GitHub Pages

---

# Branch Strategy

main

Production branch.

develop

Integration branch.

feature/*

Feature development.

Examples:

feature/project-showcase

feature/blog-system

feature/contact-section

---

# Pull Request Rules

Required checks:

✓ ESLint

✓ TypeScript

✓ Build

✓ Tests

No direct pushes to main.

---

# Workflow 1

ci.yml

Triggers:

* Pull Request
* Push

Steps:

1. Checkout

2. Install Dependencies

3. Run Linter

4. Run Type Check

5. Run Tests

6. Build

Success Criteria:

Build passes.

---

# Workflow 2

security.yml

Runs weekly.

Checks:

* npm audit
* dependency review
* secret scanning

Goal:

Prevent vulnerable dependencies.

---

# Workflow 3

deploy.yml

Trigger:

Push to main

Steps:

1. Build static site

2. Generate sitemap

3. Generate metadata

4. Upload artifact

5. Deploy GitHub Pages

---

# Quality Gates

Coverage

> = 80%

TypeScript

0 errors

ESLint

0 warnings

Build

Must succeed

---

# Deployment Architecture

Developer
↓
GitHub Repository
↓
GitHub Actions
↓
Static Build
↓
GitHub Pages
↓
CDN
↓
End User

---

# Rollback Strategy

Git revert commit

Push

Automatic redeploy

No manual server access required.

---

# Future Evolution

Phase 1

GitHub Pages

Phase 2

Cloudflare Pages

Phase 3

Custom Domain

Phase 4

Edge Functions

Phase 5

Observability Stack

* Plausible
* Sentry
* OpenTelemetry

---

# Definition of Done

Feature is complete only when:

✓ Code implemented

✓ Tests added

✓ Documentation updated

✓ ADR updated (if architecture changed)

✓ CI passes

✓ Production deployment succeeds
