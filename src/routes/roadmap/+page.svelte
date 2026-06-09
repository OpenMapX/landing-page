<script lang="ts">
  import { Heading, Text } from '@immich/ui';

  const milestones = [
    { status: 'Shipped', title: 'Map, search & places', body: 'MapLibre rendering, geocoding, place details.' },
    { status: 'Shipped', title: 'Directions & live navigation', body: 'Driving/cycling/walking with rerouting.' },
    { status: 'Shipped', title: 'Public transit', body: 'MOTIS + open GTFS, real-time, multi-modal.' },
    { status: 'Shipped', title: 'Mobility & layers', body: 'EV, parking, shared mobility, traffic, street view.' },
    { status: 'In progress', title: 'Offline & mobile', body: 'PWA install, offline maps, mobile polish.' },
    { status: 'Planned', title: 'Natural-language search', body: 'Ask for places in plain language.' },
  ];
</script>

<section class="py-12">
  <Heading size="title" tag="h1" fontWeight="extra-bold" class="text-center">Roadmap</Heading>
  <ol class="mx-auto mt-10 flex max-w-2xl flex-col gap-6">
    {#each milestones as m (m.title)}
      <li class="rounded-xl border p-6">
        <span class="text-primary text-sm font-bold uppercase">{m.status}</span>
        <Heading size="small" tag="h2" class="mt-1">{m.title}</Heading>
        <Text class="text-muted mt-1">{m.body}</Text>
      </li>
    {/each}
  </ol>
</section>
