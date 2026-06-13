import { prisma } from '@/lib/prisma'
import StatusSelect, { type StatusMesaj } from './StatusSelect'

export const dynamic = 'force-dynamic'

export default async function ContactePage() {
  const contacte = await prisma.contactMesaj.findMany({
    orderBy: { creatLa: 'desc' },
  })

  return (
    <div className="min-h-screen bg-[#0D0D0D] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display font-black uppercase text-3xl tracking-tight text-[#F0EDE8]">
            Contacte <span className="text-[#F5A623]">({contacte.length})</span>
          </h1>
        </div>

        {contacte.length === 0 ? (
          <p className="text-[#9A9590] text-center py-20 font-body">
            Nu există mesaje încă.
          </p>
        ) : (
          <div className="space-y-3">
            {contacte.map((c) => (
              <div
                key={c.id}
                className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-[4px] p-5 hover:border-[#3E3E3E] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                      <span className="font-display font-bold text-[#F0EDE8]">
                        {c.nume}
                      </span>
                      <a
                        href={`mailto:${c.email}`}
                        className="text-[#9A9590] text-sm hover:text-[#F5A623] transition-colors"
                      >
                        {c.email}
                      </a>
                      {c.telefon && (
                        <a
                          href={`tel:${c.telefon}`}
                          className="text-[#9A9590] text-sm hover:text-[#F5A623] transition-colors"
                        >
                          {c.telefon}
                        </a>
                      )}
                    </div>

                    {c.serviciu && (
                      <span className="inline-block bg-[#F5A623]/10 text-[#F5A623] text-xs font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] mb-3">
                        {c.serviciu}
                      </span>
                    )}

                    <p className="text-[#9A9590] text-sm font-body leading-relaxed line-clamp-2">
                      {c.mesaj}
                    </p>

                    <p className="text-[#9A9590]/60 text-xs font-body mt-3">
                      {new Date(c.creatLa).toLocaleDateString('ro-RO', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  <StatusSelect
                    id={c.id}
                    currentStatus={c.status as StatusMesaj}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
