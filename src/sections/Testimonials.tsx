import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';
import { TestimonialCard } from '../components/TestimonialCard';

export const Testimonials: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-24 bg-[#080808] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[#C8A45D] tracking-[0.28em] uppercase text-[10px] font-sans font-semibold mb-4"
        >
          TESTIMONIALS
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <h2 className="text-white font-sans font-bold leading-[1.1] tracking-[-0.01em] text-[clamp(1.8rem,3.2vw,2.7rem)]">
            Client Feedback
          </h2>
          <Link
            to="/consultations"
            className="text-[#C8A45D] text-[11px] tracking-[0.16em] uppercase font-sans font-medium hover:text-white transition-colors duration-200 shrink-0"
          >
            Book a Session →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
