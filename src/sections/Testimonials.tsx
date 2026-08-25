import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Link } from 'react-router-dom';

const trustPoints = [
  {
    label: 'Property Consultancy',
    desc: "Specialist guidance tailored to landlords, investors and property owners navigating complex property decisions.",
  },
  {
    label: 'HMO & Serviced Accommodation',
    desc: 'Deep experience managing high-yield property strategies including HMOs and serviced accommodation operations.',
  },
  {
    label: 'Deal Sourcing',
    desc: "A focused approach to identifying property opportunities that match each investor's goals and circumstances.",
  },
  {
    label: 'Airbnb & Short-Let Optimisation',
    desc: 'From listing creation to pricing strategy and guest management — helping hosts perform at their best.',
  },
];

export const Testimonials: React.FC = () => (
  <section className="py-32 md:py-44 bg-[#080808] px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Our Expertise"
        title="BUILT ON PROPERTY KNOWLEDGE"
        subtitle="Le Lörd Homes brings focused, practical expertise to every client engagement."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {trustPoints.map(({ label, desc }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="bg-[#111111] border border-white/5 p-10 hover:border-[#C8A45D]/20 transition-colors duration-300"
          >
            <div className="w-7 h-px bg-[#C8A45D] mb-5" />
            <h3 className="font-playfair text-xl font-bold text-white mb-4 leading-snug">{label}</h3>
            <p className="text-[#A5A5A5] text-sm leading-relaxed font-inter">{desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="text-center bg-[#111111] border border-white/5 p-16"
      >
        <p className="text-[#C8A45D] text-[11px] tracking-[0.35em] uppercase font-inter mb-5">Work With Us</p>
        <p className="font-playfair text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          Ready to take the next step?
        </p>
        <p className="text-[#A5A5A5] font-inter text-sm leading-relaxed max-w-xl mx-auto mb-10">
          Speak with Le Lörd Homes today to discuss your property, your goals and how we can help.
        </p>
        <Link
          to="/consultations"
          className="inline-flex items-center gap-2 border border-[#C8A45D] text-[#C8A45D] font-inter font-medium tracking-widest uppercase text-xs px-10 py-4 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
        >
          Book a Consultation
        </Link>
      </motion.div>
    </div>
  </section>
);
