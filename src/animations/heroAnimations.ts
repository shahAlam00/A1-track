import gsap from 'gsap';

export interface HeroAnimationRefs {
  bgImageRef: HTMLElement | null;
  eyebrowRef: HTMLElement | null;
  headingRef: HTMLElement | null;
  descRef: HTMLElement | null;
  ctaRef: HTMLElement | null;
  statsRef: HTMLElement | null;
}

export function animateHero(refs: HeroAnimationRefs) {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 1 },
  });

  // Initial states
  if (refs.bgImageRef) {
    tl.fromTo(
      refs.bgImageRef,
      { scale: 1.12, opacity: 0.2 },
      { scale: 1.0, opacity: 0.65, duration: 2.2, ease: 'power2.out' },
      0
    );
  }

  if (refs.eyebrowRef) {
    tl.fromTo(
      refs.eyebrowRef,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      0.3
    );
  }

  if (refs.headingRef) {
    const lines = refs.headingRef.querySelectorAll('.hero-line');
    if (lines.length > 0) {
      tl.fromTo(
        lines,
        { y: 60, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.1,
          stagger: 0.15,
          ease: 'power4.out',
        },
        0.45
      );
    } else {
      tl.fromTo(
        refs.headingRef,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0.45
      );
    }
  }

  if (refs.descRef) {
    tl.fromTo(
      refs.descRef,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      0.75
    );
  }

  if (refs.ctaRef) {
    tl.fromTo(
      refs.ctaRef.children,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.8 },
      0.9
    );
  }

  if (refs.statsRef) {
    tl.fromTo(
      refs.statsRef.children,
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 1 },
      1.05
    );
  }

  return tl;
}
