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
import Badge from '@/components/ui/Badge'
import type { Serviciu } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Building,
  Layers,
  GitBranch,
  Hammer,
  Leaf,
  Truck,
}

export default function ServiciuCard({ serviciu }: { serviciu: Serviciu }) {
  const Icon = iconMap[serviciu.iconita] ?? Building

  return (
    <Link
      href={`/servicii/${serviciu.slug}`}
      className="group block bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] overflow-hidden hover:border-[#F5A623] hover:shadow-[0_0_24px_rgba(245,166,35,0.15)] transition-all duration-300"
      aria-label={serviciu.titlu}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
        <Image
          src={serviciu.imagine}
          alt={serviciu.titlu}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
        {serviciu.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="accent">Recomandat</Badge>
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <div className="w-10 h-10 bg-[#F5A623] rounded-[4px] flex items-center justify-center shadow-lg">
            <Icon className="w-5 h-5 text-[#0D0D0D]" />
          </div>
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
          Detalii serviciu
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}
