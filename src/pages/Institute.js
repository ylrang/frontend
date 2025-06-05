import React from "react";
import KakaoMap from "./KakaoMap";
import PageTitle from "../components/PageTitle";

const Institute = () => {
    return (
        <>
            <PageTitle title="기관 소개"/>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <ul className="faq-menu nav nav-fill nav-pills justify-content-center" id="pills-tab"  role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="institute-tab" data-bs-toggle="pill" data-bs-target="#instituteTab" type="button" role="tab" aria-selected="true">기관 소개</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="location-tab" data-bs-toggle="pill" data-bs-target="#locationTab" type="button" role="tab" aria-selected="false">오시는 길</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-12">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="instituteTab" role="tabpanel" aria-labelledby="institute-tab">
                                    <div className="mt-3">
                                        <h5 className="fs-20 fw-bold" style={{marginLeft: "38px"}}>설립목적</h5>
                                        <div className="text-center pb-5 mt-4">
                                            <img src="assets/images/about/설립목적.png" alt="vision" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="fs-20 fw-bold" style={{marginLeft: "38px"}}>비전</h5>
                                        <div className="text-center p-5 mt-4">
                                            <img src="assets/images/about/비전.png" alt="vision" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="fs-20 fw-bold" style={{marginLeft: "38px"}}>경영방침</h5>
                                        <div className="text-center pb-5 mt-4">
                                            <img src="assets/images/about/경영방침.png" alt="vision" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="locationTab" role="tabpanel" aria-labelledby="location-tab">
                                    <KakaoMap />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Institute;