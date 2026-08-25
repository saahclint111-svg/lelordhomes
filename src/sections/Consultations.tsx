import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { consultations } from '../data/consultations';

export const ConsultationsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-32 md:py-48 bg-[#080808] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#C8A45D] tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-8">
          BOOK A SESSION
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <h2 className="text-white font-sans font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.8rem)]">
            PROPERTY CONSULTATIONS
          </h2>
          <p className="text-[#5a5a5a] font-sans font-light text-sm leading-relaxed max-w-xs">
            Sometimes the right conversation is the first step toward the right property decision.
          </p>
        </div>

        <div className="divide-y divide-white/5">
          {consultations.map((c, i) => (
            <motion.div
              key={c.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group py-8 md:py-10 flex items-start md:items-center gap-6 md:gap-10 cursor-pointer"
            >
              <span className="text-[11px] tracking-[0.2em] font-sans font-medium text-[#3a3a3a] group-hover:text-[#C8A45D] transition-colors duration-300 shrink-0 mt-1 md:mt-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-sans font-semibold text-base md:text-lg tracking-[0.04em] mb-1 group-hover:text-[#C8A45D] transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-[#5a5a5a] font-sans font-light text-sm leading-relaxed group-hover:text-[#A5A5A5] transition-colors duration-300">
                  {c.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/consultations"
            className="inline-flex items-center gap-3 border border-[#C8A45D]/60 text-[#C8A45D] font-sans font-medium tracking-[0.2em] uppercase text-[11px] px-7 py-3.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
          >
            VIEW ALL CONSULTATIONS →
          </Link>
        </div>
      </div>
    </section>
  );
};
