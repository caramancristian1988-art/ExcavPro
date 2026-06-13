import { type NextRequest } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { createSession } from '@/lib/auth'

const schema = z.object({
  email: z.string().email(),
  parola: z.string().min(1),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, parola } = schema.parse(body)

    const adminEmail = process.env.ADMIN_EMAIL
    const adminHash  = process.env.ADMIN_PASSWORD_HASH

    if (!adminEmail || !adminHash) {
      return Response.json({ error: 'Admin neconfigurat în .env.local' }, { status: 500 })
    }

    // Verificare constantă de timp pentru a preveni timing attacks
    const emailMatch = email.toLowerCase() === adminEmail.toLowerCase()
    const passMatch  = await bcrypt.compare(parola, adminHash)

    if (!emailMatch || !passMatch) {
      return Response.json({ error: 'Email sau parolă incorectă' }, { status: 401 })
    }

    await createSession({ email: adminEmail, role: 'admin' })
    return Response.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ error: 'Date invalide' }, { status: 400 })
    }
    console.error('[auth/login]', err)
    return Response.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
