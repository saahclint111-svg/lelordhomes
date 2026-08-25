import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { images } from '../data/images';
import { Link } from 'react-router-dom';

export const PropertyManagementCTA: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const properties = [
    {
      title: 'Modern Family Residence',
      location: 'Prime Residential Area',
      image: images.properties[0],
    },
    {
      title: 'Premium Investment Home',
      location: 'High-Demand Letting Zone',
      image: images.properties[1],
    },
    {
      title: 'Executive Urban Property',
      location: 'City-Fringe Neighbourhood',
      image: images.properties[2],
    },
  ];

  return (
    <section className="py-20 md:py-24 px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[#C8A45D] tracking-[0.28em] uppercase text-[10px] font-sans font-semibold mb-4"
        >
          ESTATE LISTINGS
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white font-sans font-bold leading-[1.1] tracking-[-0.01em] text-[clamp(1.8rem,3.6vw,3rem)] mb-3"
        >
          Featured Properties
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#A5A5A5] font-sans font-light text-sm sm:text-base mb-10 max-w-2xl"
        >
          Explore a curated selection of premium property styles that reflect the quality and standards Le Lörd Homes brings to every client project.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {properties.map((property, i) => (
            <motion.article
              key={property.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-xl border border-white/10 bg-[#101010] overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="text-white text-base font-semibold mb-1.5">{property.title}</h3>
                <p className="text-[#A5A5A5] text-sm">{property.location}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-[#C8A45D] text-[#C8A45D] font-sans font-medium tracking-[0.16em] uppercase text-[11px] px-6 py-3.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
          >
            Enquire About Properties →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
