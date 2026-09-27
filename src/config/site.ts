export const SITE = {
  name: 'Creative AI Explorer',
  host: 'creativeaiexplorer.com',
  url: 'https://creativeaiexplorer.com',
  description:
    'Explore current and emerging creative AI tools, workflows, and future trajectories across image, video, music, writing, and agentic systems.',
  saleTitle: 'Creative AI Explorer — creativeaiexplorer.com for Sale',
  saleDescription:
    'creativeaiexplorer.com is for sale — a memorable exact-match .com for AI creativity platforms, tool directories, agencies and media. Priced to sell, secure escrow.',
  saleShort:
    'creativeaiexplorer.com is available for acquisition — priced to sell, secure escrow transfer in 1–5 days.',
  email: 'sales@desertrich.com',
  seller: 'Desert Rich',
  heroImage:
    'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/0f0f3faf-6664-41dc-989c-23683562c300/public',
  ogImage: 'https://creativeaiexplorer.com/og-default.jpg',
  ogImageAlt:
    'Creative AI Explorer — premium creative AI .com domain available for acquisition',
} as const;

/** mailto: link for domain acquisition inquiries. */
export const offerHref =
  `mailto:${SITE.email}?subject=${encodeURIComponent('Domain Acquisition Inquiry - creativeaiexplorer.com')}`;

/** Absolute canonical URL on the apex host, with a trailing slash for HTML pages. */
export function canonicalURL(pathname: string): string {
  const path = pathname.split('?')[0].split('#')[0] || '/';
  if (path === '/' || path === '') return `${SITE.url}/`;

  const trimmed = path.replace(/\/+$/, '');
  const last = trimmed.split('/').pop() || '';
  if (last.includes('.')) return `${SITE.url}${trimmed}`;
  return `${SITE.url}${trimmed}/`;
}
