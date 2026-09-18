import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { COMPANY_CONTACT } from '../data/navigation';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Navigation, Send, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setError(null);
    try {
      // Simulate dispatch transmission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch {
      setError('An error occurred transmitting your message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#050608] min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 border-b border-white/10 overflow-hidden bg-carbon-950">
        <div className="absolute inset-0 bg-fine-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-900/90 border border-white/15 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-racing-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-racing-500 font-bold">
              24/7 NATIONWIDE SUPPORT & DISPATCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-[0.95] mb-4">
            LET'S FIND <span className="text-racing-500">YOUR PART.</span>
          </h1>

          <p className="text-base sm:text-lg text-metallic-300 max-w-xl font-normal leading-relaxed">
            Speak directly with experienced automotive specialists at our King, North Carolina facility. Instant answers on interchange codes, inventory availability, and freight dispatch.
          </p>
        </div>
      </section>

      {/* Main Contact Grid: Info Cards + Form */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Tactical Facility Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-carbon-900 border border-white/10 p-8 clip-chamfer space-y-6">
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight pb-4 border-b border-white/10">
                HEADQUARTERS & DISPATCH
              </h3>

              {/* Physical Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-carbon-800 border border-white/10 flex items-center justify-center flex-shrink-0 text-racing-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs">
                  <span className="text-metallic-500 block uppercase tracking-wider">FACILITY ADDRESS</span>
                  <p className="text-white font-bold text-sm mt-1">
                    {COMPANY_CONTACT.name}
                  </p>
                  <p className="text-metallic-300 mt-0.5">
                    {COMPANY_CONTACT.address.street}
                  </p>
                  <p className="text-metallic-300">
                    {COMPANY_CONTACT.address.city}, {COMPANY_CONTACT.address.state} {COMPANY_CONTACT.address.zip}
                  </p>
                </div>
              </div>

              {/* Phone Hotline */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-carbon-800 border border-white/10 flex items-center justify-center flex-shrink-0 text-racing-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs">
                  <span className="text-metallic-500 block uppercase tracking-wider">PRIORITY HOTLINE</span>
                  <a
                    href={`tel:${COMPANY_CONTACT.phone.raw}`}
                    className="text-white hover:text-racing-400 font-bold text-base mt-1 block transition-colors"
                  >
                    {COMPANY_CONTACT.phone.display}
                  </a>
                  <span className="text-emerald-400 text-[11px]">Toll-Free • 24/7 Technician Coverage</span>
                </div>
              </div>

              {/* Email Support */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-carbon-800 border border-white/10 flex items-center justify-center flex-shrink-0 text-racing-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs">
                  <span className="text-metallic-500 block uppercase tracking-wider">EMAIL DISPATCH</span>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email.support}`}
                    className="text-white hover:text-racing-400 font-bold text-sm mt-1 block transition-colors"
                  >
                    {COMPANY_CONTACT.email.support}
                  </a>
                  <span className="text-metallic-400 text-[11px]">Average Response Time: Under 15 Minutes</span>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-carbon-800 border border-white/10 flex items-center justify-center flex-shrink-0 text-racing-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs">
                  <span className="text-metallic-500 block uppercase tracking-wider">OPERATING SCHEDULE</span>
                  <p className="text-white font-bold mt-1">24/7 Hotline & Emergency Inquiries</p>
                  <p className="text-metallic-400 text-[11px] mt-0.5">{COMPANY_CONTACT.hours.facility}</p>
                </div>
              </div>
            </div>

            {/* Tactical Dark Blueprint Map Visualization */}
            <div className="bg-carbon-900 border border-white/10 p-6 clip-chamfer relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-racing-500 font-bold">
                  <Navigation className="w-4 h-4" />
                  <span>GPS RADAR // KING, NORTH CAROLINA</span>
                </div>
                <span className="font-mono text-[10px] text-metallic-500">36.2809° N, 80.3584° W</span>
              </div>

              {/* Stylized Tactical Radar Grid */}
              <div className="relative h-48 bg-carbon-950 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-fine-grid opacity-30" />
                {/* Radar sweep circle */}
                <div className="w-32 h-32 rounded-full border border-racing-500/30 animate-ping absolute" />
                <div className="w-48 h-48 rounded-full border border-white/10 absolute" />
                <div className="w-20 h-20 rounded-full border border-racing-500/50 absolute" />

                {/* Pin marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-racing-500 shadow-[0_0_15px_#E53935] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <span className="font-mono text-[10px] text-white font-bold mt-2 bg-carbon-900/90 px-2 py-0.5 border border-white/15">
                    A1 AUTO KING HUB
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-metallic-400">
                <span>310 Kirby Rd, King, NC 27021</span>
                <span className="text-racing-400">Direct Interstate Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-carbon-900 border border-white/10 p-8 sm:p-10 clip-chamfer shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-racing-500/10 border border-racing-500 flex items-center justify-center text-racing-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-metallic-300 text-sm max-w-md mx-auto mb-6">
                  Thank you for contacting A1 Auto King. Your inquiry has been routed to our certified technician queue. We will respond promptly via phone or email.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    reset();
                  }}
                  variant="primary"
                >
                  SEND ANOTHER MESSAGE
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                    DIRECT INQUIRY FORM
                  </h3>
                  <p className="text-sm text-metallic-400 mt-1">
                    Fill out the form below and an automotive specialist will review your request.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-950/40 border border-racing-500 flex items-center gap-2 text-xs font-mono text-red-300">
                    <AlertCircle className="w-4 h-4 text-racing-500" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 transition-colors"
                    />
                    {errors.name && <p className="text-racing-400 text-[10px] mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', { required: 'Valid email is required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 font-mono transition-colors"
                    />
                    {errors.email && <p className="text-racing-400 text-[10px] mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 font-mono transition-colors"
                    />
                    {errors.phone && <p className="text-racing-400 text-[10px] mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                      Subject / Topic *
                    </label>
                    <select
                      {...register('subject', { required: 'Subject required' })}
                      className="w-full bg-carbon-800 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-racing-500 transition-colors"
                    >
                      <option value="Engine Inventory Inquiry">Engine Inventory Inquiry</option>
                      <option value="Transmission Fitment Check">Transmission Fitment Check</option>
                      <option value="Order Tracking Update">Order Tracking / Freight Update</option>
                      <option value="Warranty & Return Question">Warranty & Return Question</option>
                      <option value="Commercial Fleet Account">Commercial Fleet Account</option>
                      <option value="Other General Inquiry">Other General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-1">
                    Your Message / Vehicle Details *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your vehicle year, make, model, VIN, or specific parts needed..."
                    {...register('message', { required: 'Message is required' })}
                    className="w-full bg-carbon-800 border border-white/10 p-4 text-sm text-white placeholder-metallic-500 focus:outline-none focus:border-racing-500 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-racing-400 text-[10px] mt-1">{errors.message.message}</p>}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full font-display tracking-widest text-sm"
                    disabled={submitting}
                  >
                    {submitting ? 'TRANSMITTING MESSAGE...' : 'SEND MESSAGE'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
