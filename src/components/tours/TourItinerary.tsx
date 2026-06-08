'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Calendar, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Tour } from '@/types'

interface TourItineraryProps {
  tour: Tour
}

export function TourItinerary({ tour }: TourItineraryProps) {
  // Parse duration number
  const match = tour.duration.match(/^(\d+)/)
  const daysCount = match ? parseInt(match[1]) : 4

  // Helper to generate dynamic premium timeline
  const items = (() => {
    const list = [
      {
        day: 1,
        title: 'Arrival & Luxury Transfer',
        desc: `Arrive at the destination, clear custom controls, and meet your Kamil Travel airport representative. Enjoy a private chauffeur transfer to your handpicked luxury hotel. Check in and spend the rest of the day relaxing or exploring at your leisure.`,
        location: 'Airport & Hotel',
      },
    ]

    const highlights = tour.highlights || []
    for (let i = 2; i < daysCount; i++) {
      const hIndex = (i - 2) % highlights.length
      const hl = highlights[hIndex] || 'Excursion & Local Insights'
      list.push({
        day: i,
        title: hl,
        desc: `Experience a premium guided journey exploring ${hl.toLowerCase()}. Travel comfortably in an air-conditioned private vehicle with your personal local guide. Enjoy a curated lunch at a scenic spot, skip-the-line entrance fees, and a custom itinerary tailored to your pace.`,
        location: tour.destination,
      });
    }

    if (daysCount >= 2) {
      list.push({
        day: daysCount,
        title: 'Leisure & Onward Flight',
        desc: `Enjoy a final breakfast at your hotel. Depending on your flight time, spend a leisurely morning shopping for souvenirs or relaxing at the hotel wellness facilities. Your private driver will meet you in the lobby for your transfer to the international airport for departure.`,
        location: 'Hotel & Departure',
      });
    }

    return list
  })()

  const [activeDay, setActiveDay] = useState<number>(1)

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center gap-3">
        <Calendar className="h-5 w-5 text-gold" />
        <h3 className="font-display text-2xl font-semibold text-ink">Suggested Itinerary</h3>
      </div>
      
      <div className="relative border-l border-gold/20 pl-6 ml-3 space-y-6">
        {items.map((item) => {
          const isActive = activeDay === item.day
          
          return (
            <div key={item.day} className="relative">
              {/* Timeline Indicator Node */}
              <button
                type="button"
                onClick={() => setActiveDay(isActive ? 0 : item.day)}
                className={cn(
                  "absolute -left-[35px] top-0 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ring-4 ring-sand-light",
                  isActive 
                    ? "bg-gold text-white shadow-glow scale-110" 
                    : "bg-sand text-ink-muted hover:bg-gold/10 hover:text-gold"
                )}
              >
                {item.day}
              </button>

              {/* Accordion Card */}
              <div 
                className={cn(
                  "rounded-2xl border border-border/80 bg-white transition-all duration-300 shadow-sm",
                  isActive ? "shadow-md border-gold/20 ring-1 ring-gold/5" : "hover:border-gold/30 hover:shadow-md"
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveDay(isActive ? 0 : item.day)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-ink"
                >
                  <div>
                    <span className="block text-[10px] font-extrabold uppercase tracking-widest text-gold mb-1">
                      Day {item.day}
                    </span>
                    <h4 className="font-kanila-display text-lg md:text-xl font-normal leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 text-ink-muted transition-transform duration-300", isActive && "rotate-180")} />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-border/40 text-sm text-ink-muted leading-relaxed space-y-3">
                        <p>{item.desc}</p>
                        <div className="flex items-center gap-1.5 text-xs text-gold font-bold">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
