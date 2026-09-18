import React from 'react';
import { AnimatedCounter } from '../common/AnimatedCounter';

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-carbon-900 border-b border-white/10">
      <div className="absolute inset-0 bg-fine-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-start border-l-2 border-racing-500 pl-6 py-2">
            <div className="flex items-baseline">
              <AnimatedCounter
                value={45000}
                suffix="+"
                duration={2.2}
                className="text-4xl sm:text-5xl lg:text-6xl text-white"
              />
            </div>
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-metallic-400 mt-2">
              HAPPY CUSTOMERS
            </span>
            <p className="text-xs text-metallic-500 mt-1 font-sans">
              Verified private owners & commercial repair shops nationwide.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-start border-l-2 border-white/20 hover:border-racing-500 transition-colors pl-6 py-2">
            <div className="flex items-baseline">
              <AnimatedCounter
                value={500}
                suffix="K+"
                duration={2.0}
                className="text-4xl sm:text-5xl lg:text-6xl text-white"
              />
            </div>
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-metallic-400 mt-2">
              PARTS AVAILABLE
            </span>
            <p className="text-xs text-metallic-500 mt-1 font-sans">
              Engines, transmissions, axles & certified assemblies ready to ship.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-start border-l-2 border-white/20 hover:border-racing-500 transition-colors pl-6 py-2">
            <div className="flex items-baseline">
              <AnimatedCounter
                value={50}
                duration={1.8}
                className="text-4xl sm:text-5xl lg:text-6xl text-white"
              />
            </div>
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-metallic-400 mt-2">
              STATES SERVED
            </span>
            <p className="text-xs text-metallic-500 mt-1 font-sans">
              Direct freight linehaul logistics to all 50 US continental states.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-start border-l-2 border-white/20 hover:border-racing-500 transition-colors pl-6 py-2">
            <div className="flex items-baseline text-4xl sm:text-5xl lg:text-6xl text-white font-display font-black">
              <span>24/7</span>
            </div>
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-metallic-400 mt-2">
              CUSTOMER SUPPORT
            </span>
            <p className="text-xs text-metallic-500 mt-1 font-sans">
              Dedicated ASE technical representatives available 24/7 on hotline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
