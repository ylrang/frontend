
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { rndItems } from "../components/NavItems";
import Switcher from "../components/Switcher";

const MainLayout = () => {
    return (
        <>
            <Topbar />
            <Navbar items={rndItems} />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
            <Switcher />
            
        </>
    );
}

export default MainLayout;