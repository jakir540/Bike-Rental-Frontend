import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
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
            <span className="ml-4">Admin Profile</span>
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
            <span className="ml-4">Bike Management</span>
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
            <span className="ml-4">Add Bike</span>
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
            <span className="ml-4">User Management</span>
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
            <span className="ml-4">Return Bike</span>
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
      </ul>
    </nav>
  );
};

export default AdminDashboard;
