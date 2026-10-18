import type { Lang } from "./i18n";

export type GalleryCategory = "posters" | "covers" | "experiments";

export interface GalleryItem {
  file: string;
  names: Record<Lang, string>;
  category: GalleryCategory;
}

export const galleryCategories: GalleryCategory[] = ["posters", "covers", "experiments"];

export const gallery: GalleryItem[] = [
  { file: "01-3ds-yeux-pensements", names: { en: "Bandaged Eyes", fr: "Yeux pansés" }, category: "covers" },
  { file: "02-acab", names: { en: "ACAB", fr: "ACAB" }, category: "posters" },
  { file: "03-biche", names: { en: "Night Doe", fr: "Biche de nuit" }, category: "covers" },
  { file: "04-who-are-you", names: { en: "Who Are You?", fr: "Qui es-tu ?" }, category: "experiments" },
  { file: "05-bug-fille", names: { en: "Glitch Girl", fr: "Fille glitch" }, category: "posters" },
  { file: "06-bouche-etoile", names: { en: "Star Mouth", fr: "Bouche étoile" }, category: "covers" },
  { file: "07-desurbanisation", names: { en: "Deurbanisation", fr: "Désurbanisation" }, category: "posters" },
  { file: "08-crane", names: { en: "Skull Grid", fr: "Crâne grille" }, category: "covers" },
  { file: "09-flowers-in-mind", names: { en: "Flowers in Mind", fr: "Fleurs en tête" }, category: "posters" },
  { file: "10-mute", names: { en: "Mute", fr: "Muet" }, category: "experiments" },
  { file: "11-oeufv2", names: { en: "Hidden Egg", fr: "Œuf caché" }, category: "posters" },
  { file: "12-red-eyes", names: { en: "Red Eyes", fr: "Yeux rouges" }, category: "posters" }
];

export const galleryName = (file: string, lang: Lang) => gallery.find((item) => item.file === file)?.names[lang] ?? file;
