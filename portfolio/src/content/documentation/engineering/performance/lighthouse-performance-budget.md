---
id: doc-lighthouse-performance-budget
title: How I Target 100 Lighthouse Scores
slug: lighthouse-performance-budget
summary: Performance, accessibility, SEO, and best-practice strategy for a static Nuxt portfolio targeting 100 Lighthouse scores and stable Core Web Vitals.
category: engineering
subcategory: performance
difficulty: Intermediate
readingTime: 12
status: Published
version: 1.0.0
tags:
  - Performance
  - Lighthouse
  - SEO
  - Accessibility
  - Core Web Vitals
technologies:
  - Nuxt
  - GitHub Pages
  - Web Vitals
related:
  - portfolio-hld
  - prometheus-grafana-observability
author: Rofik
publishedAt: 2026-07-01
updatedAt: 2026-07-01
---

## Goal

The portfolio should target:

- Performance: 95+
- Accessibility: 95+
- SEO: 100
- Best Practices: 100
- CLS: near 0
- TBT: near 0 on static pages

These are targets, not claims. They must be verified with Lighthouse after deployment.

## Performance Strategy

Use static generation:

- Pages are generated ahead of time.
- HTML is served by GitHub Pages.
- No runtime server is needed.

Reduce critical path:

- Keep CSS compact.
- Avoid unnecessary client libraries.
- Use compressed images.
- Avoid shipping unused public assets.
- Use text and CSS for diagrams until interactive rendering is needed.

## Image Budget

Rules:

- Use WebP or AVIF for project images.
- Keep hero/detail images sized to actual display needs.
- Do not ship design-reference screenshots from `public`.
- Add width/height or stable aspect ratio to prevent CLS.

## Accessibility

Checklist:

- Semantic headings.
- Descriptive links.
- Sufficient color contrast.
- Keyboard-accessible navigation.
- Visible focus states.
- Meaningful alt text for project images.

## SEO

Checklist:

- Unique title and description per page.
- Clean route slugs.
- Static sitemap.
- Robots file.
- Descriptive page headings.
- Content organized around engineering topics, not random posts.

## Best Practices

Checklist:

- No browser console errors.
- No exposed secrets.
- External links use `noopener noreferrer`.
- HTTPS through GitHub Pages.
- Static assets are generated through CI.

## Core Web Vitals

CLS:

- Use fixed aspect ratios for images/cards.
- Avoid layout shifts from dynamic labels.

LCP:

- Keep first viewport simple.
- Prioritize the main hero/project image only where needed.
- Avoid blocking heavy JavaScript.

TBT:

- Avoid large client-only dependencies.
- Keep search lightweight until content volume requires indexing.

## Verification Flow

```mermaid
flowchart LR
  Code[Code Changes] --> Build[pnpm generate]
  Build --> Deploy[GitHub Pages]
  Deploy --> Lighthouse[Lighthouse Audit]
  Lighthouse --> Budget{Budget Passed?}
  Budget -->|Yes| Release[Release]
  Budget -->|No| Fix[Optimize]
  Fix --> Build
```

## Summary

Performance credibility comes from measurable budgets and repeatable checks.

The platform should not merely say "performance optimized." It should document the strategy, enforce static generation, and eventually verify the deployed site with Lighthouse CI.
