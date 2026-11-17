# UI Architecture — Source-Reconciled

Canonical component/route breakdown: [LLD](lld.md). Higher-level diagram: [HLD](hld.md). A11y/SEO: [content contract](content-seo-accessibility.md).

**Actual composition at 2026-11-17 main:** `src/app.vue` → `src/layouts/default.vue` → `AppNavbar` + NuxtPage main + `AppFooter`. Homepage uses `HeroSection`, `SkillsSection`, `FeaturedProjectsSection`, `ContactSection`. Components are under `src/presentation/components/atoms|molecules|organisms|docs`.

Routes include homepage, about, contact, resume, projects, case studies, engineering, system design, architecture, blog, tags and search. See actual paths in LLD before adding route-specific variants.

**State:** prefer Vue local/composable state. `useThemeMode` currently keeps module-scope theme ref and writes localStorage during mount; hardcoded utility CSS overrides both modes. Validate initial render, keyboard state and contrast rather than assuming the class swap is perfect.

**Rules:** semantic HTML, Vue/TS typed props, responsive design, explicit missing-content state, valid internal links, accessible focus, reduced motion, verified image alt text and no heavy global store without need. Extract shared functions only for real duplication. Do not invent `SkillGrid.vue`, `ContactForm.vue` or other historical component names as current implementation.
