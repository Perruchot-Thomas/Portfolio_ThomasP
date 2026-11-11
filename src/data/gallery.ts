import type { Lang } from "./i18n";

export type GalleryCategory = "posters" | "covers" | "experiments";

export interface GalleryItem {
  file: string;
  names: Record<Lang, string>;
  category: GalleryCategory;
}

export const galleryCategories: GalleryCategory[] = ["posters", "covers", "experiments"];

export const gallery: GalleryItem[] = [
  { file: "01-3ds-yeux-pensements", names: { en: "Yeux pansés", fr: "Yeux pansés" }, category: "covers" },
  { file: "02-acab", names: { en: "Tought", fr: "Tought" }, category: "posters" },
  { file: "03-biche", names: { en: "Biche", fr: "Biche" }, category: "covers" },
  { file: "04-who-are-you", names: { en: "Who are you ?", fr: "Who are you ?" }, category: "experiments" },
  { file: "05-bug-fille", names: { en: "Bug fille", fr: "Bug fille" }, category: "posters" },
  { file: "06-bouche-etoile", names: { en: "Bouche étoile", fr: "Bouche étoile" }, category: "covers" },
  { file: "07-desurbanisation", names: { en: "Urbanization", fr: "Urbanization" }, category: "posters" },
  { file: "08-crane", names: { en: "Crâne", fr: "Crâne" }, category: "covers" },
  { file: "09-flowers-in-mind", names: { en: "Flowers in mind", fr: "Flowers in mind" }, category: "posters" },
  { file: "10-mute", names: { en: "Mute", fr: "Mute" }, category: "experiments" },
  { file: "11-oeufv2", names: { en: "Œuf", fr: "Œuf" }, category: "posters" },
  { file: "12-red-eyes", names: { en: "Red eyes", fr: "Red eyes" }, category: "posters" }
];

export const galleryName = (file: string, lang: Lang) => gallery.find((item) => item.file === file)?.names[lang] ?? file;
