import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  magnetic?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = false,
  magnetic = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setOffset({ x: 0, y: 0 });
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-3.5 text-sm font-semibold tracking-wide',
    lg: 'px-8 py-4 text-base font-bold tracking-wider',
  };

  const variantStyles = {
    primary:
      'bg-racing-500 hover:bg-racing-600 text-white shadow-lg shadow-racing-500/25 hover:shadow-racing-500/40 hover:-translate-y-0.5 border border-racing-400/30 active:translate-y-0',
    secondary:
      'bg-carbon-800 hover:bg-carbon-700 text-white border border-white/10 hover:border-white/25 hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-racing-500 hover:text-racing-400 active:translate-y-0',
    ghost:
      'bg-transparent hover:bg-white/5 text-metallic-300 hover:text-white',
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: magnetic ? `translate(${offset.x}px, ${offset.y}px)` : undefined,
      }}
      className={`group relative inline-flex items-center justify-center gap-2.5 uppercase font-display rounded-none transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-current relative z-10" />
      )}
    </button>
  );
};
