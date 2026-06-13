import { prisma } from '@/lib/prisma'
import { STATUS_CONFIG } from '@/app/admin/contacte/StatusSelect'
import type { StatusMesaj } from '@/app/admin/contacte/StatusSelect'

export const dynamic = 'force-dynamic'

async function getStats() {
  try {
    const contacte = await prisma.contactMesaj.findMany({
      orderBy: { creatLa: 'desc' },
      take: 100,
    })
    const total = contacte.length
    const perStatus = contacte.reduce<Record<string, number>>((acc, c) => {
      acc[c.status] = (acc[c.status] ?? 0) + 1
      return acc
    }, {})
    const recente = contacte.slice(0, 5)
    return { total, perStatus, recente, error: false }
  } catch {
    return { total: 0, perStatus: {}, recente: [], error: true }
  }
}

export default async function AdminPage() {
  const { total, perStatus, recente, error } = await getStats()

  return (
    <div className="max-w-5xl">
      <h1 className="font-display font-black uppercase text-3xl tracking-tight text-[#F0EDE8] mb-8">
        Dashboard
      </h1>

      {error && (
        <div className="bg-[#D9261C]/10 border border-[#D9261C]/30 text-[#D9261C] text-sm font-body rounded-[4px] px-4 py-3 mb-6">
          Baza de date nu este disponibilă. Verifică DATABASE_URL din .env.local.
        </div>
      )}

      {/* Stat total */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] p-5 col-span-2 md:col-span-1">
          <p className="text-[#9A9590] text-xs font-body uppercase tracking-wider mb-2">Total contacte</p>
          <p className="font-display font-black text-4xl text-[#F5A623]">{total}</p>
        </div>

        {(Object.keys(STATUS_CONFIG) as StatusMesaj[]).map((status) => {
          const cfg   = STATUS_CONFIG[status]
          const count = perStatus[status] ?? 0
          return (
            <div
              key={status}
              className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] p-5"
            >
              <p className="text-[#9A9590] text-xs font-body uppercase tracking-wider mb-2 truncate">
                {cfg.label}
              </p>
              <p
                className="font-display font-black text-3xl"
                style={{ color: cfg.color }}
              >
                {count}
              </p>
            </div>
          )
        })}
      </div>

      {/* Ultimele contacte */}
      <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px]">
        <div className="px-6 py-4 border-b border-[#2E2E2E]">
          <h2 className="font-display font-bold uppercase text-sm tracking-widest text-[#9A9590]">
            Ultimele mesaje
          </h2>
        </div>

        {recente.length === 0 ? (
          <p className="text-[#9A9590] text-sm font-body text-center py-10">
            Nu există mesaje încă.
          </p>
        ) : (
          <div className="divide-y divide-[#2E2E2E]">
            {recente.map((c) => {
              const cfg = STATUS_CONFIG[c.status as StatusMesaj]
              return (
                <div key={c.id} className="px-6 py-4 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-display font-bold text-sm text-[#F0EDE8]">{c.nume}</span>
                      <span className="text-[#9A9590] text-xs">{c.email}</span>
                    </div>
                    <p className="text-[#9A9590] text-xs font-body truncate">{c.mesaj}</p>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-1">
                    <span
                      className="text-xs font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px]"
                      style={{ color: cfg?.color, background: cfg?.bg }}
                    >
                      {cfg?.label ?? c.status}
                    </span>
                    <span className="text-[#9A9590]/60 text-xs">
                      {new Date(c.creatLa).toLocaleDateString('ro-RO', {
                        day: '2-digit', month: 'short', year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
