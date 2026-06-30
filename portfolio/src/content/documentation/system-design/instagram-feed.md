---
id: doc-system-design-instagram-feed
title: Design Instagram Feed
slug: instagram-feed
summary: High-level system design for a social media feed with fanout, ranking, caching, and media delivery.
category: system-design
subcategory: interview
difficulty: Advanced
readingTime: 16
status: Published
version: 1.0.0
tags:
  - System Design
  - Feed
  - Redis
  - Kafka
  - CDN
technologies:
  - Redis
  - Kafka
  - PostgreSQL
  - CDN
related:
  - repository-pattern
  - portfolio-hld
author: Rofik
publishedAt: 2026-06-29
updatedAt: 2026-06-29
---

## Overview

Designing an Instagram-like feed requires balancing write fanout, read latency, ranking freshness, and media delivery.

## Requirements

- Users follow other users.
- Users upload images and videos.
- Home feed loads quickly.
- Feed supports ranking and pagination.
- System handles celebrity accounts.

## High Level Design

```mermaid
flowchart LR
  Client --> API[API Gateway]
  API --> Post[Post Service]
  API --> Feed[Feed Service]
  Post --> Kafka[Event Stream]
  Kafka --> Fanout[Fanout Workers]
  Fanout --> Redis[Feed Cache]
  Post --> Blob[Object Storage + CDN]
  Feed --> Redis
  Feed --> DB[(PostgreSQL)]
```

## Data Model

- User
- Follow
- Post
- MediaAsset
- FeedItem

## Scaling Strategy

- Fanout-on-write for normal users.
- Fanout-on-read for celebrity accounts.
- Redis sorted sets for timeline windows.
- CDN for media.
- Kafka for asynchronous post distribution.

## Tradeoffs

- Fanout-on-write improves read latency but increases write amplification.
- Fanout-on-read reduces write cost for large accounts but increases request-time work.
- Ranking can be precomputed for speed or computed dynamically for freshness.
