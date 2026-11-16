// Prefixes internal, root-relative paths with the configured `base`
// (e.g. "/athenscountyfoodpantry.org" on GitHub Pages, "" on a custom domain).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) =>
  path.startsWith('/') && !path.startsWith('//') ? `${base}${path}` : path;

/** Strips the base from a pathname, for comparing against site-relative routes. */
export const stripBase = (pathname: string) =>
  (base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname) || '/';
