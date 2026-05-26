'use client'
// 'use client' tells Next.js this component runs in the BROWSER
// Just like a regular React component you know from Vite/CRA
// Use this whenever you need: useState, useEffect, event handlers, animations

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  User,
} from 'lucide-react'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'My Courses', icon: BookOpen },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeId, setActiveId] = useState('dashboard')

  return (
    <motion.nav
      animate={{ width: collapsed ? 72 : 220 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative hidden md:flex flex-col h-full bg-[#0e0e12] border-r border-white/5 overflow-hidden flex-shrink-0"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
          <Zap size={16} className="text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="text-white font-semibold text-sm tracking-wide whitespace-nowrap font-mono"
            >
              LearnOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-1 p-3 flex-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = activeId === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-left w-full group"
            >
              {/* layoutId = the highlight slides between nav items smoothly */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 bg-violet-500/15 rounded-lg border border-violet-500/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <Icon
                size={18}
                className={`flex-shrink-0 relative z-10 transition-colors ${
                  isActive ? 'text-violet-400' : 'text-gray-500 group-hover:text-gray-300'
                }`}
              />

              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.12 }}
                    className={`text-sm relative z-10 whitespace-nowrap transition-colors ${
                      isActive ? 'text-white font-medium' : 'text-gray-500 group-hover:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center m-3 p-2 rounded-lg border border-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </motion.nav>
  )
}
