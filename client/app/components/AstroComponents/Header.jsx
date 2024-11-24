import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-black text-white">
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
