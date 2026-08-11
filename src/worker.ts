/**
 * Canonical host + HTTPS enforcement for static assets.
 * Runs before assets (run_worker_first) so www / http / workers.dev variants
 * 301 to the apex HTTPS URL instead of serving duplicate HTML.
 */
const CANONICAL_HOST = 'creativeaiexplorer.com';

interface Env {
  ASSETS: Fetcher;
}

function isAlternateHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return (
    host === `www.${CANONICAL_HOST}` ||
    host.endsWith('.workers.dev') ||
    host.endsWith('.pages.dev')
  );
}

function canonicalPath(pathname: string): string {
  if (pathname === '/index.html' || pathname === '/index') return '/';
  if (pathname === '/sitemap.xml') return '/sitemap-index.xml';
  if (pathname === '/og-default.png') return '/og-default.jpg';
  return pathname;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const nextPath = canonicalPath(url.pathname);
    const needsHttps = url.protocol === 'http:';
    const needsHostRedirect = isAlternateHost(url.hostname);
    const needsPathRedirect = nextPath !== url.pathname;

    if (needsHttps || needsHostRedirect || needsPathRedirect) {
      const canonical = new URL(
        nextPath + url.search,
        `https://${CANONICAL_HOST}`,
      );
      return Response.redirect(canonical.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
