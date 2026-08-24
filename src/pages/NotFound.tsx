import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#C8A45D] text-xs tracking-[0.3em] uppercase mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        Page Not Found
      </h1>
      <p className="text-[#A5A5A5] mb-8 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" tabIndex={-1}>
        <Button variant="outline" showArrow>Return Home</Button>
      </Link>
    </div>
  )
}
