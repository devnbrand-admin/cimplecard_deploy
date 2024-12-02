import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../DB/dbconfig.js";
dotenv.config();
// Centralised Token Extration
const extractToken = (req)=>{ 
    return req.cookies.token ||
           req.body.token ||
           req.headers.authorization?.replace('Bearer','');
};

export const verifyToken = async (req, res, next) => {
    try {
        // Extracting the token from various sources
        const token = extractToken(req);
        // If token is missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
        }
        // Verifying the token
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            const user = await prisma.user.findUnique({
                where: { id: payload.id },
            });
            // Added success:false to error response for frontend compatibility
            if(!user){
                return res.status(401).json({
                    success: false,
                    message: "Invalid User",
                });
            }
            req.user = payload; // Assign the decoded user to the request object
            next();
        }
        catch (verificationerror) {
            // Verification issue
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
            });
        }
        
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
        const token = extractToken(req);
        if (!token) {
            return res.status(403).json({ 
                success: false,
                message: "Authentication token required",
            });
        }
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Check the user's role
        if (decoded.role === "Admin") {
            return res.status(403).json({
                success: false,
                message: "Admin access required.",
            });
            // User is an admin, proceed to the next middleware or route handler
            req.user = decoded;
            return next();
        } 
    }
        
    // User is not an admin, return 403 Forbidden
    catch (error) {
        console.error("Admin verification error:", error);
        return res.status(401).json({ 
            success: false,  
            message: "Authentication failed" 
        });
    }
};
