import { defineCollection, z } from 'astro:content';

const useCases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['visual', 'video', 'audio', 'writing', 'agents', 'future']),
    published: z.date(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = {
  'use-cases': useCases,
};
