import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored =
      typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const initial = stored || 'dark'
    setTheme(initial)
    document.documentElement.classList.toggle('light', initial === 'light')
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.classList.toggle('light', next === 'light')
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={`theme-toggle ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid place-items-center"
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
