import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Consultations from './pages/Consultations'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PropertyManagement from './pages/PropertyManagement'
import Services from './pages/Services'
import Founder from './pages/about/Founder'
import CookiePolicy from './pages/legal/CookiePolicy'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import Terms from './pages/legal/Terms'
import Airbnb from './pages/services/Airbnb'
import DealSourcing from './pages/services/DealSourcing'
import HMOManagement from './pages/services/HMOManagement'
import PropertyConsultancy from './pages/services/PropertyConsultancy'
import ServicedAccommodation from './pages/services/ServicedAccommodation'
import TenantPlacement from './pages/services/TenantPlacement'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/founder" element={<Founder />} />
          <Route path="services" element={<Services />} />
          <Route path="services/hmo-management" element={<HMOManagement />} />
          <Route path="services/deal-sourcing" element={<DealSourcing />} />
          <Route path="services/property-consultancy" element={<PropertyConsultancy />} />
          <Route path="services/serviced-accommodation" element={<ServicedAccommodation />} />
          <Route path="services/airbnb" element={<Airbnb />} />
          <Route path="services/tenant-placement" element={<TenantPlacement />} />
          <Route path="consultations" element={<Consultations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="property-management" element={<PropertyManagement />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
