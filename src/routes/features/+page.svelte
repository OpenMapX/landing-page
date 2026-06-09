<script lang="ts">
  import { Heading, Icon, SiteMetadata, Text } from '@immich/ui';
  import {
    mdiMapSearchOutline, mdiBusMultiple, mdiCarOutline, mdiEvStation,
    mdiParking, mdiBikeFast, mdiImageMultipleOutline, mdiWifiOff, mdiTranslate, mdiShieldLockOutline,
  } from '@mdi/js';
  import { siteMetadata } from '$lib';

  const features = [
    { icon: mdiMapSearchOutline, title: 'Search & places', body: 'Geocoding and autocomplete across open datasets, with rich place panels, hours, photos and reviews.' },
    { icon: mdiBusMultiple, title: 'Public transit', body: 'Real-time, multi-modal routing across thousands of agencies via MOTIS and open GTFS feeds.' },
    { icon: mdiCarOutline, title: 'Directions & live nav', body: 'Driving, cycling and walking routes with turn-by-turn navigation and automatic rerouting.' },
    { icon: mdiEvStation, title: 'EV charging', body: 'Live charge-point availability from OpenChargeMap and OpenStreetMap.' },
    { icon: mdiParking, title: 'Parking', body: 'On- and off-street parking with availability where data exists.' },
    { icon: mdiBikeFast, title: 'Shared mobility', body: 'Bike-, car- and scooter-sharing from GBFS and TOMP providers on one map.' },
    { icon: mdiImageMultipleOutline, title: 'Street-level imagery', body: 'Explore at eye level with open Mapillary imagery.' },
    { icon: mdiWifiOff, title: 'Offline & PWA', body: 'Install to your device and keep maps working without a connection.' },
    { icon: mdiTranslate, title: 'Multilingual', body: 'Fully localized UI and map labels (English and German today).' },
    { icon: mdiShieldLockOutline, title: 'Privacy & open data', body: 'No ad tracking. Built on open data and self-hostable end to end.' },
  ];
</script>

<SiteMetadata
  site={siteMetadata}
  page={{ title: 'Features', description: 'Search, transit, directions, mobility, street view and more — on one open-data map.' }}
/>

<section class="py-12">
  <Heading size="title" tag="h1" fontWeight="extra-bold" class="text-center">Everything on one map</Heading>
  <div class="mt-10 grid gap-6 sm:grid-cols-2">
    {#each features as f (f.title)}
      <div class="flex gap-4 rounded-xl border p-6">
        <Icon icon={f.icon} class="text-primary size-8 shrink-0" />
        <div>
          <Heading size="small" tag="h2">{f.title}</Heading>
          <Text class="text-muted mt-1">{f.body}</Text>
        </div>
      </div>
    {/each}
  </div>
</section>
