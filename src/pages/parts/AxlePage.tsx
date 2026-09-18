import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CATEGORIES_DATA } from '../../data/parts';
import { PartsHero } from '../../components/parts/PartsHero';
import { PartCard } from '../../components/parts/PartCard';
import { CategoryNavigation } from '../../components/parts/CategoryNavigation';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { Search } from 'lucide-react';

export const AxlePage: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();
  const category = CATEGORIES_DATA['axle'];
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
              badge="AXLE & DRIVELINE"
              eyebrow="4WD & RWD HOUSINGS"
              title="EXPLORE AXLE ASSEMBLIES"
              subtitle="Carrier housings, limited slip differentials, and heavy gauge CV drive axles tested for zero runout."
              className="mb-0 md:mb-0"
            />

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search axle, ratio or model..."
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
                No standard axle matches "{searchTerm}". Inquire for specific gear ratio (e.g. 3.73, 4.10) requests.
              </p>
              <Button onClick={() => openQuote(`Axle Request: ${searchTerm}`)} variant="primary">
                REQUEST CUSTOM AXLE QUOTE
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="py-20 bg-carbon-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="BENCHMARK VALUE"
            eyebrow="PRICE SAVINGS"
            title="AXLE & CARRIER PRICING GUIDE"
            subtitle="Commercial fleet savings and direct-to-consumer value for complete drive axle systems."
          />

          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 text-left font-mono text-xs">
              <thead className="bg-carbon-900 border-b border-white/10 text-white">
                <tr>
                  <th className="p-4 uppercase tracking-wider">Axle Component</th>
                  <th className="p-4 uppercase tracking-wider">A1 Certified Price</th>
                  <th className="p-4 uppercase tracking-wider">New OEM Dealer List</th>
                  <th className="p-4 uppercase tracking-wider">Net Savings</th>
                  <th className="p-4 uppercase tracking-wider">Backlash Tolerance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-carbon-950 text-metallic-300">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Front Axle Assembly (4WD/AWD)</td>
                  <td className="p-4 text-racing-400 font-bold">$400 – $1,200</td>
                  <td className="p-4 text-metallic-500 line-through">$1,800 – $3,200</td>
                  <td className="p-4 text-emerald-400 font-bold">Save $1,400 – $2,000</td>
                  <td className="p-4">0.006" – 0.010" Tested</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Rear Axle Assembly (Full Carrier)</td>
                  <td className="p-4 text-racing-400 font-bold">$500 – $1,500</td>
                  <td className="p-4 text-metallic-500 line-through">$2,200 – $4,500</td>
                  <td className="p-4 text-emerald-400 font-bold">Save $1,700 – $3,000</td>
                  <td className="p-4">Straightness &lt; 0.003"</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">CV Axle Half-Shaft (Left/Right)</td>
                  <td className="p-4 text-racing-400 font-bold">$80 – $250</td>
                  <td className="p-4 text-metallic-500 line-through">$280 – $650</td>
                  <td className="p-4 text-emerald-400 font-bold">Save $200 – $400</td>
                  <td className="p-4">Tear-Free Neoprene Boot</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">Differential Carrier (Posi / Locker)</td>
                  <td className="p-4 text-racing-400 font-bold">$600 – $2,000</td>
                  <td className="p-4 text-metallic-500 line-through">$2,400 – $5,200</td>
                  <td className="p-4 text-emerald-400 font-bold">Save $1,800 – $3,200</td>
                  <td className="p-4">&gt; 85% Clutch Life</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
