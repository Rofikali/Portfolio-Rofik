# 18-domain-model.md

# Domain Model

## Core Domains

Portfolio consists of:

* Profile
* Projects
* Skills
* Blog
* Contact

---

# Profile Entity

```ts
Profile
```

Attributes:

```text
id
name
title
bio
email
githubUrl
linkedinUrl
resumeUrl
```

---

# Skill Entity

```ts
Skill
```

Attributes:

```text
id
name
category
icon
proficiency
```

Categories:

```text
Backend
Frontend
Database
DevOps
Systems
```

---

# Project Entity

```ts
Project
```

Attributes:

```text
id
slug
title
description
summary
featured
githubUrl
demoUrl
image
createdAt
updatedAt
```

---

# Technology Entity

```ts
Technology
```

Attributes:

```text
id
name
category
```

Examples:

```text
FastAPI
Django
Nuxt
Vue
TypeScript
PostgreSQL
Redis
Docker
Linux
C
AVX2
```

---

# Blog Entity

```ts
BlogPost
```

Attributes:

```text
id
slug
title
summary
content
publishedAt
tags
```

---

# Relationships

```text
Profile
    |
    ├── Skills

Project
    |
    ├── Technologies

Blog
    |
    ├── Tags
```

---

# Domain Rules

Project slug must be unique.

Blog slug must be unique.

Project title required.

Technology names standardized.

No duplicate skills.

```
```
