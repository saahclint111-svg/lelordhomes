import Hero from '../sections/Hero';
import BrandIntroduction from '../sections/BrandIntroduction';
import ServicesSection from '../sections/ServicesSection';
import WhyUsSection from '../sections/WhyUsSection';
import PropertyManagementCTA from '../sections/PropertyManagementCTA';
import ConsultationsSection from '../sections/ConsultationsSection';
import FounderSection from '../sections/FounderSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactCTA from '../sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntroduction />
      <ServicesSection />
      <WhyUsSection />
      <PropertyManagementCTA />
      <ConsultationsSection />
      <FounderSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
