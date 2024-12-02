'use client';
import { useState, useEffect } from "react";

export default function About() {
  const [aboutUs, setAboutUs] = useState("");

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_SERVER_URL); 
        const data = await response.json();
        if (data.success) {
          setAboutUs(data.card.aboutUs);
        }
      } catch (error) {
        console.error("Error fetching About Us data:", error);
      }
    };

    fetchAboutUs();
  }, []);

  if (!aboutUs) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex w-screen">
      {/* Left Section */}
      <div className="w-1/2 p-20">
        <h1 className="ml-24 text-5xl font-bold">About Us</h1>
      </div>

      {/* Right Section */}
      <div className="w-1/2 p-20">
        <p className="text-2xl mr-16">{aboutUs}</p>
      </div>
    </div>
  );
}
