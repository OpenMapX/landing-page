<script lang="ts">
  import { siteMetadata } from '$lib';
  import Logo from '$lib/components/Logo.svelte';
  import { SelfHost, Sites, Socials } from '$lib/constants';
  import { Button, Heading, Icon, Link, SiteMetadata, Text, VStack } from '@immich/ui';
  import { mdiMapSearchOutline, mdiOpenInNew, mdiServerNetworkOutline } from '@mdi/js';
  import { siGithub } from 'simple-icons';

  const supportItems = [
    { href: Socials.Contributing, text: 'Contribute to OpenMapX', icon: siGithub.path },
    { href: SelfHost.Compose, text: 'Self-host with Docker', icon: mdiServerNetworkOutline },
    { href: '/features', text: 'Explore features', icon: mdiMapSearchOutline },
    { href: Socials.Issues, text: 'Report a problem', icon: siGithub.path },
  ];
</script>

<SiteMetadata site={siteMetadata} />

<VStack gap={8} class="mt-4 text-center lg:mt-16">
  <Logo variant="stacked" />

  <Heading size="title" tag="h1" fontWeight="extra-bold">
    Open-source maps <span class="text-primary">you can host yourself</span>
  </Heading>

  <Text size="large">
    Find places, plan a journey, and follow the route with OpenMapX.
    Explore a map built on OpenStreetMap and other open datasets, or run it on your own server.
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

  <hr class="m-2 w-full max-w-(--breakpoint-sm) border-t" />
  <Heading size="title" tag="h2">Find somewhere worth going</Heading>

  <Text size="large">
    Look up an address or a landmark, find a café nearby, or check the next departures from a station.
    Place details bring together opening hours, accessibility, photos, and contact information where sources provide them.
    Save places to your own lists and bring your favorites over from a Google Takeout export.
  </Text>

  <Heading size="large" tag="h2">Plan the trip and follow it</Heading>

  <Text size="large">
    Get driving, cycling, or walking directions, plan EV charging stops, or compare public transport journeys.
    Turn-by-turn guidance helps along the road; transit navigation follows walking legs, departures, and transfers.
    Live information depends on the feeds available for your journey.
  </Text>

  <Heading size="large" tag="h2">See more of the map</Heading>

  <Text size="large">
    Explore terrain and 3D buildings, look around with Panoramax street-level photos, and switch on layers for weather,
    air quality, or road conditions. Coverage varies by source and by the integrations enabled on the server.
  </Text>

  <Button size="large" href="/features" color="secondary">See what OpenMapX can do</Button>

  <hr class="m-8 w-full max-w-(--breakpoint-sm) border-t" />
  <Heading size="title" tag="h2">Choose what runs on your server</Heading>

  <Text size="large">
    Start with the core app, then add the services you need for search, routing, transit, or map tiles.
    Use your own data and engines, connect hosted providers, or combine the two.
    The admin panel and CLI let you configure integrations and manage data updates.
  </Text>

  <Text>
    Self-hosting takes a Linux server, Docker, and some setup. The services and regions you choose determine
    how much memory, storage, and import time you need. Start with the
    <Link href={SelfHost.Requirements}>requirements</Link> and the
    <Link href={SelfHost.Compose}>installation guide</Link>.
  </Text>

  <hr class="m-8 w-full max-w-(--breakpoint-sm) border-t" />
  <Heading size="title" tag="h2">Common questions</Heading>

  <VStack gap={4}>
    <Heading size="large" tag="h3">Do I need an account?</Heading>
    <Text>
      You can browse the map, search, and get directions without signing in.
      An account lets you save and import places, create share links, and prepare offline map areas.
    </Text>

    <Heading size="large" tag="h3">Can I use it offline?</Heading>
    <Text>
      On servers with offline map preparation enabled, you can download supported areas and keep following driving, motorcycle, cycling, or walking directions
      after starting navigation online. New routes, rerouting, search, and live updates need a connection.
      See the <Link href="/download#offline">offline guide</Link> before you set off.
    </Text>

    <Heading size="large" tag="h3">What happens to my data?</Heading>
    <Text>
      OpenMapX has no advertising trackers or third-party analytics. Most provider requests go through the server;
      some map assets and optional services contact external providers. The operator of your chosen instance
      can read account data such as saved places. Read that instance's privacy policy, including the
      <Link href={Sites.AppPrivacy}>policy for openmapx.com</Link>.
    </Text>

    <Heading size="large" tag="h3">Is OpenMapX free?</Heading>
    <Text>
      The software is free and open source. The app uses AGPL-3.0-or-later; selected libraries and the extension SDK
      use Apache-2.0. Hosting, storage, and any paid providers you choose have their own costs.
      The <Link href={Socials.Licensing}>licensing overview</Link> has the details.
    </Text>
  </VStack>

  <hr class="m-8 w-full max-w-(--breakpoint-sm) border-t" />
  <Heading size="title" tag="h2">Help build OpenMapX</Heading>

  <Text size="large">
    OpenMapX is experimental and still has rough edges. Try it in your area and tell us what works and what doesn't.
    Bug reports, documentation fixes, translations, and new integrations all help.
    Follow development on <Link href={Socials.Github}>GitHub</Link> or read the <Link href="/roadmap">roadmap</Link>.
  </Text>

  <div class="grid w-full max-w-(--breakpoint-sm) grid-cols-1 gap-4 md:grid-cols-2">
    {#each supportItems as action, i (i)}
      <Button href={action.href} size="large" variant="outline" color="secondary" leadingIcon={action.icon}>
        {action.text}
      </Button>
    {/each}
  </div>
</VStack>
