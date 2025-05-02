import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="bg-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                                <h4 className="text-white mb-4">KINS</h4>
                                <p className="text-white-50">R&D 지원제도 안내 (사업소개에 관한 요약)</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-item mt-4 mt-lg-0">
                                <p className="fs-16 text-white mb-4">Homepage</p>
                                <ul className="list-unstyled footer-list mb-0">
                                    <li>
                                        <Link to={"/about"}>
                                            <i className="mdi mdi-chevron-right"></i> R&D 지원제도 안내
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <i className="mdi mdi-chevron-right"></i> 심층처분 데이터베이스
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <i className="mdi mdi-chevron-right"></i> 기관 안내
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-item mt-4 mt-lg-0">
                                <p className="text-white fs-16 mb-4">Database</p>
                                <ul className="list-unstyled footer-list mb-0">
                                    <li>
                                        <Link to={"/"}>
                                            <i className="mdi mdi-chevron-right"></i> 데이터베이스 개요
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <i className="mdi mdi-chevron-right"></i> 규제 사례
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <i className="mdi mdi-chevron-right"></i> 규제 기준
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-item mt-4 mt-lg-0">
                                <p className="text-white fs-16 mb-4">File Cloud</p>
                                <ul className="list-unstyled footer-list mb-0">
                                    <li>
                                        <Link to={"/"}>
                                            <i className="mdi mdi-chevron-right"></i> 파일 공유 게시판
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <i className="mdi mdi-chevron-right"></i> 알림 관리
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-alt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <p className="text-white-50 text-center mb-0">
                                <script>document.write(new Date().getFullYear())</script> &copy; (주)엔씨스퀘어 - Copyright by
                                <a href="http://ncsquare.co.kr/" target="_blank" className="text-reset text-decoration-underline">NCS</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;