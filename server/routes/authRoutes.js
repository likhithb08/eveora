import express from 'express';
import { registerJoiner, registerHost, verifyOtp, verifyFace } from '../controllers/authController.js';

const router = express.Router();

router.post('/joiner', registerJoiner);
router.post('/host', registerHost);
router.post('/verify-otp', verifyOtp);
router.post('/verify-face', verifyFace);

export default router;
