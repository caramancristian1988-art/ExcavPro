'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, MessageSquare, Settings, LogOut, Shovel } from 'lucide-react'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/admin',          label: 'Dashboard',  icon: LayoutDashboard },
  { href: '/admin/contacte', label: 'Contacte',   icon: MessageSquare   },
  { href: '/admin/settings', label: 'Setări site', icon: Settings        },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router   = useRouter()

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="fixed inset-y-0 left-0 w-56 bg-[#111111] border-r border-[#2E2E2E] flex flex-col z-50">
      {/* Brand */}
      <div className="px-5 py-6 border-b border-[#2E2E2E]">
        <div className="flex items-center gap-2">
          <Shovel className="w-5 h-5 text-[#F5A623]" />
          <span className="font-display font-black uppercase text-[#F0EDE8] tracking-tight">
            Excav<span className="text-[#F5A623]">Pro</span>
          </span>
        </div>
        <p className="text-[#9A9590] text-xs mt-1 font-body">Panou administrare</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = href === '/admin'
            ? pathname === '/admin'
            : pathname.startsWith(href)

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-[4px] text-sm font-body transition-colors',
                active
                  ? 'bg-[#F5A623]/10 text-[#F5A623] font-medium'
                  : 'text-[#9A9590] hover:text-[#F0EDE8] hover:bg-[#1A1A1A]',
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-[#2E2E2E]">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-[4px] text-sm font-body text-[#9A9590] hover:text-[#D9261C] hover:bg-[#D9261C]/5 transition-colors"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Deconectare
        </button>
      </div>
    </aside>
  )
}
