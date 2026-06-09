<script lang="ts">
  import { siteMetadata } from '$lib';
  import Logo from '$lib/components/Logo.svelte';
  import { SelfHost, Sites, Socials } from '$lib/constants';
  import { Button, Heading, Icon, Link, SiteMetadata, Text, VStack } from '@immich/ui';
  import { mdiMapSearchOutline, mdiOpenInNew, mdiServerNetworkOutline } from '@mdi/js';
  import { siGithub } from 'simple-icons';

  const supportItems = [
    { href: Socials.Github, text: 'Star on GitHub', icon: siGithub.path },
    { href: SelfHost.Compose, text: 'Self-host with Docker', icon: mdiServerNetworkOutline },
    { href: '/features', text: 'Explore features', icon: mdiMapSearchOutline },
    { href: '/blog', text: 'Read the blog', icon: mdiOpenInNew },
  ];
</script>

<SiteMetadata site={siteMetadata} />

<VStack gap={8} class="mt-4 text-center lg:mt-16">
  <Logo variant="stacked" />

  <Heading size="title" tag="h1" fontWeight="extra-bold">
    Open-data maps —<br class="hidden lg:block" />
    <span class="text-primary">a Google Maps alternative</span>
  </Heading>

  <Text size="large">
    OpenMapX brings search, directions, public transit, and street view together on one fast,<br
      class="hidden lg:block"
    />
    privacy-respecting map — built entirely on open data, self-hostable, ad-free, and yours.
  </Text>

  <div class="flex flex-col gap-4">
    <div class="flex flex-col justify-center gap-4 sm:flex-row">
      <Button size="large" href={Sites.App} leadingIcon={mdiMapSearchOutline}>Open the map</Button>
      <Button size="large" href={Socials.Github} color="secondary">
        <span>View on GitHub</span>
        <Icon icon={mdiOpenInNew} />
      </Button>
    </div>
    <div class="flex justify-center">
      <Button href={SelfHost.Compose} size="large" variant="ghost" leadingIcon={mdiServerNetworkOutline}>
        Self-host it
      </Button>
    </div>
  </div>

  <div class="relative w-full max-w-4xl">
    <div class="bg-primary/10 absolute inset-x-8 top-10 -z-10 h-3/4 rounded-full blur-3xl"></div>
    <picture>
      <source srcset="/img/screenshot-dark.webp" media="(prefers-color-scheme: dark)" />
      <img src="/img/screenshot-light.webp" alt="OpenMapX map" class="rounded-xl border shadow-xl" />
    </picture>
  </div>

  <hr class="m-2 w-full max-w-(--breakpoint-sm) border-t" />
  <Heading size="title" tag="h2">Everything on one map</Heading>

  <Text size="large">
    Search and places, public transit, turn-by-turn directions, shared mobility, and street-level imagery —
    without the tracking.
  </Text>

  <Button size="large" href="/features" color="secondary">Explore all features</Button>

  <hr class="m-8 w-full max-w-(--breakpoint-sm) border-t" />
  <Heading size="title" tag="h2">Free and open source</Heading>

  <Text size="large">
    OpenMapX is open source and built on open data. Star it on <Link href={Socials.Github}>GitHub</Link>,
    <Link href={SelfHost.Compose}>self-host</Link> it on your own server, or follow along on the
    <Link href="/blog">blog</Link>.
  </Text>

  <div class="grid w-full max-w-(--breakpoint-sm) grid-cols-1 gap-4 md:grid-cols-2">
    {#each supportItems as action, i (i)}
      <Button href={action.href} size="large" variant="outline" color="secondary" leadingIcon={action.icon}>
        {action.text}
      </Button>
    {/each}
  </div>
</VStack>
