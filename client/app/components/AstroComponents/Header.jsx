import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white/10 fixed z-50 backdrop-blur-xl text-teal-400 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">

        <h1 className="text-2xl font-bold tracking-wide">Witchcraft</h1>


        <ul className="flex gap-8">
          {["Home", "About", "Readings", "Contact"].map((link) => (
            <li
              key={link}
              className="text-lg hover:text-teal-500 transition-all cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
