'use client'
import React from "react";
import GuidanceSection from "../../../components/astrocomponents/GuidanceSection";
import Header from "../../../components/astrocomponents/Header";
import HeroSection from "../../../components/astrocomponents/HeroSection";
import PsychicReadings from "../../../components/astrocomponents/PsychicReadings";
import StayUpdated from "../../../components/astrocomponents/StayUpdated";
import Testimonials from "../../../components/astrocomponents/Testimonials";
// import "@/app/style/astrologer.css";
import SocialMediaEmbeds from "../../../components/astrocomponents/SocialMediaHandlers";
import ContactInfo from "../../../components/astrocomponents/ContactUs";
import WhatsAppButton from "../../../components/astrocomponents/WhatsappContact";
import ContactCardButton from "../../../components/astrocomponents/ContactCardButton";
import Footer from "../../../components/AstroComponents/Footer";
import Bg from "../../../assets/astrologerTemplate/BgImage.png"
import ProfileCard from "../../../components/astrocomponents/Header";

const App = () => {
  // console.log(Bg,"dfg")

  return (
    <div
      style={{
        backgroundImage: `url(${Bg.src})`, // Access the `src` property
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
      className="h-screen w-full"
    >
      {/* Header */}
      <ProfileCard/>
     
      {/* Hero Section */}
      {/* <HeroSection/> */}

      {/* guidance Section */}
      {/* <GuidanceSection/> */}
      
      {/* Reading Section */}
      {/* <PsychicReadings/> */}

      {/* SocialMediaEmbeds Section */}
      {/* <SocialMediaEmbeds/> */}

      {/* Testimonial Carousel Section */}
      {/* <Testimonials/> */}

      {/* <ContactInfo/> */}
      {/* <ContactCardButton/> */}

      {/* <WhatsAppButton/> */}
      
      {/* Subscribe Section */}
      {/* <StayUpdated/> */}
      
      {/* Footer */}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
