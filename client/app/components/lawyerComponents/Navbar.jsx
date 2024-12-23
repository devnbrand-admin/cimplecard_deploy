import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center py-3 border-b border-white z-50 bg-white/10 backdrop-blur-md">
      <ul className="flex px-2 md:px-8 py-2 rounded-lg gap-2 md:gap-6 text-sm md:text-lg 
                      text-[#293542] shadow-lg bg-slate-100">
        <li className="text-[#DEB459] font-bold cursor-pointer">Profile</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Testimonials</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
