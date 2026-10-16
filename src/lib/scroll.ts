import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let instance: Lenis | undefined;

export const initScroll = () => {
  if (instance) return instance;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

  instance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    anchors: true
  });

  instance.on("scroll", ScrollTrigger.update);

  const raf = (time: number) => {
    instance?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  return instance;
};

export const getScroll = () => instance;
