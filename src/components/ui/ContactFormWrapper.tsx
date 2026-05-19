'use client'

import { Suspense } from 'react'
import { ContactForm } from './ContactForm'

export function ContactFormWrapper() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-sm text-ink-muted">Loading form...</div>}>
      <ContactForm />
    </Suspense>
  )
}
