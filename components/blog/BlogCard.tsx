import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article>
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

          <h2 className="font-display font-bold uppercase text-lg tracking-tight text-[#F0EDE8] mb-3 group-hover:text-[#F5A623] transition-colors leading-tight line-clamp-2">
            {post.titlu}
          </h2>

          <p className="text-[#9A9590] text-sm font-body leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center gap-1.5 text-sm font-display font-bold uppercase tracking-wider text-[#F5A623] group-hover:gap-3 transition-all">
            Citește mai mult
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </article>
  )
}
