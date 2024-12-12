import React from "react";
import Bg from "../../../assets/astrologerTemplate/BgImage.png"
import ProfileCard from "../../../components/astrocomponents/ProfileCard";
import HeroSection from "../../../components/astrocomponents/HeroSection";

const App = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${Bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full"
    >
      <ProfileCard/>
      <HeroSection/>
      
    </div>
  );
};

export default App;
