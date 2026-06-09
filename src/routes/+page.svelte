<script lang="ts">
  import { Button, Heading, SiteMetadata, Text } from '@immich/ui';
  import { mdiMapSearchOutline, mdiOpenInNew } from '@mdi/js';
  import { siGithub } from 'simple-icons';
  import { siteMetadata } from '$lib';
  import { Sites, Socials } from '$lib/constants';
  import Logo from '$lib/components/Logo.svelte';

  const features = [
    { title: 'Search & places', body: 'Geocoding, autocomplete, rich place details — without the tracking.' },
    { title: 'Public transit', body: 'Real-time routing across thousands of agencies, powered by open data and MOTIS.' },
    { title: 'Driving, cycling & walking', body: 'Turn-by-turn directions with live navigation and rerouting.' },
    { title: 'Mobility', body: 'EV charging, parking, bike-, car- and scooter-sharing on one map.' },
    { title: 'Street-level imagery', body: 'Explore at eye level with open Mapillary imagery.' },
    { title: 'Offline & installable', body: 'Install as a PWA and keep your maps when you go offline.' },
  ];
</script>

<SiteMetadata site={siteMetadata} />

<section class="flex flex-col items-center gap-8 py-12 text-center lg:py-20">
  <Logo variant="stacked" />

  <Heading size="title" tag="h1" fontWeight="extra-bold">
    Open-data maps —<br class="hidden lg:block" />
    <span class="text-primary">a Google Maps alternative</span>
  </Heading>

  <Text size="large" class="max-w-2xl">
    OpenMapX brings search, directions, transit, and street view together on one fast, privacy-respecting map
    built entirely on open data — self-hostable, ad-free, and yours.
  </Text>

  <div class="flex flex-col justify-center gap-4 sm:flex-row">
    <Button size="large" href={Sites.App} leadingIcon={mdiMapSearchOutline}>Open the map</Button>
    <Button size="large" color="secondary" href={Socials.Github} leadingIcon={siGithub.path} trailingIcon={mdiOpenInNew}>
      View on GitHub
    </Button>
  </div>

  <picture class="mt-6 w-full max-w-4xl">
    <source srcset="/img/screenshot-dark.webp" media="(prefers-color-scheme: dark)" />
    <img src="/img/screenshot-light.webp" alt="OpenMapX map preview" class="rounded-xl border shadow-xl" />
  </picture>
</section>

<section class="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
  {#each features as f (f.title)}
    <div class="rounded-xl border p-6">
      <Heading size="small" tag="h3">{f.title}</Heading>
      <Text class="text-muted mt-2">{f.body}</Text>
    </div>
  {/each}
</section>
