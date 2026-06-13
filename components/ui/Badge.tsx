import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'muted' | 'outline'
  className?: string
}

const variants = {
  primary: 'bg-[#F5A623] text-[#0D0D0D]',
  accent: 'bg-[#D9261C] text-white',
  muted: 'bg-[#2E2E2E] text-[#9A9590]',
  outline: 'border border-[#F5A623] text-[#F5A623] bg-transparent',
}

export default function Badge({ children, variant = 'primary', className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-1 rounded-[3px] text-xs font-display font-bold uppercase tracking-wider',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
