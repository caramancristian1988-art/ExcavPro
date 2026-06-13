import { type NextRequest } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const CHEI_PERMISE = [
  'telefon', 'email', 'adresa',
  'descriereFirma', 'sloganHero',
  'facebook', 'instagram',
] as const

type CheieSetare = typeof CHEI_PERMISE[number]

const schema = z.record(
  z.enum(CHEI_PERMISE),
  z.string().max(500),
)

export async function GET() {
  try {
    const rows = await prisma.setareSite.findMany()
    const map = Object.fromEntries(rows.map((r) => [r.id, r.valoare]))
    // completez cu valorile default pentru cheile lipsă
    const defaults: Record<CheieSetare, string> = {
      telefon:        '',
      email:          '',
      adresa:         '',
      descriereFirma: '',
      sloganHero:     '',
      facebook:       '',
      instagram:      '',
    }
    return Response.json({ ...defaults, ...map })
  } catch {
    return Response.json({ error: 'DB indisponibil' }, { status: 503 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json()
    const date = schema.parse(body)

    await Promise.all(
      Object.entries(date).map(([cheie, valoare]) =>
        prisma.setareSite.upsert({
          where:  { id: cheie },
          update: { valoare },
          create: { id: cheie, valoare },
        }),
      ),
    )

    return Response.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ error: 'Date invalide' }, { status: 400 })
    }
    console.error('[admin/settings PATCH]', err)
    return Response.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
