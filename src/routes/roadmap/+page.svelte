<script lang="ts">
  import type { TimelineItem } from '$lib';
  import { siteMetadata } from '$lib';
  import Timeline from '$lib/components/Timeline.svelte';
  import { Sites, Socials } from '$lib/constants';
  import { Heading, Link, SiteMetadata, Stack, Text } from '@immich/ui';
  import {
    mdiBusMultiple, mdiCellphoneArrowDown, mdiCompassOutline, mdiEvStation,
    mdiHistory, mdiMapMarkerOutline, mdiMapSearchOutline, mdiNavigationVariantOutline,
    mdiPuzzleOutline, mdiShareVariantOutline, mdiWifiOff,
  } from '@mdi/js';

  const label = (text: string) => () => text;

  const implemented: TimelineItem[] = [
    {
      icon: mdiMapSearchOutline, title: 'Search and everyday journeys',
      description: 'Place search, nearby discovery, road and EV planning, public transport, and turn-by-turn guidance are in the project. Coverage depends on the providers and data enabled on each server.',
      getDateLabel: label('Implemented'),
      link: { href: '/features', text: 'Features' },
    },
    {
      icon: mdiShareVariantOutline, title: 'Saved-place imports and sharing',
      description: 'Import supported saved-place files, keep lists and labels, export individual lists, and share lists or ground journeys through revocable links.',
      getDateLabel: label('Implemented'),
      link: { href: Sites.Docs + '/features/saved-places/', text: 'Guide' },
    },
    {
      icon: mdiMapMarkerOutline, title: 'OpenStreetMap corrections',
      description: 'Review and publish supported changes to existing OpenStreetMap places with your linked OSM account. New places and geometry changes use OpenStreetMap tools.',
      getDateLabel: label('Implemented'),
      link: { href: Sites.Docs + '/features/osm-contributions/', text: 'Guide' },
    },
    {
      icon: mdiHistory, title: 'Optional personal timeline',
      description: 'View day history from a connected external or operator-managed Dawarich account. Location collection and editing stay in Dawarich.',
      getDateLabel: label('Implemented'),
      link: { href: Sites.Docs + '/features/personal-timeline/', text: 'Guide' },
    },
    {
      icon: mdiWifiOff, title: 'Offline maps and existing-route guidance',
      description: 'Download supported map areas and continue driving, motorcycle, cycling, or walking navigation started online. This does not provide new offline routing, rerouting, search, or live updates.',
      getDateLabel: label('Implemented'),
      link: { href: '/download#offline', text: 'Limits and setup' },
    },
    {
      icon: mdiPuzzleOutline, title: 'Self-hosting and extensions',
      description: 'Configure services and integrations, prepare data, inspect coverage and freshness, and install extension bundles through the admin panel and CLI.',
      getDateLabel: label('Implemented'),
      link: { href: Sites.Docs, text: 'Documentation' },
    },
  ];

  const development: TimelineItem[] = [
    {
      icon: mdiCellphoneArrowDown, title: 'Native iOS and Android apps',
      description: 'Native shell and release tooling are in development. Store distribution and real-device release validation are separate work; use the installable web app in the meantime.',
      done: false, getDateLabel: label('In development'),
      link: { href: '/download', text: 'Use the web app' },
    },
    {
      icon: mdiNavigationVariantOutline, title: 'Mobile usability',
      description: 'Keep improving planning, navigation, and settings on small screens as people use the app and report problems.',
      done: false, getDateLabel: label('Ongoing'),
      link: { href: Socials.Issues, text: 'Report feedback' },
    },
  ];

  const ideas: TimelineItem[] = [
    {
      icon: mdiWifiOff, title: 'Offline trip packs and place search',
      description: 'Bundle a trip with destination details and map coverage, add a local place index, and support queued contributions when connectivity returns.',
      done: false, getDateLabel: label('Idea'),
    },
    {
      icon: mdiEvStation, title: 'EV planning around your stops',
      description: 'Account for meals, overnight stays, and other planned stops when choosing charging stops across a journey.',
      done: false, getDateLabel: label('Idea'),
    },
    {
      icon: mdiHistory, title: 'Recent activity and contribution status',
      description: 'Build on local recent searches with a view of recent places and journeys and the status of submitted reports.',
      done: false, getDateLabel: label('Idea'),
    },
    {
      icon: mdiCompassOutline, title: 'Commute planning',
      description: 'Show useful journey options and current travel times for Home and Work when opening the app.',
      done: false, getDateLabel: label('Idea'),
    },
    {
      icon: mdiBusMultiple, title: 'Community transit tracking',
      description: 'Rider-contributed live transit data needs further upstream and privacy clarification before it can be considered for implementation. This capability is not available.',
      done: false, getDateLabel: label('Needs research'),
    },
    {
      icon: mdiMapMarkerOutline, title: 'Restaurant reservations',
      description: 'Add links from restaurant details to supported table-reservation services.',
      done: false, getDateLabel: label('Idea'),
    },
  ];

  const pageMetadata = {
    title: 'Roadmap',
    description: 'What OpenMapX supports, what is in development, and ideas for future work.',
  };
</script>

<SiteMetadata site={siteMetadata} page={pageMetadata} />

<Stack gap={8}>
  <Stack>
    <Heading size="title" tag="h1">{pageMetadata.title}</Heading>
    <Text>{pageMetadata.description}</Text>
    <Text>
      OpenMapX is experimental. Implementation does not mean every feature is enabled on the public instance
      or tested on every device. Priorities can change, and there are no release dates promised here.
      Follow the <Link href={Socials.Github}>source repository</Link> for current development.
    </Text>
  </Stack>

  <section>
    <Heading size="large" tag="h2">In the project today</Heading>
    <Text class="mb-4">The <Link href="/features">feature guide</Link> describes capabilities, coverage, and dependencies.</Text>
    <Timeline items={implemented} />
  </section>

  <section>
    <Heading size="large" tag="h2" class="mb-4">In development</Heading>
    <Timeline items={development} />
  </section>

  <section>
    <Heading size="large" tag="h2">Ideas for later</Heading>
    <Text class="mb-4">These are possible directions, with no fixed scope, order, or delivery commitment.</Text>
    <Timeline items={ideas} />
  </section>

  <Text>
    Have a problem to solve or a feature to propose? <Link href={Socials.Issues}>Open an issue</Link>
    with the place, journey, or workflow involved. If you want to help build it, read the
    <Link href={Socials.Contributing}>contribution guide</Link>.
  </Text>
</Stack>
