import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { SERVICII } from '@/lib/mock-data'
import BlogContent from '@/components/blog/BlogContent'
import ContactForm from '@/components/ui/ContactForm'
import ServiciuCard from '@/components/servicii/ServiciuCard'

function getServiciuBySlug(slug: string) {
  return SERVICII.find((s) => s.slug === slug) ?? null
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const serviciu = getServiciuBySlug(slug)

  if (!serviciu) return { title: 'Serviciu negăsit' }

  return {
    title: serviciu.metaTitle ?? serviciu.titlu,
    description: serviciu.metaDesc ?? serviciu.descriere,
    openGraph: {
      title: serviciu.metaTitle ?? serviciu.titlu,
      description: serviciu.metaDesc ?? serviciu.descriere,
      images: [{ url: serviciu.imagine }],
    },
  }
}

export function generateStaticParams() {
  return SERVICII.map((s) => ({ slug: s.slug }))
}

export default async function ServiciuPage({ params }: Props) {
  const { slug } = await params
  const serviciu = getServiciuBySlug(slug)
  const altele = SERVICII.filter((s) => s.slug !== slug)
    .sort((a, b) => a.ordine - b.ordine)
    .slice(0, 2)

  if (!serviciu) notFound()

  return (
    <>
      <section className="pt-28 pb-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-body text-[#9A9590] mb-6">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Acasă</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/servicii" className="hover:text-[#F5A623] transition-colors">Servicii</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#F0EDE8]">{serviciu.titlu}</span>
          </nav>

          <h1 className="font-display font-black uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#F0EDE8] leading-[0.95] mb-4 max-w-3xl">
            {serviciu.titlu}
          </h1>
          <p className="text-[#9A9590] font-body text-lg max-w-2xl leading-relaxed mb-12">
            {serviciu.descriere}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden mb-10">
                <Image
                  src={serviciu.imagine}
                  alt={serviciu.titlu}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              <BlogContent html={serviciu.continut} />
            </div>

            <aside className="space-y-8">
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] p-6">
                <h3 className="font-display font-bold uppercase text-xl tracking-tight text-[#F0EDE8] mb-5">
                  Solicită Ofertă Rapidă
                </h3>
                <ContactForm compact />
              </div>

              {altele.length > 0 && (
                <div>
                  <h3 className="font-display font-bold uppercase text-sm tracking-widest text-[#9A9590] mb-4">
                    Alte servicii
                  </h3>
                  <div className="space-y-4">
                    {altele.map((s) => (
                      <ServiciuCard key={s.id} serviciu={s} />
                    ))}
                  </div>
                </div>
              )}
            </aside>
            </div>
        </div>
      </section>
    </>
  )
}
