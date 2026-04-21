import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    name: 'Wei Han',
    role: 'Honda Civic owner',
    rating: 5,
    text: 'Professional foreman. Solved an issue three other workshops couldn\'t even diagnose. I\'ve been bringing my car here ever since.',
  },
  {
    name: 'Aisha R.',
    role: 'Perodua Myvi owner',
    rating: 5,
    text: 'Very honest, no hard selling, and easily the cheapest around for the quality of work. They explain everything before touching the car.',
  },
  {
    name: 'Daniel Lim',
    role: 'Toyota Vios owner',
    rating: 5,
    text: 'They show you every part they replace. That alone earned my trust. Highly recommended for anyone tired of being upsold.',
  },
  {
    name: 'Sarah K.',
    role: 'Proton Saga owner',
    rating: 5,
    text: 'No hidden charges. Quote was exactly what I paid. The whole experience felt transparent from start to finish.',
  },
  {
    name: 'Marcus Tan',
    role: 'Mazda 3 owner',
    rating: 5,
    text: 'Reasonable pricing and excellent service. The foreman walked me through the repair like I was family.',
  },
  {
    name: 'Priya N.',
    role: 'Honda City owner',
    rating: 5,
    text: 'Brought my car in for a strange vibration. Diagnosed and fixed within the day. Fair price, friendly staff.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(id)
  }, [paused])

  const r = reviews[index]
  const next = () => setIndex((i) => (i + 1) % reviews.length)
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length)

  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden bg-ink-900/40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-x-0 top-1/3 -z-10 h-[24rem] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.14),transparent_65%)]" />

      <div className="container-px mx-auto max-w-5xl text-center">
        <span className="eyebrow mx-auto justify-center">
          What customers say
        </span>
        <h2 className="h-display mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          Reviews from the people who matter most.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mt-16"
        >
          <Quote
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 text-accent/40"
            size={56}
          />

          <div className="card-surface relative min-h-[280px] px-6 py-12 md:px-16 md:py-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex items-center justify-center gap-1 text-accent">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="mt-6 text-balance text-lg leading-relaxed text-neutral-200 md:text-xl">
                  "{r.text}"
                </p>
                <div className="mt-8">
                  <p className="font-medium">{r.name}</p>
                  <p className="text-sm text-neutral-500">{r.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous review"
              onClick={prev}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-accent' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next review"
              onClick={next}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
