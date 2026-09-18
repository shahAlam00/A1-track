import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function animateCounter(
  element: HTMLElement | null,
  targetValue: number,
  options: {
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  } = {}
) {
  if (!element) return null;

  const { duration = 2, prefix = '', suffix = '', decimals = 0 } = options;
  const obj = { value: 0 };

  return gsap.to(obj, {
    value: targetValue,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
    onUpdate: () => {
      if (element) {
        const formatted = obj.value.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        element.textContent = `${prefix}${formatted}${suffix}`;
      }
    },
  });
}
