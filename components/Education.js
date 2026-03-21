'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { education } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="education-container max-w-4xl mx-auto relative">
          {/* Timeline Line - positioned to align with dots */}
          <div className="absolute left-[3.75rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="education-card relative pl-20"
              >
                {/* Timeline Dot - centered on the line */}
                <div className="absolute left-[3rem] top-8 w-6 h-6 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-950 z-10 shadow-lg"></div>

                <motion.div 
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="glass rounded-3xl p-6 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex-shrink-0">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary-500 font-semibold mb-3">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="px-3 py-1 text-sm font-medium bg-primary-500/10 text-primary-500 rounded-full">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
