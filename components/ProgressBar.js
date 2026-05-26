'use client'

import { motion } from 'framer-motion'

export default function ProgressBar({ value, color = 'violet' }) {
  const colorMap = {
    violet: 'from-violet-500 to-indigo-500',
    cyan: 'from-cyan-500 to-blue-500',
    emerald: 'from-emerald-500 to-teal-500',
    orange: 'from-orange-500 to-rose-500',
  }

  const gradient = colorMap[color] || colorMap.violet

  return (
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
        initial={{ width: '0%' }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />
    </div>
  )
}
