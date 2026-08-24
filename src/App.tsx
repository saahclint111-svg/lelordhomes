import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Consultations from './pages/Consultations'
import Contact from './pages/Contact'
import CookiePolicy from './pages/CookiePolicy'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PropertyManagement from './pages/PropertyManagement'
import Services from './pages/Services'
import Terms from './pages/Terms'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  )
}
