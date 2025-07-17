
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { rndItems } from "../components/NavItems";
import Switcher from "../components/Switcher";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { request_refresh } from "../store/AuthAction";

const RndLayout = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth)
    
    useEffect(() => {
        if (isLoggedIn === null) {
            dispatch(request_refresh());
        }
    }, [dispatch, isLoggedIn])

    return (
        <>
            <Topbar />
            <Navbar items={rndItems} />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
            <button id="back-to-top" style={{display: "none"}}>
                <i className="mdi mdi-arrow-up"></i>
            </button>
        </>
    );
}

export default RndLayout;