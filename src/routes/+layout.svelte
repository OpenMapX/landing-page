<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import Header from '$common/components/Header.svelte';
  import { navItems } from '$lib/nav';
  import { siteMetadata } from '$lib';
  import { Link, SiteMetadata, Text, TooltipProvider } from '@immich/ui';
  import { Sites, Socials } from '$lib/constants';
  import Logo from '$lib/components/Logo.svelte';
  import '$lib/app.css';
  import type { Snippet } from 'svelte';

  let { children }: { children?: Snippet } = $props();

  afterNavigate(() => window.scrollTo({ top: 0, behavior: 'auto' }));
</script>

<SiteMetadata site={siteMetadata} />

<TooltipProvider>
<div class="mx-auto flex min-h-screen w-full max-w-(--breakpoint-xl) flex-col px-4">
  <header class="sticky top-0 z-50 backdrop-blur">
    <Header items={navItems} />
  </header>

  <main class="flex-1">
    {@render children?.()}
  </main>

  <footer class="mt-16 flex flex-col items-center gap-4 border-t py-10">
    <Logo variant="inline" />
    <div class="flex flex-wrap justify-center gap-4">
      <Link href="/features">Features</Link>
      <Link href="/download">Download</Link>
      <Link href="/roadmap">Roadmap</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/privacy-policy">Privacy</Link>
      <!-- terms link added in blog/legal unit -->
      <Link href={Socials.Github}>GitHub</Link>
      <Link href={Sites.App}>Open the app</Link>
    </div>
    <Text size="small" class="text-muted">© OpenMapX · Open-data maps</Text>
  </footer>
</div>
</TooltipProvider>
