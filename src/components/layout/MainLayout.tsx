import Footer from "@/pages/sharedPage/footer/Footer";
import Navbar from "@/pages/sharedPage/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="max-w-[1360px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
