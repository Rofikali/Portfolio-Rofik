# ADR-0002 — Static Website on GitHub Pages

**Status:** Accepted; existing implementation documented 2026-11-17. This ADR does not itself confirm current live site health.

## Context

A professional portfolio mostly serves public Markdown content and linked project evidence. Hosting expense and operational security should stay low. User identity, payments, dynamic user-submitted documents and server APIs are unnecessary.

## Decision

Use `nuxt generate` and publish `portfolio/.output/public` to **GitHub Pages**, with `/Portfolio-Rofik/` base path. Repo-root `.github/workflows/deploy-pages.yml` owns publish; only reviewed `main` should be able to deploy.

## Consequences and constraints

- **Benefits:** simple CDN/static delivery, low recurring infrastructure, no portfolio database or server, deterministic versioned artifacts.
- **Limitations:** no server-side contact form, dynamic authenticated pages, custom runtime redirects or server-controlled headers. Static export still has client-side code and supply-chain security risks.
- **Cost:** GitHub Pages platform limits and Actions usage must be checked against current plan; do not promise permanent unlimited zero cost.
- **Security:** all `public/` files, including résumé PDF and photos, are publicly accessible. Keep private information/secrets out of repository and artifacts.

## Verification and reversal

Verify exact commit build, link/base path, Pages deployment and critical routes; use revert via reviewed PR for bad deployments. Choose another host only if measured needs (headers, previews, custom domain, build constraints) justify migration and an approved deployment ADR. [CI contract](../docs/cicd.md).
