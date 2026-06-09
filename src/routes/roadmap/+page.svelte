<script lang="ts">
  import type { TimelineItem } from '$lib';
  import { siteMetadata } from '$lib';
  import Timeline from '$lib/components/Timeline.svelte';
  import { Heading, SiteMetadata, Stack, Text } from '@immich/ui';
  import {
    mdiAirplaneTakeoff,
    mdiBusMultiple,
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
    mdiStarOutline,
    mdiTranslate,
  } from '@mdi/js';

  const onDate = (year: number, month: number) => (language: string) =>
    new Date(year, month - 1, 1).toLocaleDateString(language, { year: 'numeric', month: 'short' });
  const label = (text: string) => () => text;

  // Newest / future first.
  const items: TimelineItem[] = [
    {
      icon: mdiMagnifyExpand,
      title: 'Natural-language search',
      description: 'Ask for places in plain language and let OpenMapX do the rest.',
      done: false,
      getDateLabel: label('Planned'),
    },
    {
      icon: mdiCellphoneArrowDown,
      title: 'Offline & mobile polish',
      description: 'PWA install, offline map packs, and mobile UX refinements.',
      done: false,
      getDateLabel: label('In progress'),
    },
    {
      icon: mdiBusMultiple,
      title: 'Transit route options',
      description: 'Google-Maps-style preferences, fewer-transfers / less-walking, and a Deutschlandticket filter.',
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
      description: 'A unified, Google-Maps-style explore experience.',
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
      description: 'A Google-Maps-like style for self-hosted vector tiles.',
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
