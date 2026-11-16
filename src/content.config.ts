import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      excerpt: z.string(),
      cover: image(),
      coverAlt: z.string().default(''),
      category: z.string().default('Pantry Updates'),
      tags: z.array(z.string()).default([]),
      readingTime: z.string().optional(),
    }),
});

export const collections = { posts };
