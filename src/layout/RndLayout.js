
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { rndItems } from "../components/NavItems";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_AUTH_LOADING, REMOVE_AUTH_LOADING } from "../actions/types";
import { request_refresh } from "../actions/authAction";

const RndLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(request_refresh())
    }, [dispatch])

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