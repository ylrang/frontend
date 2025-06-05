import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="page-content">
                <section className="bg-home" id="home" style={{backgroundImage: "url('/assets/images/kins.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <div className="bg-overlay" style={{backgroundColor: "#1e2b38", opacity: "0.5"}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="text-center text-white mb-5">
                                        <h3 className="display-5 fw-semibold mb-3"><span className="text-warning fw-bold">R&D 지원</span><br />심층처분시스템 규제요소 개발</h3>
                                        <p className="fs-17">한국원자력 안전기술원 KINS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="treding-keywords list-inline mb-0 text-white-50 mt-4 mt-lg-3 text-center">
                                        <li className="list-inline-item text-white"><i className="mdi mdi-tag-multiple-outline text-warning fs-18"></i> 핵심사업:</li>
                                        <li className="list-inline-item"><a href="javascript:void(0)">DB 구축,</a></li>
                                        <li className="list-inline-item"><a href="javascript:void(0)">사업화 추진,</a></li>
                                        <li className="list-inline-item"><a href="javascript:void(0)">검증 및 개발</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </section>
                <div className="position-relative">
                    <div className="shape">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="150" preserveAspectRatio="none" viewBox="0 0 1440 220">
                            <g mask="url(&quot;#SvgjsMask1004&quot;)" fill="none">
                                <path d="M 0,213 C 288,186.4 1152,106.6 1440,80L1440 250L0 250z" fill="rgba(255, 255, 255, 1)"></path>
                            </g>
                            <defs>
                                <mask id="SvgjsMask1004">
                                    <rect width="1440" height="250" fill="#ffffff"></rect>
                                </mask>
                            </defs>
                        </svg>
                    </div>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-0">
                                    <h3 className="title mb-3">Quick Menu</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                <div className="popu-category-box rounded text-center">
                                    <div className="popu-category-icon icons-md">
                                        <span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="1em"><path className="uim-tertiary" d="M19,6H5C3.34315,6,2,7.34315,2,9v2.72087L8.8374,14h6.3252L22,11.72087V9C22,7.34315,20.65685,6,19,6z"></path><path className="uim-primary" d="M10,6V5h4v1h2V5c-0.00126-1.10405-0.89595-1.99874-2-2h-4C8.89595,3.00126,8.00126,3.89595,8,5v1H10z M8.8374,14L2,11.72083V18c0.00181,1.65611,1.34389,2.99819,3,3h14c1.65611-0.00181,2.99819-1.34389,3-3v-6.27917L15.1626,14H8.8374z"></path></svg></span>
                                    </div>
                                    <div className="popu-category-content mt-4">
                                        <Link to={"/"} className="text-dark stretched-link">
                                            <h6 className="fs-14">규제 정보 제공</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                <div className="popu-category-box rounded text-center">
                                    <div className="popu-category-icon icons-md">
                                        <span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="1em"><path className="uim-quaternary" d="M21,2H9C8.44803,1.99969,8.00031,2.44689,8,2.99886C8,2.99924,8,2.99962,8,3v4h8c0.55197-0.00031,0.99969,0.44689,1,0.99886C17,7.99924,17,7.99962,17,8v8h4c0.55197,0.00031,0.99969-0.44689,1-0.99886c0-0.00038,0-0.00076,0-0.00114V3c0.00031-0.55197-0.44689-0.99969-0.99886-1C21.00076,2,21.00038,2,21,2z"></path><path className="uim-primary" d="M3,12h8c0.55229,0,1,0.44771,1,1v8c0,0.55228-0.44771,1-1,1H3c-0.55228,0-1-0.44772-1-1v-8C2,12.44771,2.44772,12,3,12z"></path><path className="uim-tertiary" d="M16,7H6C5.44803,6.99969,5.00031,7.44689,5,7.99886C5,7.99924,5,7.99962,5,8v4h6c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v6h4c0.55197,0.00031,0.99969-0.44689,1-0.99886c0-0.00038,0-0.00076,0-0.00114V8c0.00031-0.55197-0.44689-0.99969-0.99886-1C16.00076,7,16.00038,7,16,7z"></path></svg></span>
                                    </div>
                                    <div className="popu-category-content mt-4">
                                        <Link to={"/"} className="text-dark stretched-link">
                                            <h6 className="fs-14">심층처분 데이터베이스</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                <div className="popu-category-box rounded text-center">
                                    <div className="popu-category-icon icons-md">
                                        <span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"></rect><path className="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                                    </div>
                                    <div className="popu-category-content mt-4">
                                        <Link to={"/"} className="text-dark stretched-link">
                                            <h6 className="fs-14">클라우드 서비스</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="text-center">
                                    <h2 className="text-primary mb-4">Browse Our <span className="text-warning fw-bold">100+</span> Latest Works</h2>
                                    <p className="text-muted">준비중</p>
                                    <div className="mt-4 pt-2">
                                        <a href="javascript:void(0)" className="btn btn-primary btn-hover"><i className="uil uil-rocket align-middle ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;