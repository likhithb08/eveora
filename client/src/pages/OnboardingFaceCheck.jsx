import React from 'react'
import { ShieldCheck, X, Camera, Lock } from 'lucide-react'

export default function OnboardingFaceCheck() {

  const handleFaceCheck = async () => {
    // Face capture logic...
    const token = localStorage.getItem('evoraToken');
    try {
      await fetch('http://localhost:5000/api/v1/auth/verify-face', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (err) {
      console.error('Backend connection error:', err);
    }

    window.location.href = '/onboarding/success' 
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 max-w-[460px] w-full flex flex-col relative overflow-hidden">
        
        {/* Top edge color indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-evora-navy to-indigo-600" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-7 pb-4">
          <div className="flex items-center gap-2.5">
             <div className="w-7 h-7 bg-evora-navy rounded-lg flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-4 h-4 text-white" />
             </div>
             <span className="font-extrabold text-gray-900 text-[15px] tracking-tight">evora.club</span>
          </div>
          <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-8 pb-8 flex flex-col items-center text-center">

          {/* Stepper info */}
          <div className="w-full flex items-center justify-between mb-8 mt-2">
            <div className="flex gap-1.5 h-1.5">
              <div className="w-7 bg-evora-navy rounded-full" />
              <div className="w-7 bg-evora-navy rounded-full" />
              <div className="w-7 bg-evora-navy rounded-full" />
              <div className="w-7 bg-evora-orange rounded-full" />
              <div className="w-6 bg-gray-200 rounded-full" />
            </div>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Step 4 of 5</p>
          </div>

          <h1 className="text-2xl font-extrabold text-gray-900 mb-3 w-full text-left">
            One last step — face check
          </h1>
          <p className="text-[13px] text-gray-500 leading-relaxed text-left mb-8 w-full">
            To ensure the safety of our community, we need a quick identity verification. This only takes 10 seconds.
          </p>

          {/* Face scan area */}
          <div className="w-full aspect-[4/5] max-h-[400px] rounded-3xl border-2 border-dashed border-indigo-200 bg-white relative flex flex-col items-center justify-center mb-8">
            
            {/* Guide oval */}
            <div className="absolute inset-4 rounded-[40%] border-2 border-indigo-100 flex flex-col items-center justify-center p-6 bg-indigo-50/10">
              
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-4 text-evora-navy">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                </svg>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-2 mt-auto">Position your face here</h3>
              <p className="text-xs text-gray-500 px-4 leading-relaxed mb-8">
                Align your face within the oval guide and ensure you are in a well-lit area.
              </p>
            </div>
            
          </div>

          {/* Action Button */}
          <button
            onClick={handleFaceCheck}
            className="w-full flex items-center justify-center gap-2.5 bg-evora-navy text-white font-bold py-4 rounded-2xl hover:bg-indigo-900 transition-colors shadow-[0_4px_20px_rgb(30,27,75,0.2)] active:scale-[0.98]"
          >
            <Camera className="w-5 h-5" />
            Take Selfie
          </button>

          <div className="flex items-center gap-1.5 mt-5 text-[10px] text-gray-400 justify-center">
             <Lock className="w-3 h-3" />
             <span>Your data is encrypted and secure</span>
          </div>

        </div>
      </div>
      
      {/* External Footer */}
      <footer className="mt-8 text-[11px] text-gray-400 tracking-wide font-medium">
        © 2024 evora.club • Identity Verification Powered by SecureFace
      </footer>
    </div>
  )
}
