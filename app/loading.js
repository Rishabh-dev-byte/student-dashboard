// loading.js is a Next.js special file
// It automatically shows while the page is loading
// Like a global loading spinner for the whole route

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#080810]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 animate-pulse" />
        <p className="text-gray-600 text-sm font-mono">Loading...</p>
      </div>
    </div>
  )
}
