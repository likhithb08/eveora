import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center text-lg font-bold tracking-tight select-none">
          <span className="text-evora-navy">evora</span>
          <span className="text-evora-orange">.club</span>
        </a>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center">
          © 2024 Evora Social. Making urban India a little less lonely.
        </p>

        {/* Links */}
        <nav className="flex items-center gap-5">
          {['Safety', 'Terms', 'Privacy'].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-gray-500 text-sm hover:text-evora-navy transition-colors duration-150 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
