import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PropertyManagementCTA } from '../sections/PropertyManagementCTA';
import { ContactCTA } from '../sections/ContactCTA';

const PropertyManagement: React.FC = () => (
  <>
    <Helmet>
      <title>Property Management — Le Lörd Homes</title>
      <meta name="description" content="Professional property management support from Le Lörd Homes." />
    </Helmet>
    <div className="pt-20">
      <section className="py-24 px-6 bg-[#080808] text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#C8A45D] tracking-[0.3em] uppercase text-xs font-inter mb-4">Services</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-playfair text-5xl md:text-6xl font-bold text-white">PROPERTY MANAGEMENT</motion.h1>
      </section>
      <PropertyManagementCTA />
      <ContactCTA />
    </div>
  </>
);

export default PropertyManagement;
