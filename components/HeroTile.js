'use client'

import { motion } from 'framer-motion'
import { Flame, Zap, Star } from 'lucide-react'

const user = {
  name: 'Alex',
  streak: 14,
  xp: 3240,
  level: 12,
}

export default function HeroTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative col-span-2 rounded-2xl overflow-hidden border border-white/5 bg-[#0e0e12] p-6 md:p-8 flex flex-col justify-between min-h-[180px] group cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-indigo-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl border border-violet-500/0 group-hover:border-violet-500/20 transition-colors duration-300 pointer-events-none" />

      <div className="relative z-10">
        <p className="text-gray-500 text-sm font-mono mb-1 tracking-widest uppercase">
          Good morning
        </p>
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
          Welcome back, <span className="text-violet-400">{user.name}</span> 👋
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          You&apos;re on a roll! Keep up the momentum.
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-4 mt-6">
        <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2">
          <Flame size={18} className="text-orange-400" />
          <span className="text-orange-300 font-bold text-sm">{user.streak} day streak</span>
        </div>
        <div className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-xl px-4 py-2">
          <Zap size={18} className="text-violet-400" />
          <span className="text-violet-300 font-bold text-sm">{user.xp.toLocaleString()} XP</span>
        </div>
        <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-2">
          <Star size={18} className="text-yellow-400" />
          <span className="text-yellow-300 font-bold text-sm">Level {user.level}</span>
        </div>
      </div>
    </motion.article>
  )
}