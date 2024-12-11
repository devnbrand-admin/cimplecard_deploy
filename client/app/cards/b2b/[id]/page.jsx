import React from 'react'
import AboutUs from '../../../components/b2bcomponents/AboutUs'
import ContactForm from '../../../components/b2bcomponents/Appointment'
import ContactInfo from '../../../components/b2bcomponents/ContactInfo'
import HeroSection from '../../../components/b2bcomponents/HeroSection'
import OurServices from '../../../components/b2bcomponents/OurServices'
import SocialMediaEmbeds from '../../../components/b2bcomponents/SocialMediaFeeds'
import TestimonialCarousel from '../../../components/b2bcomponents/Testimonials'
import AppointmentForm from '../../../components/b2bcomponents/AppointmentForm'
import "../../../style/b2btemplate.css"

const page = () => {
  return (
    <>
      <HeroSection/>
    <ContactInfo/>
    <AboutUs/>
    <OurServices/>
    <TestimonialCarousel/>
    <AppointmentForm/>
    <SocialMediaEmbeds/>
    <ContactForm/>
    </>
  )
}

export default page
