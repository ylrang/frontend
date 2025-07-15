import Editor from "../components/Editor";
import PageTitle from "../components/PageTitle";
const FEPUpdate = () => {
    return (
        <>
            <PageTitle title="FEP 문서 수정" />
            <section class="section">
                <div class="container">
                    <form>
                        <div class="row mb-3">
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
                        </div>
                        
                        <div class="col-md-12">
                            <div class="mb-2">
                                <label for="subjectInput" class="form-label">범주</label>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label for="id_description" class="form-label">설명</label>
                                <Editor />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label for="meassageInput" class="form-label">성능과 안전에 관한 사항</label>
                                <textarea class="form-control" id="meassageInput" name="comments" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-2">
                                <label for="subjectInput" class="form-label">관련 규제 FEP</label>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-2">
                                <label for="subjectInput" class="form-label">관련 사업자 FEP</label>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-2">
                                <label for="subjectInput" class="form-label">참고 국외 FEP</label>
                                <input type="text" class="form-control" id="subjectInput" name="subject" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label for="meassageInput" class="form-label">TSPA Model</label>
                                <textarea class="form-control" id="meassageInput" name="comments" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="mt-3 text-end">
                            <a class="btn btn-primary fs-14">저장하기</a>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}
export default FEPUpdate;