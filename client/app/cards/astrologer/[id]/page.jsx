'use client'
import React from "react";
import Bg from "../../../assets/astrologerTemplate/BgImage.png"
import ProfileCard from "../../../components/AstroComponents/ProfileCard";
import HeroSection from "../../../components/AstroComponents/HeroSection";
import ServicesSection from "../../../components/AstroComponents/ServicesSection";
import Testimonial from "../../../components/AstroComponents/Testimonials";
import BookingForm from "../../../components/AstroComponents/BookingForm";
import SocialMediaHandlers from "../../../components/AstroComponents/SocialMediaHandlers";
import ContactSection from "../../../components/AstroComponents/ContactSection";
import Gallery from "../../../components/AstroComponents/Gallery";
import WhatsappContact from "../../../components/AstroComponents/WhatsappContact"
import ContactCardButton from "../../../components/AstroComponents/ContactCardButton"

const App = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${Bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full"
    >
      <ProfileCard />
      <HeroSection />
      <ServicesSection />
      <Testimonial />
      <BookingForm />
      <SocialMediaHandlers />
      <ContactSection />
      <Gallery/>
      <WhatsappContact/>
      <ContactCardButton/>

    </div>
  );
};

export default App;
