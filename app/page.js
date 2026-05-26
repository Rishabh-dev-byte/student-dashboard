// page.js = your homepage route (like app.get('/') in Express)
// This is a SERVER component — runs on server, no useState/useEffect
// The async/await here is like an Express async route handler

import { Suspense } from 'react'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import HeroTile from '@/components/HeroTile'
import CourseGrid from '@/components/CourseGrid'
import CourseSkeleton from '@/components/CourseSkeleton'
import ActivityTile from '@/components/ActivityTile'
import StatsTile from '@/components/StatsTile'
import BentoGrid, { BentoTile } from '@/components/BentoGrid'

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#080810]">
      {/* Sidebar — desktop only */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">

          {/* Page header */}
          <header className="mb-6">
            <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
              Dashboard
            </p>
          </header>

          {/* Bento grid — all tiles stagger in via BentoGrid */}
          <BentoGrid>

            {/* Hero tile spans full width on all sizes */}
            <BentoTile className="col-span-1 md:col-span-2 lg:col-span-4">
              <HeroTile />
            </BentoTile>

            {/* Activity tile */}
            <BentoTile className="col-span-1 md:col-span-1 lg:col-span-2">
              <ActivityTile />
            </BentoTile>

            {/* Stats tile */}
            <BentoTile className="col-span-1 md:col-span-1 lg:col-span-2">
              <StatsTile />
            </BentoTile>

            {/* 
              Section header for courses 
              col-span-full = stretches across all columns 
            */}
            <BentoTile className="col-span-1 md:col-span-2 lg:col-span-4">
              <h2 className="text-gray-500 text-xs font-mono uppercase tracking-widest px-1">
                Active Courses
              </h2>
            </BentoTile>

            {/* 
              Suspense = React's loading boundary
              While CourseGrid (server component) fetches from Supabase,
              it shows CourseSkeleton (the pulsing placeholder cards)
              This is like a loading spinner but WAY more polished
            */}
            <Suspense fallback={<CourseSkeleton />}>
              <CourseGrid />
            </Suspense>

          </BentoGrid>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  )
}
