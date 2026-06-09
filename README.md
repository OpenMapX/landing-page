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

The site is statically prerendered (`adapter-static`) and packaged as a small nginx image.
Build it on the host where you deploy — legal/operator details are baked in at build time
from a `.env` file (see `.env.example`):

    cp .env.example .env        # then fill in the PUBLIC_LEGAL_* values
    docker build -t openmapx-landing .

Serve the resulting image behind your reverse proxy (e.g. Traefik) at openmapx.org. The
legal values are fixed at build time, so rebuild the image to change them. See the
`Dockerfile` and `nginx.conf`.

## Brand

Primary color is the `--immich-ui-primary-*` scale in `src/common/theme/theme.css`
(currently a #43A047 Material-green palette; the `500` step is the exact brand color).
Typeface is Google Sans Flex (OFL, `@fontsource-variable/google-sans-flex`). Logo:
`src/lib/components/Logo.svelte`. Replace the placeholder screenshots in
`static/img/screenshot-{light,dark}.webp` with real captures.

## License

This project includes code from immich-app/static-pages (MIT); see `LICENSE`.
