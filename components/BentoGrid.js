'use client'

import { motion } from 'framer-motion'

// Container that staggers children animations
// Each child fades in + slides up, one after another
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function BentoGrid({ children }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-auto"
    >
      {children}
    </motion.div>
  )
}

// Wrap each tile in this to get the stagger effect
export function BentoTile({ children, className = '' }) {
  return (
    <motion.div variants={tileVariants} className={className}>
      {children}
    </motion.div>
  )
}
