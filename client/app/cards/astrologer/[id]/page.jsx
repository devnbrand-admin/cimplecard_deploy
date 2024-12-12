import React from "react";
import Bg from "../../../assets/astrologerTemplate/BgImage.png"
import ProfileCard from "../../../components/astrocomponents/ProfileCard";
import HeroSection from "../../../components/astrocomponents/HeroSection";
import ServicesSection from "../../../components/astrocomponents/ServicesSection";
import Testimonial from "../../../components/astrocomponents/Testimonials";
import BookingForm from "../../../components/astrocomponents/BookingForm";
import SocialMediaHandlers from "../../../components/astrocomponents/SocialMediaHandlers";
import ContactSection from "../../../components/astrocomponents/ContactSection";

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
