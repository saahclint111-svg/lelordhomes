import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const BrandIntro: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay, ease: 'easeOut' as const },
        };

  return (
    <section
      className="py-32 md:py-48 bg-[#080808] px-6 md:px-12 lg:px-20"
      aria-labelledby="brand-intro-heading"
    >
      <div className="max-w-2xl">
        <motion.p
          {...fadeUp(0)}
          className="text-[#C8A45D] tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-8"
        >
          OUR APPROACH
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          id="brand-intro-heading"
          className="text-white font-sans font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(2.4rem,5vw,4.5rem)] mb-8"
        >
          PROPERTY MADE<br />SIMPLER.
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="text-[#A5A5A5] font-sans font-light text-base md:text-lg leading-relaxed max-w-lg"
        >
          Le Lörd Homes provides professional property solutions designed around clarity, quality and confidence. Whether you are a landlord, investor or property owner, we simplify every step of your property journey.
        </motion.p>
      </div>
    </section>
  );
};
