# SEO Strategy — Portfolio

**Canonical contract:** [content, SEO and accessibility](content-seo-accessibility.md). **Actual source:** `../src/pages/`, `../nuxt.config.ts`, `../public/robots.txt` and `../public/sitemap.xml`.

**Audience and intent:** recruiters and clients searching by engineering skill, project and professional profile. Every project/case study should have accurate metadata, an evidence-bearing summary, working canonical GitHub URL (if actual), real preview assets and meaningful headings. Prefer demonstrated capabilities over repeated keyword lists.

**Reproducible checks:** compare sitemap URLs with generated `.output/public` deep routes; verify absolute canonical/OG image URLs for `/Portfolio-Rofik/`; check missing slugs produce 404, titles/descriptions differ meaningfully, duplicate `blog`/`architecture` collection mappings do not create unintended duplicate pages, draft docs stay unpublished, and links/images exist. Browser and crawler checks are **not recorded as passed**.

**Status:** The sitemap is presently maintained as a static file, **not automatically generated** by CI. Any claims that a new sitemap generator or Lighthouse SEO score is operational require separate evidence. See [SEO architecture](20-seo-architecture.md), [test strategy](15-testing-strategy.md), [content policy](content-seo-accessibility.md).
