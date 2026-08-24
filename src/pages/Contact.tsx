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
      </Helmet>
      <div className="pt-20">
        <section className="py-24 px-6 bg-[#080808]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#C8A45D] tracking-[0.3em] uppercase text-xs font-inter mb-4">Get in Touch</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-playfair text-5xl md:text-6xl font-bold text-white">CONTACT US</motion.h1>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[#A5A5A5] font-inter text-base leading-relaxed mb-8">
                  Have a question, a property or an investment idea? We'd love to hear from you. Send us a message and we'll be in touch.
                </p>
                <div className="mb-6">
                  <p className="text-white text-xs tracking-widest uppercase font-inter font-medium mb-4">Quick Contact</p>
                  <WhatsAppButton variant="inline" />
                </div>
              </div>
              <div>
                {submitted ? (
                  <div className="bg-[#111111] border border-[#C8A45D]/20 p-8 text-center">
                    <p className="text-[#C8A45D] font-playfair text-xl font-semibold mb-2">Thank you</p>
                    <p className="text-[#A5A5A5] font-inter text-sm">We've received your message and will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-xs tracking-widest uppercase text-[#A5A5A5] font-inter mb-2">Name</label>
                      <input id="name" name="name" type="text" required className="w-full bg-[#111111] border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-[#C8A45D] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs tracking-widest uppercase text-[#A5A5A5] font-inter mb-2">Email</label>
                      <input id="email" name="email" type="email" required className="w-full bg-[#111111] border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-[#C8A45D] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-[#A5A5A5] font-inter mb-2">Subject</label>
                      <input id="subject" name="subject" type="text" className="w-full bg-[#111111] border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-[#C8A45D] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs tracking-widest uppercase text-[#A5A5A5] font-inter mb-2">Message</label>
                      <textarea id="message" name="message" required rows={5} className="w-full bg-[#111111] border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-[#C8A45D] transition-colors resize-none" />
                    </div>
                    <button type="submit" className="w-full bg-[#C8A45D] text-black font-inter font-medium tracking-widest uppercase text-sm py-4 hover:bg-[#9B793D] transition-colors duration-300 cursor-pointer">
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
