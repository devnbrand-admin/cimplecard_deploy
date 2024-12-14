import React from "react";
import Image from "next/image";
import teamImage from "../../assets/about/coupleImage.png";
import logoIcon from "../../assets/about/coupleImage.png";
import NavbarComponent from "../navbar/Navbar";

const AboutUSComponent = () => {


  const handleJoinSignLoignfn = () => {

    return (
      <div className="text-center w-full text-lg md:text-xs flex flex-col md:flex-row items-center justify-around text-[#28389a] mt-8 md:bg-gray-300 rounded-full py-2">
        <p>
          Join the world’s leading digital business card family.{" "}
          <span className="font-semibold">Don't be left out</span>
        </p>
        <div className="w-full md:w-auto mt-2 md:mt-0 flex justify-between  md:gap-x-3">
        <button className="bg-white text-nowrap text-[#3342a2] py-1 md:py-2 px-3 md:px-6 rounded-full font-bold">
          Sign Up
        </button>
        <button className="bg-[#3342a2] text-nowrap text-white border-[1px] py-1 md:py-2 px-3 md:px-6 rounded-full font-bold">
          Log In
        </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 relative text-gray-800 font-sans ">
      
      <div
        className="hidden clip-path1 md:block absolute top-[30px] z-10 bg-[#707ed3] w-[700px] h-[1000px] shadow-lg shadow-black"
        style={{
          clipPath: "polygon(0 63%, 26% 46%, 0 100%)",
        }}
      >
        <div
          className="absolute inset-0 shadow-lg shadow-black"
          style={{
            clipPath: "polygon(0 63%, 26% 46%, 0 100%)",
          }}
        />
      </div>
      <div
        className="hidden clip-path2 md:block absolute top-[150px] right-0  z-10 bg-[#2f40af] w-[500px] h-[600px] shadow-lg shadow-black"
        style={{
          clipPath: "polygon(20% 36%, 100% 98%, 100% 59%)",
        }}
      >
        <div
          className="absolute inset-0 shadow-lg shadow-black"
          style={{
            clipPath: "polygon(20% 36%, 100% 98%, 100% 59%)",
          }}
        />
      </div>
      <div
        className="hidden clip-path3 md:block absolute bottom-[60px] right-0  z-10 bg-[#fbfbfd] w-[900px] h-[800px] shadow-lg shadow-black"
        style={{
          clipPath: "polygon(100% 50%, 100% 69%, 69% 92%)",
        }}
      >
        <div
          className="absolute inset-0 shadow-lg shadow-black"
          style={{
            clipPath: "polygon(100% 50%, 100% 69%, 69% 92%)",
          }}
        />
      </div>

      {/* Navbar */}
      <NavbarComponent />

      {/* About Section */}
      <section className="relative bg-white py-16 px-8 lg:px-24">
        <h1 className="text-3xl lg:text-5xl font-bold text-center text-[#3342a2] mb-8">
          About <span className="text-blue-500">CimpleCard</span>
        </h1>
        <div className="grid grid-cols-1 lg:flex gap-8 items-center justify-end md:ml-[150px]">
          <p className="text-[#3a4ab3] text-left text-lg leading-relaxed">
            At CimpleCard, we believe in redefining the way professionals
            connect and share their identities in the digital world. Our
            platform enables seamless networking and engagement. Powered by
            cutting-edge design and technology, CimpleCard bridges the gap
            between traditional networking and the demands of today’s digital
            landscape. Join us in transforming how the world connects, one card
            at a time.
            share their identities in the digital world. Our
            platform enables seamless networking and engagement. Powered by
            cutting-edge design and technology, CimpleCard bridges the gap
            between traditional networking and the demands of today’s digital
            landscape. Join us in transforming how the world connects, one card
            at a time.
          </p>
          <div className="relative z-0 md:z-20 flex justify-end">
  <div className="w-72 h-auto">
    <Image src={teamImage} alt="Team" className="rounded-lg" />
  </div>
</div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="text-white py-16 w-1/2 mx-auto rounded-lg">
        <div className="flex bg-[#3342a2] flex-wrap justify-center gap-8 p-8 rounded-3xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold">200m+</h3>
            <p>Users Worldwide</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">6 Billion+</h3>
            <p>Downloads</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">2nd Best</h3>
            <p>In the World</p>
          </div>
        </div>

        {handleJoinSignLoignfn()}
      </section>

      {/* Team Section */}
      <section className="py-8 px-4 md:px-12 lg:px-20 bg-gray-100">
  <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#3342a2] mb-6">
    Meet Our Team
  </h2>
  <div className="grid grid-cols-2 md:flex justify-center gap-y-6 flex-wrap ">
    {[...Array(5)].map((_, idx) => (
      <div key={idx} className="text-center mx-7">
        <div className="w-32 h-32  mx-auto">
          <Image src={logoIcon} alt="Team Member" className="rounded-full" />
        </div>
        <h3 className="text-sm md:text-base font-bold mt-2">Miles Morales</h3>
        <p className="text-xs md:text-sm">Founder/CEO</p>
      </div>
    ))}
  </div>
</section>




      {/* Footer */}
      <footer className="flex-col text-white py-4 text-center flex justify-center items-center">
        <span className="w-1/2 h-[2px] bg-[#2e3ea2]"></span>
        <div className="w-1/2">{handleJoinSignLoignfn()}</div>
      </footer>
    </div>
  );
};

export default AboutUSComponent;
