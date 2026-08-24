import { motion } from 'framer-motion';
import type { Consultation } from '../data/consultations';

interface ConsultationCardProps {
  consultation: Consultation;
  index: number;
  featured?: boolean;
}

export default function ConsultationCard({ consultation, index, featured }: ConsultationCardProps) {
  const bookingUrl = import.meta.env[consultation.envVar] as string | undefined;

  return (
    <motion.article
      className={`flex flex-col gap-5 border p-8 relative ${
        featured
          ? 'bg-[#151515] border-[#C8A45D]'
          : 'bg-[#111111] border-[rgba(200,164,93,0.15)] hover:border-[rgba(200,164,93,0.4)]'
      } transition-colors duration-300`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
    >
      {featured && (
        <span className="absolute top-0 right-6 -translate-y-1/2 bg-[#C8A45D] text-[#080808] text-[10px] tracking-[0.2em] uppercase font-body font-semibold px-4 py-1">
          POPULAR
        </span>
      )}

      <div className="flex items-center justify-between">
        <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C8A45D]">
          {consultation.duration}
        </span>
        <span className="font-display text-2xl font-semibold text-white">
          {consultation.price}
        </span>
      </div>

      <div>
        <h3 className="font-display text-xl tracking-wide text-white mb-1">{consultation.title}</h3>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#A5A5A5]">{consultation.priceNote}</p>
      </div>

      <p className="font-body text-[#A5A5A5] text-sm leading-relaxed flex-1">{consultation.description}</p>

      <ul className="list-none p-0 m-0 flex flex-col gap-2">
        {consultation.includes.map((item) => (
          <li key={item} className="font-body text-xs text-[#D7D7D7] flex items-start gap-2">
            <span className="inline-block mt-[5px] w-3 h-px bg-[#C8A45D] flex-shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      {bookingUrl ? (
        <a
          href={bookingUrl}
          className={`font-body text-xs tracking-[0.2em] uppercase font-semibold px-6 py-4 text-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 mt-2 ${
            featured
              ? 'bg-[#C8A45D] text-[#080808] hover:bg-[#9B793D]'
              : 'border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#080808]'
          }`}
        >
          {consultation.cta}
        </a>
      ) : (
        <a
          href="/consultations"
          className={`font-body text-xs tracking-[0.2em] uppercase font-semibold px-6 py-4 text-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 mt-2 ${
            featured
              ? 'bg-[#C8A45D] text-[#080808] hover:bg-[#9B793D]'
              : 'border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#080808]'
          }`}
        >
          {consultation.cta}
        </a>
      )}
    </motion.article>
  );
}
