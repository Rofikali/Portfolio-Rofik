# SEC-001 — Dependency Security Remediation Evidence (2026-11-17)

> **2026-11-17 reconciliation:** [PR #2 was MERGED](https://github.com/Rofikali/Portfolio-Rofik/pull/2) to main as part of the dependency refresh. Post-merge [CI](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44064056714) and [Pages](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44064056826) succeeded at `e9b94a0a9f8273c9f22b8b9b2aaf1e08571d9ca4`. **One HIGH Zod and one MODERATE minimatch audit finding remain unresolved.** The candidate evidence below is historical; references to an unmerged PR/undelivered release describe the original experiment, **not the present repository state**. Follow [next.md](../../next.md) for current SEC-002 priority.


**State:** Partial security improvement candidate on a feature branch, **NOT** a clean security audit, merge, production deploy or risk acceptance. Changes in this PR are for a static portfolio, not IMGENGINE runtime. Base main SHA: `ded33dcc0564bc53df209bca4b2f2fd5687b0167`.

## Exact GitHub Actions candidate

- [Compatible update job](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44063115029), source candidate at `cba2eb72baca278af27405bb4d73ff5e78410abc` (temporary workflow running in an isolated branch).
- Baseline fresh `pnpm audit --json`: **134 advisories**, including **6 critical, 67 high, 46 moderate and 15 low**.
- After `pnpm update` within declared version ranges and `pnpm add -D vue-tsc@^3.1.0`: **2 advisories** — **0 critical, 1 high, 1 moderate, 0 low**.
- Candidate `pnpm install --frozen-lockfile`: PASS.
- Candidate `pnpm test`: PASS (2 existing tests; weak behavioral coverage).
- Candidate `pnpm typecheck`: PASS.
- Candidate `NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate`: PASS, but emits a **Tailwind/PostCSS nesting warning**; CSS/browser correctness is not visually verified.
- The candidate workflow was **read-only** and uploaded an artifact; it did **not** automatically commit or deploy. It is **removed** from the proposed PR diff.
- Final PR-head CI evidence will differ from the temporary candidate SHA; review exact PR-head CI before merging.

## Direct packages refreshed

The compatible update resolves declared semver-compatible versions including Nuxt `^4.6.4`, Nuxt Content `^3.16.2`, Vue `^3.5.45`, Vue Router `^5.5.1`, Vitest `^4.1.12` and several dev tools. `vue-tsc ^3.3.14` is added explicitly so `nuxt typecheck` works. Lockfile rebuilt by pnpm 10; no hand edits, 90-override bulk repair, forced major Zod replacement, or audit suppression.

## Open advisories — not waived

| Dependency | Severity / finding | Recorded version and path | Resolution decision |
| --- | --- | --- | --- |
| `zod` | **HIGH**, memory exhaustion on constrained collections | `zod@3.25.76`, transitive `@nuxt/content → zod` | Audit specifies patched `>=4.6.6`; this crosses a major version and may violate Nuxt Content's transitive requirements. **Not safely fixed.** Wait for an upstream compatible fix or test a separately reviewed dependency/compatibility change. |
| `minimatch` | **MODERATE**, globparts amplification DoS | `minimatch@10.2.6`, transitive `@nuxt/content → minimatch` | Audit specifies patched `>=11.0.1`; assess updated Nuxt Content compatibility and build-time reachability before override. |

The current `pnpm audit --audit-level high` therefore still fails. Do **not** set audit ignore, disable the gate or label the project vulnerability-free. Assess whether each advisory reaches untrusted inputs in the deployed static site versus the build/editor environment, and escalate if risk is demonstrated.

## Alternative rejected

[First experimental candidate](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/44062763083) ran `pnpm audit --fix` and generated about **90 overrides** in workspace settings. Although it reduced findings, `nuxt typecheck` failed because a typechecker was unavailable. That bulk override candidate was **not proposed for merge**.

## New risks and follow-up

- Static generation passed but logged `tailwindcss/nesting` compatibility warning. Verify actual styles/light-dark/mobile in a browser before production publishing.
- Library upgrades may change generated HTML/assets and transitive bundler behavior. The existing two Vitest tests do not provide strong UI regression assurance.
- GitHub Pages production workflow is still triggered only by a main merge or selected branches; no branch release is authorized by this PR.
- Follow-up **SEC-002**: isolate remaining Zod high/moderate minimatch advisories by upstream compatibility review and risk assessment. **TEST-001** should add meaningful Playwright and theme tests before relying on major frontend upgrades.

**Do not merge automatically.** Owner review and independent exact-head CI required.