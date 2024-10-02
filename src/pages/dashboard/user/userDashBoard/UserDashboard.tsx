import { NavLink } from "react-router-dom";

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
            <span className="ml-4">User Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/rental"
            className={({ isActive }) =>
              isActive
                ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
                : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
            }
          >
            <span className="ml-4">Rental</span>
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
            <span className="ml-4">Bike Management</span>
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
            <span className="ml-4">Home</span>
          </NavLink>
        </li>

        {/* Add more user-specific routes here */}
      </ul>
    </nav>
  );
};

export default UserDashboard;
