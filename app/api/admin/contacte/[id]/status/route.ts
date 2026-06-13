import { type NextRequest } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const schema = z.object({
  status: z.enum(['ASTEPTARE', 'PROGRAMAT', 'FINALIZAT', 'PLATIT', 'ASTEPTAM_PLATA', 'EVALUARE']),
})

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const body = await req.json()
    const { status } = schema.parse(body)

    await prisma.contactMesaj.update({
      where: { id },
      data: { status },
    })

    return Response.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ error: 'Status invalid' }, { status: 400 })
    }
    console.error('[admin/contacte/status]', err)
    return Response.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
