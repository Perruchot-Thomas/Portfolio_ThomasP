import { gsap } from "gsap";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const ease = "expo.out";

export const split = (root: Element) => {
  root.querySelectorAll<HTMLElement>("[data-split]").forEach((block) => {
    if (block.dataset.done) return;
    block.dataset.done = "1";
    const words = (block.textContent ?? "").trim().split(/\s+/);
    block.textContent = "";
    words.forEach((word, index) => {
      const wrap = document.createElement("span");
      wrap.className = "split-word";
      Array.from(word).forEach((letter) => {
        const char = document.createElement("span");
        char.className = "split-char";
        char.textContent = letter;
        wrap.append(char);
      });
      block.append(wrap);
      if (index < words.length - 1) block.append(" ");
    });
  });
};

export const write = (root: Element, delay = 0) => {
  split(root);
  const blocks = Array.from(root.querySelectorAll<HTMLElement>("[data-split]"));
  const timeline = gsap.timeline({ delay });
  blocks.forEach((block, index) => {
    const chars = block.querySelectorAll(".split-char");
    timeline.fromTo(
      chars,
      { opacity: 0, yPercent: 60, filter: "blur(6px)" },
      { opacity: 1, yPercent: 0, filter: "blur(0px)", duration: reduced ? 0 : 0.9, ease, stagger: reduced ? 0 : 0.014 },
      index === 0 ? 0 : `<${reduced ? 0 : 0.18}`
    );
  });
  return timeline;
};

export const erase = (root: Element) =>
  gsap.to(root.querySelectorAll(".split-char"), {
    opacity: 0,
    yPercent: -50,
    filter: "blur(6px)",
    duration: reduced ? 0 : 0.5,
    ease: "power2.in",
    stagger: { each: reduced ? 0 : 0.003, from: "start" }
  });
