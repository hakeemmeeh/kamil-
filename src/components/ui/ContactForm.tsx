'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

const inquiryTypes = [
  'Flight Booking',
  'Corporate Travel',
  'Airport Transfer',
  'Visa Assistance',
  'Car Hire',
  'Tour Inquiry',
  'Guide Application',
  'General Inquiry',
] as const

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  inquiryType: z.enum(inquiryTypes),
  message: z.string().min(10, 'Please write at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)

  const defaultInquiry =
    (searchParams.get('inquiry')?.replace(/\+/g, ' ') as FormData['inquiryType']) || 'General Inquiry'
  const defaultMessage = searchParams.get('message')?.replace(/\+/g, ' ') || ''

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      inquiryType: inquiryTypes.includes(defaultInquiry as (typeof inquiryTypes)[number])
        ? (defaultInquiry as FormData['inquiryType'])
        : 'General Inquiry',
      message: defaultMessage,
    },
  })

  useEffect(() => {
    if (defaultMessage) setValue('message', defaultMessage)
    if (inquiryTypes.includes(defaultInquiry as (typeof inquiryTypes)[number])) {
      setValue('inquiryType', defaultInquiry as FormData['inquiryType'])
    }
  }, [defaultInquiry, defaultMessage, setValue])

  async function onSubmit(data: FormData) {
    console.log('Kamil Travel inquiry:', data)
    await new Promise((r) => setTimeout(r, 1000))
    reset()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="mb-4 h-14 w-14 text-success" />
        <h3 className="mb-2 font-display text-2xl font-semibold text-ink">Inquiry Sent</h3>
        <p className="text-ink-muted">Thank you! The Kamil Travel team will be in touch soon.</p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-bold text-ink">Full Name *</label>
        <input {...register('name')} className={inputClass} />
        {errors.name && <p className="mt-1 text-xs text-error">{errors.name.message}</p>}
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold text-ink">Email Address *</label>
        <input type="email" {...register('email')} className={inputClass} />
        {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold text-ink">Phone</label>
        <input type="tel" {...register('phone')} className={inputClass} />
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold text-ink">Inquiry Type *</label>
        <select {...register('inquiryType')} className={inputClass}>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold text-ink">Message *</label>
        <textarea rows={5} {...register('message')} className={`${inputClass} resize-none`} />
        {errors.message && <p className="mt-1 text-xs text-error">{errors.message.message}</p>}
      </div>
      <button
        disabled={isSubmitting}
        className="w-full rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-gold-dark disabled:opacity-60 active:scale-[0.98]"
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  )
}
