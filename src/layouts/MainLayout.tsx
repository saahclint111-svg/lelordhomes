import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-white">
      <ScrollToTop />
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
