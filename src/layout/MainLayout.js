
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { rndItems } from "../components/NavItems";
import Switcher from "../components/Switcher";

const MainLayout = () => {
    return (
        <>
            <div className="alert-container"></div>
            <div className="main-content">
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;