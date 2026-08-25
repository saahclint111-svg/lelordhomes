import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

interface LegalPageProps {
  title: string;
  heading: string;
  children: React.ReactNode;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, heading, children }) => (
  <>
    <Helmet>
      <title>{title} — Le Lörd Homes</title>
    </Helmet>
    <div className="pt-20">
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="font-playfair text-4xl md:text-5xl font-bold text-white mb-12">{heading}</motion.h1>
          <div className="text-[#A5A5A5] font-inter text-sm leading-relaxed space-y-6">{children}</div>
        </div>
      </section>
    </div>
  </>
);
