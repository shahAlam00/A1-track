import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function revealOnScroll(
  element: HTMLElement | null,
  options: {
    y?: number;
    delay?: number;
    duration?: number;
    threshold?: string;
  } = {}
) {
  if (!element) return null;

  const { y = 40, delay = 0, duration = 0.9, threshold = 'top 85%' } = options;

  return gsap.fromTo(
    element,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: threshold,
        toggleActions: 'play none none none',
        once: true,
      },
    }
  );
}

export function staggerReveal(
  container: HTMLElement | null,
  itemSelector: string,
  options: {
    y?: number;
    stagger?: number;
    duration?: number;
    threshold?: string;
  } = {}
) {
  if (!container) return null;

  const { y = 40, stagger = 0.12, duration = 0.8, threshold = 'top 85%' } = options;
  const items = container.querySelectorAll(itemSelector);

  if (!items.length) return null;

  return gsap.fromTo(
    items,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: threshold,
        toggleActions: 'play none none none',
        once: true,
      },
    }
  );
}

export function imageReveal(container: HTMLElement | null) {
  if (!container) return null;

  const img = container.querySelector('img');
  const overlay = container.querySelector('.reveal-overlay');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: true,
    },
  });

  if (overlay) {
    tl.fromTo(
      overlay,
      { scaleY: 1, transformOrigin: 'top' },
      { scaleY: 0, duration: 1.1, ease: 'expo.inOut' }
    );
  }

  if (img) {
    tl.fromTo(
      img,
      { scale: 1.15, filter: 'blur(8px)' },
      { scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' },
      0.2
    );
  }

  return tl;
}
