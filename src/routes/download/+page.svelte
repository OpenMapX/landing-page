<script lang="ts">
  import { Button, Heading, Text } from '@immich/ui';
  import { mdiOpenInNew, mdiDownloadBox, mdiServerNetwork } from '@mdi/js';
  import { Sites, SelfHost } from '$lib/constants';

  const options = [
    { icon: mdiOpenInNew, title: 'Use it in your browser', body: 'No install required. Open the app and start mapping.', cta: 'Open the map', href: Sites.App },
    { icon: mdiDownloadBox, title: 'Install the app (PWA)', body: 'Open OpenMapX in your browser and choose "Install" / "Add to Home Screen" for an app-like, offline-capable experience.', cta: 'Open & install', href: Sites.App },
    { icon: mdiServerNetwork, title: 'Self-host', body: 'Run the full stack with Docker Compose and own your data end to end.', cta: 'Self-hosting guide', href: SelfHost.Compose },
  ];
</script>

<section class="py-12">
  <Heading size="title" tag="h1" fontWeight="extra-bold" class="text-center">Get OpenMapX</Heading>
  <div class="mt-10 grid gap-6 lg:grid-cols-3">
    {#each options as o (o.title)}
      <div class="flex flex-col gap-4 rounded-xl border p-6 text-center">
        <Heading size="small" tag="h2">{o.title}</Heading>
        <Text class="text-muted flex-1">{o.body}</Text>
        <Button href={o.href} leadingIcon={o.icon}>{o.cta}</Button>
      </div>
    {/each}
  </div>
</section>
