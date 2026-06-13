'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

export type StatusMesaj =
  | 'ASTEPTARE'
  | 'PROGRAMAT'
  | 'FINALIZAT'
  | 'PLATIT'
  | 'ASTEPTAM_PLATA'
  | 'EVALUARE'

export const STATUS_CONFIG: Record<
  StatusMesaj,
  { label: string; color: string; bg: string }
> = {
  ASTEPTARE:     { label: 'În așteptare',   color: '#9A9590', bg: 'rgba(154,149,144,0.1)' },
  PROGRAMAT:     { label: 'Programat',       color: '#3B82F6', bg: 'rgba(59,130,246,0.1)'  },
  EVALUARE:      { label: 'Evaluare',        color: '#A855F7', bg: 'rgba(168,85,247,0.1)'  },
  ASTEPTAM_PLATA:{ label: 'Așteptăm plata', color: '#F5A623', bg: 'rgba(245,166,35,0.1)'  },
  PLATIT:        { label: 'Plătit',          color: '#22C55E', bg: 'rgba(34,197,94,0.1)'   },
  FINALIZAT:     { label: 'Finalizat',       color: '#16A34A', bg: 'rgba(22,163,74,0.1)'   },
}

export default function StatusSelect({
  id,
  currentStatus,
}: {
  id: string
  currentStatus: StatusMesaj
}) {
  const [status, setStatus] = useState<StatusMesaj>(currentStatus)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const config = STATUS_CONFIG[status]

  async function handleChange(next: StatusMesaj) {
    setStatus(next)
    const res = await fetch(`/api/admin/contacte/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
    })
    if (!res.ok) {
      setStatus(status)
      return
    }
    startTransition(() => router.refresh())
  }

  return (
    <div className="relative shrink-0">
      <select
        value={status}
        onChange={(e) => handleChange(e.target.value as StatusMesaj)}
        disabled={isPending}
        style={{
          background: config.bg,
          color: config.color,
          border: `1px solid ${config.color}40`,
        }}
        className="appearance-none cursor-pointer rounded-[4px] px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider focus:outline-none transition-all disabled:opacity-50"
      >
        {(Object.keys(STATUS_CONFIG) as StatusMesaj[]).map((key) => (
          <option key={key} value={key} style={{ background: '#1A1A1A', color: STATUS_CONFIG[key].color }}>
            {STATUS_CONFIG[key].label}
          </option>
        ))}
      </select>
    </div>
  )
}
