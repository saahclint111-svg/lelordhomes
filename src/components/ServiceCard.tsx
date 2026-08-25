import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Search, Briefcase, Hotel, Star, Users } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, Search, Briefcase, Hotel, Star, Users,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, slug, index }) => {
  const Icon = iconMap[icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative bg-[#111111] border border-white/5 p-10 hover:border-[#C8A45D]/25 transition-all duration-500 cursor-pointer flex flex-col"
    >
      <div className="mb-7">
        <div className="w-11 h-11 border border-[#C8A45D]/30 flex items-center justify-center group-hover:border-[#C8A45D] transition-colors duration-300">
          <Icon size={20} className="text-[#C8A45D]" />
        </div>
      </div>
      <h3 className="font-playfair text-xl font-semibold text-white mb-4 tracking-tight leading-snug">{title}</h3>
      <p className="text-[#A5A5A5] text-sm leading-relaxed font-inter mb-8 flex-grow">{description}</p>
      <a
        href={slug}
        className="inline-flex items-center gap-2 text-[#C8A45D] text-[11px] tracking-widest uppercase font-medium group-hover:gap-3 transition-all duration-300"
      >
        Learn More <ArrowRight size={13} />
      </a>
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C8A45D]/60 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};
