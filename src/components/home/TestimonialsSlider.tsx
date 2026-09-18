import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { TESTIMONIALS, TestimonialItem } from '../../data/testimonials';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 md:py-32 bg-carbon-900 relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-fine-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="VERIFIED CUSTOMER TESTIMONIALS"
            eyebrow="PROOF OF PERFORMANCE"
            title="TRUSTED BY THOUSANDS."
            subtitle="Read real feedback from vehicle owners, master mechanics, and commercial fleet managers across the country."
            className="mb-0 md:mb-0"
          />

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-carbon-950 border border-white/15 flex items-center justify-center text-white hover:border-racing-500 hover:text-racing-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-carbon-950 border border-white/15 flex items-center justify-center text-white hover:border-racing-500 hover:text-racing-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Slider Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item: TestimonialItem, idx: number) => (
            <div
              key={item.id}
              className={`relative bg-carbon-950 border p-8 flex flex-col justify-between transition-all duration-300 ${
                idx === 0
                  ? 'border-racing-500/80 shadow-2xl shadow-racing-500/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Star Rating & Quote Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-racing-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-racing-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10" />
                </div>

                <div className="mb-4 inline-block px-2.5 py-1 bg-carbon-900 border border-white/10 font-mono text-[11px] text-racing-400 font-semibold uppercase">
                  {item.savings}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-metallic-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Customer Info & Vehicle */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-white text-base uppercase tracking-wide">
                    {item.name}
                  </h4>
                  {item.verified && (
                    <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> VERIFIED
                    </span>
                  )}
                </div>
                <div className="font-mono text-xs text-metallic-400 mt-1">
                  {item.location}
                </div>
                <div className="font-mono text-[11px] text-racing-500 mt-1 font-semibold truncate">
                  {item.vehicle} • {item.partPurchased}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
