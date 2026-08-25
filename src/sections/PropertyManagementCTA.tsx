import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Button } from '../components/Button';

export const PropertyManagementCTA: React.FC = () => (
  <section className="relative py-40 md:py-56 px-6 overflow-hidden">
    <div className="absolute inset-0">
      <img src={images.propertyMgmt} alt="" aria-hidden className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        className="text-[#C8A45D] tracking-[0.35em] uppercase text-[11px] font-inter mb-7"
      >
        Property Management
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.1 }}
        className="font-playfair text-5xl md:text-7xl font-bold text-white mb-7 leading-tight tracking-tight"
      >
        HAVE A PROPERTY?<br />
        <span className="italic">LET'S TALK.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.2 }}
        className="text-[#D7D7D7] font-inter text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
      >
        Whether you need support managing a property, improving its performance or finding the right strategy, let's discuss what you need.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button variant="primary" href="/contact" arrow>Property Management Enquiry</Button>
        <WhatsAppButton
          variant="inline"
          message="Hi Le Lörd Homes, I have a property and I'd like to discuss management options."
        />
      </motion.div>
    </div>
  </section>
);
