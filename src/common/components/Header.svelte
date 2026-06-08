<script lang="ts">
  import { page } from '$app/state';
  import type { HeaderItem } from '$common/types';
  import Logo from '$lib/components/Logo.svelte';
  import { Button, HStack, isExternalLink, ThemeSwitcher } from '@immich/ui';
  import { mdiOpenInNew } from '@mdi/js';

  type Props = {
    items?: HeaderItem[];
  };

  const isActive = (path: string, options?: { prefix?: boolean }) =>
    path === page.url.pathname || (options?.prefix && page.url.pathname.startsWith(path));

  let { items = [] }: Props = $props();
</script>

<nav class="flex w-full items-center justify-between p-2 md:gap-2">
  <div class="flex place-items-center gap-2">
    <a href="/" class="flex gap-2 text-4xl">
      <Logo variant="inline" class="hidden sm:block" />
      <Logo variant="mark" class="sm:hidden" />
    </a>
  </div>

  <HStack gap={1}>
    {#each items as item (item.href)}
      <Button
        class={item.show === 'always' ? '' : 'hidden md:flex'}
        href={item.href}
        shape="round"
        variant={item.variant ?? 'ghost'}
        leadingIcon={(item.icon as { path?: string })?.path ?? (item.icon as string)}
        trailingIcon={isExternalLink(item.href) ? mdiOpenInNew : undefined}
        color={item.color ?? (isActive(item.href) ? 'primary' : 'secondary')}>{item.title}</Button
      >
    {/each}
    <ThemeSwitcher />
  </HStack>
</nav>
