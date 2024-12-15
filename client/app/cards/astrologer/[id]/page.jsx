'use client'
import React from "react";
import Bg from "../../../assets/astrologerTemplate/BgImage.png"
import ProfileCard from "../../../components/astrocomponents/ProfileCard";
import HeroSection from "../../../components/astrocomponents/HeroSection";
import ServicesSection from "../../../components/astrocomponents/ServicesSection";
import Testimonial from "../../../components/astrocomponents/Testimonials";
import BookingForm from "../../../components/astrocomponents/BookingForm";
import SocialMediaHandlers from "../../../components/astrocomponents/SocialMediaHandlers";
import ContactSection from "../../../components/astrocomponents/ContactSection";
import Gallery from "../../../components/AstroComponents";
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
      <WhatsappContact bg={'bg-[#2d0959]'}/>
      <ContactCardButton bg={'bg-[#2d0959]'}/>

    </div>
  );
};

export default App;
