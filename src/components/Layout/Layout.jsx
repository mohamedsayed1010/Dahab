import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Tabs from "../Tabs/Tabs";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


export default function Layout() {
  return (
    <div className="bg-theme  bg-cover bg-left-top bg-no-repeat min-h-screen"> 
      <Navbar />
      <Tabs/>
      <Outlet/>
      <Footer />
    </div>
  );
}