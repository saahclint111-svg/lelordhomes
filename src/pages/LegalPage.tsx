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
      <section className="py-32 md:py-44 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="font-playfair text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight leading-tight">{heading}</motion.h1>
          <div className="text-[#A5A5A5] font-inter text-sm leading-loose space-y-7">{children}</div>
        </div>
      </section>
    </div>
  </>
);
