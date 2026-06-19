# Folder Structure

## Philosophy

The project follows:

* Domain Driven Design
* Clean Architecture
* Feature Based Organization
* Separation of Concerns
* Static Site Generation

Goals:

* Scalability
* Maintainability
* Discoverability
* Testability

---

# Root Structure

portfolio/

├── .github/
├── docs/
├── public/
├── src/
├── tests/
├── scripts/
├── .env.example
├── nuxt.config.ts
├── package.json
├── README.md

---

# GitHub Workflows

.github/

└── workflows/
├── ci.yml
├── deploy.yml
├── security.yml

Purpose:

* Build validation
* Quality gates
* Deployment automation

---

# Documentation

docs/

├── vision.md
├── requirements.md
├── engineering-principles.md
├── user-stories.md
├── hld.md
├── lld.md
├── security.md
├── observability.md
├── deployment.md
├── seo.md
│
├── architecture/
│   ├── system-context.md
│   ├── container-diagram.md
│   ├── component-diagram.md
│   └── deployment-diagram.md
│
├── adr/
│   ├── 0001-use-nuxt.md
│   ├── 0002-static-generation.md
│   ├── 0003-tailwind.md
│   └── 0004-content-collections.md

Purpose:

Engineering decisions are documented.

---

# Public Assets

public/

├── images/
│   ├── profile/
│   ├── projects/
│   └── blog/
│
├── favicon.ico
├── robots.txt
└── sitemap.xml

Purpose:

Static assets served directly.

---

# Source Code

src/

├── app/
├── domain/
├── application/
├── infrastructure/
├── presentation/
├── shared/
└── content/

---

# App Layer

src/app/

├── plugins/
├── middleware/
└── providers/

Purpose:

Application bootstrap.

---

# Domain Layer

src/domain/

├── project/
├── profile/
├── blog/
└── contact/

Each domain contains:

project/

├── entities/
├── value-objects/
├── interfaces/
└── types/

Purpose:

Business concepts.

No framework dependencies.

---

# Application Layer

src/application/

├── services/
├── use-cases/
└── dto/

Examples:

GetProjectsUseCase

GetProfileUseCase

Purpose:

Business workflows.

---

# Infrastructure Layer

src/infrastructure/

├── repositories/
├── analytics/
├── content/
└── integrations/

Purpose:

External systems.

Examples:

GitHub Integration

Analytics Provider

Markdown Repository

---

# Presentation Layer

src/presentation/

├── pages/
├── layouts/
├── components/
├── composables/
└── stores/

Purpose:

UI implementation.

---

# Shared

src/shared/

├── constants/
├── utils/
├── types/
└── config/

Purpose:

Reusable logic.

---

# Content

src/content/

├── projects/
├── blog/
└── case-studies/

Purpose:

Content-driven architecture.

---

# Testing

tests/

├── unit/
├── integration/
├── e2e/
└── fixtures/

Purpose:

Testing pyramid.

---

# Scripts

scripts/

├── generate-sitemap.ts
├── optimize-images.ts
└── validate-content.ts

Purpose:

Automation.

---

# Naming Conventions

Components:

HeroSection.vue

ProjectCard.vue

SkillGrid.vue

Composables:

useProjects.ts

useSeo.ts

Interfaces:

ProjectRepository.ts

DTOs:

ProjectDto.ts

Types:

Project.ts

Enums:

ProjectCategory.ts

---

# Architecture Rule

Dependencies must flow inward.

Presentation
→ Application
→ Domain

Infrastructure
→ Domain

Domain
→ Nothing

This prevents architectural erosion.
