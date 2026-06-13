import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Globe, AtSign, ExternalLink } from 'lucide-react'

const serviciiLinks = [
  { href: '/servicii/excavatii-fundatii', label: 'Excavații Fundații' },
  { href: '/servicii/terasamente-nivelari', label: 'Terasamente & Nivelări' },
  { href: '/servicii/sapaturi-canalizare-utilitati', label: 'Săpături Canalizare' },
  { href: '/servicii/demolari-controlate', label: 'Demolări Controlate' },
  { href: '/servicii/amenajari-peisagistice', label: 'Amenajări Peisagistice' },
  { href: '/servicii/transport-pamant-deseuri', label: 'Transport Pământ' },
]

const paginiLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/#despre-noi', label: 'Despre Noi' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2E2E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo_excavator.png"
                alt="ExcavPro"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-[#9A9590] text-sm font-body leading-relaxed mb-6">
              Servicii profesionale de excavații, terasamente și lucrări de pământ. 15+ ani de experiență, 500+ proiecte finalizate.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, label: 'Facebook', href: '#' },
                { icon: AtSign, label: 'Instagram', href: '#' },
                { icon: ExternalLink, label: 'LinkedIn', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-[4px] bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#9A9590] hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-widest text-sm text-[#F0EDE8] mb-4">
              Servicii
            </h3>
            <ul className="space-y-2">
              {serviciiLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9A9590] hover:text-[#F5A623] transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-widest text-sm text-[#F0EDE8] mb-4">
              Pagini
            </h3>
            <ul className="space-y-2">
              {paginiLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9A9590] hover:text-[#F5A623] transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-widest text-sm text-[#F0EDE8] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <a href="tel:+40700000000" className="text-sm text-[#9A9590] hover:text-[#F5A623] transition-colors font-body">
                  +40 700 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <a href="mailto:contact@excavpro.ro" className="text-sm text-[#9A9590] hover:text-[#F5A623] transition-colors font-body">
                  contact@excavpro.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <span className="text-sm text-[#9A9590] font-body">
                  Str. Industriei 12, Ploiești, Prahova
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <span className="text-sm text-[#9A9590] font-body">
                  Lun–Vin 07:00–19:00<br />
                  Urgențe: 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2E2E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#9A9590] font-body">
            © {currentYear} ExcavPro. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-[#9A9590] font-body">
            CUI: RO12345678 | Reg. Com.: J29/1234/2010
          </p>
        </div>
      </div>
    </footer>
  )
}
