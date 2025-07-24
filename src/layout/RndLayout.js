
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { rndItems } from "../components/NavItems";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_AUTH_LOADING, REMOVE_AUTH_LOADING } from "../actions/types";
import { request_refresh, logout } from "../actions/authAction";

const RndLayout = () => {
    const dispatch = useDispatch();
    const { accessToken, loading } = useSelector(state => state.auth)

    useEffect(() => {
        let isMounted = true
        async function verifyUser() {
            dispatch({type: SET_AUTH_LOADING});
            try {
                dispatch(request_refresh());
            } catch (err) {
                dispatch(logout());
            } finally {
                isMounted && dispatch({type: REMOVE_AUTH_LOADING})
            }
        }

        !accessToken ? verifyUser() : dispatch({type: REMOVE_AUTH_LOADING});

        return () => {
            isMounted = false
        }
    }, [dispatch])

    return (
        loading ? "Loading" : 
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