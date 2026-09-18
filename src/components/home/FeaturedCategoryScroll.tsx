import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../data/images';
import { Button } from '../common/Button';
import { ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface FeaturedCategory {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  ctaText: string;
}

const FEATURED_CATEGORIES: FeaturedCategory[] = [
  {
    id: 'engine',
    slug: 'engine',
    name: 'ENGINE SYSTEMS',
    subtitle: 'DYNO-VERIFIED POWERTRAIN BLOCKS',
    description:
      'From durable GM LS V8s and Ford Coyote 5.0L blocks to efficient Toyota and Honda 4-cylinders. Each unit undergoes multi-point cylinder compression leak-down checks and borescope chamber diagnostics.',
    image: IMAGES.categories.engine.cover,
    specs: [
      { label: 'COMPRESSION VERIFIED', value: 'Within 5% across cylinders' },
      { label: 'SLUDGE LEVEL', value: 'Zero Deposit Certified' },
      { label: 'MILEAGE CEILING', value: '< 65,000 Verified Miles' },
      { label: 'WARRANTY COVERAGE', value: 'Up to 3-Year Available' },
    ],
    ctaText: 'EXPLORE ENGINES',
  },
  {
    id: 'transmission',
    slug: 'transmission',
    name: 'TRANSMISSIONS',
    subtitle: 'HEAVY-DUTY GEAR TRANSFER',
    description:
      'Computer-bench tested automatic, manual, and CVT transmissions. Hydraulic solenoid pressures and torque converter lockup circuits are dynamically inspected under simulated operating loads.',
    image: IMAGES.categories.transmission.cover,
    specs: [
      { label: 'HYDRAULIC LOAD TEST', value: 'Continuous 140 PSI' },
      { label: 'TORQUE CONVERTER', value: 'OEM Factory Balanced' },
      { label: 'VALVE BODY BENCH', value: 'Fluid Dynamics Calibrated' },
      { label: 'PRICE ADVANTAGE', value: 'Save $1,200–$2,400' },
    ],
    ctaText: 'EXPLORE TRANSMISSIONS',
  },
  {
    id: 'axle',
    slug: 'axle',
    name: 'AXLE & DIFFERENTIAL',
    subtitle: 'RIGID CHASSIS TORQUE TRANSFER',
    description:
      'Complete 4WD front carriers, heavy-duty rear axle assemblies, and high-tensile CV drive half-shafts. Flange runouts, ring and pinion backlash, and tooth engagement patterns verified by micrometer.',
    image: IMAGES.categories.axle.cover,
    specs: [
      { label: 'BACKLASH TOLERANCE', value: '0.006" - 0.010" Spec' },
      { label: 'LIMITED-SLIP LIFE', value: '> 85% Clutch Life' },
      { label: 'MAGNETIC INSPECTION', value: 'Clean Fluid Certified' },
      { label: 'CV BOOTS', value: 'Tear-Free High Moly Grease' },
    ],
    ctaText: 'EXPLORE AXLE PARTS',
  },
  {
    id: 'suspension',
    slug: 'suspension',
    name: 'SUSPENSION & CHASSIS',
    subtitle: 'TRACK-CALIBRATED RIDE STABILITY',
    description:
      'Gas-charged nitrogen quick-struts, high-articulation forged control arms, and electronic adaptive air suspension struts engineered to restore factory-fresh handling and comfort.',
    image: IMAGES.categories.suspension.cover,
    specs: [
      { label: 'DAMPER REBOUND', value: 'Velocity Dyno Matched' },
      { label: 'AIR BLADDER TEST', value: '300 PSI Zero-Leak Proof' },
      { label: 'BALL JOINT ARTICULATION', value: 'Zero Axial Free-Play' },
      { label: 'ABS SENSOR TEST', value: 'Signal Waveform Verified' },
    ],
    ctaText: 'EXPLORE SUSPENSION',
  },
];

interface FeaturedCategoryScrollProps {
  onOpenQuote: (category?: string) => void;
}

export const FeaturedCategoryScroll: React.FC<FeaturedCategoryScrollProps> = ({ onOpenQuote }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = FEATURED_CATEGORIES[activeIndex];

  return (
    <section className="py-24 md:py-32 bg-[#050608] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-racing-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-bold">
                PRECISION ENGINEERING SHOWCASE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
              CORE POWERTRAIN SYSTEMS
            </h2>
          </div>

          {/* Navigation Category Pill Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {FEATURED_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                  activeIndex === idx
                    ? 'bg-racing-500 text-white border-racing-500 shadow-lg shadow-racing-500/20'
                    : 'bg-carbon-900 text-metallic-400 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Split Presentation (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Spec Sheet & Editorial Story (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-carbon-900 border border-white/10 p-8 md:p-10 clip-chamfer relative">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-white/10 text-racing-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                  CATEGORY {activeIndex + 1} OF {FEATURED_CATEGORIES.length}
                </span>
                <span className="text-metallic-500 text-xs">•</span>
                <span className="font-mono text-xs text-metallic-400 uppercase tracking-wider">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mb-4">
                {current.name}
              </h3>

              <p className="text-metallic-300 text-sm leading-relaxed mb-8 font-normal">
                {current.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="space-y-3 pt-4 border-t border-white/10 mb-8 font-mono text-xs">
                {current.specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-metallic-400 uppercase tracking-wider flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-racing-500" />
                      {spec.label}
                    </span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/10">
              <Link to={`/parts/${current.slug}`} className="w-full sm:w-auto flex-1">
                <Button variant="primary" size="md" icon={true} className="w-full">
                  {current.ctaText}
                </Button>
              </Link>
              <button
                onClick={() => onOpenQuote(current.name)}
                className="w-full sm:w-auto px-5 py-3.5 bg-carbon-800 hover:bg-carbon-700 text-white font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-racing-500 transition-colors text-center"
              >
                GET CATEGORY QUOTE
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Cinematic Image Visual (7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[560px] bg-carbon-950 border border-white/10 overflow-hidden group clip-chamfer">
            <img
              key={current.image}
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 animate-fadeIn"
              loading="lazy"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-carbon-950/40 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />

            {/* Floating Technical Overlay Tag */}
            <div className="absolute bottom-6 right-6 px-4 py-2.5 bg-carbon-900/90 border border-white/15 backdrop-blur-md flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-racing-500" />
              <div className="text-left font-mono">
                <div className="text-[10px] text-metallic-400 uppercase tracking-wider">QC STANDARDS</div>
                <div className="text-xs text-white font-bold uppercase">100% PRESSURE & LEAK TESTED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
