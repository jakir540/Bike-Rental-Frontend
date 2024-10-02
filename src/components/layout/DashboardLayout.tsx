// import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";
// import { useEffect } from "react";
// import { Outlet, NavLink } from "react-router-dom";

// const DashboardLayout = () => {
//   const { data, refetch } = useShowProfileQuery(undefined);

//   useEffect(() => {
//     if (data) {
//       refetch();
//     }
//   }, [data, refetch]);

//   const userProfile = data?.data;
//   console.log(userProfile);
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white p-6">
//         {/* User Profile Section */}
//         <div className="flex flex-col items-center mb-10">
//           {/* User Photo */}
//           <div className="w-24 h-24 rounded-full bg-gray-500 mb-4">
//             <img
//               src="" // Replace with the actual user image
//               alt="User"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
//           <h2 className="text-lg font-semibold">{userProfile?.name}</h2>{" "}
//           {/* Example user name */}
//         </div>

//         {/* Navigation Menu */}
//         <nav>
//           <ul className="space-y-4">
//             <li>
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
//                     : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
//                 }
//               >
//                 <span className="ml-4">Profile</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/dashboard/add-bike"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
//                     : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
//                 }
//               >
//                 <span className="ml-4">Add Bike</span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/dashboard/rental"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
//                     : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
//                 }
//               >
//                 <span className="ml-4">Rental</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/dashboard/bikes"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
//                     : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
//                 }
//               >
//                 <span className="ml-4">Bike Management</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/dashboard/users"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
//                     : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
//                 }
//               >
//                 <span className="ml-4">User Management</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-[#DE4313] flex items-center p-2 rounded-[20px] bg-gray-700"
//                     : "flex items-center p-2 rounded-[20px] hover:bg-gray-700 transition-colors"
//                 }
//               >
//                 <span className="ml-4">Home</span>
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;

import AdminDashboard from "@/pages/dashboard/admin/adminDashboard/AdminDashboard";
import UserDashboard from "@/pages/dashboard/user/userDashBoard/UserDashboard";
import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";
import { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
// import AdminDashboard from "./AdminDashboard"; // Admin-specific dashboard component
// import UserDashboard from "./UserDashboard"; // User-specific dashboard component

const DashboardLayout = () => {
  const { data, refetch } = useShowProfileQuery(undefined);

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

  const userProfile = data?.data;
  const userRole = userProfile?.role; // Assuming the role is part of userProfile
  console.log(userProfile);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 rounded-full bg-gray-500 mb-4">
            <img
              src={userProfile?.avatar || ""}
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-lg font-semibold">{userProfile?.name}</h2>
        </div>

        {/* Conditionally render admin or user dashboard based on userRole */}
        {userRole === "admin" ? <AdminDashboard /> : <UserDashboard />}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
