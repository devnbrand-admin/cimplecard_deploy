'use client'
import Footer from "@/app/components/AstroComponents/Footer";
import GuidanceSection from "@/app/components/AstroComponents/GuidanceSection";
import Header from "@/app/components/AstroComponents/Header";
import HeroSection from "@/app/components/AstroComponents/HeroSection";
import PsychicReadings from "@/app/components/AstroComponents/PsychicReadings";
import StayUpdated from "@/app/components/AstroComponents/StayUpdated";
import Testimonials from "@/app/components/AstroComponents/Testimonials";
import React from "react";
import "../../../globals.css"
import SocialMediaEmbeds from "@/app/components/AstroComponents/SocialMediaHandlers";
import ContactInfo from "@/app/components/AstroComponents/ContactUs";

const App = () => {
  

  return (
    <div className="bg-center text-white min-h-screen">
      {/* Header */}
      <Header/>
     
      {/* Hero Section */}
      <HeroSection/>

      {/* guidance Section */}
      <GuidanceSection/>
      
      {/* Reading Section */}
      <PsychicReadings/>

      {/* SocialMediaEmbeds Section */}
      <SocialMediaEmbeds/>

      {/* Testimonial Carousel Section */}
      <Testimonials/>

      <ContactInfo/>
      
      {/* Subscribe Section */}
      <StayUpdated/>
      
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
