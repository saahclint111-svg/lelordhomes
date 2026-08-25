import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

const pillars = [
  'Reduce Stress',
  'Save Time',
  'Make Informed Decisions',
  'Maximise Property Potential',
];

export const BrandIntro: React.FC = () => (
  <section className="py-28 md:py-40 bg-[#080808] px-6" aria-labelledby="brand-intro-heading">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <SectionHeading
          eyebrow="The Le Lörd Approach"
          title="PROPERTY, MADE EASIER."
          align="left"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-5 text-[#A5A5A5] font-inter text-base leading-[1.85] max-w-lg"
        >
          <p>
            Le Lörd Homes provides professional property solutions designed to make property ownership, investment and management simpler.
          </p>
          <p>
            Whether you are a landlord, investor or property owner, our approach combines practical support, strategic guidance and a clear understanding of property.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="bg-[#111111] border border-white/5 p-7 hover:border-[#C8A45D]/25 transition-colors duration-300"
          >
            <div className="w-8 h-px bg-[#C8A45D] mb-4" />
            <p className="font-playfair text-white text-sm font-semibold uppercase tracking-wide leading-snug">{pillar}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
