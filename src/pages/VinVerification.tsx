import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { verifyVin, VinReport } from '../services/verificationService';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { ShieldCheck, Search, CheckCircle2, AlertTriangle, Cpu, Wrench, ArrowRight, Zap } from 'lucide-react';

export const VinVerification: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();
  const [vinInput, setVinInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<VinReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async (vinToTest?: string) => {
    const target = vinToTest || vinInput;
    if (!target) {
      setError('Please enter a 17-character VIN.');
      return;
    }

    setLoading(true);
    setError(null);
    setReport(null);

    try {
      const res = await verifyVin(target);
      setReport(res);
      setVinInput(target);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid VIN format entered.');
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
            <Cpu className="w-4 h-4 text-racing-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              TECHNOLOGY DIAGNOSTIC SUITE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-[0.95] mb-4">
            VIN <span className="text-racing-500">VERIFICATION</span>
          </h1>

          <p className="text-base sm:text-lg text-metallic-300 max-w-xl font-normal leading-relaxed mb-10">
            Know the vehicle. Choose the right part. Decode build specs, engine displacements, transmission codes, and OEM part interchange.
          </p>

          {/* Large VIN Input Console */}
          <div className="w-full max-w-2xl bg-carbon-900 border border-white/15 p-3 sm:p-4 clip-chamfer shadow-2xl relative">
            {/* Scanline laser animation while loading */}
            {loading && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-racing-500/20 to-transparent h-10 w-full animate-scanline pointer-events-none" />
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  maxLength={17}
                  placeholder="ENTER 17-CHARACTER VIN"
                  value={vinInput}
                  onChange={(e) => {
                    setVinInput(e.target.value.toUpperCase());
                    setError(null);
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                  className="w-full bg-carbon-950 border border-white/10 px-4 py-3.5 text-base sm:text-lg font-mono font-bold tracking-widest text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 uppercase"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-[10px] text-metallic-500">
                  {vinInput.length}/17
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
                {loading ? 'SCANNING VIN...' : 'VERIFY VIN'}
              </Button>
            </div>

            {/* Quick Demo Pre-fills */}
            <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-metallic-400">TRY SAMPLE LOOKUPS:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleVerify('1FTFW1ED4KFA12345')}
                  className="text-[11px] text-racing-400 hover:text-white px-2 py-0.5 bg-carbon-800 border border-white/10 transition-colors"
                >
                  Ford F-150 V8
                </button>
                <button
                  type="button"
                  onClick={() => handleVerify('WBA3A5C59DF112233')}
                  className="text-[11px] text-racing-400 hover:text-white px-2 py-0.5 bg-carbon-800 border border-white/10 transition-colors"
                >
                  BMW 328i Turbo
                </button>
                <button
                  type="button"
                  onClick={() => handleVerify('JH4CU2F68AC098765')}
                  className="text-[11px] text-racing-400 hover:text-white px-2 py-0.5 bg-carbon-800 border border-white/10 transition-colors"
                >
                  Acura TSX Sport
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
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <div className="bg-carbon-900 border border-white/15 clip-chamfer overflow-hidden shadow-2xl">
            {/* Report Header HUD */}
            <div className="bg-carbon-950 p-6 md:p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-racing-500 font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>VIN AUTHENTICATED // HOLLANDER DIRECT MATCH</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                  {report.year} {report.make} {report.model}
                </h2>
                <span className="font-mono text-xs text-metallic-400">{report.trim} • {report.bodyStyle}</span>
              </div>

              <div className="bg-carbon-900 border border-white/10 p-3 text-right font-mono">
                <div className="text-[10px] text-metallic-500 uppercase">IDENTIFICATION CODE</div>
                <div className="text-base text-white font-bold tracking-widest">{report.vin}</div>
              </div>
            </div>

            {/* Diagnostic Data Grid */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
              <div className="bg-carbon-950 p-4 border border-white/5 space-y-1">
                <span className="text-metallic-500 text-[10px] uppercase">Engine Specifications</span>
                <div className="text-white font-bold text-sm">{report.engine}</div>
                <div className="text-metallic-400">{report.displacement} • {report.fuelType}</div>
              </div>

              <div className="bg-carbon-950 p-4 border border-white/5 space-y-1">
                <span className="text-metallic-500 text-[10px] uppercase">Transmission & Drivetrain</span>
                <div className="text-white font-bold text-sm">{report.transmission}</div>
                <div className="text-racing-400 font-semibold">{report.drivetrain}</div>
              </div>

              <div className="bg-carbon-950 p-4 border border-white/5 space-y-1">
                <span className="text-metallic-500 text-[10px] uppercase">Assembly Plant & Origin</span>
                <div className="text-white font-bold text-sm">{report.plantCountry}</div>
                <div className="text-metallic-400">{report.assemblyPlant}</div>
              </div>
            </div>

            {/* Standard Equipment Tags */}
            <div className="px-6 md:px-8 pb-6">
              <div className="font-mono text-[11px] uppercase tracking-wider text-metallic-400 mb-3">
                FACTORY EQUIPPED POWERTRAIN FEATURES:
              </div>
              <div className="flex flex-wrap gap-2">
                {report.standardEquipment.map((eq, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-carbon-800 border border-white/10 text-xs font-mono text-metallic-300"
                  >
                    ✓ {eq}
                  </span>
                ))}
              </div>
            </div>

            {/* Suggested In-Stock Compatible Parts */}
            <div className="bg-carbon-950 p-6 md:p-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                  VERIFIED COMPATIBLE IN-STOCK PARTS FOR THIS VIN
                </h3>
                <span className="font-mono text-xs text-racing-500">GRADE A CERTIFIED</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {report.suggestedParts.map((sp, idx) => (
                  <div key={idx} className="bg-carbon-900 border border-white/10 p-4 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs text-racing-400 font-bold uppercase">{sp.category}</span>
                      <p className="text-xs text-metallic-300 mt-1 mb-4 font-normal">{sp.description}</p>
                    </div>
                    <button
                      onClick={() => openQuote(`${report.year} ${report.make} ${report.model} - ${sp.category} (VIN: ${report.vin})`)}
                      className="w-full py-2 bg-racing-500 hover:bg-racing-600 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      QUOTE THIS PART
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Explanatory Guide Section */}
      <section className="py-20 bg-carbon-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="KNOWLEDGE BASE"
            eyebrow="ANATOMY OF A VEHICLE IDENTIFIER"
            title="UNDERSTANDING YOUR 17-CHAR VIN"
            subtitle="The 17 alphanumeric digits on your dashboard or driver door jamb reveal essential mechanical specs needed to ensure 100% bolt-on compatibility."
          />

          <div className="space-y-4 font-mono text-xs text-metallic-300">
            <div className="bg-carbon-950 p-4 border border-white/5 flex items-start gap-4">
              <span className="font-bold text-racing-500 text-sm">DIGITS 1–3</span>
              <div>
                <span className="text-white font-bold block mb-1">World Manufacturer Identifier (WMI)</span>
                Indicates the country of manufacture and vehicle builder (e.g. 1FT = Ford USA, WBA = BMW Germany, JT = Toyota Japan).
              </div>
            </div>

            <div className="bg-carbon-950 p-4 border border-white/5 flex items-start gap-4">
              <span className="font-bold text-racing-500 text-sm">DIGITS 4–8</span>
              <div>
                <span className="text-white font-bold block mb-1">Vehicle Descriptor Section (VDS)</span>
                Specifies engine displacement, cylinder configuration, transmission model, and chassis body code. Essential for ordering long blocks.
              </div>
            </div>

            <div className="bg-carbon-950 p-4 border border-white/5 flex items-start gap-4">
              <span className="font-bold text-racing-500 text-sm">DIGIT 10</span>
              <div>
                <span className="text-white font-bold block mb-1">Model Year Code</span>
                Designates the exact certified production year (e.g. K = 2019, L = 2020, M = 2021).
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
