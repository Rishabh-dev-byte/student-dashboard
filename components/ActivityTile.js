'use client'

import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import { MOCK_ACTIVITY } from '@/lib/mockData'

const INTENSITY_COLORS = [
  'bg-white/5',
  'bg-violet-500/20',
  'bg-violet-500/40',
  'bg-violet-500/70',
  'bg-violet-400',
]

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0e0e12] p-5 group cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/20 via-transparent to-indigo-950/20 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/8 transition-colors duration-300 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-2 mb-4">
        <Activity size={16} className="text-violet-400" />
        <span className="text-gray-300 text-sm font-medium">Learning Activity</span>
        <span className="ml-auto text-gray-600 text-xs font-mono">Last 7 weeks</span>
      </div>

      {/* Contribution grid — 7 columns (days) x 7 rows (weeks) */}
      <div className="relative z-10 grid grid-cols-7 gap-1">
        {MOCK_ACTIVITY.map((cell, i) => (
          <motion.div
            key={cell.day}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.01, duration: 0.2 }}
            className={`aspect-square rounded-sm ${INTENSITY_COLORS[cell.count]} hover:brightness-125 transition-all cursor-pointer`}
            title={`${cell.count} sessions`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="relative z-10 flex items-center gap-1.5 mt-3">
        <span className="text-gray-600 text-xs">Less</span>
        {INTENSITY_COLORS.map((color, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
        ))}
        <span className="text-gray-600 text-xs">More</span>
      </div>
    </motion.article>
  )
}
