<script lang="ts">
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import PageContent from '$common/components/PageContent.svelte';
  import { getBlogProvider, posts } from '$lib';
  import Logo from '$lib/components/Logo.svelte';
  import { Sites, Socials } from '$lib/constants';
  import { getSiteProvider } from '$lib/siteCommands';
  import '$lib/app.css';
  import {
    AnnouncementBanner,
    AppShell,
    AppShellHeader,
    AppShellSidebar,
    Button,
    CommandPaletteButton,
    commandPaletteManager,
    CommandPaletteProvider,
    IconButton,
    Link,
    NavbarItem,
    ScreencastOverlay,
    Text,
    ThemeSwitcher,
    TooltipProvider,
  } from '@immich/ui';
  import { mdiChartGantt, mdiDownload, mdiMenu, mdiOpenInNew, mdiPostOutline, mdiStarShootingOutline } from '@mdi/js';
  import { siGithub } from 'simple-icons';
  import { onMount, type Snippet } from 'svelte';
  import { MediaQuery } from 'svelte/reactivity';

  type Props = {
    children?: Snippet;
  };

  const { children }: Props = $props();

  let pathname = '';
  onMount(() => {
    pathname = page.url.pathname;
  });

  beforeNavigate(() => {
    pathname = $state.snapshot(page.url.pathname);
  });

  afterNavigate(() => {
    const newPathname = $state.snapshot(page.url.pathname);
    if (pathname === newPathname) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  });

  const sidebar = new MediaQuery(`max-width: 1023px`);
  let isMobile = $derived(sidebar.current);
  let isOpen = $state(false);
  let open = $derived(isMobile && isOpen);

  beforeNavigate(() => {
    isOpen = false;
  });

  const withActiveColor = (path: string) => {
    const active = path === page.url.pathname || page.url.pathname.startsWith(path);
    return active ? 'primary' : 'secondary';
  };

  commandPaletteManager.enable();

  const featuredPost = posts.find((post) => post.featured);
</script>

<CommandPaletteProvider providers={[getBlogProvider(), getSiteProvider()]} />

<ScreencastOverlay />

<TooltipProvider>
  <AppShell>
    <AppShellHeader>
      <div class="w-full">
        <!-- Featured blog post banner — temporarily disabled while we surface the experimental notice below.
        {#if !page.url.pathname.startsWith('/blog') && featuredPost}
          <AnnouncementBanner until={featuredPost.publishedAt.plus({ week: 1 })}>
            {#snippet content()}
              <div class="flex items-center justify-center gap-1">
                Read our latest post:
                <Text color="primary">
                  <Link href={featuredPost.url}>{featuredPost.title}</Link>
                </Text>
              </div>
            {/snippet}
          </AnnouncementBanner>
        {/if}
        -->
        <AnnouncementBanner color="warning">
          {#snippet content()}
            <div class="text-center">
              OpenMapX is still experimental — both the
              <Link href={Socials.Github}>code</Link>
              and the live deployment at
              <Link href={Sites.App}>openmapx.com</Link>
              are works in progress, so expect rough edges.
            </div>
          {/snippet}
        </AnnouncementBanner>
        <nav class="flex grid-cols-[1fr_auto_1fr] justify-between px-3 py-2 lg:grid lg:gap-2">
          <div class="flex place-items-center gap-2">
            <IconButton
              shape="round"
              color="secondary"
              variant="ghost"
              size="medium"
              aria-label="Main menu"
              icon={mdiMenu}
              onclick={() => (isOpen = !isOpen)}
              class="lg:hidden"
            />
            <a href="/" class="flex items-center gap-2">
              <Logo variant="responsive" />
            </a>
          </div>

          <div class="hidden place-items-center gap-1 lg:flex">
            <Button href="/features" variant="ghost" color={withActiveColor('/features')}>Features</Button>
            <Button href="/download" variant="ghost" color={withActiveColor('/download')}>Download</Button>
            <Button href="/roadmap" variant="ghost" color={withActiveColor('/roadmap')}>Roadmap</Button>
            <Button href="/blog" variant="ghost" color={withActiveColor('/blog')}>Blog</Button>
            <Button
              leadingIcon={siGithub.path}
              trailingIcon={mdiOpenInNew}
              href={Socials.Github}
              color="secondary"
              variant="ghost"
            >
              GitHub
            </Button>
          </div>
          <div class="flex place-items-center justify-end gap-2">
            <div class="hidden lg:flex">
              <Button href={Sites.App} color="primary" size="small" trailingIcon={mdiOpenInNew} class="whitespace-nowrap"
                >Open the map</Button
              >
            </div>
            <CommandPaletteButton />
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </AppShellHeader>

    <AppShellSidebar bind:open>
      <div class="m-4">
        <Button
          href={Sites.App}
          color="primary"
          trailingIcon={mdiOpenInNew}
          class="mb-3 w-full justify-center whitespace-nowrap"
        >
          Open the map
        </Button>
        <NavbarItem title="Features" href="/features" icon={mdiStarShootingOutline} />
        <NavbarItem title="Download" href="/download" icon={mdiDownload} />
        <NavbarItem title="Roadmap" href="/roadmap" icon={mdiChartGantt} />
        <NavbarItem title="Blog" href="/blog" icon={mdiPostOutline} />
        <NavbarItem title="GitHub" href={Socials.Github} icon={siGithub.path} />
      </div>
    </AppShellSidebar>

    <PageContent class="mx-auto w-full max-w-(--breakpoint-lg)">
      {@render children?.()}
    </PageContent>
  </AppShell>
</TooltipProvider>
