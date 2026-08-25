import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

export const ServicesSection: React.FC = () => (
  <section className="py-32 md:py-44 bg-[#080808] px-6" aria-labelledby="services-heading">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="What We Do"
        title="OUR SERVICES"
        subtitle="Comprehensive property solutions tailored to landlords, investors and property owners."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {services.map((service, i) => (
          <ServiceCard key={service.id} {...service} index={i} />
        ))}
      </div>
    </div>
  </section>
);
