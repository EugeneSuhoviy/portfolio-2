# Eugene Sukhovii — portfolio site

Astro, no UI framework. Pages are plain HTML and CSS, with a little vanilla JS for counters, scroll reveal and project filters.

## Run
```
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live
- `src/content/projects/*.md` — the project base (one file per project). `templates/new-project.md` is the template.
- `src/content.config.ts` — the schema: the build fails if a project file has a wrong field.
- `src/data/site.ts` — name, links, "What clients come to me with", how-I-work steps, FAQ.
- `src/pages/index.astro` — home. `src/pages/projects/index.astro` — all projects with filters. `src/pages/projects/[id].astro` — a case page for every project with `level: case`.
- `src/styles/global.css` — colours, fonts and shared styles (variant D).

## Adding a project
Copy the template into `src/content/projects/`, fill it in. `level: case` gets its own page, `featured: true` + `order` puts it on the home page.

## Before launch
- [ ] Screenshots: put them in `public/projects/<slug>/` and list them in `screenshots: ["/projects/<slug>/home.webp"]` (step by step: [SCREENSHOTS.md](SCREENSHOTS.md))
- [x] Photo in the About block
- [ ] Fill the TODOs in the three case files
- [ ] Your terms in `steps` and two FAQ answers in `src/data/site.ts`
- [ ] Contact form: replace the mailto with Formspree, Netlify Forms or similar
- [ ] Set `site` in `astro.config.mjs` to your domain
- [ ] Deploy: Netlify / Vercel / Cloudflare Pages, connected to the GitHub repo
