'use client'
import React from "react";
import Footer from "@/app/components/astrocomponents/Footer";
import GuidanceSection from "@/app/components/astrocomponents/GuidanceSection";
import Header from "@/app/components/astrocomponents/Header";
import HeroSection from "@/app/components/astrocomponents/HeroSection";
import PsychicReadings from "@/app/components/astrocomponents/PsychicReadings";
import StayUpdated from "@/app/components/astrocomponents/StayUpdated";
import Testimonials from "@/app/components/astrocomponents/Testimonials";
import "@/app/style/astrologer.css";
import SocialMediaEmbeds from "@/app/components/astrocomponents/SocialMediaHandlers";
import ContactInfo from "@/app/components/astrocomponents/ContactUs";
import WhatsAppButton from "@/app/components/astrocomponents/WhatsappContact";
import ContactCardButton from "@/app/components/astrocomponents/ContactCardButton";

const App = () => {
  

  return (
    <div>
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
      <ContactCardButton/>

      <WhatsAppButton/>
      
      {/* Subscribe Section */}
      <StayUpdated/>
      
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
