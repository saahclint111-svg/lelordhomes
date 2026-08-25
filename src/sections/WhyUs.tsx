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
    <section className="py-32 md:py-48 bg-[#080808] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#C8A45D] tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-16">
          WHY LE LÖRD
        </p>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map(({ num, label, desc }, i) => (
            <motion.div
              key={label}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <p className="text-[#3a3a3a] text-[11px] tracking-[0.2em] font-sans font-medium mb-5">{num}</p>
              <h3 className="text-white font-sans font-bold tracking-[0.06em] text-2xl md:text-3xl mb-4">{label}</h3>
              <p className="text-[#5a5a5a] font-sans font-light text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
