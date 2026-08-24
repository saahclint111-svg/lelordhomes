    import { useMemo, useState } from 'react'
    import Button from './Button'
    import { createPropertyMessage, getWhatsAppNumber, openWhatsApp } from '../lib/whatsapp'
    import { validateEmail, validatePhone, validateRequired, type FieldError } from '../lib/validation'

    export type ContactFormMode = 'contact' | 'property'

    type FormState = {
      name: string
      telephone: string
      email: string
      subject: string
      message: string
      propertyLocation: string
      propertyType: string
      bedrooms: string
      currentUse: string
      serviceInterestedIn: string
      consent: boolean
    }

    const initialState: FormState = {
      name: '',
      telephone: '',
      email: '',
      subject: '',
      message: '',
      propertyLocation: '',
      propertyType: '',
      bedrooms: '',
      currentUse: '',
      serviceInterestedIn: '',
      consent: false,
    }

    interface ContactFormProps {
      mode: ContactFormMode
      submitLabel: string
    }

    const propertyServices = [
      'HMO Management',
      'Serviced Accommodation',
      'Airbnb Setup & Optimisation',
      'Tenant Placement',
      'Property Consultancy',
      'Other',
    ]

    export default function ContactForm({ mode, submitLabel }: ContactFormProps) {
      const [form, setForm] = useState<FormState>(initialState)
      const [errors, setErrors] = useState<Record<string, string>>({})
      const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
      const [feedback, setFeedback] = useState('')
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || ''
      const hasWhatsApp = Boolean(getWhatsAppNumber())

      const heading = useMemo(
        () => (mode === 'property' ? 'Tell us about your property' : 'Send an enquiry'),
        [mode],
      )

      function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
        setForm((current) => ({ ...current, [key]: value }))
      }

      function buildErrors(): Record<string, string> {
        const nextErrors: FieldError[] = [
          validateRequired(form.name, 'Name'),
          validateEmail(form.email),
          validatePhone(form.telephone),
          validateRequired(form.message, mode === 'property' ? 'Description' : 'Message'),
        ].filter(Boolean) as FieldError[]

        if (mode === 'contact') {
          const subjectError = validateRequired(form.subject, 'Subject')
          if (subjectError) nextErrors.push(subjectError)
        }

        if (mode === 'property') {
          ;[
            validateRequired(form.propertyLocation, 'Property Location'),
            validateRequired(form.propertyType, 'Property Type'),
            validateRequired(form.bedrooms, 'Bedrooms'),
            validateRequired(form.currentUse, 'Current Use'),
            validateRequired(form.serviceInterestedIn, 'Service Interested In'),
          ].forEach((error) => {
            if (error) nextErrors.push(error)
          })
        }

        if (!form.consent) {
          nextErrors.push({ field: 'consent', message: 'Please confirm that we may contact you regarding your enquiry' })
        }

        return nextErrors.reduce<Record<string, string>>((accumulator, error) => {
          accumulator[error.field] = error.message
          return accumulator
        }, {})
      }

      function buildWhatsAppMessage() {
        if (mode === 'property') {
          return [
            createPropertyMessage(form.propertyLocation),
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            form.telephone ? `Telephone: ${form.telephone}` : '',
            `Property type: ${form.propertyType}`,
            `Bedrooms: ${form.bedrooms}`,
            `Current use: ${form.currentUse}`,
            `Service interested in: ${form.serviceInterestedIn}`,
            `Description: ${form.message}`,
          ]
            .filter(Boolean)
            .join('\n')
        }

        return [
          'Hi Le Lörd Homes, I would like to send a general enquiry.',
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          form.telephone ? `Telephone: ${form.telephone}` : '',
          `Subject: ${form.subject}`,
          `Message: ${form.message}`,
        ]
          .filter(Boolean)
          .join('\n')
      }

      function validateForm() {
        const nextErrors = buildErrors()
        setErrors(nextErrors)
        return nextErrors
      }

      async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const nextErrors = validateForm()

        if (Object.keys(nextErrors).length > 0) {
          setStatus('error')
          setFeedback('Please review the highlighted fields and try again.')
          return
        }

        setStatus('loading')
        setFeedback('')

        try {
          if (endpoint) {
            const response = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ mode, ...form }),
            })

            if (!response.ok) {
              throw new Error('Unable to send your enquiry right now.')
            }

            setStatus('success')
            setFeedback('Thank you. Your enquiry has been sent successfully.')
            setForm(initialState)
            setErrors({})
            return
          }

          if (hasWhatsApp) {
            openWhatsApp(buildWhatsAppMessage())
            setStatus('success')
            setFeedback('Your preferred WhatsApp message is ready to send.')
            setForm(initialState)
            setErrors({})
            return
          }

          throw new Error('No contact endpoint or WhatsApp number is configured yet.')
        } catch (error) {
          setStatus('error')
          setFeedback(error instanceof Error ? error.message : 'Something went wrong. Please try again later.')
        }
      }

      function handleWhatsAppClick() {
        const nextErrors = validateForm()

        if (Object.keys(nextErrors).length > 0) {
          setStatus('error')
          setFeedback('Please review the highlighted fields before opening WhatsApp.')
          return
        }

        openWhatsApp(buildWhatsAppMessage())
        setStatus('success')
        setFeedback('Your preferred WhatsApp message is ready to send.')
      }

      const inputClassName =
        'w-full border border-white/12 bg-background px-4 py-3 text-white outline-none transition placeholder:text-text-muted focus:border-gold focus:ring-1 focus:ring-gold'

      function getErrorId(key: string) {
        return `${key.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-error`
      }

      function renderFieldError(key: string) {
        return errors[key] ? (
          <p className="mt-2 text-sm text-[#f4b7b7]" id={getErrorId(key)} role="alert">
            {errors[key]}
          </p>
        ) : null
      }

      return (
        <form className="space-y-6 border border-white/10 bg-card p-8 shadow-[var(--shadow-elevated)]" onSubmit={handleSubmit} noValidate>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Enquiry form</p>
            <h2 className="mt-3 font-serif text-3xl text-white">{heading}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white-muted" htmlFor="name">
                Name
              </label>
              <input
                aria-describedby={errors.Name ? getErrorId('Name') : undefined}
                aria-invalid={Boolean(errors.Name)}
                className={inputClassName}
                id="name"
                name="name"
                onChange={(event) => updateField('name', event.target.value)}
                value={form.name}
              />
              {renderFieldError('Name')}
            </div>
            <div>
              <label className="mb-2 block text-sm text-white-muted" htmlFor="email">
                Email
              </label>
              <input
                aria-describedby={errors.Email ? getErrorId('Email') : undefined}
                aria-invalid={Boolean(errors.Email)}
                className={inputClassName}
                id="email"
                name="email"
                onChange={(event) => updateField('email', event.target.value)}
                type="email"
                value={form.email}
              />
              {renderFieldError('Email')}
            </div>
            <div>
              <label className="mb-2 block text-sm text-white-muted" htmlFor="telephone">
                Telephone
              </label>
              <input
                aria-describedby={errors.Telephone ? getErrorId('Telephone') : undefined}
                aria-invalid={Boolean(errors.Telephone)}
                className={inputClassName}
                id="telephone"
                name="telephone"
                onChange={(event) => updateField('telephone', event.target.value)}
                type="tel"
                value={form.telephone}
              />
              {renderFieldError('Telephone')}
            </div>

            {mode === 'contact' ? (
              <div>
                <label className="mb-2 block text-sm text-white-muted" htmlFor="subject">
                  Subject
                </label>
                <input
                  aria-describedby={errors.Subject ? getErrorId('Subject') : undefined}
                  aria-invalid={Boolean(errors.Subject)}
                  className={inputClassName}
                  id="subject"
                  name="subject"
                  onChange={(event) => updateField('subject', event.target.value)}
                  value={form.subject}
                />
                {renderFieldError('Subject')}
              </div>
            ) : null}

            {mode === 'property' ? (
              <>
                <div>
                  <label className="mb-2 block text-sm text-white-muted" htmlFor="propertyLocation">
                    Property Location
                  </label>
                  <input
                    aria-describedby={errors['Property Location'] ? getErrorId('Property Location') : undefined}
                    aria-invalid={Boolean(errors['Property Location'])}
                    className={inputClassName}
                    id="propertyLocation"
                    name="propertyLocation"
                    onChange={(event) => updateField('propertyLocation', event.target.value)}
                    value={form.propertyLocation}
                  />
                  {renderFieldError('Property Location')}
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white-muted" htmlFor="propertyType">
                    Property Type
                  </label>
                  <input
                    aria-describedby={errors['Property Type'] ? getErrorId('Property Type') : undefined}
                    aria-invalid={Boolean(errors['Property Type'])}
                    className={inputClassName}
                    id="propertyType"
                    name="propertyType"
                    onChange={(event) => updateField('propertyType', event.target.value)}
                    value={form.propertyType}
                  />
                  {renderFieldError('Property Type')}
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white-muted" htmlFor="bedrooms">
                    Bedrooms
                  </label>
                  <input
                    aria-describedby={errors.Bedrooms ? getErrorId('Bedrooms') : undefined}
                    aria-invalid={Boolean(errors.Bedrooms)}
                    className={inputClassName}
                    id="bedrooms"
                    min="0"
                    name="bedrooms"
                    onChange={(event) => updateField('bedrooms', event.target.value)}
                    type="number"
                    value={form.bedrooms}
                  />
                  {renderFieldError('Bedrooms')}
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white-muted" htmlFor="currentUse">
                    Current Use
                  </label>
                  <input
                    aria-describedby={errors['Current Use'] ? getErrorId('Current Use') : undefined}
                    aria-invalid={Boolean(errors['Current Use'])}
                    className={inputClassName}
                    id="currentUse"
                    name="currentUse"
                    onChange={(event) => updateField('currentUse', event.target.value)}
                    value={form.currentUse}
                  />
                  {renderFieldError('Current Use')}
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-white-muted" htmlFor="serviceInterestedIn">
                    Service Interested In
                  </label>
                  <select
                    aria-describedby={errors['Service Interested In'] ? getErrorId('Service Interested In') : undefined}
                    aria-invalid={Boolean(errors['Service Interested In'])}
                    className={inputClassName}
                    id="serviceInterestedIn"
                    name="serviceInterestedIn"
                    onChange={(event) => updateField('serviceInterestedIn', event.target.value)}
                    value={form.serviceInterestedIn}
                  >
                    <option value="">Select a service</option>
                    {propertyServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {renderFieldError('Service Interested In')}
                </div>
              </>
            ) : null}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white-muted" htmlFor="message">
                {mode === 'property' ? 'Description' : 'Message'}
              </label>
              <textarea
                aria-describedby={
                  errors[mode === 'property' ? 'Description' : 'Message']
                    ? getErrorId(mode === 'property' ? 'Description' : 'Message')
                    : undefined
                }
                aria-invalid={Boolean(errors[mode === 'property' ? 'Description' : 'Message'])}
                className={`${inputClassName} min-h-36 resize-y`}
                id="message"
                name="message"
                onChange={(event) => updateField('message', event.target.value)}
                value={form.message}
              />
              {renderFieldError(mode === 'property' ? 'Description' : 'Message')}
            </div>
          </div>

          <div>
            <label className="flex items-start gap-3 text-sm text-white-muted" htmlFor="consent">
              <input
                checked={form.consent}
                className="mt-1 h-4 w-4 accent-gold"
                id="consent"
                onChange={(event) => updateField('consent', event.target.checked)}
                type="checkbox"
              />
              <span>I agree to be contacted regarding my enquiry.</span>
            </label>
            {errors.consent ? (
              <p className="mt-2 text-sm text-[#f4b7b7]" id="consent-error" role="alert">
                {errors.consent}
              </p>
            ) : null}
          </div>

          {feedback ? (
            <div
              className={`border px-4 py-3 text-sm ${status === 'success' ? 'border-gold/40 bg-gold/10 text-white' : 'border-[#a44d4d] bg-[#2b1212] text-[#f4d3d3]'}`}
              role={status === 'error' ? 'alert' : 'status'}
            >
              {feedback}
            </div>
          ) : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button disabled={status === 'loading'} showArrow type="submit" variant="primary">
              {status === 'loading' ? 'Sending...' : submitLabel}
            </Button>
            {hasWhatsApp ? (
              <Button onClick={handleWhatsAppClick} variant="ghost">
                Prefer WhatsApp instead?
              </Button>
            ) : null}
          </div>
        </form>
      )
    }
