---
id: tiktok
slug: tiktok-clone
title: TikTok Clone
featured: true
summary: Video sharing social platform.
description: Social media application supporting video feeds, comments, likes, user profiles, and API-driven frontend integration.
image: /images/projects/tiktok.webp
githubUrl: https://github.com/Rofikali/TikTokClone
demoUrl: https://github.com/Rofikali/TikTokClone
technologies:
  - Django
  - DRF
  - PostgreSQL
  - Redis
  - Docker
  - Nuxt
highlights:
  - Feed read model
  - Cursor pagination
  - Engagement workflows
  - Redis cache strategy
createdAt: 2025-01-01
updatedAt: 2026-07-01
---

# Overview

TikTok Clone is a social video platform project focused on feed browsing, comments, likes, user profiles, and API-driven frontend integration.

The project is documented as a production-style system: the feed is treated as a read model, engagement actions are isolated as writes, and media storage is kept behind a clear boundary.

# Architecture

```mermaid
flowchart LR
  Browser[Browser] --> Nuxt[Nuxt Frontend]
  Nuxt --> API[Django REST API]
  API --> Feed[Feed Service]
  API --> Engagement[Engagement Service]
  API --> Postgres[(PostgreSQL)]
  Feed --> Redis[(Redis)]
  API --> Media[Media Storage Boundary]
```

# Screenshots

Primary project visual: `/images/projects/tiktok.webp`.

Future screenshots should include the feed page, video detail page, creator profile, and mobile layout.

# API Design

```http
GET    /api/feed?cursor=...
GET    /api/videos/{video_id}
POST   /api/videos
POST   /api/videos/{video_id}/likes
DELETE /api/videos/{video_id}/likes
GET    /api/videos/{video_id}/comments
POST   /api/videos/{video_id}/comments
GET    /api/users/{username}
```

# Database Schema

```mermaid
erDiagram
  USER ||--o{ VIDEO : uploads
  USER ||--o{ COMMENT : writes
  USER ||--o{ LIKE : creates
  VIDEO ||--o{ COMMENT : receives
  VIDEO ||--o{ LIKE : receives

  USER {
    uuid id
    string username
    string email
  }

  VIDEO {
    uuid id
    uuid owner_id
    string media_url
    string status
  }

  COMMENT {
    uuid id
    uuid user_id
    uuid video_id
    text body
  }

  LIKE {
    uuid user_id
    uuid video_id
  }
```

# Caching

Redis stores feed slices and video counters.

- `feed:global:{cursor}`
- `feed:user:{user_id}:{cursor}`
- `video:stats:{video_id}`
- `profile:{username}`

Cache invalidation is event-driven around upload, delete, like, comment, and profile update workflows.

# Messaging

Engagement events can move through Kafka in the production version.

```mermaid
sequenceDiagram
  participant API
  participant DB as PostgreSQL
  participant Kafka
  participant Worker
  participant Redis

  API->>DB: Persist like/comment
  API->>Kafka: Publish engagement event
  Kafka->>Worker: Consume event
  Worker->>Redis: Refresh counters
```

# Monitoring

Metrics:

- Feed p95 latency.
- Cache hit ratio.
- Like write conflicts.
- Comment creation failures.
- Database query duration.
- Redis memory usage.

# Deployment

```mermaid
flowchart TD
  GitHub[GitHub] --> CI[CI]
  CI --> APIImage[Django API Image]
  APIImage --> Runtime[Container Runtime]
  Runtime --> DB[(PostgreSQL)]
  Runtime --> Cache[(Redis)]
  Nuxt[Nuxt Static Frontend] --> CDN[Static Hosting/CDN]
  CDN --> Runtime
```

# Performance

Targets:

- Cached feed p95 below 300 ms.
- Uncached feed p95 below 700 ms.
- Like/unlike p95 below 150 ms.
- Comment write p95 below 250 ms.
- First-page cache hit ratio above 80 percent.

# Lessons Learned

- Feed systems need explicit read-model design.
- Media bytes and metadata should not live in the same boundary.
- Redis works best when invalidation rules are tied to product events.
- Engagement write paths should be independently measurable.

# GitHub

Source code: [TikTok Clone](https://github.com/Rofikali/TikTokClone)

# Live Demo

The repository README is linked as the live technical preview for v0.1.
