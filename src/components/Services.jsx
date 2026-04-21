import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Gauge,
  Cog,
  Disc3,
  CircleDot,
  Settings2,
  Car,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    icon: Gauge,
    title: 'Car Diagnostics',
    desc: 'Computerised + hands-on diagnosis to find the actual root cause — not the easy guess.',
  },
  {
    icon: Cog,
    title: 'Suspension Repair',
    desc: 'Absorbers, bushings, control arms — restore ride comfort and stability with quality parts.',
  },
  {
    icon: Disc3,
    title: 'Drive Shaft & Axle',
    desc: 'Vibrations, clicks, leaks — we rebuild and replace with precision, balanced finish.',
  },
  {
    icon: CircleDot,
    title: 'Tyre Alignment',
    desc: 'Four-wheel alignment, balancing and rotation to extend tyre life and keep the car straight.',
  },
  {
    icon: Settings2,
    title: 'General Servicing',
    desc: 'Engine oil, filters, belts, brake fluid — scheduled maintenance done right, the first time.',
  },
  {
    icon: Car,
    title: 'Pre-purchase Inspection',
    desc: 'Buying a used car? Bring it in. We give you the unfiltered list of what to fix or walk away from.',
  },
]

export default function Services() {
  const trackRef = useRef(null)

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const step = card ? card.clientWidth + 16 : 320
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="services" className="section relative bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="h-display mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Services for everyday drivers — and stubborn problems.
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        >
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              data-card
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
                },
              }}
              whileHover={{ y: -6 }}
              className="card-surface group relative w-[85%] shrink-0 snap-start overflow-hidden p-7 sm:w-[55%] lg:w-[31%]"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-90" />
              <div className="relative flex items-start justify-between">
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-accent transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-accent/15 group-hover:text-accent-soft">
                  <s.icon size={20} />
                </span>
                <span className="h-display text-xs text-neutral-600">
                  0{i + 1}
                </span>
              </div>
              <h3 className="relative mt-8 text-lg font-medium transition-colors duration-300">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-neutral-400">
                {s.desc}
              </p>
              <div className="relative mt-8 flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 transition-colors duration-300 group-hover:text-accent">
                Learn more
                <ChevronRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
