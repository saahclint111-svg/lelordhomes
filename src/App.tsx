import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Consultations from './pages/Consultations'
import Contact from './pages/Contact'
import PropertyManagement from './pages/PropertyManagement'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import CookiePolicy from './pages/CookiePolicy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
