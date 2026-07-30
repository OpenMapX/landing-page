<script lang="ts">
  import { siteMetadata } from '$lib';
  import {
    Card,
    CardBody,
    CardDescription,
    CardHeader,
    CardTitle,
    Heading,
    Icon,
    SiteMetadata,
    Stack,
    Text,
  } from '@immich/ui';
  import {
    mdiAlertOctagonOutline,
    mdiBedOutline,
    mdiBikeFast,
    mdiBusMultiple,
    mdiCompassOutline,
    mdiDirections,
    mdiEvStation,
    mdiFoodForkDrink,
    mdiImageMultipleOutline,
    mdiLayersOutline,
    mdiMagnifyExpand,
    mdiMapMarkerAlertOutline,
    mdiMapMarkerMultipleOutline,
    mdiMapMarkerOutline,
    mdiMapSearchOutline,
    mdiMicrophoneOutline,
    mdiNavigationVariantOutline,
    mdiParking,
    mdiPuzzleOutline,
    mdiServerNetworkOutline,
    mdiShieldLockOutline,
    mdiStarOutline,
    mdiTransitConnectionVariant,
    mdiTranslate,
    mdiWifiOff,
  } from '@mdi/js';

  type Feature = {
    icon: string;
    title: string;
    description: string;
  };

  const features: Feature[] = [
    { title: 'Search & autocomplete', description: 'Find addresses, businesses, stops, airports, categories, coordinates, and saved places across a configurable geocoder chain.', icon: mdiMapSearchOutline },
    { title: 'Voice search', description: 'Speak the same searches you can type when your browser supports the Web Speech API.', icon: mdiMicrophoneOutline },
    { title: 'Natural-language search', description: 'Ask for places in plain language with a local-first parser and optional consent-gated AI assistance.', icon: mdiMagnifyExpand },
    { title: 'Rich place details', description: 'Hours, photos, structured facts, weather, tides, accessibility, contact details, and source credits.', icon: mdiMapMarkerOutline },
    { title: 'Open POI data', description: 'OpenStreetMap places merged with locally ingested Overture Places, keeping stable GERS ids and per-source attribution.', icon: mdiMapMarkerMultipleOutline },
    { title: 'Explore nearby', description: 'Browse what is around you across dozens of categories, filtered by opening hours, travel time, and food facets.', icon: mdiCompassOutline },
    { title: 'Road directions', description: 'Traffic-aware driving and motorcycle routes plus cycling and walking, powered by Valhalla and OSRM.', icon: mdiDirections },
    { title: 'EV route planning', description: 'Choose a real or custom vehicle and plan compatible charge stops with battery, network, availability, time, energy, and price estimates.', icon: mdiEvStation },
    { title: 'Turn-by-turn navigation', description: 'Spoken guidance with lane and speed-limit cues, voice selection, search along the route, and automatic rerouting.', icon: mdiNavigationVariantOutline },
    { title: 'Transit planning', description: 'Real-time multimodal journeys, platforms, alerts, accessibility, occupancy, transfer risk, and route preferences via MOTIS and open feeds.', icon: mdiBusMultiple },
    { title: 'Transit navigation', description: 'Walk and ride guidance with live vehicle progress, boarding departures, stop-by-stop sheets, transfer alternatives, and get-off alarms.', icon: mdiTransitConnectionVariant },
    { title: 'Road conditions', description: 'Official and community incidents, closures, roadworks, delay estimates, live traffic flow, approach alerts, and time-aware avoidance.', icon: mdiAlertOctagonOutline },
    { title: 'Crowd reports', description: 'Pseudonymously report and verify road, transit, micromobility, and accessibility conditions with device-side signatures.', icon: mdiMapMarkerAlertOutline },
    { title: 'Shared mobility', description: 'Live bikes, scooters, and shared cars from GBFS, TOMP, national, regional, and operator feeds.', icon: mdiBikeFast },
    { title: 'Parking & fuel', description: 'Parking occupancy and fuel prices where public feeds exist, with OpenStreetMap fallback coverage.', icon: mdiParking },
    { title: 'Street-level imagery', description: 'Explore open Panoramax imagery in a proxied panoramic viewer; Mapillary remains an operator opt-in.', icon: mdiImageMultipleOutline },
    { title: 'Context-aware layers', description: 'Satellite, terrain, weather, hazards, traffic, transit, recreation, 3D buildings, and overlays that follow the active journey.', icon: mdiLayersOutline },
    { title: 'Reviews', description: 'Open, signed, and portable ratings and reviews via Mangrove.', icon: mdiStarOutline },
    { title: 'Restaurants & delivery', description: 'Open a restaurant menu or hand off to any of 15 delivery platforms with a location-scoped link — no hidden redirects.', icon: mdiFoodForkDrink },
    { title: 'Hotel comparison', description: 'Compare five major booking sites side by side, with an optional live lowest nightly rate via LiteAPI.', icon: mdiBedOutline },
    { title: 'Extensions Store', description: 'Install integrations and companion services together; author your own with the standalone SDK and CLI.', icon: mdiPuzzleOutline },
    { title: 'Offline maps & PWA', description: 'Install OpenMapX, download regions with chosen zoom levels, and optionally retain recently opened places, routes, and searches.', icon: mdiWifiOff },
    { title: 'Multilingual', description: 'Localized interface and map labels in English and German today.', icon: mdiTranslate },
    { title: 'Privacy & open data', description: 'No advertising analytics or profiling; provider API and image requests are normally server-proxied.', icon: mdiShieldLockOutline },
    { title: 'Self-hostable platform', description: 'Run the whole stack with Docker — 23 bundled services and 94 built-in integrations, enabled as you need them.', icon: mdiServerNetworkOutline },
  ];

  const pageMetadata = {
    title: 'Features',
    description: 'OpenMapX puts an entire mapping toolkit on one open-data map.',
  };
</script>

<SiteMetadata site={siteMetadata} page={pageMetadata} />

<Stack gap={8}>
  <Stack>
    <Heading size="title" tag="h1">{pageMetadata.title}</Heading>
    <Text>{pageMetadata.description}</Text>
  </Stack>

  <Stack gap={2}>
    <section class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each features as feature, i (i)}
        <Card color="secondary" class="h-full">
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
          <CardBody class="text-primary flex items-center justify-center align-middle">
            <Icon icon={feature.icon} size="3rem" class="m-5" />
          </CardBody>
        </Card>
      {/each}
    </section>
  </Stack>
</Stack>
