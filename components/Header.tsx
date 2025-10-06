import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import { NAV_LINKS } from "../constants";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#04091A]/80 backdrop-blur-sm border-b border-blue-900/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand: larger logo, no visible text */}
        <NavLink to="/" className="flex items-center" aria-label="Thync">
          <Logo
            className="h-75 w-75 object-contain"
            width={75}
            height={75}
            alt="Thync"
          />
        </NavLink>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors duration-300 ${
                  isActive ? "text-blue-400 font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/contact"
          className="hidden md:inline-block px-5 py-2 text-sm font-medium text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30"
        >
          {"Let's Talk"}
        </NavLink>
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;
