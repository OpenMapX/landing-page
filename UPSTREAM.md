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
- `src/lib/components/Logo.svelte` — OpenMapX logo (replaces @immich/ui Logo)
- `src/lib/constants.ts`, `src/lib/nav.ts` — OpenMapX URLs/nav (replaces Constants/getSiteProviders)
- `src/common/theme/theme.css` — `--immich-primary: 19 19 212` (#1313D4)
- `src/lib/app.css` — `@source` points at `node_modules/@immich/ui` + `../common`
- `src/routes/+layout.svelte` — minimal shell (no command palette / Immich providers)
- `src/lib/server/index.ts`, `src/lib/index.ts` — OpenMapX blog feed identity + metadata
- All page content, `static/` brand assets, feeds, redirects
