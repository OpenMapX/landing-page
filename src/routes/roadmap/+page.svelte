<script lang="ts">
  import type { TimelineItem } from '$lib';
  import { siteMetadata } from '$lib';
  import Timeline from '$lib/components/Timeline.svelte';
  import { Heading, SiteMetadata, Stack, Text } from '@immich/ui';
  import {
    mdiAirplaneTakeoff,
    mdiAlertOctagonOutline,
    mdiBedOutline,
    mdiBusMultiple,
    mdiCarOutline,
    mdiCellphoneArrowDown,
    mdiCompassOutline,
    mdiDirections,
    mdiEvStation,
    mdiHistory,
    mdiImageMultipleOutline,
    mdiLayersOutline,
    mdiMagnifyExpand,
    mdiMap,
    mdiMapMarkerOutline,
    mdiMapSearchOutline,
    mdiNavigationVariantOutline,
    mdiPalette,
    mdiPuzzleOutline,
    mdiShareVariantOutline,
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
      icon: mdiCellphoneArrowDown,
      title: 'Mobile UX polish',
      description: 'Continue refining compact-screen planning, navigation, and settings flows.',
      done: false,
      getDateLabel: label('In progress'),
    },
    {
      icon: mdiShareVariantOutline,
      title: 'Shareable saved lists',
      description: 'Share a saved-place list through a revocable read-only link that anyone can save their own copy of.',
      done: false,
      getDateLabel: label('Planned'),
    },
    {
      icon: mdiWifiOff,
      title: 'Offline trip packs',
      description: 'Pin a planned route, guidance, waypoints, destination details, and corridor map tiles for dependable offline journeys.',
      done: false,
      getDateLabel: label('Planned'),
    },
    {
      icon: mdiHistory,
      title: 'Recent activity & contributions',
      description: 'Revisit recent places, searches, routes, and journeys, and track the status of community reports in one place.',
      done: false,
      getDateLabel: label('Planned'),
    },
    {
      icon: mdiEvStation,
      title: 'Multi-stop EV planning',
      description: 'Plan charge stops around the stops you already need — meals, hotels, pickups — while tracking state of charge across the whole journey.',
      done: false,
      getDateLabel: label('Planned'),
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
      icon: mdiImageMultipleOutline,
      title: 'Panoramax street-level imagery',
      description: 'Panoramax becomes the primary imagery provider, served through a proxied panoramic viewer; Mapillary stays an operator opt-in.',
      getDateLabel: onDate(2026, 7),
    },
    {
      icon: mdiEvStation,
      title: 'EV route & charge planning',
      description: 'Vehicle-aware charge stops, state-of-charge targets, connectors, network preferences, availability, energy, time, and price estimates.',
      getDateLabel: onDate(2026, 7),
    },
    {
      icon: mdiBusMultiple,
      title: 'Live transit navigation',
      description: 'Walk and ride guidance, live vehicle progress, boarding departures, transfer risk and alternatives, service alerts, and get-off alarms.',
      getDateLabel: onDate(2026, 7),
    },
    {
      icon: mdiAlertOctagonOutline,
      title: 'Crowd reports & live traffic',
      description: 'Privacy-preserving community reports with approach voting, plus a live traffic-flow overlay and delay-aware ETAs.',
      getDateLabel: onDate(2026, 7),
    },
    {
      icon: mdiPuzzleOutline,
      title: 'Extensions & custom overlays',
      description: 'Extend the map with a unified extensions store, prebuilt developer SDK, standalone CLI, and custom overlay support.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiAlertOctagonOutline,
      title: 'Road conditions',
      description: 'Official closures, roadworks, and incidents on the map, with time-aware avoidance while routing.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiMagnifyExpand,
      title: 'Voice & natural-language search',
      description: 'Browser voice input plus local-first structured place search with optional consent-gated AI providers.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiMapMarkerOutline,
      title: 'Overture POI data',
      description: 'Locally ingested Overture Places merged with OpenStreetMap, keeping stable GERS ids and per-source attribution.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiBusMultiple,
      title: 'Transit route options',
      description: 'Preferences, fewer-transfers / less-walking, and a Deutschlandticket filter.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiMapSearchOutline,
      title: 'Search along route',
      description: 'Find charging stations, restaurants, and other stops along the active navigation path and add them without losing the route.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiNavigationVariantOutline,
      title: 'Live navigation',
      description: 'Turn-by-turn guidance with speed-adaptive voice prompts and automatic rerouting.',
      getDateLabel: onDate(2026, 6),
    },
    {
      icon: mdiWifiOff,
      title: 'Offline maps',
      description: 'Download regions and zoom levels for offline vector maps, with background progress and optional recent place, route, and search caching.',
      getDateLabel: onDate(2026, 5),
    },
    {
      icon: mdiBedOutline,
      title: 'Hotels, menus & delivery',
      description: 'Compare booking sites with optional live rates, open restaurant menus, and hand off to delivery platforms.',
      getDateLabel: onDate(2026, 5),
    },
    {
      icon: mdiAirplaneTakeoff,
      title: 'Flights in directions',
      description: 'Nearest-airport prefill, an on-map great-circle preview, and privacy-explicit deep links to external flight search.',
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
      description: 'A polished OpenMapX style for self-hosted OpenMapTiles-compatible vector data.',
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
      description: 'Driving, motorcycle, cycling and walking directions (OSRM / Valhalla).',
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
