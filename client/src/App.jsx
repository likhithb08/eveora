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
