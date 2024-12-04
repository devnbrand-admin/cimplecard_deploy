import express from 'express'

import { getUserDetails, login, logout,sendOTP, verifyOTP } from '../controllers/auth.js';
import { resetPassword, resetPasswordToken } from '../controllers/resetPassword.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getdetails",verifyToken,getUserDetails)
router.post("/send-otp",sendOTP)
router.post('/verify-otp', verifyOTP);

router.post("/send-token",resetPasswordToken)
router.post("/updatePassword",resetPassword)

export default router;
