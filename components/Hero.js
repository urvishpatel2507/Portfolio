'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { personalInfo } from '@/data/portfolio'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })

      gsap.to('.floating', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 p-1.5 floating shadow-2xl">
            <div className=" w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-950 relative">
              {!imageError ? (
                <Image 
                  src="/UrvishPic.jpg" 
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-bold text-gradient">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I&apos;m <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        <h2 className="hero-text text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          {personalInfo.role}
        </h2>

        <p className="hero-text text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          {personalInfo.tagline}
        </p>

        <div className="hero-text flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
          >
            Contact Me
          </motion.a>
        </div>

        <div className="hero-text flex items-center justify-center gap-6">
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-10 right-1 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={32} className="text-gray-400" />
        </motion.a>
      </div>
    </section>
  )
}
