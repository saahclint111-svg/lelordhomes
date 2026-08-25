import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { images } from '../data/images';
import { Link } from 'react-router-dom';

export const PropertyManagementCTA: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-40 md:py-56 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Large editorial image */}
      <div className="absolute inset-0">
        <img
          src={images.propertyMgmt}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[#C8A45D] tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-8"
        >
          FEATURED PROPERTY
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white font-sans font-bold leading-[1.0] tracking-[-0.02em] text-[clamp(2rem,5vw,4.5rem)] mb-4 max-w-2xl"
        >
          EXCEPTIONAL PROPERTY.<br />EXCEPTIONAL CARE.
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#A5A5A5] font-sans font-light text-base md:text-lg mb-10 max-w-md"
        >
          Whether you need support managing a property, improving performance or finding the right strategy — we can help.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-[#C8A45D] text-[#C8A45D] font-sans font-medium tracking-[0.2em] uppercase text-[11px] px-7 py-3.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
          >
            VIEW SERVICES →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
