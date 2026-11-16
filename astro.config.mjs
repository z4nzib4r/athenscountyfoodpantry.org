// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages at https://z4nzib4r.github.io/athenscountyfoodpantry.org/
// To move to a custom domain later: set SITE to the domain, BASE to '/',
// and add public/CNAME.
const SITE = 'https://z4nzib4r.github.io';
const BASE = '/athenscountyfoodpantry.org';

/** Prefix root-relative links in Markdown content with the base path. */
function rehypeBaseLinks() {
  const prefix = BASE.replace(/\/$/, '');
  /** @param {any} node */
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a') {
      const href = node.properties?.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
        node.properties.href = prefix + href;
      }
    }
    node.children?.forEach(walk);
  };
  return walk;
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
  redirects: {
    '/donate': `${BASE}/support#donate`,
    '/contact': `${BASE}/contact-us`,
    '/blog': `${BASE}/news`,
  },
});
