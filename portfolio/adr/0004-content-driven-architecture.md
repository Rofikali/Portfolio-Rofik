# ADR-0004 — Markdown Content Collections, with Thin Typed Adapters

**Status:** Accepted for the current project with **partial boundary enforcement**, documented 2026-11-17.

## Context

Projects, case studies, blog/architecture notes and technical documentation change more often than UI templates. Public authoring needs content schemas, tags, stable URLs, SEO and static generation; it does not require a production relational database.

## Decision

Keep Markdown in `src/content/`, typed collection schemas in `content.config.ts`, Vue rendering in `src/pages/` and `src/presentation/`; use `src/domain/` contracts and `src/infrastructure/` adapters where multiple consumers or tests justify them.

## Current caveats

- Not all pages/use cases use the repository interfaces; some query `queryCollection` directly. This is **implemented partially**, not perfect hexagonal architecture.
- The `blog` and `architecture` collections currently share the same `architecture/**/*.md` source glob; they should be reconciled before claiming a distinct blog taxonomy.
- Documentation list queries apply Published filtering, while the detail repository has lacked equivalent filtering. This is a source-level review gap requiring a focused change/test before calling draft access secure.

## Why not alternatives?

A CMS or hosted database would add accounts, attack surface, recurring cost and privacy concerns without an established demand. Completely generic DDD aggregates and CQRS services for static pages would increase maintenance.

## Invariants and tests

Validate required frontmatter, unique canonical slugs, tags/category paths, Published-only public routes, referenced images/links and reasonable search complexity. See [LLD](../docs/lld.md), [patterns](../docs/design-patterns.md), [DSA](../docs/dsa-algorithms.md).
