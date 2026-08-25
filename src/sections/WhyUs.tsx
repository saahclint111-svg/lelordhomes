import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Home, Heart } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

const pillars = [
  { icon: Compass, title: 'Expert Guidance', desc: 'Property knowledge applied practically to your situation, goals and assets.' },
  { icon: Target, title: 'Clear Strategy', desc: 'Structured approaches to property management, investment and growth.' },
  { icon: Home, title: 'Property-Focused Support', desc: 'Hands-on, practical support at every stage of your property journey.' },
  { icon: Heart, title: 'Client-First Approach', desc: 'Your property goals, timeline and needs guide everything we do.' },
];

export const WhyUs: React.FC = () => (
  <section className="py-28 md:py-40 bg-[#111111] px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeading eyebrow="Why Choose Us" title="WHY LE LÖRD HOMES?" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="bg-[#151515] border border-white/5 p-10 hover:border-[#C8A45D]/25 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 border border-[#C8A45D]/30 group-hover:border-[#C8A45D] transition-colors flex items-center justify-center mb-7">
              <Icon size={22} className="text-[#C8A45D]" />
            </div>
            <h3 className="font-playfair text-lg font-bold text-white mb-4 leading-snug">{title}</h3>
            <p className="text-[#A5A5A5] text-sm leading-[1.8] font-inter">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
