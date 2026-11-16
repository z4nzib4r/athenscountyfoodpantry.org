// @ts-check
import { defineConfig } from 'astro/config';

// Locally the site is served from "/". The GitHub Pages workflow sets SITE and
// BASE_PATH so the deployed build lives at
// https://z4nzib4r.github.io/athenscountyfoodpantry.org/
const SITE = process.env.SITE || 'https://athenscountyfoodpantry.org';
const BASE = process.env.BASE_PATH || '/';
const PREFIX = BASE.replace(/\/$/, ''); // '' locally, '/athenscountyfoodpantry.org' on Pages

/** Prefix root-relative links in Markdown content with the base path. */
function rehypeBaseLinks() {
  /** @param {any} node */
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a') {
      const href = node.properties?.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
        node.properties.href = PREFIX + href;
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
    '/donate': `${PREFIX}/support#donate`,
    '/contact': `${PREFIX}/contact-us`,
    '/blog': `${PREFIX}/news`,
  },
});
