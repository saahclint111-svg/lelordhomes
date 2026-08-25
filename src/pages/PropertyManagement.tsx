import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PropertyManagementCTA } from '../sections/PropertyManagementCTA';
import { ContactCTA } from '../sections/ContactCTA';
import { SectionHeading } from '../components/SectionHeading';
import { CheckCircle } from 'lucide-react';

const benefits = [
  { title: 'Day-to-Day Operations', desc: 'Support managing the ongoing demands of your property so you can focus on what matters most.' },
  { title: 'Tenant & Occupancy Support', desc: 'Assistance with tenant-related processes to help reduce void periods and maintain steady occupancy.' },
  { title: 'HMO Compliance Guidance', desc: 'Guidance on meeting licensing and regulatory requirements for HMO properties.' },
  { title: 'Performance Strategy', desc: 'Practical strategies to improve your property\'s yield, condition and long-term performance.' },
  { title: 'Serviced Accommodation Management', desc: 'Operational support for short-let and serviced accommodation properties.' },
  { title: 'Tailored Support', desc: 'We work with you based on your specific property, goals and circumstances — not a one-size-fits-all model.' },
];

const PropertyManagement: React.FC = () => (
  <>
    <Helmet>
      <title>Property Management — Le Lörd Homes</title>
      <meta name="description" content="Professional property management support from Le Lörd Homes. HMO management, serviced accommodation, tenant support and more." />
      <meta property="og:title" content="Property Management — Le Lörd Homes" />
      <meta property="og:description" content="Professional property management support from Le Lörd Homes." />
    </Helmet>
    <div className="pt-20">
      <section className="py-32 md:py-44 px-6 bg-[#080808] text-center">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-[#C8A45D] tracking-[0.35em] uppercase text-[11px] font-inter mb-6">Services</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-playfair text-5xl md:text-7xl font-bold text-white mb-7 tracking-tight leading-tight">PROPERTY MANAGEMENT</motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#A5A5A5] font-inter text-lg max-w-2xl mx-auto leading-loose">
          Whether you own one property or several, Le Lörd Homes can provide the management support you need to keep things running smoothly.
        </motion.p>
      </section>

      <section className="py-32 md:py-44 bg-[#111111] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Offer"
            title="MANAGEMENT SUPPORT"
            subtitle="Practical, professional property management designed around your needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-[#0d0d0d] border border-white/5 p-10 hover:border-[#C8A45D]/20 transition-colors duration-300"
              >
                <CheckCircle size={18} className="text-[#C8A45D] mb-5" />
                <h3 className="font-playfair text-xl font-bold text-white mb-4 leading-snug">{title}</h3>
                <p className="text-[#A5A5A5] text-sm leading-relaxed font-inter">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PropertyManagementCTA />
      <ContactCTA />
    </div>
  </>
);

export default PropertyManagement;
