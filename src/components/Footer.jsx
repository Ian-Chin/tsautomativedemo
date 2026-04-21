import { Facebook, Instagram, MapPin } from 'lucide-react'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Us' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink-950">
      <div className="ember-line" />
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#" className="group inline-flex" aria-label="TS Automotive">
              <img
                src="/logo.png"
                alt="TS Automotive"
                className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105 md:h-20"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
              An honest car workshop in Cheras. Diagnostics, repairs and
              servicing — done properly, priced fairly.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Quick links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li>+60 12-345 6789</li>
              <li>hello@tsautomotive.my</li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-accent" />
                Taman Midah, Cheras, Kuala Lumpur
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a
                href="https://www.facebook.com/tsautomotiveworkshop/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-neutral-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} TS Automotive Workshop. All rights reserved.</p>
          <p>Built with care in Kuala Lumpur.</p>
        </div>
      </div>
    </footer>
  )
}
