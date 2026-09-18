import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, CheckCircle2, AlertCircle, Wrench, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { Button } from './Button';
import { submitQuoteRequest, QuotePayload, QuoteResult } from '../../services/quoteService';
import { COMPANY_CONTACT } from '../../data/navigation';

interface GlobalQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const GlobalQuoteModal: React.FC<GlobalQuoteModalProps> = ({
  isOpen,
  onClose,
  defaultCategory,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<QuotePayload>({
    defaultValues: {
      vehicleYear: '2019',
      partNeeded: defaultCategory || 'Complete Engine',
    },
  });

  useEffect(() => {
    if (defaultCategory) {
      setValue('partNeeded', defaultCategory);
    }
  }, [defaultCategory, setValue]);

  // Handle ESC key press & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const onSubmit = async (data: QuotePayload) => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const result = await submitQuoteRequest(data);
      setQuoteResult(result);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'An unexpected error occurred while requesting your quote.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setQuoteResult(null);
    setSubmitError(null);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        className="relative w-full sm:max-w-2xl lg:max-w-3xl bg-carbon-900 border border-white/10 rounded-t-2xl sm:rounded-none shadow-2xl overflow-hidden max-h-[92vh] flex flex-col clip-chamfer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-carbon-950/90">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-racing-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              OFFICIAL PARTS QUOTE DISPATCH
            </span>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-metallic-400 hover:text-white hover:bg-white/10 transition-colors rounded-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8">
          {quoteResult ? (
            /* Success State */
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-racing-500/10 border border-racing-500 flex items-center justify-center text-racing-500">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
                QUOTE REQUEST TRANSMITTED
              </h3>
              <p className="font-mono text-sm text-racing-400 mb-6 font-semibold">
                REFERENCE CODE: {quoteResult.quoteId}
              </p>

              <div className="bg-carbon-800/80 border border-white/10 p-5 mb-6 text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-metallic-400">ESTIMATED PRICE BRACKET:</span>
                  <span className="text-white font-bold">{quoteResult.estimatedPriceRange}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-metallic-400">LOGISTICS LEAD TIME:</span>
                  <span className="text-white font-bold">{quoteResult.estimatedDeliveryDays}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-metallic-400">ASSIGNED SPECIALIST:</span>
                  <span className="text-racing-400 font-semibold">{quoteResult.technicianAssigned}</span>
                </div>
                <p className="text-metallic-300 pt-1 text-xs leading-relaxed font-sans">
                  {quoteResult.message}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${COMPANY_CONTACT.phone.raw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-carbon-800 hover:bg-carbon-700 text-white border border-white/15 text-sm font-semibold tracking-wide uppercase transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-racing-500" />
                  Call Specialist Now ({COMPANY_CONTACT.phone.display})
                </a>
                <Button onClick={handleResetAndClose} variant="primary">
                  DONE
                </Button>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <div>
              <div className="mb-6">
                <h3 id="quote-modal-title" className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                  REQUEST YOUR CERTIFIED PART QUOTE
                </h3>
                <p className="text-sm text-metallic-400 mt-1">
                  Save $100–$250 on dyno-tested, low-mileage OEM automotive assemblies. Instant confirmation.
                </p>
              </div>

              {submitError && (
                <div className="mb-6 p-4 bg-red-950/50 border border-racing-500/50 flex items-center gap-3 text-red-300 text-xs font-mono">
                  <AlertCircle className="w-5 h-5 text-racing-500 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Vehicle Specs Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      Year *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2019"
                      {...register('vehicleYear', { required: 'Year required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors font-mono"
                    />
                    {errors.vehicleYear && <p className="text-racing-400 text-[11px] mt-1">{errors.vehicleYear.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      Make *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ford / Toyota"
                      {...register('vehicleMake', { required: 'Make required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors"
                    />
                    {errors.vehicleMake && <p className="text-racing-400 text-[11px] mt-1">{errors.vehicleMake.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      Model *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. F-150 / Camry"
                      {...register('vehicleModel', { required: 'Model required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors"
                    />
                    {errors.vehicleModel && <p className="text-racing-400 text-[11px] mt-1">{errors.vehicleModel.message}</p>}
                  </div>
                </div>

                {/* Part Needed & VIN Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      Part Category *
                    </label>
                    <select
                      {...register('partNeeded', { required: 'Select part category' })}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors"
                    >
                      <option value="Complete Engine">Engine - Complete Engine</option>
                      <option value="Long Block Engine">Engine - Long Block</option>
                      <option value="Complete Transmission">Transmission - Complete Unit</option>
                      <option value="Torque Converter">Transmission - Torque Converter</option>
                      <option value="Steering Column Assembly">Steering - Column Assembly</option>
                      <option value="Front Axle Assembly">Axle - Front Carrier Assembly</option>
                      <option value="Rear Axle Assembly">Axle - Rear Carrier Assembly</option>
                      <option value="Differential">Axle - Differential</option>
                      <option value="Strut / Shock Assembly">Suspension - Struts / Shocks</option>
                      <option value="Alternator / Starter">Electrical - Alternator / Starter</option>
                      <option value="ECU / Powertrain Module">Electrical - ECU / Module</option>
                      <option value="Other Component">Other Custom Component</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      VIN (Optional for exact matching)
                    </label>
                    <input
                      type="text"
                      placeholder="17-Character Vehicle VIN"
                      maxLength={17}
                      {...register('vin')}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors font-mono uppercase"
                    />
                  </div>
                </div>

                {/* Customer Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      {...register('fullName', { required: 'Name required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors"
                    />
                    {errors.fullName && <p className="text-racing-400 text-[11px] mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', { required: 'Valid email required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors font-mono"
                    />
                    {errors.email && <p className="text-racing-400 text-[11px] mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      {...register('phone', { required: 'Phone required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors font-mono"
                    />
                    {errors.phone && <p className="text-racing-400 text-[11px] mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* ZIP Code & Details */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="sm:col-span-1">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 27021"
                      {...register('zipCode', { required: 'ZIP code required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors font-mono"
                    />
                    {errors.zipCode && <p className="text-racing-400 text-[11px] mt-1">{errors.zipCode.message}</p>}
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-metallic-400 mb-1">
                      Additional Engine/Transmission Details or Questions
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4WD, automatic, 8th digit of VIN is T"
                      {...register('additionalDetails')}
                      className="w-full bg-carbon-800 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 focus:ring-1 focus:ring-racing-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Trust Badges Bar */}
                <div className="pt-2 pb-2 grid grid-cols-3 gap-2 border-y border-white/5 text-[11px] font-mono text-metallic-400 text-center">
                  <div className="flex items-center justify-center gap-1.5 py-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-racing-500" />
                    <span>Tested OEM Standards</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 py-1">
                    <Wrench className="w-3.5 h-3.5 text-racing-500" />
                    <span>Up to 3-Yr Warranty</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 py-1">
                    <Sparkles className="w-3.5 h-3.5 text-racing-500" />
                    <span>Free Shipping Quote</span>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? 'COMMUNICATING WITH DISPATCH...' : 'REQUEST MY FREE QUOTE'}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
