import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { IMAGES } from '../data/images';
import { AlertOctagon, ArrowLeft, Home, Search } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-[#050608] overflow-hidden px-4">
      {/* Background Graphic */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={IMAGES.categories.engine.assembly}
          alt="Exposed mechanical assembly"
          className="w-full h-full object-cover opacity-15 scale-110"
        />
        <div className="absolute inset-0 bg-radial-vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-carbon-950/90 to-[#050608]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-900 border border-white/10 mb-6 font-mono text-xs text-racing-500 font-bold uppercase tracking-widest">
          <AlertOctagon className="w-4 h-4 text-racing-500" />
          <span>DIAGNOSTIC FAULT // 404 CODE</span>
        </div>

        {/* Large 404 Numerals */}
        <div className="font-display font-black text-8xl sm:text-9xl text-white tracking-tighter leading-none mb-4 select-none drop-shadow-[0_0_35px_rgba(229,57,53,0.3)]">
          4<span className="text-racing-500">0</span>4
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
          THIS PART DOESN'T EXIST.
        </h1>

        <p className="text-base text-metallic-400 max-w-md mb-8 font-normal">
          The page or serialized component you are searching for has been relocated, scrapped, or never manufactured.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" icon={true} className="w-full">
              BACK HOME
            </Button>
          </Link>

          <Link to="/parts/engine" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              BROWSE PARTS CATALOG
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
