# Rofik Portfolio

Production-oriented engineering portfolio built with Nuxt, Vue, TypeScript, Tailwind CSS, and Nuxt Content.

## Purpose

This repository demonstrates backend, frontend, systems, and architecture thinking through project pages, case studies, and engineering notes.

## Application

The Nuxt application lives in `portfolio/`.

```bash
cd portfolio
pnpm install
pnpm dev
```

## Production Build

```bash
cd portfolio
pnpm test
pnpm generate
```

The static artifact is generated at `portfolio/.output/public`.

## Deployment

GitHub Actions deploys the generated static site to GitHub Pages from the repository root workflows in `.github/workflows`.

Production URL:

https://rofikali.github.io/Portfolio-Rofik/

## Architecture

The codebase follows a clean architecture style:

- `domain`: framework-free business types and repository contracts
- `application`: use cases
- `infrastructure`: Nuxt Content repositories and static content adapters
- `presentation`: Vue components and UI composition
- `pages`: Nuxt route entry points
- `content`: markdown projects, case studies, and articles

## Quality Gates

- Static generation must pass.
- Vitest smoke/unit checks must pass.
- GitHub Pages deployment must publish `.output/public`.
