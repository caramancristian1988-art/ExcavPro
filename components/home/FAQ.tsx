'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import type { FAQItem } from '@/types'

function FAQCard({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-[#2E2E2E] rounded-[4px] overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold uppercase tracking-tight text-[#F0EDE8] text-base leading-tight pr-4">
          {item.intrebare}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-[4px] bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623]">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 bg-[#0D0D0D] border-t border-[#2E2E2E]">
              <p className="text-[#9A9590] font-body leading-relaxed">{item.raspuns}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  if (faqs.length === 0) return null

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionTitle
            label="Întrebări frecvente"
            title="Răspunsuri la Întrebările Voastre"
            subtitle="Nu găsești răspunsul căutat? Contactează-ne direct."
          />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => (
            <FAQCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
