import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react'

const hours = [
  { d: 'Monday – Friday', t: '9:00 AM – 7:00 PM' },
  { d: 'Saturday', t: '9:00 AM – 5:00 PM' },
  { d: 'Sunday', t: 'Closed' },
]

export default function Contact() {
  return (
    <section id="contact" className="section relative bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="lg:col-span-5"
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="eyebrow"
            >
              Get in touch
            </motion.span>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="h-display mt-5 text-4xl font-semibold leading-tight md:text-5xl"
            >
              Bring your car in.{' '}
              <span className="text-gradient-accent">We'll take it from here.</span>
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-6 text-neutral-400"
            >
              Call ahead or drop by. Walk-ins welcome, but booking helps us
              schedule the right bay and mechanic for your car.
            </motion.p>

            <div className="mt-10 space-y-3">
              <a
                href="tel:+60123456789"
                className="card-surface flex items-center gap-4 p-4 transition hover:border-white/20"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-accent">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Call
                  </p>
                  <p className="text-sm font-medium">+60 12-345 6789</p>
                </div>
              </a>

              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noreferrer"
                className="card-surface flex items-center gap-4 p-4 transition hover:border-white/20"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-accent">
                  <MessageCircle size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    WhatsApp
                  </p>
                  <p className="text-sm font-medium">Chat with the workshop</p>
                </div>
              </a>

              <div className="card-surface flex items-center gap-4 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-accent">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Visit
                  </p>
                  <p className="text-sm font-medium">
                    Taman Midah, Cheras, Kuala Lumpur
                  </p>
                </div>
              </div>

              <div className="card-surface p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-accent">
                    <Clock size={18} />
                  </span>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Opening hours
                  </p>
                </div>
                <ul className="mt-4 divide-y divide-white/5">
                  {hours.map((h) => (
                    <li
                      key={h.d}
                      className="flex items-center justify-between py-2 text-sm"
                    >
                      <span className="text-neutral-400">{h.d}</span>
                      <span className="font-medium">{h.t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="card-surface relative overflow-hidden lg:col-span-7"
          >
            <iframe
              title="Workshop location"
              src="https://www.google.com/maps?q=Taman+Midah,+Cheras,+Kuala+Lumpur&output=embed"
              className="h-[420px] w-full grayscale lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary absolute bottom-6 right-6"
            >
              <MessageCircle size={16} /> Message us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
