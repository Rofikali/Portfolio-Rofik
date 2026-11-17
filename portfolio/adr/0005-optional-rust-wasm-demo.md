# ADR-0005 — Optional Rust/WebAssembly Demonstration

**Status: PROPOSED / DEFERRED. No authorization to introduce a Rust/WASM build, publish a new page, add a download or change the Nuxt runtime.** Decision reviewed 2026-11-17 for the engineering portfolio.

## Problem

A portfolio should *demonstrate* credible engineering work, rather than list languages. Rust/WASM may add value in a **single educational, CPU-bound browser demo** (e.g., an image transform or algorithm visualizer), but the existing portfolio pages do not require it.

## Current architecture

Existing site remains Nuxt 4 + Vue/TypeScript + Nuxt Content statically hosted on GitHub Pages. Rust/WASM is not in the portfolio package manifests, build pipeline or deployed site. Do not mistake an IMGENGINE repo case study for a live WASM portfolio feature.

## Candidate design — not implemented

~~~text
Dedicated /lab/demo route (lazy chunk)
   -> accessible Vue controls + file validation
   -> dedicated Web Worker
   -> explicitly imported .wasm module
   -> bounded memory/CPU + cancellation/cleanup
   -> result preview, no server upload
~~~

Compare **(A) plain JS/TS + browser APIs**, **(B) Rust/WASM** and, only if relevant, **(C) reusable IMGENGINE core compiled for WASM**. The latter adds substantially more toolchain/codec/ABI/licensing risk and is **not approved** by this ADR.

## Decision criteria

- Real visitor value and clear source/demo provenance; one demo is sufficient.
- Measured before/after user experience: transferred bytes (including WASM), cold/warm startup, p50/p95 workload time, peak memory and browser/mobile performance.
- Tests: input size limits, malformed files, Unicode paths if relevant, cross-browser, keyboard/screen reader, cancellation, worker crash, memory reclamation and data privacy.
- Static deployment: generated .wasm fetched from `/Portfolio-Rofik/`; verify correct MIME and asset URLs in the GitHub Pages environment.
- Security: never treat WASM or a Worker as an untrusted-input security boundary; do not load arbitrary remote modules or share sensitive files over network.
- Commercial: no paid VPS required for a client-only demo; account for development cost, support and increased bundle size.

## Recommendation and outcome

**Defer.** Prioritize security/advisory triage, deploy guard, search correctness, content credibility and meaningful browser tests. Revisit only after a named small demo and baseline JS benchmark show genuine engineering/visitor value. Do not add Rust to ordinary pages or imply guaranteed acceleration.
