import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/mock-data'
import BlogCard from '@/components/blog/BlogCard'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articole, ghiduri și sfaturi despre excavații, terasamente și lucrări de pământ de la experții ExcavPro.',
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS]
    .filter((p) => p.publicat)
    .sort((a, b) => new Date(b.creatLa).getTime() - new Date(a.creatLa).getTime())

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
            <span className="text-[#F0EDE8]">Blog</span>
          </nav>

          <SectionTitle
            label="Articole"
            title="Blog & Resurse"
            subtitle="Sfaturi, ghiduri și noutăți din domeniul excavațiilor și terasamentelor de la echipa noastră de specialiști."
            align="left"
          />
        </div>
      </section>

      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#9A9590] font-body text-lg">
                Nu există articole momentan. Reveniți curând.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
