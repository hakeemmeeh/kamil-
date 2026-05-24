/** Decorative mark below Popular Destinations title (Kanila) */
export function KanilaCompassMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="14"
      viewBox="0 0 32 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 1L19 7H25L20.5 10.5L22 14L16 11.5L10 14L11.5 10.5L7 7H13L16 1Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}
