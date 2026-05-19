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
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    console.log('Kamil Travel inquiry:', data)
    await new Promise(r => setTimeout(r, 1000))
    reset()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="h-10 w-10 text-success mb-3" />
        <h3 className="font-display text-xl font-semibold text-ink mb-1">Inquiry Started</h3>
        <p className="text-sm text-ink-muted">We will reach out to you shortly.</p>
      </div>
    )
  }

  const inputClass = "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
      <div>
        <label className="mb-1.5 block text-xs font-bold text-ink-muted uppercase tracking-wider">Trip Type</label>
        <select {...register('tripType')} className={inputClass}>
          <option value="Corporate Travel">Corporate Travel</option>
          <option value="Flight Booking">Flight Booking</option>
          <option value="Airport Transfer">Airport Transfer</option>
          <option value="Visa Help">Visa Help</option>
          <option value="Car Hire">Car Hire</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold text-ink-muted uppercase tracking-wider">From</label>
        <input {...register('from')} placeholder="City or Airport" className={inputClass} />
        {errors.from && <p className="mt-1 text-xs text-error">{errors.from.message}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold text-ink-muted uppercase tracking-wider">To</label>
        <input {...register('to')} placeholder="Destination" className={inputClass} />
        {errors.to && <p className="mt-1 text-xs text-error">{errors.to.message}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold text-ink-muted uppercase tracking-wider">Date</label>
        <input type="date" {...register('date')} className={inputClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold text-ink-muted uppercase tracking-wider">Traveler</label>
        <select {...register('travelerType')} className={inputClass}>
          <option value="Individual">Individual</option>
          <option value="Corporate">Corporate</option>
          <option value="Group">Group</option>
        </select>
      </div>
      <div>
        <button disabled={isSubmitting} className="w-full rounded-xl bg-gold px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-night transition hover:bg-gold-dark hover:shadow-glow disabled:opacity-60">
          {isSubmitting ? '...' : 'Start Inquiry'}
        </button>
      </div>
    </form>
  )
}
