# Security Threat Model — Public Static Engineering Portfolio

**Baseline:** Reviewed public source and GitHub Actions on 2026-11-17, not an independent penetration test. This site publishes static content, including a downloadable resume and project images. Its principal risks are supply chain, publication/privacy, link/render injection, compromised CI and deploy integrity rather than server-side database exploits.

## Assets, actors, trust boundaries

**Assets:** verified owner identity and credibility; public site availability; GitHub repository and Actions permissions; local maintainer credentials; private draft information; visitor browser safety; deployed artifact integrity.

**Entry/trust paths:**
1. Contributor/third-party Markdown → Nuxt Content build → browser-rendered HTML.
2. pnpm registry/lockfile/action packages → CI build → artifact deployed to Pages.
3. GitHub Actions workflow permissions and branch triggers → production publishing authority.
4. Project `githubUrl`/`demoUrl`, contact links and image paths → outbound/browser resource handling.
5. Public resume PDF + profile pages → irreversible publication of identifying data.
6. Theme preference → browser localStorage (not a secret).

## Threats and controls

| Risk | Existing evidence | Recommended control |
| --- | --- | --- |
| Critical/high dependency advisories | [2026-08-31 scan failed with 35 total](https://github.com/Rofikali/Portfolio-Rofik/actions/runs/33391514956) | Re-audit on current lockfile; patch/upgrade; classify build/dev/browser exposure |
| Malicious content/HTML/link | Markdown rendered by Nuxt Content, URL fields validated as URLs in project schema | Constrain raw HTML, validate allowed URL schemes, review untrusted Markdown and external dependencies |
| CI artifact/branch poisoning | Pages workflow can deploy from `featured/v2` plus main/master | Restrict to reviewed production branch; minimum permissions; artifact provenance and branch protection |
| Credential leakage | GitHub Actions and local development may use credentials | No secrets in public repo or `public/`; least privilege; secret scanning and human review |
| Privacy/identity disclosure | `public/resume.pdf` is publicly downloadable; career claims displayed | Explicit owner review of personally identifying fields; no real customer/private data |
| Link phishing or link rot | External project/contact URLs | Validate approved schemes, maintain `rel="noopener noreferrer"`, automated broken links |
| Client performance/DoS | Large project assets, content bundle | Image/compression budgets and reasonable query limits |
| Theme/accessibility usability | Styling tied to client localStorage and overrides | Test focus/contrast, dark/light SSR transition and blocked-storage fallback |

## Historical advisory examples (not a current reachability verdict)

The August 31 audit output identifies critical `@nuxt/devtools` (developer host RPC issue) and `tar` (parse/decompression DoS). Nuxt DevTools is a developer/build-related exposure path; a statically hosted visitor is not automatically affected by the same execution model. Current fixed versions, dependency reachability and remaining vulnerabilities require a fresh audit.

## Secure delivery rules

- Protect main and review workflow changes. Do not let a feature branch publish to Pages by default.
- Restrict GitHub Actions permissions to each job's needs. Pin Actions by maintained immutable SHAs if feasible, or record trusted major-version update policy.
- Prefer trusted Markdown in version control; never blindly treat external HTML or Markdown as harmless.
- Keep external anchor rel attributes and avoid script injection via dynamic content.
- Do not assume CSP/HSTS can be configured in arbitrary custom server headers on GitHub Pages; verify platform limitations before claiming enforcement.
- No contact database, tracking pixel, analytics SDK, session replay or third-party API without documented necessity, consent and data handling.
- Do not publish security issue details in a public issue when the issue itself contains exploit-sensitive or private material. Prefer private vulnerability reporting when enabled.

## Incident response

Stop further release; capture exact SHA/action logs; revoke affected credentials if compromised; patch dependencies or revert; regenerate static site; verify public artifact and audit; document date, scope and corrective action. **No automatic token rotation or public deployment without authorization.**

## Gates

Before release: current lockfile audit triage; production branch controls; content/privacy review; generated route/asset checks; basic browser security check. Signed release claims require reproducible exact-SHA evidence, not merely this document.
