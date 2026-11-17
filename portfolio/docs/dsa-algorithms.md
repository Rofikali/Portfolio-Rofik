# DSA & Algorithms — Portfolio Content, Navigation and Search

**Status:** source-based algorithm mapping plus explicitly proposed changes. The relevant data structures are JavaScript/TypeScript arrays, maps, sets, strings and Nuxt Content query results—not image buffers, native queues or Rust FFI.

## Current algorithmic operations

| Source behavior | Data structure | Approximate time | Space | Notes |
| --- | --- | --- | --- | --- |
| `getFeaturedProjects()` queries by featured | Nuxt Content query | backend/index dependent; cannot assert O(1) | returned projects | Query engine index unknown; do not invent |
| Documentation `getAll()` maps + Published filter + title sort | array | O(n log n) worst-case due to sort | O(n) | n = documents returned |
| `getRelated()`: builds Set of related slugs then filters docs and shared tags | Set + array | O(n * t * u) conservative if checking tag membership in array | O(n + r) | t tags/document, u current tags; can be improved with sets |
| Search `documentationResults` | array + joined searchable strings | O(n * L) per query | O(n) matches | Currently docs only; L text length |
| `popularTags` | Set deduplication | O(T) expected | O(T) | T = total tag entries |
| Tag pages filter documents | array scan | O(n * t) | O(k) result | k matching documents |
| `tableOfContents` in case-study detail | static string array | O(m) rendering | O(m) | Incorrect if actual headings differ |

Complexities assume typical JS collection operations; actual collection query and browser performance require measurement, not theoretical guarantees.

## Proposed unified search — bounded static dataset

Goal: search **projects, case studies and published documentation** with safe canonical URLs. Start with simple O(n·L) scan before importing a search engine.

~~~text
build time / once per session:
  records := project items + case study items + published docs
  for each record:
    validate slug/category/url
    normalize title, summary, technology/tags
    store {type, slug, title, summary, url, searchableText}
query time:
  q := trim(lowercase(query)); reject huge input; cap results
  if q empty: return suggested items
  scan records for q
  rank exact title > prefix title > title contains > summary/tag
  stable sort by score, then title/slug
  return typed result items (no injected HTML)
~~~

For n records, average text length L, and k hits, scan is O(nL); ranking/sort is O(k log k); storing normalized text is O(nL). A precomputed inverted index could reduce repeated query scanning, but it increases build/bundle complexity and must earn its place with measured content scale.

## Important correctness cases

- **Slugs:** unique per route collection; reject two different records resolving to the same canonical URL.
- **Unicode/case:** Unicode-aware lowercase; optional normalization, but no blind stripping of all diacritics; preserve visible titles.
- **Tokens:** cap query length and result count; avoid catastrophic regex patterns, HTML injection and untrusted links.
- **Drafts:** Published status is enforced in both listing and detail queries, not just the sidebar.
- **Stable ordering:** deterministic tie-breakers prevent flicker across builds.
- **Navigation graph:** treat related-document links as a directed graph; check each target exists. Detect dangling references and optionally cycles only if traversal requires acyclicity.
- **Sitemap:** URLs are a unique set built from verified generated routes, not a manual guess.

## Testing matrices

1. Empty / whitespace / 1-character / very long input.
2. Matching project, case study, document, mixed types and no results.
3. Duplicate slug, unknown category, unpublished draft, invalid related target.
4. Non-ASCII title/tag, punctuation, case variation, URL encoding.
5. Cost threshold: log dataset count, bytes and p95 local search duration; no performance number without recorded environment.

## When to use more advanced algorithms

Only consider trie/autocomplete, inverted index, Fuse-style fuzzy matching or worker-based indexing if the measured data size and UX warrant it. Do not add a hosted Elasticsearch/Redis/search service for a small static portfolio.
