import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactați ExcavPro pentru o ofertă personalizată de excavații și terasamente. Răspundem în maxim 4 ore.',
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+40 700 000 000',
    href: 'tel:+40700000000',
    desc: 'Disponibil 24/7 pentru urgențe',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@excavpro.ro',
    href: 'mailto:contact@excavpro.ro',
    desc: 'Răspundem în maxim 4 ore',
  },
  {
    icon: MapPin,
    label: 'Adresă',
    value: 'Str. Industriei 12, Ploiești, Prahova',
    href: null,
    desc: 'Sediu central',
  },
  {
    icon: Clock,
    label: 'Program',
    value: 'Lun–Vin 07:00–19:00',
    href: null,
    desc: 'Sâmbătă la cerere | Urgențe 24/7',
  },
]

export default function ContactPage() {
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
            <span className="text-[#F0EDE8]">Contact</span>
          </nav>

          <SectionTitle
            label="Suntem aici"
            title="Contactează-ne"
            subtitle="Completează formularul sau contactează-ne direct. Răspundem prompt și îți pregătim o ofertă personalizată."
            align="left"
          />
        </div>
      </section>

      <section className="py-8 pb-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] hover:border-[#F5A623]/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-[4px] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="text-xs font-display font-bold uppercase tracking-widest text-[#9A9590] mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[#F0EDE8] font-body font-medium hover:text-[#F5A623] transition-colors block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#F0EDE8] font-body font-medium">{value}</p>
                    )}
                    <p className="text-xs text-[#9A9590] font-body mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}

              <div className="aspect-video w-full bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#F5A623] mx-auto mb-2" />
                  <p className="text-[#9A9590] text-sm font-body">Hartă Google Maps</p>
                  <p className="text-[#9A9590] text-xs font-body mt-1">
                    Str. Industriei 12, Ploiești
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] p-8 md:p-10">
              <h2 className="font-display font-bold uppercase text-2xl tracking-tight text-[#F0EDE8] mb-2">
                Trimite un mesaj
              </h2>
              <p className="text-[#9A9590] font-body text-sm mb-8">
                Descrie proiectul tău și îți pregătim o ofertă detaliată gratuit.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
