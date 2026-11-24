// Case study content model. One YAML file per project in src/content/projects.
// Sections marked .optional() simply don't render when left out.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const card = z.object({ title: z.string(), body: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      kicker: z.string(),
      underline: z.string().optional(), // word in the kicker that gets the pink underline
      title: z.string(),
      tags: z.array(z.string()).default([]),
      facts: z.array(z.object({ icon: z.string(), label: z.string(), value: z.string() })),
      image: z.string(),
      imageAlt: z.string(),
    }),
    summary: z.object({
      name: z.string(),
      subtitle: z.string(),
      image: z.string(),
      imageAlt: z.string(),
      problem: z.string(),
      role: z.string(),
      built: z.string(),
      outcome: z.string(),
    }),
    challenge: z.object({
      cards: z.array(card),
      sticker: z.string().optional(),
      stickerAlt: z.string().optional(),
    }),
    users: z
      .object({
        intro: z.string(),
        people: z.array(z.object({ name: z.string(), body: z.string(), image: z.string().optional(), imageAlt: z.string().optional(), credit: z.string().optional() })),
        outro: z.string().optional(),
      })
      .optional(),
    role: z.object({
      image: z.string().optional(), // photo beside the text; leave out for full-width text
      imageAlt: z.string().optional(),
      text: z.string(),
      skills: z.array(z.object({ icon: z.enum(['lupa', 'goal', 'dotted-square', 'spiral-outline', 'multiple-users']), label: z.string() })),
      gallery: z.array(z.object({ image: z.string(), alt: z.string(), ratio: z.string().optional() })).default([]),
      galleryColumns: z.number().default(1), // 2 = images side by side
    }),
    solution: z.object({
      statement: z.string(),
      groups: z.array(card).default([]),
      features: z.array(z.object({ title: z.string(), body: z.string(), image: z.string(), imageAlt: z.string() })).default([]),
      showcase: z.object({ image: z.string(), alt: z.string() }).optional(),
      learnings: z
        .object({ title: z.string(), intro: z.string(), items: z.array(z.object({ label: z.string(), body: z.string() })) })
        .optional(),
    }),
    result: z.object({
      title: z.string(),
      body: z.string(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      quote: z.object({ text: z.string(), author: z.string() }).optional(),
      note: z.string().optional(),
      takeaway: z.object({ text: z.string(), image: z.string().optional() }),
    }),
    next: z.object({ label: z.string(), href: z.string() }).optional(),
  }),
});

export const collections = { projects };
