// The site is served from a sub-path (astro.config.mjs `base`, e.g. /portfolio-2/).
// url('/projects/') → '/portfolio-2/projects/'. External URLs and '#anchors' are returned as is,
// so project files can keep root paths like "/projects/<slug>/home.webp".
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);
