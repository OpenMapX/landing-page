import type { BlogType } from '$lib';

// TEMP: asQueryString removed from @immich/ui 0.80; inline until rebrand rewrites this file
const asQueryString = (params?: Record<string, unknown>) => {
  if (!params) return '';
  const entries = Object.entries(params).filter(([, v]) => v !== undefined && v !== null);
  if (entries.length === 0) return '';
  return '?' + new URLSearchParams(entries.map(([k, v]) => [k, String(v)])).toString();
};

export const Routes = {
  blog: (options?: { type?: BlogType }) => `/blog` + asQueryString(options),
};
