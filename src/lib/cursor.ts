import { gsap } from "gsap";

export const initCursor = () => {
  const el = document.querySelector<HTMLElement>("[data-cursor]");
  if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const icon = el.querySelector<SVGElement>("svg");
  const label = el.querySelector<HTMLElement>("[data-cursor-label]");
  const setX = gsap.quickSetter(el, "x", "px");
  const setY = gsap.quickSetter(el, "y", "px");
  const setTurn = icon ? gsap.quickSetter(icon, "rotation", "deg") : null;
  const pointer = { x: -100, y: -100 };
  const pos = { x: -100, y: -100 };
  const margin = 70;
  let target: HTMLElement | null = null;
  let pressed = false;
  let started = false;
  let turn = 0;
  let speed = 0;

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

  window.addEventListener("pointerdown", () => (pressed = true));
  window.addEventListener("pointerup", () => (pressed = false));
  window.addEventListener("pointercancel", () => (pressed = false));

  document.documentElement.addEventListener("pointerleave", () => el.classList.remove("is-visible"));
  document.documentElement.addEventListener("pointerenter", () => el.classList.add("is-visible"));

  const pick = () => {
    const hit = document.elementFromPoint(pointer.x, pointer.y);
    return hit?.closest<HTMLElement>("[data-magnet]") ?? null;
  };

  gsap.ticker.add(() => {
    const ratio = gsap.ticker.deltaRatio(60);
    let goalX = pointer.x;
    let goalY = pointer.y;
    let centred = false;

    if (pressed) target = null;
    else {
      if (target) {
        const box = target.getBoundingClientRect();
        const out = pointer.x < box.left - margin || pointer.x > box.right + margin || pointer.y < box.top - margin || pointer.y > box.bottom + margin;
        if (out || !target.isConnected) target = null;
      }
      if (!target) target = pick();
    }

    if (target) {
      const box = target.getBoundingClientRect();
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height / 2;
      const dx = pointer.x - cx;
      const dy = pointer.y - cy;
      const reach = Math.min(1, Math.max(Math.abs(dx) / (box.width / 2 + margin), Math.abs(dy) / (box.height / 2 + margin)));
      const give = 0.12 + 0.88 * reach ** 4;
      goalX = cx + dx * give;
      goalY = cy + dy * give;
      centred = Math.hypot(pos.x - cx, pos.y - cy) < 18;
    }

    const text = target?.dataset.label ?? "";
    if (label && text && label.textContent !== text) label.textContent = text;
    el.classList.toggle("is-label", Boolean(text));

    const ease = 1 - Math.pow(1 - (target ? 0.14 : 0.35), ratio);
    pos.x += (goalX - pos.x) * ease;
    pos.y += (goalY - pos.y) * ease;
    setX(pos.x);
    setY(pos.y);

    speed += ((centred ? 4.5 : 0) - speed) * (1 - Math.pow(0.92, ratio));
    turn = (turn + speed * ratio) % 360;
    setTurn?.(turn);
  });
};
