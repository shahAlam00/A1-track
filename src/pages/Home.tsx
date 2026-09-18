import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/common/Marquee';
import { StatsSection } from '../components/home/StatsSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { PartsInventoryGrid } from '../components/home/PartsInventoryGrid';
import { FeaturedCategoryScroll } from '../components/home/FeaturedCategoryScroll';
import { VehicleBrands } from '../components/home/VehicleBrands';
import { AboutPreview } from '../components/home/AboutPreview';
import { TestimonialsSlider } from '../components/home/TestimonialsSlider';
import { QuoteCTASection } from '../components/home/QuoteCTASection';

export const Home: React.FC = () => {
  const { openQuote } = useOutletContext<{ openQuote: (category?: string) => void }>();

  return (
    <div className="w-full">
      {/* 1. Cinematic Hero */}
      <Hero onOpenQuote={openQuote} />

      {/* 2. GSAP Infinite Marquee Ticker */}
      <Marquee />

      {/* 3. Trust Statistics Counters */}
      <StatsSection />

      {/* 4. Asymmetric Bento "Why A1 Auto King" */}
      <WhyChooseUs />

      {/* 5. Parts Inventory Grid */}
      <PartsInventoryGrid onOpenQuote={openQuote} />

      {/* 6. Featured Core Category Showcase */}
      <FeaturedCategoryScroll onOpenQuote={openQuote} />

      {/* 7. Serviced Vehicle Brands (18 OEMs) */}
      <VehicleBrands onOpenQuote={openQuote} />

      {/* 8. Split-Screen About Heritage Preview */}
      <AboutPreview />

      {/* 9. Verified Customer Testimonials Slider */}
      <TestimonialsSlider />

      {/* 10. Dramatic Quote CTA Section & Embedded Form */}
      <QuoteCTASection onOpenModal={() => openQuote()} />
    </div>
  );
};
