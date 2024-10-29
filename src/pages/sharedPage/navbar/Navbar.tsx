import { logOut, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  faAddressCard,
  faBiking,
  faHome,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useTheme } from "@/context/ThemeContext";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const user = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow-lg px-5`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src="https://i.ibb.co/4M8WDwD/logo.jpg"
              className="h-12 w-12 rounded-full"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Menu Toggle (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className="hover:text-[#FF6F61] transition-colors duration-300 p-2"
          >
            <FontAwesomeIcon icon={faHome} className="px-1" />
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="hover:text-[#FF6F61] transition-colors duration-300 p-2"
          >
            <FontAwesomeIcon icon={faAddressCard} className="px-1" />
            About Us
          </NavLink>
          <NavLink
            to="/bikes"
            className="hover:text-[#FF6F61] transition-colors duration-300 p-2"
          >
            <FontAwesomeIcon icon={faBiking} className="px-1" />
            Bikes
          </NavLink>
          {user && (
            <NavLink
              to="/dashboard"
              className="hover:text-[#FF6F61] transition-colors duration-300 p-2"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faTachometerAlt} className="px-1" />
              Dashboard
            </NavLink>
          )}

          {/* Authentication Button */}
          {!user ? (
            <NavLink
              to="/login"
              className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-2 px-6 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleSignOut}
              className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-2 px-6 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Sign Out
            </button>
          )}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="ml-4">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <NavLink
            to="/"
            className="block py-2 px-4 hover:text-[#FF6F61] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="block py-2 px-4 hover:text-[#FF6F61] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/bikes"
            className="block py-2 px-4 hover:text-[#FF6F61] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Bikes
          </NavLink>

          {/* Authentication Button (Mobile) */}
          {!user ? (
            <NavLink
              to="/login"
              className="block bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-2 px-4 mt-4 rounded shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={() => {
                handleSignOut();
                setIsOpen(false);
              }}
              className="block bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-2 px-4 mt-4 rounded shadow-lg"
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
