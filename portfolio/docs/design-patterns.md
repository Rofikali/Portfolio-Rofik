# Design Patterns and Principles — Portfolio-Rofik

**Purpose:** Show how patterns solve *actual* website problems, not how many textbook patterns can be mentioned. Patterns here are either verified source usage or clearly labeled recommendations. Cross-reference [LLD](lld.md) and source at main `46bd300`.

## Implemented patterns

| Pattern | Existing example | Why relevant | Limitation |
| --- | --- | --- | --- |
| Repository abstraction | `domain/documentation/repositories/DocumentationRepository.ts` and `NuxtContentDocumentationRepository.ts` | Separates content metadata retrieval contract from Nuxt Content | Direct `queryCollection` in pages still bypasses |
| Adapter / mapper | `DocumentationMapper.ts` | Converts content records into typed documentation data | Fallback casts can conceal invalid metadata |
| Application use case | `GetDocumentationBySlug.ts`, `GetCaseStudies.ts` | Makes intent explicit and supports targeted testing | No DI composition root; use cases instantiate repo |
| Component composition | `HeroSection.vue`, `ProjectCard.vue`, `DocumentationLayout.vue` | Reuse display without copying page templates | Some different document routes repeat fetching |
| Composable | `useThemeMode.ts`, `usePortfolioSeo.ts` | Encapsulate theme and SEO behavior | Theme initialization may flash / repeated mount |
| Strategy-like route selection | `DocumentationLayout.vue` `documentRoute` | Chooses link based on content category | Ad hoc conditional, **not** implemented Strategy object pattern |

## Patterns to introduce only on evidence

- **Factory:** one tested content-repository factory if multiple interchangeable adapters are needed; otherwise direct construction is simpler.
- **Strategy:** a category-to-path resolver if search, tags, related documents and breadcrumbs duplicate URL rules. A small pure function is enough before polymorphic classes.
- **Specification:** reusable Published + category + subcategory validation if multiple entry points currently diverge. Can be a pure predicate.
- **Observer:** Vue computed/watches for UI state; no need for an event bus.
- **Cache:** build-time generated search index or in-memory memoization for larger content only after measuring. Do not add Redis.

## SOLID/DRY/KISS/YAGNI applied concretely

- **SRP:** page handles route orchestration, component handles visuals, repository handles queries; however do not split a 10-line component into five classes.
- **OCP:** content types can extend with typed route/index schema without editing all pages; test migration tradeoffs.
- **LSP:** repository implementations return the same documented nullable/array contracts.
- **ISP:** small repository interfaces, avoiding a universal `ContentEverythingRepository`.
- **DIP:** application should depend on contracts rather than Nuxt-specific adapters when the abstraction repays its cost.
- **DRY:** extract canonical URL construction, slug normalization and repeated search item logic; avoid accidental duplication.
- **KISS:** static site and Markdown remain sufficient; a microservice is a maintenance regression here.
- **YAGNI:** no authentication/paid service/data platform absent a real requirement.

## Decision template

For every new pattern record **problem**, actual **source duplication or failure**, **minimum alternative**, **selected design**, complexity, testability, runtime/bundle cost, security implications, **reversal path**, and **evidence**. Prefer testable pure functions over a large framework.

## Example: planned route resolver

Input: `{category, subcategory, slug}`. Output: safe canonical internal path or `null` for invalid metadata. Conditions: system-design uses `/system-design/{slug}`; architecture uses `/architecture/{subcategory}/{slug}`; engineering uses `/engineering/{subcategory}/{slug}`. Validate against known categories and segment format. This is **proposed**, not implemented.

## Non-goals

No fake design-pattern badges, no forced DDD aggregates for a resume website, no C/Rust FFI or IMGENGINE scheduler designs in this portfolio's runtime. Discuss those within linked project case studies if verified.
