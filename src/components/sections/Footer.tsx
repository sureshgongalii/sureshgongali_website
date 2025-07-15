'use client'

import { motion } from 'framer-motion'
import { Heart, Code, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-3xl font-cyber font-bold text-gradient mb-2">
              Suresh Gongali
            </h3>
            <p className="text-gray-400">Next-Gen Data Scientist & AI Engineer</p>
          </motion.div>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-px bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 text-sm"
          >
            <span>© 2024 Suresh Gongali. All rights reserved.</span>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-neon-blue animate-bounce" />
              <span>in San Francisco</span>
            </div>
          </motion.div>

          {/* Fun Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 flex justify-center"
          >
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Zap className="w-3 h-3 text-neon-yellow animate-ping" />
              <span>Powered by AI & Coffee</span>
              <Zap className="w-3 h-3 text-neon-yellow animate-ping" />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}