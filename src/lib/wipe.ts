import { gsap } from "gsap";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let leaving = false;

const parts = () => {
  const root = document.querySelector<HTMLElement>("[data-wipe-root]");
  if (!root) return undefined;
  const veil = root.querySelector<HTMLElement>("[data-wipe]");
  const fill = root.querySelector<HTMLElement>("[data-wipe-fill]");
  const label = root.querySelector<HTMLElement>("[data-wipe-label]");
  const count = root.querySelector<HTMLElement>("[data-wipe-count]");
  const center = root.querySelector<HTMLElement>(".wipe__center");
  const lines = Array.from(root.querySelectorAll<HTMLElement>("[data-wipe-line]"));
  return veil && fill && label && count && center ? { root, veil, fill, label, count, center, lines } : undefined;
};

const letters = (label: HTMLElement, text: string) => {
  label.textContent = "";
  return Array.from(text).map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre";
    label.appendChild(span);
    return span;
  });
};

const counter = (count: HTMLElement, value: { n: number }) => () => {
  count.textContent = String(Math.round(value.n)).padStart(3, "0");
};

const labelFor = (href: string, root: HTMLElement) => {
  const labels = JSON.parse(root.dataset.labels ?? "{}") as Record<string, string>;
  const path = new URL(href, window.location.href).pathname.replace(/\/$/, "");
  const name = labels[path] ?? labels[`${path}/`] ?? "sidus";
  return `[ ${name} ]`;
};

export const go = (href: string) => {
  const wipe = parts();
  if (!wipe || reduced() || leaving) {
    window.location.href = href;
    return;
  }
  leaving = true;
  const text = labelFor(href, wipe.root);
  try {
    sessionStorage.setItem("wipe", "1");
    sessionStorage.setItem("wipe-label", text);
  } catch {}
  const chars = letters(wipe.label, text);
  const value = { n: 0 };
  gsap.set([wipe.veil, wipe.center, wipe.count], { visibility: "visible" });
  gsap
    .timeline({ onComplete: () => window.location.assign(href) })
    .fromTo(wipe.veil, { opacity: 0 }, { opacity: 1, duration: 0.55, ease: "power2.inOut" }, 0)
    .fromTo(wipe.fill, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 0.25)
    .fromTo(value, { n: 0 }, { n: 100, duration: 0.9, ease: "power2.inOut", onUpdate: counter(wipe.count, value) }, 0)
    .fromTo(wipe.lines, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "expo.inOut" }, 0.3)
    .fromTo(chars, { opacity: 0, yPercent: 60, filter: "blur(6px)" }, { opacity: 1, yPercent: 0, filter: "blur(0px)", duration: 0.5, ease: "expo.out", stagger: 0.018 }, 0.45)
    .to({}, { duration: 0.15 });
};

const internal = (link: HTMLAnchorElement, event: MouseEvent) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
  if (link.target && link.target !== "_self") return false;
  if (link.hasAttribute("download") || link.dataset.noWipe !== undefined) return false;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return false;
  if (url.pathname === window.location.pathname && (url.hash || url.search === window.location.search)) return false;
  return true;
};

export const goFrom = (_link: HTMLElement, href: string, _event?: MouseEvent) => go(href);

const reset = (wipe: NonNullable<ReturnType<typeof parts>>) => {
  gsap.set([wipe.veil, wipe.fill, wipe.center, wipe.count, ...wipe.lines], { clearProps: "all" });
  wipe.count.textContent = "000";
};

export const initWipe = () => {
  const wipe = parts();
  const html = document.documentElement;
  if (!wipe) return;

  if (html.hasAttribute("data-wipe")) {
    try {
      sessionStorage.removeItem("wipe");
    } catch {}
    const chars = letters(wipe.label, wipe.label.textContent ?? "");
    gsap.set([wipe.veil, wipe.fill, wipe.center, wipe.count], { visibility: "visible" });
    gsap.set([wipe.veil, wipe.fill], { opacity: 1 });
    gsap.set(wipe.lines, { scaleX: 1 });
    html.removeAttribute("data-wipe");
    gsap
      .timeline({ delay: 0.2, onComplete: () => reset(wipe) })
      .to(chars, { opacity: 0, yPercent: -60, filter: "blur(6px)", duration: 0.4, ease: "power2.in", stagger: 0.012 }, 0)
      .to(wipe.lines, { scaleX: 0, duration: 0.6, ease: "expo.inOut" }, 0.1)
      .to(wipe.count, { opacity: 0, duration: 0.3, ease: "power2.in" }, 0.1)
      .to(wipe.fill, { opacity: 0, duration: 0.55, ease: "power2.inOut" }, 0.35)
      .to(wipe.veil, { opacity: 0, duration: 0.7, ease: "power2.inOut" }, 0.55);
  }

  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
    if (!link || !internal(link, event)) return;
    event.preventDefault();
    go(link.href);
  });

  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    leaving = false;
    html.removeAttribute("data-wipe");
    reset(wipe);
  });
};
