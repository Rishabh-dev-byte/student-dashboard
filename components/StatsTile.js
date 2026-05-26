'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle2, Target } from 'lucide-react'

const STATS = [
  { icon: Clock, label: 'Hours this week', value: '12.4', unit: 'hrs' },
  { icon: CheckCircle2, label: 'Lessons done', value: '38', unit: '' },
  { icon: Target, label: 'Weekly goal', value: '80', unit: '%' },
]

export default function StatsTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0e0e12] p-5 group cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-950/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/8 transition-colors duration-300 pointer-events-none" />

      <h2 className="relative z-10 text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">
        This Week
      </h2>

      <div className="relative z-10 flex flex-col gap-4">
        {STATS.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/5">
                <Icon size={14} className="text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
              <p className="text-white font-bold font-mono text-sm">
                {stat.value}
                <span className="text-gray-500 font-normal ml-0.5">{stat.unit}</span>
              </p>
            </div>
          )
        })}
      </div>
    </motion.article>
  )
}
