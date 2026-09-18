import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CATEGORIES_DATA } from '../../data/parts';
import { PartsHero } from '../../components/parts/PartsHero';
import { PartCard } from '../../components/parts/PartCard';
import { CategoryNavigation } from '../../components/parts/CategoryNavigation';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { Search } from 'lucide-react';

export const ElectricalPage: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();
  const category = CATEGORIES_DATA['electrical'];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = category.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.specs.compatibility.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full bg-[#050608]">
      <CategoryNavigation />
      <PartsHero category={category} onOpenQuote={openQuote} />

      <section className="py-16 md:py-24 bg-carbon-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              badge="ELECTRICAL CATALOG"
              eyebrow="SOLID-STATE RELIABILITY"
              title="EXPLORE ELECTRICAL & ECUS"
              subtitle="Bench-tested alternators, high-torque starters, flashed powertrain control modules, and sensors."
              className="mb-0 md:mb-0"
            />

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search module code or part..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-carbon-950 border border-white/15 px-4 py-3 pl-10 text-xs font-mono text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500"
              />
              <Search className="w-4 h-4 text-metallic-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((part) => (
              <PartCard key={part.id} part={part} onOpenQuote={openQuote} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-carbon-950 border border-white/10 p-8">
              <p className="font-mono text-sm text-metallic-400 mb-4">
                No electrical unit matches "{searchTerm}". Contact our electronics lab for module matching and virginization.
              </p>
              <Button onClick={() => openQuote(`Electrical Request: ${searchTerm}`)} variant="primary">
                REQUEST CUSTOM ELECTRICAL QUOTE
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Electronics Diagnostics Section */}
      <section className="py-20 bg-carbon-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="BENCH TESTING"
            eyebrow="OSCILLOSCOPE DIAGNOSTICS"
            title="CAN-BUS & MODULE CERTIFICATION"
            subtitle="Automotive electronics fail from internal solder cracking or voltage spikes. We bench test every module under full operational current."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-metallic-300">
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="text-racing-500 font-bold block mb-1">ALTERNATOR LOAD DUMP TEST</span>
              <p className="leading-relaxed">
                Spun up to 6,000 rotor RPM to certify steady 14.2V–14.6V regulation under continuous 160A load with diode rectifier check.
              </p>
            </div>
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="text-racing-500 font-bold block mb-1">STARTER DRAW TEST</span>
              <p className="leading-relaxed">
                Instantaneous stall amperage draw measured to ensure internal copper armature windings and solenoid contacts deliver maximum cranking torque.
              </p>
            </div>
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="text-racing-500 font-bold block mb-1">ECU OBD-II COMMUNICATION</span>
              <p className="leading-relaxed">
                Plugged into diagnostic simulator to confirm high-speed CAN network link, zero stored DTCs, and read-readiness for vehicle reprogramming.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
