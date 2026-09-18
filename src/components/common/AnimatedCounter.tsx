import React, { useEffect, useRef } from 'react';
import { animateCounter } from '../../animations/counterAnimations';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const anim = animateCounter(el, value, {
      duration,
      prefix,
      suffix,
    });

    return () => {
      anim?.kill();
    };
  }, [value, prefix, suffix, duration]);

  return (
    <span ref={spanRef} className={`font-display font-black tracking-tight ${className}`}>
      {prefix}0{suffix}
    </span>
  );
};
