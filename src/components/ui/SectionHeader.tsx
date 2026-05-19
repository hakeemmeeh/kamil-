interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[0.95] tracking-tight ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-white/60' : 'text-ink-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
