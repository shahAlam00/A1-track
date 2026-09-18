import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CustomCursor } from '../common/CustomCursor';
import { ScrollProgress } from '../common/ScrollProgress';
import { Loader } from '../common/Loader';
import { GlobalQuoteModal } from '../common/GlobalQuoteModal';

export const Layout: React.FC = () => {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<string | undefined>(undefined);
  const location = useLocation();

  const handleOpenQuote = (category?: string) => {
    setQuoteCategory(category);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteCategory(undefined);
  };

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-carbon-950 text-metallic-200 selection:bg-racing-500 selection:text-white relative">
      {/* Cinematic Initial Loader */}
      {!loaderComplete && <Loader onComplete={() => setLoaderComplete(true)} />}

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Desktop Custom Precision Cursor */}
      <CustomCursor />

      {/* Sticky Header with Mega Menu */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        <Outlet context={{ openQuote: handleOpenQuote }} />
      </main>

      {/* Full Automotive Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Global Interactive Quote Modal */}
      <GlobalQuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        defaultCategory={quoteCategory}
      />
    </div>
  );
};
