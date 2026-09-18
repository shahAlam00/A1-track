import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}>
      {/* Eyebrow & Mechanical Badge */}
      {(eyebrow || badge) && (
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          {badge && (
            <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-semibold tracking-wider text-racing-500 bg-racing-500/10 border border-racing-500/20 uppercase rounded">
              {badge}
            </span>
          )}
          {eyebrow && (
            <span className="text-xs font-mono font-medium tracking-widest text-metallic-400 uppercase">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {/* Large Cinematic Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.05]">
        {title}
      </h2>

      {/* Supporting Text */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-metallic-400 leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}

      {/* Subtle Racing Red Accent Line */}
      <div className={`mt-6 h-[2px] w-12 bg-racing-500 ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
};
