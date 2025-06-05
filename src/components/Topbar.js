import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";

const Topbar = () => {
    const [login, setLogin] = useState(true);
    return (
        <div className="top-bar">
            <div className="container-fluid custom-container">
                <div className="row g-0 align-items-center">
                    <ul className="list-inline mb-0 text-center text-md-end">
                        {login ? (
                        <>
                            <li className="list-inline-item py-2 me-3 align-middle">
                                <Link to={"/profile"} className="text-dark fw-medium fs-13">
                                    <i className="uil uil-user"></i> 내 정보
                                </Link>
                            </li>
                            <li className="list-inline-item py-2 me-3 align-middle">
                                <Link to={"/"} className="text-dark fw-medium fs-13">
                                    <i className="uil uil-user"></i> 로그아웃
                                </Link>
                            </li>
                        </>
                        ) : (
                        <>
                            <li className="list-inline-item py-2 me-3 align-middle">
                                <Link to={"/"} className="text-dark fw-medium fs-13">
                                    <i className="uil uil-user"></i> 로그인
                                </Link>
                            </li>
                            <li className="list-inline-item py-2 me-2 align-middle">
                                <a href="#signupModal" className="text-dark fw-medium fs-13" data-bs-toggle="modal">
                                    <i className="uil uil-lock"></i> 회원가입
                                </a>
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