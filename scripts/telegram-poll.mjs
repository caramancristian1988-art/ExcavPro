/**
 * node scripts/telegram-poll.mjs
 */
import { readFileSync } from 'fs'
import { resolve } from 'path'

// ── citesc .env.local ──────────────────────────────────────────────────────
function loadEnv() {
  try {
    const text = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8')
    const env = {}
    for (const line of text.split('\n')) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=["']?(.+?)["']?\s*$/)
      if (m) env[m[1]] = m[2]
    }
    return env
  } catch { return {} }
}

const TOKEN = loadEnv().TELEGRAM_BOT_TOKEN
if (!TOKEN) { console.error('❌  TELEGRAM_BOT_TOKEN lipsește din .env.local'); process.exit(1) }

const TG = `https://api.telegram.org/bot${TOKEN}`

// ── apel API Telegram ──────────────────────────────────────────────────────
async function api(method, body) {
  const res = await fetch(`${TG}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  })
  const json = await res.json()
  if (!json.ok) throw new Error(`[${method}] ${json.description}`)
  return json.result
}

// ── status ─────────────────────────────────────────────────────────────────
const STATUS_LABELS = {
  ASTEPTARE:      'În așteptare',
  PROGRAMAT:      'Programat',
  EVALUARE:       'Evaluare',
  ASTEPTAM_PLATA: 'Așteptăm plata',
  PLATIT:         'Plătit',
  FINALIZAT:      'Finalizat',
}

function escape(t) {
  return String(t ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function keyboard(contactId) {
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

// ── procesez un callback ───────────────────────────────────────────────────
async function handle(cq) {
  const { id, data, message } = cq

  console.log('  data    :', data)
  console.log('  message :', message?.message_id, '| chat:', message?.chat?.id)

  const parts = (data ?? '').split('|')
  if (parts[0] !== 's' || parts.length !== 3) {
    console.log('  ⚠  format necunoscut, sar peste')
    return
  }

  const [, contactId, status] = parts
  const label = STATUS_LABELS[status]
  if (!label) { console.log('  ⚠  status invalid:', status); return }

  console.log(`  status  : ${label}`)

  // răspund la buton (îndepărtează loading-ul)
  await api('answerCallbackQuery', { callback_query_id: id, text: `✅ ${label}` })

  // editez mesajul cu noul status
  if (!message?.chat?.id || !message?.message_id) {
    console.log('  ⚠  message lipsă, nu pot edita')
    return
  }

  const rawText = (message.text ?? '').replace(/\n\n🔖 Status:[^\n]*/, '').trimEnd()
  const newText = `${escape(rawText)}\n\n🔖 <b>Status:</b> ${escape(label)}`

  await api('editMessageText', {
    chat_id: message.chat.id,
    message_id: message.message_id,
    text: newText,
    parse_mode: 'HTML',
    reply_markup: keyboard(contactId),
  })

  console.log('  ✓ mesaj editat')
}

// ── main ───────────────────────────────────────────────────────────────────
async function main() {
  // verifică token
  const me = await api('getMe', {})
  console.log(`✅  Bot: @${me.username} (${me.first_name})`)

  // OBLIGATORIU: șterge webhook-ul altfel getUpdates nu primește nimic
  await api('deleteWebhook', { drop_pending_updates: false })
  console.log('🗑  Webhook șters\n')
  console.log('🟢  Ascult butoane... (Ctrl+C pentru oprire)\n')

  let offset = 0

  while (true) {
    let json
    try {
      const res = await fetch(`${TG}/getUpdates?offset=${offset}&timeout=10`)
      json = await res.json()
    } catch (err) {
      console.error('❌  Eroare rețea:', err.message)
      await sleep(3000)
      continue
    }

    if (!json.ok) {
      console.error('❌  getUpdates:', json.description)
      await sleep(3000)
      continue
    }

    for (const upd of json.result ?? []) {
      offset = upd.update_id + 1

      if (upd.callback_query) {
        console.log(`\n📲  Callback #${upd.update_id}`)
        try { await handle(upd.callback_query) }
        catch (err) { console.error('  ✗ Eroare:', err.message) }
      }
    }
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms))

main().catch(err => { console.error('Fatal:', err.message); process.exit(1) })
