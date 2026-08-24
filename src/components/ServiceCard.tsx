import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.article
      className="bg-[#111111] border border-[rgba(200,164,93,0.12)] p-8 flex flex-col gap-5 group hover:border-[rgba(200,164,93,0.4)] transition-colors duration-300"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="w-12 h-12 flex items-center justify-center border border-[rgba(200,164,93,0.2)] group-hover:border-[#C8A45D] transition-colors duration-300">
        <Icon size={22} className="text-[#C8A45D]" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl tracking-wide text-white">{title}</h3>
      <p className="font-body text-[#A5A5A5] text-sm leading-relaxed flex-1">{description}</p>
      <span className="font-body text-xs tracking-[0.2em] uppercase text-[#C8A45D] flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
        LEARN MORE
        <span className="inline-block w-4 h-px bg-[#C8A45D]" />
      </span>
    </motion.article>
  );
}
