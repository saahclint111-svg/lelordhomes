import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { images } from '../data/images';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) => prefersReducedMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay } };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src={images.hero}
          alt="Premium UK property"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p {...fadeUp(0.3)} className="text-[#C8A45D] tracking-[0.4em] uppercase text-xs font-inter font-medium mb-6">
          Premium Property Solutions
        </motion.p>

        <motion.h1 {...fadeUp(0.5)} className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-6">
          PROPERTY<br />
          <span className="italic">MADE EASIER.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.7)} className="text-[#D7D7D7] font-inter text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Expert property solutions and guidance designed to save you time, reduce stress and maximise your investment potential.
        </motion.p>

        <motion.div {...fadeUp(0.9)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#C8A45D] text-black font-inter font-medium tracking-widest uppercase text-sm px-8 py-4 hover:bg-[#9B793D] transition-colors duration-300"
          >
            Explore Our Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/40 text-white font-inter font-medium tracking-widest uppercase text-sm px-8 py-4 hover:border-[#C8A45D] hover:text-[#C8A45D] transition-all duration-300"
          >
            Speak With Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-inter">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
