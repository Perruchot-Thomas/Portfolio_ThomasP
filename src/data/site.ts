export const socials = [
  { id: "email", label: "sidus.sidus@yahoo.com", href: "mailto:sidus.sidus@yahoo.com" },
  { id: "instagram", label: "instagram", href: "https://www.instagram.com/ssidusss/" },
  { id: "tiktok", label: "tiktok", href: "https://www.tiktok.com/@sidus.sidus" },
  { id: "linkedin", label: "linkedin", href: "https://www.linkedin.com/in/thomas-perruchot-5a378b1a9/" }
];

export const contactForm = {
  endpoint: "https://api.web3forms.com/submit",
  key: "1176a45e-0b24-43d6-8211-dc7be3a47da3"
};

export const navItems = [
  { key: "home", path: "" },
  { key: "about", path: "/about" },
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
