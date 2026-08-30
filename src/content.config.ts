import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/articles' }),
  schema: z.object({
    title: z.string(),
    original_headline: z.string(),
    original_outlet: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    sources: z.array(z.string().url()).min(1),
  }),
});

export const collections = { articles };
