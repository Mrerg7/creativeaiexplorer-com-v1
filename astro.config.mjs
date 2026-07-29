import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Pure static output for Cloudflare Workers Static Assets (assets-only deploy)
// No adapter required — dist/ is served directly via assets config in wrangler.toml
export default defineConfig({
  site: 'https://creativeaiexplorer.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
