import React from 'react'
import AboutUs from '@/app/components/b2bcomponents/AboutUs'
import ContactForm from '@/app/components/b2bcomponents/Appointment'
import ContactInfo from '@/app/components/b2bcomponents/ContactInfo'
import HeroSection from '@/app/components/b2bcomponents/HeroSection'
import OurServices from '@/app/components/b2bcomponents/OurServices'
import SocialMediaEmbeds from '@/app/components/b2bcomponents/SocialMediaFeeds'
import TestimonialCarousel from '@/app/components/b2bcomponents/Testimonials'
import "@/app/style/b2btemplate.css"
import AppointmentForm from '@/app/components/b2bcomponents/AppointmentForm'

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
