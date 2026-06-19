performance-budget.md
Objective

Maintain excellent user experience.

Lighthouse Targets

Performance > 95

Accessibility > 95

Best Practices > 95

SEO > 95

Core Web Vitals

LCP < 2.5s

CLS < 0.1

INP < 200ms

Bundle Budget

Initial JS:

< 150KB gzip

CSS:

< 50KB gzip

Images:

< 500KB per page

Asset Strategy

Use:

WebP
AVIF
Lazy Loading
Responsive Images
Rendering Strategy

Static Generation

No runtime API requests.

No unnecessary hydration.

Monitoring

Run Lighthouse in CI.

Fail build if budget exceeded.

================================================