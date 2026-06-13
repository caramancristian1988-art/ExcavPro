'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, User } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types'

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] overflow-hidden hover:border-[#F5A623] hover:shadow-[0_0_24px_rgba(245,166,35,0.12)] transition-all duration-300"
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
          <Image
            src={post.imagine}
            alt={post.titlu}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {post.categorie && (
            <div className="absolute top-3 left-3">
              <Badge variant="primary">{post.categorie}</Badge>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-[#9A9590] font-body mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.creatLa)}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.autor}
            </span>
          </div>

          <h3 className="font-display font-bold uppercase text-lg tracking-tight text-[#F0EDE8] mb-3 group-hover:text-[#F5A623] transition-colors leading-tight line-clamp-2">
            {post.titlu}
          </h3>

          <p className="text-[#9A9590] text-sm font-body leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center gap-1.5 text-sm font-display font-bold uppercase tracking-wider text-[#F5A623] group-hover:gap-3 transition-all">
            Citește mai mult
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <SectionTitle
            label="Articole"
            title="Blog & Resurse"
            subtitle="Sfaturi, ghiduri și noutăți din domeniul excavațiilor și terasamentelor."
            align="left"
          />
          <Button href="/blog" variant="outline" size="sm" className="shrink-0">
            Vezi toate articolele
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
