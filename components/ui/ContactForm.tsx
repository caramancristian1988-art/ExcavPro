'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Send, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from './Button'

const schema = z.object({
  nume: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  email: z.string().email('Adresă de email invalidă'),
  telefon: z.string().optional(),
  serviciu: z.string().optional(),
  mesaj: z.string().min(10, 'Mesajul trebuie să aibă cel puțin 10 caractere'),
})

type FormValues = z.infer<typeof schema>

const serviciiOptions = [
  'Excavații Fundații',
  'Terasamente și Nivelări',
  'Săpături Canalizare & Utilități',
  'Demolări Controlate',
  'Amenajări Peisagistice',
  'Transport Pământ & Deșeuri',
  'Altele',
]

const inputClass =
  'w-full bg-[#0D0D0D] border border-[#2E2E2E] text-[#F0EDE8] placeholder-[#9A9590] rounded-[4px] px-4 py-3 text-sm font-body focus:outline-none focus:border-[#F5A623] transition-colors'

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Eroare server')

      toast.success('Mesaj trimis cu succes! Vă vom contacta în curând.', {
        duration: 5000,
        style: {
          background: '#1A1A1A',
          color: '#F0EDE8',
          border: '1px solid #F5A623',
        },
      })
      reset()
    } catch {
      toast.error('A apărut o eroare. Vă rugăm încercați din nou.', {
        style: {
          background: '#1A1A1A',
          color: '#F0EDE8',
          border: '1px solid #D9261C',
        },
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')}>
        <div>
          <input
            {...register('nume')}
            placeholder="Numele dvs. *"
            className={cn(inputClass, errors.nume && 'border-[#D9261C]')}
            aria-label="Nume"
          />
          {errors.nume && (
            <p className="mt-1 text-xs text-[#D9261C]">{errors.nume.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email *"
            className={cn(inputClass, errors.email && 'border-[#D9261C]')}
            aria-label="Email"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-[#D9261C]">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')}>
        <div>
          <input
            {...register('telefon')}
            type="tel"
            placeholder="Telefon (opțional)"
            className={inputClass}
            aria-label="Telefon"
          />
        </div>

        <div>
          <select
            {...register('serviciu')}
            className={cn(inputClass, 'appearance-none cursor-pointer')}
            aria-label="Serviciu dorit"
            defaultValue=""
          >
            <option value="" disabled>
              Serviciu dorit
            </option>
            {serviciiOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <textarea
          {...register('mesaj')}
          rows={compact ? 4 : 5}
          placeholder="Descrieți proiectul dvs. *"
          className={cn(inputClass, 'resize-none', errors.mesaj && 'border-[#D9261C]')}
          aria-label="Mesaj"
        />
        {errors.mesaj && (
          <p className="mt-1 text-xs text-[#D9261C]">{errors.mesaj.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={isSubmitting}
        className="w-full gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Se trimite...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Trimite Mesajul
          </>
        )}
      </Button>
    </form>
  )
}
