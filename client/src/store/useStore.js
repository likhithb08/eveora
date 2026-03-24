import { create } from 'zustand';

// Simple global state for demonstration (matching mock APIs)
const useStore = create((set) => ({
  user: {
    id: 'u1',
    name: 'Alex Thompson',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrtzqZM1l_sSG76iuTg1SQRFCX5cVKYEzOj8vEb2Wwgc1CaMuzfNfciI6QRQRbcIm_O3t5Yu__uQTg3rQLRjSYIiC5RbYZSr1aWFB8NXMpqIRzG-OarEsAPJua85hfVScHZH4W0Sjmfm-WWS4XndcLd8jFPxE-w3Q95ejUwbPrWJgVyT0qY4qAOswij_gk2StTGGYlRw_pWNBw1SJZmWTUHL72HL6MhlIQfqL6OIY3xWZyj25pt2jI8mvos7wAcq4XHJynEDEDSbGd',
    role: 'Founding Host',
    rating: 4.9,
    eventsHosted: 12,
    eventsJoined: 48,
    isVerified: true,
    location: 'Koramangala',
  },
  
  // Dummy initial events
  events: [
    {
      id: 1,
      title: 'Board Games & Chill',
      date: 'Nov 24',
      time: '10:00 AM',
      duration: '2 hours',
      location: 'Central Park Café',
      attendees: 8,
      maxAttendees: 8,
      status: 'past',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEVJsa4Wwl51vsemXkTTsvCnxaiCo948vkuPhk8QjW-tkIZ91r1wCxyvbZXWm3txLbVKv2DO17vZZqu8_4JGwxtmo69f-zZ4YeAaiG3Pi-KxdPgBPZ-Tx5W2Zese6D5tp454EejTU9gDIIab7IRww0gzcRKw2YoyQGKLwDnlTbWUrZpEEhxKeZe5wPMVGvgyV3J1QzVA0tCEaKMfIv2mYD0TODdnDT8VBpqoCNM0EPCU7TpsRLmyqpiMT9PVKs7ThsMBY7_CNXMBL8'
    },
    {
      id: 2,
      title: 'Midweek Techno Session',
      date: 'Oct 12',
      time: '08:00 PM',
      duration: '3 hours',
      location: 'HSR Layout',
      attendees: 15,
      maxAttendees: 20,
      status: 'past',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOlJ1vRi_gBqS6osSVxGEubGO6e3V2Ew6eTxTnKy0nnv7NNBfGB0MpoUMsZgHH67FZCBXHcge6vPUv1rTPHki8ZjyYwdM1GyjD6SC_9LH8e1P1mm8R-S0WuS-gu6zuoplc8TbHAyh5JjECHMf1RdA3Bvz-KcbcEF0Dj2viGFP7kMw-ILoA2ctde-6sP5gguBd99T5Xi0U2hlMl3T0QgvmoBcqJ6qn6pz992RmxKTbzZVzHt6yQk5dx1ffcZZd2GtEZBxZa8sNmNdbs'
    }
  ],
  joinRequests: [
    { id: 101, eventId: 3, user: 'Alex Rivera', skills: ['SPORTS', 'FITNESS'], status: 'pending', timeAgo: '5 mins ago' },
    { id: 102, eventId: 3, user: 'Mila Chen', skills: ['SPORTS', 'YOGA'], status: 'pending', timeAgo: '12 mins ago' }
  ],

  addEvent: (newEvent) => set((state) => ({ events: [...state.events, newEvent] })),
  removeEvent: (eventId) => set((state) => ({ events: state.events.filter(e => e.id !== eventId) })),
  approveRequest: (reqId) => set((state) => ({ joinRequests: state.joinRequests.filter(r => r.id !== reqId) })),
  declineRequest: (reqId) => set((state) => ({ joinRequests: state.joinRequests.filter(r => r.id !== reqId) }))
}));

export default useStore;
