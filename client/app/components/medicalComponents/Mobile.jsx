import React from "react";
import Header from "./MobileComponents/Header";
import Hero from "./MobileComponents/Hero";
import About from "./MobileComponents/About";
import Testimonal from "./Testimonal";
import Contact from "./Contact";
import Social from "./Social";
import Footer from "./Footer";

const Mobile = ({ card }) => {
  return (
    <div>
      {/* <Header />
       */}
      <Hero card={card} />
      <About card={card} />
      <Testimonal card={card} />
      <Contact card={card} />
      <Social card={card} />
      <Footer card={card} />
    </div>
  );
};

export default Mobile;
