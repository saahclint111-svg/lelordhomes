import React from 'react';
import { LegalPage } from './LegalPage';

const CookiePolicy: React.FC = () => (
  <LegalPage title="Cookie Policy" heading="COOKIE POLICY">
    <p className="text-[#C8A45D] text-xs tracking-widest uppercase font-inter">Last updated: 2026</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">1. What Are Cookies</h2>
    <p>Cookies are small text files placed on your device when you visit a website. They are used to make websites function correctly and to provide information to the site owner.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">2. Cookies We Use</h2>
    <p>The Le Lörd Homes website may use essential cookies required for the site to function correctly. We do not currently use advertising or tracking cookies. If this changes, this policy will be updated.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">3. Third-Party Cookies</h2>
    <p>Where third-party services are integrated (such as booking platforms), those services may set their own cookies. Please refer to those providers' cookie policies for details.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">4. Managing Cookies</h2>
    <p>You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect how the website functions.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">5. Contact</h2>
    <p>If you have any questions about our use of cookies, please contact us through the contact page.</p>

    <p className="mt-8 text-xs text-[#A5A5A5]/70 italic">This policy is subject to final legal review prior to launch. Content is provided for informational purposes.</p>
  </LegalPage>
);

export default CookiePolicy;
