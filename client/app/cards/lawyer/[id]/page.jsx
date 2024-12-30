"use client"
import React from "react";
import Navbar from "../../../components/lawyerComponents/Navbar";
import Profile from "../../../components/lawyerComponents/Profile";
import AboutSection from "../../../components/lawyerComponents/AboutSection";
import ServicesSection from "../../../components/lawyerComponents/ServicesSection";
import Testimonial from "../../../components/lawyerComponents/Testimonials";
import Appointment from "../../../components/lawyerComponents/Appointment";
import SocialMediaHandle from "../../../components/lawyerComponents/SocialMediaHandle";
import ContactForm from "../../../components/lawyerComponents/ContactForm";
import Gallery from "../../../components/lawyerComponents/Gallery";
import ContactCardButton from "../../../components/lawyerComponents/ContactCardButton";
import WhatsappContact from "../../../components/lawyerComponents/WhatsappContact";

function page({ card }) {
  // console.log(card , "cards")
  return (
    <>
      <Navbar />
      <Profile card={card.card} />
      <AboutSection card={card.card} />
      <ServicesSection card={card.card} />
      <Testimonial card={card.card} />
      <Appointment card={card.card} />
      <SocialMediaHandle card={card.card} />
      <ContactForm card={card.card} />
      <Gallery card={card.card} />
      <ContactCardButton card={card.card} />
      <WhatsappContact card={card.card} />
    </>
  );
}

export default page;
