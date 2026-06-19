# 17-ui-architecture.md

# UI Architecture

## Objective

Create a portfolio that:

* Loads fast
* Is SEO optimized
* Is accessible
* Is content driven
* Scales with future content

---

# Architecture Style

Presentation Layer

```text
Pages
 ↓
Sections
 ↓
Components
 ↓
Composable Logic
```

---

# Route Structure

```text
/

/projects

/projects/[slug]

/blog

/blog/[slug]

/about

/contact
```

---

# Layout Structure

```text
DefaultLayout

├── Navbar
├── Main Content
├── Footer
```

---

# Homepage Composition

```text
HomePage

├── HeroSection
├── AboutSection
├── SkillsSection
├── FeaturedProjectsSection
├── EngineeringPrinciplesSection
├── ContactSection
```

---

# Shared Components

```text
Button

Card

SectionHeader

Tag

Badge

Container

Icon
```

---

# Feature Components

```text
ProjectCard

SkillGrid

Timeline

GithubStats

ContactForm
```

---

# State Management

Use local state first.

Use:

* Vue Composables

Avoid:

* Global stores unless required

Reason:

Portfolio is mostly static.

---

# Styling Strategy

TailwindCSS

Principles:

* Utility first
* Mobile first
* Design tokens
* Consistent spacing

---

# Accessibility

Requirements:

* Semantic HTML
* Keyboard navigation
* ARIA labels where needed
* Lighthouse Accessibility > 95

```
```
