import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { PARTS_DROPDOWN } from '../../data/navigation';
import { ArrowUpRight } from 'lucide-react';

interface PartsInventoryGridProps {
  onOpenQuote: (category?: string) => void;
}

export const PartsInventoryGrid: React.FC<PartsInventoryGridProps> = () => {
  return (
    <section className="py-24 md:py-32 bg-carbon-900 relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-carbon-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="PARTS INVENTORY"
            eyebrow="OEM COMPATIBILITY CATALOG"
            title="BUILT FOR EVERY VEHICLE."
            subtitle="Precision-certified mechanical and powertrain components for domestic, European, and Asian vehicles."
            className="mb-0 md:mb-0"
          />

          <Link
            to="/parts/engine"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white hover:text-racing-400 transition-colors border-b border-racing-500 pb-1 self-start md:self-auto"
          >
            <span>EXPLORE FULL CATALOG</span>
            <ArrowUpRight className="w-4 h-4 text-racing-500" />
          </Link>
        </div>

        {/* 6 High-Impact Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTS_DROPDOWN.map((cat, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <Link
                key={cat.slug}
                to={cat.href}
                data-cursor="view"
                className="group relative bg-carbon-950 border border-white/10 overflow-hidden flex flex-col h-[400px] transition-all duration-300 hover:border-racing-500 hover:-translate-y-1.5 shadow-xl"
              >
                {/* Background Image Container with Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-60"
                    loading="lazy"
                  />
                  {/* Dark Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/70 to-transparent" />
                  <div className="absolute inset-0 bg-carbon-950/40 group-hover:bg-carbon-950/20 transition-colors duration-300" />
                </div>

                {/* Top Corner Number & Badges */}
                <div className="relative z-10 p-6 flex items-start justify-between">
                  <span className="font-mono text-3xl font-black text-white/20 group-hover:text-racing-500 transition-colors duration-300 tracking-tighter">
                    {num}
                  </span>
                  <span className="px-2.5 py-1 bg-carbon-900/90 border border-white/10 font-mono text-[10px] text-racing-400 uppercase tracking-wider backdrop-blur-sm">
                    {cat.count}
                  </span>
                </div>

                {/* Bottom Content & Arrow */}
                <div className="relative z-10 mt-auto p-6 pt-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-racing-500" />
                    <span className="font-mono text-[10px] text-metallic-400 uppercase tracking-widest">
                      {cat.highlight}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight group-hover:text-racing-400 transition-colors">
                      {cat.name}
                    </h3>
                    <div className="w-10 h-10 rounded-none bg-carbon-800 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-racing-500 group-hover:bg-racing-500 text-white transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-metallic-400 line-clamp-2 leading-relaxed font-normal">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
