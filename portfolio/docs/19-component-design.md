# 19-component-design.md

# Component Design

## Philosophy

Components must be:

* Reusable
* Testable
* Composable
* Independent

---

# Atomic Hierarchy

Level 1

Atoms

```text
Button

Badge

Tag

Icon

Link
```

---

Level 2

Molecules

```text
ProjectCard

SkillCard

SocialLink
```

---

Level 3

Organisms

```text
HeroSection

ProjectsGrid

SkillsSection

FooterSection
```

---

Level 4

Pages

```text
HomePage

ProjectsPage

BlogPage
```

---

# ProjectCard Design

Props:

```ts
title
description
image
githubUrl
demoUrl
technologies
```

Responsibilities:

* Render project details
* Display technologies
* Provide actions

Must not:

* Fetch data
* Manage global state

---

# HeroSection Design

Props:

```ts
profile
```

Responsibilities:

* Display profile
* Display call to action
* Display social links

---

# Component Rules

One responsibility.

No business logic in templates.

Use composables for reusable logic.

Prefer props over global state.

Favor composition over inheritance.

```
```
