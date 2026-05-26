'use client'
// error.js = Next.js special file for error boundaries
// Like an Express error handler middleware: app.use((err, req, res, next) => {...})

export default function Error({ error, reset }) {
  return (
    <div className="flex h-screen items-center justify-center bg-[#080810]">
      <div className="text-center space-y-4">
        <p className="text-gray-500 text-sm font-mono">Something went wrong</p>
        <p className="text-gray-600 text-xs">{error?.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm hover:bg-violet-500/30 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
