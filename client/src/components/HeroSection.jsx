import React from 'react'
import EventCard from './EventCard'

export default function HeroSection() {
  return (
    <section className="gradient-hero min-h-[calc(100vh-80px)] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">

        {/* Left: Text content */}
        <div className="flex-1 max-w-xl animate-fade-in">
          {/* Location badge */}
          <div className="inline-flex items-center border-2 border-evora-orange text-evora-orange text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            Now in Koramangala &amp; HSR Layout
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-evora-navy leading-tight mb-5">
            Stop planning.<br />Start doing.
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
            Find people nearby for spontaneous activities —{' '}
            <span className="text-gray-800 font-medium">badminton, coffee, gaming, runs</span>. Right now.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="/onboarding/profile"
              className="bg-evora-orange text-white font-bold px-7 py-3.5 rounded-full hover:bg-orange-500 transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 active:scale-95 text-base"
            >
              Become a Founding Host →
            </a>
            <a
              href="/signup"
              className="bg-evora-navy text-white font-bold px-7 py-3.5 rounded-full hover:bg-indigo-900 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 active:scale-95 text-base"
            >
              Find Events Near Me
            </a>
          </div>

          {/* Live counter */}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>
              <strong className="text-gray-800">12 events</strong> happening in Koramangala today
            </span>
          </div>
        </div>

        {/* Right: Floating Event Card */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <div className="relative">
            <EventCard />
          </div>
        </div>

      </div>
    </section>
  )
}
