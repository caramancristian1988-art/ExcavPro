'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PhoneCall } from 'lucide-react'

const desktopSlides = [
  '/Jun%2013%2C%202026%2C%2011_40_06%20AM.png',
]

const mobileSlides = [
  '/12195b4d-f491-4937-8b71-d55baf20eb00%20(2).png',
]

function Slider({ slides, priority }: { slides: string[]; priority?: boolean }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      {slides.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transform: `translateX(${(i - current) * 100}%)`,
            transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0 && priority}
            loading="eager"
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      ))}
    </>
  )
}

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Slider desktop */}
      <div className="hidden md:block absolute inset-0">
        <Slider slides={desktopSlides} priority />
      </div>

      {/* Slider mobil */}
      <div className="md:hidden absolute inset-0">
        <Slider slides={mobileSlides} priority />
      </div>


      {/* ── DESKTOP CONTENT ── */}
      <div className="hidden md:flex absolute inset-0 z-20 items-center">
        <div className="max-w-7xl mx-auto px-12 w-full">
          <div className="max-w-2xl">

            {/* Headline */}
            <h1
              className="font-display font-black uppercase text-[#F0EDE8] leading-[0.92] drop-shadow-2xl mb-6"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}
            >
              Excavații.<br />
              <span className="text-[#F5A623]">Fundații.</span><br />
              Terasamente.
            </h1>

            {/* Subtitlu */}
            <p className="font-body text-[#F0EDE8]/80 text-lg leading-relaxed mb-10 max-w-lg drop-shadow">
              Servicii profesionale de excavații, lucrări de fundații și amenajări
              terasamente în Iași și toată Moldova. Rapiditate, precizie, seriozitate.
            </p>

            {/* Butoane */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09520] text-[#0D0D0D] font-display font-bold uppercase text-sm tracking-wider px-7 py-4 rounded-[4px] transition-colors shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                Solicită Ofertă
              </Link>
              <Link
                href="#servicii"
                className="inline-flex items-center gap-2 border border-[#F0EDE8]/40 hover:border-[#F5A623] text-[#F0EDE8] hover:text-[#F5A623] font-display font-bold uppercase text-sm tracking-wider px-7 py-4 rounded-[4px] transition-colors backdrop-blur-sm"
              >
                Serviciile noastre
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBIL CONTENT ── */}
      <div className="md:hidden flex absolute inset-0 z-20 items-start pt-24 px-5">
        <div className="w-full">

          {/* Headline */}
          <h1 className="font-display font-black uppercase text-[#F0EDE8] text-4xl leading-[0.9] drop-shadow-2xl mb-3">
            Excavații.<br />
            <span className="text-[#F5A623]">Fundații.</span><br />
            Terasamente.
          </h1>

          {/* Subtitlu */}
          <p className="font-body text-[#F0EDE8]/75 text-sm leading-relaxed mb-6">
            Servicii profesionale în Iași și Moldova.
          </p>

          {/* Butoane */}
          <div className="flex flex-col gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09520] text-[#0D0D0D] font-display font-bold uppercase text-sm tracking-wider px-6 py-3.5 rounded-[4px] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Solicită Ofertă
            </Link>
            <Link
              href="#servicii"
              className="inline-flex items-center justify-center gap-2 border border-[#F0EDE8]/40 text-[#F0EDE8] font-display font-bold uppercase text-sm tracking-wider px-6 py-3.5 rounded-[4px] transition-colors backdrop-blur-sm"
            >
              Serviciile noastre
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
