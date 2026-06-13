'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  children: ReactNode
  className?: string
  target?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#F5A623] text-[#0D0D0D] hover:bg-[#D4891C] font-bold shadow-[0_0_0_0_rgba(245,166,35,0)] hover:shadow-[0_0_16px_2px_rgba(245,166,35,0.35)]',
  secondary:
    'bg-[#1A1A1A] text-[#F0EDE8] hover:bg-[#2E2E2E] border border-[#2E2E2E]',
  outline:
    'bg-transparent text-[#F5A623] border border-[#F5A623] hover:bg-[#F5A623] hover:text-[#0D0D0D]',
  ghost: 'bg-transparent text-[#9A9590] hover:text-[#F5A623]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  target,
  ...rest
}: Props) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-[4px] font-display uppercase tracking-wider transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    return (
      <Link href={href} target={target} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button className={base} {...rest}>
      {children}
    </button>
  )
}
