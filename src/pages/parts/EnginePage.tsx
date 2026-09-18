import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CATEGORIES_DATA } from '../../data/parts';
import { PartsHero } from '../../components/parts/PartsHero';
import { PartCard } from '../../components/parts/PartCard';
import { CategoryNavigation } from '../../components/parts/CategoryNavigation';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { Search, ShieldCheck, CheckCircle2, Wrench } from 'lucide-react';

export const EnginePage: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();
  const category = CATEGORIES_DATA['engine'];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = category.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.specs.compatibility.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full bg-[#050608]">
      {/* Category Navigation Bar */}
      <CategoryNavigation />

      {/* Hero */}
      <PartsHero category={category} onOpenQuote={openQuote} />

      {/* Catalog & Filter Section */}
      <section className="py-16 md:py-24 bg-carbon-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Live Filter Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              badge="ENGINE INVENTORY"
              eyebrow="IN STOCK & TESTED"
              title="EXPLORE ENGINE ASSEMBLIES"
              subtitle="Browse our current stock of certified complete engines, long blocks, and short blocks with nationwide warranty coverage."
              className="mb-0 md:mb-0"
            />

            {/* Live Filter Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search engine code or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-carbon-950 border border-white/15 px-4 py-3 pl-10 text-xs font-mono text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500"
              />
              <Search className="w-4 h-4 text-metallic-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Parts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((part) => (
              <PartCard key={part.id} part={part} onOpenQuote={openQuote} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-carbon-950 border border-white/10 p-8">
              <p className="font-mono text-sm text-metallic-400 mb-4">
                No standard engine matches "{searchTerm}". However, our yard network stocks 500,000+ parts.
              </p>
              <Button onClick={() => openQuote(`Custom Engine Request: ${searchTerm}`)} variant="primary">
                REQUEST CUSTOM ENGINE QUOTE
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Technical Diagnostic Protocols */}
      <section className="py-20 bg-carbon-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="BENCH PROTOCOLS"
            eyebrow="ENGINEERING QUALITY CONTROL"
            title="HOW WE TEST EVERY ENGINE"
            subtitle="Before any engine is palletized, it passes our 4-point mechanical validation protocol."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="font-mono text-2xl font-black text-racing-500">01</span>
              <h4 className="font-display font-bold text-lg text-white uppercase mt-2 mb-2">
                Compression Test
              </h4>
              <p className="text-xs text-metallic-400 leading-relaxed font-sans">
                Each cylinder is cranked under starter RPM to verify healthy combustion seal within 5% variance across all cylinders.
              </p>
            </div>

            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="font-mono text-2xl font-black text-racing-500">02</span>
              <h4 className="font-display font-bold text-lg text-white uppercase mt-2 mb-2">
                Cylinder Leak-Down
              </h4>
              <p className="text-xs text-metallic-400 leading-relaxed font-sans">
                Pressurized air is applied to TDC to check intake valves, exhaust valves, and piston rings for zero abnormal blow-by.
              </p>
            </div>

            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="font-mono text-2xl font-black text-racing-500">03</span>
              <h4 className="font-display font-bold text-lg text-white uppercase mt-2 mb-2">
                Borescope Camera
              </h4>
              <p className="text-xs text-metallic-400 leading-relaxed font-sans">
                Micro-camera inspection into spark plug ports to confirm factory cross-hatch hone and absence of cylinder scoring.
              </p>
            </div>

            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer">
              <span className="font-mono text-2xl font-black text-racing-500">04</span>
              <h4 className="font-display font-bold text-lg text-white uppercase mt-2 mb-2">
                Magnetic Drain Inspection
              </h4>
              <p className="text-xs text-metallic-400 leading-relaxed font-sans">
                Oil pan removal and high-powered magnetic sweep to ensure bearing journals and camshafts are 100% free of particulate wear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
