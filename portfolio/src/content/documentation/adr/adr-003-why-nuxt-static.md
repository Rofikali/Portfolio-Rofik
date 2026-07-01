---
id: adr-003-why-nuxt-static
title: ADR-003 Why Nuxt Static Generation
slug: adr-003-why-nuxt-static
summary: Architecture decision record explaining why the portfolio is statically generated with Nuxt for GitHub Pages instead of using a server-rendered or API-backed deployment.
category: architecture
subcategory: adr
difficulty: Intermediate
readingTime: 11
status: Published
version: 1.0.0
tags:
  - ADR
  - Nuxt
  - Static Site
technologies:
  - Nuxt
  - GitHub Pages
  - Nuxt Content
related:
  - portfolio-hld
  - lighthouse-performance-budget
author: Rofik Ali
publishedAt: 2026-07-01
updatedAt: 2026-07-01
---

# Context

The portfolio is primarily a content and credibility platform. It needs to load quickly, rank well, host cheaply, and remain reliable without runtime server operations.

The content is authored in Markdown and changes through Git commits, not through a live CMS.

# Decision

Use Nuxt with static generation and deploy the generated output to GitHub Pages.

# Alternatives

## Server-Rendered Nuxt

Pros:

- Runtime rendering flexibility.
- Dynamic data support.

Cons:

- Requires a server platform.
- Higher operational surface.
- Not necessary for static portfolio content.

## Next.js

Pros:

- Mature static and hybrid rendering.
- Strong ecosystem.

Cons:

- The existing codebase and mental model use Vue/Nuxt.
- Nuxt Content fits the documentation-first workflow well.

## Headless CMS

Pros:

- Non-developer editing.
- UI-driven content workflows.

Cons:

- Adds external dependency.
- Less transparent than Markdown in Git.
- Unnecessary for v0.1.

# Pros

- Fast static delivery.
- Simple GitHub Pages hosting.
- Markdown-first documentation.
- Low cost.
- Good SEO and Lighthouse potential.
- Easy local preview and review.

# Cons

- No runtime personalization.
- Rebuild required for content changes.
- Dynamic search must be client-side or precomputed.

# Consequences

The system optimizes for reliability and content quality over runtime flexibility. This is correct for v0.1 because the site is a public engineering portfolio, not an interactive SaaS product.

# Why Not Server Rendering

Server rendering would add operational complexity without improving the primary user experience. Recruiters and engineers reading the site benefit more from fast static pages and strong content than from runtime rendering.

# Result

Nuxt static generation is the right deployment choice for this portfolio. It keeps the system simple, fast, cheap, and aligned with GitHub Pages.
