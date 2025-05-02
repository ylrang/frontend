import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid custom-container">
                <Link to={"/"} className="navbar-brand text-dark fw-bold me-auto">
                    <img src="images/kins-logo.png" height="22" alt="Image" className="logo-light" />
                    <img src="images/KINS_LOGO.png" height="22" alt="Image" className="logo-dark" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto navbar-center">
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link" role="button">R&D 지원 프로그램 안내</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link" role="button">R&D 지원 프로그램 안내</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link" role="button">R&D 지원 프로그램 안내</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link" role="button">R&D 지원 프로그램 안내</Link>
                        </li>
                    </ul>
                </div>
                <ul className="header-menu list-inline d-flex align-items-center mb-0">
                    <li className="list-inline-item dropdown my-2 d-none d-md-block">
                        <Link to={"/"} className="btn btn-primary rounded-3 me-2">파일 클라우드</Link>
                    </li>
                    <li>
                        <div className="text-center p-3">
                        <a href="#" id="mode" className="mode-btn text-white rounded-circle" hidden>
                            <i className="uil uil-brightness mode-dark mx-auto"></i>
                            <i className="uil uil-moon mode-light"></i>
                        </a>
                        </div>
                    </li>
                </ul>
                <div>
                    <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;