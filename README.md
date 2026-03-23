<div align="center">

# ⚡ Eveora

### *Spontaneously connect with people around you — in real life.*

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)](https://expressjs.com/)

</div>

---

## 🌍 What is Eveora?

**Eveora** is a real-time social discovery platform that connects you with people physically nearby — spontaneously, effortlessly, and instantly. No scheduling, no planning. Just open the app and discover who's around you right now, ready to connect in person.

Whether you're at a café, a co-working space, a campus, or a city square — Eveora breaks the digital barrier and brings back the magic of real-world human connection.

> *"The best connections happen in person. Eveora just makes them faster."*

---

## ✨ Features

- **📍 Proximity-Based Discovery** — Find people around you in real time using location-aware matching
- **⚡ Spontaneous Connections** — No scheduling needed; connect with nearby users instantly
- **👤 User Profiles** — Showcase who you are with a brief bio, interests, and avatar
- **💬 In-App Messaging** — Break the ice with a quick message before meeting up
- **🔔 Real-Time Notifications** — Get notified when someone nearby is open to connecting
- **🛡️ Privacy Controls** — You control your visibility and who can reach you
- **🌐 Live Presence** — Real-time online/nearby status powered by WebSockets

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React.js (Vite), CSS / Tailwind     |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB (Mongoose ODM)              |
| Real-Time  | Socket.io                           |
| Auth       | JWT + bcrypt                        |
| Location   | Geolocation API + MongoDB Geospatial|
| Hosting    | (TBD — e.g. Vercel / Railway)       |

---

## 📁 Project Structure

```
eveora/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route-level pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # Helper utilities
│   └── public/
│
├── server/               # Express backend
│   ├── controllers/      # Route logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── middleware/        # Auth, error handling
│   └── socket/           # Socket.io events
│
├── .env.example          # Environment variable template
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/likhithb08/evora.git
cd evora
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

Fill in your values in `.env`:

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/eveora

# Auth
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Client
CLIENT_URL=http://localhost:5173
```

### 3. Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 4. Run the App

```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm run dev
```

The frontend will be available at **http://localhost:5173** and the API at **http://localhost:5000**.

---

## 🔌 API Overview

| Method | Endpoint               | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/api/auth/register`   | Register a new user            |
| POST   | `/api/auth/login`      | Login and receive JWT          |
| GET    | `/api/users/nearby`    | Fetch users near your location |
| PUT    | `/api/users/profile`   | Update user profile            |
| POST   | `/api/connect/request` | Send a connection request      |
| GET    | `/api/connect/matches` | Get your current connections   |

---

## 🗺️ Roadmap

- [x] Project scaffolding (MERN)
- [ ] User authentication (JWT)
- [ ] Location-based user discovery
- [ ] Real-time messaging (Socket.io)
- [ ] Connection request system
- [ ] Push notifications
- [ ] Mobile-responsive UI
- [ ] iOS & Android app (React Native)

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please follow the existing code style and write clear commit messages.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Eveora** — *Real connections. Real life. Right now.*

Made with ❤️ by the Eveora Team

</div>
