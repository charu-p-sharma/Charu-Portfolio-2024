import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Charu</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 ">
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>My Education</NavItem>
              <NavItem>Work</NavItem>
              <NavItem>Contact</NavItem>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="text-gray-300 hover:text-white focus:text-white focus:outline-none"
            >
              {isNavOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isNavOpen && (
        <div className="bg-gray-700 md:hidden">
          <ul className="space-y-1 px-2 py-3">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>My Education</NavItem>
            <NavItem>Work</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
      {children}
    </li>
  );
};

export default Navbar;
