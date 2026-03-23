import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center text-2xl font-bold tracking-tight select-none">
        <span className="text-evora-navy">evora</span>
        <span className="text-evora-orange">.club</span>
      </a>

      {/* CTA */}
      <a
        href="/onboarding/profile"
        className="bg-evora-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-orange-500 transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 active:scale-95"
      >
        Become a Host
      </a>
    </header>
  )
}
