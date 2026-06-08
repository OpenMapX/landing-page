import type { HeaderItem } from '$common/types';
import { mdiChartGantt, mdiDownload, mdiPostOutline, mdiStarShootingOutline } from '@mdi/js';
import { siGithub } from 'simple-icons';
import { Sites, Socials } from '$lib/constants';

export const navItems: HeaderItem[] = [
  { title: 'Features', href: '/features', icon: mdiStarShootingOutline },
  { title: 'Download', href: '/download', icon: mdiDownload },
  { title: 'Roadmap', href: '/roadmap', icon: mdiChartGantt },
  { title: 'Blog', href: '/blog', icon: mdiPostOutline },
  { title: 'GitHub', href: Socials.Github, icon: siGithub, external: true },
  { title: 'Open the app', href: Sites.App, variant: 'filled', color: 'primary', show: 'always', external: true },
];
