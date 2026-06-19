# Coding Standards

## Purpose

Maintain consistency, readability, maintainability, and scalability across the codebase.

---

## General Principles

Follow:

* SOLID
* DRY
* KISS
* YAGNI
* Clean Architecture

---

## TypeScript Rules

Strict mode enabled.

Avoid:

```ts
any
```

Prefer:

```ts
unknown
```

or explicit types.

All exported functions must have return types.

Example:

```ts
export function getProjects(): Project[] {
  return projects;
}
```

---

## Naming Conventions

### Components

```text
HeroSection.vue
ProjectCard.vue
ContactForm.vue
```

### Composables

```text
useProjects.ts
useSeo.ts
useTheme.ts
```

### Types

```text
Project.ts
BlogPost.ts
Skill.ts
```

### Interfaces

```text
ProjectRepository.ts
AnalyticsProvider.ts
```

### Enums

```text
ProjectCategory.ts
ThemeMode.ts
```

---

## Component Design

Each component should:

* Have a single responsibility
* Be reusable
* Be composable

Avoid:

Large components exceeding 300 lines.

---

## Imports

Order:

1. Framework imports
2. Third-party imports
3. Internal imports
4. Relative imports

Example:

```ts
import { computed } from "vue";

import { useSeo } from "@/composables/useSeo";

import type { Project } from "./Project";
```

---

## Comments

Code should be self-explanatory.

Use comments only for:

* Why
* Tradeoffs
* Complex algorithms

Never comment obvious code.

---

## Error Handling

Always fail gracefully.

Use:

```ts
try {
} catch (error) {
}
```

Never silently swallow exceptions.

---

## Logging

Allowed:

* Debug
* Warning
* Error

Never log:

* Secrets
* Tokens
* Sensitive data

---

## Code Quality Targets

Maximum file length:

500 lines

Maximum function length:

50 lines

Maximum nesting depth:

3

Cyclomatic complexity:

< 10
