import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ServicesSection } from '../sections/Services';
import { ContactCTA } from '../sections/ContactCTA';

const ServicesPage: React.FC = () => (
  <>
    <Helmet>
      <title>Services — Le Lörd Homes</title>
      <meta name="description" content="Explore our property services: HMO Management, Deal Sourcing, Property Consultancy, Serviced Accommodation, Airbnb Setup and Tenant Placement." />
    </Helmet>
    <div className="pt-20">
      <section className="py-32 md:py-44 px-6 bg-[#080808] text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#C8A45D] tracking-[0.35em] uppercase text-xs font-inter mb-5">What We Do</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-playfair text-5xl md:text-6xl font-bold text-white tracking-tight">OUR SERVICES</motion.h1>
      </section>
      <ServicesSection />
      <ContactCTA />
    </div>
  </>
);

export default ServicesPage;
