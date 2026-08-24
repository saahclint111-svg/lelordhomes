import SectionHeading from '../components/SectionHeading';
import ConsultationCard from '../components/ConsultationCard';
import { consultations } from '../data/consultations';

export default function ConsultationsSection() {
  return (
    <section
      aria-labelledby="consultations-heading"
      className="bg-[#080808] py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading="PROPERTY CONSULTATIONS"
          subheading="Start a conversation about your property — whether you need clarity, strategy, or a second opinion."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {consultations.map((c, i) => (
            <ConsultationCard
              key={c.id}
              consultation={c}
              index={i}
              featured={i === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
