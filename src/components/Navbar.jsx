import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 glass-light dark:glass-dark border-b border-pink-100/40 dark:border-pink-950/30">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading text-2xl font-extrabold tracking-tight text-gradient">
          HerDailyFinds
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  active ? 'text-pink-500' : 'text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'
                }`}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full glass dark:glass hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {darkMode ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={18} className="text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={18} className="text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-full glass dark:glass"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden border-t border-pink-100/30 dark:border-pink-950/30"
          >
            <nav className="flex flex-col gap-1 px-5 py-4 bg-lightBg/95 dark:bg-darkBg/95">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === to
                        ? 'text-pink-500 bg-pink-50 dark:bg-pink-950/30'
                        : 'hover:text-pink-500 hover:bg-pink-50/50 dark:hover:bg-pink-950/20'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.28 }}>
                <Link to="/affiliate-disclosure" onClick={() => setOpen(false)} className="block py-3 px-4 rounded-xl text-sm font-medium hover:text-pink-500 hover:bg-pink-50/50 dark:hover:bg-pink-950/20 transition-colors">Disclosure</Link>
              </motion.div>
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 }}>
                <Link to="/privacy-policy" onClick={() => setOpen(false)} className="block py-3 px-4 rounded-xl text-sm font-medium hover:text-pink-500 hover:bg-pink-50/50 dark:hover:bg-pink-950/20 transition-colors">Privacy</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
