'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import ProgressBar from './ProgressBar'

// Dynamically render any Lucide icon by name string (comes from your DB)
function DynamicIcon({ name, ...props }) {
  const Icon = Icons[name]
  if (!Icon) return <Icons.BookOpen {...props} />
  return <Icon {...props} />
}

const COLORS = ['violet', 'cyan', 'emerald', 'orange']

const CARD_GRADIENTS = [
  'from-violet-950/60 via-indigo-950/40 to-transparent',
  'from-cyan-950/60 via-blue-950/40 to-transparent',
  'from-emerald-950/60 via-teal-950/40 to-transparent',
  'from-orange-950/60 via-rose-950/40 to-transparent',
]

const ICON_COLORS = [
  'text-violet-400 bg-violet-500/10 border-violet-500/20',
  'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'text-orange-400 bg-orange-500/10 border-orange-500/20',
]

export default function CourseCard({ course, index }) {
  const colorIndex = index % 4
  const gradient = CARD_GRADIENTS[colorIndex]
  const iconColor = ICON_COLORS[colorIndex]
  const barColor = COLORS[colorIndex]

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0e0e12] p-5 flex flex-col gap-4 group cursor-default"
    >
      {/* Gradient mesh background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 transition-colors duration-300 pointer-events-none" />

      {/* Icon + title */}
      <div className="relative z-10 flex items-start gap-3">
        <div className={`p-2 rounded-xl border ${iconColor} flex-shrink-0`}>
          <DynamicIcon name={course.icon_name} size={18} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm leading-tight">{course.title}</h3>
          <p className="text-gray-500 text-xs mt-0.5">In progress</p>
        </div>
      </div>

      {/* Progress */}
      <div className="relative z-10 mt-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-xs">Progress</span>
          <span className="text-gray-300 text-xs font-mono font-medium">{course.progress}%</span>
        </div>
        <ProgressBar value={course.progress} color={barColor} />
      </div>
    </motion.article>
  )
}
