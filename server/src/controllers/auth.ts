import prisma from "../DB/dbconfig.js";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { sendOtpEmail } from "../utils/mailSender.js";
dotenv.config();
const JWT_SECRET: any = process.env.JWT_SECRET;

const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();


export const sendOTP: any = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Check if the required fields are provided
    if (!email ) {
      return res
        .status(400)
        .json({ message: "Email required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    // Check if user with the given email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
    await prisma.oTP.create({
      data: {
        email,
        otp,
        expiresAt,
      },
    });

    await sendOtpEmail(email, otp);
    
    return res.status(200).json({ message: "OTP sent to email. Please verify." });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const verifyOTP:any = async (req: Request, res: Response) => {
  try {
    const { email, otp, username, password } = req.body;

    // Check if required fields are provided
    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    // Find OTP in the database
    const storedOTP = await prisma.oTP.findFirst({
      where: {
        email,
        otp,
        expiresAt: { gte: new Date() }, // Ensure the OTP is not expired
      },
    });

    if (!storedOTP) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Delete the OTP after verification
    await prisma.oTP.delete({
      where: { id: storedOTP.id },
    });

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user in the database
    const newUser = await prisma.user.create({
      data: {
        email,
        username: username || null, // Username is optional
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (error: any) {
    console.error("Error during OTP verification:", error);
    return res.status(500).json({ message: error.message });
  }
};

// // Login route
export const login: any = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the hashed password with the provided password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" } // Set token expiration
    );

    // Set the token in a cookie
    res.cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use 'secure' in production to send cookie only over HTTPS
      // Allows the cookie to be sent with cross-origin requests
    });

    // Return success response
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const logout: any = (req: Request, res: Response) => {
  try {
    // Clear the JWT token cookie by setting it to an empty value and an immediate expiration time
    res.cookie("token", "", {
      maxAge: 0, // Expire immediately
      httpOnly: true, // Prevent access from JavaScript (security measure)
      secure: process.env.NODE_ENV === "production", // Use 'secure' in production to only send cookie over HTTPS
      sameSite: "strict", // Helps prevent CSRF attacks
    });

    // Send response indicating logout was successful
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Server error during logout" });
  }
};
// Adjust the import path to your Prisma instance

export const getUserDetails: any = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id; // Extract the logged-in user's ID

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Fetch user details along with their cards
    const userDetails = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        cards: true, // Include the cards related to the user
      },
    });

    if (!userDetails) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user: userDetails });
  } catch (error: any) {
    console.error("Error fetching user details with cards:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

