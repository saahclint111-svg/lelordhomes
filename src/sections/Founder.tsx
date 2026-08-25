import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import { WhatsAppButton } from '../components/WhatsAppButton';

const focusAreas = [
  'Property Consultancy',
  'HMO Management',
  'Deal Sourcing',
  'Serviced Accommodation',
  'Airbnb Consultancy',
];

export const Founder: React.FC = () => (
  <section className="py-24 md:py-32 bg-[#111111] px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden"
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
              parent.innerHTML = '<div class="w-full h-full bg-[#151515] border border-white/5 flex items-center justify-center"><span class="text-[#A5A5A5] text-sm font-inter">Portrait coming soon</span></div>';
            }
          }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="text-[#C8A45D] tracking-[0.3em] uppercase text-xs font-inter mb-6">Meet the Founder</p>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-2">ISAAC UMOREN</h2>
        <p className="text-[#A5A5A5] font-inter text-base mb-8">Founder / Property Consultant</p>

        <div className="mb-8">
          <p className="text-[#C8A45D] text-xs tracking-widest uppercase font-inter mb-4">Areas of Focus</p>
          <ul className="space-y-2">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-3 text-[#D7D7D7] font-inter text-sm">
                <span className="w-4 h-px bg-[#C8A45D]" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <WhatsAppButton
          variant="inline"
          label="Speak With Isaac"
          message="Hi Isaac, I've visited the Le Lörd Homes website and I'd like to speak with you about your property services."
        />
      </motion.div>
    </div>
  </section>
);
