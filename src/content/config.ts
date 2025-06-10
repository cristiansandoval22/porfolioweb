import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        img: z.string(),
        github: z.string().optional(),
        preview: z.string().optional(),
    }),
});

export const collections = {projects,};