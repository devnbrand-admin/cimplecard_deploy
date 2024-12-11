"use client";
import React from "react";
import Footer from "../../../components/astrocomponents/Footer";
import GuidanceSection from "../../../components/astrocomponents/GuidanceSection";
import Header from "../../../components/astrocomponents/Header";
import HeroSection from "../../../components/astrocomponents/HeroSection";
import PsychicReadings from "../../../components/astrocomponents/PsychicReadings";
import StayUpdated from "../../../components/astrocomponents/StayUpdated";
import Testimonials from "../../../components/astrocomponents/Testimonials";
import "../../../style/astrologer.css";
import SocialMediaEmbeds from "../../../components/astrocomponents/SocialMediaHandlers";
import ContactInfo from "../../../components/astrocomponents/ContactUs";
import WhatsAppButton from "../../../components/astrocomponents/WhatsappContact";
import ContactCardButton from "../../../components/astrocomponents/ContactCardButton";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* guidance Section */}
      <GuidanceSection />

      {/* Reading Section */}
      <PsychicReadings />

      {/* SocialMediaEmbeds Section */}
      <SocialMediaEmbeds />

      {/* Testimonial Carousel Section */}
      <Testimonials />

      <ContactInfo />
      <ContactCardButton />

      <WhatsAppButton />

      {/* Subscribe Section */}
      <StayUpdated />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
