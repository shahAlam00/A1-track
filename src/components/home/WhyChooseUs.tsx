import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { IMAGES } from '../../data/images';
import { DollarSign, ShieldCheck, Gauge, Zap, Wrench, PackageCheck, ArrowUpRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050608] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE A1 ADVANTAGE"
          eyebrow="ENGINEERED VALUE"
          title="WHY A1 AUTO KING"
          subtitle="Quality, expertise and value engineered into every part. Discover how our rigorous verification saves you thousands over dealer pricing."
        />

        {/* Asymmetrical Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Card 1: Huge Savings (Large 7 Cols) */}
          <div className="lg:col-span-7 group relative bg-carbon-900 border border-white/10 p-8 md:p-10 overflow-hidden flex flex-col justify-between hover:border-racing-500 transition-all duration-300 hover:-translate-y-1">
            {/* Background Image with Dark Gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={IMAGES.hero.carbonDetail}
                alt="Precision automotive engineering"
                className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-carbon-900/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-carbon-800 border border-white/15 flex items-center justify-center mb-6 group-hover:border-racing-500 transition-colors">
                <DollarSign className="w-6 h-6 text-racing-500" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-semibold">
                FINANCIAL ADVANTAGE
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-2 mb-4">
                HUGE SAVINGS ($100–$250+)
              </h3>
              <p className="text-metallic-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Why pay inflated dealership list prices? Our direct-salvage acquisition and precision in-house refurbishment network passes 40%–70% direct savings straight onto vehicle owners and repair facilities.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex items-center justify-between border-t border-white/10 mt-8">
              <span className="font-mono text-xs text-metallic-400">AVERAGE REPAIR SAVINGS: 58%</span>
              <ArrowUpRight className="w-5 h-5 text-metallic-500 group-hover:text-racing-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </div>

          {/* Card 2: Quality Assured (5 Cols) */}
          <div className="lg:col-span-5 group relative bg-carbon-900 border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-racing-500 transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 bg-carbon-800 border border-white/15 flex items-center justify-center mb-6 group-hover:border-racing-500 transition-colors">
                <ShieldCheck className="w-6 h-6 text-racing-500" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-semibold">
                CERTIFIED STANDARDS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight mt-2 mb-4">
                QUALITY ASSURED & TESTED
              </h3>
              <p className="text-metallic-300 text-sm leading-relaxed">
                Every single powertrain unit undergoes multi-point cylinder leak-down tests, magnetic chip checks, and borescope imaging before being tagged Grade A.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="font-mono text-xs text-white font-bold">100% BENCH INSPECTED</span>
              <ArrowUpRight className="w-5 h-5 text-metallic-500 group-hover:text-racing-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </div>

          {/* Card 3: Low Mileage Parts (4 Cols) */}
          <div className="lg:col-span-4 group relative bg-carbon-900 border border-white/10 p-8 flex flex-col justify-between hover:border-racing-500 transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-10 h-10 bg-carbon-800 border border-white/15 flex items-center justify-center mb-5 group-hover:border-racing-500 transition-colors">
                <Gauge className="w-5 h-5 text-racing-500" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-semibold">
                VERIFIED LIFESPAN
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mt-2 mb-3">
                LOW MILEAGE ONLY
              </h3>
              <p className="text-metallic-400 text-sm leading-relaxed">
                We prioritize assemblies with verified odometer records under 65,000 miles, ensuring tens of thousands of reliable miles ahead.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="font-mono text-[11px] text-metallic-400">CARFAX ODOMETER AUDITED</span>
              <ArrowUpRight className="w-4 h-4 text-metallic-500 group-hover:text-racing-500 transition-colors" />
            </div>
          </div>

          {/* Card 4: Fast Delivery (4 Cols) */}
          <div className="lg:col-span-4 group relative bg-carbon-900 border border-white/10 p-8 flex flex-col justify-between hover:border-racing-500 transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-10 h-10 bg-carbon-800 border border-white/15 flex items-center justify-center mb-5 group-hover:border-racing-500 transition-colors">
                <Zap className="w-5 h-5 text-racing-500" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-semibold">
                EXPEDITED FREIGHT
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mt-2 mb-3">
                FAST DELIVERY
              </h3>
              <p className="text-metallic-400 text-sm leading-relaxed">
                Palletized, shrink-wrapped, and dispatched with commercial freight carriers. Direct delivery with live telemetry tracking.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="font-mono text-[11px] text-metallic-400">2–4 BUSINESS DAY LEAD TIME</span>
              <ArrowUpRight className="w-4 h-4 text-metallic-500 group-hover:text-racing-500 transition-colors" />
            </div>
          </div>

          {/* Card 5 & 6: Expert Support + Wide Selection (4 Cols) */}
          <div className="lg:col-span-4 group relative bg-carbon-900 border border-white/10 p-8 flex flex-col justify-between hover:border-racing-500 transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-10 h-10 bg-carbon-800 border border-white/15 flex items-center justify-center mb-5 group-hover:border-racing-500 transition-colors">
                <Wrench className="w-5 h-5 text-racing-500" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-semibold">
                MASTER TECHNICIANS
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mt-2 mb-3">
                EXPERT SUPPORT
              </h3>
              <p className="text-metallic-400 text-sm leading-relaxed">
                Have questions regarding engine interchange codes or sensor compatibility? Speak directly with knowledgeable automotive technicians.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="font-mono text-[11px] text-metallic-400">24/7 HOTLINE ASSISTANCE</span>
              <ArrowUpRight className="w-4 h-4 text-metallic-500 group-hover:text-racing-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
