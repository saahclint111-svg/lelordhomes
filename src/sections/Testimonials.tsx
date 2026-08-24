import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-[#080808] px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Client Feedback" title="WHAT OUR CLIENTS SAY" />

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 border border-white/10 hover:border-[#C8A45D] transition-colors" aria-label="Previous testimonial">
              <ChevronLeft size={18} className="text-[#A5A5A5]" />
            </button>
            <span className="text-[#A5A5A5] text-xs font-inter">{index + 1} / {testimonials.length}</span>
            <button onClick={next} className="p-2 border border-white/10 hover:border-[#C8A45D] transition-colors" aria-label="Next testimonial">
              <ChevronRight size={18} className="text-[#A5A5A5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
