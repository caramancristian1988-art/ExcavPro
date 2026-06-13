import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { publicat: true },
      orderBy: { creatLa: 'desc' },
    })
    return Response.json(posts)
  } catch (err) {
    console.error('[blog/GET]', err)
    return Response.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
