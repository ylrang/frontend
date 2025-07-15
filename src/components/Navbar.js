import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = ({ items }) => {
    // const handleScroll= () => {
    //     const navbar =document.getElementById("navbar");
    //     const offset = window.scrollY;
    //     if (offset >= 38) {
    //         navbar.classList.add("fixed-top", "sticky", "nav-sticky")
    //     } else {
    //         navbar.classList.remove("fixed-top", "sticky", "nav-sticky")
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // }, [])
    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid custom-container">
                <Link to={"/"} className="navbar-brand text-dark fw-bold me-auto">
                    <img src="/assets/images/kins-logo.png" height="22" alt="Home" className="logo-light" />
                    <img src="/assets/images/KINS_LOGO.png" height="22" alt="Home" className="logo-dark" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto navbar-center">
                        {items.map((item) => 
                            item.dropdown ? (
                                <Dropdown key={item.id} item={item} />
                            ) : (
                                <li key={item.id} className="nav-item">
                                    <a className="nav-link" href={item.path}>
                                        {item.label}
                                    </a>
                                </li>
                            )
                        )}
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