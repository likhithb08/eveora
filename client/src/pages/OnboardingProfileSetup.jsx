import React, { useState } from 'react'
import { ArrowRight, Camera, Pencil } from 'lucide-react'

// ── Step progress bar ──────────────────────────────────────────────────────
const STEPS = ['ROLE', 'PROFILE', 'VERIFY']

function Stepper({ currentStep = 1 }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {STEPS.map((label, i) => {
        const done = i < currentStep
        const active = i === currentStep
        // Based on the image, the done state has a checkmark, active has the number.
        // But to keep it simple and aligned to the design: 
        // Step 1: Checkmark (ROLE)
        // Step 2: '2' (PROFILE)
        // Step 3: '3' (VERIFY)

        return (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center gap-1.5 min-w-[56px] z-10">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                  done
                    ? 'bg-evora-navy text-white'
                    : active
                    ? 'bg-evora-orange text-white ring-4 ring-orange-50'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {done ? (
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
                    <path
                      d="M2.5 7.5L5.5 10.5L11.5 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-[9px] font-bold tracking-widest uppercase ${
                  active ? 'text-evora-orange' : done ? 'text-evora-navy' : 'text-gray-300'
                }`}
              >
                {label}
              </span>
            </div>

            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div
                className={`h-px w-16 mb-4 -mx-2 ${
                  done ? 'bg-evora-navy' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default function OnboardingProfileSetup() {
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91',
    phone: '',
    neighbourhood: '',
    isAdult: false
  })

  const handleContinue = async (e) => {
    e.preventDefault()
    
    try {
      await fetch('http://localhost:5000/api/v1/auth/host', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      localStorage.setItem('evoraPhone', formData.phone);
    } catch (err) {
      console.error('Backend connection failed:', err);
    }

    // Navigate to next step
    window.location.href = '/onboarding/verify'
  }

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center px-4 py-10">
      
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-8 py-8 w-full max-w-sm animate-fade-in relative">
        
        {/* Stepper */}
        <Stepper currentStep={1} />

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-extrabold text-gray-900 mb-2">
            Set up your profile
          </h1>
          <p className="text-gray-500 text-sm">
            Help the evora.club community know you better
          </p>
        </div>

        {/* Avatar Upload */}
        <div className="flex justify-center mb-8">
          <button className="relative group">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-indigo-200 bg-indigo-50/30 flex flex-col items-center justify-center text-indigo-400 group-hover:bg-indigo-50 transition-colors">
              <Camera className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">Add photo</span>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-evora-navy rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
              <Pencil className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleContinue} className="space-y-4">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-evora-navy focus:ring-1 focus:ring-evora-navy transition-all placeholder:text-gray-400"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Phone Number</label>
            <div className="flex gap-2">
              <select 
                title="Country Code"
                value={formData.countryCode}
                onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                className="w-20 px-2 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-600 focus:outline-none focus:border-evora-navy transition-all text-center appearance-none"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-evora-navy focus:ring-1 focus:ring-evora-navy transition-all placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          {/* Neighbourhood */}
          <div className="space-y-1.5 mt-1">
            <label className="text-xs font-bold text-gray-700 block">Neighbourhood</label>
            <div className="relative">
              <select
                title="Neighbourhood"
                value={formData.neighbourhood}
                onChange={(e) => setFormData({...formData, neighbourhood: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-evora-navy focus:ring-1 focus:ring-evora-navy transition-all appearance-none bg-white text-gray-600"
                required
              >
                <option value="" disabled>Select your area</option>
                <option value="downtown">Downtown</option>
                <option value="suburbs">Suburbs</option>
                <option value="uptown">Uptown</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Age Confirmation Toggle */}
          <div className="pt-2 pb-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFormData({...formData, isAdult: !formData.isAdult})}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                formData.isAdult ? 'bg-evora-orange' : 'bg-gray-200'
              }`}
              role="switch"
              aria-checked={formData.isAdult}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  formData.isAdult ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
            <span className="text-[11px] text-gray-500 font-medium cursor-pointer" onClick={() => setFormData({...formData, isAdult: !formData.isAdult})}>
              I confirm that I am above 18 years of age
            </span>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-500 text-white font-bold py-3.5 rounded-xl hover:from-orange-600 hover:to-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 active:scale-95 mt-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Legal Text */}
        <p className="text-center text-[9px] text-gray-400 mt-6 leading-relaxed px-4">
          By continuing, you agree to evora.club's{' '}
          <a href="/terms" className="text-evora-navy font-medium hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" className="text-evora-navy font-medium hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}
