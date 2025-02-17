import { NavLink } from "react-router-dom";
import {
  faHome,
  faMotorcycle,
  faUserTie,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserDashboard = () => {
  return (
    <nav>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
            }
          >
            <span className="ml-4">
              {" "}
              <FontAwesomeIcon icon={faUserTie} className="px-1" /> User Profile
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/bikeList"
            className={({ isActive }) =>
              isActive
                ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
            }
          >
            <span className="ml-4">
              <FontAwesomeIcon icon={faMotorcycle} className="px-1" />
              Bike Management
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/rentals"
            className={({ isActive }) =>
              isActive
                ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
            }
          >
            <span className="ml-4">
              <FontAwesomeIcon icon={faCar} className="px-1" />
              Rental
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
            }
          >
            <span className="ml-4">
              {" "}
              <FontAwesomeIcon icon={faHome} className="px-1" />
              Home
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserDashboard;
