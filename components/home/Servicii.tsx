'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Building,
  Layers,
  GitBranch,
  Hammer,
  Leaf,
  Truck,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import type { Serviciu } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Building,
  Layers,
  GitBranch,
  Hammer,
  Leaf,
  Truck,
}

function ServiciuCard({ serviciu, index }: { serviciu: Serviciu; index: number }) {
  const Icon = iconMap[serviciu.iconita] ?? Building

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/servicii/${serviciu.slug}`}
        className="group block h-full bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] overflow-hidden hover:border-[#F5A623] hover:shadow-[0_0_24px_rgba(245,166,35,0.15)] transition-all duration-300 hover:-translate-y-1"
        aria-label={`Serviciu: ${serviciu.titlu}`}
      >
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={serviciu.imagine}
            alt={serviciu.titlu}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
          <div className="absolute top-4 left-4 w-10 h-10 bg-[#F5A623] rounded-[4px] flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#0D0D0D]" />
          </div>
        </div>

        <div className="p-6">

        <h3 className="font-display font-bold uppercase text-xl tracking-tight text-[#F0EDE8] mb-3 group-hover:text-[#F5A623] transition-colors leading-tight">
          {serviciu.titlu}
        </h3>

        <p className="text-[#9A9590] text-sm font-body leading-relaxed mb-5 line-clamp-3">
          {serviciu.descriere}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm font-display font-bold uppercase tracking-wider text-[#F5A623] group-hover:gap-3 transition-all">
          Află mai mult
          <ArrowRight className="w-4 h-4" />
        </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ServiciiSection({ servicii }: { servicii: Serviciu[] }) {
  return (
    <section id="servicii" className="py-24 bg-[#0D0D0D]">
      <div
        className="absolute left-0 right-0 h-16 -skew-y-1 bg-[#0D0D0D]"
        style={{ top: '-2rem' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionTitle
            label="Ce facem"
            title="Serviciile Noastre"
            subtitle="Oferim o gamă completă de servicii de excavații și terasamente, executate cu utilaje moderne și echipe specializate."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicii.map((s, i) => (
            <ServiciuCard key={s.id} serviciu={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
