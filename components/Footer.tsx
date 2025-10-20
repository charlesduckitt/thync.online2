import React from "react";
import { Link } from "react-router-dom";
// Use public asset path for logo
import { NAV_LINKS } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02050E] border-t border-blue-900/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/logo.png"
                alt="Thync"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-white">Thync</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Strategic Digital Engineering for Those who Refuse Mediocrity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/thync/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61566979046806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:Charles@Thync.Online"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Charles@Thync.Online
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-900/50 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Thync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
