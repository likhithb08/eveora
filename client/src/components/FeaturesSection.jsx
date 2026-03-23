import React from 'react'
import { MapPin, ShieldCheck, MessageCircleOff } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Hyper-Local',
    description:
      'We focus on activities within a 3km radius. If you can\'t walk there in 20 mins, it\'s not a micro-event.',
    iconColor: 'text-evora-orange',
    iconBg: 'bg-orange-50',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Community',
    description:
      'No bots, no spam. Every host is verified through their professional profiles to ensure a safe experience.',
    iconColor: 'text-evora-navy',
    iconBg: 'bg-indigo-50',
  },
  {
    icon: MessageCircleOff,
    title: 'No Chat Fatigue',
    description:
      'Events have a simple Request-Accept flow. Once accepted, you get the location and a timed group chat.',
    iconColor: 'text-evora-navy',
    iconBg: 'bg-indigo-50',
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="flex flex-col gap-4 group animate-slide-up"
              >
                <div className={`w-12 h-12 rounded-2xl ${f.iconBg} flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${f.iconColor}`} />
                </div>
                <h3 className="text-evora-navy text-xl font-bold">{f.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
