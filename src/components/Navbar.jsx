import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-xl dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              StudentHub
            </Link>
          </div>

          {/* Navigation Links - Left Side (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/studentList"
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200 dark:bg-blue-800 dark:hover:bg-blue-900"
              >
                Dashboard
              </Link>
              <Link
                to="/studentDetails/1"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 hover:bg-opacity-75 transition-colors duration-200 dark:hover:bg-blue-800"
              >
                About
              </Link>
            </div>
          </div>

          {/* Login/Signup Buttons - Right Side (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              <Link
                to="/signin"
                className="px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 hover:bg-opacity-75 transition-colors duration-200 dark:hover:bg-blue-800"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md text-sm font-medium text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-800 transition-colors duration-200"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                /* Close (X) icon */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 dark:bg-gray-800 px-4 pt-2 pb-4 space-y-1">
          <Link
            to="/studentList"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/studentDetails/1"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800 transition-colors duration-200"
          >
            About
          </Link>
          <hr className="border-blue-500 dark:border-gray-600 my-2" />
          <Link
            to="/signin"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;