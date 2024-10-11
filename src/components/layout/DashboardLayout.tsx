import AdminDashboard from "@/pages/dashboard/admin/adminDashboard/AdminDashboard";
import UserDashboard from "@/pages/dashboard/user/userDashBoard/UserDashboard";
import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

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
