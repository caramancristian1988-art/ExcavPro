'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import type { Recenzie } from '@/types'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} din 5 stele`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-[#F5A623] text-[#F5A623]' : 'text-[#2E2E2E]'}`}
        />
      ))}
    </div>
  )
}

function Initials({ name }: { name: string }) {
  const parts = name.split(' ')
  const initials = parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : name.slice(0, 2)
  return (
    <div className="w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center shrink-0">
      <span className="font-display font-black text-[#0D0D0D] text-base uppercase">
        {initials}
      </span>
    </div>
  )
}

export default function Recenzii({ recenzii }: { recenzii: Recenzie[] }) {
  const [current, setCurrent] = useState(0)
  const total = recenzii.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  if (total === 0) return null

  const r = recenzii[current]

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <SectionTitle
            label="Ce spun clienții"
            title="Recenzii & Testimoniale"
            subtitle="Peste 300 de clienți satisfăcuți care au ales calitatea și profesionalismul nostru."
          />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={r.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] p-8 md:p-10"
            >
              <div className="mb-6">
                <StarRating rating={r.rating} />
              </div>

              <blockquote className="text-[#F0EDE8] font-body text-lg leading-relaxed mb-8 italic">
                &ldquo;{r.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <Initials name={r.nume} />
                <div>
                  <p className="font-display font-bold uppercase tracking-wide text-[#F0EDE8] text-sm">
                    {r.nume}
                  </p>
                  {r.functie && (
                    <p className="text-[#9A9590] text-sm font-body">{r.functie}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Recenzie anterioară"
              className="w-10 h-10 rounded-[4px] bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#9A9590] hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {recenzii.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Recenzie ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#F5A623]' : 'w-4 bg-[#2E2E2E]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Recenzie următoare"
              className="w-10 h-10 rounded-[4px] bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#9A9590] hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
