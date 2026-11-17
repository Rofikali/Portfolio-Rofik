# SEO Architecture — Implemented Components and Gaps

**Canonical SEO/editorial contract:** [content/SEO/accessibility](content-seo-accessibility.md); [strategy](07-seo-strategy.md); [LLD](lld.md).

## Existing source

- Nuxt `nuxt.config.ts` defines global language, viewport, author and OpenGraph defaults.
- Route pages and `src/presentation/composables/usePortfolioSeo.ts` provide page-specific SEO where imported; verify use per route.
- The static assets `public/robots.txt` and `public/sitemap.xml` are **hand-maintained files** at the audited source revision, not evidence of an automated sitemap generator.
- GitHub Pages uses `NUXT_APP_BASE_URL=/Portfolio-Rofik/`; incorrect base-prefixed links can invalidate canonical URLs and social images.
- The `blog` and `architecture` Nuxt Content collections share the same Markdown glob: taxonomy/duplicate URL validation is needed.

## Required page invariants

Relevant unique title, summary/meta description, absolute canonical URL (where implemented), correct OG image and alt text, one logical H1, semantic anchors, valid dates and no draft exposure. Do not add fake JSON-LD Person/Review/Organization facts or labels claiming live products unless owner-verified.

## Source-backed checks to add

1. Compare generated static routes with sitemap URLs; reject broken/duplicate URLs.
2. Test canonical/base URL formatting for homepage, projects, case studies, engineering and blog.
3. Verify unknown slug 404 and unpublished content is not rendered through detail routes.
4. Validate internal/external links and public assets; measure metadata and page title in a real browser.
5. Check Lighthouse SEO/Core Web Vitals on dated device/network; **scores are targets, not verified results**.

This document does not create a sitemap generator or a crawler by itself; those belong to a scoped implementation PR.
