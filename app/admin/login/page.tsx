'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Shovel } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email,    setEmail]    = useState('')
  const [parola,   setParola]   = useState('')
  const [eroare,   setEroare]   = useState('')
  const [loading,  setLoading]  = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEroare('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, parola }),
      })

      const data = await res.json()

      if (!res.ok) {
        setEroare(data.error ?? 'Eroare necunoscută')
        return
      }

      router.push('/admin')
      router.refresh()
    } catch {
      setEroare('Eroare de rețea. Verifică conexiunea.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Shovel className="w-7 h-7 text-[#F5A623]" />
          <span className="font-display font-black uppercase text-2xl text-[#F0EDE8] tracking-tight">
            Excav<span className="text-[#F5A623]">Pro</span>
          </span>
        </div>

        <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] p-8">
          <h1 className="font-display font-bold uppercase text-xl text-[#F0EDE8] tracking-tight mb-1">
            Autentificare
          </h1>
          <p className="text-[#9A9590] text-sm font-body mb-6">
            Acces panou administrare
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-body text-[#9A9590] mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="admin@exemplu.ro"
                className="w-full bg-[#0D0D0D] border border-[#2E2E2E] text-[#F0EDE8] placeholder-[#9A9590]/50 rounded-[4px] px-4 py-3 text-sm font-body focus:outline-none focus:border-[#F5A623] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-body text-[#9A9590] mb-1.5 uppercase tracking-wider">
                Parolă
              </label>
              <input
                type="password"
                value={parola}
                onChange={(e) => setParola(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full bg-[#0D0D0D] border border-[#2E2E2E] text-[#F0EDE8] placeholder-[#9A9590]/50 rounded-[4px] px-4 py-3 text-sm font-body focus:outline-none focus:border-[#F5A623] transition-colors"
              />
            </div>

            {eroare && (
              <p className="text-sm text-[#D9261C] font-body bg-[#D9261C]/5 border border-[#D9261C]/20 rounded-[4px] px-3 py-2">
                {eroare}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F5A623] hover:bg-[#E09520] disabled:opacity-50 disabled:cursor-not-allowed text-[#0D0D0D] font-display font-bold uppercase text-sm tracking-wider rounded-[4px] px-4 py-3 transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Se autentifică...
                </>
              ) : (
                'Intră în cont'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
