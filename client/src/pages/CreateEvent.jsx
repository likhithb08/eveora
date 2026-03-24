import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: 'Today',
    time: '06:00 PM',
    duration: '1 hr',
    people: 4,
    venueType: 'Public venue',
    venueName: '',
    address: '',
    waLink: ''
  });

  const updateForm = (key, value) => setFormData(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Event Data:', formData);
    navigate('/event/1'); // redirect to event detail
  };

  return (
    <div className="bg-bg-page text-slate-900 font-sans min-h-screen">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3 md:px-10">
        <div className="max-w-[1200px] mx-auto flex items-center gap-4">
          <Link to="/dashboard" className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center">
            <span className="material-symbols-outlined text-slate-700">arrow_back</span>
          </Link>
          <h1 className="text-[20px] font-semibold text-slate-900">Post a New Event</h1>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto p-4 md:p-10 pb-32">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN: FORM */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            
            {/* Section 1: Activity */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">1</span>
                <h2 className="text-lg font-bold">What's the activity?</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Sports', 'Gaming', 'Coffee', 'Dining', 'Music', 'Movie', 'Travel', 'Fitness'].map((act) => (
                  <button type="button" key={act} className={`flex flex-col items-center justify-center p-3 rounded-xl border ${formData.activity === act ? 'border-2 border-accent bg-accent/5' : 'border-slate-200 hover:border-accent/50'} transition-all gap-1`} onClick={() => updateForm('activity', act)}>
                    <span className={`material-symbols-outlined ${formData.activity === act ? 'text-accent' : 'text-slate-600'}`}>
                      {act === 'Coffee' ? 'coffee' : act === 'Sports' ? 'sports_tennis' : act === 'Gaming' ? 'sports_esports' : act === 'Dining' ? 'restaurant' : act === 'Music' ? 'music_note' : act === 'Movie' ? 'movie' : act === 'Travel' ? 'flight' : 'fitness_center'}
                    </span>
                    <span className={`text-sm ${formData.activity === act ? 'font-bold text-accent' : 'font-medium'}`}>{act}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Event Title</label>
                  <input required value={formData.title} onChange={e => updateForm('title', e.target.value)} className="w-full rounded-xl border-slate-200 focus:border-accent focus:ring-accent p-3 text-sm" maxLength="60" placeholder="e.g. Badminton doubles — need 2 players" type="text"/>
                  <span className="text-[10px] text-right text-slate-400">{formData.title.length}/60</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Description</label>
                  <textarea required value={formData.description} onChange={e => updateForm('description', e.target.value)} className="w-full rounded-xl border-slate-200 focus:border-accent focus:ring-accent p-3 text-sm resize-none" maxLength="200" placeholder="Any extra details..." rows="3"></textarea>
                  <span className="text-[10px] text-right text-slate-400">{formData.description.length}/200</span>
                </div>
              </div>
            </section>

            {/* Section 2: Time */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">2</span>
                <h2 className="text-lg font-bold">When is it?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Date</label>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => updateForm('date', 'Today')} className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-colors ${formData.date === 'Today' ? 'bg-accent text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>Today</button>
                    <button type="button" onClick={() => updateForm('date', 'Tomorrow')} className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-colors ${formData.date === 'Tomorrow' ? 'bg-accent text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>Tomorrow</button>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Start Time</label>
                  <select value={formData.time} onChange={e => updateForm('time', e.target.value)} className="w-full rounded-lg border-slate-200 focus:border-accent focus:ring-accent text-sm p-2 outline-none">
                    <option>06:00 PM</option><option>06:30 PM</option><option>07:00 PM</option><option>07:30 PM</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-slate-700">Duration</label>
                <div className="flex flex-wrap gap-2">
                  {['30 min', '1 hr', '1.5 hr', '2 hr', '2+ hr'].map(dur => (
                    <button type="button" key={dur} onClick={() => updateForm('duration', dur)} className={`px-4 py-1.5 rounded-full border text-xs transition-colors ${formData.duration === dur ? 'border-2 border-accent bg-accent/5 text-accent font-bold' : 'border-slate-200 font-medium hover:bg-slate-50'}`}>{dur}</button>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: People */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
               <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">3</span>
                <h2 className="text-lg font-bold">How many people?</h2>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-1 border border-slate-100">
                  <button type="button" onClick={() => updateForm('people', Math.max(2, formData.people - 1))} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-slate-600 transition-all">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="text-xl font-bold w-4 text-center">{formData.people}</span>
                  <button type="button" onClick={() => updateForm('people', Math.min(20, formData.people + 1))} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-slate-600 transition-all">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Section 4: Location */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">4</span>
                <h2 className="text-lg font-bold">Where is it?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[{icon: 'location_on', label: 'Public venue'}, {icon: 'home', label: 'My place'}, {icon: 'park', label: 'Open space'}].map(type => (
                  <button type="button" key={type.label} onClick={() => updateForm('venueType', type.label)} className={`flex flex-col items-center p-3 rounded-xl border ${formData.venueType === type.label ? 'border-2 border-accent bg-accent/5' : 'border-slate-200 hover:border-slate-300'} gap-1`}>
                    <span className={`material-symbols-outlined ${formData.venueType === type.label ? 'text-accent' : 'text-slate-500'}`}>{type.icon}</span>
                    <span className={`text-xs ${formData.venueType === type.label ? 'font-bold text-accent' : 'font-medium text-slate-600'}`}>{type.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Venue Name</label>
                  <input required value={formData.venueName} onChange={e => updateForm('venueName', e.target.value)} className="w-full rounded-xl border-slate-200 focus:border-accent focus:ring-accent p-3 text-sm" placeholder="e.g. Giga Koramangala" type="text"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Full Address</label>
                  <textarea required value={formData.address} onChange={e => updateForm('address', e.target.value)} className="w-full rounded-xl border-slate-200 focus:border-accent focus:ring-accent p-3 text-sm resize-none" placeholder="Include floor, building name, etc." rows="2"></textarea>
                </div>
                <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                  <span className="material-symbols-outlined text-amber-600 text-[20px]">warning</span>
                  <p className="text-xs text-amber-800 font-medium">This is only shared with people you approve. Never public.</p>
                </div>
              </div>
            </section>

             {/* Section 5: WhatsApp */}
             <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">5</span>
                <h2 className="text-lg font-bold">WhatsApp Group</h2>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">WA Link</label>
                <input value={formData.waLink} onChange={e => updateForm('waLink', e.target.value)} className="w-full rounded-xl border-slate-200 focus:border-accent focus:ring-accent p-3 text-sm" placeholder="https://chat.whatsapp.com/..." type="text"/>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: PREVIEW */}
          <div className="w-full lg:w-[40%] hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">This is how your event will look</span>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md border-l-[3px] border-primary transition-all hover:shadow-lg">
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <span className="text-sm font-bold text-slate-800">{formData.activity || 'Activity'}</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{formData.title || 'Event Title Here'}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">Hosted by <span className="font-semibold text-slate-700">You</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-1 text-slate-600">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        <span className="text-xs font-semibold">{formData.date}, {formData.time}</span>
                      </div>
                    </div>
                    <button type="button" className="px-4 py-2 rounded-lg border-2 border-accent text-accent text-xs font-bold hover:bg-accent/5 transition-colors">
                      Request to Join
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 flex gap-3">
                <span className="material-symbols-outlined text-primary">tips_and_updates</span>
                <p className="text-xs text-primary leading-relaxed">
                  <span className="font-bold">Pro-tip:</span> Detailed descriptions get 40% more join requests.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Sticky Bar */}
          <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-bg-track px-4 py-4 md:px-10 z-50">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium hidden md:block">Your event expires 30 mins after start time</span>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button type="button" className="flex-1 md:flex-none px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Save Draft</button>
                <button type="submit" className={`flex-[2] md:flex-none px-8 py-3 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors ${formData.title ? 'bg-accent hover:opacity-90' : 'bg-accent/60 cursor-not-allowed'}`}>
                  Post Event
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </footer>
        </form>
      </main>
    </div>
  );
}
