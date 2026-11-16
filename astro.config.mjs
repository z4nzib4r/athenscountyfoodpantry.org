// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://athenscountyfoodpantry.org',
  redirects: {
    '/donate': '/support#donate',
    '/contact': '/contact-us',
    '/blog': '/news',
  },
});
