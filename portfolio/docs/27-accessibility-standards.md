# Accessibility Standards — Portfolio-Rofik

**Target:** WCAG 2.2 AA across homepage, projects, case studies, documentation, search, resume and both themes. A Lighthouse score ≥95 is a *goal*, not proof of WCAG conformance. No fresh screen-reader/manual accessibility audit is claimed by this document.

## Requirements for changed UI

- Semantic `header`, `nav`, one meaningful `main`, `footer` and logical heading hierarchy; controls must be real links/buttons.
- Keyboard usable including focus visible/management, mobile menu, theme toggle, search input/results, filters and download actions.
- Normal text contrast ≥4.5:1 and large text ≥3:1; check light/dark, disabled, focus and card/prose combinations.
- Announce dynamic search results/validation accessibly where needed; labels must not rely on placeholder alone.
- Provide alt text for informative project images, empty alt for purely decorative visuals, sensible aspect ratio/size and no layout shift.
- Respect reduced-motion settings and readable reflow at narrow viewport (including ~320px). Avoid hover-only navigation.
- Downloaded resume PDF should be tested separately for selectable text and meaningful document order when updated.
- Browser theme initialization and localStorage blocked/fallback behavior must not flash unreadable text or fail controls.

## Verification evidence

Run targeted Vue unit tests for semantics where feasible, actual keyboard/mobile/manual review, axe, multiple browsers and a screen reader when available. Record route, browser/device, viewport, SHA, exact finding and remaining exceptions. Actual public implementation gaps remain [TEST-001 and PERF-A11Y-001](../../next.md); no guarantee of current 95+ scores.

Canonical [content/SEO/a11y](content-seo-accessibility.md), [performance](23-performance-budget.md) and [testing](15-testing-strategy.md).
