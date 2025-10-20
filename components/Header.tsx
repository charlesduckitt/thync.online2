import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Use public asset path for logo
import { NAV_LINKS } from "../constants";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#04091A]/80 backdrop-blur-sm border-b border-blue-900/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand: larger logo, no visible text */}
        <NavLink to="/" className="flex items-center" aria-label="Thync">
          <img
            src="/assets/logo.png"
            className="h-18 w-18 object-contain"
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
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`${
          mobileOpen ? "block" : "hidden"
        } md:hidden border-t border-blue-900/50 bg-[#04091A]/95 backdrop-blur-sm`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block text-gray-300 hover:text-white transition-colors duration-300 ${
                  isActive ? "text-blue-400 font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-5 py-2 text-sm font-medium text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30 text-center"
          >
            {"Let's Talk"}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
