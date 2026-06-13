import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SERVICII } from '@/lib/mock-data'
import ServiciuCard from '@/components/servicii/ServiciuCard'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Servicii',
  description:
    'Toate serviciile ExcavPro: excavații fundații, terasamente, săpături canalizare, demolări, amenajări peisagistice și transport pământ.',
}

export default function ServiciiPage() {
  const servicii = [...SERVICII].sort((a, b) => a.ordine - b.ordine)

  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm font-body text-[#9A9590] mb-8"
          >
            <Link href="/" className="hover:text-[#F5A623] transition-colors">
              Acasă
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#F0EDE8]">Servicii</span>
          </nav>

          <SectionTitle
            label="Ce facem"
            title="Toate Serviciile Noastre"
            subtitle="O gamă completă de servicii de excavații și terasamente, realizate cu utilaje moderne și profesioniști cu experiență."
            align="left"
          />
        </div>
      </section>

      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {servicii.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#9A9590] font-body text-lg">
                Nu există servicii momentan. Reveniți curând.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicii.map((s) => (
                <ServiciuCard key={s.id} serviciu={s} />
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-[#9A9590] font-body mb-4">
              Ai un proiect specific? Contactează-ne pentru o ofertă personalizată.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Solicită Ofertă Gratuită
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
