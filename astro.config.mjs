import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://eugenesuhoviy.github.io',
  base: '/portfolio-2', // GitHub Pages project site; links go through url() in src/data/url.ts
  build: { format: 'directory' },
});
