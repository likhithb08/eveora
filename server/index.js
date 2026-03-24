import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Evora API is running',
    timestamp: new Date().toISOString(),
  })
})

// Mounted feature routes
// app.use('/api/events', eventsRouter)
app.use('/api/v1/auth', authRoutes)

// Connect to MongoDB and start server
const connect = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI)
      console.log('✅ Connected to MongoDB')
    } else {
      console.warn('⚠️  MONGO_URI not set — skipping DB connection')
    }
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('❌ Failed to connect:', err)
    process.exit(1)
  }
}

connect()
