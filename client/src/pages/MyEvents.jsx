import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MyEvents() {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="bg-bg-page min-h-screen font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 md:px-10 lg:px-20 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
              <span className="material-symbols-outlined text-3xl">explore</span>
              <span className="tracking-tight">evora.club</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-slate-600 hover:text-primary font-medium text-sm transition-colors">Dashboard</Link>
              <Link to="/my-events" className="text-primary font-semibold text-sm">My Events</Link>
              <Link to="#" className="text-slate-600 hover:text-primary font-medium text-sm transition-colors">Explore</Link>
              <Link to="/profile" className="text-slate-600 hover:text-primary font-medium text-sm transition-colors">Profile</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm w-64 focus:ring-2 focus:ring-primary/20" placeholder="Search events..." type="text"/>
            </div>
            <Link to="/profile" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDomPiBMhSIbi2K1uQVl2xKpr9c6mdft5KRmb4rohIk9gLm27tCgfZs_JRYnAk4rTeOOH8H6WsG-tzjBlnb8Zn1obqXZYCorKp8j0QW7o6sN6WMPJapJo-Iu6oR14MgfH9UZDun1rL50RONFbPNJrzen6gYdkOLkA257LMBK7nhc4RFI5XwyA3bzyuEkHPkXKZ2a-nKmNmYxWDjgm1QeXzj8NqcYmDTxho9pvTDLJEiV_ccjwf9k90y5XD1o5k60IAjJ-HDLqm2rLoE"/>
            </Link>
          </div>
        </div>
      </header>

      {/* Sticky Header with Tabs */}
      <div className="sticky top-[65px] z-40 bg-bg-page pt-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-slate-900 mb-6">Manage Events</h1>
          <div className="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button onClick={() => setActiveTab('active')} className={`pb-3 px-1 font-medium transition-colors ${activeTab === 'active' ? 'text-primary font-bold border-b-4 border-primary' : 'text-slate-500 hover:text-primary'}`}>Active (2)</button>
            <button onClick={() => setActiveTab('requests')} className={`pb-3 px-1 font-medium transition-colors ${activeTab === 'requests' ? 'text-primary font-bold border-b-4 border-primary' : 'text-slate-500 hover:text-primary'}`}>Requests (3)</button>
            <button onClick={() => setActiveTab('past')} className={`pb-3 px-1 font-medium transition-colors ${activeTab === 'past' ? 'text-primary font-bold border-b-4 border-primary' : 'text-slate-500 hover:text-primary'}`}>Past Events</button>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        
        {/* Active Events Section */}
        {activeTab === 'active' && (
          <section className="space-y-6 animate-[fadeInUp_0.4s_ease-out_forwards]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Active Events</h2>
            
            <div className="bg-white rounded-2xl border-l-[6px] border-accent shadow-sm overflow-hidden p-6 flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900"><Link to="/event/1" className="hover:underline">Evening Badminton</Link></h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E0F7F1] text-[#0D9E75] text-xs font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E75] animate-pulse"></span> LIVE
                    </span>
                  </div>
                  <p className="text-accent font-semibold text-sm">Starts in 1h 20m</p>
                </div>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-600 text-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">location_on</span> Koramangala, Bangalore
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-primary">
                    <span className="material-symbols-outlined text-lg">group</span> 2/4 players joined
                  </div>
                </div>
                <div className="flex items-center -space-x-3">
                  <img alt="Participant" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMsKb73nIpXgp-I4hIqX9Auo2DOgMSq1Os8cPe4lfgYZ0GN3o5KawrDjTl9Wx2pXd84OCHmRRsjx5VyYtz41fsfgQNVdVs7W5oRQHAgZeJtp4Fal_8qoOkfFOMTlVRr9fI4SzykwTaXi0i0HwyYKv7PsUG4hGerLiwfWdxn2gGIERkjPjcP5Z3ZLIBAx3cczuKvvTikDQOjAcA05kD-iN5wAuUaJhHJKHdC-F8KqQ8JvOGeF5nBcXgCyrdvveSC6-MPakmJ2gXwNa6"/>
                  <img alt="Participant" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3_JOF9qBeHC9gITsu2y7UBQ-so0DsGPy87Lof5RR_h0EwFjv-U0g0stlld2cxcNvyN4lJidHig_gdfjrCmmevM_qIe_VOPxkALJ5WqoxpQk6ElOZk56L41Egl37ShPUdTIAS-fuD0arSM73W3nMwLnyZI0Gs8WAuz-IBK_WIoIxJp0FwLVCN3WlM4kJvPVsa9stqAKNLk-o40hKqchKdeQSLZ85abPl13TL0a9irwr1GKeqOYyR0V6NPo445z18pc_4YyHr4Mac1f"/>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">+2</div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button onClick={() => setActiveTab('requests')} className="px-5 py-2.5 rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
                    View Requests (3)
                  </button>
                  <button className="px-5 py-2.5 rounded-xl text-red-500 font-bold text-sm hover:bg-red-50 transition-colors">
                    Cancel Event
                  </button>
                </div>
              </div>
              <div className="w-full md:w-48 h-32 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxq9BA_34YEWGJpUp_D2MIwGWZ3hdSUQTqERAfjz7JbTyE4S8mGQR_sCLCmPEq0xBLRzZ1x1TbYJyvQW_Miv1P41lhxCEwrNNebBD4pNgyEAXYgbra16aPQooY4ztSMWdnQgFs7Ekt6qKfpnBazFS1folBJBn2vlwpKr66XMTykJZb_nhsKWd77108vDirkdBLp4uL2Bpbw8qRkbMFkVjORoLzzwHRMTxbwj1ZsMfDLmJPOGFblzMIjrLbvaytcUYO7S4j_2pYFjsk')"}}></div>
              </div>
            </div>
          </section>
        )}

        {/* Requests Section */}
        {activeTab === 'requests' && (
          <section className="space-y-6 animate-[fadeInUp_0.4s_ease-out_forwards]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Pending Requests</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary">history</span>
                <h3 className="font-bold text-slate-800">Evening Badminton <span className="text-slate-400 font-normal">(3 pending)</span></h3>
              </div>
              
              {/* Request Card 1 */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-amber-50 px-4 py-2 flex items-center gap-2 text-amber-700 text-xs font-bold">
                  <span className="material-symbols-outlined text-base">timer</span> Approve within 5 mins or this request expires
                </div>
                <div className="p-5 flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img alt="User" className="w-14 h-14 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTkknb1zrrXKtchzCUTo00i0gtqxTT2XJxllEBL-FXNT2EWg3HHSXQmu1aXhbKyI4h2k8EcBMCXsXjO3R7qLufROIPqlXB3c_Q4hwxg1CP1LrILnnrN-rNgNQr6y60r_iOlT2QB48O88huPLNNZZoqL9wA9uyxuG5_Ib-_4QLjoleM-LvSqwPdR8Cgcmzvd7ewF7JtKsc1et0yqkfOveKrBal0nbOPLTc832YWjRW4ce-Gmc0RFmATO1ymvyqCgwYXmpAVDM6I9jaX"/>
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-0.5 rounded-full border-2 border-white">
                        <span className="material-symbols-outlined text-[10px] block">verified</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900">Alex Rivera</h4>
                        <span className="text-xs text-slate-400 font-normal">Requested 5 mins ago</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-slate-100 rounded-md text-[10px] font-bold text-slate-600">SPORTS</span>
                        <span className="px-2 py-0.5 bg-slate-100 rounded-md text-[10px] font-bold text-slate-600">FITNESS</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-red-500 text-sm font-bold hover:underline transition-all">Decline</button>
                    <button className="bg-[#0D9E75] text-white px-6 py-2 rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg">Approve</button>
                  </div>
                </div>
              </div>

              {/* Request Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex gap-4 items-center">
                  <img alt="User" className="w-12 h-12 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrbDIMunAHr3jNWCocZTlamFHzRb_Byz2AzFx9CpfoS0Pru2Jo-SJ6uAvzdhJkk9XnkW-pWmLHBstFxw3qux2A9qR2fGzulqK_yaEW5n8zQ5ne9O6vLa5k_CCBNLVVhaHcYmlf7UEh8Pa9cN2Ed_Q1pmmt6GEnsfo_2ooHaRUlhhP0MUtkiG2l6yZ-WIPkD7HF2sCCKXUTqvbm7BfsdPf6lxYZnRGZ_mc0UV1z16aP3sW2hrIyUaKVap8MejrPvXXiEl56uhdnA5bB"/>
                  <div>
                    <h4 className="font-bold text-slate-900">Mila Chen</h4>
                    <p className="text-xs text-slate-400">Requested 12 mins ago • Sports, Yoga</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <button className="text-red-500 text-sm font-bold hover:underline">Decline</button>
                  <button className="bg-[#0D9E75] text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:opacity-90">Approve</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Past Events Section */}
        {activeTab === 'past' && (
          <section className="space-y-6 animate-[fadeInUp_0.4s_ease-out_forwards]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Past Event Card 1 */}
              <div className="bg-white rounded-2xl border-l-[6px] border-[#E8E4FF] shadow-sm p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900">Morning Yoga Flow</h3>
                  <p className="text-xs text-slate-400">Oct 24, 2023 • Cubbon Park</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">group</span> 4 attended
                    </span>
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                      4.8 <span className="material-symbols-outlined text-sm fill-current">star</span>
                    </span>
                  </div>
                  <Link to="/event/1" className="text-primary text-xs font-bold hover:underline">View details</Link>
                </div>
              </div>

              {/* Past Event Card 2 */}
              <div className="bg-white rounded-2xl border-l-[6px] border-[#E8E4FF] shadow-sm p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900">Board Game Night</h3>
                  <p className="text-xs text-slate-400">Oct 12, 2023 • HSR Layout</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">group</span> 6 attended
                    </span>
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                      5.0 <span className="material-symbols-outlined text-sm fill-current">star</span>
                    </span>
                  </div>
                  <Link to="/event/2" className="text-primary text-xs font-bold hover:underline">View details</Link>
                </div>
              </div>

            </div>
          </section>
        )}

      </main>

      <footer className="mt-20 border-t border-slate-200 py-10 text-center">
        <p className="text-slate-400 text-sm">© 2023 evora.club • Made for the curious</p>
      </footer>
    </div>
  );
}
