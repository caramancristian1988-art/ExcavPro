'use client'

import { useState } from 'react'
import { Save, Loader2, CheckCircle2 } from 'lucide-react'

type Settings = {
  telefon: string
  email: string
  adresa: string
  descriereFirma: string
  sloganHero: string
  facebook: string
  instagram: string
}

const inputClass =
  'w-full bg-[#0D0D0D] border border-[#2E2E2E] text-[#F0EDE8] placeholder-[#9A9590]/50 rounded-[4px] px-4 py-3 text-sm font-body focus:outline-none focus:border-[#F5A623] transition-colors'

const labelClass = 'block text-xs font-body text-[#9A9590] mb-1.5 uppercase tracking-wider'

type Section = {
  titlu: string
  campuri: { cheie: keyof Settings; label: string; placeholder: string; textarea?: boolean }[]
}

const SECTIONS: Section[] = [
  {
    titlu: 'Date de contact',
    campuri: [
      { cheie: 'telefon',  label: 'Telefon',   placeholder: '0700 000 000' },
      { cheie: 'email',    label: 'Email',      placeholder: 'contact@excavpro.ro' },
      { cheie: 'adresa',   label: 'Adresă',     placeholder: 'Str. Example, nr. 1, Iași' },
    ],
  },
  {
    titlu: 'Conținut site',
    campuri: [
      { cheie: 'sloganHero',     label: 'Slogan hero',         placeholder: 'Servicii profesionale de excavații' },
      { cheie: 'descriereFirma', label: 'Descriere companie',  placeholder: 'Companie specializată în...', textarea: true },
    ],
  },
  {
    titlu: 'Social media',
    campuri: [
      { cheie: 'facebook',  label: 'Facebook URL',  placeholder: 'https://facebook.com/excavpro' },
      { cheie: 'instagram', label: 'Instagram URL', placeholder: 'https://instagram.com/excavpro' },
    ],
  },
]

export default function SettingsForm({ initial }: { initial: Settings }) {
  const [values,  setValues]  = useState<Settings>(initial)
  const [loading, setLoading] = useState(false)
  const [saved,   setSaved]   = useState(false)
  const [eroare,  setEroare]  = useState('')

  function handleChange(cheie: keyof Settings, val: string) {
    setValues((prev) => ({ ...prev, [cheie]: val }))
    setSaved(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setEroare('')
    setSaved(false)

    try {
      const res = await fetch('/api/admin/settings', {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(values),
      })

      if (!res.ok) {
        const data = await res.json()
        setEroare(data.error ?? 'Eroare la salvare')
        return
      }

      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {
      setEroare('Eroare de rețea')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {SECTIONS.map((section) => (
        <div key={section.titlu} className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] p-6">
          <h2 className="font-display font-bold uppercase text-sm tracking-widest text-[#9A9590] mb-5 pb-4 border-b border-[#2E2E2E]">
            {section.titlu}
          </h2>
          <div className="space-y-4">
            {section.campuri.map(({ cheie, label, placeholder, textarea }) => (
              <div key={cheie}>
                <label className={labelClass}>{label}</label>
                {textarea ? (
                  <textarea
                    value={values[cheie]}
                    onChange={(e) => handleChange(cheie, e.target.value)}
                    placeholder={placeholder}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                ) : (
                  <input
                    type="text"
                    value={values[cheie]}
                    onChange={(e) => handleChange(cheie, e.target.value)}
                    placeholder={placeholder}
                    className={inputClass}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {eroare && (
        <p className="text-sm text-[#D9261C] font-body bg-[#D9261C]/5 border border-[#D9261C]/20 rounded-[4px] px-4 py-3">
          {eroare}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09520] disabled:opacity-50 disabled:cursor-not-allowed text-[#0D0D0D] font-display font-bold uppercase text-sm tracking-wider rounded-[4px] px-6 py-3 transition-colors"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Se salvează...
          </>
        ) : saved ? (
          <>
            <CheckCircle2 className="w-4 h-4" />
            Salvat!
          </>
        ) : (
          <>
            <Save className="w-4 h-4" />
            Salvează modificările
          </>
        )}
      </button>
    </form>
  )
}
