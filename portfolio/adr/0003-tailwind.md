# ADR-0003 — Tailwind CSS for Portfolio Styling

**Status:** Accepted existing stack; retroactively documented 2026-11-17. Not a claim of passing accessibility or CSS regression tests.

## Context

This site needs consistent responsive layouts and a light/dark theme without an expensive component framework or repeated one-off CSS.

## Decision

Continue `@nuxtjs/tailwindcss` and `src/assets/css/tailwind.css` as the source of styles, favoring semantic Vue components and shared design tokens for repeated UI.

## Tradeoffs

- **Benefits:** rapid responsive composition, small local abstractions, Vue alignment and low cost.
- **Risks:** utility-class duplication; contrast/focus/reduced-motion mistakes, Tailwind/PostCSS version compatibility and inflated CSS if configured poorly.
- **Observed warning:** the 2026-11-17 dependency refresh passed static generation but logged a `tailwindcss/nesting` PostCSS compatibility warning. It is **not resolved merely by this ADR**.

## Verification gate

On CSS or dependency changes, inspect generated CSS and test 320px/mobile/desktop, both themes, keyboard/focus, WCAG 2.2 AA contrast and actual browser rendering. Benchmark before replacing the styling system. See [accessibility](../docs/27-accessibility-standards.md) and [performance budget](../docs/23-performance-budget.md).
