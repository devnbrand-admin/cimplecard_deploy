import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Function to send an email
async function sendEmail(appointmentDetails: {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}) {
  const mailOptions = {
    from: "your-email@example.com", // Replace with your email
    to: appointmentDetails.email,
    subject: "Appointment Confirmation",
    text: `Dear ${appointmentDetails.name},
    
Thank you for scheduling an appointment. Below are the details:

- **Phone Number:** ${appointmentDetails.phoneNumber}
- **Message:** ${appointmentDetails.message || "N/A"}

Please contact us if you have any questions.

Best regards,  
Your Company`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

// Controller for creating an appointment
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { name, phoneNumber, email, message } = req.body;

    // Create a new appointment in the database
    const newAppointment = await prisma.appointment.create({
      data: {
        name,
        phoneNumber,
        email,
        message,
      },
    });

    // Send confirmation email
    await sendEmail(newAppointment);

    return res.status(201).json({
      success: true,
      message: "Appointment created successfully!",
      appointment: newAppointment,
    });
  } catch (error: any) {
    console.error("Error creating appointment:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for retrieving all appointments
export const getAllAppointments = async (_req: Request, res: Response) => {
  try {
    // Fetch all appointments from the database
    const appointments = await prisma.appointment.findMany();

    return res.status(200).json({
      success: true,
      appointments,
      message: "Appointments retrieved successfully.",
    });
  } catch (error: any) {
    console.error("Error retrieving appointments:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const updateAppointment = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; // Appointment ID from URL params
      const { name, phoneNumber, email, message } = req.body;
  
      // Update the appointment in the database
      const updatedAppointment = await prisma.appointment.update({
        where: { id: parseInt(id) },
        data: { name, phoneNumber, email, message },
      });
  
      return res.status(200).json({
        success: true,
        message: "Appointment updated successfully!",
        appointment: updatedAppointment,
      });
    } catch (error: any) {
      console.error("Error updating appointment:", error);
      return res.status(500).json({ success: false, error: error.message });
    }
  };
  
  // Controller for deleting an appointment
  export const deleteAppointment = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; // Appointment ID from URL params
  
      // Delete the appointment from the database
      await prisma.appointment.delete({
        where: { id: parseInt(id) },
      });
  
      return res.status(200).json({
        success: true,
        message: "Appointment deleted successfully!",
      });
    } catch (error: any) {
      console.error("Error deleting appointment:", error);
      return res.status(500).json({ success: false, error: error.message });
    }
  };
  