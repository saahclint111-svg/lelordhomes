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
      className="relative w-full min-h-[680px] pt-24 pb-12 md:pt-28 md:pb-16 flex items-center overflow-hidden bg-[#080808]"
      aria-label="Hero"
      style={{ minHeight: '88svh' }}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? {} : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
      >
        <img
          src={images.hero}
          alt="Premium UK property"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/72 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />

      <div className="relative z-10 w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
        <motion.p
          {...fadeUp(0.4)}
          className="text-[#C8A45D] tracking-[0.28em] uppercase text-[10px] font-sans font-semibold mb-5"
        >
          LE LÖRD HOMES
        </motion.p>

        <motion.h1
          {...fadeUp(0.6)}
          className="text-white font-sans font-bold leading-[1.04] tracking-[-0.01em] text-[clamp(2rem,4.4vw,4.4rem)] max-w-3xl mb-5"
        >
          Premium Property Solutions for Landlords, Investors & Owners
        </motion.h1>

        <motion.p
          {...fadeUp(0.8)}
          className="text-[#D7D7D7] font-sans font-light text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8"
        >
          We help you buy smarter, manage better and grow confidently through trusted consultancy, management and property strategy services.
        </motion.p>

        <motion.div
          {...fadeUp(1.0)}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 mb-9"
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 border border-[#C8A45D] text-[#C8A45D] font-sans font-medium tracking-[0.14em] uppercase text-[11px] px-6 py-3.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
          >
            Explore Services
          </Link>
          <Link
            to="/consultations"
            className="inline-flex items-center justify-center gap-3 text-white font-sans font-medium tracking-[0.14em] uppercase text-[11px] px-6 py-3.5 border border-white/30 hover:border-white/70 transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp(1.15)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl"
        >
          {[
            { label: 'Property Consultancy', value: 'Strategic Guidance' },
            { label: 'Management Support', value: 'Hands-On Delivery' },
            { label: 'Investment Focus', value: 'Growth-Oriented' },
          ].map((item) => (
            <div key={item.label} className="bg-black/45 border border-white/12 rounded-lg px-4 py-4 backdrop-blur-[1px]">
              <p className="text-white font-sans font-semibold text-sm mb-1">{item.label}</p>
              <p className="text-[#A5A5A5] text-xs tracking-[0.08em] uppercase">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
