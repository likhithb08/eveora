import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Mock OTP Database for Demo
const otpStore = new Map();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'evora_demo_secret_key', {
    expiresIn: '30d',
  });
};

export const registerJoiner = async (req, res) => {
  try {
    const { fullName, phone, neighbourhood, activities } = req.body;
    
    // Check if user exists (use upsert logic for demo if no DB)
    let user;
    if (process.env.MONGO_URI) {
      user = await User.findOne({ phone });
      if (!user) {
        user = await User.create({ role: 'join', fullName, phone, neighbourhood, activities });
      }
    }
    
    // Simulate sending OTP
    const mockOtp = '123456';
    otpStore.set(phone, mockOtp);
    console.log(`[SMS MOCK] Sent OTP ${mockOtp} to ${phone}`);

    res.status(200).json({ message: 'Joiner registered, OTP sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registerHost = async (req, res) => {
  try {
    const { fullName, phone, neighbourhood, isAdult } = req.body;

    if (!isAdult) {
      return res.status(400).json({ message: 'Must be 18 to host' });
    }

    let user;
    if (process.env.MONGO_URI) {
      user = await User.findOne({ phone });
      if (!user) {
        user = await User.create({ role: 'host', fullName, phone, neighbourhood });
      } else {
        user.role = 'host';
        user.fullName = fullName;
        user.neighbourhood = neighbourhood;
        await user.save();
      }
    }

    // Simulate sending OTP
    const mockOtp = '123456';
    otpStore.set(phone, mockOtp);
    console.log(`[SMS MOCK] Sent OTP ${mockOtp} to ${phone}`);

    res.status(200).json({ message: 'Host registered, OTP sent', phone });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    
    const storedOtp = otpStore.get(phone);
    if (!storedOtp || storedOtp !== otp) {
      // For demo purposes, we will accept '123456' even if memory is lost or phone is mismatched
      if (otp !== '123456') {
        return res.status(401).json({ message: 'Invalid OTP code' });
      }
    }
    
    // Clear OTP
    otpStore.delete(phone);

    let userTokenId = 'demo-user-id';
    if (process.env.MONGO_URI) {
      const user = await User.findOne({ phone });
      if (user) {
        user.phoneVerified = true;
        await user.save();
        userTokenId = user._id;
      }
    }

    res.status(200).json({ 
      message: 'OTP verified successfully', 
      token: generateToken(userTokenId) 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyFace = async (req, res) => {
  try {
    // In reality, req.user would exist here from an Auth Middleware pulling the JWT
    // Mock simulation
    console.log('[BIOMETRIC MOCK] Face check passed');
    res.status(200).json({ message: 'Face successfully verified' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
