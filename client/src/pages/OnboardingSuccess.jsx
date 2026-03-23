import React from 'react'
import { Check, Wallet, ChevronRight, Layers } from 'lucide-react'

export default function OnboardingSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col items-center justify-center p-4">
      
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-[420px] w-full flex flex-col relative overflow-hidden h-[620px]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-7 pb-4">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-evora-navy rounded flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-white" />
             </div>
             <span className="font-bold text-gray-900 text-sm tracking-tight">evora.club</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors tracking-widest leading-none pb-2">
            ...
          </button>
        </div>

        <div className="flex-1 px-8 py-4 flex flex-col items-center justify-center text-center">

          {/* Icon Graphics (Checkmark) */}
          <div className="relative mb-6 mt-4">
            {/* Confetti dots */}
            <div className="absolute top-0 right-1 w-2.5 h-2.5 bg-orange-200 rounded-full" />
            <div className="absolute bottom-2 left-0 w-2 h-2 bg-indigo-200 rounded-full" />
            
            {/* Main Circle */}
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center relative z-10">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                <Check className="w-6 h-6 text-white stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 mb-6 uppercase tracking-widest border border-green-100">
            <Check className="w-3 h-3 stroke-[3]" />
            Verified
          </div>

          {/* Texts */}
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            You're all set! 🎉
          </h1>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-[280px] mb-8">
            Your account is ready. Welcome to the exclusive community at evora.club.
          </p>

          {/* Next Step Box */}
          <a href="/wallet" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors mb-8 group">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5 text-evora-navy" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Next Step</p>
              <p className="text-sm font-bold text-gray-900">Connect your digital wallet</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </a>

          {/* Dashboard Button */}
          <a
            href="/"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-sm shadow-orange-200 active:scale-[0.98]"
          >
            Go to your dashboard
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Settings Link */}
          <div className="mt-8 pb-4">
            <a href="/settings" className="text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors">
              View profile settings
            </a>
          </div>

        </div>

        {/* Bottom edge color gradient decoration */}
        <div className="h-1.5 w-full bg-gradient-to-r from-evora-navy via-indigo-600 to-pink-500" />
      </div>
    </div>
  )
}
