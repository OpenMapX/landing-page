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
(currently a #207E23 green palette; the `500` step is the exact brand color, and
steps 50/500/600 are kept in sync with the web app's brand tokens).
Typeface is Google Sans Flex (OFL, `@fontsource-variable/google-sans-flex`). Logo:
`src/lib/components/Logo.svelte`. The existing `static/img/screenshot-*.webp`
files are logo placeholders, not application screenshots, and are not displayed
on the homepage. Use real, source-credited product captures for future imagery.

## Content maintenance

Keep claims about implemented code separate from public releases, regional
availability, and runtime acceptance. The product repository, rather than this
site's older roadmap, is the authority for feature status. Update `static/sitemap.xml` when
adding or removing pages and blog posts; `robots.txt` points crawlers to it.

Before deploying, fill in and verify the operator details in `.env`. The log
retention value only publishes a period in the notice; it does not configure
log deletion. Confirm hosting arrangements, retention enforcement, and any
required legal disclosures against the actual deployment. This repository
cannot establish those facts.

## License

This project includes code from immich-app/static-pages (MIT); see `LICENSE`.
