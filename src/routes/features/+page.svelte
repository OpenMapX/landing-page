<script lang="ts">
  import { siteMetadata } from '$lib';
  import { Sites } from '$lib/constants';
  import {
    Button, Card, CardDescription, CardTitle,
    Heading, Icon, Link, SiteMetadata, Stack, Text,
  } from '@immich/ui';
  import {
    mdiAirFilter, mdiAirplaneTakeoff, mdiAlertOctagonOutline, mdiBedOutline,
    mdiBikeFast, mdiBusMultiple, mdiCarClock, mdiCarKey, mdiChartBoxOutline,
    mdiCompassOutline, mdiDirections, mdiEvStation, mdiHistory,
    mdiImageMultipleOutline, mdiLayersOutline, mdiLeaf, mdiMagnifyExpand,
    mdiMapMarkerAlertOutline, mdiMapMarkerMultipleOutline, mdiMapMarkerOutline,
    mdiMapSearchOutline, mdiMicrophoneOutline, mdiNavigationVariantOutline,
    mdiParking, mdiPuzzleOutline, mdiServerNetworkOutline, mdiShareVariantOutline,
    mdiShieldLockOutline, mdiSubwayVariant, mdiTransitConnectionVariant,
    mdiTranslate, mdiWifiOff,
  } from '@mdi/js';

  type Feature = { icon: string; title: string; description: string };
  type FeatureGroup = {
    id: string;
    title: string;
    guide: string;
    guideLabel: string;
    features: Feature[];
  };

  const groups: FeatureGroup[] = [
    {
      id: 'find-places', title: 'Find a place',
      guide: '/features/search/', guideLabel: 'Search guide',
      features: [
        { title: 'Search by name, address, or code', description: "Look up a business, landmark, station, airport code, or coordinates. Suggestions combine name matches with distance and prominence. Additional search data prepared by the operator can improve coverage of landmarks and local place names.", icon: mdiMapSearchOutline },
        { title: 'Explore nearby', description: "Find places by category and narrow the results by opening hours, food preferences, or travel time. Photos, distances, and available ratings help you choose where to go.", icon: mdiCompassOutline },
        { title: 'Search in your own words', description: "Try a query such as \"vegan café with wifi open now.\" Searches go to your OpenMapX server. It can use built-in parsing or optional local or cloud AI. Cloud access follows the instance's privacy settings and asks for consent by default.", icon: mdiMagnifyExpand },
        { title: 'Speak your search', description: "Use the microphone in browsers that support speech recognition. Your browser may send audio to its speech service.", icon: mdiMicrophoneOutline },
        { title: 'Place details and recent searches', description: "Check hours, accessibility, contact details, and photos where available. Reopen recent searches saved on this device, clear them, or turn search history off.", icon: mdiHistory },
      ],
    },
    {
      id: 'plan-journeys', title: 'Plan a journey',
      guide: '/features/directions/', guideLabel: 'Directions guide',
      features: [
        { title: 'Road, cycling, and walking routes', description: "Get driving, motorcycle, cycling, or walking directions, with alternatives and elevation information where the routing engine supports them. Add intermediate stops and choose route preferences, including cycling profiles where supported.", icon: mdiDirections },
        { title: 'EV charging stops', description: "Choose a vehicle or enter its battery details. Plan charging stops around compatible connectors and battery targets, with estimates for charging time, energy, and cost. Live availability depends on station data.", icon: mdiEvStation },
        { title: 'Journey costs and emissions', description: "Compare estimated energy use, costs, and carbon emissions. Adjust vehicle, occupancy, and energy-price assumptions and check the stated sources and coverage.", icon: mdiLeaf },
        { title: 'Public transport', description: "Compare journeys with walking connections, transfer preferences, and accessibility options. Departures, platforms, delays, cancellations, and occupancy appear where the configured transit providers supply them.", icon: mdiBusMultiple },
        { title: 'Places within reach', description: "See an estimated public transport travel-time area and find places inside it. Self-hosted MOTIS powers this optional feature; operators can also enable export of sampled travel-time boundaries.", icon: mdiChartBoxOutline },
        { title: 'Shared bikes, scooters, and cars', description: "Find nearby shared vehicles and stations, with availability from supported operator feeds. Coverage depends on the operators and regions connected to the server.", icon: mdiBikeFast },
      ],
    },
    {
      id: 'navigation', title: 'Follow the route',
      guide: '/features/offline-maps/', guideLabel: 'Offline maps and navigation guide',
      features: [
        { title: 'Turn-by-turn guidance', description: "Follow spoken directions, lane and speed-limit cues, and motorway junction diagrams where route data supports them. Search along the route and reroute when connected. Panoramax approach photos add context where available.", icon: mdiNavigationVariantOutline },
        { title: 'Transit navigation', description: "Follow walking, waiting, riding, and transfer steps. Check upcoming stops and connection alternatives, with live updates when available. Get-off alarms and background notifications depend on browser permissions and support.", icon: mdiTransitConnectionVariant },
        { title: 'Parking and the last walk', description: "Find parking near your destination, save your parked position, and continue on foot. Keep personal vehicle details and get walking directions back to the car.", icon: mdiCarKey },
        { title: 'Downloaded maps and offline guidance', description: "Download supported map areas on servers with offline preparation enabled. Keep following a driving, motorcycle, cycling, or walking route after starting navigation online, with saved directions and voice guidance. New routes, rerouting, search, and live updates need a connection.", icon: mdiWifiOff },
      ],
    },
    {
      id: 'map-context', title: 'Explore the map',
      guide: '/features/map-layers/', guideLabel: 'Map layers guide',
      features: [
        { title: 'Terrain, satellite, and 3D views', description: "Switch map layers to explore terrain relief, contours, satellite imagery, and 3D buildings. Available layers and geographic detail depend on the server configuration and source coverage.", icon: mdiLayersOutline },
        { title: 'Street-level photos', description: "Look around with open Panoramax imagery in a panoramic viewer. Operators can also enable Mapillary; its coverage and terms are separate.", icon: mdiImageMultipleOutline },
        { title: 'Traffic and road conditions', description: "See traffic flow where feeds provide it, along with incidents, closures, roadworks, and restrictions from official and community sources. Routing applies supported effects only when current data can be matched to the road network; a visible report does not always change your route.", icon: mdiAlertOctagonOutline },
        { title: 'Weather and hazards', description: "Check local weather and turn on available forecast, radar, or hazard layers. Source credits identify the providers behind the information.", icon: mdiLayersOutline },
        { title: 'Air quality', description: "Explore air-quality maps, ground-monitor readings, and forecasts. Regional indices and pollutant layers depend on the sources enabled for your area.", icon: mdiAirFilter },
        { title: 'Transit on the map', description: "See available live vehicles and transit lines. Optional schematic diagrams show commuter rail, metro, and tram networks in geographic or simplified layouts.", icon: mdiSubwayVariant },
        { title: 'Parking and fuel', description: "Check parking occupancy and fuel prices where your server's connected providers publish them.", icon: mdiParking },
      ],
    },
    {
      id: 'your-places', title: 'Keep places and contribute',
      guide: '/features/saved-places/', guideLabel: 'Saved places and sharing guide',
      features: [
        { title: 'Open place data', description: "Explore places from OpenStreetMap, with optional Overture Places imports to fill gaps. Source credits identify the datasets behind a result.", icon: mdiMapMarkerMultipleOutline },
        { title: 'Your lists and labels', description: "Sign in to save places to custom lists, add notes, and label Home and Work. Your saved places follow your account across devices.", icon: mdiMapMarkerMultipleOutline },
        { title: 'Bring your saved places', description: "Import Google Takeout saved places, KML or KMZ bookmarks, GPX waypoints, GeoJSON points, or coordinate CSV files. Review matches before saving. Export individual lists as GPX, GeoJSON, or KML.", icon: mdiMapMarkerOutline },
        { title: 'Share lists and ground journeys', description: "Share a list as a live link or snapshot, with optional expiry. Route links preserve a snapshot. Both can be revoked, and anyone with the link can open them without an account.", icon: mdiShareVariantOutline },
        { title: 'Correct OpenStreetMap', description: "Where enabled by your host, link your OpenStreetMap account to correct supported details on existing places, such as hours, names, and wheelchair access. Review changes before publishing. Contributions are public; adding or moving places uses OpenStreetMap tools.", icon: mdiMapMarkerOutline },
        { title: 'Reviews and community reports', description: "Publish signed place reviews through Mangrove. Where an operator has connected an OpenConditions contributions service, report and verify road conditions without an OpenMapX account. Contributions are shared with the relevant service.", icon: mdiMapMarkerAlertOutline },
        { title: 'Your Dawarich timeline', description: "Connect an external or operator-managed Dawarich account to view visits and journeys by day. This optional feature reads location history from Dawarich; OpenMapX does not record your movements through it.", icon: mdiHistory },
      ],
    },
    {
      id: 'travel-services', title: 'Connect to travel services',
      guide: '/features/places/', guideLabel: 'Place details and travel services guide',
      features: [
        { title: 'Ride-hailing and on-demand transport', description: "Check on-demand services that publish availability and fare estimates, or continue in a ride service's app or website to book. Trip details are filled in only where the service supports them.", icon: mdiCarClock },
        { title: 'Flight searches', description: "Find nearby airports, preview the flight path, and open an external flight-search site with the route filled in. The preview is not a flight schedule, fare quote, or booking.", icon: mdiAirplaneTakeoff },
        { title: 'Hotels, menus, and delivery', description: "Open hotel-comparison sites, a restaurant menu, or a delivery service from a place. An optional hotel provider adds live rate estimates. External services have their own accounts, prices, and privacy policies.", icon: mdiBedOutline },
      ],
    },
    {
      id: 'your-server', title: 'Run it your way',
      guide: '/administration/integrations-administration/', guideLabel: 'Integrations guide',
      features: [
        { title: 'Modular self-hosting', description: "Run the app with Docker and add the search, routing, transit, and tile services you need. Use local engines, hosted endpoints, or both. Larger regions need more storage, memory, and time to prepare.", icon: mdiServerNetworkOutline },
        { title: 'Extensions and custom data', description: "Install integration configurations and companion services through the Extensions Store. Third-party browser code is restricted, and tools for creating extensions are being tested for their first public release. Operators choose which extensions to enable.", icon: mdiPuzzleOutline },
        { title: 'Operator tools', description: "Manage services and integrations, inspect regional coverage and data freshness, and follow import jobs in the admin panel. The CLI supports setup, data preparation, and backups.", icon: mdiChartBoxOutline },
        { title: 'Account data controls', description: "Request access to or an export of your personal data, follow the request status, and request account deletion. Saved account data is readable by the instance operator; it is not end-to-end encrypted.", icon: mdiShieldLockOutline },
        { title: 'English and German', description: "Use the interface in English or German and choose localized map labels where the data provides them. The web app supports light and dark themes and installation from supported browsers.", icon: mdiTranslate },
      ],
    },
  ];

  const pageMetadata = {
    title: 'Features',
    description: 'Find places, plan journeys, follow directions, and run your own mapping services with OpenMapX.',
  };
