import { motion } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Car on a lift in workshop',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1599256871679-f64c4ddb53e1?auto=format&fit=crop&w=900&q=80',
    alt: 'Mechanic tools on bench',
  },
  {
    src: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?auto=format&fit=crop&w=900&q=80',
    alt: 'Mechanic working under car',
  },
  {
    src: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80',
    alt: 'Stack of tyres',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    alt: 'Car detail',
    span: 'md:col-span-2',
  },
]

export default function Gallery() {
  return (
    <section className="section relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Inside the workshop</span>
            <h2 className="h-display mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Real bays. Real tools. Real work.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[14rem] grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                img.span ?? ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
