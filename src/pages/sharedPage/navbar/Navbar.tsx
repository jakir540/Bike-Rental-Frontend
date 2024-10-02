import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1A1A2E] shadow-lg ">
      <div className="container mx-auto flex items-center justify-between p-3">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src="https://i.ibb.co.com/4M8WDwD/logo.jpg"
              className="h-16  w-16  rounded-full"
              alt=""
            />
          </NavLink>
        </div>

        {/* Menu Toggle (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#ECECEC] focus:outline-none"
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

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-8 items-center`}
        >
          <NavLink
            to="/"
            className="text-[#ECECEC] hover:text-[#FF6F61] transition-colors duration-300 p-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="text-[#ECECEC] hover:text-[#FF6F61] transition-colors duration-300 p-2"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/bikes"
            className="text-[#ECECEC] hover:text-[#FF6F61] transition-colors duration-300 p-2"
            onClick={() => setIsOpen(false)}
          >
            Bikes
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-[#ECECEC] hover:text-[#FF6F61] transition-colors duration-300 p-2"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
        </div>

        {/* Authentication Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <NavLink
            to="/login"
            className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-3 px-8 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-400"
          >
            Login
          </NavLink>
          <NavLink
            to="/signUp"
            className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-3 px-8 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-400"
          >
            Sign Up
          </NavLink>

          {/* If logged in (conditional rendering) */}
          {/* Uncomment and use logic based on user authentication status */}
          {/* <NavLink to="/logout" className="bg-[#DE4313] text-white py-2 px-4 rounded-full hover:bg-[#FF6F61] transition-colors duration-300 shadow-md">Logout</NavLink> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A2E]">
          <NavLink
            to="/login"
            className="block text-[#ECECEC] py-2 px-4 hover:text-[#FF6F61] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="block text-[#ECECEC] py-2 px-4 hover:text-[#FF6F61] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </NavLink>
          {/* Add more mobile links as necessary */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
