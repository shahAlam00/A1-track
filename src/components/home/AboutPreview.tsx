import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../data/images';
import { Button } from '../common/Button';
import { ShieldCheck, Award, Wrench, CheckCircle } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050608] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Cinematic Facility/Engine Imagery (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 border border-white/10 bg-carbon-900 p-2 clip-chamfer shadow-2xl">
              <img
                src={IMAGES.facility.diagnostics}
                alt="A1 Auto King technician testing powertrain assembly"
                className="w-full h-[440px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quality Assurance Seal */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-carbon-950/90 border border-white/10 backdrop-blur-md flex items-center gap-4">
                <div className="w-12 h-12 bg-racing-500/10 border border-racing-500 flex items-center justify-center flex-shrink-0 text-racing-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display font-black text-white text-sm uppercase tracking-tight">
                    CERTIFIED RECYCLING PROCESS
                  </div>
                  <div className="font-mono text-xs text-metallic-400">
                    Inspected by Master ASE Certified Technicians
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Offset Border */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-racing-500/30 pointer-events-none hidden sm:block -z-0" />
          </div>

          {/* Right: Editorial Story & Milestones (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-racing-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-bold">
                A1 AUTO KING HERITAGE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight leading-[1.05]">
              BUILT ON TRUST. <br />
              <span className="text-racing-500">DRIVEN BY QUALITY.</span>
            </h2>

            <p className="text-metallic-300 text-sm sm:text-base leading-relaxed">
              Founded in 1995 in King, North Carolina, A1 Auto King began with a single mission: to provide vehicle owners, independent mechanics, and commercial body shops with certified, reliable used auto parts without the punishing dealership markups.
            </p>

            <p className="text-metallic-400 text-sm leading-relaxed">
              Over nearly three decades, we have expanded our inventory to over 500,000 components, operating advanced computerized diagnostics, pressure testing bays, and nationwide freight distribution serving all 50 states.
            </p>

            {/* 3 Metric Milestone Blocks */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="bg-carbon-900 border border-white/10 p-4">
                <div className="text-2xl sm:text-3xl font-display font-black text-white">
                  28+
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-metallic-400 uppercase tracking-wider mt-1">
                  YEARS EXPERIENCE
                </div>
              </div>

              <div className="bg-carbon-900 border border-white/10 p-4">
                <div className="text-2xl sm:text-3xl font-display font-black text-white">
                  500K+
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-metallic-400 uppercase tracking-wider mt-1">
                  VERIFIED PARTS
                </div>
              </div>

              <div className="bg-carbon-900 border border-white/10 p-4">
                <div className="text-2xl sm:text-3xl font-display font-black text-white">
                  45K+
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-metallic-400 uppercase tracking-wider mt-1">
                  HAPPY CUSTOMERS
                </div>
              </div>
            </div>

            {/* Quality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-metallic-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-racing-500 flex-shrink-0" />
                <span>Standard 1–3 Year Warranties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-racing-500 flex-shrink-0" />
                <span>Zero Sludge & Clean Fluid Cert</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-racing-500 flex-shrink-0" />
                <span>Collision-Free Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-racing-500 flex-shrink-0" />
                <span>Direct Freight Delivery</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/about">
                <Button variant="secondary" size="md" icon={true}>
                  READ OUR FULL COMPANY STORY
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
