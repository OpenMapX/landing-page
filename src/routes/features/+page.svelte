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
    mdiAirFilter,
    mdiAirplaneTakeoff,
    mdiAlertOctagonOutline,
    mdiBedOutline,
    mdiBikeFast,
    mdiBusMultiple,
    mdiCarClock,
    mdiCarKey,
    mdiChartBoxOutline,
    mdiCompassOutline,
    mdiDirections,
    mdiEvStation,
    mdiFoodForkDrink,
    mdiHistory,
    mdiImageMultipleOutline,
    mdiLayersOutline,
    mdiLeaf,
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
    mdiShareVariantOutline,
    mdiShieldLockOutline,
    mdiStarOutline,
    mdiSubwayVariant,
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
    { title: 'Search & autocomplete', description: 'Find addresses, businesses, stops, airports, categories, coordinates, and saved places, with suggestions ranked by name match, distance, and prominence. An optional open-data landmark index also handles misspelled famous names.', icon: mdiMapSearchOutline },
    { title: 'Recent searches', description: 'Revisit your last searches on this device, clear them at any time, or switch search history off.', icon: mdiHistory },
    { title: 'Voice search', description: 'Speak the same searches you can type when your browser supports the Web Speech API.', icon: mdiMicrophoneOutline },
    { title: 'Natural-language search', description: 'Ask for places in plain language with a local-first parser and optional consent-gated AI assistance.', icon: mdiMagnifyExpand },
    { title: 'Rich place details', description: 'Visit essentials first: opening hours, accessibility, contact details, photos, and source credits, with weather and local conditions grouped together. On desktop, hover over map POIs for a quick preview.', icon: mdiMapMarkerOutline },
    { title: 'Open POI data', description: 'OpenStreetMap places merged with locally ingested Overture Places, keeping stable GERS ids and per-source attribution.', icon: mdiMapMarkerMultipleOutline },
    { title: 'Explore nearby', description: 'Browse nearby categories with opening-hours, travel-time, and food filters; compare photos, ratings, and distances, and choose how results are ordered.', icon: mdiCompassOutline },
    { title: 'Road directions', description: 'Driving, motorcycle, cycling, and walking routes via Valhalla and OSRM, with on-map alternatives, arrival times, and ascent where supported. Traffic-aware routing depends on current verified data.', icon: mdiDirections },
    { title: 'Route costs & emissions', description: 'Compare estimated energy use, journey costs, and carbon emissions with adjustable vehicle, occupancy, and energy-price assumptions, plus visible sources and coverage limits.', icon: mdiLeaf },
    { title: 'EV route planning', description: 'Choose a real or custom vehicle and plan compatible charge stops with battery, network, availability, time, energy, and price estimates.', icon: mdiEvStation },
    { title: 'Turn-by-turn navigation', description: 'Spoken guidance, lane and speed-limit cues, search along the route, automatic rerouting, and motorway junction diagrams, with Panoramax approach photos where available.', icon: mdiNavigationVariantOutline },
    { title: 'Arrival & walking handoff', description: 'Find nearby parking at the end of a drive, save your parked position, and continue on foot to your destination.', icon: mdiCarKey },
    { title: 'Transit planning', description: 'Real-time multimodal journeys, platforms, alerts, accessibility, occupancy, transfer risk, and route preferences via MOTIS and open feeds.', icon: mdiBusMultiple },
    { title: 'Transit navigation', description: 'Walk and ride guidance with live vehicle progress, boarding departures, stop-by-stop sheets, transfer alternatives, and get-off alarms.', icon: mdiTransitConnectionVariant },
    { title: 'Schematic transit maps', description: 'Metro-style octilinear, geographic, and radial diagram overlays for commuter rail, metro, and tram networks rendered from OSM by LOOM.', icon: mdiSubwayVariant },
    { title: 'Ride-hailing & on-demand transit', description: 'Compare wait times and fares across open GOFS on-demand feeds, or hand off to ride-hailing services like Uber, Lyft, Bolt, and FREENOW.', icon: mdiCarClock },
    { title: 'Flights in directions', description: 'Automatic nearest-airport resolution, on-map great-circle route previews, and privacy-first pre-filled deep links to major flight search engines.', icon: mdiAirplaneTakeoff },
    { title: 'Road conditions', description: 'Official and community incidents, closures, roadworks, and restrictions, with validity windows and approach alerts. Routing applies closures and mandatory speed limits only where current data is verified against the road network; coverage varies.', icon: mdiAlertOctagonOutline },
    { title: 'Crowd reports', description: 'Pseudonymously report and verify road, transit, micromobility, and accessibility conditions with device-side signatures.', icon: mdiMapMarkerAlertOutline },
    { title: 'Shared mobility', description: 'Live bikes, scooters, and shared cars from GBFS, TOMP, national, regional, and operator feeds.', icon: mdiBikeFast },
    { title: 'Parking & fuel', description: 'Parking occupancy and fuel prices where public feeds exist, with OpenStreetMap fallback coverage.', icon: mdiParking },
    { title: 'Vehicles & parking', description: 'Manage personal vehicles with custom EV battery specs, save your parked spot with a single tap, and get walking directions back.', icon: mdiCarKey },
    { title: 'Saved places & sharing', description: 'Organize custom lists and labeled places (Home and Work), export to GPX, GeoJSON, or KML, and publish revocable live or snapshot share links.', icon: mdiShareVariantOutline },
    { title: 'Air quality evidence', description: 'Regional standards (US EPA, EEA, UK DAQI, NAQI, HJ 633, AQHI), ground monitors, 48-hour forecasts, and dedicated raw pollutant map layers.', icon: mdiAirFilter },
    { title: 'Street-level imagery', description: 'Explore open Panoramax imagery in a proxied panoramic viewer; Mapillary remains an operator opt-in.', icon: mdiImageMultipleOutline },
    { title: 'Terrain & 3D maps', description: 'Explore elevation relief, contours, and terrain, then tilt into close-up 3D buildings. Richer map labels highlight landmarks, parks, transit stops, and local POIs.', icon: mdiLayersOutline },
    { title: 'Context-aware layers', description: 'Satellite, terrain, weather, hazards, traffic, transit, recreation, 3D buildings, air quality, and overlays that follow the active journey.', icon: mdiLayersOutline },
    { title: 'Reviews', description: 'Open, signed, and portable ratings and reviews via Mangrove.', icon: mdiStarOutline },
    { title: 'Restaurants & delivery', description: 'Open a restaurant menu or hand off to delivery platforms with a location-scoped link — no hidden redirects.', icon: mdiFoodForkDrink },
    { title: 'Hotel comparison', description: 'Compare major booking sites side by side, with an optional live lowest nightly rate via LiteAPI.', icon: mdiBedOutline },
    { title: 'Extensions Store', description: 'Install integrations and companion services together; author your own with the standalone SDK and CLI.', icon: mdiPuzzleOutline },
    { title: 'Offline maps & PWA', description: 'Install OpenMapX, download PMTiles vector packages with chosen zoom levels, and continue planned ground routes offline.', icon: mdiWifiOff },
    { title: 'Multilingual', description: 'Localized interface and map labels in English and German today.', icon: mdiTranslate },
    { title: 'Privacy & open data', description: 'No advertising analytics or profiling; provider API and image requests are normally server-proxied.', icon: mdiShieldLockOutline },
    { title: 'Account data controls', description: 'Request access to or a portable export of your personal data, follow request progress, and request account deletion.', icon: mdiShieldLockOutline },
    { title: 'Coverage & freshness dashboard', description: 'Operators can inspect regional data capabilities, source freshness, and routing readiness, and run data jobs with live progress in the admin console.', icon: mdiChartBoxOutline },
    { title: 'Self-hostable platform', description: 'Run the whole stack with Docker — bundled services and built-in integrations, rendered on demand and enabled as you need them.', icon: mdiServerNetworkOutline },
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
