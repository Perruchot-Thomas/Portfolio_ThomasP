export const socials = [
  { id: "email", label: "sidus.sidus@yahoo.com", href: "mailto:sidus.sidus@yahoo.com" },
  { id: "instagram", label: "instagram", href: "https://www.instagram.com/" },
  { id: "tiktok", label: "tiktok", href: "https://www.tiktok.com/" },
  { id: "linkedin", label: "linkedin", href: "https://www.linkedin.com/" }
];

export const navItems = [
  { key: "home", path: "" },
  { key: "about", path: "/about" },
  { key: "projects", path: "/projects" },
  { key: "contact", path: "/contact" }
] as const;

export const aboutThumbnails: { src?: string; alt: string }[] = [
  { alt: "Drawing" },
  { alt: "Pen tablet" },
  { alt: "First collab" },
  { alt: "T-shirt design" },
  { alt: "Photoshop" },
  { alt: "MMI degree" }
];
