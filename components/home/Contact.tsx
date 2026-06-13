'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from '@/components/ui/ContactForm'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+40 700 000 000',
    href: 'tel:+40700000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@excavpro.ro',
    href: 'mailto:contact@excavpro.ro',
  },
  {
    icon: MapPin,
    label: 'Adresă',
    value: 'Str. Industriei 12, Ploiești, Prahova',
    href: null,
  },
  {
    icon: Clock,
    label: 'Program',
    value: 'Lun–Vin 07:00–19:00 | Urgențe 24/7',
    href: null,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col pt-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionTitle
            label="Contactează-ne"
            title="Solicită Oferta Ta"
            subtitle="Completează formularul și îți trimitem o ofertă personalizată în maxim 4 ore."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display font-bold uppercase text-2xl tracking-tight text-[#F0EDE8] mb-8">
              Informații de contact
            </h3>

            <ul className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
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
                        className="text-[#F0EDE8] font-body hover:text-[#F5A623] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#F0EDE8] font-body">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0D0D0D] border border-[#2E2E2E] rounded-[4px] p-8"
          >
            <h3 className="font-display font-bold uppercase text-2xl tracking-tight text-[#F0EDE8] mb-6">
              Trimite un mesaj
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-14 w-full border-t border-[#2E2E2E] flex-1 min-h-[400px]"
      >
        <iframe
          src="https://maps.google.com/maps?q=47.2646898,28.7669284&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block', minHeight: '400px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locație ExcavPro"
        />
      </motion.div>
    </section>
  )
}
