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
  <section className="py-24 md:py-32 bg-[#080808] px-6">
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
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#111111] border border-white/5 p-8 hover:border-[#C8A45D]/20 transition-colors duration-300"
          >
            <div className="w-6 h-px bg-[#C8A45D] mb-4" />
            <h3 className="font-playfair text-lg font-bold text-white mb-3">{label}</h3>
            <p className="text-[#A5A5A5] text-sm leading-relaxed font-inter">{desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center bg-[#111111] border border-white/5 p-12"
      >
        <p className="text-[#C8A45D] text-xs tracking-[0.3em] uppercase font-inter mb-4">Work With Us</p>
        <p className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to take the next step?
        </p>
        <p className="text-[#A5A5A5] font-inter text-sm leading-relaxed max-w-xl mx-auto mb-8">
          Speak with Le Lörd Homes today to discuss your property, your goals and how we can help.
        </p>
        <Link
          to="/consultations"
          className="inline-flex items-center gap-2 border border-[#C8A45D] text-[#C8A45D] font-inter font-medium tracking-widest uppercase text-sm px-8 py-4 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
        >
          Book a Consultation
        </Link>
      </motion.div>
    </div>
  </section>
);
