import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CATEGORIES_DATA } from '../../data/parts';
import { PartsHero } from '../../components/parts/PartsHero';
import { PartCard } from '../../components/parts/PartCard';
import { CategoryNavigation } from '../../components/parts/CategoryNavigation';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { Search } from 'lucide-react';

export const SuspensionPage: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();
  const category = CATEGORIES_DATA['suspension'];
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
              badge="SUSPENSION CATALOG"
              eyebrow="RIDE COMFORT & DAMPING"
              title="EXPLORE SUSPENSION PARTS"
              subtitle="Quick-struts, forged control arms, wheel hub assemblies, and active electronic air shocks."
              className="mb-0 md:mb-0"
            />

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search suspension part or model..."
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
                No standard suspension part matches "{searchTerm}". We stock adaptive and air suspensions for luxury European models.
              </p>
              <Button onClick={() => openQuote(`Suspension Request: ${searchTerm}`)} variant="primary">
                REQUEST CUSTOM SUSPENSION QUOTE
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Air Suspension Testing Section */}
      <section className="py-20 bg-carbon-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PNEUMATIC TESTING"
            eyebrow="CHASSIS DYNAMICS"
            title="AIR SUSPENSION LEAK BENCH"
            subtitle="Air struts from Mercedes-Benz, Audi, and Land Rover are pressurized to 300 PSI in a temperature-controlled bath."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-metallic-300">
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="text-racing-500 font-bold block mb-1">STAGE 1: 300 PSI BURST CHECK</span>
              <p className="leading-relaxed">
                Pneumatic rubber bladders are charged to double standard operating pressure for 4 hours to confirm absolute zero air loss.
              </p>
            </div>
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="text-racing-500 font-bold block mb-1">STAGE 2: ADAPTIVE SOLENOID TEST</span>
              <p className="leading-relaxed">
                Active damping solenoids are commanded through soft, normal, and sport settings with oscilloscope reaction verification.
              </p>
            </div>
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="text-racing-500 font-bold block mb-1">STAGE 3: HYDRAULIC REBOUND</span>
              <p className="leading-relaxed">
                Damper velocity cycles confirm consistent resistance on compression and rebound strokes, preventing bouncy vehicle ride.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
