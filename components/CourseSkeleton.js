// This is a SERVER component (no 'use client') 
// It's pure HTML/CSS — no JS needed, so it renders instantly

export default function CourseSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/5 bg-[#0e0e12] p-5 flex flex-col gap-4"
        >
          {/* Icon + title skeleton */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 animate-pulse flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3.5 bg-white/5 animate-pulse rounded-md w-3/4" />
              <div className="h-3 bg-white/5 animate-pulse rounded-md w-1/3" />
            </div>
          </div>

          {/* Progress skeleton */}
          <div className="mt-auto space-y-2">
            <div className="flex justify-between">
              <div className="h-3 w-12 bg-white/5 animate-pulse rounded-md" />
              <div className="h-3 w-8 bg-white/5 animate-pulse rounded-md" />
            </div>
            <div className="h-1.5 w-full bg-white/5 animate-pulse rounded-full" />
          </div>
        </div>
      ))}
    </>
  )
}
