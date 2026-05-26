// layout.js is like your Express app.js + your root HTML file combined
// It wraps EVERY page in your app
// This is a SERVER component by default

import './globals.css'

export const metadata = {
  title: 'LearnOS — Student Dashboard',
  description: 'Next-gen learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080810] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
