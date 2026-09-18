import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { VEHICLE_BRANDS, VehicleBrand } from '../../data/brands';
import { Check } from 'lucide-react';

interface VehicleBrandsProps {
  onOpenQuote: (brandName?: string) => void;
}

export const VehicleBrands: React.FC<VehicleBrandsProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<'All' | 'Domestic' | 'European' | 'Asian'>('All');

  const filteredBrands =
    filter === 'All'
      ? VEHICLE_BRANDS
      : VEHICLE_BRANDS.filter((b) => b.category === filter);

  return (
    <section className="py-24 md:py-32 bg-carbon-900 relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-fine-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="OEM FITMENT ASSURANCE"
            eyebrow="ENGINEERED COMPATIBILITY"
            title="WE SERVICE THE BRANDS YOU DRIVE."
            subtitle="Extensive inventory of low-mileage tested powertrains and assemblies for all leading American, European, and Asian manufacturers."
            className="mb-0 md:mb-0"
          />

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs">
            {(['All', 'Domestic', 'European', 'Asian'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 uppercase tracking-wider transition-colors border ${
                  filter === cat
                    ? 'bg-racing-500 text-white border-racing-500'
                    : 'bg-carbon-950 text-metallic-400 border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 18 Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredBrands.map((brand: VehicleBrand) => (
            <div
              key={brand.name}
              onClick={() => onOpenQuote(`${brand.name} Parts`)}
              className="group relative bg-carbon-950/80 border border-white/10 p-5 flex flex-col justify-between h-36 transition-all duration-300 hover:border-racing-500/80 hover:bg-carbon-850 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              {/* Top Row: Country / Code */}
              <div className="flex items-center justify-between font-mono text-[10px] text-metallic-500">
                <span>{brand.code}</span>
                <span className="uppercase">{brand.origin}</span>
              </div>

              {/* Brand Name */}
              <div>
                <h4 className="font-display font-black text-lg text-white group-hover:text-racing-400 transition-colors uppercase tracking-tight">
                  {brand.name}
                </h4>
                <p className="font-mono text-[10px] text-metallic-400 truncate mt-0.5">
                  {brand.popularModels}
                </p>
              </div>

              {/* Bottom Subtle Red Line & Action */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="font-mono text-[9px] text-metallic-500 uppercase">IN STOCK</span>
                <span className="text-[10px] font-mono text-racing-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                  QUOTE <Check className="w-2.5 h-2.5" />
                </span>
              </div>

              {/* Bottom Animated Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-racing-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
