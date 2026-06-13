import SettingsForm from './_SettingsForm'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

const DEFAULTS = {
  telefon:        '',
  email:          '',
  adresa:         '',
  descriereFirma: '',
  sloganHero:     '',
  facebook:       '',
  instagram:      '',
}

async function getSettings() {
  try {
    const rows = await prisma.setareSite.findMany()
    return { ...DEFAULTS, ...Object.fromEntries(rows.map((r) => [r.id, r.valoare])) }
  } catch {
    return DEFAULTS
  }
}

export default async function SettingsPage() {
  const settings = await getSettings()

  return (
    <div className="max-w-2xl">
      <h1 className="font-display font-black uppercase text-3xl tracking-tight text-[#F0EDE8] mb-2">
        Setări site
      </h1>
      <p className="text-[#9A9590] font-body text-sm mb-8">
        Modificările sunt salvate în baza de date și reflectate pe site.
      </p>

      <SettingsForm initial={settings} />
    </div>
  )
}
