---
id: system-design-realtime-chat
title: Realtime Chat System Design
slug: realtime-chat
summary: Design for a realtime chat system with WebSockets, message persistence, fanout, delivery semantics, Redis presence, Kafka streams, monitoring, and scaling.
category: system-design
subcategory: backend
difficulty: Advanced
readingTime: 22
status: Published
version: 1.0.0
tags:
  - System Design
  - WebSocket
  - Kafka
  - Redis
technologies:
  - FastAPI
  - WebSocket
  - PostgreSQL
  - Redis
  - Kafka
related:
  - kafka-event-streaming-basics
  - redis-patterns-production
author: Rofik Ali
publishedAt: 2026-07-01
updatedAt: 2026-07-01
---

# Overview

A realtime chat system delivers messages between users with low latency while preserving message history and reasonable delivery guarantees.

The difficult part is not sending one WebSocket message. The difficult part is presence, reconnects, ordering, fanout, persistence, unread counts, and failure recovery.

# Requirements

Functional:

- One-to-one and group messaging.
- WebSocket realtime delivery.
- Message history.
- Read receipts.
- Online presence.
- Push notification handoff for offline users.

Non-functional:

- Low message delivery latency.
- Durable message storage.
- Horizontal scaling for connection servers.
- At-least-once internal event delivery.

# Capacity Estimation

Assumptions:

- 1 million daily active users.
- 100 thousand concurrent WebSocket connections.
- 50 messages per active user per day.
- 50 million messages per day.

Storage:

- Message body plus metadata can quickly reach tens of GB per day.
- Attachments should use object storage, not PostgreSQL rows.

# API Design

```http
GET  /api/conversations
GET  /api/conversations/{conversation_id}/messages?cursor=...
POST /api/conversations/{conversation_id}/messages
POST /api/conversations/{conversation_id}/read
GET  /ws
```

WebSocket message:

```json
{
  "type": "message.created",
  "conversationId": "conv_123",
  "messageId": "msg_456",
  "senderId": "user_1",
  "body": "hello",
  "sentAt": "2026-07-01T12:00:00Z"
}
```

# Database

```mermaid
erDiagram
  USER ||--o{ CONVERSATION_MEMBER : joins
  CONVERSATION ||--o{ CONVERSATION_MEMBER : has
  CONVERSATION ||--o{ MESSAGE : contains
  USER ||--o{ MESSAGE : sends

  USER {
    uuid id
    string username
  }

  CONVERSATION {
    uuid id
    string type
    datetime created_at
  }

  CONVERSATION_MEMBER {
    uuid conversation_id
    uuid user_id
    datetime last_read_at
  }

  MESSAGE {
    uuid id
    uuid conversation_id
    uuid sender_id
    text body
    datetime created_at
  }
```

# Redis

Redis responsibilities:

- Presence: `presence:{user_id}`.
- Connection routing: `connection:{user_id}` -> server ID.
- Recent messages cache for hot conversations.
- Rate limiting for message sends.

# Kafka

Kafka decouples message persistence from fanout, notifications, indexing, and analytics.

Topics:

- `message.created`
- `message.delivered`
- `message.read`
- `presence.changed`

# Fanout

Small groups can use fanout-on-write: publish to every active recipient connection. Large groups may need fanout-on-read or a hybrid model.

```mermaid
sequenceDiagram
  participant Client
  participant WS as WebSocket Server
  participant DB as PostgreSQL
  participant Kafka
  participant Fanout
  participant Redis

  Client->>WS: Send message
  WS->>DB: Persist message
  WS->>Kafka: Publish message.created
  Kafka->>Fanout: Consume event
  Fanout->>Redis: Resolve online recipients
  Fanout-->>WS: Deliver to active connections
```

# Read Model

Read endpoints use cursor pagination by `created_at` and `message_id`. Conversation lists should use a denormalized summary:

- Last message preview.
- Last message timestamp.
- Unread count.
- Participant display data.

# Write Model

Message send flow:

1. Authenticate WebSocket.
2. Validate conversation membership.
3. Persist message.
4. Publish event.
5. Fan out to active recipients.
6. Trigger notification for offline recipients.

# Tradeoffs

- PostgreSQL is simpler for first versions but partitioning may be needed.
- WebSockets give realtime UX but require connection state.
- At-least-once events can duplicate delivery; clients need idempotency.
- Exactly-once delivery is usually too expensive for chat UX.

# Failure Recovery

- Clients reconnect with last seen message ID.
- Fanout failures are retried from Kafka.
- Duplicate messages are ignored by message ID.
- If presence is stale, delivery falls back to pull on reconnect.

# Monitoring

Metrics:

- Active WebSocket connections.
- Message send p95 latency.
- Kafka lag.
- Fanout failure rate.
- Reconnect rate.
- Message persistence errors.
- Presence key churn.

# Deployment

```mermaid
flowchart TD
  Client[Client Apps] --> LB[Load Balancer]
  LB --> WS1[WebSocket Server]
  LB --> WS2[WebSocket Server]
  WS1 --> Redis[(Redis Presence)]
  WS2 --> Redis
  WS1 --> DB[(PostgreSQL)]
  WS2 --> DB
  WS1 --> Kafka[(Kafka)]
  WS2 --> Kafka
  Kafka --> Worker[Fanout/Notification Workers]
```

# Scaling

- Scale WebSocket servers horizontally.
- Use Redis for connection routing.
- Partition Kafka by conversation ID for ordering.
- Partition message tables by time or conversation hash.
- Move attachment storage to object storage.

# Interview Questions

- How do you preserve ordering?
- How do users receive missed messages after reconnect?
- How does fanout change for large groups?
- How do you avoid duplicate messages?
- What state belongs in Redis vs PostgreSQL?

# Summary

Realtime chat is an event-driven system with stateful edges. The core design skill is separating connection state, durable message state, and asynchronous fanout.
