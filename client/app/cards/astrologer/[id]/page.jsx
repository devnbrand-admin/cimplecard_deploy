import React from "react";
import Bg from "../../../assets/astrologerTemplate/BgImage.png"
import ProfileCard from "../../../components/AstroComponents/ProfileCard";
import HeroSection from "../../../components/AstroComponents/HeroSection";
import ServicesSection from "../../../components/AstroComponents/ServicesSection";
import Testimonial from "../../../components/AstroComponents/Testimonials";
import BookingForm from "../../../components/AstroComponents/BookingForm";
import SocialMediaHandlers from "../../../components/AstroComponents/SocialMediaHandlers";
import ContactSection from "../../../components/AstroComponents/ContactSection";

const page = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${Bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full"
    >
      <ProfileCard/>
      <HeroSection/>
      <ServicesSection/>
      <Testimonial/>
      <BookingForm/>
      <SocialMediaHandlers/>
      <ContactSection/>
    </div>
  );
};

export default page;
