import React from 'react';
import { RefreshCw, ShieldAlert, CheckCircle, Truck, Mail } from 'lucide-react';

export default function RefundPolicy() {
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
              <RefreshCw className="w-4 h-4 text-racing-500" />
              RETURN & REFUND GUIDELINES
            </span>
            <span className="text-xs font-mono text-metallic-500">Last Updated: June 2026</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase">
            Refund & <span className="text-racing-500">Return Policy</span>
          </h1>
          <p className="text-sm font-mono text-metallic-400 mt-2">
            At A1 Auto King, we ensure rigorous multi-point dyno testing on all OEM used auto parts. If something isn't right, our return process is transparent and hassle-free.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm font-mono text-metallic-400 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <CheckCircle className="w-5 h-5 text-racing-500" />
              <h2>1. Eligibility for Returns</h2>
            </div>
            <p>
              To be eligible for a return or exchange on certified auto parts, the following conditions must be met:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-metallic-300 pl-2">
              <li><strong className="text-white">Timeframe:</strong> Return requests must be initiated within 30 days of delivery.</li>
              <li><strong className="text-white">Condition:</strong> Parts must remain in the exact certified condition as shipped, without disassembly, alteration, or damage caused during installation.</li>
              <li><strong className="text-white">Verification:</strong> Parts must match the original VIN / HIN tracking tags and identifying marks applied by our dispatch facility.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Truck className="w-5 h-5 text-racing-500" />
              <h2>2. Freight & Shipping Returns</h2>
            </div>
            <p>
              Due to the specialized nature of heavy automotive freight (engines, transmissions, axle assemblies):
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-metallic-300 pl-2">
              <li>Freight shipments must be inspected upon arrival. Any transit damage must be noted with the carrier immediately.</li>
              <li>Return shipping charges are the responsibility of the customer unless the part received was incorrect or defective under our warranty terms.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <ShieldAlert className="w-5 h-5 text-racing-500" />
              <h2>3. Non-Returnable Items</h2>
            </div>
            <p>
              Certain categories cannot be returned for a refund once purchased or processed:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-metallic-300 pl-2">
              <li>Special-ordered or custom-cut body sections.</li>
              <li>Electrical components (ECUs, modules, sensors) that have been plugged in or installed, unless proven defective upon arrival.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Mail className="w-5 h-5 text-racing-500" />
              <h2>4. How to Initiate a Return</h2>
            </div>
            <p>
              To start a return claim, please contact our support department with your order number and reason for return:
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