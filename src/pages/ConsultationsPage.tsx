import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ConsultationsSection } from '../sections/Consultations';
import { ContactCTA } from '../sections/ContactCTA';

const ConsultationsPage: React.FC = () => (
  <>
    <Helmet>
      <title>Consultations — Le Lörd Homes</title>
      <meta name="description" content="Book a property consultation with Le Lörd Homes. Discovery call, 30-minute consultation, or 60-minute strategy session." />
      <meta property="og:title" content="Consultations — Le Lörd Homes" />
      <meta property="og:description" content="Book a property consultation with Le Lörd Homes. Discovery call, 30-minute consultation, or 60-minute strategy session." />
    </Helmet>
    <div className="pt-20">
      <section className="py-24 px-6 bg-[#080808] text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#C8A45D] tracking-[0.3em] uppercase text-xs font-inter mb-4">Book a Session</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-playfair text-5xl md:text-6xl font-bold text-white">PROPERTY CONSULTATIONS</motion.h1>
      </section>
      <ConsultationsSection />
      <ContactCTA />
    </div>
  </>
);

export default ConsultationsPage;
