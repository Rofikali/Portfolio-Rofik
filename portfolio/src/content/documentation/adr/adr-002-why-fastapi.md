---
id: doc-adr-002-why-fastapi
title: ADR-002 Why FastAPI?
slug: adr-002-why-fastapi
summary: Decision record for using FastAPI for backend APIs where typed contracts, OpenAPI, async I/O, and Python ecosystem fit the project.
category: architecture
subcategory: adr
difficulty: Intermediate
readingTime: 12
status: Published
version: 1.1.0
tags:
  - ADR
  - FastAPI
  - Python
  - Backend
  - API Design
technologies:
  - FastAPI
  - Python
  - PostgreSQL
  - Redis
related:
  - repository-pattern
  - portfolio-hld
author: Rofik
publishedAt: 2026-06-29
updatedAt: 2026-06-30
---

## Context

Several backend projects in this portfolio need:

- Typed request and response validation.
- Clean REST API boundaries.
- Generated OpenAPI documentation.
- Async I/O for database, cache, and external service calls.
- Good integration with PostgreSQL, Redis, background workers, metrics, and Docker.
- A framework that does not force a full monolith when the project is service-oriented.

The decision is not "FastAPI is always best." The decision is that FastAPI is a strong default for API-first Python services in this portfolio.

## Decision

Use FastAPI for backend services when:

- The project is API-first.
- Pydantic-style validation is valuable.
- OpenAPI documentation should be generated from code.
- Async request handling is useful.
- The domain can be organized into routers, schemas, services, repositories, and infrastructure adapters.

## Alternatives

### Django REST Framework

Strengths:

- Mature ecosystem.
- Built-in admin.
- Strong ORM and authentication ecosystem.
- Excellent for database-heavy products.

Weaknesses:

- Heavier framework surface.
- More monolithic defaults.
- API-first service boundaries require more discipline.

### Flask

Strengths:

- Minimal and flexible.
- Easy to start.
- Large ecosystem.

Weaknesses:

- Validation, OpenAPI, dependency injection, and async support require more assembly.
- Larger teams can end up with inconsistent project structure.

### Express / Node

Strengths:

- Huge ecosystem.
- Good fit for JavaScript teams.
- Works well for real-time APIs.

Weaknesses:

- Runtime type safety requires extra TypeScript discipline.
- Python ecosystem is better for some data and automation workloads.

### NestJS

Strengths:

- Strong architecture conventions.
- Good TypeScript support.
- Dependency injection built in.

Weaknesses:

- Heavier abstraction model.
- Less aligned with Python-centric backend/data projects.

## Pros

- Request/response schemas are explicit.
- OpenAPI docs are generated automatically.
- Dependency injection is simple and practical.
- Async support works well with database/cache/network calls.
- The framework stays out of the domain model if the project is structured carefully.
- Easy to containerize with Docker.

## Cons

- Does not provide Django-level batteries by default.
- Project structure is the team's responsibility.
- Async code can be misused if blocking libraries are mixed in.
- Migration, background jobs, and admin workflows require explicit tool choices.

## Consequences

Positive consequences:

- Faster API iteration.
- Better validation and API documentation.
- Easier testing of routers and use cases.
- Clear fit with repository/service layering.

Negative consequences:

- More architecture decisions must be made early.
- Developers need discipline around schema, service, repository, and infrastructure boundaries.
- Operational maturity still requires Docker, migrations, metrics, logging, and error handling.

## Why Not Django?

Django is a better choice when:

- Admin workflows are central.
- A relational monolith is the desired architecture.
- The project benefits heavily from built-in authentication, ORM, and admin.

FastAPI is chosen here because the portfolio emphasizes API-first systems, service boundaries, async I/O, and explicit architecture.

## Why Not Node?

Node is a strong choice for TypeScript-first teams, real-time systems, and full-stack JavaScript organizations.

FastAPI is chosen here because the backend examples are Python-centered and benefit from Python's ecosystem, Pydantic validation, and clean API ergonomics.

## Result

FastAPI becomes the default backend API framework for portfolio projects such as Lakhimpur Agri-Business where typed APIs, PostgreSQL, Redis, Docker, Prometheus, and Grafana matter.

This ADR does not ban Django, Flask, Node, or NestJS. It documents the default choice and the reasoning behind it.
