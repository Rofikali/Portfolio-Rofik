---
id: doc-portfolio-lld
title: Portfolio Documentation Platform LLD
slug: portfolio-lld
summary: Low-level design for the documentation bounded context, repository adapter, routing, and rendering flow.
category: architecture
subcategory: lld
difficulty: Advanced
readingTime: 14
status: Published
version: 1.0.0
tags:
  - LLD
  - Sequence Diagram
  - Repository
  - Nuxt Content
technologies:
  - TypeScript
  - Nuxt Content
  - Vue
related:
  - portfolio-hld
  - repository-pattern
author: Rofik
publishedAt: 2026-06-29
updatedAt: 2026-06-29
---

## Overview

The LLD defines how a markdown document becomes a typed knowledge node and a rendered documentation page.

## Request Flow

```mermaid
sequenceDiagram
  actor User
  participant Route as Nuxt Route
  participant UseCase as GetDocumentationBySlug
  participant Repo as DocumentationRepository
  participant Content as Nuxt Content
  participant Layout as DocumentationLayout
  User->>Route: Open /engineering/patterns/repository-pattern
  Route->>UseCase: slug = repository-pattern
  UseCase->>Repo: getBySlug(slug)
  Repo->>Content: queryCollection(documentation)
  Content-->>Repo: markdown record
  Repo-->>UseCase: Documentation entity
  UseCase-->>Layout: typed metadata
  Layout-->>User: article shell + content
```

## Folder Structure

```txt
src/domain/documentation
src/application/documentation
src/infrastructure/documentation
src/presentation/components/docs
src/presentation/layouts/DocumentationLayout.vue
```

## Testing Strategy

- Schema validation protects content metadata.
- Unit tests cover content repository behavior as content volume grows.
- Static generation validates all routable pages before deployment.

## Deployment Flow

GitHub Actions installs dependencies, runs tests and typecheck, generates static assets, and publishes `.output/public` to GitHub Pages.
