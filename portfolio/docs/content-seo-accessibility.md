# Content Integrity, SEO and Accessibility Contract

**Audience:** visitors evaluating professional competence on a static portfolio. The primary quality bar is clarity, truth, usability and crawlability—not animation count.

## Content model and truth

Content collections are in `content.config.ts`; Markdown in `src/content/{projects,case-studies,documentation,architecture}/`. Require uniqueness of canonical route, dates in expected format, valid external URLs, clear implementation status and owner-reviewed claims. If a project is partial, label it honestly. Illustrative designs are not implementation evidence. Do not expose Draft documentation from direct detail routes.

## Slugs and routing

- Canonical `/projects/{slug}` and `/case-studies/{slug}`.
- Documentation varies by `/engineering/{subcategory}/{slug}`, `/architecture/{subcategory}/{slug}`, `/system-design/{slug}`.
- Centralize URL creation where repeated, verify category and subcategory match slug and reject unknown routes.
- Existing `blog`/`architecture` collections share the same `architecture/**/*.md` glob: document taxonomy and prevent duplicate/ambiguous publishing rather than assuming a separate technical blog collection.
- Each generated/prerendered deep link must be opened successfully with the Pages repository prefix.

## SEO

- Unique meaningful title, description, canonical absolute URL, OG title/description/image, accessible alt text and logical headings.
- Base path is `/Portfolio-Rofik/` in GitHub Pages; check that links, images, resume and social preview use the correct prefix.
- `public/robots.txt` and `public/sitemap.xml` are currently tracked static files. Validate each URL against generated routes; generate sitemap automatically when content grows rather than letting it lag.
- Structured data/JSON-LD can be proposed only with owner-verified facts; no fictional employment or review ratings.
- Verify publication dates, page 404 behavior and noindex on drafts/duplicate/search pages when appropriate.

## Accessibility (target WCAG 2.2 AA)

- One descriptive H1 per route, landmark `header`/`nav`/`main`/`footer`, clear focus states, semantic buttons/links.
- All actions work with keyboard and assistive technology; mobile menu and theme toggle convey state and focus appropriately.
- Text contrast ≥ 4.5:1 for normal body copy and ≥ 3:1 for large text; verify **both** light and dark themes including cards/prose.
- Accessible labels for search input and live announcements for results if dynamic; placeholders are not labels.
- Derive document TOC from actual generated headings instead of hardcoded anchors; check actual id targets.
- Ensure reduced motion preferences, responsive text/reflow, images with useful alt text and real error/empty states.

## Testable acceptance suite

1. Homepage renders featured projects with correct links and accessible theme toggle.
2. Project and case study direct routes resolve under Pages prefix; missing slugs 404.
3. Search matches published documents, projects and cases; no results and long query do not break UI.
4. Keyboard navigation, screen reader naming, focus, light/dark contrast and 320px mobile viewport are checked.
5. Resume PDF/download and public claims are owner-reviewed.
6. Generated sitemap links resolve; metadata/OG preview uses valid public image URLs.

Do not claim Lighthouse 95+/WCAG compliance without actual dated automated and manual checks. Consult [performance budget](23-performance-budget.md) and [testing strategy](15-testing-strategy.md).