</script>

<SiteMetadata site={siteMetadata} page={pageMetadata} />

<Stack gap={8}>
  <Stack>
    <Heading size="title" tag="h1">{pageMetadata.title}</Heading>
    <Text>{pageMetadata.description}</Text>
    <Text>
      OpenMapX is experimental. These are capabilities in the project; each server chooses its integrations and data.
      Live information, accessibility details, and geographic coverage vary by source. The public instance may not
      enable every feature.
    </Text>
  </Stack>

  <nav aria-label="Feature sections" class="flex flex-wrap gap-4">
    {#each groups as group (group.id)}
      <Link href={'#' + group.id}>{group.title}</Link>
    {/each}
  </nav>

  {#each groups as group (group.id)}
    <section id={group.id} class="scroll-mt-40">
      <Stack gap={4}>
        <Heading size="large" tag="h2">{group.title}</Heading>
        <div class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {#each group.features as feature (feature.title)}
            <Card color="secondary" class="h-full">
              <div class="flex flex-col p-4 pb-0">
                <CardTitle tag="h3">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </div>
              <div class="immich-scrollbar h-full w-full overflow-auto p-4 text-primary flex items-center justify-center align-middle">
                <Icon icon={feature.icon} size="3rem" class="m-5" />
              </div>
            </Card>
          {/each}
        </div>
        <Link href={Sites.Docs + group.guide}>{group.guideLabel}</Link>
      </Stack>
    </section>
  {/each}

  <Stack>
    <Heading size="large" tag="h2">Choose where to start</Heading>
    <Text>Try the public map, install the web app, or read the self-hosting requirements.</Text>
    <Button href="/download">Use OpenMapX</Button>
  </Stack>
</Stack>
