import React from "react";
import NavElement from "./NavElement";

function Navbar() {
  return (
    <header className="sticky top-0  z-10 h-20 w-screen bg-gray-400 flex items-center justify-between px-40 py-2 ">
      <div>
        <img className="h-16  w-40" src="/logo.png" alt="data-soup" />
      </div>
      <div className="flex items-center justify-center space-x-3">
        <NavElement name="Home" />
        <NavElement name="Courses" />
        <NavElement name="Services" />
      </div>
      <div className="flex items-center justify-center space-x-4">
        <NavElement name="Sign In" />
        <div className=" bg-blue-500/60 rounded-full px-4 py-1 text-white hover:text-gray-200 cursor-pointer duration-300 font-semibold text-lg">
          Contact US
        </div>
      </div>
    </header>
  );
}

export default Navbar;
