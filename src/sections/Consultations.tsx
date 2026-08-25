import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { consultations } from '../data/consultations';

export const ConsultationsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-24 bg-[#080808] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#C8A45D] tracking-[0.28em] uppercase text-[10px] font-sans font-semibold mb-4">
          BOOK A SESSION
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2 className="text-white font-sans font-bold leading-[1.08] tracking-[-0.01em] text-[clamp(1.8rem,3.4vw,2.8rem)]">
            PROPERTY CONSULTATIONS
          </h2>
          <p className="text-[#A5A5A5] font-sans font-light text-sm leading-relaxed max-w-md">
            Sometimes the right conversation is the first step toward the right property decision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {consultations.map((c, i) => (
            <motion.div
              key={c.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group h-full rounded-xl border border-white/10 bg-[#101010] p-5 md:p-6 transition-all duration-300 hover:border-[#C8A45D]/50"
            >
              <span className="text-[11px] tracking-[0.16em] font-sans font-semibold text-[#C8A45D] transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mt-3">
                <h3 className="text-white font-sans font-semibold text-base md:text-lg tracking-[0.02em] mb-1 group-hover:text-[#C8A45D] transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-[#A5A5A5] font-sans font-light text-sm leading-relaxed transition-colors duration-300">
                  {c.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/consultations"
            className="inline-flex items-center gap-3 border border-[#C8A45D]/60 text-[#C8A45D] font-sans font-medium tracking-[0.16em] uppercase text-[11px] px-6 py-3.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
          >
            VIEW ALL CONSULTATIONS →
          </Link>
        </div>
      </div>
    </section>
  );
};
