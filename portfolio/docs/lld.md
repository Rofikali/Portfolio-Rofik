# Portfolio-Rofik — Low-Level Design (LLD)

**Source mapping:** `main` `46bd300ba74e6a2ccabd916f00f9da720f7aca14`, audited 2026-11-17. Actual implementation paths below, not speculative component names. The published public LLD article is [`src/content/documentation/lld/portfolio-lld.md`](../src/content/documentation/lld/portfolio-lld.md); reconcile when code changes.

## Boot and configuration

- `nuxt.config.ts`: `srcDir: 'src/'`, SSR enabled for generation, Nuxt Content and Tailwind modules, shared component path, global CSS, GitHub Pages baseURL env, shared HTML metadata.
- `src/app.vue` wraps `NuxtLayout` + `NuxtPage`; `src/layouts/default.vue` renders AppNavbar → main slot → AppFooter.
- `content.config.ts`: Zod-backed Markdown collections: `projects`, `caseStudies`, `blog`, `architecture`, `documentation`. `blog`/`architecture` currently overlap same architecture glob.

## Actual page routes (selected)

| Route | Source | Data |
| --- | --- | --- |
| `/` | `src/pages/index.vue` | profile + skills static imports, `getFeaturedProjects()` |
| `/projects`; `/projects/[slug]` | `src/pages/projects/*` | Nuxt Content projects collection; 404 on miss |
| `/case-studies`; `/case-studies/[slug]` | `src/pages/case-studies/*` | case-study use case / repository |
| `/engineering`; `/engineering/[subcategory]/[slug]` | `src/pages/engineering/*` | documentation use cases + Markdown renderer |
| `/architecture`; `/architecture/{hld,lld,adr}/[slug]` | `src/pages/architecture/*` | documentation repository/renderer |
| `/system-design`; `/system-design/[slug]` | `src/pages/system-design/*` | documentation repository |
| `/blog`; `/blog/[slug]` | `src/pages/blog/*` | `blog` collection (architecture glob) |
| `/search`; `/tags/[tag]` | `src/pages/search.vue`; `tags/[tag].vue` | documentation list, projects/case studies counts |
| `/resume`; `/about`; `/contact` | corresponding `src/pages/*.vue` | static content; public PDF in `public/resume.pdf` |

Dynamic routes need careful prerender/deep-link verification; declaring the page is not proof that every slug generated as static HTML.

## Contracts and call sequences

**Featured projects:**
~~~mermaid
sequenceDiagram
  participant Page as index.vue
  participant UC as getFeaturedProjects
  participant C as Nuxt Content projects
  participant Card as ProjectCard
  Page->>UC: await getFeaturedProjects()
  UC->>C: where(featured, true).all()
  C-->>UC: Project-like records
  UC-->>Page: Project[]
  Page->>Card: render title, summary, tags, image, URLs
~~~

**Documentation detail:**
~~~mermaid
sequenceDiagram
  participant Route as engineering/[subcategory]/[slug]
  participant UC as getDocumentationBySlug
  participant Repo as NuxtContentDocumentationRepository
  participant Data as queryCollection(documentation)
  Route->>UC: slug
  UC->>Repo: getBySlug
  Repo->>Data: where(slug).first()
  Data-->>Repo: content record/null
  Repo-->>Route: mapped metadata/null
  Route->>Data: load article body
  Route-->>Route: 404 or DocumentationLayout + ContentRenderer
~~~

The `getDocumentationBySlug` path resolves by slug only; the route segment `subcategory` is not currently verified against the returned document and the repository `getBySlug` does not enforce Published, unlike `getAll`. Address in a scoped source PR.

## Concrete source boundaries

- Domain contracts: `src/domain/{project,case-study,documentation}/...`.
- Use cases: `src/application/project/useCases/GetFeaturedProjects.ts`, `src/application/case-study/useCases/*`, `src/application/documentation/useCases/*`.
- Adapters: `src/infrastructure/repositories/NuxtContentCaseStudyRepository.ts`, `src/infrastructure/documentation/repositories/NuxtContentDocumentationRepository.ts`, mapper `DocumentationMapper.ts`.
- UI components: `src/presentation/components/{atoms,molecules,organisms,docs}/`, including `HeroSection.vue`, `ProjectCard.vue`, `AppNavbar.vue`, `ContactSection.vue`.
- Composables: `useThemeMode.ts` (module-scope ref, localStorage/matchMedia during mount), `usePortfolioSeo.ts`.
- Styling: `src/assets/css/tailwind.css` uses class-based light overrides, not a fully tokenized design system.

## Failure paths and safety

| Boundary | Actual behavior / gap | Expected invariant |
| --- | --- | --- |
| Project slug missing | `createError(404)` | No broken prerender or blank route |
| Documentation missing | route 404 | Also validate Published and matching category/subcategory |
| External project URL | `rel='noopener noreferrer'` used | Reject malformed URLs in metadata and distinguish actual demo |
| Project image | baseURL helper prepends Pages prefix | Prevent double-prefix, missing file and heavy hero asset |
| Theme | localStorage + prefers-color-scheme on mount | No initial flash and accessible contrast in both modes |
| Search | searches only docs; projects/cases counted only | Include all types, safe text normalization, valid links |
| Case-study table of contents | hard-coded headings | Derive from actual Markdown headings/ids |
| Resume | public PDF, years/percentages in page | Owner-reviewed factual accuracy; no unintended PII |

## Tests and complexity

Existing `tests/smoke.test.ts` asserts only arithmetic; `tests/unit/case-study-content.test.ts` checks frontmatter field presence. Do not claim meaningful E2E or 80% coverage. See [testing](15-testing-strategy.md), [DSA](dsa-algorithms.md) and [scoped verification](change-scoped-verification.md).

LLD change rule: update this mapping only when the route/query/component actually changes. Prefer a one-feature PR and an exact-head verification report.
