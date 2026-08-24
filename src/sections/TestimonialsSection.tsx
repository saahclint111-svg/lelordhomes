import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#111111] py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading heading="WHAT OUR CLIENTS SAY" />

        {/* Desktop: all cards */}
        <div className="mt-16 hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="mt-12 md:hidden relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <TestimonialCard testimonial={testimonials[current]} />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 border border-[rgba(200,164,93,0.3)] text-[#C8A45D] hover:bg-[rgba(200,164,93,0.1)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D]"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] ${
                    i === current ? 'bg-[#C8A45D]' : 'bg-[#A5A5A5]'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 border border-[rgba(200,164,93,0.3)] text-[#C8A45D] hover:bg-[rgba(200,164,93,0.1)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center font-body text-xs text-[#A5A5A5] italic">
          Testimonials will be updated with verified client reviews before launch.
        </p>
      </div>
    </section>
  );
}
