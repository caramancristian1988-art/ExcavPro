import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Tag, ChevronRight, ArrowLeft } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/mock-data'
import BlogContent from '@/components/blog/BlogContent'
import BlogCard from '@/components/blog/BlogCard'
import { formatDate } from '@/lib/utils'

function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug && p.publicat) ?? null
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: 'Articol negăsit' }

  return {
    title: post.metaTitle ?? post.titlu,
    description: post.metaDesc ?? post.excerpt,
    openGraph: {
      title: post.metaTitle ?? post.titlu,
      description: post.metaDesc ?? post.excerpt,
      images: [{ url: post.imagine }],
      type: 'article',
    },
  }
}

export function generateStaticParams() {
  return BLOG_POSTS.filter((p) => p.publicat).map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const recomandate = [...BLOG_POSTS]
    .filter((p) => p.publicat && p.slug !== slug)
    .sort((a, b) => new Date(b.creatLa).getTime() - new Date(a.creatLa).getTime())
    .slice(0, 3)

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.imagine}
            alt={post.titlu}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/75 to-[#0D0D0D]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm font-body text-[#9A9590] mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-[#F5A623] transition-colors">
              Acasă
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link href="/blog" className="hover:text-[#F5A623] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-[#F0EDE8] line-clamp-1">{post.titlu}</span>
          </nav>

          <div className="flex flex-wrap gap-4 text-sm text-[#9A9590] font-body mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.creatLa)}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.autor}
            </span>
            {post.categorie && (
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                {post.categorie}
              </span>
            )}
          </div>

          <h1 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#F0EDE8] leading-[0.95] max-w-3xl">
            {post.titlu}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <p className="text-[#9A9590] font-body text-lg leading-relaxed border-l-4 border-[#F5A623] pl-5 mb-8 italic">
                {post.excerpt}
              </p>

              <BlogContent html={post.continut} />

              {post.serviciu && (
                <div className="mt-10 p-5 bg-[#1A1A1A] border border-[#F5A623]/30 rounded-[4px]">
                  <p className="text-sm font-display font-bold uppercase tracking-widest text-[#9A9590] mb-2">
                    Serviciu corelat
                  </p>
                  <Link
                    href={`/servicii/${post.serviciu}`}
                    className="text-[#F5A623] font-display font-bold uppercase tracking-wide hover:text-[#D4891C] transition-colors"
                  >
                    → {post.serviciu.replace(/-/g, ' ')}
                  </Link>
                </div>
              )}

              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#9A9590] hover:text-[#F5A623] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Înapoi la Blog
                </Link>
              </div>
            </article>

            {recomandate.length > 0 && (
              <aside>
                <h3 className="font-display font-bold uppercase text-sm tracking-widest text-[#9A9590] mb-6">
                  Articole recomandate
                </h3>
                <div className="space-y-5">
                  {recomandate.map((p) => (
                    <BlogCard key={p.id} post={p} />
                  ))}
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
