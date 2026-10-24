import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const interviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/interviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    person: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    coverPortrait: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { interviews };
