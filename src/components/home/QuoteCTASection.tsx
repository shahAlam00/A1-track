import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IMAGES } from '../../data/images';
import { Button } from '../common/Button';
import { submitQuoteRequest, QuotePayload, QuoteResult } from '../../services/quoteService';
import { COMPANY_CONTACT } from '../../data/navigation';
import { CheckCircle2, PhoneCall, ShieldCheck, AlertCircle, Sparkles, Search } from 'lucide-react';

interface QuoteCTASectionProps {
  onOpenModal: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();

// Fake VIN decode — replace with real NHTSA API call if needed
async function decodeVIN(vin: string): Promise<{ year: string; make: string; model: string } | null> {
  await new Promise((r) => setTimeout(r, 600));
  const map: Record<string, { year: string; make: string; model: string }> = {
    '1GCNKNEC4GZ123456': { year: '2016', make: 'Chevrolet', model: 'Colorado' },
    '1HGBH41JXMN109186': { year: '1991', make: 'Honda', model: 'Civic' },
  };
  return map[vin.toUpperCase()] ?? { year: '2019', make: 'Ford', model: 'F-150' };
}

export const QuoteCTASection: React.FC<QuoteCTASectionProps> = ({ onOpenModal }) => {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<QuoteResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [vehicleType, setVehicleType] = useState<'Car/Truck' | 'Boat'>('Car/Truck');
  const [vinInput, setVinInput] = useState('');
  const [vinLooking, setVinLooking] = useState(false);
  const [vinError, setVinError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<QuotePayload>({
    defaultValues: {
      vehicleType: 'Car/Truck',
      vehicleYear: '',
      partNeeded: 'Complete Engine',
    },
  });

  const handleVehicleTypeChange = (type: 'Car/Truck' | 'Boat') => {
    setVehicleType(type);
    setValue('vehicleType', type);
    setVinInput('');
    setVinError('');
  };

  const handleVinLookup = async () => {
    if (vinInput.length !== 17) {
      setVinError('VIN must be exactly 17 characters.');
      return;
    }
    setVinError('');
    setVinLooking(true);
    try {
      const decoded = await decodeVIN(vinInput);
      if (decoded) {
        setValue('vehicleYear', decoded.year, { shouldValidate: true });
        setValue('vehicleMake', decoded.make, { shouldValidate: true });
        setValue('vehicleModel', decoded.model, { shouldValidate: true });
        setValue('vin', vinInput);
      }
    } catch {
      setVinError('VIN lookup failed. Please fill manually.');
    } finally {
      setVinLooking(false);
    }
  };

  const onSubmit = async (data: QuotePayload) => {
    setSubmitting(true);
    setErrorMessage(null);
    try {
      const res = await submitQuoteRequest({ ...data, vehicleType });
      setResult(res);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Error submitting quote request.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = (hasError: boolean) =>
    `w-full bg-carbon-800 border ${hasError ? 'border-racing-500' : 'border-white/10'} px-3 py-2 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 font-mono`;

  return (
    <section className="relative py-24 md:py-32 bg-[#050608] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={IMAGES.hero.dynoSupercar}
          alt="Precision dyno testing automotive platform"
          className="w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-radial-vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-carbon-950/85 to-[#050608]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-racing-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-bold">
                CAN'T FIND YOUR EXACT PART?
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight leading-[1.05]">
              GET YOUR FREE <br />
              <span className="text-racing-500">CUSTOM QUOTE.</span>
            </h2>

            <p className="text-metallic-300 text-base leading-relaxed">
              Tell us what you need. Our automotive specialists cross-reference factory interchange Hollander manuals to locate your exact OEM match within minutes.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs font-mono text-metallic-400">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-racing-500 flex-shrink-0" />
                <span>Zero obligation, transparent wholesale pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-racing-500 flex-shrink-0" />
                <span>Multi-point dyno & compression report provided</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-racing-500 flex-shrink-0" />
                <span>
                  Immediate hotline dispatch:{' '}
                  <a
                    href={`tel:${COMPANY_CONTACT.phone.raw}`}
                    className="text-white hover:text-racing-400 font-bold underline"
                  >
                    {COMPANY_CONTACT.phone.display}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="lg:col-span-7 bg-carbon-900/90 border border-white/15 p-6 sm:p-8 md:p-10 clip-chamfer backdrop-blur-xl shadow-2xl relative">
            {result ? (
              <div className="text-center py-8 animate-fadeIn">
                <div className="w-16 h-16 mx-auto mb-4 bg-racing-500/10 border border-racing-500 flex items-center justify-center text-racing-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
                  INQUIRY LOGGED IN SYSTEM
                </h3>
                <p className="font-mono text-sm text-racing-400 mb-6 font-semibold">
                  TRACKING ID: {result.quoteId}
                </p>

                <div className="bg-carbon-950 border border-white/10 p-5 mb-6 text-left space-y-2 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-metallic-400">ESTIMATED PRICE RANGE:</span>
                    <span className="text-white font-bold">{result.estimatedPriceRange}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-metallic-400">LOGISTICS LEAD TIME:</span>
                    <span className="text-white font-bold">{result.estimatedDeliveryDays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-metallic-400">TECHNICIAN ASSIGNED:</span>
                    <span className="text-racing-400 font-semibold">{result.technicianAssigned}</span>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setResult(null);
                    setVinInput('');
                    setVehicleType('Car/Truck');
                    reset();
                  }}
                  variant="primary"
                >
                  REQUEST ANOTHER QUOTE
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    CERTIFIED PARTS INQUIRY FORM
                  </span>
                  <span className="font-mono text-[10px] text-racing-500">AVERAGE RESPONSE &lt; 15 MIN</span>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/40 border border-racing-500 flex items-center gap-2 text-xs font-mono text-red-300">
                    <AlertCircle className="w-4 h-4 text-racing-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Vehicle Type Toggle */}
                <div>
                  <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                    Vehicle Type *
                  </label>
                  <div className="flex gap-0 border border-white/10 w-fit">
                    {(['Car/Truck', 'Boat'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleVehicleTypeChange(type)}
                        className={`px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                          vehicleType === type
                            ? 'bg-racing-500 text-white'
                            : 'bg-carbon-800 text-metallic-400 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" {...register('vehicleType', { required: true })} value={vehicleType} />
                </div>

                {/* VIN Lookup Section */}
                <div className="bg-carbon-950 border border-white/10 p-4 space-y-3">
                  <p className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                    Vehicle Information
                  </p>
                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      VIN Lookup <span className="normal-case text-metallic-500">(Optional — Auto-fill vehicle details)</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={vinInput}
                        onChange={(e) => {
                          setVinInput(e.target.value.toUpperCase());
                          setVinError('');
                        }}
                        maxLength={17}
                        placeholder="Enter 17-digit VIN"
                        className="flex-1 bg-carbon-800 border border-white/10 px-3 py-2 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 font-mono uppercase"
                      />
                      <button
                        type="button"
                        onClick={handleVinLookup}
                        disabled={vinLooking || vinInput.length === 0}
                        className="flex items-center gap-1.5 px-4 py-2 bg-racing-500 hover:bg-racing-400 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                      >
                        <Search className="w-3.5 h-3.5" />
                        {vinLooking ? 'Looking...' : 'Lookup'}
                      </button>
                    </div>
                    {vinError && <p className="text-racing-400 text-[10px] mt-0.5 font-mono">{vinError}</p>}
                    <p className="text-metallic-500 text-[10px] mt-1 font-mono">
                      Enter your VIN to automatically fill vehicle year and make/model. Or fill manually below.
                    </p>
                  </div>

                  {/* Year / Make / Model */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                        Year *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2018"
                        {...register('vehicleYear', {
                          required: 'Required',
                          pattern: { value: /^\d{4}$/, message: '4-digit year' },
                          validate: (v) =>
                            (parseInt(v) >= 1900 && parseInt(v) <= CURRENT_YEAR + 1) || 'Invalid year',
                        })}
                        className={inputCls(!!errors.vehicleYear)}
                      />
                      {errors.vehicleYear && <p className="text-racing-400 text-[10px] mt-0.5">{errors.vehicleYear.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                        Make *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chevrolet"
                        {...register('vehicleMake', {
                          required: 'Required',
                          minLength: { value: 2, message: 'Too short' },
                        })}
                        className={inputCls(!!errors.vehicleMake)}
                      />
                      {errors.vehicleMake && <p className="text-racing-400 text-[10px] mt-0.5">{errors.vehicleMake.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                        Model *
                      </label>
                      <input
                        type="text"
                        placeholder={vehicleType === 'Boat' ? 'e.g. Sea Ray 250' : 'e.g. Silverado'}
                        {...register('vehicleModel', {
                          required: 'Required',
                          minLength: { value: 2, message: 'Too short' },
                        })}
                        className={inputCls(!!errors.vehicleModel)}
                      />
                      {errors.vehicleModel && <p className="text-racing-400 text-[10px] mt-0.5">{errors.vehicleModel.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Part & ZIP */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      Part Category *
                    </label>
                    <select
                      {...register('partNeeded', { required: 'Required' })}
                      className={inputCls(!!errors.partNeeded)}
                    >
                      <option value="Complete Engine">Complete Engine (Long Block / Dressed)</option>
                      <option value="Complete Transmission">Transmission (Automatic / Manual)</option>
                      <option value="Steering Column">Steering Column Assembly</option>
                      <option value="Axle Assembly">Front / Rear Axle Assembly</option>
                      <option value="Suspension Assembly">Suspension Struts / Control Arms</option>
                      <option value="Electrical Module">Alternator / Starter / ECU Module</option>
                      <option value="Other Custom Part">Other Precision Component</option>
                    </select>
                    {errors.partNeeded && <p className="text-racing-400 text-[10px] mt-0.5">{errors.partNeeded.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 27021"
                      {...register('zipCode', {
                        required: 'Required',
                        pattern: { value: /^\d{5}(-\d{4})?$/, message: 'Invalid ZIP' },
                      })}
                      className={inputCls(!!errors.zipCode)}
                    />
                    {errors.zipCode && <p className="text-racing-400 text-[10px] mt-0.5">{errors.zipCode.message}</p>}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register('fullName', {
                        required: 'Required',
                        minLength: { value: 2, message: 'Too short' },
                        pattern: { value: /^[a-zA-Z\s'-]+$/, message: 'Letters only' },
                      })}
                      className={inputCls(!!errors.fullName)}
                    />
                    {errors.fullName && <p className="text-racing-400 text-[10px] mt-0.5">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      {...register('email', {
                        required: 'Required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                      })}
                      className={inputCls(!!errors.email)}
                    />
                    {errors.email && <p className="text-racing-400 text-[10px] mt-0.5">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      {...register('phone', {
                        required: 'Required',
                        pattern: { value: /^[\d\s\-()+]{7,15}$/, message: 'Invalid phone' },
                      })}
                      className={inputCls(!!errors.phone)}
                    />
                    {errors.phone && <p className="text-racing-400 text-[10px] mt-0.5">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                    Engine Displacement / Trim / Specific Part Numbers
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 5.3L V8, 4WD, automatic transmission, VIN 8th digit is C"
                    {...register('additionalDetails')}
                    className="w-full bg-carbon-800 border border-white/10 p-3 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 resize-none font-mono"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full font-display text-sm tracking-widest mt-2"
                  disabled={submitting}
                >
                  {submitting ? 'PROCESSING DISPATCH...' : 'REQUEST MY QUOTE'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
