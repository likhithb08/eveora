import React, { useState } from 'react'
import { ArrowRight, ShieldCheck, X } from 'lucide-react'

export default function OnboardingOtpVerification() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  
  const handleInputChange = (index, value) => {
    if (value.length > 1) value = value.slice(0, 1)
    
    // Update code array
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`)
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const handleVerify = async (e) => {
    e.preventDefault()
    const otp = code.join('');
    const phone = localStorage.getItem('evoraPhone') || '5551234567';

    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp })
      });
      const data = await res.json();
      if (data.token) localStorage.setItem('evoraToken', data.token);
    } catch (err) {
      console.error('Backend connection error:', err);
    }

    window.location.href = '/onboarding/face-check'
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 w-full max-w-md overflow-hidden flex flex-col h-[650px] relative">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-50">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-evora-navy rounded-md flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-white" />
             </div>
             <span className="font-bold text-gray-900 text-sm">evora.club</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 px-8 py-8 flex flex-col">

          {/* Stepper info */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Step 3 of 3</p>
              <h2 className="text-lg font-bold text-gray-900">Verify Identity</h2>
            </div>
            {/* 3 Step Dashes */}
            <div className="flex gap-1.5 h-1">
              <div className="w-6 bg-orange-200 rounded-full" />
              <div className="w-6 bg-orange-200 rounded-full" />
              <div className="w-8 bg-evora-orange rounded-full" />
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium mb-12">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Role and Profile completed
          </div>

          <div className="flex flex-col items-center flex-1">
            {/* Icon */}
            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <div className="w-7 h-10 border-2 border-evora-orange rounded-md flex flex-col items-center justify-center p-1">
                <span className="text-evora-orange font-bold text-xs">!</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Verify your number</h3>
            <p className="text-sm text-gray-500 text-center mb-8 px-4">
              Enter the 6-digit code we sent to <span className="font-bold text-gray-800">+1 (555) *** **89</span>
            </p>

            {/* OTP Form */}
            <form onSubmit={handleVerify} className="w-full">
              <div className="flex justify-between gap-2 w-full mb-8">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-14 text-center rounded-xl border border-gray-200 text-lg font-bold text-gray-900 focus:outline-none focus:border-evora-orange focus:ring-1 focus:ring-evora-orange transition-all bg-white"
                  />
                ))}
              </div>

              <div className="text-center mb-10 space-y-1">
                <p className="text-xs text-gray-400">Didn't receive the code?</p>
                <p className="text-xs">
                  <span className="text-gray-400">Resend code in 0:45</span>
                  <button type="button" className="text-indigo-600 font-medium ml-2 hover:underline">
                    Resend now
                  </button>
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all duration-200 active:scale-95 shadow-sm shadow-orange-200"
              >
                Verify
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            
            <p className="mt-8 text-[11px] text-gray-400">
              Having trouble?{' '}
              <a href="/support" className="text-gray-600 font-medium underline">Contact support</a>
            </p>
          </div>
        </div>

        {/* Bottom edge color gradient decoration */}
        <div className="h-1.5 w-full bg-gradient-to-r from-evora-navy via-indigo-400 to-orange-400" />
      </div>
    </div>
  )
}
