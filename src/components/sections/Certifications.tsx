'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react'

const certifications = [
  {
    id: 1,
    name: 'Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: '2023',
    credentialId: 'AZ-900-2023',
    description: 'Comprehensive certification covering Azure ML services, data engineering, and AI solutions.',
    skills: ['Azure ML', 'Python', 'Machine Learning', 'Data Engineering'],
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=100',
    badge: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=200',
    verifyUrl: 'https://microsoft.com/verify',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    name: 'Data Science Professional',
    issuer: 'ExcelR',
    date: '2022',
    credentialId: 'EXL-DS-2022',
    description: 'Advanced data science certification covering ML algorithms, statistical analysis, and business intelligence.',
    skills: ['Python', 'R', 'Statistics', 'ML Algorithms'],
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100',
    badge: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200',
    verifyUrl: 'https://excelr.com/verify',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2022',
    credentialId: 'DL-SPEC-2022',
    description: 'Comprehensive deep learning program covering neural networks, CNNs, RNNs, and transformers.',
    skills: ['Deep Learning', 'TensorFlow', 'PyTorch', 'Neural Networks'],
    logo: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=100',
    badge: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=200',
    verifyUrl: 'https://coursera.org/verify',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 4,
    name: 'Google Cloud ML Engineer',
    issuer: 'Google Cloud',
    date: '2021',
    credentialId: 'GCP-ML-2021',
    description: 'Professional certification for designing and building ML systems on Google Cloud Platform.',
    skills: ['GCP', 'MLflow', 'Kubernetes', 'AutoML'],
    logo: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=100',
    badge: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=200',
    verifyUrl: 'https://cloud.google.com/verify',
    color: 'from-red-500 to-red-700',
  },
  {
    id: 5,
    name: 'AWS Machine Learning',
    issuer: 'Amazon Web Services',
    date: '2021',
    credentialId: 'AWS-ML-2021',
    description: 'Specialist certification focusing on ML services and implementations on AWS cloud.',
    skills: ['AWS', 'SageMaker', 'Lambda', 'EC2'],
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=100',
    badge: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=200',
    verifyUrl: 'https://aws.amazon.com/verify',
    color: 'from-orange-500 to-orange-700',
  },
  {
    id: 6,
    name: 'Kaggle Competitions Master',
    issuer: 'Kaggle',
    date: '2020',
    credentialId: 'KAG-MASTER-2020',
    description: 'Achieved master tier in Kaggle competitions with multiple top 10% finishes.',
    skills: ['Competitions', 'Feature Engineering', 'Ensemble Methods', 'XGBoost'],
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100',
    badge: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200',
    verifyUrl: 'https://kaggle.com/verify',
    color: 'from-teal-500 to-teal-700',
  },
]

const achievements = [
  {
    title: 'Published Research Papers',
    count: '5',
    description: 'Peer-reviewed publications in top-tier AI conferences',
    icon: Award,
  },
  {
    title: 'Kaggle Competitions',
    count: '15',
    description: 'Top 10% finishes in machine learning competitions',
    icon: CheckCircle,
  },
  {
    title: 'Industry Recognition',
    count: '3',
    description: 'Awards for innovative AI solutions and leadership',
    icon: Award,
  },
  {
    title: 'Open Source Contributions',
    count: '50+',
    description: 'Contributions to popular ML and AI libraries',
    icon: CheckCircle,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise in data science and AI.
          </p>
        </motion.div>

        {/* Achievements Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-2xl border border-white/10 text-center hover:border-neon-blue/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-cyber font-bold text-neon-blue mb-2">
                {achievement.count}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glassmorphism rounded-2xl overflow-hidden border border-white/10 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-glow">
                {/* Badge Image */}
                <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-glow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={cert.badge}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating Elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-neon-purple rounded-full animate-ping" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neon-blue/50">
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-cyber font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                          {cert.name}
                        </h3>
                        <p className="text-neon-blue font-semibold text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-xs">ID: {cert.credentialId}</span>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verify Button */}
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 border border-neon-blue/50 rounded-lg text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 text-sm font-medium interactive group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}