---
id: doc-portfolio-hld
title: Portfolio Engineering Platform HLD
slug: portfolio-hld
summary: High-level architecture for turning the portfolio into a content-driven engineering platform.
category: architecture
subcategory: hld
difficulty: Advanced
readingTime: 10
status: Published
version: 1.0.0
tags:
  - HLD
  - C4
  - Nuxt
  - Clean Architecture
technologies:
  - Nuxt
  - Vue
  - TypeScript
  - GitHub Pages
related:
  - portfolio-lld
  - repository-pattern
  - adr-007-why-github-pages
author: Rofik
publishedAt: 2026-06-29
updatedAt: 2026-06-29
---

## Overview

The platform presents projects, case studies, engineering articles, architecture documents, and system design notes as a unified knowledge system.

## System Context

```mermaid
flowchart LR
  Visitor[Engineer or Recruiter] --> Platform[Portfolio Engineering Platform]
  Platform --> GitHub[GitHub Repositories]
  Platform --> Content[Markdown Knowledge Base]
  Platform --> Pages[GitHub Pages]
```

## Containers

- Static Nuxt application for presentation and routing.
- Nuxt Content database for markdown-backed knowledge nodes.
- Domain/application layers for contracts and use cases.
- GitHub Actions for CI, static generation, and deployment.

## Quality Attributes

- Static delivery for low operational complexity.
- Content-driven pages for fast iteration.
- Strict frontmatter schema for predictable metadata.
- Clean boundaries so documentation can evolve into search and graph features.

## Risks

- Nuxt Content adds client assets that must be monitored with Lighthouse.
- Large images need compression before final release.
- Search should be designed before content volume grows.
