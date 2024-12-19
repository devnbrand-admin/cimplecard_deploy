import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../DB/dbconfig.js";
dotenv.config();
export const verifyToken = async (req, res, next) => {
    try {
        console.log(req.cookies);
        // console.log(req.cookies.token)
        // console.log(req.headers.authorization)
        // Extracting the token from various sources
        const token = req.body.token ||
            req.cookies.token || req.headers.authorization;
        // If token is missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            });
        }
        // Verifying the token
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            const user = await prisma.user.findUnique({
                where: { id: payload.id },
            });
            // Use 'as string' for type assertion
            req.user = payload; // Assign the decoded user to the request object
        }
        catch (error) {
            // Verification issue
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
            });
        }
        next(); // Proceed to the next middleware
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong while validating the token",
        });
    }
};
export const isAdmin = (req, res, next) => {
    try {
        // Get the token from the request header (assuming it's sent as a Bearer token)
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(403).json({ message: "No token provided, access denied." });
        }
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Check the user's role
        if (decoded.role === "Admin") {
            // User is an admin, proceed to the next middleware or route handler
            return next();
        }
        else {
            return res.status(403).json({ message: "Access denied. User is not an admin." });
        }
    }
    catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).json({ message: "Unauthorized." });
    }
};
