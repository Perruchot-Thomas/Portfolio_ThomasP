import type { ImageMetadata } from "astro";
import { getCollection } from "astro:content";
import type { Lang } from "./i18n";

type Localized = Record<Lang, string>;

export type Frame = { kind: "image"; image: ImageMetadata } | { kind: "note"; label: Localized; text: Localized };

export interface Project {
  slug: string;
  name: string;
  category: "posters" | "covers" | "experiments";
  home: boolean;
  year: string;
  tools: string;
  stream?: string;
  context: Localized;
  vision: Localized;
  cover: ImageMetadata;
  frames: Frame[];
}

export const getProjects = async (): Promise<Project[]> => {
  const entries = await getCollection("projects");
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map(({ id, data }) => ({
      slug: id,
      name: data.name,
      category: data.category,
      home: data.home,
      year: data.year,
      tools: data.tools,
      stream: data.stream,
      context: data.context,
      vision: data.vision,
      cover: data.cover,
      frames: data.frames.map((frame): Frame => ("image" in frame ? { kind: "image", image: frame.image } : { kind: "note", label: frame.label, text: frame.text }))
    }));
};
