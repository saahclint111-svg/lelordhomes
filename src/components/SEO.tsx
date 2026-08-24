import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  path?: string
}

function ensureNamedMeta(name: string) {
  const existing = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (existing) return existing
  const meta = document.createElement('meta')
  meta.setAttribute('name', name)
  document.head.appendChild(meta)
  return meta
}

function ensurePropertyMeta(property: string) {
  const existing = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (existing) return existing
  const meta = document.createElement('meta')
  meta.setAttribute('property', property)
  document.head.appendChild(meta)
  return meta
}

function ensureCanonicalLink() {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (existing) return existing
  const link = document.createElement('link')
  link.rel = 'canonical'
  document.head.appendChild(link)
  return link
}

export default function SEO({ title, description, path = '' }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Le Lörd Homes`
    document.title = fullTitle

    ensureNamedMeta('description').setAttribute('content', description)
    ensurePropertyMeta('og:title').setAttribute('content', fullTitle)
    ensurePropertyMeta('og:description').setAttribute('content', description)

    const siteUrl = import.meta.env.VITE_SITE_URL
    const canonicalUrl = siteUrl ? `${siteUrl.replace(/\/$/, '')}${path}` : ''
    const link = ensureCanonicalLink()
    link.href = canonicalUrl || window.location.href
  }, [description, path, title])

  return null
}
