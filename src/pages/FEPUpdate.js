import { useState } from "react";
import PageTitle from "../components/PageTitle";
const FEPUpdate = () => {
    return (
        <>
            <PageTitle title="FEP 문서 수정" />
            <section class="section">
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                    <form>
                        {/* <div class="row mb-3">
                            <label for="nameInput" class="col-sm-3 col-form-label">FEP 이름</label>
                            <div class="col-sm-9">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>FEP 1.1</option>
                                        <opiton></opiton>
                                    </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="nameInput" class="col-sm-3 col-form-label">FEP 이름</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" aria-label="Last name" />
                            </div>
                        </div> */}
                        <div class="col-md-12">
                            <div class="mb-4">
                                <h5 class="mb-2">FEP 이름</h5>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-4">
                                <h5 class="mb-2">범주</h5>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h5 class="mb-2">설명</h5>
                                <textarea class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h5 class="mb-2">성능과 안전에 관한 사항</h5>
                                <textarea class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                             <div class="mb-4">
                                <h5 class="mb-2">관련 규제 FEP</h5>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-md-12">
                             <div class="mb-4">
                                <h5 class="mb-2">관련 사업자 FEP</h5>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-md-12">
                             <div class="mb-4">
                                <h5 class="mb-2">참고 국외 FEP</h5>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h5 class="mb-2">TSPA Model</h5>
                                <textarea class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="mt-3 text-end">
                            <a class="btn btn-primary fs-14">저장하기</a>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default FEPUpdate;