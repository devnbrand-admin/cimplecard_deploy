import React from "react";

const Header = () => {
  return (
    <header className="fixed z-50 flex justify-between items-center p-6 text-white w-full bg-white/10 backdrop-blur-md">
      <div className="text-xl font-bold">Witchcraft</div>
      <nav className="space-x-6">
        <a href="#" className="hover:text-purple-400">Home</a>
        <a href="#" className="hover:text-purple-400">About</a>
        <a href="#" className="hover:text-purple-400">Readings</a>
        <a href="#" className="hover:text-purple-400">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
