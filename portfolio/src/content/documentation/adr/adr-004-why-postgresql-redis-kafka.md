---
id: adr-004-why-postgresql-redis-kafka
title: ADR-004 Why PostgreSQL Redis and Kafka
slug: adr-004-why-postgresql-redis-kafka
summary: Architecture decision record for choosing PostgreSQL, Redis, and Kafka as the reference backend stack across portfolio system designs and case studies.
category: architecture
subcategory: adr
difficulty: Advanced
readingTime: 13
status: Published
version: 1.0.0
tags:
  - ADR
  - PostgreSQL
  - Redis
  - Kafka
technologies:
  - PostgreSQL
  - Redis
  - Kafka
related:
  - redis-patterns-production
  - kafka-event-streaming-basics
  - scaling-postgresql
author: Rofik Ali
publishedAt: 2026-07-01
updatedAt: 2026-07-01
---

# Context

The portfolio documents production-style backend systems. The examples need a realistic reference stack for persistence, caching, and asynchronous workflows.

The goal is not to claim every project needs every technology. The goal is to demonstrate when each technology belongs in a system and what tradeoffs it creates.

# Decision

Use PostgreSQL, Redis, and Kafka as the primary reference stack across backend case studies and system designs.

# Alternatives

## MySQL Instead of PostgreSQL

Pros:

- Mature relational database.
- Widely used.

Cons:

- PostgreSQL offers excellent indexing, JSON support, extensions, and developer ergonomics for mixed relational workloads.

## MongoDB Instead of PostgreSQL

Pros:

- Flexible documents.
- Fast iteration for document-shaped data.

Cons:

- Many portfolio systems need relational integrity, transactions, joins, and clear constraints.

## RabbitMQ Instead of Kafka

Pros:

- Excellent work queue semantics.
- Simpler for task distribution.

Cons:

- Kafka is stronger for durable event logs, replay, analytics streams, and event-driven system design examples.

# Pros

- PostgreSQL gives durable relational correctness.
- Redis supports cache, counters, rate limits, and short-lived state.
- Kafka supports decoupled asynchronous workflows.
- The trio maps well to common production backend designs.

# Cons

- More operational complexity than a single database.
- Kafka can be overkill for small systems.
- Redis can hide bad database design if misused.
- Each component needs monitoring and failure planning.

# Consequences

Documentation must explain when each component is required and when it should be avoided. Every design should include failure behavior, not just happy-path diagrams.

# Why Not Only PostgreSQL

PostgreSQL can handle many workloads, but it should not be forced to solve every problem. Redis improves hot read paths and coordination use cases. Kafka decouples asynchronous work and creates replayable event streams.

# Result

PostgreSQL, Redis, and Kafka are used as the reference stack for production thinking. They demonstrate persistence, performance, and event-driven design while keeping tradeoffs visible.
