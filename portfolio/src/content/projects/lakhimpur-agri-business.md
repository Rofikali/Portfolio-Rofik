---
id: lakhimpur

slug: lakhimpur-agri-business

title: Lakhimpur Agri-Business

featured: true

summary: Agricultural business management platform.

description: Business platform for inventory, analytics, and farmer management.

image: /images/projects/lakhimpur.webp

# githubUrl: https://github.com/Rofikali/lakhimpur-agri-business
githubUrl: https://github.com/Rofikali/Lakhimpur-Agri-Business-Platform

# demoUrl: https://github.com/Rofikali/lakhimpur-agri-business#readme
demoUrl: https://github.com/Rofikali/Lakhimpur-Agri-Business-Platform

technologies:
  - FastAPI
  - PostgreSQL
  - Redis
  - Kafka
  - Docker
  - Prometheus
  - Grafana
  - Nuxt

highlights:
  - REST APIs
  - JWT Authentication
  - Inventory Management
  - Analytics Dashboard

createdAt: 2025-01-01

updatedAt: 2026-01-01
---

# Overview

Lakhimpur Agri-Business is a production-oriented business platform for agricultural inventory, farmer records, sales workflows, and operational analytics.

The project is designed as a full-stack system rather than a single-page demo. It emphasizes API boundaries, database design, caching, async event flow, deployment repeatability, and monitoring.

# Problem

Agricultural businesses often manage inventory, farmer relationships, and sales data across spreadsheets or disconnected tools. That creates reporting delays, inconsistent stock records, and weak visibility into operational health.

The engineering problem was to model the business domain clearly enough that inventory, users, analytics, and background workflows can evolve without turning the backend into a tightly coupled controller layer.

# Solution

The solution uses a Nuxt frontend backed by a FastAPI service with PostgreSQL as the system of record. Redis handles hot reads and short-lived operational state, while Kafka is reserved for event-style workflows such as inventory changes, audit trails, and analytics pipelines.

The v0.1 portfolio page documents the architecture and tradeoffs even where the product is still evolving, so reviewers can see both implementation direction and engineering judgment.

# Architecture Diagram

```mermaid
flowchart LR
  User[User] --> Nuxt[Nuxt Frontend]
  Nuxt --> API[FastAPI API]
  API --> Postgres[(PostgreSQL)]
  API --> Redis[(Redis Cache)]
  API --> Kafka[Kafka Events]
  Kafka --> Analytics[Analytics Worker]
  API --> Metrics[Prometheus Metrics]
  Metrics --> Grafana[Grafana Dashboard]
```

# Tech Stack

- Nuxt and Vue for the frontend.
- FastAPI for API development and validation.
- PostgreSQL for relational business data.
- Redis for cacheable reads and fast operational state.
- Kafka for event-driven workflows.
- Docker for reproducible local deployment.
- Prometheus and Grafana for monitoring.

# API Design

The API is organized around business resources:

- Farmers
- Inventory items
- Orders
- Sales
- Authentication
- Analytics

Business logic belongs in application services, not route handlers. Routes should validate input, call use cases, and return consistent response DTOs.

Example API surface:

```http
POST /api/v1/auth/login
GET /api/v1/farmers
POST /api/v1/farmers
GET /api/v1/inventory
POST /api/v1/inventory/{id}/adjust
POST /api/v1/orders
GET /api/v1/analytics/dashboard
```

Request flow:

```mermaid
sequenceDiagram
  actor Staff
  participant UI as Nuxt UI
  participant API as FastAPI Router
  participant Service as Application Service
  participant DB as PostgreSQL
  participant Kafka

  Staff->>UI: Create sale
  UI->>API: POST /orders
  API->>Service: validate command
  Service->>DB: create order + stock movement
  Service->>Kafka: publish OrderCreated
  API-->>UI: 201 Created
```

# Database

PostgreSQL is the source of truth. The schema should protect core invariants such as inventory quantities, user ownership, order state, and historical records.

Important design choices:

- Use relational constraints for business-critical data.
- Keep audit/history records append-friendly.
- Index frequently queried fields such as farmer, product, status, and created date.

Suggested schema:

```mermaid
erDiagram
  USER ||--o{ ORDER : creates
  FARMER ||--o{ ORDER : places
  ORDER ||--o{ ORDER_LINE : includes
  INVENTORY_ITEM ||--o{ ORDER_LINE : references
  INVENTORY_ITEM ||--o{ STOCK_MOVEMENT : changes
```

# Caching

Redis is used for data that is safe to recompute:

- Dashboard summaries
- Frequently accessed lookup data
- Session-adjacent short-lived state

Cache invalidation should happen from domain events, especially inventory and sales updates.

Cache keys:

- `dashboard:summary`
- `inventory:low-stock`
- `product:lookup`
- `sales:daily:{date}`

Cache rules:

- Never trust Redis as the source of truth for stock.
- Keep TTLs short for operational dashboards.
- Invalidate on `InventoryChanged` and `OrderCreated`.

# Messaging

Kafka is used for asynchronous business events:

- `OrderCreated`
- `InventoryChanged`
- `PaymentRecorded`
- `AuditEventCreated`

Events allow analytics, audit, notifications, and reporting to evolve without slowing down the transactional request path.

# Deployment

The target deployment model is Docker-first:

- API container
- Frontend container or static frontend artifact
- PostgreSQL service
- Redis service
- Kafka service
- Monitoring services

```mermaid
flowchart LR
  Browser --> Frontend[Nuxt Frontend]
  Frontend --> API[FastAPI API]
  API --> DB[(PostgreSQL)]
  API --> Redis[(Redis)]
  API --> Kafka[Kafka]
  Prometheus --> API
  Grafana --> Prometheus
```

# Monitoring

Prometheus should scrape API metrics such as request latency, error rate, cache hits, and background job throughput. Grafana dashboards should answer operational questions rather than show decorative charts.

Metrics to expose:

- `http_requests_total`
- `http_request_duration_seconds`
- `inventory_mutations_total`
- `redis_cache_hits_total`
- `redis_cache_misses_total`
- `kafka_consumer_lag`
- `background_jobs_failed_total`

# Performance

Performance targets:

- Dashboard p95 response under 300 ms when cache is warm.
- API p95 response under 500 ms for common CRUD flows.
- Paginated tables for inventory, farmers, and orders.
- No expensive analytics query on the initial page render.

Performance techniques:

- Database indexes for filtering and date ranges.
- Redis cache for dashboard summaries.
- Async event processing for analytics.
- Static frontend assets through Nuxt build output.

# Challenges

- Preventing analytics requirements from polluting transaction workflows.
- Designing cache invalidation around business events.
- Keeping Docker local development close to production assumptions.
- Avoiding early overengineering while leaving room for async workflows.

# Lessons Learned

- Clean resource boundaries make APIs easier to evolve.
- PostgreSQL constraints are part of the application design, not an afterthought.
- Observability should be planned with the first deployment, not added after failures.
- Kafka is useful only when events represent meaningful business facts.

# GitHub

Source code: [Lakhimpur Agri-Business](https://github.com/Rofikali/lakhimpur-agri-business)

# Live Demo

The public demo target is planned. For v0.1, the repository README is linked as the live technical preview.
