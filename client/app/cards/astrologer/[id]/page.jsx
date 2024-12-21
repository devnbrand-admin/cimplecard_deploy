"use client";
import React from "react";
import Bg from "../../../assets/astrologerTemplate/BgImage.png";
import ProfileCard from "../../../components/AstroComponents/ProfileCard";
import HeroSection from "../../../components/AstroComponents/HeroSection";
import ServicesSection from "../../../components/AstroComponents/ServicesSection";
import Testimonial from "../../../components/AstroComponents/Testimonials";
import BookingForm from "../../../components/AstroComponents/BookingForm";
import SocialMediaHandlers from "../../../components/AstroComponents/SocialMediaHandlers";
import ContactSection from "../../../components/AstroComponents/ContactSection";
import Gallery from "../../../components/AstroComponents/Gallery";
import WhatsappContact from "../../../components/AstroComponents/WhatsappContact";
import ContactCardButton from "../../../components/AstroComponents/ContactCardButton";

const page = ({ card}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full"
    >
      <ProfileCard card={card.card} />
      <HeroSection card={card.card} />
      <ServicesSection card={card.card} />
      <Testimonial card={card.card} />
      <BookingForm card={card.card} />
      <SocialMediaHandlers card={card.card} />
      <ContactSection card={card.card} />
      <Gallery card={card.card} />
      <WhatsappContact card={card.card} />
      <ContactCardButton card={card.card} />
    </div>
  );
};

export default page;
