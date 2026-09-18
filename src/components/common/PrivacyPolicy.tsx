import React from 'react';
import { ShieldCheck, Lock, Eye, Database, Mail, RefreshCw } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-4 h-4 text-racing-500" />
              LEGAL DOCUMENTATION
            </span>
            <span className="text-xs font-mono text-metallic-500">Last Updated: June 2026</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase">
            Privacy <span className="text-racing-500">Policy</span>
          </h1>
          <p className="text-sm font-mono text-metallic-400 mt-2">
            A1 Auto King Certified Parts LLC respects your privacy and is committed to protecting your personal information.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm font-mono text-metallic-400 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Database className="w-5 h-5 text-racing-500" />
              <h2>1. Information We Collect</h2>
            </div>
            <p>
              When you use our platform, verify VIN/HIN numbers, request quotes, or purchase certified OEM used auto parts, we collect certain information to ensure precise order processing and shipping:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-metallic-300 pl-2">
              <li><strong className="text-white">Personal Identification:</strong> Name, billing/shipping address, email address, and phone number.</li>
              <li><strong className="text-white">Vehicle Data:</strong> VIN (Vehicle Identification Number), HIN (Hull Identification Number), make, model, and year specifications required for part compatibility matching.</li>
              <li><strong className="text-white">Transaction Details:</strong> Order history, tracking data, and communication logs with our customer support team.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Eye className="w-5 h-5 text-racing-500" />
              <h2>2. How We Use Your Information</h2>
            </div>
            <p>
              The data collected is strictly utilized to maintain our high standards of customer service and inventory fulfillment:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-metallic-300 pl-2">
              <li>To process and dispatch your auto parts orders with nationwide freight carriers.</li>
              <li>To run accurate multi-point dyno diagnostic checks and verify part compatibility using VIN/HIN tools.</li>
              <li>To send order status updates, tracking numbers, and prompt responses to your quote requests.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Lock className="w-5 h-5 text-racing-500" />
              <h2>3. Data Security & Protection</h2>
            </div>
            <p>
              We implement robust technical and organizational security measures to protect your personal and vehicle data against unauthorized access, alteration, disclosure, or destruction. Secure Socket Layer (SSL) encryption is utilized across all form submissions and checkout processes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <RefreshCw className="w-5 h-5 text-racing-500" />
              <h2>4. Policy Updates</h2>
            </div>
            <p>
              A1 Auto King reserves the right to modify or update this Privacy Policy at any time. Any changes will be reflected on this page with an updated revision date.
            </p>
          </section>

          {/* Section 5 - Contact */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Mail className="w-5 h-5 text-racing-500" />
              <h2>5. Contact Us Regarding Privacy</h2>
            </div>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please feel free to reach out to our support department:
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