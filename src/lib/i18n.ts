import { languages, defaultLang, ui } from "../data/i18n";
import type { Lang } from "../data/i18n";

export const isLang = (value: string | undefined): value is Lang =>
  languages.includes(value as Lang);

export const getLang = (value: string | undefined): Lang =>
  isLang(value) ? value : defaultLang;

export const useUi = (lang: Lang) => ui[lang];

export const localePath = (lang: Lang, path = "") => `/${lang}${path}`;

export const switchLang = (pathname: string, target: Lang) =>
  pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${target}`);

export const staticLangPaths = () => languages.map((lang) => ({ params: { lang } }));
