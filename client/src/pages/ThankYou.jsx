import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center p-4 bg-bg-page">
      <main className="w-full max-w-[440px] bg-white rounded-3xl p-12 text-center shadow-[0_10px_25px_-5px_rgba(45,29,181,0.05),0_8px_10px_-6px_rgba(45,29,181,0.05)] animate-[fadeInUp_0.6s_ease-out_forwards]">
        
        {/* Animated Status Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#E0F7F1] border-[3px] border-[#0D9E75] flex items-center justify-center">
            <svg className="w-10 h-10 text-[#0D9E75] animate-[checkmark-draw_0.8s_ease-in-out_forwards_0.2s] [stroke-dasharray:100] [stroke-dashoffset:100]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Application received! 🎉</h1>
          <p className="text-text-muted text-base leading-relaxed mb-6">
            You're one of our founding host candidates. We review every application personally and will WhatsApp you within 24 hours.
          </p>
          
          <div className="bg-[#F0EEFF] rounded-xl py-4 px-6 mb-8 inline-block w-full">
            <span className="text-primary font-semibold text-lg">Your spot: #34 of 50</span>
          </div>
        </section>

        {/* Primary Action */}
        <section className="space-y-4 mb-10">
          <button className="w-full h-[52px] bg-[#25D366] hover:bg-opacity-90 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>
            Join our WhatsApp Community →
          </button>
          <p className="text-text-muted text-xs px-2 leading-tight">
            Get updates, meet early members, see the first events go live
          </p>
        </section>

        {/* Dashboard Navigation */}
        <section className="mb-8">
          <Link to="/dashboard" className="w-full block bg-primary text-white font-semibold py-3 rounded-xl hover:bg-opacity-90 transition-all">
            Go to Dashboard
          </Link>
        </section>

        {/* Share Row */}
        <section className="border-t border-gray-100 pt-8" data-purpose="share-section">
          <p className="text-sm font-medium text-gray-700 mb-4">Know someone who'd love this?</p>
          <div className="flex justify-center gap-4">
            <button className="w-11 h-11 rounded-full bg-[#F0EEFF] flex items-center justify-center text-primary hover:bg-opacity-80 transition-colors" title="Share on WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.185-.573c.948.517 2.031.887 3.146.887 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.729-5.768-5.729zm3.39 8.161c-.134.375-.678.683-1.041.764-.313.069-.724.123-1.168-.113-.254-.135-.571-.264-.975-.445-1.72-.767-2.846-2.515-2.932-2.629-.085-.114-.694-.925-.694-1.763 0-.838.438-1.25.594-1.42.155-.17.34-.213.453-.213.113 0 .226 0 .325.005.106.005.25.008.388.341.141.341.481 1.177.523 1.262.042.085.071.184.014.298-.057.114-.113.198-.184.283-.071.085-.141.155-.226.269-.085.114-.17.227-.085.383.085.156.377.621.81 1.006.558.497 1.03.651 1.172.722.141.071.226.057.311-.042.085-.099.368-.425.466-.567.099-.141.198-.113.34-.056.141.057.893.421 1.049.499.156.078.255.114.297.184.042.071.042.411-.092.786z"></path></svg>
            </button>
            <button className="w-11 h-11 rounded-full bg-[#F0EEFF] flex items-center justify-center text-primary hover:bg-opacity-80 transition-colors" title="Copy Link">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </button>
            <button className="w-11 h-11 rounded-full bg-[#F0EEFF] flex items-center justify-center text-primary hover:bg-opacity-80 transition-colors" title="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.26-2.911.556-.788.307-1.457.718-2.123 1.384-.666.666-1.077 1.335-1.384 2.123-.296.763-.499 1.634-.556 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.148.556 2.911.307.788.718 1.457 1.384 2.123.666.666 1.335 1.077 2.123 1.384.763.296 1.634.499 2.911.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.26 2.911-.556.788-.307 1.457-.718 2.123-1.384.666-.666 1.077-1.335 1.384-2.123.296-.763.499-1.634.556-2.911.058-1.28.072-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            </button>
          </div>
        </section>

        <footer className="mt-12">
          <Link to="/" className="text-text-muted text-sm hover:text-primary transition-colors flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to evora.club
          </Link>
        </footer>
      </main>
      
      {/* Required CSS for animations is added dynamically here to avoid cluttering global variables */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes checkmark-draw {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
