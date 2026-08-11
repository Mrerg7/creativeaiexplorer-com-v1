export const SITE = {
  name: 'Creative AI Explorer',
  host: 'creativeaiexplorer.com',
  url: 'https://creativeaiexplorer.com',
  description:
    'Explore current and emerging creative AI tools, workflows, and future trajectories across image, video, music, writing, and agentic systems.',
  email: 'sales@desertrich.com',
  ogImage: 'https://creativeaiexplorer.com/og-default.jpg',
} as const;

/** Absolute canonical URL on the apex host, with a trailing slash for HTML pages. */
export function canonicalURL(pathname: string): string {
  const path = pathname.split('?')[0].split('#')[0] || '/';
  if (path === '/' || path === '') return `${SITE.url}/`;

  const trimmed = path.replace(/\/+$/, '');
  const last = trimmed.split('/').pop() || '';
  if (last.includes('.')) return `${SITE.url}${trimmed}`;
  return `${SITE.url}${trimmed}/`;
}
