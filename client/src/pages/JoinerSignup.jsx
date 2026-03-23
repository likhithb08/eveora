import React, { useState } from 'react'
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react'

const ACTIVITIES = [
  'Sports', 'Gaming', 'Coffee', 'Food & Cooking',
  'Fitness', 'Study Together', 'Music', 'Creative',
]

const NEIGHBOURHOODS = [
  'Koramangala', 'HSR Layout', 'Indiranagar', 'Whitefield',
  'Marathahalli', 'BTM Layout', 'Jayanagar', 'JP Nagar',
]

export default function JoinerSignup() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [neighbourhood, setNeighbourhood] = useState('')
  const [selected, setSelected] = useState(['Sports'])
  const [submitted, setSubmitted] = useState(false)

  const toggleActivity = (activity) => {
    setSelected((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!fullName || !phone || !neighbourhood || selected.length === 0) return
    
    try {
      await fetch('http://localhost:5000/api/v1/auth/joiner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phone, neighbourhood, activities: selected })
      });
    } catch (err) {
      console.error('Backend connection failed:', err);
    }
    
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-evora-navy mb-3">You're on the list!</h2>
          <p className="text-gray-500 mb-6">
            We'll WhatsApp you at <strong>+91 {phone}</strong> when something fun is happening near you in <strong>{neighbourhood}</strong>.
          </p>
          <a
            href="/"
            className="inline-block bg-evora-orange text-white font-bold px-7 py-3 rounded-full hover:bg-orange-500 transition-all duration-200 hover:shadow-lg hover:shadow-orange-200"
          >
            Explore Events →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4 py-10">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 w-full max-w-md animate-fade-in">
        {/* Logo */}
        <a href="/" className="inline-flex items-center text-xl font-bold tracking-tight mb-6 select-none">
          <span className="text-evora-navy">evora</span>
          <span className="text-evora-orange">.club</span>
        </a>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-evora-navy mb-2 leading-snug">
          Find your next spontaneous activity
        </h1>
        <p className="text-gray-500 text-sm mb-7">
          Drop your number. We'll WhatsApp you when something fun is happening nearby.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-evora-navy focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Phone Number
            </label>
            <div className="flex items-stretch border border-gray-200 rounded-xl overflow-hidden focus-within:border-evora-navy focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
              <span className="flex items-center px-4 border-r border-gray-200 bg-gray-50 text-gray-600 text-sm font-semibold select-none">
                +91
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit number"
                required
                className="flex-1 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
              />
            </div>
            <p className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              We'll send you a WhatsApp message — no spam ever
            </p>
          </div>

          {/* Neighbourhood */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Your Neighbourhood
            </label>
            <div className="relative">
              <select
                value={neighbourhood}
                onChange={(e) => setNeighbourhood(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 appearance-none focus:outline-none focus:border-evora-navy focus:ring-2 focus:ring-indigo-100 transition-all bg-white cursor-pointer"
              >
                <option value="" disabled>Select area</option>
                {NEIGHBOURHOODS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Activity Chips */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Pick what you'd join
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {ACTIVITIES.map((activity) => {
                const isSelected = selected.includes(activity)
                return (
                  <button
                    key={activity}
                    type="button"
                    onClick={() => toggleActivity(activity)}
                    className={`py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-150 active:scale-95 ${
                      isSelected
                        ? 'bg-evora-navy text-white shadow-md'
                        : 'bg-indigo-50 text-gray-600 hover:bg-indigo-100'
                    }`}
                  >
                    {activity}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-4 rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 active:scale-95 text-base mt-1"
          >
            Notify Me via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary link */}
          <p className="text-center text-sm text-gray-400 mt-1">
            Want to host events instead?{' '}
            <a href="/onboarding/profile" className="text-evora-navy font-semibold hover:underline">
              Apply as a Founding Host →
            </a>
          </p>
        </form>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 z-50"
        style={{ background: '#25D366' }}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
          <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.377.693 4.593 1.89 6.458L4 29l7.74-1.857A12.94 12.94 0 0 0 16.002 28C22.63 28 28 22.627 28 16.002 28 9.373 22.63 3 16.002 3zm0 23.636a10.57 10.57 0 0 1-5.39-1.483l-.387-.23-4.002.96.978-3.9-.253-.4A10.57 10.57 0 0 1 5.364 16c0-5.873 4.765-10.636 10.638-10.636S26.636 10.127 26.636 16 21.875 26.636 16.002 26.636zm5.82-7.962c-.32-.16-1.888-.931-2.18-1.038-.294-.106-.508-.16-.722.16s-.828 1.038-1.016 1.252-.374.24-.694.08a8.73 8.73 0 0 1-2.57-1.585 9.65 9.65 0 0 1-1.777-2.212c-.187-.32-.02-.493.14-.653.145-.144.32-.374.48-.56.16-.187.213-.32.32-.534.107-.213.054-.4-.027-.56s-.722-1.74-.988-2.384c-.26-.627-.524-.54-.722-.55l-.614-.01a1.18 1.18 0 0 0-.854.4c-.293.32-1.12 1.094-1.12 2.668s1.147 3.094 1.307 3.308c.16.213 2.256 3.44 5.467 4.826.764.33 1.36.527 1.824.675.767.244 1.466.21 2.018.127.615-.092 1.888-.77 2.154-1.514.267-.747.267-1.387.187-1.52-.08-.134-.294-.213-.614-.374z"/>
        </svg>
      </a>
    </div>
  )
}
