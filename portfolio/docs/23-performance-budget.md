# Portfolio Performance Budget — Targets, Not Recorded Scores

**Scope:** GitHub Pages static Nuxt application. No recent Lighthouse/Core Web Vitals or browser trace was collected for this docs update.

## Proposed goals (field data takes precedence)

| Metric | Target | Verification |
| --- | --- | --- |
| Lighthouse Performance | ≥95 on named device/network | Lighthouse report and date/URL |
| Accessibility | ≥95 plus manual WCAG 2.2 AA review | axe/keyboard/contrast; score alone insufficient |
| SEO / Best Practices | ≥95 (or 100 if sustainable) | Lighthouse plus link/metadata inspection |
| LCP | <2.5 s | Field or reproducible lab evidence |
| CLS | <0.1 | Field or lab evidence |
| INP | <200 ms | Field data; do not invent from build result |
| Initial JS | Aim <150 KiB gzip | Measured page-specific bundle |
| CSS | Aim <50 KiB gzip | Measured first-page CSS |
| Images | Aim <500 KiB total per typical initial viewport | Build artifact and network trace |

Targets are starting budgets, not guaranteed results on every browser/device.

## Repository asset baseline

At audited `main`, the tracked original assets are approximately: `public/images/projects/imgengine.webp` **1.88 MB**, `lakhimpur.webp` **611 KB**, `tiktok.webp` **287 KB**. This is file-size evidence, not proof of network bytes loaded on the same page. The first two exceed the per-asset budget and should be prioritized with responsive sizes and modern codecs.

## Optimization strategy

- Size/download the hero visual appropriately; verify `fetchpriority` only for the actual LCP resource.
- Generate responsive thumbnails and use correct width/height/aspect ratios; lazy-load below-fold assets.
- Keep client hydration minimal, do not add heavy full-text search/dependency for a small content corpus without evidence.
- Verify light/dark styles and cross-page navigation rather than optimizing only one screenshot.
- Preserve image quality and accessibility; compression is a measured tradeoff.

## Measurement protocol

Capture exact source SHA and URL, browser/device, viewport, network/CPU conditions, cold vs warm load, Lighthouse version, transferred bytes and reports. Compare baseline and new results for affected routes. Do not say "95+" or "sub-second" merely because a static build succeeds.

Follow [scoped verification](change-scoped-verification.md) and [content/SEO/a11y](content-seo-accessibility.md).
