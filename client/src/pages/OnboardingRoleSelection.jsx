import React, { useState } from 'react'
import { ArrowRight, Target, Users, CheckCircle, HelpCircle } from 'lucide-react'

// ── Step progress bar ──────────────────────────────────────────────────────
const STEPS = ['ROLE', 'PROFILE', 'VERIFY', 'FACE']

function Stepper({ currentStep = 0 }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {STEPS.map((label, i) => {
        const done = i < currentStep
        const active = i === currentStep
        return (
          <React.Fragment key={label}>
            {/* Step dot + label */}
            <div className="flex flex-col items-center gap-1.5 min-w-[56px]">
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all ${
                  active
                    ? 'bg-evora-navy border-evora-navy scale-125'
                    : done
                    ? 'bg-evora-navy border-evora-navy'
                    : 'bg-white border-gray-300'
                }`}
              />
              <span
                className={`text-[10px] font-bold tracking-widest uppercase ${
                  active ? 'text-evora-navy' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>

            {/* Connector line (not after last) */}
            {i < STEPS.length - 1 && (
              <div
                className={`h-px w-10 mb-5 ${
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

// ── Role card ──────────────────────────────────────────────────────────────
function RoleCard({ icon: Icon, title, description, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all duration-150 text-left group active:scale-[0.99] ${
        selected
          ? 'border-evora-navy bg-indigo-50/60 shadow-sm'
          : 'border-gray-200 bg-white hover:border-indigo-200 hover:bg-indigo-50/30'
      }`}
    >
      {/* Icon container */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
          selected ? 'bg-evora-navy/10' : 'bg-gray-100 group-hover:bg-indigo-100'
        }`}
      >
        <Icon className={`w-5 h-5 ${selected ? 'text-evora-navy' : 'text-gray-500'}`} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className={`font-bold text-sm ${selected ? 'text-evora-navy' : 'text-gray-800'}`}>
          {title}
        </p>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">{description}</p>
      </div>

      {/* Radio indicator */}
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
          selected ? 'border-evora-navy bg-evora-navy' : 'border-gray-300'
        }`}
      >
        {selected && (
          <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
            <path
              d="M2 5L4.2 7 8 3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  )
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function OnboardingRoleSelection() {
  const [role, setRole] = useState('host')

  const handleContinue = () => {
    // Navigate to next onboarding step based on role
    window.location.href = role === 'host' ? '/onboarding/profile' : '/signup'
  }

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center px-4 py-10">

      {/* Logo */}
      <a href="/" className="flex items-center gap-2 mb-8 select-none">
        {/* Diamond gem icon */}
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L2 9l10 13L22 9 12 2z"
            stroke="#4F46E5"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="#4F46E5"
            fillOpacity="0.15"
          />
          <path d="M2 9h20M12 2L7 9l5 13 5-13-5-7z" stroke="#4F46E5" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <span className="text-xl font-bold tracking-tight">
          <span className="text-evora-navy">evora</span>
          <span className="text-evora-orange">.club</span>
        </span>
      </a>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl px-8 py-8 w-full max-w-sm animate-fade-in">

        {/* 4-step progress bar */}
        <Stepper currentStep={0} />

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-xl font-extrabold text-gray-900 mb-1.5">
            How do you want to use Evora?
          </h1>
          <p className="text-gray-500 text-sm">
            Choose your primary account type to get started.
          </p>
        </div>

        {/* Role options */}
        <div className="flex flex-col gap-3 mb-7">
          <RoleCard
            icon={Target}
            title="I want to host"
            description="Create events and manage bookings"
            selected={role === 'host'}
            onSelect={() => setRole('host')}
          />
          <RoleCard
            icon={Users}
            title="I want to join"
            description="Find and attend exclusive events"
            selected={role === 'join'}
            onSelect={() => setRole('join')}
          />
        </div>

        {/* Continue CTA */}
        <button
          onClick={handleContinue}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-3.5 rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 active:scale-95"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Legal */}
        <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
          By continuing, you agree to Evora's{' '}
          <a href="/terms" className="underline hover:text-gray-600">Terms</a>{' '}
          and{' '}
          <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
        </p>
      </div>

      {/* Help link */}
      <a
        href="/help/roles"
        className="flex items-center gap-1.5 mt-6 text-sm text-gray-500 hover:text-evora-navy transition-colors duration-150"
      >
        <HelpCircle className="w-4 h-4" />
        Need help choosing?
      </a>
    </div>
  )
}
