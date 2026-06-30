---
id: doc-adr-002-why-fastapi
title: ADR-002 Why FastAPI?
slug: adr-002-why-fastapi
summary: Decision record for using FastAPI on backend services and project APIs.
category: architecture
subcategory: adr
difficulty: Intermediate
readingTime: 7
status: Published
version: 1.0.0
tags:
  - ADR
  - FastAPI
  - Python
  - Backend
technologies:
  - FastAPI
  - Python
  - PostgreSQL
related:
  - repository-pattern
  - portfolio-hld
author: Rofik
publishedAt: 2026-06-29
updatedAt: 2026-06-29
---

## Context

Backend projects need typed APIs, clear validation, good documentation, and strong async support without excessive framework overhead.

## Decision

Use FastAPI for backend APIs where Python is the right ecosystem choice.

## Alternatives Considered

- Django REST Framework
- Flask
- Express
- NestJS

## Consequences

Positive:

- Fast iteration with Pydantic models.
- Automatic OpenAPI documentation.
- Strong async support.
- Good fit for service boundaries and typed request/response contracts.

Negative:

- Requires explicit project structure discipline.
- Larger systems still need architecture decisions around repositories, services, migrations, and background workers.
