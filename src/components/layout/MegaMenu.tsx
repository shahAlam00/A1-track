import React from 'react';
import { Link } from 'react-router-dom';
import { PARTS_DROPDOWN } from '../../data/navigation';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (category?: string) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, onOpenQuote }) => {
  if (!isOpen) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-6xl bg-carbon-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-6 md:p-8 animate-fadeIn z-50 clip-chamfer"
    >
      {/* Top Header Tag */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2 text-racing-500">
          <ShieldCheck className="w-4 h-4" />
          <span className="font-semibold tracking-wider uppercase">CERTIFIED OEM REPLACEMENT INVENTORY</span>
        </div>
        <span className="text-metallic-400">SELECT A CATEGORY TO VIEW LIVE CATALOG</span>
      </div>

      {/* 6 Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PARTS_DROPDOWN.map((cat) => (
          <Link
            key={cat.slug}
            to={cat.href}
            onClick={onClose}
            className="group relative flex gap-4 p-3.5 bg-carbon-800/60 hover:bg-carbon-700/80 border border-white/5 hover:border-racing-500/40 transition-all duration-200"
          >
            {/* Thumbnail */}
            <div className="w-20 h-20 rounded-none overflow-hidden bg-carbon-950 flex-shrink-0 relative border border-white/10">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-carbon-950/30 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-display font-bold text-sm text-white group-hover:text-racing-400 transition-colors uppercase tracking-wide truncate">
                  {cat.name}
                </h4>
                <ArrowRight className="w-3.5 h-3.5 text-metallic-500 group-hover:text-racing-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
              <p className="text-xs text-metallic-400 line-clamp-2 mt-1 font-normal">
                {cat.description}
              </p>
              <div className="flex items-center gap-2 mt-2 font-mono text-[10px] text-metallic-500">
                <span className="text-racing-500 font-semibold">{cat.count}</span>
                <span>•</span>
                <span className="text-white/70">{cat.highlight}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Quick Quote Dispatch Bar */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <span className="text-metallic-400">
          Need a part not listed here? Our nationwide warehouse network stocks over 500,000+ units.
        </span>
        <button
          onClick={() => {
            onClose();
            onOpenQuote();
          }}
          className="px-4 py-2 bg-racing-500 hover:bg-racing-600 text-white font-bold uppercase tracking-wider text-[11px] transition-colors"
        >
          DIRECT SPECIALIST INQUIRY
        </button>
      </div>
    </div>
  );
};
