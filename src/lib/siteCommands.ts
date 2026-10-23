import { goto } from '$app/navigation';
import { defaultProvider, type ActionItem } from '@immich/ui';
import { SelfHost, Sites, Socials } from '$lib/constants';

const openExternal = (href: string) => () => window.open(href, '_blank', 'noopener');

export const getSiteProvider = () => {
  const actions: ActionItem[] = [
    { title: 'Features', text: '/features', onAction: () => goto('/features') },
    { title: 'Use OpenMapX', text: '/download', onAction: () => goto('/download') },
    { title: 'Roadmap', text: '/roadmap', onAction: () => goto('/roadmap') },
    { title: 'Blog', text: '/blog', onAction: () => goto('/blog') },
    { title: 'Website privacy policy', text: '/privacy-policy', onAction: () => goto('/privacy-policy') },
    { title: 'Website terms', text: '/terms', onAction: () => goto('/terms') },
    { title: 'Open the map', text: Sites.App, onAction: openExternal(Sites.App) },
    { title: 'Documentation', text: Sites.Docs, onAction: openExternal(Sites.Docs) },
    { title: 'GitHub', text: Socials.Github, onAction: openExternal(Socials.Github) },
    { title: 'Contributing', text: Socials.Contributing, onAction: openExternal(Socials.Contributing) },
    { title: 'Report a problem', text: Socials.Issues, onAction: openExternal(Socials.Issues) },
    { title: 'Self-hosting', text: SelfHost.Compose, onAction: openExternal(SelfHost.Compose) },
  ];

  return defaultProvider({ name: 'Pages', types: ['page', 'pages', 'site'], actions });
};
