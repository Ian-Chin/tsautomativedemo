import { motion } from 'framer-motion'
import {
  BadgeCheck,
  ScanSearch,
  Tag,
  UserCog,
  Receipt,
  PackageOpen,
} from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Honest recommendations',
    body: 'We tell you what your car actually needs — and what can wait. No hard selling.',
  },
  {
    icon: ScanSearch,
    title: 'Thorough inspections',
    body: 'Every car is checked end-to-end before we suggest a single repair.',
  },
  {
    icon: Tag,
    title: 'Affordable & reasonable',
    body: 'Fair pricing on labour and parts. Often the cheapest around for the same quality.',
  },
  {
    icon: UserCog,
    title: 'Experienced mechanics',
    body: 'A skilled foreman and team who have seen — and fixed — almost everything.',
  },
  {
    icon: Receipt,
    title: 'No hidden charges',
    body: 'You get the quote first. The invoice matches it. Simple as that.',
  },
  {
    icon: PackageOpen,
    title: 'Replaced parts shown',
    body: 'We show every old part we remove, so you can see exactly what was done.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="section relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Why choose us</span>
          <h2 className="h-display mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Six reasons customers come back — and bring their friends.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
                },
              }}
              className="group relative overflow-hidden bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800"
            >
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
              <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-accent transition-all duration-500 group-hover:-translate-y-0.5 group-hover:bg-accent/10">
                <r.icon size={18} />
              </span>
              <h3 className="relative mt-5 font-medium">{r.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-neutral-400">
                {r.body}
              </p>
              <span className="h-display absolute right-6 top-6 text-xs text-neutral-600 transition-colors duration-500 group-hover:text-accent">
                0{i + 1}
              </span>
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, transparent, #f97316, transparent)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
