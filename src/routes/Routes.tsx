import MainLayout from "@/components/layout/MainLayout";
import AboutUs from "@/pages/aboutUs/AboutUs";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MainLayout />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
