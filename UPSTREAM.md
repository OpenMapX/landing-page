# Upstream sync

This site is vendored from [immich-app/static-pages](https://github.com/immich-app/static-pages)
(`apps/root.immich.app` + `common/`, MIT). Two channels keep us current:

## 1. Design system & blog engine (automatic)
We consume `@immich/ui` and `@immich/svelte-markdown-preprocess` from npm. To pull improvements:

    pnpm up @immich/ui @immich/svelte-markdown-preprocess
    pnpm build && pnpm check   # verify (both are pre-1.0; expect occasional breaking changes)

## 2. Page scaffold (deliberate cherry-pick)
The baseline upstream commit we copied from is in `VENDOR_BASELINE`.

    git fetch upstream
    git diff "$(cat VENDOR_BASELINE)"..upstream/main -- apps/root.immich.app common

Port the changes you want by hand (our files mirror the upstream layout under `src/` and
`src/common/`). Then bump `VENDOR_BASELINE` to the new upstream SHA.

## Things we intentionally changed (don't blindly overwrite)
- `src/lib/components/Logo.svelte` — OpenMapX logo (replaces @immich/ui's Logo).
  Upstream's Logo is a single `<img>` (icon+wordmark baked into one theme-aware SVG),
  so it has no `display` utility and the header can hide it with a bare `hidden` class.
  Ours is a **composite** (icon `<img>` + live `OpenMapX` text) whose root is `inline-flex`.
  A bare `hidden` cannot override that — Tailwind emits `.inline-flex` *after* `.hidden`,
  so `.inline-flex` wins and the logo never hides. The header therefore uses the single
  `responsive` variant (mark always shown, wordmark toggles via `hidden sm:inline`).
  Do NOT port upstream's two-instance `hidden sm:block` / `sm:hidden` pattern onto our
  composite Logo — it renders two overlapping logos below `sm`.
- `src/lib/constants.ts`, `src/lib/nav.ts` — OpenMapX URLs/nav (replaces Constants/getSiteProviders)
- `src/common/theme/theme.css` — `--immich-primary: 19 19 212` (#1313D4)
- `src/lib/app.css` — `@source` points at `node_modules/@immich/ui` + `../common`
- `src/routes/+layout.svelte` — OpenMapX header/nav: `<Logo variant="responsive">`, the
  "Open the map" CTA collapses into the hamburger drawer below `lg`, and the mobile-menu
  breakpoint is aligned to `lg` (hamburger `lg:hidden`, `MediaQuery max-width: 1023px`) so
  the menu stays reachable in the 768–1024px range (upstream leaves that range with no menu).
- `src/lib/server/index.ts`, `src/lib/index.ts` — OpenMapX blog feed identity + metadata
- All page content, `static/` brand assets, feeds, redirects
