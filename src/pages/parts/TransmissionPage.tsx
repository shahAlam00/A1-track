import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CATEGORIES_DATA } from '../../data/parts';
import { PartsHero } from '../../components/parts/PartsHero';
import { PartCard } from '../../components/parts/PartCard';
import { CategoryNavigation } from '../../components/parts/CategoryNavigation';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { Search } from 'lucide-react';

export const TransmissionPage: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();
  const category = CATEGORIES_DATA['transmission'];
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

      {/* Catalog & Filter Section */}
      <section className="py-16 md:py-24 bg-carbon-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              badge="TRANSMISSION CATALOG"
              eyebrow="AUTOMATIC, MANUAL & CVT"
              title="EXPLORE TRANSMISSION SYSTEMS"
              subtitle="Factory-tested complete transmissions, torque converters, and transfer case assemblies with verified shift tolerances."
              className="mb-0 md:mb-0"
            />

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search transmission code or model..."
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
                No standard transmission matches "{searchTerm}". Contact dispatch for custom Hollander cross-reference.
              </p>
              <Button onClick={() => openQuote(`Transmission Request: ${searchTerm}`)} variant="primary">
                REQUEST TRANSMISSION CODE MATCH
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Reference Pricing Table */}
      <section className="py-20 bg-carbon-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TRANSPARENT VALUE"
            eyebrow="PRICE BENCHMARKS"
            title="TRANSMISSION REFERENCE PRICING"
            subtitle="Save up to 60% compared to brand-new dealer crate prices with our certified low-mileage units."
          />

          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 text-left font-mono text-xs">
              <thead className="bg-carbon-900 border-b border-white/10 text-white">
                <tr>
                  <th className="p-4 uppercase tracking-wider">Component Type</th>
                  <th className="p-4 uppercase tracking-wider">A1 Auto King Certified Price</th>
                  <th className="p-4 uppercase tracking-wider">Average Dealership Price</th>
                  <th className="p-4 uppercase tracking-wider">Typical Customer Savings</th>
                  <th className="p-4 uppercase tracking-wider">Standard Warranty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-carbon-950 text-metallic-300">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Complete Transmission Assembly</td>
                  <td className="p-4 text-racing-400 font-bold">$1,500 – $4,000</td>
                  <td className="p-4 text-metallic-500 line-through">$4,500 – $8,500</td>
                  <td className="p-4 text-emerald-400 font-bold">Save $2,000 – $4,500</td>
                  <td className="p-4">1–3 Year Nationwide</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Torque Converter (Balanced)</td>
                  <td className="p-4 text-racing-400 font-bold">$200 – $600</td>
                  <td className="p-4 text-metallic-500 line-through">$650 – $1,200</td>
                  <td className="p-4 text-emerald-400 font-bold">Save $450 – $600</td>
                  <td className="p-4">1 Year Standard</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Clutch Kit & Flywheel</td>
                  <td className="p-4 text-racing-400 font-bold">$150 – $500</td>
                  <td className="p-4 text-metallic-500 line-through">$450 – $950</td>
                  <td className="p-4 text-emerald-400 font-bold">Save $300 – $450</td>
                  <td className="p-4">90-Day Standard</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Gear Set & Transfer Case</td>
                  <td className="p-4 text-racing-400 font-bold">$300 – $800</td>
                  <td className="p-4 text-metallic-500 line-through">$850 – $1,800</td>
                  <td className="p-4 text-emerald-400 font-bold">Save $550 – $1,000</td>
                  <td className="p-4">1 Year Standard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
