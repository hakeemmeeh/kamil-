import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111827',
          soft: '#1F2937',
          muted: '#4B5563',
        },
        night: {
          DEFAULT: '#07111F',
          light: '#0D1B2E',
          card: '#101C2D',
        },
        ocean: {
          DEFAULT: '#0E7490',
          dark: '#155E75',
          light: '#E6F7FA',
        },
        gold: {
          DEFAULT: '#1B4B8C',
          dark: '#0F3260',
          light: '#EBF2FF',
        },
        sand: {
          DEFAULT: '#F5F0E8',
          light: '#FBF8F3',
          deep: '#E7D8C3',
        },
        sky: {
          DEFAULT: '#EAF6FF',
          deep: '#B9DDF2',
        },
        border: '#E6DED2',
        error: '#DC2626',
        success: '#16A34A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 30px 80px rgba(7, 17, 31, 0.16)',
        glow: '0 20px 60px rgba(27, 75, 140, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

export default config
