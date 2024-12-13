import express from 'express'

import { getUserDetails, login, logout,sendOTP, verifyOTP } from '../controllers/auth.js';
import { resetPassword, resetPasswordToken } from '../controllers/resetPassword.js';
import { verifyToken } from '../middleware/auth.js';
import limiter from '../middleware/ratelimit.js';

const router = express.Router();

// router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getdetails",verifyToken,getUserDetails)
router.post("/send-otp",limiter,sendOTP)
router.post('/verify-otp', verifyOTP);

router.post("/send-token",limiter,resetPasswordToken)
router.post("/updatePassword",resetPassword)

export default router;
