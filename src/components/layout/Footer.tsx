import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_CONTACT, PARTS_DROPDOWN } from '../../data/navigation';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenQuote: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="relative bg-carbon-950 border-t border-white/10 text-metallic-300 pt-16 pb-12 overflow-hidden">
      {/* Background fine grid overlay */}
      <div className="absolute inset-0 bg-fine-grid opacity-15 pointer-events-none" />

      {/* Decorative top red gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-racing-500 to-transparent shadow-[0_0_20px_#E53935]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 bg-carbon-800 border border-white/15 flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-racing-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-display font-black text-2xl tracking-tighter text-white">
                    A1 AUTO
                  </span>
                  <span className="font-display font-black text-2xl tracking-tighter text-racing-500">
                    KING
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-metallic-400 mt-0.5">
                  CERTIFIED OEM AUTOMOTIVE RECYCLING
                </span>
              </div>
            </Link>

            <p className="text-sm text-metallic-400 max-w-sm leading-relaxed">
              Your trusted source for premium quality used auto parts. Save $100–$250 without compromising on quality, backed by nationwide shipping and rigorous multi-point dyno diagnostics.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-carbon-800 border border-white/10 text-[11px] font-mono text-metallic-300">
                <ShieldCheck className="w-3.5 h-3.5 text-racing-500" />
                28+ Years Industry Heritage
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-carbon-800 border border-white/10 text-[11px] font-mono text-metallic-300">
                500K+ Parts Available
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold pb-2 border-b border-white/10">
              EXPLORE PLATFORM
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link to="/" className="text-metallic-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-metallic-400 hover:text-white transition-colors">
                  About A1 Auto King
                </Link>
              </li>
              <li>
                <Link to="/vin-verification" className="text-metallic-400 hover:text-white transition-colors">
                  VIN Verification Tool
                </Link>
              </li>
              <li>
                <Link to="/hin-verification" className="text-metallic-400 hover:text-white transition-colors">
                  HIN Verification Tool
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-metallic-400 hover:text-white transition-colors">
                  Track Freight Order
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-metallic-400 hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Certified Auto Parts Catalog */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold pb-2 border-b border-white/10">
              PARTS CATALOG
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {PARTS_DROPDOWN.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={cat.href}
                    className="group inline-flex items-center gap-1.5 text-metallic-400 hover:text-white transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-metallic-500 opacity-0 group-hover:opacity-100 group-hover:text-racing-500 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information & Facility */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold pb-2 border-b border-white/10">
              FACILITY & DISPATCH
            </h4>
            <div className="space-y-3 text-xs font-mono text-metallic-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-racing-500 flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_CONTACT.address.street}
                  <br />
                  {COMPANY_CONTACT.address.city}, {COMPANY_CONTACT.address.state} {COMPANY_CONTACT.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-racing-500 flex-shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phone.raw}`} className="text-white hover:text-racing-400 transition-colors font-bold">
                  {COMPANY_CONTACT.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-racing-500 flex-shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email.support}`} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT.email.support}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-racing-500 flex-shrink-0" />
                <span>{COMPANY_CONTACT.hours.support}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full py-2 bg-racing-500/10 hover:bg-racing-500 text-racing-400 hover:text-white border border-racing-500/30 uppercase text-[11px] font-bold tracking-wider transition-all"
                >
                  REQUEST QUICK QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-metallic-500">
          <div>
            © {new Date().getFullYear()} A1 Auto King Certified Parts LLC. All rights reserved. Precision Automotive Recycling.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-metallic-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-metallic-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/terms-of-use" className="hover:text-metallic-300 transition-colors">
              Terms & Use
            </Link>
            <Link to="/refund-policy" className="hover:text-metallic-300 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};