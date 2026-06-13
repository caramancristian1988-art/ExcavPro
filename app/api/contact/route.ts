import { type NextRequest } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const schema = z.object({
  nume: z.string().min(2),
  email: z.string().email(),
  telefon: z.string().optional(),
  serviciu: z.string().optional(),
  mesaj: z.string().min(10),
})

function escapeTelegramHTML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildKeyboard(contactId: string) {
  return {
    inline_keyboard: [
      [
        { text: '📅 Programat',       callback_data: `s|${contactId}|PROGRAMAT` },
        { text: '🔍 Evaluare',        callback_data: `s|${contactId}|EVALUARE` },
      ],
      [
        { text: '⏳ Așteptăm plata', callback_data: `s|${contactId}|ASTEPTAM_PLATA` },
        { text: '💰 Plătit',          callback_data: `s|${contactId}|PLATIT` },
      ],
      [
        { text: '✅ Finalizat',       callback_data: `s|${contactId}|FINALIZAT` },
      ],
    ],
  }
}

async function sendTelegram(
  data: z.infer<typeof schema>,
  contactId: string,
): Promise<number | null> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn('[contact] TELEGRAM_BOT_TOKEN sau TELEGRAM_CHAT_ID lipsesc')
    return null
  }

  const telefon = data.telefon?.trim() || '—'
  const serviciu = data.serviciu?.trim() || '—'

  const text = `📩 <b>Mesaj nou de pe site</b>

👤 <b>Nume:</b> ${escapeTelegramHTML(data.nume)}
📧 <b>Email:</b> ${escapeTelegramHTML(data.email)}
📞 <b>Telefon:</b> ${escapeTelegramHTML(telefon)}
🛠 <b>Serviciu:</b> ${escapeTelegramHTML(serviciu)}

📝 <b>Descriere:</b>
${escapeTelegramHTML(data.mesaj)}

🔖 <b>Status:</b> În așteptare`

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        reply_markup: buildKeyboard(contactId),
      }),
    },
  )

  if (!res.ok) {
    const err = await res.text()
    console.error('[telegram] Eroare trimitere:', err)
    throw new Error('Telegram error')
  }

  const json = await res.json()
  return (json.result?.message_id as number) ?? null
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Încerc să salvez în DB — dacă eșuează, folosesc un ID temporar pentru butoane
    let contactId = `tmp_${Date.now()}`
    let msgId: number | null = null

    try {
      const contact = await prisma.contactMesaj.create({ data })
      contactId = contact.id
    } catch (dbErr) {
      console.warn('[contact] DB save failed (non-fatal):', dbErr)
    }

    // Trimit Telegram indiferent de starea DB-ului
    try {
      msgId = await sendTelegram(data, contactId)
    } catch (tgErr) {
      console.error('[contact] Telegram failed:', tgErr)
      return Response.json({ error: 'Eroare trimitere mesaj' }, { status: 500 })
    }

    // Dacă am ID real din DB, salvez message_id-ul Telegram
    if (msgId && !contactId.startsWith('tmp_')) {
      try {
        await prisma.contactMesaj.update({
          where: { id: contactId },
          data: { telegramMsgId: String(msgId) },
        })
      } catch {
        // non-fatal
      }
    }

    return Response.json({ success: true }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ error: 'Date invalide', details: err.issues }, { status: 400 })
    }
    console.error('[contact/POST]', err)
    return Response.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
