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
      className={`mb-8 md:mb-10 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`font-kanila-display text-[1.85rem] md:text-4xl lg:text-5xl leading-[0.95] tracking-tight ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-white/85' : 'text-body-contrast'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
