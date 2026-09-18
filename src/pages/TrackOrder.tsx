import React, { useState } from 'react';
import { lookupTracking, TrackingDetails } from '../services/trackingService';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_CONTACT } from '../data/navigation';
import { Truck, Package, CheckCircle2, Clock, MapPin, AlertCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export const TrackOrder: React.FC = () => {
  const [trackingInput, setTrackingInput] = useState('TRK123456789');
  const [loading, setLoading] = useState(false);
  const [tracking, setTracking] = useState<TrackingDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (codeToUse?: string) => {
    const code = codeToUse || trackingInput;
    if (!code) {
      setError('Please enter a valid tracking number.');
      return;
    }

    setLoading(true);
    setError(null);
    setTracking(null);

    try {
      const res = await lookupTracking(code);
      setTracking(res);
      setTrackingInput(code);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error finding tracking record.');
    } finally {
      setLoading(false);
    }
  };

  // Auto-trigger for instant showcase on mount
  React.useEffect(() => {
    handleTrack('TRK123456789');
  }, []);

  return (
    <div className="w-full bg-[#050608] min-h-screen">
      {/* Hero Tracking Input Section */}
      <section className="relative py-20 md:py-28 border-b border-white/10 overflow-hidden bg-carbon-950">
        <div className="absolute inset-0 bg-fine-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-900/90 border border-white/15 backdrop-blur-md mb-6">
            <Truck className="w-4 h-4 text-racing-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              HEAVY FREIGHT LOGISTICS NETWORK
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-[0.95] mb-4">
            TRACK YOUR <span className="text-racing-500">ORDER.</span>
          </h1>

          <p className="text-base sm:text-lg text-metallic-300 max-w-xl font-normal leading-relaxed mb-10">
            Monitor real-time linehaul freight transit, crate dispatch status, and liftgate delivery ETA across the United States.
          </p>

          {/* Large Tracking Input Console */}
          <div className="w-full max-w-2xl bg-carbon-900 border border-white/15 p-3 sm:p-4 clip-chamfer shadow-2xl relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="ENTER TRACKING NUMBER (e.g. TRK123456789)"
                value={trackingInput}
                onChange={(e) => {
                  setTrackingInput(e.target.value.toUpperCase());
                  setError(null);
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                className="flex-1 bg-carbon-950 border border-white/10 px-4 py-3.5 text-base sm:text-lg font-mono font-bold tracking-widest text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 uppercase"
              />

              <Button
                onClick={() => handleTrack()}
                variant="primary"
                size="md"
                disabled={loading}
                icon={true}
                className="font-display tracking-wider"
              >
                {loading ? 'LOCATING...' : 'TRACK ORDER'}
              </Button>
            </div>

            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-metallic-400">
              <span>DEMO TRACKING CODE AVAILABLE:</span>
              <button
                type="button"
                onClick={() => handleTrack('TRK123456789')}
                className="text-[11px] text-racing-400 hover:text-white px-2 py-0.5 bg-carbon-800 border border-white/10 transition-colors"
              >
                TRK123456789 (In Transit V8 Engine)
              </button>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-950/40 border border-racing-500/50 flex items-center gap-2 text-xs font-mono text-red-300 max-w-2xl w-full">
              <AlertCircle className="w-4 h-4 text-racing-500 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </section>

      {/* Tracking Details & Animated 6-Stage Timeline */}
      {tracking && (
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
          {/* Freight Header Card */}
          <div className="bg-carbon-900 border border-white/15 p-6 md:p-8 clip-chamfer mb-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-racing-500 font-bold mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-racing-500 animate-ping" />
                  <span>LIVE FREIGHT STATUS // {tracking.currentStage}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                  {tracking.itemDescription}
                </h2>
                <div className="font-mono text-xs text-metallic-400 mt-1">
                  Order ID: <span className="text-white font-bold">{tracking.orderNumber}</span> • Carrier: <span className="text-white font-bold">{tracking.carrier}</span>
                </div>
              </div>

              <div className="bg-carbon-950 border border-white/10 p-4 text-right font-mono">
                <div className="text-[10px] text-metallic-500 uppercase">ESTIMATED ARRIVAL</div>
                <div className="text-lg text-emerald-400 font-bold">{tracking.estimatedDelivery}</div>
                <div className="text-[11px] text-metallic-400 mt-0.5">Dest: {tracking.destinationCity}</div>
              </div>
            </div>

            {/* Freight Technical Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 font-mono text-xs">
              <div>
                <span className="text-metallic-500 text-[10px] block uppercase">PRO/WAYBILL CODE</span>
                <span className="text-white font-bold">{tracking.carrierTrackingCode}</span>
              </div>
              <div>
                <span className="text-metallic-500 text-[10px] block uppercase">GROSS CRATE WEIGHT</span>
                <span className="text-white font-bold">{tracking.grossWeight}</span>
              </div>
              <div>
                <span className="text-metallic-500 text-[10px] block uppercase">FREIGHT CLASSIFICATION</span>
                <span className="text-white font-bold">{tracking.freightClass}</span>
              </div>
              <div>
                <span className="text-metallic-500 text-[10px] block uppercase">SHOCKWATCH SENSOR</span>
                <span className="text-emerald-400 font-bold">{tracking.shockSensorStatus}</span>
              </div>
            </div>
          </div>

          {/* 6-Stage Visual Timeline Progress Bar */}
          <div className="bg-carbon-900 border border-white/15 p-6 md:p-10 clip-chamfer mb-10 shadow-2xl">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-8">
              DISPATCH & DELIVERY TIMELINE
            </h3>

            {/* Step Progression */}
            <div className="relative">
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-[2px] before:bg-white/10">
                {tracking.steps.map((step, idx) => {
                  return (
                    <div key={step.stage} className="relative flex items-start gap-6">
                      {/* Status Icon Indicator */}
                      <div
                        className={`w-10 h-10 rounded-none flex items-center justify-center flex-shrink-0 z-10 font-mono text-xs font-bold border transition-colors ${
                          step.completed
                            ? 'bg-racing-500 border-racing-500 text-white shadow-lg shadow-racing-500/20'
                            : step.current
                            ? 'bg-carbon-950 border-racing-500 text-racing-500 animate-pulse'
                            : 'bg-carbon-950 border-white/15 text-metallic-500'
                        }`}
                      >
                        {step.completed ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-carbon-950 p-5 border border-white/5 clip-chamfer">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-racing-400 font-bold uppercase tracking-wider">
                              {step.stage}
                            </span>
                            {step.current && (
                              <span className="px-1.5 py-0.5 bg-racing-500 text-white font-mono text-[9px] uppercase font-bold">
                                ACTIVE STAGE
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-xs text-metallic-400">{step.timestamp}</span>
                        </div>

                        <h4 className="font-display font-bold text-base text-white uppercase tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-xs text-metallic-300 mt-1 font-normal font-sans">
                          {step.description}
                        </p>

                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-metallic-400 mt-3 pt-2 border-t border-white/5">
                          <MapPin className="w-3.5 h-3.5 text-racing-500" />
                          <span>{step.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Need Help Box */}
          <div className="bg-carbon-950 border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-racing-500 flex-shrink-0" />
              <span className="text-metallic-300">
                Have delivery address updates or liftgate delivery requests? Contact dispatch immediately.
              </span>
            </div>
            <a
              href={`tel:${COMPANY_CONTACT.phone.raw}`}
              className="px-5 py-2.5 bg-carbon-800 hover:bg-carbon-700 text-white font-bold uppercase tracking-wider border border-white/10 text-center whitespace-nowrap"
            >
              Call Freight Support ({COMPANY_CONTACT.phone.display})
            </a>
          </div>
        </section>
      )}
    </div>
  );
};
