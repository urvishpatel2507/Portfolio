'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from ${formData.name}&body=${formData.message}`
    window.location.href = mailtoLink
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="font-medium text-gray-900 dark:text-white">{personalInfo.phone}</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl"
                >
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 glass rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 glass rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2026 {personalInfo.name}. Built with Next.js, Tailwind CSS, Framer Motion & GSAP.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
