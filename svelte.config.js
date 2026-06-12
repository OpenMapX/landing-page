import { svelteMarkdownPreprocess } from '@immich/svelte-markdown-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const staticFiles = new Set(['/favicon.ico', '/img/social-preview.png']);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    svelteMarkdownPreprocess({
      layouts: {
        default: '$lib/components/BlogPage.svelte',
        LegalPage: '$lib/components/LegalPage.svelte',
      },
    }),
    vitePreprocess(),
  ],
  kit: {
    adapter: adapter(),
    alias: { $common: 'src/common', '$common/*': 'src/common/*' },
    prerender: {
      handleHttpError: ({ path, message }) => {
        if (staticFiles.has(path)) return;
        throw new Error(message);
      },
    },
  },
};

export default config;
