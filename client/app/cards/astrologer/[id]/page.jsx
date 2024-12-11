'use client'
import React from "react";

import Bg from "../../../assets/astrologerTemplate/BgImage.png"
import ProfileCard from "../../../components/astrocomponents/Header";

const App = () => {
  // console.log(Bg,"dfg")

  return (
    <div
      style={{
        backgroundImage: `url(${Bg.src})`, // Access the `src` property
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
      className="h-screen w-full"
    >
      {/* Header */}
      <ProfileCard/>
     
      
    </div>
  );
};

export default App;
