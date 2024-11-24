import AboutUs from '@/app/components/AboutUs'
import ContactInfo from '@/app/components/ContactInfo'
import HeroSection from '@/app/components/HeroSection'
import OurServices from '@/app/components/OurServices'
import SocialMediaEmbeds from '@/app/components/SocialMediaFeeds'
import TestimonialCarousel from '@/app/components/Testimonials'
import AppointmentForm from "@/app/components/Appointment";
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
    <ContactInfo/>
    <AboutUs/>
    <OurServices/>
    <TestimonialCarousel/>
    <SocialMediaEmbeds/>
    <AppointmentForm/>
    </div>
  )
}

export default page
