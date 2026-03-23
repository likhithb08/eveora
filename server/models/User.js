import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ['host', 'join'] },
  fullName: { type: String },
  phone: { type: String, unique: true, sparse: true },
  phoneVerified: { type: Boolean, default: false },
  faceIdentityVerified: { type: Boolean, default: false },
  avatarUrl: { type: String },
  neighbourhood: { type: String }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
