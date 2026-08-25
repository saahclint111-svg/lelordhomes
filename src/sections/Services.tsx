import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const items = [
  {
    num: '01',
    title: 'PROPERTY CONSULTANCY',
    desc: 'Strategic guidance for property decisions — from investment planning to portfolio growth.',
    to: '/services#property-consultancy',
  },
  {
    num: '02',
    title: 'PROPERTY MANAGEMENT',
    desc: 'Reliable, hands-on support for landlords and property owners managing HMOs and lets.',
    to: '/services#hmo-management',
  },
  {
    num: '03',
    title: 'DEAL SOURCING',
    desc: 'Carefully selected property opportunities aligned with your investment goals.',
    to: '/services#deal-sourcing',
  },
  {
    num: '04',
    title: 'SERVICED ACCOMMODATION',
    desc: 'Professionally managed short-stay spaces, fully optimised for guest experience and yield.',
    to: '/services#serviced-accommodation',
  },
];

export const ServicesSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="py-32 md:py-48 bg-[#080808] px-6 md:px-12 lg:px-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="text-[#C8A45D] tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-6">
              WHAT WE DO
            </p>
            <h2
              id="services-heading"
              className="text-white font-sans font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.8rem)]"
            >
              OUR SERVICES
            </h2>
          </div>
          <Link
            to="/services"
            className="text-[#C8A45D] text-[11px] tracking-[0.25em] uppercase font-sans font-medium hover:text-white transition-colors duration-200 shrink-0"
          >
            VIEW ALL SERVICES →
          </Link>
        </div>

        <div className="divide-y divide-white/5">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                to={item.to}
                className="group flex items-start md:items-center gap-6 md:gap-10 py-8 md:py-10 transition-all duration-300"
                aria-label={item.title}
              >
                <span
                  className="text-[11px] tracking-[0.2em] font-sans font-medium transition-colors duration-300 mt-1 md:mt-0 shrink-0"
                  style={{ color: hoveredIndex === i ? '#C8A45D' : '#3a3a3a' }}
                >
                  {item.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-white font-sans font-semibold tracking-[0.06em] text-base md:text-lg transition-colors duration-300 group-hover:text-[#C8A45D] mb-2 md:mb-1"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#5a5a5a] font-sans font-light text-sm leading-relaxed group-hover:text-[#A5A5A5] transition-colors duration-300 hidden md:block">
                    {item.desc}
                  </p>
                  <p className="text-[#5a5a5a] font-sans font-light text-sm leading-relaxed group-hover:text-[#A5A5A5] transition-colors duration-300 md:hidden mt-1">
                    {item.desc}
                  </p>
                </div>
                <span
                  className="text-[#C8A45D] text-lg transition-all duration-300 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
