import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => (
  <>
    <Helmet><title>404 — Le Lörd Homes</title></Helmet>
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6">
      <div className="text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#C8A45D] tracking-[0.5em] uppercase text-xs font-inter mb-4">404</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-playfair text-5xl font-bold text-white mb-6">PAGE NOT FOUND</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#A5A5A5] font-inter text-base mb-10">The page you're looking for doesn't exist.</motion.p>
        <Link to="/" className="inline-flex items-center gap-2 bg-[#C8A45D] text-black font-inter font-medium tracking-widest uppercase text-sm px-8 py-4 hover:bg-[#9B793D] transition-colors duration-300">
          Return Home
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
