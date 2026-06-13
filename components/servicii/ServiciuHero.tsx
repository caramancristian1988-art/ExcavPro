import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Serviciu } from '@/types'

export default function ServiciuHero({ serviciu }: { serviciu: Serviciu }) {
  return (
    <section className="relative min-h-[60vh] flex items-end pt-20">
      <div className="absolute inset-0">
        <Image
          src={serviciu.imagine}
          alt={serviciu.titlu}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-[#0D0D0D]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-body text-[#9A9590] mb-6">
          <Link href="/" className="hover:text-[#F5A623] transition-colors">
            Acasă
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/servicii" className="hover:text-[#F5A623] transition-colors">
            Servicii
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#F0EDE8]">{serviciu.titlu}</span>
        </nav>

        <h1 className="font-display font-black uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#F0EDE8] leading-[0.95] max-w-3xl">
          {serviciu.titlu}
        </h1>
        <p className="mt-4 text-[#9A9590] font-body text-lg max-w-2xl leading-relaxed">
          {serviciu.descriere}
        </p>
      </div>
    </section>
  )
}
