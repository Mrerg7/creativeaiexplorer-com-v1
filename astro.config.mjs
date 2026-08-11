import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Pure static output for Cloudflare Workers Static Assets (assets-only deploy)
// No adapter required — dist/ is served directly via assets config in wrangler.toml
export default defineConfig({
  site: 'https://creativeaiexplorer.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/404.html'),
      changefreq: 'weekly',
      serialize(item) {
        const url = item.url.endsWith('/') || item.url.includes('.') ? item.url : `${item.url}/`;
        return { ...item, url };
      },
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
