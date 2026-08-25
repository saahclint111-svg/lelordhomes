import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const ContactCTA: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-40 md:py-56 bg-[#080808] px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[#C8A45D] tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-8"
        >
          GET IN TOUCH
        </motion.p>
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white font-sans font-bold leading-[1.0] tracking-[-0.02em] text-[clamp(2.5rem,6vw,5rem)] mb-8"
        >
          READY TO MAKE<br />YOUR NEXT MOVE?
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#5a5a5a] font-sans font-light text-base md:text-lg leading-relaxed mb-12"
        >
          Have a question, a property or an investment idea? Start the conversation with Le Lörd Homes today.
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/consultations"
            className="inline-flex items-center gap-3 bg-[#C8A45D] text-black font-sans font-semibold tracking-[0.2em] uppercase text-[11px] px-8 py-4 hover:bg-[#9B793D] transition-colors duration-300"
          >
            BOOK A CONSULTATION
          </Link>
          <WhatsAppButton variant="inline" />
        </motion.div>
      </div>
    </section>
  );
};
