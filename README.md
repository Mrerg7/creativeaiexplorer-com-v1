# creativeaiexplorer.com

Pure static Astro site for **Creative AI Explorer** — tracking tools, workflows, and trajectories in generative & agentic creative practice.

## Stack

- **Astro 5** (static output)
- **TypeScript**
- **Tailwind CSS**
- **Content Collections**
- **@astrojs/sitemap**
- Deployed as **Cloudflare Workers Static Assets** (assets-only, no Worker script)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output lands in `dist/`.

## Cloudflare Workers Static Assets Deploy

This project uses the recommended pure-static pattern:

- `output: 'static'` in `astro.config.mjs`
- **No** `@astrojs/cloudflare` adapter
- `wrangler.toml` points `[assets] directory = "./dist"`

```bash
npm run build
npx wrangler deploy
```

Or connect the GitHub repo to Cloudflare Pages / Workers and set the build command to `npm run build` and output directory to `dist`.

## Domain Acquisition

The site includes a clear CTA in the footer and header routing acquisition inquiries to:

**sales@desertrich.com**

## Project Structure

```
src/
  components/   Header, Footer, Hero
  content/      use-cases collection (Markdown)
  layouts/      Layout.astro (SEO, OG, JSON-LD)
  pages/        index + explorations routes
  styles/       global.css + Tailwind
public/         robots.txt, favicon.svg
```

## Notes

- Mobile-first, responsive layout
- Full Open Graph + Twitter cards
- JSON-LD WebSite + Organization structured data
- Sitemap generated at build time
- All copy reflects the mid-2026 creative AI landscape (character consistency pipelines, agentic systems, hybrid music/visual workflows)
