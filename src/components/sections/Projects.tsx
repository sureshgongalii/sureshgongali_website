'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Filter, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Sentiment Analysis',
    description: 'Advanced NLP model for real-time sentiment analysis with 95% accuracy',
    longDescription: 'Developed a comprehensive sentiment analysis system using transformer models and BERT architecture. The system processes millions of social media posts in real-time, providing actionable insights for brand monitoring and customer feedback analysis.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['NLP', 'Deep Learning', 'Python', 'TensorFlow'],
    tech: ['Python', 'TensorFlow', 'BERT', 'Flask', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    metrics: ['95% Accuracy', '1M+ Posts/day', '50ms Response Time'],
  },
  {
    id: 2,
    title: 'Computer Vision Disease Detection',
    description: 'Medical image analysis system for early disease detection using CNN',
    longDescription: 'Created a state-of-the-art computer vision system for medical imaging that can detect various diseases with high accuracy. The system uses advanced CNN architectures and has been deployed in multiple healthcare facilities.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Computer Vision', 'CNN', 'Healthcare', 'PyTorch'],
    tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    metrics: ['98% Accuracy', '3 Hospitals', '10K+ Scans'],
  },
  {
    id: 3,
    title: 'Predictive Analytics Dashboard',
    description: 'Real-time business intelligence platform with machine learning insights',
    longDescription: 'Built a comprehensive analytics dashboard that provides real-time business insights using machine learning algorithms. The platform processes large datasets and provides predictive analytics for strategic decision making.',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['ML', 'Analytics', 'Dashboard', 'React'],
    tech: ['Python', 'React', 'D3.js', 'PostgreSQL', 'Kafka'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    metrics: ['Real-time', '100+ Metrics', '5M+ Records'],
  },
  {
    id: 4,
    title: 'Recommendation Engine',
    description: 'Personalized recommendation system using collaborative filtering',
    longDescription: 'Developed a sophisticated recommendation engine that uses collaborative filtering and deep learning to provide personalized recommendations. The system handles millions of users and items with sub-second response times.',
    image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['ML', 'Recommendation', 'Collaborative Filtering', 'Scala'],
    tech: ['Python', 'Scala', 'Spark', 'Redis', 'Kubernetes'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    metrics: ['35% CTR Increase', '2M+ Users', '<100ms Latency'],
  },
]

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))]

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag))

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest AI and machine learning projects that showcase innovation and technical excellence.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border interactive ${
                selectedTag === tag
                  ? 'bg-neon-blue text-black border-neon-blue shadow-glow'
                  : 'bg-transparent text-gray-300 border-gray-600 hover:border-neon-blue hover:text-neon-blue'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glassmorphism rounded-2xl overflow-hidden border border-white/10 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-glow">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-neon-blue/20 transition-all duration-300 interactive"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-neon-blue/20 transition-all duration-300 interactive"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-cyber font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="px-2 py-1 bg-gray-800 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glassmorphism max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-red-500/20 transition-all duration-300 interactive"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="text-3xl font-cyber font-bold mb-4 text-gradient">
                {selectedProject.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-neon-blue">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-neon-pink">Key Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.metrics.map((metric) => (
                    <div key={metric} className="glassmorphism p-3 rounded-lg text-center border border-white/10">
                      <span className="text-neon-blue font-semibold">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 interactive"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
                <motion.a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-neon-pink rounded-full font-semibold text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300 interactive"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}