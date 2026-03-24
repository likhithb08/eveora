import { Link, useNavigate } from 'react-router-dom';

export default function EventDetail() {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-page font-sans text-text-primary min-h-screen">
      <div className="max-w-[640px] mx-auto min-h-screen flex flex-col pb-24 relative">
        
        {/* Top Navigation */}
        <nav className="sticky top-0 z-20 bg-bg-page px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} aria-label="Go back" className="p-2 hover:bg-white rounded-full transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-text-primary text-xl">arrow_back</span>
          </button>
          <h1 className="text-lg font-semibold">Event Details</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </nav>

        <main className="px-4 space-y-4 flex-grow">
          {/* Event Header Card */}
          <section className="bg-white rounded-[20px] border-t-[6px] border-primary shadow-sm p-5">
            {/* Badge Row */}
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                Games
              </span>
              <div className="flex items-center gap-2 bg-[#FFF4F0] text-accent px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                <span className="text-xs font-bold italic">Starts in 38 mins</span>
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold mb-5 leading-tight">Board Game Brunch</h2>
            
            {/* Host Info */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
              <img alt="Arjun K." className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFVbkH7iH0nCcWfLPUgzTZaiWVu2J-nJW09vSrdEaTkBrz-5hDWbfOeQlYUn2OrWUK_i3cjhiB-5umdYbLiBz-fYtk0CDgCoZVcrkvWk758_GXMrCBngWJOayk6Z2_ijiJV0vTFOMjWK2_itZA2hxEIqM0nqC90TTKKGrSwD4LBBmCoHDoEa9np0J2hhSeSjCaQZ8_Ta_Q3wNwQn9IkUlHZ_HLt5I6J7a9vgRAXGJOkGIcVLbK86cZcofd1U0BkH5CC3_a8AndD0xQ"/>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-base">Arjun K.</span>
                  <span className="material-symbols-outlined text-green-600 text-[16px]">verified</span>
                  <span className="text-xs text-text-muted ml-1">Verified</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-text-secondary">
                  <span className="material-symbols-outlined text-yellow-400 text-[16px] fill-1">star</span>
                  <span className="font-medium text-text-primary">4.9</span>
                  <span className="text-xs text-text-muted">(24 events hosted)</span>
                </div>
              </div>
            </div>
            
            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 bg-gray-50 rounded-lg">
                  <span className="material-symbols-outlined text-text-secondary text-xl">calendar_today</span>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase font-bold tracking-tight">Date & Time</p>
                  <p className="text-sm font-semibold">Tomorrow, 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 bg-gray-50 rounded-lg">
                  <span className="material-symbols-outlined text-text-secondary text-xl">schedule</span>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase font-bold tracking-tight">Duration</p>
                  <p className="text-sm font-semibold">2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 bg-gray-50 rounded-lg">
                  <span className="material-symbols-outlined text-text-secondary text-xl">location_on</span>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase font-bold tracking-tight">Location</p>
                  <p className="text-sm font-semibold">Central Park Café</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 bg-gray-50 rounded-lg">
                  <span className="material-symbols-outlined text-text-secondary text-xl">group</span>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase font-bold tracking-tight">Availability</p>
                  <p className="text-sm font-semibold text-accent">2 of 8 spots left</p>
                </div>
              </div>
            </div>
            
            {/* Spots Visualizer */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-text-secondary">Confirmed Attendees</p>
              <div className="flex gap-3">
                {/* Filled Spots */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-sm border-2 border-primary/20">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-sm border-2 border-primary/20">
                  <span className="material-symbols-outlined">person</span>
                </div>
                {/* Empty Spots */}
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-300">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-300">
                  <span className="material-symbols-outlined text-sm">+5</span>
                </div>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="bg-white rounded-[16px] overflow-hidden relative shadow-sm">
            <div className="h-40 w-full bg-gray-200">
              <img alt="Map" className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcPPxqw3NIFRMUzq--QX6_iEbUXeIEWlvcGXTZyMu3bhOedzSQPmkT8P8D1ENH6mpTFYcUULF0qt-P1kEF_qLkXbWfiBKkQviRIavvS9KiWiFCXcbT1z51Qa4-rQWemxPncj2m9ObXOfUREsm_F22xWz4YfFt1JcXV9IcQ9uBRRPF5pcIokmNL0ze9xUd6uHsBS2DoketTlMuxRYMVPi-kVon7YSKQKAvFsMgIF7x9oCAZNYxaJG3_Kep6WdR4KYx0wN5J-BRnGN7H"/>
              <div className="absolute inset-0 backdrop-blur-sm bg-white/40 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-text-primary font-semibold text-sm max-w-[240px]">
                  📍 Exact location shared after host approves you
                </p>
              </div>
            </div>
          </section>

          {/* About Section */}
           <section className="px-2 pb-8">
            <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-2 mt-4">About Event</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              We'll be playing Catan and Ticket to Ride. Beginners welcome! Bring your own snacks if possible.
            </p>
          </section>

          {/* Report Button */}
          <div className="text-center pt-4 pb-12">
            <button className="text-text-muted text-xs underline underline-offset-4 hover:text-text-secondary transition-colors">
              Report this event
            </button>
          </div>
        </main>

        {/* Bottom Sticky Action Bar */}
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex items-center justify-between z-30">
          <div className="max-w-[640px] mx-auto w-full flex items-center justify-between">
            <div>
              <p className="text-xs text-text-muted font-medium">Availability</p>
              <p className="text-lg font-bold text-accent leading-none">2 spots left</p>
            </div>
            <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Request to Join →
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
