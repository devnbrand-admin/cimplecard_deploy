import React from "react";
import Bg from "../../../assets/astrologerTemplate/BgImage.png"
import ProfileCard from "../../../components/Astrocomponents/ProfileCard";
import HeroSection from "../../../components/Astrocomponents/HeroSection";
import ServicesSection from "../../../components/Astrocomponents/ServicesSection";
import Testimonial from "../../../components/Astrocomponents/Testimonials";
import BookingForm from "../../../components/Astrocomponents/BookingForm";
import SocialMediaHandlers from "../../../components/Astrocomponents/SocialMediaHandlers";
import ContactSection from "../../../components/Astrocomponents/ContactSection";

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

export default App;
