import type { APIRoute } from "astro";
import { languages, defaultLang } from "../data/i18n";
import { getProjects } from "../data/projects";

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const projects = (await getProjects()).filter((project) => project.home);
  const paths = ["/", "/about", "/contact", "/galerie", "/legal", ...projects.map((project) => `/projects/${project.slug}`)];
  const url = (lang: string, path: string) => new URL(`/${lang}${path}`, site).href;
  const entries = paths.flatMap((path) =>
    languages.map((lang) => {
      const links = [...languages.map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${url(code, path)}"/>`), `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(defaultLang, path)}"/>`];
      return `  <url>\n    <loc>${url(lang, path)}</loc>\n${links.join("\n")}\n  </url>`;
    })
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
