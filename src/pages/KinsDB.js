import React from "react";

const KinsDB = () => {
    return (
        <>
            <section class="bg-home3" id="home">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="text-center mb-5">
                                <h3 class="display-5 fw-semibold mb-2">심층처분 데이터베이스</h3>
                                <p class="fs-17">Regulation Database</p>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div class="registration-form">
                            <div class="row justify-content-center g-0">
                                <div class="col-lg-8">
                                    <div class="filter-search-form mt-3 mt-lg-0">
                                        <input type="search" id="reg-title" class="form-control filter-input-box" />
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="mt-3 mt-lg-0 h-100">
                                        <button class="btn btn-primary submit-btn w-100 h-100" type="submit"><i class="uil uil-search me-1"></i> 검색</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <div class="card-body px-4 py-5">
                                    <div class="mt-4 text-center">
                                        <h6 class="fs-20 mb-2">규제기준</h6>
                                        <p class="text-muted mb-4">법령 체계 및 규제 관련 법안</p>
                            
                                        <a href="{% url 'brnc' %}" class="form-text text-primary">Database 접속 <i class="uil uil-angle-right-b"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <div class="card-body px-4 py-5">
                                    <div class="mt-4 text-center">
                                        <h6 class="fs-20 mb-2">규제사례</h6>
                                        <p class="text-muted mb-4">안전규제 사례 검토별 이슈</p>
                                        <a href="{% url 'unist' %}" class="form-text text-primary">Database 접속 <i class="uil uil-angle-right-b"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default KinsDB;