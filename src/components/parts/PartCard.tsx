import React from 'react';
import { PartItem } from '../../data/parts';
import { Button } from '../common/Button';
import { Check, ShieldCheck, Clock, Gauge } from 'lucide-react';

interface PartCardProps {
  part: PartItem;
  onOpenQuote: (partName: string) => void;
}

export const PartCard: React.FC<PartCardProps> = ({ part, onOpenQuote }) => {
  return (
    <div className="group bg-carbon-900 border border-white/10 hover:border-racing-500/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl clip-chamfer">
      {/* Top Image & Condition Badge */}
      <div className="relative h-60 overflow-hidden bg-carbon-950 border-b border-white/10">
        <img
          src={part.image}
          alt={part.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/90 via-transparent to-transparent pointer-events-none" />

        {/* Condition Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 bg-carbon-950/90 border border-white/15 text-[10px] font-mono uppercase tracking-wider text-racing-400 font-semibold backdrop-blur-md">
            {part.condition}
          </span>
        </div>

        {/* Warranty Tag */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 bg-carbon-950/90 border border-white/15 text-[10px] font-mono text-metallic-300 backdrop-blur-md flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-racing-500" />
            {part.warranty}
          </span>
        </div>

        {/* Price Range Display */}
        <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between">
          <span className="font-mono text-xs text-metallic-400">ESTIMATED PRICE</span>
          <span className="font-display font-black text-xl text-white tracking-tight">
            {part.priceRange}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight group-hover:text-racing-400 transition-colors mb-2">
            {part.name}
          </h3>

          <p className="text-xs text-metallic-400 leading-relaxed line-clamp-3 mb-6 font-normal">
            {part.description}
          </p>

          {/* Technical Specs List */}
          <div className="space-y-2 py-3 border-y border-white/5 font-mono text-xs mb-6">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-metallic-500">BENCH SPEC:</span>
              <span className="text-metallic-200 font-semibold">{part.specs.oemStandard}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-metallic-500">MILEAGE RANGE:</span>
              <span className="text-metallic-200 font-semibold">{part.specs.mileageTier}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-metallic-500">DYNO BENCH TEST:</span>
              <span className={part.specs.dynoTested ? 'text-racing-400 font-bold' : 'text-metallic-400'}>
                {part.specs.dynoTested ? 'VERIFIED PASS' : 'STATIC CERTIFIED'}
              </span>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-1.5 mb-6">
            {part.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-mono text-metallic-300">
                <Check className="w-3.5 h-3.5 text-racing-500 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Button
            onClick={() => onOpenQuote(part.name)}
            variant="primary"
            size="md"
            className="w-full"
            icon={true}
          >
            GET EXACT QUOTE
          </Button>
        </div>
      </div>
    </div>
  );
};
