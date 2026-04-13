'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="project-card glass rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl font-bold text-gradient opacity-50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Highlights:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-primary-500">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
