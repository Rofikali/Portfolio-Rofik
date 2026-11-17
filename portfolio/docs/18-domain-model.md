# Portfolio Domain and Content Model — Real Boundaries

Canonical implementation reference: [LLD](lld.md); typed content configuration: [`content.config.ts`](../content.config.ts).

## Current domains

- **Profile**: `src/domain/profile/types/Profile.ts`, data in `src/infrastructure/content/profile/profile.ts`.
- **Skill**: `src/domain/skill/types/Skill.ts` and static skills data.
- **Project**: `src/domain/project/types/Project.ts`, project repository contract, featured use case, Markdown `projects` collection.
- **Case study**: `src/domain/case-study/types/CaseStudy.ts` and repository contract; Markdown `caseStudies` collection.
- **Documentation**: entity, category value object, repository interface, Nuxt Content adapter/mapper, Markdown `documentation` collection.
- **Contact & navigation**: typed static link/menu records, not persisted user/customer entities.
- **Blog/architecture**: Nuxt Content collections share the current `architecture/**/*.md` glob.

## Domain invariants (desired, not all enforced)

Valid unique route slug; category/subcategory matches route; Published required for public detail; external URL uses safe scheme; source project and case-study links resolve; cross-references point to existing documents; accurate dates and statuses; no duplicate canonical URLs. Existing `getBySlug` lacks Published filter and several route pages query content directly, so treat these as current gaps to test/repair.

## Domain boundaries

This is a **content publishing domain**, not a commercial CRM/ERP backend. Do not use entities like Invoice, UserSession or Tenant solely because they appear in portfolio case studies. Distinguish authored Markdown metadata from typed domain records and browser-rendered bodies.

For design pattern decisions see [patterns](design-patterns.md), for algorithms see [DSA](dsa-algorithms.md).
