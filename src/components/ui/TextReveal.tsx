'use client'

import { useInView } from '@/hooks/useInView'

interface TextRevealProps {
  children: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p'
}

export function TextReveal({ children, className = '', tag = 'h2' }: TextRevealProps) {
  const Tag = tag
  const { ref, inView } = useInView<HTMLHeadingElement>()
  const words = children.split(' ')

  return (
    <Tag ref={ref} className={`reveal-text ${inView ? 'is-visible' : ''} ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
          <span
            className="reveal-text-word inline-block"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
