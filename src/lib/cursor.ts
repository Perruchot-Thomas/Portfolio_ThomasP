import { gsap } from "gsap";

export const initCursor = () => {
  const el = document.querySelector<HTMLElement>("[data-cursor]");
  if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const label = el.querySelector<HTMLElement>("[data-cursor-label]");
  const setX = gsap.quickSetter(el, "x", "px");
  const setY = gsap.quickSetter(el, "y", "px");
  const pointer = { x: -100, y: -100 };
  const pos = { x: -100, y: -100 };
  let started = false;

  document.documentElement.classList.add("has-cursor");

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    if (!started) {
      pos.x = pointer.x;
      pos.y = pointer.y;
      started = true;
    }
    el.classList.add("is-visible");
  });

  document.documentElement.addEventListener("pointerleave", () => el.classList.remove("is-visible"));
  document.documentElement.addEventListener("pointerenter", () => el.classList.add("is-visible"));

  gsap.ticker.add(() => {
    const hit = document.elementFromPoint(pointer.x, pointer.y);
    const text = hit?.closest<HTMLElement>("[data-label]")?.dataset.label ?? "";
    if (label && text && label.textContent !== text) label.textContent = text;
    el.classList.toggle("is-label", Boolean(text));

    const ease = 1 - Math.pow(1 - 0.35, gsap.ticker.deltaRatio(60));
    pos.x += (pointer.x - pos.x) * ease;
    pos.y += (pointer.y - pos.y) * ease;
    setX(pos.x);
    setY(pos.y);
  });
};
