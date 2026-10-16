import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const scramble = (el: HTMLElement, text: string, duration = 0.7) => {
  gsap.killTweensOf(el);
  if (reducedMotion()) {
    el.textContent = text;
    return;
  }
  gsap.to(el, {
    duration,
    ease: "none",
    scrambleText: { text, chars: "upperAndLowerCase", speed: 0.6, revealDelay: 0.1 }
  });
};

export const initScramble = () => {
  document.querySelectorAll<HTMLElement>("[data-scramble]").forEach((el) => {
    const text = el.textContent?.trim() ?? "";
    const trigger = el.closest<HTMLElement>("a, button") ?? el;

    const run = () => {
      gsap.killTweensOf(el);
      el.textContent = text;
      el.style.minWidth = "";
      const width = el.getBoundingClientRect().width;
      if (width) el.style.minWidth = `${width}px`;
      scramble(el, text);
    };

    trigger.addEventListener("pointerenter", run);
    trigger.addEventListener("focus", run);
  });
};
