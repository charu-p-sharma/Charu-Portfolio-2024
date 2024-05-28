import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

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
            <ul className="flex space-x-4">
              <NavItem to="home">Home</NavItem>
              <NavItem to="about">About</NavItem>
              <NavItem to="education">My Education</NavItem>
              <NavItem to="projects">Projects</NavItem>
              <NavItem to="contact">Contact</NavItem>
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
            <NavItem to="home">Home</NavItem>
            <NavItem to="about">About</NavItem>
            <NavItem to="education">My Education</NavItem>
            <NavItem to="projects">Projects</NavItem>
            <NavItem to="contact">Contact</NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ children, to }) => {
  return (
    <li className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-70} // Adjust this offset as needed
        duration={500}
        className="cursor-pointer transition-colors duration-300 hover:text-purple-600"
      >
        {children}
      </ScrollLink>
    </li>
  );
};

export default Navbar;
