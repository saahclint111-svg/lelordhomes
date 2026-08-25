import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { images } from '../data/images';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Founder: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-24 bg-[#080808] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' as const }}
          className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10"
        >
          <img
            src={images.founder}
            alt="Isaac Umoren — Founder, Le Lörd Homes"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML =
                  '<div class="w-full h-full bg-[#111111] flex items-center justify-center"><span class="text-[#5a5a5a] text-sm font-sans">Portrait coming soon</span></div>';
              }
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' as const }}
        >
          <p           className="text-[#C8A45D] tracking-[0.28em] uppercase text-[10px] font-sans font-semibold mb-5">
            FOUNDER
          </p>
          <h2 className="text-white font-sans font-bold tracking-[-0.01em] text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] mb-2">
            ISAAC UMOREN
          </h2>
          <p className="text-[#5a5a5a] font-sans font-light text-sm tracking-[0.12em] uppercase mb-10">
            Founder / Property Consultant
          </p>

          <p className="text-[#A5A5A5] font-sans font-light text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Isaac founded Le Lörd Homes with a clear purpose — to bring professional, honest and practical property expertise to landlords, investors and owners who deserve better than average.
          </p>

          <WhatsAppButton
            variant="inline"
            label="Speak With Isaac"
            message="Hi Isaac, I've visited the Le Lörd Homes website and I'd like to speak with you about your property services."
          />
        </motion.div>
      </div>
    </section>
  );
};
