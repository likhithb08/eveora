import React from 'react'
import { MapPin, Clock, Users } from 'lucide-react'

export default function EventCard({ className = '', style = {} }) {
  return (
    <div className={`relative ${className}`} style={style}>
      {/* Back card (slightly rotated) */}
      <div
        className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-100"
        style={{ transform: 'rotate(3deg) translate(8px, 8px)', zIndex: 0 }}
      />
      {/* Middle card */}
      <div
        className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-100"
        style={{ transform: 'rotate(1.5deg) translate(4px, 4px)', zIndex: 1 }}
      />

      {/* Main card */}
      <div
        className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-72 animate-float"
        style={{ zIndex: 2 }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 bg-orange-100 text-evora-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-evora-orange"></span>
            RUN
          </span>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <MapPin className="w-3 h-3" />
            <span>1.2 km away</span>
            <span className="mx-1">·</span>
            <Clock className="w-3 h-3" />
            <span>~14 min walk</span>
          </div>
        </div>

        {/* Event info */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
            VS
          </div>
          <div>
            <h3 className="font-bold text-evora-navy text-base leading-tight">5km Evening Run</h3>
            <p className="text-gray-500 text-xs mt-0.5">hosted by Vikram Singh</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-3" />

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide font-medium">Starts at 6:30 PM</p>
            <span className="inline-flex items-center gap-1 mt-1 bg-red-50 text-red-500 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
              1 spot left
            </span>
          </div>
          <button className="border-2 border-evora-navy text-evora-navy text-xs font-semibold px-4 py-2 rounded-xl hover:bg-evora-navy hover:text-white transition-all duration-200 active:scale-95">
            Request to Join
          </button>
        </div>
      </div>
    </div>
  )
}
