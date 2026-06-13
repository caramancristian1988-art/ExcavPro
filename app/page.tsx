import Hero from '@/components/home/Hero'
import ServiciiSection from '@/components/home/Servicii'
import DespreNoi from '@/components/home/DespreNoi'
import Recenzii from '@/components/home/Recenzii'
import BlogPreview from '@/components/home/BlogPreview'
import FAQ from '@/components/home/FAQ'
import ContactSection from '@/components/home/Contact'
import { SERVICII, RECENZII, BLOG_POSTS, FAQS } from '@/lib/mock-data'

export default function HomePage() {
  const servicii = SERVICII.slice(0, 6)
  const recenzii = RECENZII.filter((r) => r.afisata).slice(0, 6)
  const posts = [...BLOG_POSTS].filter((p) => p.publicat).slice(0, 3)
  const faqs = FAQS.filter((f) => f.activ).sort((a, b) => a.ordine - b.ordine)

  return (
    <>
      <Hero />
      <ServiciiSection servicii={servicii} />
      <DespreNoi />
      <Recenzii recenzii={recenzii} />
      <BlogPreview posts={posts} />
      <FAQ faqs={faqs} />
      <ContactSection />
    </>
  )
}
