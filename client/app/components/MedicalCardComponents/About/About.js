'use client'
import { useState, useEffect } from "react";

export default function About() {
  const [aboutUs, setAboutUs] = useState("");

  useEffect(() => {
    // Fetch the data from the API
    const fetchAboutUs = async () => {
      try {
        const response = await fetch("https://cimple-card.onrender.com/api/card/get/1"); // Replace with the actual API endpoint
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
    return <div>Loading...</div>; // Display a loading message until the data is fetched
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
