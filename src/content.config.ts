import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url().or(z.literal('')),
    platform: z.array(z.enum(['shopify', 'magento', 'headless'])).min(1),
    stack: z.array(z.string()).default([]),
    company: z.string(),
    period: z.string(),                       // "2026" or "2020–2025"
    role: z.string().default(''),
    level: z.enum(['archive', 'card', 'case']),
    status: z.enum(['live', 'in-progress', 'archived']).default('live'),
    nda: z.boolean().default(false),          // true = hide name and link
    published: z.boolean().default(true),     // false = kept only for you
    featured: z.boolean().default(false),     // show on the home page
    order: z.number().default(99),            // lower = earlier among featured
    markets: z.array(z.string()).default([]), // "US", "AU", "NZ"...
    problems: z.array(z.enum([
      'design-to-sections', 'editable-theme', 'theme-upgrade', 'cro',
      'speed', 'international', 'app-conflict', 'b2b',
      'accessibility', 'from-scratch',
    ])).default([]),
    summary: z.string().default(''),
    screenshots: z.array(z.string()).default([]),
    metrics: z.array(z.string()).default([]),
    private_notes: z.string().default(''),    // never rendered on the site
  }),
});

export const collections = { projects };
