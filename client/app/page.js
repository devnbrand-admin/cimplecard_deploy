import Header from "./Components/Header/Header";
import Socials from "./Components/Socials/Socials";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Youtube from "./Components/Youtube/Youtube";
import Instagram from "./Components/Instagram/Instgram";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

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
    <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white min-h-screen">
    </div>
  );
}
