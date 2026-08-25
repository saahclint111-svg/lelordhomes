import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../data/images';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: 'easeOut' as const },
        };

  return (
    <section
      className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden"
      aria-label="Hero"
      style={{ minHeight: '100svh' }}
    >
      {/* Background image with cinematic slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? {} : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        <img
          src={images.hero}
          alt="Premium UK property"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

      {/* Content — bottom-left aligned, editorial */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1400px] mx-auto">
        <motion.p
          {...fadeUp(0.4)}
          className="text-[#C8A45D] tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-5"
        >
          LE LÖRD HOMES
        </motion.p>

        <motion.h1
          {...fadeUp(0.6)}
          className="text-white font-sans font-bold leading-[0.95] tracking-[-0.02em] text-[clamp(3rem,9vw,7.5rem)] mb-6"
        >
          PROPERTY,<br />REDEFINED.
        </motion.h1>

        <motion.p
          {...fadeUp(0.8)}
          className="text-[#A5A5A5] font-sans font-light text-base md:text-lg max-w-md leading-relaxed mb-10"
        >
          Premium property solutions for living, investing and managing with confidence.
        </motion.p>

        <motion.div
          {...fadeUp(1.0)}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 border border-[#C8A45D] text-[#C8A45D] font-sans font-medium tracking-[0.2em] uppercase text-[11px] px-7 py-3.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
          >
            EXPLORE SERVICES
          </Link>
          <Link
            to="/consultations"
            className="inline-flex items-center gap-3 text-white font-sans font-medium tracking-[0.2em] uppercase text-[11px] px-7 py-3.5 border border-white/25 hover:border-white/60 transition-all duration-300"
          >
            BOOK A CONSULTATION
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
