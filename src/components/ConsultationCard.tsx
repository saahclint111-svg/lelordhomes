import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface ConsultationCardProps {
  title: string;
  duration: string;
  price: string;
  description: string;
  cta: string;
  envKey: string;
  featured: boolean;
  index: number;
}

export const ConsultationCard: React.FC<ConsultationCardProps> = ({
  title, duration, price, description, cta, envKey, featured, index
}) => {
  const bookingUrl = (import.meta.env as Record<string, string>)[envKey] || '';

  const handleBook = () => {
    if (bookingUrl) {
      window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    } else {
      const number = import.meta.env.VITE_WHATSAPP_NUMBER;
      if (number) {
        const msg = encodeURIComponent(`Hi Le Lörd Homes, I'd like to book: ${title} (${duration} — ${price})`);
        window.open(`https://wa.me/${number.replace(/\D/g, '')}?text=${msg}`, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative p-8 flex flex-col ${
        featured
          ? 'bg-[#C8A45D] text-black'
          : 'bg-[#111111] border border-white/5 text-white'
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 bg-black text-[#C8A45D] text-[10px] tracking-widest uppercase font-medium px-3 py-1">
          Most Popular
        </span>
      )}
      <div className="flex items-center gap-2 mb-2">
        <Clock size={14} className={featured ? 'text-black/60' : 'text-[#C8A45D]'} />
        <span className={`text-xs tracking-widest uppercase font-medium ${featured ? 'text-black/70' : 'text-[#A5A5A5]'}`}>
          {duration}
        </span>
      </div>
      <h3 className={`font-playfair text-2xl font-bold mb-1 ${featured ? 'text-black' : 'text-white'}`}>{title}</h3>
      <p className={`text-3xl font-bold font-playfair mb-4 ${featured ? 'text-black' : 'text-[#C8A45D]'}`}>{price}</p>
      <p className={`text-sm leading-relaxed font-inter mb-8 flex-grow ${featured ? 'text-black/80' : 'text-[#A5A5A5]'}`}>{description}</p>
      <div className="flex items-center gap-2 mb-6">
        <CheckCircle size={14} className={featured ? 'text-black/60' : 'text-[#C8A45D]/60'} />
        <span className={`text-xs ${featured ? 'text-black/70' : 'text-[#A5A5A5]'}`}>No obligation</span>
      </div>
      <Button
        variant={featured ? 'ghost' : 'secondary'}
        onClick={handleBook}
        className={featured ? 'bg-black text-[#C8A45D] border-black hover:bg-black/80 w-full justify-center' : 'w-full justify-center'}
      >
        {cta}
      </Button>
    </motion.div>
  );
};
