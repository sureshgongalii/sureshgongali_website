'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.button
      className="fixed top-6 right-6 z-50 p-3 rounded-full glassmorphism border border-white/20 hover:border-neon-blue/50 transition-all duration-300 interactive group"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-neon-blue group-hover:text-neon-yellow transition-colors duration-300" />
        ) : (
          <Moon className="w-6 h-6 text-neon-purple group-hover:text-neon-blue transition-colors duration-300" />
        )}
      </motion.div>
    </motion.button>
  )
}