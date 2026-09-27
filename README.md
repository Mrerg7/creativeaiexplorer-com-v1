# creativeaiexplorer.com

Pure static Astro site for **Creative AI Explorer** — tracking tools, workflows, and trajectories in generative & agentic creative practice.

The domain **creativeaiexplorer.com is for sale**; the site doubles as a domain-sales landing page (content + conversion).

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

Every acquisition touchpoint routes to:

**sales@desertrich.com** (`src/config/site.ts` → `offerHref`)

Conversion elements:

- Hero "for sale" badge + primary **Acquire this Domain** CTA
- Sticky mobile acquisition bar (safe-area aware) on every page
- `#acquire` section: 3-step escrow process (offer → fund escrow → registrar transfer) + trust line
- `#domain-value` section: exact-match .com value props + ideal-buyer chips
- `#faq` domain sale FAQ (visible + `FAQPage` JSON-LD), objection handling, payment-plan note
- Footer acquisition block, header **Acquire Domain** button, and per-article domain CTA
- Pricing shown as **"Priced to sell · make an offer"** (no fixed number published)

## SEO & Domain Authority

- Sales-focused `<title>` / meta description on the homepage (`SITE.saleTitle` / `SITE.saleDescription`)
- JSON-LD `@graph`: `WebSite`, publisher `Organization`, seller `Organization` (Desert Rich), `BreadcrumbList`, `WebPage`/`Article`, `FAQPage`
- Canonical + `og:`/Twitter cards with real image dimensions and `og:image:alt`
- Sitemap (`/sitemap-index.xml`), `robots.txt`, internal related-article links, outbound authority links (NIST, OECD, C2PA, Wikipedia)
- Security/cache headers in `public/_headers`, `site.webmanifest`, `apple-touch-icon.png`, `favicon.ico`

## Verification (2026-09-27)

Lighthouse against the built site:

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Mobile (Moto G4, 1.6×, 4G) | 99 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Layout checks at 360 / 390 / 414 / 768 / 1280 widths: no horizontal overflow, no text under 12px, tap targets ≥ 44px, sticky header + anchors land clear of the header, no console/network errors.

## Project Structure

```
src/
  components/   Header, Footer, Hero
  content/      use-cases collection (Markdown)
  layouts/      Layout.astro (SEO, OG, JSON-LD)
  pages/        index + explorations routes
  styles/       global.css + Tailwind
public/         robots.txt, _headers, _redirects, favicon.svg/.ico, apple-touch-icon.png, og-default.jpg, site.webmanifest
```

## Notes

- Mobile-first, responsive layout with 44px+ tap targets, sticky mobile CTA, safe-area padding, and a mobile nav that closes on select/Escape
- `scroll-padding-top` keeps in-page anchors clear of the sticky header; `prefers-reduced-motion` respected
- Canonical apex host (`https://creativeaiexplorer.com/`) with 301s from www, HTTP, and `*.workers.dev`
- Custom 404 (`noindex, nofollow`) via Workers `not_found_handling`
- robots.txt allows Googlebot; sitemap at `/sitemap-index.xml`
- Full Open Graph + Twitter cards + JSON-LD (validated)
- All copy reflects the mid-2026 creative AI landscape (character consistency pipelines, agentic systems, hybrid music/visual workflows)
