import { useEffect, useState } from 'react'
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Us' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/70 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      {/* top info bar */}
      <div className="relative border-b border-white/5 bg-ink-950/60 backdrop-blur-md">
        <div className="container-px mx-auto flex h-9 max-w-7xl items-center justify-between text-[11px] tracking-wide">
          <div className="flex items-center gap-5 text-neutral-400">
            <a
              href="tel:+60123456789"
              className="group flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone size={12} className="text-accent" />
              <span className="hidden sm:inline">+60 12-345 6789</span>
              <span className="sm:hidden">Call</span>
            </a>
            <span className="h-3 w-px bg-white/10" />
            <a
              href="mailto:hello@tsautomotive.my"
              className="group flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail size={12} className="text-accent" />
              <span className="hidden sm:inline">hello@tsautomotive.my</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-1 text-neutral-300 transition-colors hover:text-white"
          >
            <span className="hidden sm:inline uppercase tracking-[0.2em]">
              Book a slot
            </span>
            <span className="sm:hidden uppercase tracking-[0.15em]">Book</span>
            <ArrowUpRight
              size={12}
              className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between md:h-24">
        <a href="#" className="group flex items-center" aria-label="TS Automotive">
          <img
            src="/logo.png"
            alt="TS Automotive"
            className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110 md:h-16"
          />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
            >
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden items-center gap-3 md:flex"
        >
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary inline-flex">
            Book Appointment
          </a>
        </motion.div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 transition hover:bg-white/5"
          >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'x' : 'm'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid place-items-center"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
