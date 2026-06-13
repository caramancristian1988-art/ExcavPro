import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const servicii = await prisma.serviciu.findMany({
      orderBy: { ordine: 'asc' },
    })
    return Response.json(servicii)
  } catch (err) {
    console.error('[servicii/GET]', err)
    return Response.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
