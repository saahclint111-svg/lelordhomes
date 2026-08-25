import React from 'react';
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

  return (
    <section
      className="py-20 md:py-24 bg-[#080808] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C8A45D] tracking-[0.28em] uppercase text-[10px] font-sans font-semibold mb-4">
              WHAT WE DO
            </p>
            <h2
              id="services-heading"
              className="text-white font-sans font-bold leading-[1.1] tracking-[-0.01em] text-[clamp(1.8rem,3.6vw,3rem)]"
            >
              OUR SERVICES
            </h2>
          </div>
          <Link
            to="/services"
            className="text-[#C8A45D] text-[11px] tracking-[0.16em] uppercase font-sans font-medium hover:text-white transition-colors duration-200 shrink-0"
          >
            VIEW ALL SERVICES →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                to={item.to}
                className="group block h-full border border-white/10 bg-[#101010] rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-[#C8A45D]/50 hover:-translate-y-0.5"
                aria-label={item.title}
              >
                <span className="text-[11px] tracking-[0.16em] font-sans font-semibold text-[#C8A45D]">
                  {item.num}
                </span>
                <div className="mt-3">
                  <h3
                    className="text-white font-sans font-semibold tracking-[0.03em] text-base md:text-lg transition-colors duration-300 group-hover:text-[#C8A45D] mb-2"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#A5A5A5] font-sans font-light text-sm leading-relaxed transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                <span className="mt-4 inline-flex text-[#C8A45D] text-xs tracking-[0.15em] uppercase font-medium">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
