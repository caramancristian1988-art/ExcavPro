'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'

const stats = [
  { value: 15, suffix: '+', label: 'Ani experiență' },
  { value: 500, suffix: '+', label: 'Proiecte finalizate' },
  { value: 300, suffix: '+', label: 'Clienți mulțumiți' },
  { value: 12, suffix: '', label: 'Utilaje moderne' },
]

const beneficii = [
  'Echipă certificată și cu experiență vastă',
  'Utilaje moderne, de ultimă generație',
  'Respectăm cu strictețe termenele de execuție',
  'Prețuri transparente fără costuri ascunse',
  'Asigurare completă pentru toate lucrările',
  'Consultanță tehnică gratuită pre-contract',
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-display font-black text-4xl md:text-5xl text-[#F5A623]">
      {count}
      {suffix}
    </span>
  )
}

export default function DespreNoi() {
  return (
    <section id="despre-noi" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/aboutexcavator/800/600"
                alt="Echipa ExcavPro la lucru"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden md:block bg-[#F5A623] p-5 rounded-[4px] shadow-xl">
              <p className="font-display font-black text-4xl text-[#0D0D0D] leading-none">15+</p>
              <p className="font-display font-bold text-sm text-[#0D0D0D] uppercase tracking-wider">
                Ani experiență
              </p>
            </div>

            <div className="absolute -top-4 -left-4 hidden md:block w-32 h-32 border border-[#F5A623]/30 rounded-[4px]" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionTitle
              label="Despre noi"
              title="Forță și Precizie în Fiecare Proiect"
              subtitle="Suntem o firmă cu tradiție în domeniul excavațiilor și terasamentelor, cu o echipă de profesioniști dedicați și o flotă modernă de utilaje."
              align="left"
              className="mb-8"
            />

            <ul className="space-y-3 mb-10">
              {beneficii.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0" />
                  <span className="text-[#9A9590] font-body">{b}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#2E2E2E]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-[#9A9590] text-sm font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
