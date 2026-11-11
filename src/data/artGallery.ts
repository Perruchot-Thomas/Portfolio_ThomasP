import type { ImageMetadata } from "astro";
import cover from "../content/galerie/dossier.png";

export type GalleryType = "drawing" | "painting" | "pastel" | "digital";

export interface GalleryPiece {
  name: string;
  type: GalleryType;
  image: ImageMetadata;
}

const files = import.meta.glob<{ default: ImageMetadata }>("../content/galerie/*.{jpg,jpeg,png}", { eager: true });

const list: [string, string, GalleryType][] = [
  ["dessin-sidus", "Sidus", "drawing"],
  ["dessin-mini-cahier-1", "Mini cahier 1", "drawing"],
  ["dessin-mini-cahier-2", "Mini cahier 2", "drawing"],
  ["dessin-mini-cahier-3", "Mini cahier 3", "drawing"],
  ["dessin-mini-cahier-4", "Mini cahier 4", "drawing"],
  ["dessin-behh", "Behh", "drawing"],
  ["dessin-swag", "Swag", "drawing"],
  ["dessin-plaisir", "Plaisir", "drawing"],
  ["dessin-face-hard-work", "Face hard work", "drawing"],
  ["dessin-pretty-girl", "Pretty girl", "drawing"],
  ["dessin-petit-corps-grandes-mains", "Petit corps grandes mains", "drawing"],
  ["tableau-look-at-my-eyes", "Look at my eyes", "painting"],
  ["tableau-plane", "Plane", "painting"],
  ["tableau-ha", "HA", "painting"],
  ["tableau-2-faces", "2 faces", "painting"],
  ["tableau-blue-and-yellow", "Blue and yellow", "painting"],
  ["tableau-flower", "Flower", "painting"],
  ["tableau-kyut", "Kyut", "painting"],
  ["pastel-1", "Pastel 1", "pastel"],
  ["pastel-2", "Pastel 2", "pastel"],
  ["pastel-3", "Pastel 3", "pastel"],
  ["pastel-4", "Pastel 4", "pastel"],
  ["digital-noeud-humain", "Nœud humain", "digital"],
  ["digital-extase", "Extase", "digital"],
  ["digital-double-vision", "Double vision", "digital"],
  ["digital-dose-stellaire", "Dose stellaire", "digital"],
  ["digital-coeur-d-epines", "Cœur d'épines", "digital"],
  ["digital-vibration-urbaine", "Vibration urbaine", "digital"]
];

const find = (slug: string) => {
  const key = Object.keys(files).find((path) => path.split("/").pop()?.replace(/\.\w+$/, "") === slug);
  if (!key) throw new Error(`galerie: ${slug} introuvable`);
  return files[key].default;
};

export const galleryCover = cover;
export const galleryTypes: GalleryType[] = ["drawing", "painting", "pastel", "digital"];
export const galleryPieces: GalleryPiece[] = list.map(([slug, name, type]) => ({ name, type, image: find(slug) }));
