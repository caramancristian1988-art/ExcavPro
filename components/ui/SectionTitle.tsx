import { cn } from '@/lib/utils'

interface Props {
  label?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  className,
  align = 'center',
  light = false,
}: Props) {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align]

  return (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>
      {label && (
        <span className="text-[#F5A623] font-display text-sm uppercase tracking-[0.2em] font-semibold">
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-display font-black uppercase text-4xl md:text-5xl leading-[0.95] tracking-tight',
          light ? 'text-[#0D0D0D]' : 'text-[#F0EDE8]',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg max-w-2xl font-body leading-relaxed',
            light ? 'text-[#3a3a3a]' : 'text-[#9A9590]',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
