'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'TechCorp AI',
    position: 'Senior Data Scientist',
    location: 'San Francisco, CA',
    duration: '2022 - Present',
    type: 'Full-time',
    description: 'Lead a team of 5 data scientists in developing cutting-edge AI solutions for enterprise clients. Responsible for the entire ML pipeline from data collection to model deployment.',
    achievements: [
      'Increased model accuracy by 25% through advanced feature engineering',
      'Deployed 10+ ML models in production serving 1M+ users',
      'Led the development of a real-time recommendation system'
    ],
    skills: ['Python', 'TensorFlow', 'AWS', 'Kubernetes', 'MLflow'],
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 2,
    company: 'DataFlow Solutions',
    position: 'Machine Learning Engineer',
    location: 'New York, NY',
    duration: '2021 - 2022',
    type: 'Full-time',
    description: 'Developed and maintained machine learning models for financial services. Worked on fraud detection, risk assessment, and algorithmic trading systems.',
    achievements: [
      'Reduced fraud detection false positives by 40%',
      'Implemented real-time model monitoring and alerting',
      'Optimized model inference time by 60%'
    ],
    skills: ['Python', 'Scikit-learn', 'Docker', 'Apache Kafka', 'PostgreSQL'],
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 3,
    company: 'StartupX',
    position: 'Data Scientist',
    location: 'Austin, TX',
    duration: '2020 - 2021',
    type: 'Full-time',
    description: 'Built the entire data science infrastructure from scratch. Developed predictive models for customer behavior analysis and business optimization.',
    achievements: [
      'Increased customer retention by 30% through predictive analytics',
      'Built automated reporting dashboard saving 20 hours/week',
      'Established data governance and quality frameworks'
    ],
    skills: ['Python', 'R', 'Tableau', 'MongoDB', 'Apache Spark'],
    logo: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 4,
    company: 'Research Institute',
    position: 'Research Assistant',
    location: 'Boston, MA',
    duration: '2019 - 2020',
    type: 'Part-time',
    description: 'Conducted research on deep learning applications in natural language processing. Published 3 papers in peer-reviewed conferences.',
    achievements: [
      'Published 3 research papers in top-tier conferences',
      'Developed novel attention mechanism for transformer models',
      'Mentored 5 undergraduate students in research projects'
    ],
    skills: ['Python', 'PyTorch', 'NLTK', 'Jupyter', 'Git'],
    logo: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey through the world of data science and artificial intelligence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-col md:gap-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-black z-10 shadow-glow" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="glassmorphism p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-500 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Company Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-neon-blue/50">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-cyber font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-neon-blue font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs">
                        {exp.type}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2 text-neon-pink flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1 text-gray-300">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-neon-blue text-sm mt-1">▸</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-gray-400">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}