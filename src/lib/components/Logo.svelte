<script lang="ts">
  const mark = '/img/mark.png';

  type Props = {
    variant?: 'inline' | 'responsive' | 'stacked' | 'mark';
    class?: string;
  };
  let { variant = 'inline', class: className = '' }: Props = $props();
</script>

{#if variant === 'mark'}
  <img src={mark} alt="OpenMapX" class={className} />
{:else if variant === 'stacked'}
  <span class="inline-flex flex-col items-center gap-2 {className}">
    <img src={mark} alt="" class="size-16" />
    <span class="text-2xl font-extrabold tracking-tight">OpenMapX</span>
  </span>
{:else if variant === 'responsive'}
  <!-- One element that never toggles its own display, so it can't fight a sibling's
       visibility class. The mark is always shown; only the wordmark hides below `sm`.
       Below `sm` the mark carries the accessible name, so the wordmark is decorative. -->
  <span class="inline-flex items-center gap-2 {className}">
    <img src={mark} alt="OpenMapX" class="size-8" />
    <span
      aria-hidden="true"
      class="hidden text-xl leading-none font-extrabold tracking-tight translate-y-[1px] sm:inline">OpenMapX</span>
  </span>
{:else}
  <!-- Single flex element so callers' visibility class doesn't wrap the layout in
       a block whose (inherited) line-height de-centers the icon+wordmark. Pass a
       flex-compatible visibility class, e.g. `hidden sm:inline-flex`. -->
  <span class="inline-flex items-center gap-2 {className}">
    <img src={mark} alt="" class="size-8" />
    <!-- tiny optical nudge so the wordmark's visual mass centers on the icon
         (the 'p' descenders skew pure box-centering); verified empirically -->
    <span class="text-xl leading-none font-extrabold tracking-tight translate-y-[1px]">OpenMapX</span>
  </span>
{/if}
