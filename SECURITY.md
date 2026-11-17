# Portfolio-Rofik — Security Reporting and Disclosure

This is a **public Nuxt/Markdown static portfolio hosted on GitHub Pages**. Its code and build pipelines have security-sensitive dependencies and publishing permissions even though the generated site has no application database or runtime authentication service.

## Report a vulnerability privately

Please do **not** publish exploit details, credentials, private personal information or evidence of a sensitive leak in a public issue. Use GitHub's **Report a vulnerability** / private vulnerability reporting facility under this repository's **Security** tab *if available*. If it is not enabled, request a private reporting channel from the maintainer without sending a working exploit to a public discussion. No private email address or response-time guarantee is published here.

A useful report includes affected file or dependency, relevant commit/version, impact, safe reproduction instructions, whether the issue affects **build tooling**, **maintainer development**, **the generated browser site**, or **deployment permissions**, and any redacted log or proof. Avoid real credentials, private images or user/resume information.

## What maintainers do

1. Acknowledge/triage without prematurely promising a fix date.
2. Establish affected SHA, dependency chain, trust boundary, exploitability and severity.
3. Prepare a small reviewed patch; update lockfile, tests and documented risk assessment.
4. Validate exact-head GitHub CI, mandatory audit, relevant static generation/browser checks and production publishing permissions.
5. Release only after approval; verify deployed SHA and document lessons learned. Revoke compromised credentials through GitHub/provider controls if needed.

## Current known limitations (2026-11-17)

- The last isolated Nuxt dependency update reduced a fresh audit from **134 findings to 2**, but **Zod high** and **minimatch moderate** remained; see [SEC-001 evidence](portfolio/docs/SEC001_DEPENDENCY_REMEDIATION_2026-11-17.md). A passing CI build does not establish a clean audit.
- Source code/CI evidence is not a security certification. GitHub Pages hosting removes the portfolio app server but leaves client, dependency and publishing risks.
- No claim is made that branch protection, a secret scanner, private reporting or audit policy is currently enabled unless independently checked.
- No bug bounty, SLA, warranty or licensed reuse right is created by this policy. The existing empty `portfolio/LICENSE` does not grant a software license.

Canonical [threat model](portfolio/docs/security-threat-model.md), [deployment policy](portfolio/docs/cicd.md) and [status board](next.md).
