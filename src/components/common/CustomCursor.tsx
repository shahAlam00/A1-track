import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const CustomCursor: React.FC = () => {
  const isTouchOrSmall = useMediaQuery('(max-width: 1024px), (pointer: coarse)');
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view' | 'cta'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isTouchOrSmall) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewElement = target.closest('[data-cursor="view"]');
      const ctaElement = target.closest('[data-cursor="cta"], button, a.btn-primary');
      const linkElement = target.closest('a, button, input, select, textarea, [role="button"]');

      if (viewElement) {
        setCursorType('view');
      } else if (ctaElement) {
        setCursorType('cta');
      } else if (linkElement) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchOrSmall, isVisible]);

  // Smooth trailing position calculation
  useEffect(() => {
    if (isTouchOrSmall || !isVisible) return;

    let animId: number;
    const follow = () => {
      setTrailerPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouchOrSmall, isVisible]);

  if (isTouchOrSmall || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Core Dot */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: cursorType === 'default' ? '6px' : '4px',
          height: cursorType === 'default' ? '6px' : '4px',
          backgroundColor: cursorType === 'cta' ? '#FFFFFF' : '#E53935',
        }}
      />

      {/* Trailing Expansion Ring / Badge */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 flex items-center justify-center font-mono font-bold uppercase tracking-widest ${
          cursorType === 'default'
            ? 'w-8 h-8 border border-white/20'
            : cursorType === 'hover'
            ? 'w-12 h-12 border border-racing-500/60 bg-racing-500/10'
            : cursorType === 'view'
            ? 'w-16 h-16 bg-carbon-950/90 border border-racing-500 text-[10px] text-white backdrop-blur-sm'
            : 'w-14 h-14 bg-racing-500/20 border-2 border-racing-500'
        }`}
        style={{
          left: `${trailerPos.x}px`,
          top: `${trailerPos.y}px`,
        }}
      >
        {cursorType === 'view' && <span>VIEW</span>}
      </div>
    </div>
  );
};
