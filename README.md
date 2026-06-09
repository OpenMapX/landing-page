# OpenMapX landing page (openmapx.org)

Static marketing site for OpenMapX, built with SvelteKit + Tailwind on the Immich
static-pages foundation (MIT). See `UPSTREAM.md` for how to pull upstream improvements.

## Develop

    pnpm install
    pnpm dev        # http://localhost:5173

## Build / preview

    pnpm build      # static output in ./build
    pnpm preview

## Deploy

CI builds `ghcr.io/openmapx/landing-page` on push to main; the production VPS Traefik stack
serves it at openmapx.org. See the `Dockerfile` and `nginx.conf`.

## Brand

Primary color lives in one place: `--immich-primary` in `src/common/theme/theme.css`
(currently `19 19 212` = #1313D4). Logo: `src/lib/components/Logo.svelte`. Replace the
placeholder screenshots in `static/img/screenshot-{light,dark}.webp` with real captures.

## License

This project includes code from immich-app/static-pages (MIT); see `LICENSE`.
