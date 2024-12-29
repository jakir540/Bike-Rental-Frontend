import AdminDashboard from "@/pages/dashboard/admin/adminDashboard/AdminDashboard";
import UserDashboard from "@/pages/dashboard/user/userDashBoard/UserDashboard";
import DashboardNavbar from "@/pages/sharedPage/navbar/DashboardNavbar/DashboardNavbar";
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
  const userRole = userProfile?.role;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <DashboardNavbar />

      {/* Main Content Wrapper */}
      <div className="flex flex-1">
        {/* Sticky Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6 fixed top-16 left-0 h-[calc(100vh-64px)]">
          <div className="flex flex-col items-center mb-10">
            {/* <div className="w-24 h-24 rounded-full bg-gray-500 mb-4">
              <img
                src={userProfile?.avatar || ""}
                alt="User"
                className="w-full h-full object-cover rounded-full"
              />
            </div> */}
          </div>

          {/* Conditionally render admin or user dashboard based on userRole */}
          {userRole === "admin" ? <AdminDashboard /> : <UserDashboard />}
        </aside>

        {/* Main Content Area with Margin for Sticky Sidebar */}
        <main className="flex-1 ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
