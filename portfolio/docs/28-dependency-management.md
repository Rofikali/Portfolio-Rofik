# Dependency and Supply-Chain Management

**Current dependency source:** `portfolio/package.json` and committed `portfolio/pnpm-lock.yaml` (Nuxt 4, Vue 3, Nuxt Content 3, Tailwind, TypeScript, Vitest, Playwright). Build uses Node 22/pnpm 10. Do not claim a newly upgraded version until the lockfile shows it.

## Security evidence

The Aug 31, 2026 GitHub Actions `pnpm audit --audit-level high` failed with 35 advisories (2 critical, 27 high, 5 moderate, 1 low). See [run](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/33391514956). This is historical dependency-tree data, not proof that live static HTML exposes every advisory.

## Process

1. Use a fresh pnpm audit on the exact checkout and classify each advisory by build/dev/browser/runtime reachability.
2. Prefer compatible patched updates; inspect upstream changes and transitive dependency paths, including `@nuxt/devtools`, `tar`, `js-yaml`, `postcss` and `nanoid` mentioned in the historical log.
3. Keep frozen installs reproducible. Review npm lifecycle scripts, lockfile changes and action versions.
4. Run tests, typecheck, static generation and relevant browser checks on the updated head.
5. Record residual advisories, accepted risks with owner justification and rollback steps. Do not silence an audit merely to display a green badge.

## Upgrade rhythm

Urgent critical/high fixes first where exposure is credible; review minors monthly and majors in bounded compatibility PRs. Validate policy against actual repository configuration—do not say Dependabot, secret scanning or a license is enabled without evidence.

See [threat model](security-threat-model.md) and [CI contract](cicd.md).
