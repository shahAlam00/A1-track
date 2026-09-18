import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MAIN_NAV, PARTS_DROPDOWN, COMPANY_CONTACT } from '../../data/navigation';
import { ChevronDown, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenQuote }) => {
  const [partsExpanded, setPartsExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[70px] z-[150] bg-carbon-950/98 backdrop-blur-2xl overflow-y-auto border-t border-white/10 flex flex-col justify-between p-6 animate-fadeIn">
      <div className="space-y-4">
        {/* Navigation Link List */}
        <div className="flex flex-col space-y-1">
          {MAIN_NAV.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.label} className="border-b border-white/5 py-2">
                  <button
                    onClick={() => setPartsExpanded(!partsExpanded)}
                    className="w-full flex items-center justify-between text-lg font-display font-bold uppercase tracking-wider text-white py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-racing-500 transition-transform duration-200 ${
                        partsExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded Subcategories */}
                  {partsExpanded && (
                    <div className="pl-4 py-2 space-y-3 bg-carbon-900/60 mt-1 border-l-2 border-racing-500">
                      {PARTS_DROPDOWN.map((cat) => (
                        <NavLink
                          key={cat.slug}
                          to={cat.href}
                          onClick={onClose}
                          className="flex items-center justify-between text-sm font-medium text-metallic-300 hover:text-white py-1"
                        >
                          <span>{cat.name}</span>
                          <span className="font-mono text-[10px] text-racing-500">{cat.count}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between text-lg font-display font-bold uppercase tracking-wider py-3 border-b border-white/5 transition-colors ${
                    isActive ? 'text-racing-500' : 'text-white hover:text-racing-400'
                  }`
                }
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-metallic-500" />
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions & Support Contact */}
      <div className="pt-8 mt-6 border-t border-white/10 space-y-4">
        <Button
          onClick={() => {
            onClose();
            onOpenQuote();
          }}
          variant="primary"
          size="lg"
          className="w-full"
        >
          GET A FREE QUOTE
        </Button>

        <a
          href={`tel:${COMPANY_CONTACT.phone.raw}`}
          className="flex items-center justify-center gap-2.5 w-full py-3 bg-carbon-900 border border-white/10 text-white font-mono text-xs uppercase tracking-wider hover:bg-carbon-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-racing-500" />
          <span>Call Dispatch ({COMPANY_CONTACT.phone.display})</span>
        </a>

        <div className="flex items-center justify-center gap-2 text-center text-xs font-mono text-metallic-400 pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-racing-500" />
          <span>310 Kirby Rd, King, NC 27021 • 24/7 Support</span>
        </div>
      </div>
    </div>
  );
};
