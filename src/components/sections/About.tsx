'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Database, Zap, Users, Award } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Machine Learning', level: 95, icon: Brain, color: 'from-neon-blue to-neon-purple' },
  { name: 'Deep Learning', level: 90, icon: Zap, color: 'from-neon-purple to-neon-pink' },
  { name: 'Python/R', level: 98, icon: Code, color: 'from-neon-pink to-neon-blue' },
  { name: 'Data Engineering', level: 85, icon: Database, color: 'from-neon-blue to-neon-green' },
  { name: 'Leadership', level: 88, icon: Users, color: 'from-neon-green to-neon-yellow' },
  { name: 'AI Research', level: 92, icon: Award, color: 'from-neon-yellow to-neon-purple' },
]

export default function About() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate data scientist with expertise in AI, machine learning, and transforming complex data into actionable insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glassmorphism p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-cyber font-bold mb-6 text-neon-blue">My Journey</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  With over 3 years of experience in data science and AI, I've had the privilege of working on 
                  cutting-edge projects that push the boundaries of what's possible with machine learning.
                </p>
                <p>
                  My expertise spans from traditional machine learning algorithms to state-of-the-art deep learning 
                  models, including natural language processing, computer vision, and predictive analytics.
                </p>
                <p>
                  I'm passionate about creating intelligent solutions that not only solve complex problems but 
                  also drive innovation and create value for businesses and society.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '3+', label: 'Years Experience' },
                { number: '10+', label: 'ML Models Deployed' },
                { number: '95%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glassmorphism p-4 rounded-xl text-center border border-white/10"
                >
                  <div className="text-2xl font-cyber font-bold text-neon-blue mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-cyber font-bold mb-8 text-neon-purple">Technical Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glassmorphism p-6 rounded-xl border border-white/10 group hover:border-neon-blue/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-white">{skill.name}</span>
                    </div>
                    <span className="text-neon-blue font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="relative h-2 bg-dark-600 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}