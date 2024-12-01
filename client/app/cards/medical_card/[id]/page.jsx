import Header from "@/app/components/MedicalCardComponents/Header/Header";
import Socials from "@/app/components/MedicalCardComponents/Socials/Socials"; 
import Contact from "@/app/components/MedicalCardComponents/Contact/Contact";
import About from "@/app/components/MedicalCardComponents/About/About";
import Services from "@/app/components/MedicalCardComponents/Services/Services";
import Testimonial from "@/app/components/MedicalCardComponents/Testimonial/Testimonial";
import Youtube from "@/app/components/MedicalCardComponents/Youtube/Youtube";
import Instagram from "@/app/components/MedicalCardComponents/Instagram/Instgram";

export default function Home() {

  return (
    <>
    <Header></Header>
    <Socials></Socials>
    <Contact></Contact>
    <About></About>
    <Services></Services>
    <Testimonial></Testimonial>
    <Youtube></Youtube>
    <Instagram></Instagram>
    </>
  );
}
