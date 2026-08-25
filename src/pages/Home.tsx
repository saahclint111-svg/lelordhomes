import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../sections/Hero';
import { BrandIntro } from '../sections/BrandIntro';
import { ServicesSection } from '../sections/Services';
import { WhyUs } from '../sections/WhyUs';
import { PropertyManagementCTA } from '../sections/PropertyManagementCTA';
import { Founder } from '../sections/Founder';
import { Testimonials } from '../sections/Testimonials';
import { ConsultationsSection } from '../sections/Consultations';
import { ContactCTA } from '../sections/ContactCTA';

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Le Lörd Homes | Premium Property Solutions</title>
      <meta name="description" content="Professional property solutions, consultancy and management support for landlords, investors and property owners." />
      <meta property="og:title" content="Le Lörd Homes | Premium Property Solutions" />
      <meta property="og:description" content="Professional property solutions, consultancy and management support for landlords, investors and property owners." />
      <meta property="og:type" content="website" />
    </Helmet>
    <Hero />
    <BrandIntro />
    <PropertyManagementCTA />
    <ServicesSection />
    <WhyUs />
    <Founder />
    <Testimonials />
    <ConsultationsSection />
    <ContactCTA />
  </>
);

export default Home;
