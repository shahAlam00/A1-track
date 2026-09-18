import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { IMAGES } from '../../data/images';
import { COMPANY_CONTACT } from '../../data/navigation';
import { animateHero } from '../../animations/heroAnimations';
import { Phone, ArrowDown, Shield, Users, Layers, Truck } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = animateHero({
      bgImageRef: bgImageRef.current,
      eyebrowRef: eyebrowRef.current,
      headingRef: headingRef.current,
      descRef: descRef.current,
      ctaRef: ctaRef.current,
      statsRef: statsRef.current,
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Subtle mouse movement parallax for floating cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!statsRef.current) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) * 0.015;
    const moveY = (clientY - centerY) * 0.015;

    const cards = statsRef.current.querySelectorAll('.floating-card');
    cards.forEach((card, idx) => {
      const factor = (idx + 1) * 0.7;
      (card as HTMLElement).style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#050608] border-b border-white/10"
    >
      {/* High-res Cinematic Engine Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src={IMAGES.hero.engineBay}
          alt="High-performance precision engine bay"
          className="w-full h-full object-cover object-center will-change-transform opacity-40 scale-110"
          priority-fetch="high"
        />

        {/* Cinematic Vignette, Radial Shadows & Subtle Carbon Grid */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-fine-grid opacity-20 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col items-center text-center">
        {/* Eyebrow / Technical Tag */}
        <div
          ref={eyebrowRef}
          className="flex items-center gap-2 px-3 py-1 bg-carbon-900/80 border border-white/15 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-racing-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-bold">
            A1 AUTO KING
          </span>
          <span className="text-metallic-500 text-xs">|</span>
          <span className="font-mono text-xs uppercase tracking-widest text-metallic-300">
            CERTIFIED USED AUTO PARTS
          </span>
        </div>

        {/* Large Cinematic Headline (revealed line by line) */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white uppercase leading-[0.95] max-w-5xl"
        >
          <div className="overflow-hidden">
            <span className="hero-line block">QUALITY PARTS.</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line block text-metallic-300">WITHOUT THE</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line block text-racing-500">PREMIUM PRICE.</span>
          </div>
        </h1>

        {/* Supporting Copy */}
        <p
          ref={descRef}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-metallic-300 max-w-2xl font-normal leading-relaxed"
        >
          Save <span className="text-white font-semibold underline decoration-racing-500 underline-offset-4">$100–$250 on every part</span> with our certified, dyno-tested used auto parts. Inspected by master ASE specialists with nationwide delivery.
        </p>

        {/* Call to Action Buttons & Hotline */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            onClick={() => onOpenQuote()}
            variant="primary"
            size="lg"
            magnetic={true}
            icon={true}
            className="w-full sm:w-auto text-sm tracking-wider"
          >
            GET FREE QUOTE
          </Button>

          <Link to="/parts/engine" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-sm tracking-wider"
            >
              EXPLORE PARTS
            </Button>
          </Link>

          <a
            href={`tel:${COMPANY_CONTACT.phone.raw}`}
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-carbon-900/90 border border-white/10 hover:border-racing-500/50 text-white font-mono text-xs uppercase tracking-wider transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-racing-500" />
            <span>{COMPANY_CONTACT.phone.display}</span>
          </a>
        </div>

        {/* Floating Information Badges (Desktop / Tablet) */}
        <div
          ref={statsRef}
          className="mt-16 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl pt-4"
        >
          {/* Card 1 */}
          <div className="floating-card glass-card p-4 transition-transform duration-300 hover:border-racing-500/40 text-left flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-none bg-carbon-800 border border-white/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-racing-500" />
            </div>
            <div>
              <div className="text-lg font-display font-black text-white tracking-tight leading-none">
                45,000+
              </div>
              <div className="text-[11px] font-mono text-metallic-400 uppercase tracking-wider mt-0.5">
                HAPPY CUSTOMERS
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="floating-card glass-card p-4 transition-transform duration-300 hover:border-racing-500/40 text-left flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-none bg-carbon-800 border border-white/10 flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-racing-500" />
            </div>
            <div>
              <div className="text-lg font-display font-black text-white tracking-tight leading-none">
                500K+
              </div>
              <div className="text-[11px] font-mono text-metallic-400 uppercase tracking-wider mt-0.5">
                PARTS AVAILABLE
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="floating-card glass-card p-4 transition-transform duration-300 hover:border-racing-500/40 text-left flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-none bg-carbon-800 border border-white/10 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-racing-500" />
            </div>
            <div>
              <div className="text-lg font-display font-black text-white tracking-tight leading-none">
                NATIONWIDE
              </div>
              <div className="text-[11px] font-mono text-metallic-400 uppercase tracking-wider mt-0.5">
                DELIVERY (50 STATES)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-metallic-500 hidden md:flex flex-col items-center gap-1 font-mono text-[10px] tracking-widest pointer-events-none opacity-60">
        <span>SCROLL FOR CATALOG</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-racing-500" />
      </div>
    </section>
  );
};
