'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle } from 'lucide-react'

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type FormData = z.infer<typeof schema>

interface NewsletterFormProps {
  variant?: 'default' | 'footer'
}

export function NewsletterForm({ variant = 'default' }: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    console.log('Kamil Travel newsletter signup:', data)
    await new Promise((r) => setTimeout(r, 800))
    reset()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const isFooter = variant === 'footer'
  const inputClass = isFooter
    ? 'flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20'
    : 'w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15'

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-2 text-sm ${isFooter ? 'text-gold' : 'text-success'}`}
        role="status"
      >
        <CheckCircle className="h-5 w-5 shrink-0" />
        <span>Thank you — you&apos;re on the list.</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={isFooter ? 'flex flex-col gap-3 sm:flex-row' : 'space-y-3'}
    >
      <div className={isFooter ? 'flex flex-1 flex-col gap-1 sm:flex-row sm:items-center' : 'space-y-1'}>
        <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
          Email address
        </label>
        <input
          id={`newsletter-email-${variant}`}
          type="email"
          placeholder="Your email address"
          {...register('email')}
          className={inputClass}
        />
        {errors.email && (
          <p className={`text-xs ${isFooter ? 'text-gold/80' : 'text-error'}`}>{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={
          isFooter
            ? 'shrink-0 rounded-full bg-gold px-6 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-night transition hover:bg-gold-dark disabled:opacity-60'
            : 'w-full rounded-full bg-gold px-7 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-night transition hover:bg-gold-dark disabled:opacity-60'
        }
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
