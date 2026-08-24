const DEFAULT_MESSAGE = "Hi Le Lörd Homes, I've visited your website and I'd like to enquire about your property services."

export function getWhatsAppNumber(): string {
  return import.meta.env.VITE_WHATSAPP_NUMBER || ''
}

export function createWhatsAppMessage(message?: string): string {
  return encodeURIComponent(message || DEFAULT_MESSAGE)
}

export function openWhatsApp(message?: string): void {
  const number = getWhatsAppNumber()
  if (!number) return
  window.open(`https://wa.me/${number}?text=${createWhatsAppMessage(message)}`, '_blank', 'noopener,noreferrer')
}

export function createServiceMessage(serviceName: string): string {
  return `Hi Le Lörd Homes, I'm interested in your ${serviceName} service and would like to find out more.`
}

export function createConsultationMessage(consultationType: string): string {
  return `Hi Le Lörd Homes, I'd like to book a ${consultationType}. Please let me know how to proceed.`
}

export function createPropertyMessage(propertyLocation?: string): string {
  return `Hi Le Lörd Homes, I have a property${propertyLocation ? ` in ${propertyLocation}` : ''} and I'd like to discuss your services.`
}

export function whatsAppHref(message?: string): string {
  const number = getWhatsAppNumber()
  if (!number) return '#'
  return `https://wa.me/${number}?text=${createWhatsAppMessage(message)}`
}
