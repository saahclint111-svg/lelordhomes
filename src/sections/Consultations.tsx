import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ConsultationCard } from '../components/ConsultationCard';
import { consultations } from '../data/consultations';

export const ConsultationsSection: React.FC = () => (
  <section className="py-28 md:py-40 bg-[#080808] px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Book a Session"
        title="PROPERTY CONSULTATIONS"
        subtitle="Sometimes the right conversation is the first step toward the right property decision."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {consultations.map((c, i) => (
          <ConsultationCard key={c.id} {...c} index={i} />
        ))}
      </div>
    </div>
  </section>
);
