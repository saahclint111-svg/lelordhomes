import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const ContactCTA: React.FC = () => (
  <section className="py-24 md:py-32 bg-[#111111] px-6 text-center">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#C8A45D] tracking-[0.3em] uppercase text-xs font-inter mb-4"
      >
        Get in Touch
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6"
      >
        LET'S TALK PROPERTY.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-[#A5A5A5] font-inter text-base mb-10"
      >
        Have a question, a property or an investment idea? Start the conversation with Le Lörd Homes.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
      >
        <WhatsAppButton variant="inline" />
        <Link
          to="/consultations"
          className="inline-flex items-center gap-2 border border-[#C8A45D] text-[#C8A45D] font-inter font-medium tracking-widest uppercase text-sm px-8 py-4 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
        >
          Book a Consultation
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border border-white/20 text-[#D7D7D7] font-inter font-medium tracking-widest uppercase text-sm px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
        >
          Send an Enquiry
        </Link>
      </motion.div>
    </div>
  </section>
);
