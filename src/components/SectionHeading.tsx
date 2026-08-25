import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const alignClass = { left: 'text-left', center: 'text-center', right: 'text-right' }[align];

  return (
    <div className={`mb-16 ${alignClass}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#C8A45D] tracking-[0.35em] uppercase text-xs font-inter font-medium mb-5"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${light ? 'text-white' : 'text-white'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-[#A5A5A5] text-base md:text-lg max-w-2xl mx-auto font-inter leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
