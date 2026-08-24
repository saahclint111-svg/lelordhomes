import React from 'react';
import { LegalPage } from './LegalPage';

const Terms: React.FC = () => (
  <LegalPage title="Terms & Conditions" heading="TERMS & CONDITIONS">
    <p className="text-[#C8A45D] text-xs tracking-widest uppercase font-inter">Last updated: 2026</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">1. Use of This Website</h2>
    <p>By accessing and using the Le Lörd Homes website, you agree to use it only for lawful purposes. You must not misuse this site or attempt to interfere with its proper operation.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">2. Services</h2>
    <p>The information presented on this website is for general informational purposes only. Le Lörd Homes provides property consultancy, management support and related services. Nothing on this site constitutes legal, financial or investment advice.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">3. Consultations</h2>
    <p>Consultation bookings are subject to availability. Payment for paid consultations is processed through third-party platforms. By booking a consultation, you agree to the terms applicable to that booking service.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">4. Intellectual Property</h2>
    <p>All content on this website, including text, design and branding, belongs to Le Lörd Homes. You may not reproduce or distribute this content without express written permission.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">5. Limitation of Liability</h2>
    <p>Le Lörd Homes shall not be liable for any indirect or consequential loss arising from use of this website or reliance on its content. We make no warranty as to the accuracy or completeness of information presented.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">6. Changes</h2>
    <p>We reserve the right to update these Terms & Conditions at any time. Continued use of the website following any changes constitutes acceptance of the updated terms.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">7. Governing Law</h2>
    <p>These terms are governed by the laws of England and Wales.</p>

    <p className="mt-8 text-xs text-[#A5A5A5]/70 italic">These terms are subject to final legal review prior to launch. Content is provided for informational purposes.</p>
  </LegalPage>
);

export default Terms;
