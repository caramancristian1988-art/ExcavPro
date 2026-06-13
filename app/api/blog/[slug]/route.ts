import { type NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params
    const post = await prisma.blogPost.findUnique({
      where: { slug, publicat: true },
    })

    if (!post) {
      return Response.json({ error: 'Articol negăsit' }, { status: 404 })
    }

    return Response.json(post)
  } catch (err) {
    console.error('[blog/slug/GET]', err)
    return Response.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
