import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  arrow?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  arrow = false,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const baseStyles =
    'group/btn inline-flex items-center justify-center gap-2 rounded-full font-extrabold uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer active:scale-[0.98]'

  const variants = {
    primary:
      'bg-gold !text-white shadow-cta hover:bg-gold-dark hover:!text-white hover:shadow-glow hover:-translate-y-0.5',
    secondary:
      'bg-white text-ink border-2 border-border shadow-sm hover:border-gold hover:text-gold hover:shadow-md',
    outline: 'border-2 border-white/30 text-white hover:border-gold hover:text-gold',
    ghost: 'text-ocean hover:text-ocean-dark',
  }

  const sizes = {
    sm: 'px-5 py-2 text-[11px]',
    md: 'px-7 py-3.5 text-[13px]',
    lg: 'px-9 py-4 text-[13px]',
  }

  const classes = cn(
    baseStyles,
    variant === 'primary' && 'btn-premium hover:shadow-glow',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 pointer-events-none',
    className
  )

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
