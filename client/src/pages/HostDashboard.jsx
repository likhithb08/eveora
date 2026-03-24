import { Link } from 'react-router-dom';

export default function HostDashboard() {
  return (
    <div className="bg-bg-page min-h-screen font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-bg-track h-16 flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 bg-primary rounded-lg">
              <span className="material-symbols-outlined text-white text-xl">bolt</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="text-primary">evora</span><span className="text-accent">.club</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/create-event" className="hidden md:flex items-center gap-2 bg-accent hover:opacity-90 text-white px-5 py-2 rounded-full font-semibold transition-all">
              <span className="material-symbols-outlined text-sm">add</span>
              <span>Create Event</span>
            </Link>
            <Link to="/profile" className="size-10 rounded-full border-2 border-bg-track overflow-hidden cursor-pointer">
              <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ZiS8WtV5rCXlNQrblCtwnj6DPSD5_A7BZchZOwCroZujz7wG0kPMkO8c0p_bzFSvNBLAXWeNiEGVibe8-_9NenpSIOga0Bk3_mLbrDYTDSlNfgKx3lxjF8BPE9JkkV6vEvKWLTM4K0dn1unuLvs1xyOfXYt_IT0WNjgaWB5fVg60BWGgmzLxwJOfH3gtZYkzG6Yx8rD5m4Jxd9bSjKSWtNxazayUCpvXRfweLemGYHyME7CjtUaHLBbwS6hO4icB7v78azzU8C9O"/>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="col-span-12 md:col-span-3">
            <nav className="flex flex-col gap-1">
              <Link to="/dashboard" className="text-primary bg-primary/5 flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors">
                <span className="material-symbols-outlined fill-1">dashboard</span>
                Dashboard
              </Link>
              <Link to="/my-events" className="text-text-muted flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined">calendar_today</span>
                My Events
              </Link>
              <Link to="#" className="text-text-muted flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined">group_add</span>
                <div className="flex flex-1 justify-between items-center">
                  <span>Join Requests</span>
                  <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full">4</span>
                </div>
              </Link>
              <Link to="/profile" className="text-text-muted flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined">settings</span>
                Profile Settings
              </Link>
              <Link to="#" className="text-text-muted flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined">bar_chart</span>
                Analytics
              </Link>
            </nav>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-primary to-indigo-900 rounded-2xl text-white">
              <p className="text-sm opacity-80 mb-2">Host Tip</p>
              <p className="font-medium text-sm leading-relaxed">Regular events increase your rating and visibility in the local community!</p>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="col-span-12 md:col-span-9 flex flex-col gap-8">
            
            {/* Welcome & Stats */}
            <div>
              <h2 className="text-[32px] font-bold text-slate-900 mb-6">Welcome back, Vikram 👋</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-bg-track p-6 rounded-2xl flex flex-col gap-1">
                  <span className="text-text-muted text-sm font-medium">Total Events Hosted</span>
                  <span className="text-2xl font-bold text-primary">12</span>
                </div>
                <div className="bg-white border border-bg-track p-6 rounded-2xl flex flex-col gap-1">
                  <span className="text-text-muted text-sm font-medium">People Met</span>
                  <span className="text-2xl font-bold text-primary">48</span>
                </div>
                <div className="bg-white border border-bg-track p-6 rounded-2xl flex flex-col gap-1">
                  <span className="text-text-muted text-sm font-medium">Host Rating</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">4.9/5</span>
                    <span className="material-symbols-outlined text-yellow-400 text-xl fill-1">star</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live & Upcoming Events */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Live & Upcoming Events</h3>
                <Link to="/my-events" className="text-primary font-semibold text-sm hover:underline">View All</Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                
                {/* Active Event Card */}
                <div className="bg-white p-5 rounded-2xl border border-bg-track border-l-[3px] border-l-primary flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-green-600 text-xs font-bold uppercase tracking-wider">Live Now</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">5km Evening Run</h4>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-text-muted text-sm">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">location_on</span>
                      <span>1.2 km away</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">directions_walk</span>
                      <span>~14 min walk</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50">
                    <div className="flex -space-x-2">
                      <img className="size-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD77SDaVIMWZ1KnKf8Jq0gGU3U4TPppe_zuNhc20K38GjDRAMQvl2EUDJKacFGWu1af0oTtdtNfjduzaABRkNitw11rXobyRzKaVUgYrsOEaw5zoyPtlE-1yJMRiyqdh-aWEd-nzHQHX-kg-_uuN12MCIxNHwdcucXO_Zfb_L6nOxG34ve3fxe6uqwfJnzGYQI_818I0jvTu15Bd8SwvNHSPPnncwIjDpQvyPHtg1bh-w9Y3ab-ApCe5MYhRo4tKwHcVkOS5iDRtO59" alt="User" />
                      <img className="size-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcVcuYxYO4yLBdIs8diRjpJ7dWAqnt5_tm49HMESWNVK3Wx29waMbxZfgwVSMbqweuJ0kXHWAiBBXQJOcd8ENhIE11fXddsQL18YDXnd53VqQuQ-CzvMmEkVnsmKbYQt4kFLoVbsK3NbG_hIcrLy7Qh5nNu-MXTcHnFHCYK9Ivgd_dTjuIV1s_ZgNdGvqXIY-0sPrvcZ_1MnqTeBaXKHMUlAWHNRKuJ8WCjQUu-Prno0MvXUDG35scyaPIS-uiZ33RRi90ih47SULc" alt="User" />
                      <img className="size-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBguCxZY83UjohHV_-vX5K7ocIESjRvBqIMLOJnNjf736FFiC8k50XgIZigkQ5tb02UHIaV2WksaHN_Czq6dD9VbfYHEFobgudyuIxM6IOghxI6cwccEOFs4uReNPLttUfVOEy3jMzvrd_ycRvPlQ6Lbq9kJoZUWNcEtLEa-KWf69iIeIiF90HWHpMh2Ty7-YMhl9yet7wSV_TkSRRt0_hq6bl_TipTvBGQuUsZT1nm2Q6ZmpW_b-D81xpi7n4D1_S-mjR_GEKb2C2q" alt="User" />
                      <div className="size-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">+8</div>
                    </div>
                    <Link to="/event/1" className="px-4 py-2 rounded-xl text-primary border border-primary/20 font-semibold text-sm hover:bg-primary/5 transition-colors">
                      Manage Event
                    </Link>
                  </div>
                </div>

                {/* Upcoming Event Card */}
                <div className="bg-white p-5 rounded-2xl border border-bg-track border-l-[3px] border-l-gray-300 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-text-muted text-xs font-bold uppercase tracking-wider">Tomorrow, 10:00 AM</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Board Game Brunch</h4>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-text-muted text-sm">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">location_on</span>
                      <span>Central Park Café</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">group</span>
                      <span>6 Joined</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50">
                    <div className="flex -space-x-2">
                      <img className="size-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM8ASYXdSesQHPjVAvOYxboYGHSZVo5A24KcaoEtpm3N5njxnc59SJDpuqDbsTj_zh4hvXD6YNpCma3M3Alxgzf3CQFPzV7CmKaudGt3zKyN-hAuSFb2N2V65th2TbggMp5RBXp19lSZDiaR3Gq7qlRQGL3ckLXeQ3HalCP9iug73ajjMAfeLmSyd8IieCw71r5peNyV8Cg2-Ro5ClF5lJTs12a9RcGCBv38DozgIJDc5CIatyJ4kNTzxb9AH-KVQy1kzXGNhEbO3V" alt="User" />
                      <img className="size-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByOLrhS1eA_WQe2FOjZwMJiYbW_CHumo0vJQQMDP_EJmJZwfWG2oOJtVQXD_zbmnd0hqBkrqriFE7iI3e_pv_zR4hx5MEeqv8YtAl4_M-wn1AW1TH75-tCNNtHpsn1BRMTthpn3pEhBxtha621v2b8NIlROAX1FsLggB_1-i6x-Ut67RHHSCYjim-MnvNa1as0Jft_rVkRtcm_4wtfxf0Jf_fq4_QeJ-351euZJp1em9515kq5121s4koHm2uQ6aXXMDcUvX__gket" alt="User" />
                      <div className="size-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">+4</div>
                    </div>
                    <Link to="/event/2" className="px-4 py-2 rounded-xl text-primary border border-primary/20 font-semibold text-sm hover:bg-primary/5 transition-colors">
                      Manage Event
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Pending Requests */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Pending Requests (4)</h3>
              </div>
              <div className="bg-white border border-bg-track rounded-2xl overflow-hidden">
                <div className="flex flex-col">
                  
                  {/* Request Row 1 */}
                  <div className="p-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-gray-200 overflow-hidden">
                        <img alt="Arjun" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGOwrPWX6zwRi7qb6p9VXzorctKcgKkCqDkt5kNBvbw-KKFPUCzR53x5__SKcnFynGTXSq-MFtmf6xCihZySBnAUaG--vMwJ802AogXDzBSFefzfH_pn59LlSxQ1iWMGMtmQz-zTb5U4UCXlBNulSkaMKPZMa34LicAmb-6KRtQq0Cx_DH_c7B4VVtsI_A5JAoIuGLd2LXKaHmhXciTl8Dp1htyRp12lTa_Whdfv_M2so_A9P71iBmz195inTpPBpR0uLVzxTOD-J2"/>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Arjun Singh</p>
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">Sports</span>
                          <span>• 3 mutual friends</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-red-500 text-sm font-semibold px-3 py-2 hover:bg-red-50 rounded-lg transition-colors">Decline</button>
                      <button className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition-colors">Approve</button>
                    </div>
                  </div>

                  {/* Request Row 2 */}
                  <div className="p-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-gray-200 overflow-hidden">
                        <img alt="Priya" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVsf-Tj2g7IQPhlVwtNnumW-_OgyVj8CYEhvHBYRaJPtaF39Z0IDReTj4ZaFnlQy4xcI8LBL7BC92mhS2G7ly6VKPPltSJNNCard7U3LTGY-oyOQ32DXXfjLTLcJHll9dER0cZ76TZKKGf5pikSlTbMfoXmLNFdvBdZMQ4m0NyF_opmiUslssix-9-Yh99e6C-HQXlrT7uEUQiMYN1IiBadjSyDwrGxpMlafCaoeh1IoWJbbFTsYOVEKYsy5cJj_snIoXx1Ow-oi1E"/>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Priya Sharma</p>
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">Outdoors</span>
                          <span>• 1 mutual friend</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-red-500 text-sm font-semibold px-3 py-2 hover:bg-red-50 rounded-lg transition-colors">Decline</button>
                      <button className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition-colors">Approve</button>
                    </div>
                  </div>

                  {/* Request Row 3 */}
                  <div className="p-4 flex flex-wrap items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-gray-200 overflow-hidden">
                        <img alt="Rahul" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-hirgF9BAJOoeV3itZvI4iEkKRO0kOcnsjRG_nBgylKwxZndhDb7tR9jis27fRLSrSm2hYh6xTjIWgMd6fRrECLQS7qIHOvUE31oEsXQlRmocrFMBmfS9vKTu_EFH-YihH246BCyYPw6iugioEYossCcddJemUlkKOvYFh4iTBqmBY3UzLAy20O36tLL7zEdh035EaAEyGyhEKp9ALJFzcjeFplhix8UloermjaiHtB16DQXNfsWKK4bnrJT8_LoHntSqS5C7h4TW"/>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Rahul Mehta</p>
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">Tech</span>
                          <span>• New to the app</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-red-500 text-sm font-semibold px-3 py-2 hover:bg-red-50 rounded-lg transition-colors">Decline</button>
                      <button className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition-colors">Approve</button>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <Link to="/create-event" className="bg-accent text-white size-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-3xl">add</span>
        </Link>
      </div>
    </div>
  );
}
