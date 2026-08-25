import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../data/images';

export const Testimonials: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-32 md:py-48 bg-[#080808] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Large property image */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <img
            src={images.properties[1]}
            alt="Featured property"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Editorial text */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="text-[#C8A45D] tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-8">
            FEATURED PROPERTY
          </p>
          <h2 className="text-white font-sans font-bold leading-[1.1] tracking-[-0.01em] text-[clamp(1.8rem,3.5vw,3rem)] mb-4">
            A PREMIUM<br />PROPERTY PORTFOLIO
          </h2>
          <p className="text-[#5a5a5a] font-sans font-light text-sm leading-relaxed mb-10 max-w-xs">
            We work with high-quality properties across key UK locations, helping owners, investors and landlords achieve their goals.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-3 text-white font-sans font-medium tracking-[0.2em] uppercase text-[11px] border-b border-white/20 pb-1 hover:border-[#C8A45D] hover:text-[#C8A45D] transition-all duration-300"
          >
            VIEW SERVICES →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
