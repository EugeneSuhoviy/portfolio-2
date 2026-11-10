import { getCollection, type CollectionEntry } from 'astro:content';
export type Project = CollectionEntry<'projects'>;

const levelRank = { case: 0, card: 1, archive: 2 } as const;
const yearOf = (p: string) => parseInt(p.split(/[–-]/).pop() || '0', 10);

/** Published projects, best first. NDA projects lose their name and link. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => data.published);
  return all
    .map((p) => (p.data.nda ? { ...p, data: { ...p.data, url: '' } } : p))
    .sort((a, b) =>
      levelRank[a.data.level] - levelRank[b.data.level] ||
      yearOf(b.data.period) - yearOf(a.data.period) ||
      (a.data.platform.includes('shopify') ? -1 : 0) - (b.data.platform.includes('shopify') ? -1 : 0));
}

export async function getStats() {
  const all = await getCollection('projects');
  const companies = new Set(all.map((p) => p.data.company));
  return {
    years: 11, // years in eCommerce frontend
    stores: Math.floor(all.length / 10) * 10,
    companies: companies.size,
  };
}
