// This file acts as a mock API to simulate backend interactions

export const mockApi = {
  // Simulates a user submitting their host application
  submitHostApplication: async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Host Application Submitted to backend:", data);
        resolve({ success: true, message: "Application received" });
      }, 800);
    });
  },

  // Simulates face verification upload
  verifyFace: async (imageSrc) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Face Verification received on backend");
        resolve({ success: true, verified: true });
      }, 1200);
    });
  },

  // Simulates creating an event
  createEvent: async (eventData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("New Event Created:", eventData);
        resolve({ success: true, eventId: Date.now() });
      }, 1000);
    });
  },

  // Simulates fetching event details
  getEventDetails: async (eventId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: eventId,
          title: "Board Game Brunch",
          date: "Tomorrow, 10:00 AM",
          duration: "2 hours",
          location: "Central Park Café",
          spotsTaken: 2,
          spotsTotal: 8,
          host: "Arjun K.",
          description: "We'll be playing Catan and Ticket to Ride. Beginners welcome! Bring your own snacks if possible."
        });
      }, 500);
    });
  }
};
