'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Rocket, Target, Zap, Database, Globe, Shield, TrendingUp } from 'lucide-react'

export default function About() {
  const [expandedCard, setExpandedCard] = useState(null)

  const highlights = [
    {
      id: 1,
      icon: Code2,
      title: 'Full Stack Development',
      short: 'Building scalable web applications',
      detail: 'Expert in React.js, Node.js, and modern databases. Creating responsive, high-performance applications with clean architecture.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: Rocket,
      title: 'Performance Optimization',
      short: '40% faster load times',
      detail: 'Specialized in lazy loading, memoization, and performance tuning. Reduced application load times by 40% through strategic optimization.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: Database,
      title: 'Machine Learning Integration',
      short: 'AI/ML in production systems',
      detail: 'Integrating machine learning models into production systems. Experience with Python, TensorFlow, and real-time data processing.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      icon: Shield,
      title: 'Secure Systems',
      short: 'JWT authentication & security',
      detail: 'Designing secure systems with JWT authentication, optimized SQL queries, and following security best practices.',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      icon: Globe,
      title: 'Modern Tech Stack',
      short: 'React, Node.js, MongoDB, Python',
      detail: 'Proficient in React.js, Node.js, Express.js, MongoDB, MySQL, Python, and modern frontend frameworks like Tailwind CSS.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      icon: TrendingUp,
      title: 'Agile Development',
      short: 'Cross-functional collaboration',
      detail: 'Experienced in Agile methodologies, sprint planning, code reviews, and collaborating with cross-functional teams.',
      color: 'from-pink-500 to-rose-500',
    },
  ]



  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Full Stack Software Engineer passionate about building impactful solutions
          </p>
        </motion.div>


        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon
            const isExpanded = expandedCard === item.id
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setExpandedCard(isExpanded ? null : item.id)}
                className="glass rounded-3xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {item.short}
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary-500">
                    {isExpanded ? 'Click to collapse' : 'Click to learn more'}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-500"
                  >
                    ↓
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

    
      </div>
    </section>
  )
}
