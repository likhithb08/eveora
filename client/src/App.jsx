import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HostApplication from './pages/HostApplication';
import FaceVerification from './pages/FaceVerification';
import ThankYou from './pages/ThankYou';
import HostDashboard from './pages/HostDashboard';
import CreateEvent from './pages/CreateEvent';
import EventDetail from './pages/EventDetail';
import MyEvents from './pages/MyEvents';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<Navigate to="/host-application" replace />} />
          <Route path="/host-application" element={<HostApplication />} />
          <Route path="/face-verification" element={<FaceVerification />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/dashboard" element={<HostDashboard />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/profile" element={<UserProfile />} />
          {/* We will add more routes here as we build other modules */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
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
