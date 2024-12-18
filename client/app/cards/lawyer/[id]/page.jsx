import React from 'react'
import Navbar from "../../../components/lawyerComponents/Navbar"
import Profile from "../../../components/lawyerComponents/Profile"
import AboutSection from "../../../components/lawyerComponents/AboutSection"
import ServicesSection from "../../../components/lawyerComponents/ServicesSection"
import Testimonial from "../../../components/lawyerComponents/Testimonials"
import Appointment from "../../../components/lawyerComponents/Appointment"
import SocialMediaHandle from "../../../components/lawyerComponents/SocialMediaHandle"
import ContactForm from "../../../components/lawyerComponents/ContactForm"
import Gallery from "../../../components/lawyerComponents/Gallery"
import ContactCardButton from "../../../components/lawyerComponents/ContactCardButton"
import WhatsappContact from "../../../components/lawyerComponents/WhatsappContact"
import "../../../style/lawyer.css"

function page() {
  return (
    <>
    <Navbar/>
    <Profile/>
    <AboutSection/>
    <ServicesSection/>
    <Testimonial/>
    <Appointment/>
    <SocialMediaHandle/>
    <ContactForm/>
    <Gallery/>
    <ContactCardButton/>
    <WhatsappContact/>
    </>
  )
}

export default page;