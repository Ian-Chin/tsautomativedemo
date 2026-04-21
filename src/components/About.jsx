import { motion } from 'framer-motion'
import { ShieldCheck, Wrench, Eye, HeartHandshake } from 'lucide-react'

const pillars = [
  {
    icon: Wrench,
    title: 'Experienced foreman',
    body: 'Decades on the floor. Cars are diagnosed by hand and ear, not just by guesswork.',
  },
  {
    icon: Eye,
    title: 'Honest diagnostics',
    body: 'We replace what needs replacing — and tell you what doesn\'t. Old parts are returned to you.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent pricing',
    body: 'Quotes before work begins. No mystery line items. No surprise charges at pickup.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer first',
    body: 'No hard selling, ever. The right repair is the one that gets you home safely.',
  },
]

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">About the workshop</span>
            <h2 className="h-display mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              A workshop built on <span className="text-gradient-accent">trust</span>,
              not upsells.
            </h2>
            <p className="mt-6 text-neutral-400">
              TS Automotive has spent years earning a reputation in Cheras for
              one thing above all: telling customers the truth. Whether it's a
              quick alignment or a stubborn drivetrain issue, you get a real
              diagnosis, a fair quote, and the parts to prove it.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.98 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
                className="card-surface group p-6 transition-colors hover:border-white/20"
              >
                <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white/5 text-accent transition-all duration-500 group-hover:bg-accent/10">
                  <p.icon size={18} className="relative z-10" />
                </span>
                <h3 className="mt-5 font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
