import React from 'react';
import { FileText, ShieldCheck, Wrench, Truck, Mail } from 'lucide-react';

export default function TermCondition() {
  return (
    <div className="relative bg-carbon-950 text-metallic-300 min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background fine grid overlay */}
      <div className="absolute inset-0 bg-fine-grid opacity-15 pointer-events-none" />

      {/* Decorative top red gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-racing-500 to-transparent shadow-[0_0_20px_#E53935]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-carbon-800 border border-white/10 text-xs font-mono text-racing-400">
              <FileText className="w-4 h-4 text-racing-500" />
              LEGAL AGREEMENT
            </span>
            <span className="text-xs font-mono text-metallic-500">Last Updated: June 2026</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase">
            Terms & <span className="text-racing-500">Conditions</span>
          </h1>
          <p className="text-sm font-mono text-metallic-400 mt-2">
            Welcome to A1 Auto King Certified Parts LLC. By accessing our website, verifying VIN/HIN numbers, or purchasing used auto parts, you agree to comply with and be bound by the following terms.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm font-mono text-metallic-400 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <ShieldCheck className="w-5 h-5 text-racing-500" />
              <h2>1. Use of Platform & Services</h2>
            </div>
            <p>
              You agree to use our platform only for lawful purposes and in accordance with these Terms. You must ensure that any Vehicle Identification Number (VIN) or Hull Identification Number (HIN) submitted through our verification tools is accurate and belongs to the vehicle or watercraft in question.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Wrench className="w-5 h-5 text-racing-500" />
              <h2>2. Certified OEM Parts & Diagnostics</h2>
            </div>
            <p>
              All used auto parts undergo rigorous multi-point dyno diagnostics and inspection before dispatch. However, professional installation by a certified mechanic is strongly recommended. A1 Auto King is not liable for damage resulting from improper installation, misuse, or failure to verify component compatibility prior to fitting.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Truck className="w-5 h-5 text-racing-500" />
              <h2>3. Shipping, Freight, & Delivery</h2>
            </div>
            <p>
              We provide nationwide shipping and freight delivery for engines, transmissions, and heavy components. Delivery timelines are estimates and subject to freight carrier schedules. Customers must inspect freight shipments upon arrival and note any transit damage on the delivery receipt immediately.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Mail className="w-5 h-5 text-racing-500" />
              <h2>4. Contact Information</h2>
            </div>
            <p>
              If you have any questions regarding these Terms & Conditions, please contact our support desk:
            </p>
            <div className="pt-2 text-white font-bold flex flex-col gap-1">
              <span>Email: <a href="mailto:support@a1autoking.com" className="text-racing-400 hover:underline">support@a1autoking.com</a></span>
              <span>Phone: <a href="tel:15023854318" className="text-racing-400 hover:underline">+1 (502) 385-4318</a></span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}