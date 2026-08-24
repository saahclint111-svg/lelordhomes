import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={centered ? 'text-center' : 'text-left'}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {eyebrow && (
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 flex items-center gap-3 justify-center">
          <span className="inline-block w-8 h-px bg-[#C8A45D]" />
          {eyebrow}
          <span className="inline-block w-8 h-px bg-[#C8A45D]" />
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight mb-4 ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="font-body text-[#A5A5A5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>
      )}
    </motion.div>
  );
}
