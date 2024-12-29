import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import { useState } from "react";
import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";
import { useAppDispatch } from "@/redux/hook";
import { logOut } from "@/redux/features/auth/authSlice";

const DashboardNavbar = () => {
  const { data } = useShowProfileQuery(undefined);
  const dispatch = useAppDispatch();
  const userProfile = data?.data;
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white h-16 flex items-center px-6 justify-between shadow-md sticky top-0 z-50">
      {/* Left Logo */}
      <Link
        to="/"
        className="flex items-center space-x-2 text-white hover:text-gray-300"
      >
        <FaChartPie className="text-xl text-[#DE4313]" />
        <span className="text-2xl font-bold">Dashboard</span>
      </Link>

      {/* Right Profile Section */}
      <div className="relative">
        {/* Profile Image */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on click
        >
          <img
            src={userProfile?.avatar || "https://via.placeholder.com/40"}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
            <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
              My Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
