import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

export default function FaceVerification() {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  }, [webcamRef]);

  const retake = () => {
    setImageSrc(null);
  };

  const submitVerified = () => {
    // Simulate API submission
    console.log('Face verified');
    navigate('/thank-you');
  };

  return (
    <div className="font-sans min-h-screen bg-bg-page flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-primary/10 bg-white px-6 py-4 md:px-10">
        <div className="flex items-center gap-3 text-primary">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm px-2">verified_user</span>
          </div>
          <h2 className="text-text-primary text-xl font-bold tracking-tight">evora.club</h2>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-text-secondary hover:bg-slate-200 transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-xl border border-bg-track overflow-hidden">
          {/* Progress Section */}
          <div className="px-8 pt-8 pb-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <div className="h-2 w-10 rounded-full bg-primary"></div>
                <div className="h-2 w-10 rounded-full bg-primary"></div>
                <div className="h-2 w-10 rounded-full bg-primary"></div>
                <div className="h-2 w-10 rounded-full bg-accent animate-pulse"></div>
                <div className="h-2 w-10 rounded-full bg-slate-200"></div>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step 4 of 5</span>
            </div>
            
            <div className="space-y-2 mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary">One last step — face check</h1>
              <p className="text-text-secondary text-sm leading-relaxed">
                To ensure the safety of our community, we need a quick identity verification. This only takes 10 seconds.
              </p>
            </div>
            
            {/* Viewfinder Component */}
            <div className="relative aspect-[4/5] rounded-2xl border-2 border-dashed border-primary bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
              {!imageSrc ? (
                <>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="absolute inset-0 w-full h-full object-cover"
                    videoConstraints={{ facingMode: "user" }}
                  />
                  {/* Overlay/Guide */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-3/4 aspect-[3/4] border-2 border-primary/40 rounded-[50%] flex items-center justify-center">
                      <div className="w-[90%] aspect-[3/4] border border-primary/20 rounded-[50%]"></div>
                    </div>
                  </div>
                  {/* Content (only show if webcam is loading or as a guide) */}
                  <div className="z-20 text-center px-6 pointer-events-none mt-auto mb-10 pb-4 bg-white/60 rounded-xl">
                    <p className="text-text-primary text-lg font-bold">Position your face here</p>
                    <p className="text-text-secondary text-xs mt-2 max-w-[240px] mx-auto">
                      Align your face within the oval guide and ensure you are in a well-lit area.
                    </p>
                  </div>
                </>
              ) : (
                <img src={imageSrc} alt="Selfie" className="absolute inset-0 w-full h-full object-cover" />
              )}
            </div>
          </div>
          
          {/* Action Footer */}
          <div className="p-8 pt-4">
            {!imageSrc ? (
              <button 
                onClick={capture}
                className="w-full h-14 bg-primary hover:opacity-90 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg active:scale-[0.98]"
              >
                <span className="material-symbols-outlined">photo_camera</span>
                Take Selfie
              </button>
            ) : (
              <div className="flex gap-4">
                <button 
                  onClick={retake}
                  className="flex-1 h-14 bg-slate-100 text-text-primary rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-slate-200 transition-all"
                >
                  Retake
                </button>
                <button 
                  onClick={submitVerified}
                  className="flex-1 h-14 bg-accent text-white rounded-2xl font-bold text-lg flex items-center justify-center hover:opacity-90 transition-all shadow-lg"
                >
                  Submit
                </button>
              </div>
            )}
            
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-xs">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span>Your data is encrypted and secure</span>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Meta */}
      <footer className="p-6 text-center">
        <p className="text-slate-400 text-sm font-medium">
          © 2024 evora.club • Identity Verification Powered by SecureFace
        </p>
      </footer>
    </div>
  );
}
