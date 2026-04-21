import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Phone, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const heroImages = [
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?auto=format&fit=crop&w=2000&q=80',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
  },
}

const stats = [
  { k: '15+', v: 'Years of experience' },
  { k: '4.9★', v: 'Average customer rating' },
  { k: '1,200+', v: 'Cars serviced' },
  { k: '0', v: 'Hard sells. Ever.' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroImages.length),
      6000
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section
      data-hero
      className="relative isolate flex h-screen min-h-[640px] w-full flex-col overflow-hidden"
    >
      {/* Backdrop carousel with ken-burns */}
      <div data-hero-bg className="absolute inset-0 -z-10">
        {/* preload all so there's no black flash between transitions */}
        {heroImages.map((src) => (
          <img key={src} src={src} alt="" aria-hidden className="hidden" />
        ))}
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={heroImages[index]}
            src={heroImages[index]}
            alt="Workshop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full animate-kenburns object-cover"
          />
        </AnimatePresence>

        {/* progress dots — bottom right */}
        <div className="absolute bottom-6 right-6 z-10 hidden gap-1.5 md:flex">
          {heroImages.map((_, i) => (
            <span
              key={i}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === index
                  ? 'w-8 bg-gradient-accent'
                  : 'w-4 bg-white/20'
              }`}
              style={
                i === index
                  ? {
                      backgroundImage:
                        'linear-gradient(to right,#fbbf24,#f97316,#dc2626)',
                    }
                  : undefined
              }
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/70 to-ink-950" />
        <div className="absolute inset-x-0 top-0 h-[45rem] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.28),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[20rem] bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.18),transparent_60%)]" />
      </div>

      <div className="container-px mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center pt-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="eyebrow">Cheras • Taman Midah</span>
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                background: '#f97316',
                boxShadow: '0 0 16px 2px rgba(249,115,22,0.8)',
              }}
            />
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Open now
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="h-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          >
            Trusted car repair &{' '}
            <span className="text-gradient-accent">diagnostics</span>
            <br className="hidden md:block" /> in Cheras.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-300/90 md:text-base"
          >
            Honest mechanics. Transparent pricing. No hard selling. We diagnose
            properly, replace only what's needed, and show you every part we
            touch.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#contact" className="btn btn-primary group">
              Book Appointment
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a href="tel:+60123456789" className="btn btn-ghost group">
              <Phone
                size={16}
                className="transition-transform duration-300 group-hover:rotate-[-8deg]"
              />
              Call the workshop
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-6 text-left md:grid-cols-4"
          >
            {stats.map((s, i) => (
              <div
                key={s.v}
                className="relative border-l border-white/10 pl-4 md:first:border-l-0 md:first:pl-0"
              >
                <div className="h-display bg-gradient-accent bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-neutral-500">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-400 transition-colors hover:text-white md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  )
}
