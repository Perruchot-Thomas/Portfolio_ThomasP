import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localized = z.object({ fr: z.string(), en: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: "*/projet.yaml", base: "./src/content/projects", generateId: ({ entry }) => entry.split("/")[0] }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      name: z.string(),
      category: z.enum(["posters", "covers", "experiments", "web"]),
      home: z.boolean().default(true),
      year: z.coerce.string(),
      tools: z.string(),
      stream: z.string().optional(),
      site: z.string().optional(),
      context: localized,
      vision: localized,
      cover: image(),
      frames: z.array(z.union([z.object({ image: image(), href: z.string().optional() }), z.object({ label: localized, text: localized })]))
    })
});

export const collections = { projects };
