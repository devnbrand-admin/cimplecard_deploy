import Header from "../../../components/MedicalCardComponents/Header/Header";
import Socials from "../../../components/MedicalCardComponents/Socials/Socials";
import Contact from "../../../components/MedicalCardComponents/Contact/Contact";
import About from "../../../components/MedicalCardComponents/About/About";
import Services from "../../../components/MedicalCardComponents/Services/Services";
import Testimonial from "../../../components/MedicalCardComponents/Testimonial/Testimonial";
import Youtube from "../../../components/MedicalCardComponents/Youtube/Youtube";
import Instagram from "../../../components/MedicalCardComponents/Instagram/Instgram";

import "../../../style/MedicalCard.css";

export default function MedicalCard() {
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
