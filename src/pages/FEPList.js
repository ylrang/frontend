import React from "react";
import PageTitle from "../components/PageTitle";

const FEPList = () => {
    return (
        <>
            <PageTitle title="내 정보" />
            <section class="section">
                <div class="container-xxl">
                    <div class="row">
                        <div class="col-lg-3 col-md-5">
                            <div class="sidebar ms-lg-4 ps-lg-4 mt-5 mt-lg-0">
                                <div class="mt-4 pt-2">
                                    <div class="sd-title">
                                        <h6 class="fs-16 mb-3">Archives</h6>
                                    </div>
                                    <ul class="list-unstyled mb-0 mt-3 sidebar-collapse">
                                        <li class="py-1">
                                            <a class="me-2 text-muted d-inline-flex align-items-center collapsed sidebar-links" data-bs-toggle="collapse" data-bs-target="#fep1-collapse" aria-expanded="false"> 생태계</a>
                                            <div class="collapse" id="fep1-collapse">
                                                <ul class="list-unstyled pb-1 small">
                                                    <li>
                                                        <a href="#" class="text-muted d-inline-flex align-items-center">overview</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div>
                                <div class="row justify-content-center">
                                    <div class="col-lg-7">
                                        <div class="text-center mb-2">
                                        <h3>생태계</h3>
                                        </div>
                                    </div>
                                </div>
                                <ul class="list-inline mb-0 mt-3 text-muted text-end">
                                    <li class="list-inline-item">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0">
                                                <i class="uil uil-edit-alt"></i>
                                            </div>
                                            <div class="ms-2">
                                                <p class="mb-0">Alice Mellor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0">
                                                <i class="uil uil-calendar-alt"></i>
                                            </div>
                                            <div class="ms-2">
                                                <p class="mb-0"> Aug 02, 2021</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0">
                                                <i class="uil uil-comments-alt"></i>
                                            </div>
                                            <div class="ms-2 flex-grow-1">
                                                <p class="mb-0"> 2 Comments</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="table-responsive">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>제목</th><td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th></th><td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FEPList;