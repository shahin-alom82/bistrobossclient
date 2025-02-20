import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
      const location = useLocation()
      const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes("register");
      return (
            <div className="font-bodyFont">
                  {noHeaderFooter || <Header />}
                  <Outlet />
                  {noHeaderFooter || <Footer />}
            </div>
      );
};

export default RootLayout;