<script lang="ts">
  import type { TimelineItem } from '$lib';
  import { siteMetadata } from '$lib';
  import Timeline from '$lib/components/Timeline.svelte';
  import { Heading, SiteMetadata, Stack, Text } from '@immich/ui';
  import {
    mdiAirplaneTakeoff,
    mdiAlertOctagonOutline,
    mdiBusMultiple,
    mdiCarOutline,
    mdiCellphoneArrowDown,
    mdiCompassOutline,
    mdiDirections,
    mdiEvStation,
    mdiImageMultipleOutline,
    mdiLayersOutline,
    mdiMagnifyExpand,
    mdiMap,
    mdiMapMarkerOutline,
    mdiMapSearchOutline,
    mdiNavigationVariantOutline,
    mdiPalette,
    mdiPuzzleOutline,
    mdiStarOutline,
    mdiTranslate,
    mdiWifiOff,
  } from '@mdi/js';

  const onDate = (year: number, month: number) => (language: string) =>
    new Date(year, month - 1, 1).toLocaleDateString(language, { year: 'numeric', month: 'short' });
  const label = (text: string) => () => text;

  // Newest / future first.
  const items: TimelineItem[] = [
    {
      icon: mdiMapSearchOutline,
      title: 'Search along route',
      description: 'Find charging stations, restaurants, and other stops directly along your active navigation path.',
      done: false,
      getDateLabel: label('In progress'),
    },
    {
      icon: mdiCellphoneArrowDown,
      title: 'Offline & mobile polish',
      description: 'PWA install, offline map packs, and mobile UX refinements.',
      done: false,
      getDateLabel: label('In progress'),
    },
    {
      icon: mdiWifiOff,
      title: 'Offline POI search & outbox',
      description: 'Download areas with a local POI index and queue edits offline to replay when connected.',
      done: false,
      getDateLabel: label('Planned'),
    },
    {
      icon: mdiCarOutline,
      title: 'Commute dashboard & live ETAs',
      description: 'Get automatic live ETAs and traffic updates for home and work destinations directly on app load.',
      done: false,
      getDateLabel: label('Planned'),
    },
    {
      icon: mdiBusMultiple,
      title: 'Crowd-sourced transit tracking',
      description: 'Stream rider GPS data to synthesize live delays (GTFS-RT) on transit lines with no official feeds.',
      done: false,
      getDateLabel: label('Planned'),
    },
    {
      icon: mdiStarOutline,
      title: 'Table reservations & deep links',
      description: 'Deep-link integration for restaurant reservations and table bookings with privacy-first affiliate support.',
      done: false,
      getDateLabel: label('Planned'),
    },
    {
      icon: mdiPuzzleOutline,
      title: 'Extensions & custom overlays',
      description: 'Extend the map with a unified extensions store, prebuilt developer SDK, standalone CLI, and custom overlay support.',
      getDateLabel: onDate(2026, 7),
    },
    {
      icon: mdiBusMultiple,
      title: 'Transit route options',
      description: 'Preferences, fewer-transfers / less-walking, and a Deutschlandticket filter.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiNavigationVariantOutline,
      title: 'Live navigation',
      description: 'Turn-by-turn guidance with automatic rerouting.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiAirplaneTakeoff,
      title: 'Flights in directions',
      description: 'Great-circle routes with nearest-airport prefill.',
      getDateLabel: onDate(2026, 5),
    },
    {
      icon: mdiCompassOutline,
      title: 'Explore & nearby',
      description: 'A unified explore experience.',
      getDateLabel: onDate(2026, 5),
    },
    {
      icon: mdiBusMultiple,
      title: 'MOTIS-first transit',
      description: 'Real-time, multi-modal public transit on open GTFS feeds.',
      getDateLabel: onDate(2026, 5),
    },
    {
      icon: mdiStarOutline,
      title: 'Reviews',
      description: 'Open, signed and portable reviews via Mangrove.',
      getDateLabel: onDate(2026, 4),
    },
    {
      icon: mdiPalette,
      title: 'Custom map style',
      description: 'A maps style you are used to for self-hosted vector tiles.',
      getDateLabel: onDate(2026, 3),
    },
    {
      icon: mdiTranslate,
      title: 'Internationalization',
      description: 'Fully localized UI and map labels (English and German).',
      getDateLabel: onDate(2026, 3),
    },
    {
      icon: mdiEvStation,
      title: 'Mobility data sources',
      description: 'EV charging, parking, and bike-, car- and scooter-sharing.',
      getDateLabel: onDate(2026, 3),
    },
    {
      icon: mdiImageMultipleOutline,
      title: 'Street-level imagery',
      description: 'Explore at eye level with open Mapillary imagery.',
      getDateLabel: onDate(2026, 2),
    },
    {
      icon: mdiLayersOutline,
      title: 'Map layers',
      description: 'Satellite, terrain, traffic, and transit overlays.',
      getDateLabel: onDate(2026, 1),
    },
    {
      icon: mdiDirections,
      title: 'Routing',
      description: 'Driving, cycling and walking directions (OSRM / Valhalla).',
      getDateLabel: onDate(2026, 1),
    },
    {
      icon: mdiMapMarkerOutline,
      title: 'Place details',
      description: 'Rich place panels with hours, photos and info.',
      getDateLabel: onDate(2025, 12),
    },
    {
      icon: mdiMapSearchOutline,
      title: 'Search & geocoding',
      description: 'Autocomplete and geocoding across open datasets.',
      getDateLabel: onDate(2025, 12),
    },
    {
      icon: mdiMap,
      title: 'Map rendering',
      description: 'Fast vector maps with MapLibre GL.',
      getDateLabel: onDate(2025, 11),
    },
  ];

  const pageMetadata = {
    title: 'Roadmap',
    description: "What we've shipped, what's in progress, and what's coming next for OpenMapX.",
  };
</script>

<SiteMetadata site={siteMetadata} page={pageMetadata} />

<Stack gap={8}>
  <Stack>
    <Heading size="title" tag="h1">{pageMetadata.title}</Heading>
    <Text>{pageMetadata.description}</Text>
  </Stack>

  <Timeline {items} />
</Stack>
