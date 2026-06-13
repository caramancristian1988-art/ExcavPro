import { type NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params
    const serviciu = await prisma.serviciu.findUnique({ where: { slug } })

    if (!serviciu) {
      return Response.json({ error: 'Serviciu negăsit' }, { status: 404 })
    }

    return Response.json(serviciu)
  } catch (err) {
    console.error('[servicii/slug/GET]', err)
    return Response.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
