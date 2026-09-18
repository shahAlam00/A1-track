import React from 'react';
import { CategoryInfo } from '../../data/parts';
import { Button } from '../common/Button';
import { ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY_CONTACT } from '../../data/navigation';

interface PartsHeroProps {
  category: CategoryInfo;
  onOpenQuote: (category?: string) => void;
}

export const PartsHero: React.FC<PartsHeroProps> = ({ category, onOpenQuote }) => {
  return (
    <div className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10 bg-carbon-950">
      {/* Background High-res Category Imagery */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={category.heroImage}
          alt={category.title}
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-radial-vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/70 to-carbon-950/80" />
        <div className="absolute inset-0 bg-fine-grid opacity-20 pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">
        {/* Breadcrumb Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-900/90 border border-white/15 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-racing-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-bold">
            OEM CATALOG
          </span>
          <span className="text-metallic-500 text-xs">/</span>
          <span className="font-mono text-xs uppercase tracking-widest text-metallic-300">
            {category.shortTitle}
          </span>
        </div>

        {/* Large Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-[1.0] max-w-4xl">
          {category.tagline}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-metallic-300 max-w-2xl font-normal leading-relaxed">
          {category.description}
        </p>

        {/* 3 Telemetry Spec Tags */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl w-full border-y border-white/10 py-4 font-mono text-xs">
          <div>
            <span className="text-metallic-500 block uppercase tracking-wider text-[10px]">LIVE INVENTORY</span>
            <span className="text-white font-bold text-base sm:text-lg">{category.stats.inStock}</span>
          </div>
          <div className="border-x border-white/10">
            <span className="text-metallic-500 block uppercase tracking-wider text-[10px]">BENCH TEST RATE</span>
            <span className="text-racing-400 font-bold text-base sm:text-lg">{category.stats.testedRate}</span>
          </div>
          <div>
            <span className="text-metallic-500 block uppercase tracking-wider text-[10px]">OEM WARRANTY</span>
            <span className="text-white font-bold text-base sm:text-lg">{category.stats.warrantyMonths}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button
            onClick={() => onOpenQuote(category.title)}
            variant="primary"
            size="lg"
            icon={true}
          >
            REQUEST {category.shortTitle.toUpperCase()} QUOTE
          </Button>

          <a
            href={`tel:${COMPANY_CONTACT.phone.raw}`}
            className="inline-flex items-center gap-2 px-6 py-4 bg-carbon-900 border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-carbon-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-racing-500" />
            <span>Speak With Powertrain Tech</span>
          </a>
        </div>
      </div>
    </div>
  );
};
