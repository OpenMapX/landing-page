<script lang="ts">
  import { SelfHost, Sites, Socials } from '$lib/constants';
  import { Heading, HStack, IconButton, Link, Stack, Text } from '@immich/ui';
  import { siGithub, siRss } from 'simple-icons';

  const columns = [
    {
      heading: 'Product',
      links: [
        { href: '/features', text: 'Features' },
        { href: '/download', text: 'Download' },
        { href: '/roadmap', text: 'Roadmap' },
        { href: '/blog', text: 'Blog' },
      ],
    },
    {
      heading: 'Project',
      links: [
        { href: Socials.Github, text: 'GitHub' },
        { href: SelfHost.Compose, text: 'Self-hosting' },
        { href: Sites.Docs, text: 'Documentation' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { href: '/privacy-policy', text: 'Privacy Policy' },
        { href: '/terms', text: 'Terms' },
        { href: '/imprint', text: 'Legal Notice' },
      ],
    },
    {
      heading: 'Use OpenMapX',
      links: [{ href: Sites.App, text: 'Open the map' }],
    },
  ];
</script>

<div class="dark:bg-subtle mt-16 rounded-t-md bg-gray-50 p-8 lg:p-4 lg:py-8">
  <div class="mx-auto max-w-(--breakpoint-lg)">
    <Stack gap={8}>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {#each columns as column (column.heading)}
          <Stack>
            <Heading size="small" class="mb-2">{column.heading}</Heading>
            {#each column.links as link (link.text)}
              <Link
                href={link.href}
                underline={false}
                class="text-dark/90 hover:text-primary transition-colors"
              >
                <Text>{link.text}</Text>
              </Link>
            {/each}
          </Stack>
        {/each}
      </div>

      <hr />

      <div class="flex flex-col gap-3">
        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <HStack gap={1}>
            <Link href="/" underline={false} class="flex items-center gap-2">
              <img src="/img/mark.png" alt="" class="size-6" />
              <Text fontWeight="bold">OpenMapX</Text>
            </Link>
          </HStack>

          <HStack gap={1}>
            <IconButton
              href={Socials.Github}
              icon={siGithub}
              aria-label="GitHub"
              variant="ghost"
              color="secondary"
              size="small"
            />
            <IconButton
              href="/blog/feed.xml"
              icon={siRss}
              aria-label="RSS feed"
              variant="ghost"
              color="secondary"
              size="small"
            />
          </HStack>

          <Text size="small" class="text-muted">© 2026 OpenMapX · Open-data maps</Text>
        </div>

        <Text size="small" class="text-muted text-center">
          Website design gratefully adapted from <Link
            href="https://github.com/immich-app/static-pages"
            target="_blank"
            rel="noopener noreferrer">Immich</Link
          > (MIT).
        </Text>
      </div>
    </Stack>
  </div>
</div>
