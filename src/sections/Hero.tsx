import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { images } from '../data/images';

const rotatingPhrases = [
  'Premium Spaces.',
  'Exceptional Living.',
  'Property Solutions.',
];

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 2800);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const fadeUp = (delay = 0) => prefersReducedMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } };

  return (
    <section className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <img
          src={images.hero}
          alt="Premium UK property"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0.2)} className="flex flex-col items-center mb-8">
          <img
            src="/images/le-lord-logo.png"
            alt="Le Lörd Homes"
            className="h-14 md:h-18 w-auto object-contain mb-3"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>

        <motion.p {...fadeUp(0.35)} className="text-[#C8A45D] tracking-[0.45em] uppercase text-xs font-inter font-medium mb-5">
          LE LÖRD HOMES
        </motion.p>

        {/* Static headline */}
        <motion.h1 {...fadeUp(0.5)} className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-2">
          Property,
        </motion.h1>

        {/* Rotating animated phrase */}
        <div className="h-[1.2em] overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -24 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold italic text-[#C8A45D] leading-[1.05] tracking-tight"
            >
              {rotatingPhrases[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p {...fadeUp(0.7)} className="text-[#D7D7D7] font-inter text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-12">
          Expert property solutions designed to save you time, reduce stress and maximise your investment potential.
        </motion.p>

        <motion.div {...fadeUp(0.9)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#C8A45D] text-black font-inter font-medium tracking-widest uppercase text-xs px-10 py-4 hover:bg-[#9B793D] transition-colors duration-300"
          >
            Explore Our Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/35 text-white font-inter font-medium tracking-widest uppercase text-xs px-10 py-4 hover:border-[#C8A45D] hover:text-[#C8A45D] transition-all duration-300"
          >
            Speak With Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase font-inter">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};
