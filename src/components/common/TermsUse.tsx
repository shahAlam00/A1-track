import React from 'react';
import { Shield, Code, Cpu, AlertTriangle, Mail } from 'lucide-react';

export default function TermsUse() {
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
              <Shield className="w-4 h-4 text-racing-500" />
              WEBSITE GOVERNANCE
            </span>
            <span className="text-xs font-mono text-metallic-500">Last Updated: June 2026</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase">
            Terms of <span className="text-racing-500">Use</span>
          </h1>
          <p className="text-sm font-mono text-metallic-400 mt-2">
            Please review these Terms of Use carefully before navigating the A1 Auto King platform, utilizing our online catalogs, or interacting with our automated tools.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm font-mono text-metallic-400 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Code className="w-5 h-5 text-racing-500" />
              <h2>1. Intellectual Property Rights</h2>
            </div>
            <p>
              All content featured on this platform—including UI layouts, custom graphic components, part catalogs, text, logos, icons, and software code—is the property of A1 Auto King Certified Parts LLC and is protected by applicable intellectual property laws. Unauthorized duplication, scraping, or commercial exploitation is strictly prohibited.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Cpu className="w-5 h-5 text-racing-500" />
              <h2>2. Use of VIN & HIN Verification Tools</h2>
            </div>
            <p>
              Our VIN and HIN verification tools are provided to assist customers in checking part compatibility and tracking records. You agree not to misuse these tools, attempt to bypass system security, or input fraudulent data into our lookup databases.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <AlertTriangle className="w-5 h-5 text-racing-500" />
              <h2>3. Limitation of Liability</h2>
            </div>
            <p>
              A1 Auto King shall not be held liable for any direct, indirect, incidental, or consequential damages arising out of your use of this website, delayed freight deliveries, or improper technical selection of automotive components.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 bg-carbon-900/40 p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-2">
              <Mail className="w-5 h-5 text-racing-500" />
              <h2>4. Support & Inquiries</h2>
            </div>
            <p>
              For any questions regarding these Terms of Use or platform access, please reach out to our team:
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