import AboutUs from "./components/AboutUs";
import AppointmentForm from "./components/Appointment";
import ContactInfo from "./components/ContactInfo";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import SocialMediaEmbeds from "./components/SocialMediaFeeds";
import TestimonialCarousel from "./components/Testimonials";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <ContactInfo/>
    <AboutUs/>
    <OurServices/>
    <TestimonialCarousel/>
    <SocialMediaEmbeds/>
    <AppointmentForm/>
    </>
  );
}
