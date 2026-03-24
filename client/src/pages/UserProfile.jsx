import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('hosted');

  return (
    <div className="bg-bg-page font-sans text-text-primary min-h-screen pb-10">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-20 bg-bg-page px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} aria-label="Go back" className="p-2 hover:bg-white rounded-full transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined text-text-primary text-xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-semibold">Profile</h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </nav>

      <main className="max-w-[800px] mx-auto px-4 py-4 space-y-6">
        
        {/* Profile Header Card */}
        <section className="bg-white rounded-[20px] overflow-hidden shadow-sm">
          {/* Top Indigo Band */}
          <div className="h-20 bg-primary"></div>
          
          <div className="px-6 pb-8 -mt-10 flex flex-col items-center">
            {/* Avatar Section */}
            <div className="relative mb-4">
              <img alt="User Avatar" className="w-20 h-20 rounded-full border-[3px] border-white object-cover shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrtzqZM1l_sSG76iuTg1SQRFCX5cVKYEzOj8vEb2Wwgc1CaMuzfNfciI6QRQRbcIm_O3t5Yu__uQTg3rQLRjSYIiC5RbYZSr1aWFB8NXMpqIRzG-OarEsAPJua85hfVScHZH4W0Sjmfm-WWS4XndcLd8jFPxE-w3Q95ejUwbPrWJgVyT0qY4qAOswij_gk2StTGGYlRw_pWNBw1SJZmWTUHL72HL6MhlIQfqL6OIY3xWZyj25pt2jI8mvos7wAcq4XHJynEDEDSbGd"/>
            </div>
            
            {/* Identity Section */}
            <div className="text-center space-y-2 mb-6">
              <div className="flex items-center justify-center gap-2">
                <h1 className="text-[20px] font-bold">Alex Thompson</h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border border-yellow-400 text-text-primary">
                  <span className="mr-1">★</span> Founding Host
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#0D9E75] text-sm font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">verified</span> Verified
                </span>
                <span className="bg-[#F0EEFF] text-primary px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> Koramangala
                </span>
              </div>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 w-full border-t border-gray-50 pt-6">
              <div className="text-center">
                <div className="text-[24px] font-bold text-primary leading-tight">12</div>
                <div className="text-[11px] text-text-muted font-medium uppercase tracking-wider">Events Hosted</div>
              </div>
              <div className="text-center border-x border-gray-100">
                <div className="text-[24px] font-bold text-primary leading-tight">48</div>
                <div className="text-[11px] text-text-muted font-medium uppercase tracking-wider">Events Joined</div>
              </div>
              <div className="text-center">
                <div className="text-[24px] font-bold text-primary leading-tight">4.9</div>
                <div className="text-[11px] text-text-muted font-medium uppercase tracking-wider">Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Card */}
        <section className="bg-white rounded-[16px] p-5 shadow-sm">
          <h2 className="text-[13px] font-semibold mb-4">Your Verification</h2>
          <div className="space-y-3 mb-5">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0D9E75]">check_circle</span>
                <span className="text-text-muted">Phone verified</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0D9E75]">check_circle</span>
                <span className="text-text-muted">Profile photo added</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0D9E75]">check_circle</span>
                <span className="text-text-muted">Face check complete</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-gray-200"></div>
                <span className="text-text-muted">ID verification</span>
              </div>
              <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Coming soon</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#0D9E75]">Verification: 100%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-[#0D9E75] h-2 rounded-full w-full"></div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="bg-white rounded-[16px] p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[16px] font-bold">What you're into</h2>
            <button className="text-primary text-sm font-semibold hover:underline">Edit</button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#EDE9FF] text-primary px-4 py-1.5 rounded-full text-sm font-medium">Board Games</span>
            <span className="bg-[#EDE9FF] text-primary px-4 py-1.5 rounded-full text-sm font-medium">Techno</span>
            <span className="bg-[#EDE9FF] text-primary px-4 py-1.5 rounded-full text-sm font-medium">Padel</span>
            <span className="bg-[#EDE9FF] text-primary px-4 py-1.5 rounded-full text-sm font-medium">Philosophy</span>
            <span className="bg-[#EDE9FF] text-primary px-4 py-1.5 rounded-full text-sm font-medium">Craft Beer</span>
          </div>
        </section>

        {/* Activity History */}
        <section className="bg-white rounded-[16px] p-5 shadow-sm">
          <div className="flex border-b border-gray-100 mb-4">
            <button 
              onClick={() => setActiveTab('hosted')} 
              className={`flex-1 pb-3 text-sm transition-colors ${activeTab === 'hosted' ? 'font-bold text-primary border-b-2 border-primary' : 'font-medium text-text-muted hover:text-primary'}`}
            >
              Hosted
            </button>
            <button 
              onClick={() => setActiveTab('joined')} 
              className={`flex-1 pb-3 text-sm transition-colors ${activeTab === 'joined' ? 'font-bold text-primary border-b-2 border-primary' : 'font-medium text-text-muted hover:text-primary'}`}
            >
              Joined
            </button>
          </div>
          
          <div className="space-y-4">
            {activeTab === 'hosted' && (
              <>
                <Link to="/event/1" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img alt="Event thumb" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEVJsa4Wwl51vsemXkTTsvCnxaiCo948vkuPhk8QjW-tkIZ91r1wCxyvbZXWm3txLbVKv2DO17vZZqu8_4JGwxtmo69f-zZ4YeAaiG3Pi-KxdPgBPZ-Tx5W2Zese6D5tp454EejTU9gDIIab7IRww0gzcRKw2YoyQGKLwDnlTbWUrZpEEhxKeZe5wPMVGvgyV3J1QzVA0tCEaKMfIv2mYD0TODdnDT8VBpqoCNM0EPCU7TpsRLmyqpiMT9PVKs7ThsMBY7_CNXMBL8"/>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-primary">Board Games & Chill</h3>
                      <p className="text-xs text-text-muted">Nov 24 • 8 Attendees</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </Link>
                <Link to="/event/2" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img alt="Event thumb" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOlJ1vRi_gBqS6osSVxGEubGO6e3V2Ew6eTxTnKy0nnv7NNBfGB0MpoUMsZgHH67FZCBXHcge6vPUv1rTPHki8ZjyYwdM1GyjD6SC_9LH8e1P1mm8R-S0WuS-gu6zuoplc8TbHAyh5JjECHMf1RdA3Bvz-KcbcEF0Dj2viGFP7kMw-ILoA2ctde-6sP5gguBd99T5Xi0U2hlMl3T0QgvmoBcqJ6qn6pz992RmxKTbzZVzHt6yQk5dx1ffcZZd2GtEZBxZa8sNmNdbs"/>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-primary">Midweek Techno Session</h3>
                      <p className="text-xs text-text-muted">Oct 12 • 15 Attendees</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </Link>
              </>
            )}
            {activeTab === 'joined' && (
               <div className="text-center text-sm text-text-muted py-4">No events joined yet.</div>
            )}
          </div>
        </section>

        {/* Settings Section */}
        <section className="bg-white rounded-[16px] p-2 shadow-sm">
          <div className="divide-y divide-gray-50">
            {['Edit Profile', 'Notification Preferences', 'Privacy Settings', 'Help & Support', 'Report a Problem'].map(setting => (
              <button key={setting} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium">{setting}</span>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </button>
            ))}
          </div>
          
          {/* Logout Button */}
          <div className="p-4 pt-6 text-center">
            <button className="text-[#E24B4A] font-bold text-sm hover:opacity-80 transition-opacity px-6 py-2">
              Sign out
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
