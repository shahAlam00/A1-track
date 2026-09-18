import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  items?: string[];
  speed?: number; // seconds for full cycle
}

const DEFAULT_ITEMS = [
  'PREMIUM AUTO PARTS',
  'CERTIFIED QUALITY',
  'NATIONWIDE DELIVERY',
  '45,000+ CUSTOMERS',
  'A1 AUTO KING',
  '28+ YEARS EXPERIENCE',
  'OEM GRADE VERIFICATION',
  '24/7 SPECIALIST SUPPORT',
];

export const Marquee: React.FC<MarqueeProps> = ({
  items = DEFAULT_ITEMS,
  speed = 30,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate list items visually for infinite loop
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed]);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden border-y border-white/10 bg-carbon-900/60 py-4 select-none backdrop-blur-sm cursor-default"
    >
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-carbon-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-carbon-950 to-transparent z-10 pointer-events-none" />

      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {/* Double render for smooth infinite seam */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="font-display font-bold text-sm tracking-widest text-metallic-300 uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-racing-500 shadow-[0_0_8px_#E53935]" />
          </div>
        ))}
      </div>
    </div>
  );
};
