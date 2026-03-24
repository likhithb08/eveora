import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HostApplication() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    instagram: '',
    neighbourhood: '',
    whyGreatHost: ''
  });
  
  const [selectedCategories, setSelectedCategories] = useState(['Sports', 'Food']);
  const [frequency, setFrequency] = useState('1-2 times/week');

  const categories = ['Sports', 'Gaming', 'Coffee', 'Food', 'Fitness', 'Study', 'Music', 'Creative'];
  const frequencies = ['1-2 times/week', '3-4 times/week', 'Almost daily'];

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategories.length < 2) {
      alert('Please select at least 2 categories.');
      return;
    }
    // Simulate API call, then redirect to face verification
    console.log('Submitted', { ...formData, selectedCategories, frequency });
    navigate('/face-verification');
  };

  return (
    <div className="font-sans pb-24">
      {/* Hero Section */}
      <header className="bg-primary w-full py-[60px] px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <span className="eyebrow bg-white text-primary px-3 py-1 rounded-full inline-block">
              Only 50 spots available
            </span>
            <h1>Become a Founding Host</h1>
            <p className="text-light-purple text-lg max-w-lg leading-relaxed">
              Be the pioneer of your neighborhood. We're hand-selecting 50 community leaders in Koramangala and HSR Layout to launch the future of social clubs.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 w-full flex flex-col gap-4 max-w-sm">
            <div className="benefit-card">
              <span className="text-xl">🏅</span>
              <span><strong>Founding Host badge</strong> — forever on your profile</span>
            </div>
            <div className="benefit-card">
              <span className="text-xl">⚡</span>
              <span><strong>First access</strong> — before public launch</span>
            </div>
            <div className="benefit-card">
              <span className="text-xl">🎯</span>
              <span><strong>Shape the product</strong> — your feedback matters</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Tracker */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <div className="w-full max-w-3xl mx-auto text-center">
          <p className="text-text-secondary font-semibold mb-3">31 of 50 founding host spots filled</p>
          <div className="w-full h-2 bg-bg-track rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full" style={{ width: '62%' }}></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <main className="py-16 px-4 flex flex-col items-center">
        <div className="form-container">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Full Name</label>
                <input required className="input-field" placeholder="John Doe" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Phone Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-[#E8E4FF] bg-gray-50 text-text-secondary text-sm">
                    +91
                  </span>
                  <input required type="tel" className="input-field !rounded-l-none" placeholder="00000 00000" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1">Instagram Handle</label>
                <input className="input-field" placeholder="@yourhandle" value={formData.instagram} onChange={(e) => setFormData({...formData, instagram: e.target.value})} />
                <p className="text-text-muted text-[12px] mt-1">Optional but preferred for profile verification.</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Neighbourhood</label>
              <select required className="input-field text-text-primary" value={formData.neighbourhood} onChange={(e) => setFormData({...formData, neighbourhood: e.target.value})}>
                <option value="">Select your location</option>
                <option value="Koramangala">Koramangala</option>
                <option value="HSR Layout">HSR Layout</option>
                <option value="Indiranagar">Indiranagar</option>
                <option value="Jayanagar">Jayanagar</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">Event Categories (Pick at least 2)</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <div 
                    key={cat} 
                    onClick={() => toggleCategory(cat)}
                    className={`chip ${selectedCategories.includes(cat) ? 'chip-active' : 'chip-inactive'}`}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">Hosting Frequency</label>
              <div className="flex bg-[#F0EEFF] p-1 rounded-full gap-1">
                {frequencies.map((freq) => (
                  <div 
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={`radio-pill ${frequency === freq ? 'bg-primary text-white font-semibold' : 'text-text-secondary'}`}
                  >
                    {freq}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Why would you be a great host?</label>
              <textarea 
                required
                className="input-field resize-none text-text-primary" 
                placeholder="Tell us about your hosting style or past experiences..." 
                rows="4"
                value={formData.whyGreatHost}
                onChange={(e) => setFormData({...formData, whyGreatHost: e.target.value})}
              ></textarea>
              <div className="text-right mt-1">
                <span className="text-text-muted text-xs">{formData.whyGreatHost.length}/200</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button type="submit" className="w-full bg-accent text-white h-[56px] rounded-lg font-semibold text-[17px] flex items-center justify-center hover:opacity-90 transition-opacity">
                Apply to be a Founding Host →
              </button>
              <p className="text-center text-text-muted text-xs px-4">
                We review every application personally. Approved hosts will receive a welcome kit and invite code within 48 hours.
              </p>
            </div>
          </form>
        </div>
      </main>
      
      {/* Footer / Social Proof */}
      <footer className="pb-24 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E8E4FF] text-center">
            <p className="text-xs italic text-text-secondary mb-3">"I love hosting game nights in HSR. Evora makes it so much easier to find people!"</p>
            <span className="text-primary font-bold text-sm">— Arjun (HSR Layout)</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E8E4FF] text-center">
            <p className="text-xs italic text-text-secondary mb-3">"Being a founding host allowed me to grow my book club from 3 to 30 people."</p>
            <span className="text-primary font-bold text-sm">— Meera (Koramangala)</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E8E4FF] text-center">
            <p className="text-xs italic text-text-secondary mb-3">"The vibe is amazing. Highly recommend applying before the spots are gone."</p>
            <span className="text-primary font-bold text-sm">— Rohan (Indiranagar)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
