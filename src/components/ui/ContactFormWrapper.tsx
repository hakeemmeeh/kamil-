'use client'

import { Suspense } from 'react'
import { ContactForm, type InquiryType } from './ContactForm'

export function ContactFormWrapper({ presetInquiry }: { presetInquiry?: InquiryType }) {
  return (
    <Suspense fallback={<div className="py-12 text-center text-sm text-ink-muted">Loading form...</div>}>
      <ContactForm presetInquiry={presetInquiry} />
    </Suspense>
  )
}
