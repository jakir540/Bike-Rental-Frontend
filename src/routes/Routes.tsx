import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/aboutUs/AboutUs";
import BikeDetails from "@/pages/dashboard/user/components/BikeDetail";
import ManageBikes from "@/pages/dashboard/admin/manageBikes/ManageBikes";
import ProfilePage from "@/pages/dashboard/admin/profilePage/ProfilePage";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import SignUp from "@/pages/signUp/SignUp";
import { createBrowserRouter } from "react-router-dom";
import AllUser from "@/pages/dashboard/admin/allUser/AllUser";
import AddBike from "@/pages/dashboard/admin/AddBike/AddBike";
import AllBikes from "@/pages/home/AllBikes";
import BikeListing from "@/pages/dashboard/user/bikeListing/BikeListing";
import MyRentals from "@/pages/dashboard/user/myRental/MyRentals";
import ReturnBike from "@/pages/dashboard/admin/adminDashboard/returnBike/ReturnBike";
import ErrorPage from "@/pages/dashboard/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "bikes/:id",
        element: <BikeDetails />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "bikes",
        element: <AllBikes />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <ProfilePage />,
      },
      {
        path: "add-bike",
        element: <AddBike />,
      },
      {
        path: "bikes",
        element: <ManageBikes />,
      },
      {
        path: "return-bike",
        element: <ReturnBike />,
      },
      {
        path: "users",
        element: <AllUser />,
      },
      {
        path: "bikeList",
        element: <BikeListing />,
      },
      {
        path: "rentals",
        element: <MyRentals />,
      },
    ],
  },
]);

export default router;
