import { Outlet } from "react-router";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="max-w-7xl mx-auto">
     
          <Navbar />
          <div className="min-h-screen">
                <Outlet />
          </div>
        
          <Footer/>
    </div>
  );
}
