import { goto } from '$app/navigation';
import { defaultProvider, type ActionItem } from '@immich/ui';
import { SelfHost, Sites, Socials } from '$lib/constants';

const openExternal = (href: string) => () => window.open(href, '_blank', 'noopener');

export const getSiteProvider = () => {
  const actions: ActionItem[] = [
    { title: 'Features', text: '/features', onAction: () => goto('/features') },
    { title: 'Download', text: '/download', onAction: () => goto('/download') },
    { title: 'Roadmap', text: '/roadmap', onAction: () => goto('/roadmap') },
    { title: 'Blog', text: '/blog', onAction: () => goto('/blog') },
    { title: 'Privacy Policy', text: '/privacy-policy', onAction: () => goto('/privacy-policy') },
    { title: 'Terms', text: '/terms', onAction: () => goto('/terms') },
    { title: 'Open the map', text: Sites.App, onAction: openExternal(Sites.App) },
    { title: 'GitHub', text: Socials.Github, onAction: openExternal(Socials.Github) },
    { title: 'Self-hosting', text: SelfHost.Compose, onAction: openExternal(SelfHost.Compose) },
  ];

  return defaultProvider({ name: 'Pages', types: ['page', 'pages', 'site'], actions });
};
