'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950"
    >
      <div className="text-center">
        <div className="loading-spinner w-16 h-16 mx-auto mb-4"></div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gradient"
        >
          Loading...
        </motion.h2>
      </div>
    </motion.div>
  )
}
