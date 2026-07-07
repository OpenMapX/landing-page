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
    mdiBikeFast,
    mdiBusMultiple,
    mdiCarOutline,
    mdiCompassOutline,
    mdiDirections,
    mdiEvStation,
    mdiImageMultipleOutline,
    mdiLayersOutline,
    mdiMagnifyExpand,
    mdiMapMarkerOutline,
    mdiMapSearchOutline,
    mdiNavigationVariantOutline,
    mdiParking,
    mdiPuzzleOutline,
    mdiServerNetworkOutline,
    mdiShieldLockOutline,
    mdiStarOutline,
    mdiTranslate,
    mdiWifiOff,
  } from '@mdi/js';

  type Feature = {
    icon: string;
    title: string;
    description: string;
  };

  const features: Feature[] = [
    { title: 'Search & places', description: 'Geocoding and autocomplete across open datasets, without the tracking.', icon: mdiMapSearchOutline },
    { title: 'Place details', description: 'Rich place panels with hours, photos, contact info and more.', icon: mdiMapMarkerOutline },
    { title: 'Overture POI data', description: 'Rich places and POI details enriched with Overture Maps data and GERS links.', icon: mdiMapMarkerOutline },
    { title: 'Public transit', description: 'Real-time, multi-modal routing across thousands of agencies via MOTIS and open GTFS feeds.', icon: mdiBusMultiple },
    { title: 'Directions', description: 'Driving, cycling and walking routes powered by OSRM and Valhalla.', icon: mdiDirections },
    { title: 'Live navigation', description: 'Turn-by-turn guidance with automatic rerouting when you go off-route.', icon: mdiNavigationVariantOutline },
    { title: 'Closure avoidance', description: 'Real-time road closure avoidance and TTS nav notifications.', icon: mdiAlertOctagonOutline },
    { title: 'Extensions Store', description: 'Extend the map via a unified store, prebuilt developer SDK, and custom overlays.', icon: mdiPuzzleOutline },
    { title: 'EV charging', description: 'Live charge-point availability from OpenChargeMap and OpenStreetMap.', icon: mdiEvStation },
    { title: 'Parking', description: 'On- and off-street parking with availability where data exists.', icon: mdiParking },
    { title: 'Bike & scooter sharing', description: 'GBFS micromobility — bikes and scooters — on the map.', icon: mdiBikeFast },
    { title: 'Car sharing', description: 'Shared cars from TOMP and GBFS providers in one place.', icon: mdiCarOutline },
    { title: 'Street-level imagery', description: 'Explore at eye level with open Mapillary imagery.', icon: mdiImageMultipleOutline },
    { title: 'Map layers', description: 'Satellite, terrain, traffic and transit overlays at a click.', icon: mdiLayersOutline },
    { title: 'Explore nearby', description: 'Discover what is around you.', icon: mdiCompassOutline },
    { title: 'Reviews', description: 'Open, signed and portable reviews via Mangrove.', icon: mdiStarOutline },
    { title: 'Offline & PWA', description: 'Install to your device and keep maps working without a connection.', icon: mdiWifiOff },
    { title: 'Multilingual', description: 'Fully localized UI and map labels (English and German today).', icon: mdiTranslate },
    { title: 'Natural-language search', description: 'Ask for places in plain language, compiled directly to Overpass queries.', icon: mdiMagnifyExpand },
    { title: 'Privacy & open data', description: 'No ad tracking, no profiling — built entirely on open data.', icon: mdiShieldLockOutline },
    { title: 'Self-hostable', description: 'Run the whole stack yourself with Docker and own your data.', icon: mdiServerNetworkOutline },
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
