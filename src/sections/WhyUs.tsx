import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const pillars = [
  { num: '01', label: 'CLARITY', desc: 'Transparent guidance at every step.' },
  { num: '02', label: 'QUALITY', desc: 'Premium standards in everything we deliver.' },
  { num: '03', label: 'CONFIDENCE', desc: 'Property decisions made with certainty.' },
];

export const WhyUs: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-24 bg-[#080808] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#C8A45D] tracking-[0.28em] uppercase text-[10px] font-sans font-semibold mb-4">
          WHY LE LÖRD
        </p>
        <h2 className="text-white font-bold text-[clamp(1.8rem,3.4vw,2.8rem)] tracking-[-0.01em] mb-10">
          Why Choose Le Lörd Homes
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {pillars.map(({ num, label, desc }, i) => (
            <motion.div
              key={label}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="rounded-xl border border-white/10 bg-[#101010] px-5 py-6"
            >
              <p className="text-[#C8A45D] text-[11px] tracking-[0.16em] font-sans font-semibold mb-3">{num}</p>
              <h3 className="text-white font-sans font-bold tracking-[0.03em] text-xl md:text-2xl mb-3">{label}</h3>
              <p className="text-[#A5A5A5] font-sans font-light text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
