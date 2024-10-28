import {
  faAdd,
  faArrowRotateBack,
  faHome,
  faMotorcycle,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
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
                <FontAwesomeIcon icon={faUserTie} className="px-1" /> Admin
                Profile
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bikes"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                  : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
              }
            >
              <span className="ml-4">
                <FontAwesomeIcon icon={faMotorcycle} className="px-1" /> Bike
                Management
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-bike"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                  : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
              }
            >
              <span className="ml-4">
                <FontAwesomeIcon icon={faAdd} className="px-1" /> Add Bike
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                  : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
              }
            >
              <span className="ml-4">
                <FontAwesomeIcon icon={faUser} className="px-1" /> User
                Management
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/return-bike"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                  : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
              }
            >
              <span className="ml-4">
                {" "}
                <FontAwesomeIcon icon={faArrowRotateBack} className="px-1" />
                Return Bike
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
    </div>
  );
};

export default AdminDashboard;
