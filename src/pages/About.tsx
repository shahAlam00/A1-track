import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { IMAGES } from '../data/images';
import { COMPANY_CONTACT } from '../data/navigation';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { ShieldCheck, Truck, Users, Award, Calendar, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();

  const timelineMilestones = [
    {
      year: '1995',
      title: 'FOUNDED IN KING, NC',
      description:
        'Established by master powertrain technicians dedicated to salvaging, testing, and providing certified OEM mechanical components to the regional Carolina market.',
      image: IMAGES.facility.workshop,
      stats: '1 Facility • 3 Technicians',
    },
    {
      year: '2008',
      title: 'INVENTORY EXPANSION & BENCH LABS',
      description:
        'Constructed custom computerized engine dyno testing bays and transmission hydraulic pressure rigs, setting an industry-first standard for recycled OEM validation.',
      image: IMAGES.facility.diagnostics,
      stats: '50,000+ Parts In Inventory',
    },
    {
      year: '2016',
      title: 'NATIONWIDE FREIGHT LOGISTICS',
      description:
        'Partnered with FedEx Freight and premier LTL logistics carriers to offer 2–4 business day commercial delivery to all 50 continental US states.',
      image: IMAGES.facility.logistics,
      stats: '50 States • Crated Shipping',
    },
    {
      year: 'TODAY',
      title: '45,000+ VERIFIED CUSTOMERS',
      description:
        'Operating an expansive digital catalog of over 500,000 certified parts, delivering millions in cost savings to individual owners, fleets, and auto repair shops.',
      image: IMAGES.hero.engineBay,
      stats: '45,000+ Satisfied Drivers',
    },
  ];

  const values = [
    {
      num: '01',
      title: 'QUALITY FIRST',
      subtitle: 'SURGICAL BENCH VERIFICATION',
      description:
        'We do not sell unchecked scrap. Every engine is compression-tested and borescoped; every transmission is pressure-tested under simulated road torque. If it does not perform to strict factory tolerances, it does not leave our King, NC facility.',
      image: IMAGES.categories.engine.cover,
      tags: ['Zero Sludge Certified', 'Cylinder Leakdown < 5%', 'OEM Tolerance Guarantee'],
    },
    {
      num: '02',
      title: 'FAST DELIVERY',
      subtitle: 'HEAVY FREIGHT LINEHAUL NETWORK',
      description:
        'A vehicle on jack stands costs you money and peace of mind. We process, palletize, and strap assemblies into steel-banded crates within 24 hours, utilizing specialized commercial liftgate linehaul partners for prompt delivery.',
      image: IMAGES.facility.logistics,
      tags: ['Crated & Palletized', 'Liftgate Service Included', 'Live GPS Tracking Code'],
    },
    {
      num: '03',
      title: 'EXPERT SUPPORT',
      subtitle: 'TALK DIRECTLY TO TECHNICIANS',
      description:
        'No foreign call centers or generic scripts. When you dial +1 (502) 385-4318, you speak with trained automotive parts specialists who understand bellhousing patterns, VIN digit decoders, and wiring harness compatibility.',
      image: IMAGES.facility.diagnostics,
      tags: ['ASE Certified Staff', '24/7 Hotline Coverage', 'VIN-Verified Match Guarantee'],
    },
  ];

  return (
    <div className="w-full bg-[#050608]">
      {/* 1. Cinematic Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={IMAGES.facility.vintageHeritage}
            alt="A1 Auto King precision workshop"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-radial-vignette" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-carbon-950/70 to-[#050608]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-900/90 border border-white/15 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-racing-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-bold">
              HERITAGE & CREDIBILITY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white uppercase leading-[0.95]">
            BUILT ON EXPERIENCE. <br />
            <span className="text-racing-500">DRIVEN BY TRUST.</span>
          </h1>

          <p className="mt-8 text-base sm:text-xl text-metallic-300 max-w-2xl font-normal leading-relaxed">
            Since 1995, A1 Auto King has led the automotive recycling industry with an uncompromised commitment to engineering rigor, fair pricing, and customer-first service.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-8 border-y border-white/10 py-5 font-mono text-xs text-metallic-400">
            <div>
              <span className="text-white font-bold text-lg block">1995</span>
              <span>YEAR FOUNDED</span>
            </div>
            <div className="border-l border-white/10 pl-8">
              <span className="text-white font-bold text-lg block">28+ YEARS</span>
              <span>INDUSTRY LEADERSHIP</span>
            </div>
            <div className="border-l border-white/10 pl-8">
              <span className="text-white font-bold text-lg block">500,000+</span>
              <span>PARTS DELIVERED</span>
            </div>
            <div className="border-l border-white/10 pl-8">
              <span className="text-white font-bold text-lg block">45,000+</span>
              <span>CUSTOMERS SERVED</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Story & Heritage Timeline */}
      <section className="py-24 md:py-32 bg-carbon-900 relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR TIMELINE"
            eyebrow="28 YEARS OF EXCELLENCE"
            title="THE A1 AUTO KING JOURNEY"
            subtitle="From a local family-owned dismantling yard to one of the most respected certified powertrain distributors in North America."
          />

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-[2px] before:bg-white/10">
            {timelineMilestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in Center */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-none bg-carbon-950 border-2 border-racing-500 flex items-center justify-center text-white font-mono font-bold text-xs shadow-lg shadow-racing-500/20 z-10">
                    <Calendar className="w-5 h-5 text-racing-500" />
                  </div>

                  {/* Content Block */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <div className="bg-carbon-950 border border-white/10 p-8 clip-chamfer hover:border-racing-500/60 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-2xl font-black text-racing-500 tracking-wider">
                          {item.year}
                        </span>
                        <span className="font-mono text-[11px] text-metallic-400 uppercase">
                          {item.stats}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-metallic-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Block */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <div className="h-64 overflow-hidden border border-white/10 bg-carbon-950 clip-chamfer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Values (3 Large Sections) */}
      <section className="py-24 md:py-32 bg-[#050608] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR CORE PRINCIPLES"
            eyebrow="PILLARS OF OPERATION"
            title="PRECISION PILLARS"
            subtitle="Three non-negotiable principles that drive every engine test, transmission crate, and customer conversation."
          />

          <div className="space-y-16">
            {values.map((v, i) => (
              <div
                key={v.num}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-carbon-900 border border-white/10 p-8 sm:p-12 clip-chamfer ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`lg:col-span-6 space-y-6 ${i % 2 === 1 ? 'lg:col-start-7' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-black text-racing-500">{v.num}</span>
                    <span className="w-8 h-[2px] bg-racing-500" />
                    <span className="font-mono text-xs text-metallic-400 uppercase tracking-widest">
                      {v.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
                    {v.title}
                  </h3>

                  <p className="text-metallic-300 text-base leading-relaxed">
                    {v.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {v.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-carbon-800 border border-white/10 text-xs font-mono text-metallic-300 uppercase"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-racing-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="h-80 sm:h-96 overflow-hidden border border-white/10 bg-carbon-950 clip-chamfer">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final About CTA */}
      <section className="py-24 bg-carbon-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-bold block mb-4">
            LET'S KEEP YOUR VEHICLE MOVING
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight mb-6">
            EXPERIENCE THE A1 STANDARD.
          </h2>
          <p className="text-metallic-300 text-lg max-w-xl mx-auto mb-8 font-normal">
            Whether you need a single replacement alternator or a crate-shipped V8 engine assembly, our team is ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={() => openQuote()}
              variant="primary"
              size="lg"
              icon={true}
            >
              GET YOUR FREE QUOTE
            </Button>
            <a
              href={`tel:${COMPANY_CONTACT.phone.raw}`}
              className="inline-flex items-center gap-2 px-6 py-4 bg-carbon-800 border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-carbon-700 transition-colors"
            >
              <span>Call Direct: {COMPANY_CONTACT.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
