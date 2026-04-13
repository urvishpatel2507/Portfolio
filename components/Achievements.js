'use client'

import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'
import { achievements } from '../data/portfolio'

export default function Achievements() {

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="achievement-card glass rounded-3xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-1 text-primary-500 text-sm font-semibold">
                      <Calendar size={14} />
                      <span>{achievement.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
