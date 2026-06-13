/**
 * Generează hash bcrypt pentru parola de admin.
 * Rulează: node scripts/create-admin.mjs <parola_ta>
 * Copiază outputul în .env.local la ADMIN_PASSWORD_HASH
 */
import { hash } from 'bcryptjs'

const parola = process.argv[2]

if (!parola) {
  console.error('Utilizare: node scripts/create-admin.mjs <parola_ta>')
  process.exit(1)
}

if (parola.length < 8) {
  console.error('Parola trebuie să aibă cel puțin 8 caractere.')
  process.exit(1)
}

const hashValue = await hash(parola, 12)
console.log('\nAdaugă în .env.local:\n')
console.log(`ADMIN_PASSWORD_HASH="${hashValue}"`)
console.log()
