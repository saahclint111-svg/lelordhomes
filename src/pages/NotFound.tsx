import Button from '../components/Button'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-background py-20">
      <SEO title="Page not found" description="The requested page could not be found." path="/404" />
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.32em] text-gold">404</p>
        <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">The page you&apos;re looking for isn&apos;t here.</h1>
        <p className="mt-6 text-lg leading-8 text-white-muted">
          Return to the homepage or explore the services page to keep browsing Le Lörd Homes.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button showArrow to="/" variant="primary">
            Back home
          </Button>
          <Button to="/services" variant="outline">
            View services
          </Button>
        </div>
      </div>
    </section>
  )
}
