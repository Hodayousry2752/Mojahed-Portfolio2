import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";
import { useLenis } from "../../hooks/useLenis";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";

export default function Layout() {
  useLenis(); 
  return (
    <div className="bg-background text-foreground">
      <ScrollToTop />  
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  );
}