import React from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useUser from "../hooks/useUser";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { axiosPrivateInstance } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/AuthAction";

const Topbar = () => {
    // const navigate = useNavigate()
    // const logout = useLogout()
    // const [loading, setLoading] = useState(false)
    // const { accessToken } = useAuth()
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.auth)
    
    const logoutHandler = () => {
        dispatch(logout());
    };
    // async function onLogout() {
    //     setLoading(true)
    //     await logout()
    //     navigate('/')
    // }

    return (
        <div className="top-bar">
            <div className="container-fluid custom-container">
                <div className="row g-0 align-items-center">
                    <ul className="list-inline mb-0 text-center text-md-end">
                        {isLoggedIn ? (
                        <>
                            <li className="list-inline-item py-2 me-3 align-middle"><div className="text-dark fw-medium fs-13">{user?.username}님</div></li>
                            <li className="list-inline-item py-2 me-3 align-middle">
                                <Link to={'auth/profile'} className="text-dark fw-medium fs-13">
                                    <i className="uil uil-user"></i> 정보 관리
                                </Link>
                            </li>
                            <li className="list-inline-item py-2 me-3 align-middle">
                                <a className="text-dark fw-medium fs-13" type="button" onClick={logoutHandler}>
                                    <i class="uil uil-lock"></i> 로그아웃
                                </a>
                            </li>
                        </>
                        ) : (
                        <>
                            <li className="list-inline-item py-2 me-3 align-middle">
                                <Link to={'auth/login'} className="text-dark fw-medium fs-13">
                                    <i class="uil uil-lock"></i> 로그인
                                </Link>
                            </li>
                            <li className="list-inline-item py-2 me-2 align-middle">
                                <Link to={'auth/register'} className="text-dark fw-medium fs-13">
                                    <i className="uil uil-user"></i> 회원가입
                                </Link>
                            </li>
                        </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar;