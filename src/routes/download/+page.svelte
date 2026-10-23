<script lang="ts">
  import { siteMetadata } from '$lib';
  import { SelfHost, Sites, Socials } from '$lib/constants';
  import {
    Button,
    Card,
    CardDescription,
    CardTitle,
    Heading,
    Icon,
    Link,
    SiteMetadata,
    Text,
  } from '@immich/ui';
  import {
    mdiBookOpenPageVariantOutline,
    mdiCellphoneArrowDown,
    mdiDocker,
    mdiGithub,
    mdiOpenInNew,
  } from '@mdi/js';

  const pageMetadata = {
    title: 'Use OpenMapX',
    description: 'Open the map in your browser, install the web app, or set up your own OpenMapX server.',
  };
</script>

<SiteMetadata site={siteMetadata} page={pageMetadata} />

<Heading size="title" class="mb-4" tag="h1">{pageMetadata.title}</Heading>

<div class="mb-4">
  <Heading size="large" tag="h2">Use the app</Heading>
  <Text color="muted">
    Open the map to browse places and plan journeys without an account. Sign in to save and import places,
    create share links, or prepare offline map areas on servers that support them.
    OpenMapX is experimental; features and data coverage vary between servers.
  </Text>
</div>

<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
  <Card color="secondary">
    <div class="flex flex-col p-4 pb-0">
      <CardTitle tag="h3">In your browser</CardTitle>
      <CardDescription>Open the map and start exploring straight away.</CardDescription>
    </div>
    <div class="immich-scrollbar h-full w-full overflow-auto p-4 text-primary flex items-center justify-center align-middle">
      <Icon icon={mdiOpenInNew} size="4rem" class="m-4" />
    </div>
    <div class="flex items-center border-t p-4">
      <Button fullWidth href={Sites.App} trailingIcon={mdiOpenInNew}>Open the map</Button>
    </div>
  </Card>

  <Card color="secondary">
    <div class="flex flex-col p-4 pb-0">
      <CardTitle tag="h3">Install the web app (PWA)</CardTitle>
      <CardDescription>
        Add OpenMapX to your home screen from a supported browser. Installation uses the same web app;
        it does not add an offline routing engine or guarantee background navigation.
      </CardDescription>
    </div>
    <div class="immich-scrollbar h-full w-full overflow-auto p-4 text-primary flex items-center justify-center align-middle">
      <Icon icon={mdiCellphoneArrowDown} size="4rem" class="m-4" />
    </div>
    <div class="flex items-center border-t p-4">
      <Button fullWidth href={Sites.App} trailingIcon={mdiOpenInNew}>Open the web app</Button>
    </div>
  </Card>
</div>

<section class="mb-8">
  <Heading size="large" tag="h2">Install from your browser</Heading>
  <Text>
    Open the map, then look for Install app in your browser's menu or address bar. On iPhone or iPad,
    use Safari's Share menu and choose Add to Home Screen. The wording and available options depend on your browser.
    Allow location access when you want to use your position for navigation.
  </Text>
  <Text>
    Native iOS and Android apps are in development. This site currently offers the web app;
    see the <Link href="/roadmap">roadmap</Link> for the mobile work.
  </Text>
</section>

<section id="offline" class="mb-8 scroll-mt-40">
  <Heading size="large" tag="h2">Before you go offline</Heading>
  <Text>
    OpenMapX is online first. To use downloaded maps, your server must provide offline map preparation and
    have map data for the area. Sign in, open Settings, choose Offline maps, and download the area and zoom levels
    you need. Wait for the download to finish and check the area on your device before leaving your connection.
  </Text>
  <Text>
    Plan your driving, motorcycle, cycling, or walking route and start navigation while online. Offline guidance can
    continue that active session, including spoken directions, but cannot plan a new route or reroute if you leave it.
    Ending navigation removes the saved session. If you reopen the app, restoring a session asks for confirmation;
    snapshots expire after 24 hours. Search, live traffic, live transit, and network-backed layers need a connection.
  </Text>
  <Text>
    Downloaded maps cover only the selected areas and zoom levels, and browser storage can be cleared or run out.
    Read the <Link href={Sites.Docs + '/features/offline-maps/'}>offline maps and navigation guide</Link>
    for coverage and storage details.
  </Text>
</section>

<div class="mb-4">
  <Heading size="large" tag="h2">Host your own instance</Heading>
  <Text color="muted">
    OpenMapX runs on a Linux server with Docker Compose. Start with the core application and choose the services
    you need. Self-hosted search, routing, transit, and tiles require their own datasets and preparation;
    hosted providers can reduce that work, but send requests outside your server.
  </Text>
  <Text>
    Check the <Link href={SelfHost.Requirements}>software and hardware requirements</Link> first.
    The core app and a full regional or worldwide provider stack have very different memory and storage needs.
    Follow the installation guide to configure the server, enable services, prepare data, and start the generated stack.
  </Text>
</div>

<section class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <Card color="secondary" class="h-full">
    <div class="flex flex-col p-4 pb-0">
      <CardTitle tag="h3">Docker Compose</CardTitle>
      <CardDescription>Follow the CLI setup guide to configure and generate your Docker Compose deployment.</CardDescription>
    </div>
    <div class="immich-scrollbar h-full w-full overflow-auto p-4 flex items-center justify-center align-middle">
      <Icon icon={mdiDocker} size="6rem" color="#0db7ed" />
    </div>
    <div class="flex items-center border-t p-4">
      <Button fullWidth href={SelfHost.Compose}>View instructions</Button>
    </div>
  </Card>

  <Card color="secondary" class="h-full">
    <div class="flex flex-col p-4 pb-0">
      <CardTitle tag="h3">Source code</CardTitle>
      <CardDescription>Read the app, service, and integration code, or contribute a fix on GitHub.</CardDescription>
    </div>
    <div class="immich-scrollbar h-full w-full overflow-auto p-4 text-primary flex items-center justify-center align-middle">
      <Icon icon={mdiGithub} size="6rem" />
    </div>
    <div class="flex items-center border-t p-4">
      <Button fullWidth href={Socials.Github}>View on GitHub</Button>
    </div>
  </Card>

  <Card color="secondary" class="h-full">
    <div class="flex flex-col p-4 pb-0">
      <CardTitle tag="h3">Documentation</CardTitle>
      <CardDescription>Choose providers, prepare regional data, and learn how to operate and update your instance.</CardDescription>
    </div>
    <div class="immich-scrollbar h-full w-full overflow-auto p-4 text-primary flex items-center justify-center align-middle">
      <Icon icon={mdiBookOpenPageVariantOutline} size="6rem" />
    </div>
    <div class="flex items-center border-t p-4">
      <Button fullWidth href={Sites.Docs}>Read the docs</Button>
    </div>
  </Card>
</section>

<section class="mt-8">
  <Heading size="large" tag="h2">Choose your data sources</Heading>
  <Text>
    Hosting OpenMapX does not automatically make every data source local. The default setup can use public or hosted
    services. Review enabled integrations and their source disclosures, then choose local providers where you need them.
    Public endpoints can impose quotas, and some providers need credentials or a paid account.
  </Text>
  <Text>
    The <Link href={SelfHost.Data}>data preparation guide</Link> explains regional imports and updates.
    Source coverage determines which places, timetables, imagery, and live conditions your instance can show.
  </Text>
</section>
