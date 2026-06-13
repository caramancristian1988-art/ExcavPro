'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/#despre-noi', label: 'Despre Noi' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const THRESHOLD = 80

export default function Navbar() {
  const [isOpen,  setIsOpen]  = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="h-12 lg:h-14">
    <header
      className={cn(
        'left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#2E2E2E] transition-shadow duration-300',
        isFixed ? 'fixed top-0 shadow-lg shadow-black/30' : 'absolute top-0',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigare principală">
        <div className="flex items-center justify-between h-12 lg:h-14">
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="ExcavPro - Acasă">
            <Image
              src="/logo_excavator.png"
              alt="ExcavPro"
              width={70}
              height={70}
              className="object-contain"
            />
            <span className="font-display font-black text-2xl uppercase tracking-tight text-[#F0EDE8]">
              Excav<span className="text-[#F5A623]">Pro</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href.split('#')[0]) && link.href !== '/'
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-sm font-display font-semibold tracking-widest uppercase transition-colors hover:text-[#F5A623] pb-1',
                    isActive ? 'text-[#F5A623]' : 'text-[#9A9590]',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5A623] rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex">
            <Button href="/contact" variant="primary" size="sm">
              Solicită Ofertă
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#9A9590] hover:text-[#F5A623] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] rounded-[4px]"
            aria-label={isOpen ? 'Închide meniu' : 'Deschide meniu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#1A1A1A] border-b border-[#2E2E2E] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-2 text-base font-display font-semibold uppercase tracking-widest transition-colors hover:text-[#F5A623] text-[#9A9590] border-b border-[#2E2E2E] last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button href="/contact" variant="primary" className="w-full">
                  Solicită Ofertă
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </div>
  )
}
