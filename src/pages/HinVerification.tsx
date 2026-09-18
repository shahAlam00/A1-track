import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { verifyHin, HinReport } from '../services/verificationService';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { Anchor, CheckCircle2, AlertTriangle, Ship, Info } from 'lucide-react';

export const HinVerification: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();
  const [hinInput, setHinInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<HinReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async (hinToTest?: string) => {
    const target = hinToTest || hinInput;
    if (!target) {
      setError('Please enter a 12-character Hull Identification Number.');
      return;
    }

    setLoading(true);
    setError(null);
    setReport(null);

    try {
      const res = await verifyHin(target);
      setReport(res);
      setHinInput(target);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid HIN format.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#050608] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 border-b border-white/10 overflow-hidden bg-carbon-950">
        <div className="absolute inset-0 bg-fine-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-900/90 border border-white/15 backdrop-blur-md mb-6">
            <Anchor className="w-4 h-4 text-racing-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              MARINE & VESSEL REGISTRY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-[0.95] mb-4">
            HIN <span className="text-racing-500">VERIFICATION</span>
          </h1>

          <p className="text-base sm:text-lg text-metallic-300 max-w-xl font-normal leading-relaxed mb-10">
            Verify your boat's Hull Identification Number. Authenticate manufacturer credentials, model year specifications, and marine powertrain compatibility.
          </p>

          {/* Console Input */}
          <div className="w-full max-w-2xl bg-carbon-900 border border-white/15 p-3 sm:p-4 clip-chamfer shadow-2xl relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  maxLength={12}
                  placeholder="ENTER 12-CHAR HIN (e.g. ABC12345M24A)"
                  value={hinInput}
                  onChange={(e) => {
                    setHinInput(e.target.value.toUpperCase());
                    setError(null);
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                  className="w-full bg-carbon-950 border border-white/10 px-4 py-3.5 text-base sm:text-lg font-mono font-bold tracking-widest text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 uppercase"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-[10px] text-metallic-500">
                  {hinInput.length}/12
                </span>
              </div>

              <Button
                onClick={() => handleVerify()}
                variant="primary"
                size="md"
                disabled={loading}
                icon={true}
                className="font-display tracking-wider"
              >
                {loading ? 'VERIFYING...' : 'VERIFY HIN'}
              </Button>
            </div>

            {/* Quick Demo Pre-fills */}
            <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-metallic-400">TRY SAMPLE HIN:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleVerify('ABC12345M24A')}
                  className="text-[11px] text-racing-400 hover:text-white px-2 py-0.5 bg-carbon-800 border border-white/10 transition-colors"
                >
                  ABC12345M24A (Sea Ray)
                </button>
                <button
                  type="button"
                  onClick={() => handleVerify('BWC98765E122')}
                  className="text-[11px] text-racing-400 hover:text-white px-2 py-0.5 bg-carbon-800 border border-white/10 transition-colors"
                >
                  BWC98765E122 (Boston Whaler)
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-950/40 border border-racing-500/50 flex items-center gap-2 text-xs font-mono text-red-300 max-w-2xl w-full">
              <AlertTriangle className="w-4 h-4 text-racing-500 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </section>

      {/* Verification Result Card */}
      {report && (
        <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <div className="bg-carbon-900 border border-white/15 clip-chamfer overflow-hidden shadow-2xl">
            <div className="bg-carbon-950 p-6 md:p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-racing-500 font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>HULL REGISTRATION RECORD VERIFIED // CFR 33 COMPLIANT</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                  {report.manufacturerName}
                </h2>
                <span className="font-mono text-xs text-metallic-400">
                  Model Year: {report.modelYear} • Serial #{report.serialNumber}
                </span>
              </div>

              <div className="bg-carbon-900 border border-white/10 p-3 text-right font-mono">
                <div className="text-[10px] text-metallic-500 uppercase">OFFICIAL HIN</div>
                <div className="text-base text-white font-bold tracking-widest">{report.hin}</div>
              </div>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
              <div className="bg-carbon-950 p-4 border border-white/5 space-y-1">
                <span className="text-metallic-500 text-[10px] uppercase">Manufacturer ID (MIC)</span>
                <div className="text-white font-bold text-sm">{report.manufacturerCode}</div>
                <div className="text-metallic-400">US Coast Guard Assigned</div>
              </div>

              <div className="bg-carbon-950 p-4 border border-white/5 space-y-1">
                <span className="text-metallic-500 text-[10px] uppercase">Production & Model Year</span>
                <div className="text-white font-bold text-sm">{report.modelYear}</div>
                <div className="text-metallic-400">Built in {report.productionMonth}</div>
              </div>

              <div className="bg-carbon-950 p-4 border border-white/5 space-y-1">
                <span className="text-metallic-500 text-[10px] uppercase">Vessel & Hull Specs</span>
                <div className="text-white font-bold text-sm">{report.vesselType}</div>
                <div className="text-racing-400">{report.hullMaterial}</div>
              </div>
            </div>

            <div className="p-6 md:p-8 border-t border-white/10 bg-carbon-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-mono text-xs text-metallic-400 max-w-xl">
                {report.notes} Looking for marine inboard engines, marine alternators, or gear reductions?
              </p>
              <Button
                onClick={() => openQuote(`Marine Inboard/Part Request for HIN: ${report.hin}`)}
                variant="primary"
                size="md"
              >
                REQUEST MARINE PART QUOTE
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Educational Guide on HIN */}
      <section className="py-20 bg-carbon-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MARINE COMPLIANCE"
            eyebrow="STANDARDIZED FORMAT"
            title="WHAT IS A BOAT HIN?"
            subtitle="Every boat built or imported into the US since 1972 is required by federal law (33 CFR 181) to possess a unique 12-character Hull Identification Number."
          />

          <div className="space-y-4 font-mono text-xs text-metallic-300">
            <div className="bg-carbon-950 p-4 border border-white/5 flex items-start gap-4">
              <span className="font-bold text-racing-500 text-sm">CHARACTERS 1–3</span>
              <div>
                <span className="text-white font-bold block mb-1">Manufacturer Identification Code (MIC)</span>
                Assigned by the US Coast Guard to denote the registered vessel manufacturer.
              </div>
            </div>

            <div className="bg-carbon-950 p-4 border border-white/5 flex items-start gap-4">
              <span className="font-bold text-racing-500 text-sm">CHARACTERS 4–8</span>
              <div>
                <span className="text-white font-bold block mb-1">Hull Serial Number</span>
                Assigned by builder to individual hull for production tracking.
              </div>
            </div>

            <div className="bg-carbon-950 p-4 border border-white/5 flex items-start gap-4">
              <span className="font-bold text-racing-500 text-sm">CHARACTERS 9–12</span>
              <div>
                <span className="text-white font-bold block mb-1">Date of Certification & Model Year</span>
                Specifies the month of production and the certified vessel model year.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
