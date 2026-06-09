import { goto } from '$app/navigation';
import { defaultProvider, type ActionItem } from '@immich/ui';
import { SelfHost, Sites, Socials } from '$lib/constants';

const openExternal = (href: string) => () => window.open(href, '_blank', 'noopener');

export const getSiteProvider = () => {
  const actions: ActionItem[] = [
    { title: 'Features', extraText: '/features', onAction: () => goto('/features') },
    { title: 'Download', extraText: '/download', onAction: () => goto('/download') },
    { title: 'Roadmap', extraText: '/roadmap', onAction: () => goto('/roadmap') },
    { title: 'Blog', extraText: '/blog', onAction: () => goto('/blog') },
    { title: 'Privacy Policy', extraText: '/privacy-policy', onAction: () => goto('/privacy-policy') },
    { title: 'Terms', extraText: '/terms', onAction: () => goto('/terms') },
    { title: 'Open the map', extraText: Sites.App, onAction: openExternal(Sites.App) },
    { title: 'GitHub', extraText: Socials.Github, onAction: openExternal(Socials.Github) },
    { title: 'Self-hosting', extraText: SelfHost.Compose, onAction: openExternal(SelfHost.Compose) },
  ];

  return defaultProvider({ name: 'Pages', types: ['page', 'pages', 'site'], actions });
};
