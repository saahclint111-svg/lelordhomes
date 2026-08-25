import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact — Le Lörd Homes</title>
        <meta name="description" content="Get in touch with Le Lörd Homes. Send an enquiry or book a consultation." />
        <meta property="og:title" content="Contact — Le Lörd Homes" />
        <meta property="og:description" content="Get in touch with Le Lörd Homes. Send an enquiry or book a consultation." />
      </Helmet>
      <div className="pt-20">
        <section className="py-32 md:py-44 px-6 bg-[#080808]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-[#C8A45D] tracking-[0.35em] uppercase text-[11px] font-inter mb-6">Get in Touch</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">CONTACT US</motion.h1>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-[#A5A5A5] font-inter text-base leading-loose mb-10">
                  Have a question, a property or an investment idea? We'd love to hear from you. Send us a message and we'll be in touch.
                </p>
                <div className="space-y-5 mb-10">
                  <p className="text-white text-[10px] tracking-widest uppercase font-inter font-medium mb-5">Quick Contact</p>
                  <WhatsAppButton variant="inline" />
                  {import.meta.env.VITE_EMAIL && (
                    <a
                      href={`mailto:${import.meta.env.VITE_EMAIL}`}
                      className="flex items-center gap-4 text-[#A5A5A5] hover:text-[#C8A45D] transition-colors duration-200 font-inter text-sm"
                    >
                      <span className="w-5 h-px bg-[#C8A45D] flex-shrink-0" />
                      {import.meta.env.VITE_EMAIL}
                    </a>
                  )}
                  {import.meta.env.VITE_PHONE && (
                    <a
                      href={`tel:${import.meta.env.VITE_PHONE}`}
                      className="flex items-center gap-4 text-[#A5A5A5] hover:text-[#C8A45D] transition-colors duration-200 font-inter text-sm"
                    >
                      <span className="w-5 h-px bg-[#C8A45D] flex-shrink-0" />
                      {import.meta.env.VITE_PHONE}
                    </a>
                  )}
                  {import.meta.env.VITE_INSTAGRAM_URL && (
                    <a
                      href={import.meta.env.VITE_INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-[#A5A5A5] hover:text-[#C8A45D] transition-colors duration-200 font-inter text-sm"
                    >
                      <span className="w-5 h-px bg-[#C8A45D] flex-shrink-0" />
                      Instagram
                    </a>
                  )}
                </div>
              </div>
              <div>
                {submitted ? (
                  <div className="bg-[#111111] border border-[#C8A45D]/20 p-12 text-center">
                    <p className="text-[#C8A45D] font-playfair text-2xl font-semibold mb-3">Thank you</p>
                    <p className="text-[#A5A5A5] font-inter text-sm leading-relaxed">We've received your message and will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-[10px] tracking-widest uppercase text-[#A5A5A5] font-inter mb-2">Name</label>
                      <input id="name" name="name" type="text" required className="w-full bg-[#111111] border border-white/8 text-white font-inter text-sm px-5 py-4 focus:outline-none focus:border-[#C8A45D]/50 transition-colors duration-200 placeholder:text-[#A5A5A5]/30" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] tracking-widest uppercase text-[#A5A5A5] font-inter mb-2">Email</label>
                      <input id="email" name="email" type="email" required className="w-full bg-[#111111] border border-white/8 text-white font-inter text-sm px-5 py-4 focus:outline-none focus:border-[#C8A45D]/50 transition-colors duration-200 placeholder:text-[#A5A5A5]/30" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-[10px] tracking-widest uppercase text-[#A5A5A5] font-inter mb-2">Subject</label>
                      <input id="subject" name="subject" type="text" className="w-full bg-[#111111] border border-white/8 text-white font-inter text-sm px-5 py-4 focus:outline-none focus:border-[#C8A45D]/50 transition-colors duration-200 placeholder:text-[#A5A5A5]/30" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-[10px] tracking-widest uppercase text-[#A5A5A5] font-inter mb-2">Message</label>
                      <textarea id="message" name="message" required rows={5} className="w-full bg-[#111111] border border-white/8 text-white font-inter text-sm px-5 py-4 focus:outline-none focus:border-[#C8A45D]/50 transition-colors duration-200 resize-none placeholder:text-[#A5A5A5]/30" />
                    </div>
                    <button type="submit" className="w-full bg-[#C8A45D] text-black font-inter font-medium tracking-widest uppercase text-xs py-4 hover:bg-[#9B793D] transition-colors duration-300 cursor-pointer">
                      Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
