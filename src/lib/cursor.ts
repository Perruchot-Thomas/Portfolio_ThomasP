import { gsap } from "gsap";

export const initCursor = () => {
  const el = document.querySelector<HTMLElement>("[data-cursor]");
  if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const setX = gsap.quickSetter(el, "x", "px");
  const setY = gsap.quickSetter(el, "y", "px");

  document.documentElement.classList.add("has-cursor");

  window.addEventListener("pointermove", (event) => {
    setX(event.clientX);
    setY(event.clientY);
    el.classList.add("is-visible");
  });

  document.documentElement.addEventListener("pointerleave", () => el.classList.remove("is-visible"));
  document.documentElement.addEventListener("pointerenter", () => el.classList.add("is-visible"));
};
