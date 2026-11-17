# SEARCH-001 — Unified Portfolio Search

**Status: proposed feature PR, not yet released.** The site is statically generated; this feature needs no backend API, database, hosted search subscription or Rust/WASM worker.

## Visitor outcome

One search page combines **projects**, **case studies**, and **Published engineering/system-design/architecture docs**. Query by title, summary, tags or technologies. Users can filter by content type; each result is a proper Nuxt link with an accessible name and short summary.

## Data and trust boundaries

- The search page reads public Nuxt Content collection metadata once and builds an in-memory index using `src/application/search/searchPortfolio.ts`.
- Documentation is already filtered by the repository, **and** the index independently rejects records whose `status` is not `Published`. This is a UI publication guard, not a confidentiality guarantee for Markdown publicly committed to GitHub.
- Slug and subcategory are validated as individual URL path segments and encoded. Arbitrary slashes, traversal, query delimiters, empty fields and unsupported document categories do not produce result links.
- Search does not use `v-html`, remote APIs, form submission to third parties or dynamic regexes from untrusted input. The GET form produces shareable `?q=` and `?type=` links.
- Unicode NFKC normalization/case folding and whitespace reduction are applied to text; the maximum processed query length is 120 characters. Unicode text searches work even when a conservative slugs policy skips filenames with unsupported combining characters.
- Empty queries show a bounded set of suggested items; matches cap at 40. Counts reflect the complete valid metadata index, not only the visible results.

## Engineering tradeoffs

A typed in-memory array with O(n × query tokens) scan is simpler and lower cost for the portfolio's current content volume than a new DB, hosted search service, trie or worker. Results rank title matches above tags/technologies and summaries, then use deterministic type/title/path tie breaks. **No performance benchmark claim** is made until measured in a real browser.

## Verification and risks

- Vitest: mixed content, draft exclusion, invalid slugs, Unicode text, scope filtering, token matching, sorting, empty/long/hostile input, stable cross-type paths.
- Playwright: the generated GitHub Pages site must show both IMGENGINE project and case study results and a working case-study filter.
- CI: frozen install, Vitest, typecheck, static generation and Chromium if source file trigger applies.
- Future QA: link audit across all generated docs routes, visual/keyboard review, query-size and bundle benchmark; ensure no confidential Markdown enters the public repository.

[Milestone board](../../next.md) · [Design guidance](dsa-algorithms.md) · [Search page](../src/pages/search.vue) · [Runbook](../../docs/docs-sync-contract.md).
