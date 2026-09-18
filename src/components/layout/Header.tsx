import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MAIN_NAV, COMPANY_CONTACT } from '../../data/navigation';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { Button } from '../common/Button';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: (category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3.5 shadow-2xl bg-carbon-950/90'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Emblem & Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => {
              setIsMobileOpen(false);
              setIsMegaOpen(false);
            }}
          >
            <div className="w-9 h-9 rounded-none bg-carbon-800 border border-white/15 flex items-center justify-center group-hover:border-racing-500 transition-colors shadow-lg">
              <svg
                className="w-5 h-5 text-racing-500 transition-transform duration-300 group-hover:scale-110"
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
                <span className="font-display font-black text-lg sm:text-xl tracking-tighter text-white">
                  A1 AUTO
                </span>
                <span className="font-display font-black text-lg sm:text-xl tracking-tighter text-racing-500">
                  KING
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-metallic-400 mt-0.5">
                PRECISION AUTO PARTS
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {MAIN_NAV.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsMegaOpen(true)}
                  >
                    <button
                      onClick={() => setIsMegaOpen(!isMegaOpen)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider font-semibold transition-colors ${
                        isMegaOpen ? 'text-racing-500' : 'text-metallic-300 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isMegaOpen ? 'rotate-180 text-racing-500' : 'text-metallic-400'
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-xs font-mono uppercase tracking-wider font-semibold transition-colors relative ${
                      isActive ? 'text-white' : 'text-metallic-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-racing-500 shadow-[0_0_8px_#E53935]" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Hotline & Get Quote CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_CONTACT.phone.raw}`}
              className="hidden xl:flex items-center gap-2 text-xs font-mono text-metallic-300 hover:text-white transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-racing-500" />
              <span className="font-semibold">{COMPANY_CONTACT.phone.display}</span>
            </a>

            <Button
              onClick={() => onOpenQuote()}
              variant="primary"
              size="sm"
              magnetic={true}
              icon={true}
            >
              GET A FREE QUOTE
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="sm:hidden px-3 py-1.5 bg-racing-500 text-white font-display text-xs font-bold uppercase tracking-wider"
            >
              QUOTE
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-metallic-300 hover:text-white bg-carbon-800/80 border border-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="w-6 h-6 text-racing-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu
          isOpen={isMegaOpen}
          onClose={() => setIsMegaOpen(false)}
          onOpenQuote={onOpenQuote}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenQuote={onOpenQuote}
      />
    </>
  );
};
