import React from "react";
import Header from "./MobileComponents/Header";
import Hero from "./MobileComponents/Hero";

const Mobile = ({ card }) => {
  return (
    <div>
      {/* <Header />
       */}
      <Hero card={card} />
    </div>
  );
};

export default Mobile;
