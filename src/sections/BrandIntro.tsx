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
      className="py-20 md:py-24 bg-[#080808] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      aria-labelledby="brand-intro-heading"
    >
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-start">
        <div className="max-w-3xl">
          <motion.p
            {...fadeUp(0)}
            className="text-[#C8A45D] tracking-[0.28em] uppercase text-[10px] font-sans font-semibold mb-5"
          >
            OUR APPROACH
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            id="brand-intro-heading"
            className="text-white font-sans font-bold leading-[1.14] tracking-[-0.01em] text-[clamp(1.8rem,3.8vw,3.3rem)] mb-5"
          >
            Professional Real-Estate Support Built Around Clarity and Results
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="text-[#A5A5A5] font-sans font-light text-sm sm:text-base leading-relaxed max-w-2xl"
          >
            Le Lörd Homes provides professional property solutions designed around clarity, quality and confidence. Whether you are a landlord, investor or property owner, we simplify every step of your property journey.
          </motion.p>
        </div>
        <motion.div
          {...fadeUp(0.25)}
          className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3.5"
        >
          {[
            'Tailored strategy for your property goals',
            'Reliable support across operations and growth',
            'Premium service quality with practical delivery',
          ].map((point) => (
            <div key={point} className="rounded-lg border border-white/10 bg-[#111111] px-4 py-4">
              <p className="text-[#D7D7D7] text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
