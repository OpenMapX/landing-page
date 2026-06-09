<script lang="ts">
  import { siteMetadata } from '$lib';
  import { SelfHost, Sites, Socials } from '$lib/constants';
  import {
    Button,
    Card,
    CardBody,
    CardDescription,
    CardFooter,
    CardHeader,
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
    description: 'Use OpenMapX in your browser, install it as an app, or self-host the whole stack.',
  };
</script>

<SiteMetadata site={siteMetadata} page={pageMetadata} />

<Heading size="title" class="mb-4" tag="h1">{pageMetadata.title}</Heading>

<div class="mb-4">
  <Heading size="large" tag="h2">Use the app</Heading>
  <Text color="muted">
    No account needed — open OpenMapX in any modern browser, or install it for an app-like, offline-capable
    experience.
  </Text>
</div>

<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
  <Card color="secondary">
    <CardHeader>
      <CardTitle>In your browser</CardTitle>
      <CardDescription>Open the map and start exploring straight away.</CardDescription>
    </CardHeader>
    <CardBody class="text-primary flex items-center justify-center align-middle">
      <Icon icon={mdiOpenInNew} size="4rem" class="m-4" />
    </CardBody>
    <CardFooter>
      <Button fullWidth href={Sites.App} trailingIcon={mdiOpenInNew}>Open the map</Button>
    </CardFooter>
  </Card>

  <Card color="secondary">
    <CardHeader>
      <CardTitle>Install (PWA)</CardTitle>
      <CardDescription>Add OpenMapX to your home screen for offline-capable maps.</CardDescription>
    </CardHeader>
    <CardBody class="text-primary flex items-center justify-center align-middle">
      <Icon icon={mdiCellphoneArrowDown} size="4rem" class="m-4" />
    </CardBody>
    <CardFooter>
      <Button fullWidth href={Sites.App} trailingIcon={mdiOpenInNew}>Open &amp; install</Button>
    </CardFooter>
  </Card>
</div>

<div class="mb-4">
  <Heading size="large" tag="h2">Self-host</Heading>
  <Text color="muted">Run the entire OpenMapX stack yourself with Docker and own your data end to end.</Text>
</div>

<section class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <Card color="secondary" class="h-full">
    <CardHeader>
      <CardTitle>Docker Compose</CardTitle>
      <CardDescription>Run OpenMapX with <Link href="https://www.docker.com/">Docker</Link></CardDescription>
    </CardHeader>
    <CardBody class="flex items-center justify-center align-middle">
      <Icon icon={mdiDocker} size="6rem" color="#0db7ed" />
    </CardBody>
    <CardFooter>
      <Button fullWidth href={SelfHost.Compose}>View instructions</Button>
    </CardFooter>
  </Card>

  <Card color="secondary" class="h-full">
    <CardHeader>
      <CardTitle>Source code</CardTitle>
      <CardDescription>Browse the project on <Link href={Socials.Github}>GitHub</Link></CardDescription>
    </CardHeader>
    <CardBody class="text-primary flex items-center justify-center align-middle">
      <Icon icon={mdiGithub} size="6rem" />
    </CardBody>
    <CardFooter>
      <Button fullWidth href={Socials.Github}>View on GitHub</Button>
    </CardFooter>
  </Card>

  <Card color="secondary" class="h-full">
    <CardHeader>
      <CardTitle>Documentation</CardTitle>
      <CardDescription>Read the setup and configuration guide</CardDescription>
    </CardHeader>
    <CardBody class="text-primary flex items-center justify-center align-middle">
      <Icon icon={mdiBookOpenPageVariantOutline} size="6rem" />
    </CardBody>
    <CardFooter>
      <Button fullWidth href={Sites.Docs}>Read the docs</Button>
    </CardFooter>
  </Card>
</section>
