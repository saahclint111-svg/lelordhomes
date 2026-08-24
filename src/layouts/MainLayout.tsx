import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function FooterPlaceholder() {
  return (
    <footer
      className="bg-[#080808] border-t border-white/5 py-12 px-6 md:px-10 text-center"
      aria-label="Site footer"
    >
      <p className="text-[#A5A5A5] text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Le Lörd Homes. All rights reserved.
      </p>
    </footer>
  )
}

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080808]">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <FooterPlaceholder />
    </div>
  )
}
