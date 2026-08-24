import React from 'react';
import { LegalPage } from './LegalPage';

const PrivacyPolicy: React.FC = () => (
  <LegalPage title="Privacy Policy" heading="PRIVACY POLICY">
    <p className="text-[#C8A45D] text-xs tracking-widest uppercase font-inter">Last updated: 2026</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">1. Introduction</h2>
    <p>Le Lörd Homes ("we", "us", "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and protect information you provide when using this website or our services.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">2. Information We Collect</h2>
    <p>We may collect information you provide directly, including your name, email address, phone number and any enquiry details submitted through our contact forms or booking services.</p>
    <p>We may also collect non-personal technical data such as browser type, device information and pages visited, for the purpose of improving site performance.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">3. How We Use Your Information</h2>
    <p>We use your information to respond to enquiries, deliver consultations and services you have requested, and to communicate relevant updates. We will not use your data for unrelated marketing without your consent.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">4. Data Sharing</h2>
    <p>We do not sell or share your personal data with third parties except where necessary to deliver services (for example, booking or payment platforms) or where required by law.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">5. Data Retention</h2>
    <p>We retain your data only for as long as necessary to fulfil the purposes set out in this policy or as required by applicable law.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">6. Your Rights</h2>
    <p>You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us directly.</p>

    <h2 className="font-playfair text-xl font-bold text-white mt-8 mb-2">7. Contact</h2>
    <p>For any privacy-related queries, please contact Le Lörd Homes directly through our contact page.</p>

    <p className="mt-8 text-xs text-[#A5A5A5]/70 italic">This policy is subject to final legal review prior to launch. Content is provided for informational purposes.</p>
  </LegalPage>
);

export default PrivacyPolicy;
