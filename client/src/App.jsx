import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import JoinerSignup from './pages/JoinerSignup'
import OnboardingRoleSelection from './pages/OnboardingRoleSelection'
import OnboardingProfileSetup from './pages/OnboardingProfileSetup'
import OnboardingOtpVerification from './pages/OnboardingOtpVerification'
import OnboardingFaceCheck from './pages/OnboardingFaceCheck'
import OnboardingSuccess from './pages/OnboardingSuccess'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<JoinerSignup />} />
        <Route path="/onboarding" element={<OnboardingRoleSelection />} />
        <Route path="/onboarding/profile" element={<OnboardingProfileSetup />} />
        <Route path="/onboarding/verify" element={<OnboardingOtpVerification />} />
        <Route path="/onboarding/face-check" element={<OnboardingFaceCheck />} />
        <Route path="/onboarding/success" element={<OnboardingSuccess />} />
        
        {/* Coming Soon utility routes */}
        <Route path="/terms" element={<ComingSoon title="Terms of Service" />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
        <Route path="/support" element={<ComingSoon title="Support Center" />} />

        {/* Redirects for legacy links */}
        <Route path="/host" element={<Navigate to="/onboarding/profile" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
