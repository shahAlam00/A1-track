import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CATEGORIES_DATA } from '../../data/parts';
import { PartsHero } from '../../components/parts/PartsHero';
import { PartCard } from '../../components/parts/PartCard';
import { CategoryNavigation } from '../../components/parts/CategoryNavigation';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { Search } from 'lucide-react';

export const SteeringPage: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();
  const category = CATEGORIES_DATA['steering'];
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
              badge="STEERING CATALOG"
              eyebrow="TILT & POWER ASSIST"
              title="STEERING COLUMNS & LINKAGES"
              subtitle="Collision-free tested steering columns, intermediate shafts, clocksprings, and rack & pinions."
              className="mb-0 md:mb-0"
            />

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search steering parts or model..."
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
                No standard steering part matches "{searchTerm}". Our catalog contains thousands of interchange units.
              </p>
              <Button onClick={() => openQuote(`Steering Request: ${searchTerm}`)} variant="primary">
                REQUEST CUSTOM STEERING QUOTE
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Safety Certification Info */}
      <section className="py-20 bg-carbon-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="SAFETY COMPLIANCE"
            eyebrow="CRITICAL COMPONENT PROTOCOL"
            title="100% COLLISION-FREE ASSURANCE"
            subtitle="Steering columns are essential driver safety equipment. We never harvest from structural collision write-offs."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-metallic-300">
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <div className="text-racing-500 font-bold text-sm mb-2">COLLAPSIBLE CAGE INSPECTION</div>
              <p className="leading-relaxed">
                Energy-absorbing mesh cages and shear pins are optically inspected to ensure the column has never experienced frontal deceleration forces.
              </p>
            </div>
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <div className="text-racing-500 font-bold text-sm mb-2">EPS MOTOR TEST BENCH</div>
              <p className="leading-relaxed">
                Electronic Power Steering (EPS) assist torque motors and control modules are connected to CAN-bus diagnostics to confirm zero internal DTC faults.
              </p>
            </div>
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <div className="text-racing-500 font-bold text-sm mb-2">IGNITION LOCK & TUMBLER</div>
              <p className="leading-relaxed">
                Key cylinders, anti-theft immobilizer antennas, and ignition switches operate freely with smooth mechanical engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
