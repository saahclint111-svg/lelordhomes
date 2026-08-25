import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { images } from '../data/images';

const ROTATING_PHRASES = ['Premium Spaces.', 'Exceptional Living.', 'Property Solutions.'];
const PHRASE_DURATION = 3000; // ms each phrase is visible

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
    }, PHRASE_DURATION);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const fadeUp = (delay = 0) => prefersReducedMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay } };

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/15" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0.2)} className="flex flex-col items-center mb-8">
          <img
            src="/images/le-lord-logo.png"
            alt="Le Lörd Homes"
            className="h-14 md:h-20 w-auto object-contain mb-2"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>
        <motion.p {...fadeUp(0.35)} className="text-[#C8A45D] tracking-[0.45em] uppercase text-xs font-inter font-medium mb-5">
          LE LÖRD HOMES
        </motion.p>

        {/* Static first line */}
        <motion.div {...fadeUp(0.5)} className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-3">
          Premium Property
        </motion.div>

        {/* Animated rotating second line */}
        <div
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-8 italic overflow-hidden"
          style={{ minHeight: '1.15em' }}
          aria-live="polite"
          aria-atomic="true"
        >
          {prefersReducedMotion ? (
            <span className="text-[#C8A45D]">{ROTATING_PHRASES[0]}</span>
          ) : (
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[#C8A45D]"
              >
                {ROTATING_PHRASES[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          )}
        </div>

        <motion.p {...fadeUp(0.7)} className="text-[#D7D7D7] font-inter text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Expert property solutions and guidance designed to save you time, reduce stress and maximise your investment potential.
        </motion.p>

        <motion.div {...fadeUp(0.9)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#C8A45D] text-black font-inter font-medium tracking-widest uppercase text-sm px-9 py-4 hover:bg-[#9B793D] transition-colors duration-300"
          >
            Explore Our Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/40 text-white font-inter font-medium tracking-widest uppercase text-sm px-9 py-4 hover:border-[#C8A45D] hover:text-[#C8A45D] transition-all duration-300"
          >
            Speak With Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
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
