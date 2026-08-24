import type { ReactNode } from 'react'
import SEO from '../../components/SEO'

interface LegalTemplateProps {
  title: string
  path: string
  children: ReactNode
}

export default function LegalTemplate({ title, path, children }: LegalTemplateProps) {
  return (
    <section className="bg-background py-20 md:py-24">
      <SEO title={title} description={`${title} placeholder content for Le Lörd Homes.`} path={path} />
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="border border-[#6d5327] bg-[#241b0d] px-5 py-4 text-sm text-[#f1dfbb]">
          Please review and update this content before launching the website.
        </div>
        <h1 className="mt-8 font-serif text-5xl text-white sm:text-6xl">{title}</h1>
        <div className="mt-10 space-y-6 text-lg leading-8 text-white-muted">{children}</div>
      </div>
    </section>
  )
}
