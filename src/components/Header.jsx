import React, { useState } from 'react';
import { NavLink } from 'react-router'; // Correct import

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Brand/Logo */}
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white italic">
              DJ
            </span>
          </NavLink>

          {/* Hamburger Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Nav Links */}
          <div
            className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? 'text-orange-700  md:bg-transparent md:dark:text-orange-500'
                        : 'text-green-500 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-orange md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? 'text-orange-700  md:bg-transparent md:dark:text-orange-500'
                        : 'text-green-500 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-orange md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? 'text-orange-700  md:bg-transparent md:dark:text-orange-500'
                        : 'text-green-500 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-orange md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/connect"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? 'text-orange-700  md:bg-transparent md:dark:text-orange-500'
                        : 'text-green-500 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-orange md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connect
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? 'text-orange-700  md:bg-transparent md:dark:text-orange-500'
                        : 'text-green-500 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-orange md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? 'text-orange-700  md:bg-transparent md:dark:text-orange-500'
                        : 'text-green-500 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-orange md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  BookCall
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

