import { type NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export const STATUS_LABELS: Record<string, string> = {
  ASTEPTARE:      'În așteptare',
  PROGRAMAT:      'Programat',
  EVALUARE:       'Evaluare',
  ASTEPTAM_PLATA: 'Așteptăm plata',
  PLATIT:         'Plătit',
  FINALIZAT:      'Finalizat',
}

const VALID_STATUSES = new Set(Object.keys(STATUS_LABELS))

function escapeTelegramHTML(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
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

function buildMessageHTML(
  contact: { nume: string; email: string; telefon?: string | null; serviciu?: string | null; mesaj: string },
  statusLabel: string,
): string {
  const telefon = contact.telefon?.trim() || '—'
  const serviciu = contact.serviciu?.trim() || '—'

  return `📩 <b>Mesaj nou de pe site</b>

👤 <b>Nume:</b> ${escapeTelegramHTML(contact.nume)}
📧 <b>Email:</b> ${escapeTelegramHTML(contact.email)}
📞 <b>Telefon:</b> ${escapeTelegramHTML(telefon)}
🛠 <b>Serviciu:</b> ${escapeTelegramHTML(serviciu)}

📝 <b>Descriere:</b>
${escapeTelegramHTML(contact.mesaj)}

🔖 <b>Status:</b> ${escapeTelegramHTML(statusLabel)}`
}

const TG = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`

async function tgPost(method: string, body: object) {
  const res = await fetch(`${TG}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    console.error(`[telegram/${method}]`, await res.text())
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const cq = body.callback_query
    if (!cq) return Response.json({ ok: true })

    const { id: callbackId, data: callbackData, message } = cq
    const parts = (callbackData as string | undefined)?.split('|')

    if (parts?.[0] !== 's' || parts.length !== 3) {
      return Response.json({ ok: true })
    }

    const [, contactId, status] = parts

    if (!VALID_STATUSES.has(status)) {
      return Response.json({ ok: true })
    }

    const label = STATUS_LABELS[status]

    // Actualizez statusul în DB
    try {
      await prisma.contactMesaj.update({
        where: { id: contactId },
        data: { status },
      })
    } catch {
      console.warn('[webhook] DB update failed for contact:', contactId)
    }

    // Răspund la callback — dispare indicatorul de loading de pe buton
    await tgPost('answerCallbackQuery', {
      callback_query_id: callbackId,
      text: `✅ Status: ${label}`,
      show_alert: false,
    })

    // Editez mesajul original cu noul status
    if (message?.chat?.id && message?.message_id) {
      let updatedText: string | null = null

      // Încerc să reconstruiesc din DB (păstrează formatarea bold)
      if (!contactId.startsWith('tmp_')) {
        try {
          const contact = await prisma.contactMesaj.findUnique({ where: { id: contactId } })
          if (contact) {
            updatedText = buildMessageHTML(contact, label)
          }
        } catch {
          // fallback mai jos
        }
      }

      // Fallback: folosesc textul plain din mesaj și escaped pentru HTML
      if (!updatedText && message.text) {
        const rawText = (message.text as string)
          .replace(/\n\n🔖 Status:.*$/s, '')
          .trimEnd()
        updatedText = `${escapeTelegramHTML(rawText)}\n\n🔖 <b>Status:</b> ${escapeTelegramHTML(label)}`
      }

      if (updatedText) {
        await tgPost('editMessageText', {
          chat_id: message.chat.id,
          message_id: message.message_id,
          text: updatedText,
          parse_mode: 'HTML',
          reply_markup: buildKeyboard(contactId),
        })
      }
    }
  } catch (err) {
    console.error('[telegram/webhook]', err)
  }

  // Telegram așteaptă întotdeauna 200
  return Response.json({ ok: true })
}
