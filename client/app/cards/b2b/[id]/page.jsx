import AboutUs from '@/app/components/b2bcomponents/AboutUs'
import ContactForm from '@/app/components/b2bcomponents/Appointment'
import ContactInfo from '@/app/components/b2bcomponents/ContactInfo'
import HeroSection from '@/app/components/b2bcomponents/HeroSection'
import OurServices from '@/app/components/b2bcomponents/OurServices'
import SocialMediaEmbeds from '@/app/components/b2bcomponents/SocialMediaFeeds'
import TestimonialCarousel from '@/app/components/b2bcomponents/Testimonials'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection/>
    <ContactInfo/>
    <AboutUs/>
    <OurServices/>
    <TestimonialCarousel/>
    <SocialMediaEmbeds/>
    <ContactForm/>
    </>
  )
}

export default page
