import React from 'react'
import { ArrowLeft } from 'lucide-react'

export default function ComingSoon({ title = "Coming Soon" }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 max-w-sm w-full p-10 text-center relative overflow-hidden">
        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-evora-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          We are currently working hard behind the scenes to launch this page. Check back soon!
        </p>
        <a 
          href="/"
          className="inline-flex items-center gap-2 text-evora-navy font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to home
        </a>
      </div>
    </div>
  )
}
