'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const schema = z.object({
  tripType: z.string().min(1),
  from: z.string().min(2, 'Required'),
  to: z.string().min(2, 'Required'),
  date: z.string().min(1, 'Required'),
  travelerType: z.string().min(1),
})

type FormData = z.infer<typeof schema>

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    console.log('Kamil Travel inquiry:', data)
    await new Promise((r) => setTimeout(r, 1000))
    reset()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="mb-3 h-10 w-10 text-success" />
        <h3 className="mb-1 font-display text-xl font-semibold text-ink">Inquiry Started</h3>
        <p className="text-sm text-ink-muted">We will reach out to you shortly.</p>
      </div>
    )
  }

  const inputClass =
    'booking-input inquiry-input w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-gold'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 items-end gap-4 md:grid-cols-2 lg:grid-cols-6"
    >
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
          Service Type
        </label>
        <select {...register('tripType')} className={inputClass} defaultValue="Corporate Travel">
          <option value="Corporate Travel">Corporate Travel</option>
          <option value="Flight Booking">Flight Booking</option>
          <option value="Airport Transfer">Airport Transfer</option>
          <option value="Visa Help">Visa Help</option>
          <option value="Car Hire">Car Hire</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
          From
        </label>
        <input {...register('from')} placeholder="City or Airport" className={inputClass} />
        {errors.from && <p className="mt-1 text-xs text-error">{errors.from.message}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
          To
        </label>
        <input {...register('to')} placeholder="Destination" className={inputClass} />
        {errors.to && <p className="mt-1 text-xs text-error">{errors.to.message}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
          Date
        </label>
        <input type="date" {...register('date')} className={inputClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
          Traveler Type
        </label>
        <select {...register('travelerType')} className={inputClass} defaultValue="Individual">
          <option value="Individual">Individual</option>
          <option value="Corporate">Corporate</option>
          <option value="Group">Group</option>
        </select>
      </div>
      <div>
        <button
          disabled={isSubmitting}
          className="w-full rounded-xl bg-gold px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-glow disabled:opacity-60"
        >
          {isSubmitting ? '...' : 'Start Inquiry'}
        </button>
      </div>
    </form>
  )
}
