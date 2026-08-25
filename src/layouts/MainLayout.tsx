import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton variant="floating" />
  </>
);
