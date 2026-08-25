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
  const subtitleAlign = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-16 ${alignClass}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-[#C8A45D] tracking-[0.35em] uppercase text-[11px] font-inter font-medium mb-5"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className={`font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${light ? 'text-white' : 'text-white'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className={`mt-5 text-[#A5A5A5] text-base md:text-lg max-w-2xl font-inter leading-relaxed ${subtitleAlign}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
