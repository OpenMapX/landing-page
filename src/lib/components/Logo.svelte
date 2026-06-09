<script lang="ts">
  const mark = '/img/mark.png';

  type Props = {
    variant?: 'inline' | 'stacked' | 'mark';
    class?: string;
  };
  let { variant = 'inline', class: className = '' }: Props = $props();
</script>

{#if variant === 'mark'}
  <img src={mark} alt="OpenMapX" class={className} />
{:else if variant === 'stacked'}
  <span class={className}>
    <span class="inline-flex flex-col items-center gap-2">
      <img src={mark} alt="" class="size-16" />
      <span class="text-2xl font-extrabold tracking-tight">OpenMapX</span>
    </span>
  </span>
{:else}
  <span class={className}>
    <span class="inline-flex items-center gap-2">
      <img src={mark} alt="" class="size-8" />
      <span class="text-xl leading-none font-extrabold tracking-tight">OpenMapX</span>
    </span>
  </span>
{/if}
