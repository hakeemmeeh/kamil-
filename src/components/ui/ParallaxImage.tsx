import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  priority = false,
}: ParallaxImageProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
