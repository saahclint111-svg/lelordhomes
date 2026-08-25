import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Founder } from '../sections/Founder';

const About: React.FC = () => (
  <>
    <Helmet>
      <title>About — Le Lörd Homes</title>
      <meta name="description" content="Learn about Le Lörd Homes and our approach to premium property solutions." />
      <meta property="og:title" content="About — Le Lörd Homes" />
      <meta property="og:description" content="Learn about Le Lörd Homes and our approach to premium property solutions." />
    </Helmet>
    <div className="pt-20">
      <section className="py-32 md:py-44 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8A45D] tracking-[0.35em] uppercase text-[11px] font-inter mb-6"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
          >
            ABOUT LE LÖRD HOMES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#A5A5A5] font-inter text-lg leading-loose max-w-2xl mx-auto"
          >
            Le Lörd Homes provides professional property solutions designed to make property ownership, investment and management simpler for landlords, investors and property owners.
          </motion.p>
        </div>
      </section>
      <Founder />
    </div>
  </>
);

export default About;
