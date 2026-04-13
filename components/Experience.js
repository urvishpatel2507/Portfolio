'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="experience-container max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="experience-card glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary-500 font-semibold">{exp.company}</p>
                    {exp.guide && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Guide: {exp.guide}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.duration}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-500 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
