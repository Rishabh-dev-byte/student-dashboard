'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen, Trophy, User, Settings } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'achievements', label: 'Trophies', icon: Trophy },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function MobileNav() {
  const [activeId, setActiveId] = useState('dashboard')

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0e0e12]/95 backdrop-blur-xl border-t border-white/5">
      <div className="flex items-center justify-around px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = activeId === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-highlight"
                  className="absolute inset-0 bg-violet-500/15 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className={`relative z-10 transition-colors ${isActive ? 'text-violet-400' : 'text-gray-600'}`}
              />
              <span
                className={`text-[10px] relative z-10 transition-colors ${
                  isActive ? 'text-violet-400 font-medium' : 'text-gray-600'
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
