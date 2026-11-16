# Athens County Food Pantry — website

A static [Astro](https://astro.build) site for athenscountyfoodpantry.org.

## Develop

Requires Node **22.23.4+** (see `.nvmrc`).

```sh
nvm use
npm install
npm run dev      # http://localhost:4321/athenscountyfoodpantry.org/
npm run build    # outputs static files to dist/
npm run preview
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, addresses, hours, announcement banner, donate/volunteer/newsletter links | `src/data/site.ts` |
| Navigation | `src/data/site.ts` (`nav`) |
| Memorial / honor donor lists | `src/data/donors.ts` |
| News posts | `src/content/posts/*.md` (frontmatter: title, date, excerpt, cover) |
| Photos | `src/assets/photos/` (optimized automatically at build) |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` tokens) |

To hide the top announcement bar, set `announcement.text` to `''` in `src/data/site.ts`.

## Pages

`/`, `/get-food`, `/support` (donate, food donations, food drives, volunteer), `/about`,
`/events` (Styled Calendar embed), `/news`, `/post/[slug]`, `/donors`, `/contact-us`.
URLs match the old site. `/donate`, `/contact` and `/blog` redirect.

## Deploy

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`:
https://z4nzib4r.github.io/athenscountyfoodpantry.org/

The site is served under the `/athenscountyfoodpantry.org` base path (set in `astro.config.mjs`),
so the local dev URL is `http://localhost:4321/athenscountyfoodpantry.org/`. Internal links in
`.astro` files go through `url()` from `src/utils/url.ts`; links in Markdown posts are prefixed
automatically.

To switch to a custom domain later: set `SITE` to the domain and `BASE` to `'/'` in
`astro.config.mjs`, add `public/CNAME`, and configure the domain in the repo's Pages settings.
