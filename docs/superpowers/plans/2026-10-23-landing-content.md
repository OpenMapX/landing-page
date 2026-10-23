# Landing content implementation plan

> **For agentic workers:** Use superpowers:executing-plans to implement these tasks.

**Goal:** Make the landing site's content accurate, useful, and readable.

**Architecture:** Edit the existing static SvelteKit routes and shared link
labels. Reuse the current cards, headings, buttons, and timeline. No new
dependencies or application behavior.

**Tech stack:** Svelte 5, SvelteKit, Tailwind, @immich/ui.

**Spec:** `docs/superpowers/specs/2026-10-23-landing-content-design.md`.

## Global constraints

- Content and information structure only; preserve the visual system.
- Verify claims against product source; distinguish implementation from release.
- Use the reference sites and Humanizer for editorial style.
- Use only Codex for delegated research and review.
- Preserve operator configuration and upstream attribution.

## Review focus

- Account-free browsing must not imply account-free saved data or map preparation.
- Offline guidance must not imply new offline routing, search, or live transit.
- Self-hosting must not imply that all default upstreams are local or open data.
- Roadmap status must not invent release dates or native-store availability.
- Privacy statements must not promise anonymity or verified hosting arrangements.

## Task 1: Verify and rewrite product content

Files: homepage, features, download, roadmap, shared constants and navigation,
blog introduction, site metadata.

- [x] Read the four reference sites and Humanizer; record the editorial choices.
- [x] Trace product claims through code and docs; record a source map.
- [x] Rewrite the homepage, grouped features, use/setup guidance, and roadmap.
- [x] Align navigation labels, metadata, and the introductory post.
- [x] Run `pnpm check`, `pnpm test --run`, and `pnpm build`.

## Task 2: Review supporting content and rendered output

Files: legal routes, README, `docs/content-review.md`.

- [x] Correct unsupported technical statements and contradictory license wording.
- [x] Record operator facts that source code cannot establish.
- [x] Inspect every rendered route, links, metadata, and blog feeds.
- [x] Inspect desktop and mobile views and capture comparable screenshots.
- [x] Obtain independent Codex review and address substantive findings.
- [x] Repeat affected checks after edits.

Delivery: commit and push the verified branch, then create and register its PR
with the source-evidence report and hosted before/after screenshots.

Copy changes are verified through source comparison and rendered output. Do not
add tests that merely assert the exact marketing wording.
