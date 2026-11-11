const skip = ".menu, .hero, [data-scramble], [data-no-roll]";

export const initRoll = () => {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  document.querySelectorAll<HTMLElement>("a, button").forEach((target) => {
    if (target.closest(skip) || target.childElementCount > 0 || target.dataset.roll !== undefined) return;
    const text = target.textContent?.trim() ?? "";
    if (!text) return;
    target.dataset.roll = "";
    if (!target.hasAttribute("aria-label")) target.setAttribute("aria-label", text);
    const roll = document.createElement("span");
    roll.className = "roll";
    const front = document.createElement("span");
    front.className = "roll__line";
    front.textContent = text;
    const back = document.createElement("span");
    back.className = "roll__line roll__line--back";
    back.textContent = text;
    back.setAttribute("aria-hidden", "true");
    roll.append(front, back);
    target.replaceChildren(roll);
  });
};
