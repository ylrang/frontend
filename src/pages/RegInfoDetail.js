import PageTitle from "../components/PageTitle";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReg } from "../api/rndApi";

const RegInfoDetail = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();
    

    useEffect(() => {
        const getRegData = async () => {
            setLoading(true);
            try {
                const res = await getReg(id);
                console.log(res.data);
                setData(res.data);                                                                                              
            } catch(e) {
                setError(e)
            } finally {
                setLoading(false);
            }
        }
        getRegData();
    }, [id]);

    return (
        <>
            <PageTitle title="규제 정보 상세 내용" />
            <section class="section">
                <div class="container-xxl">
                    <div class="row">
                        <div class="card blog-masonry-box shadow overflow-hidden p-2">
                            <div class="card-body p-4">
                                <div class="border-bottom pb-3 mt-4">
                                    <h3>{data.title}</h3>
                                    <ul class="list-inline mb-0 mt-3 text-muted">
                                        <li class="list-inline-item">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <i class="uil uil-edit-alt"></i>
                                                </div>
                                                <div class="ms-2">
                                                    <p class="mb-0">{data.writer}</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <i class="uil uil-calendar-alt"></i>
                                                </div>
                                                <div class="ms-2">
                                                    <p class="mb-0">{data.created_at}</p>
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
                                </div>
                                <div class="regulation-content" style={{minHeight: "200px", display: "flex", alignItems: "center"}}>
                                    <p class="text-muted mb-4">
                                    {data.description}
                                    </p>
                                </div>
                                <div class="card mt-4">
                                    <div class="p-3 border-bottom bg-light">
                                        <h6 class="mb-0">첨부파일</h6>
                                    </div>
                                    {data.file &&
                                    <div class="card-body">
                                        <div class="document-list">
                                            <p class="fs-16 mb-0"><i class="uil uil-file"></i> {data.file.name}<span class="text-muted"> ({data.file.size_format})</span> <a href="javascript:void(0)" class="text-muted"><i class="uil uil-import"></i></a></p>
                                        </div>
                                    </div>
                                    }
                                </div>
                                <h5 class="border-bottom fs-16 pb-2 mt-5">댓글</h5>
                                <div class="row mt-3">
                                    <div class="col-col-lg">
                                    <div class="position-relative mb-3">
                                        <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Enter your message"></textarea>
                                    </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 text-end">
                                        <button name="submit" type="submit" id="submit" class="btn btn-soft-primary fs-14 btn-hover px-3 py-2">작성 <i class="uil uil-message ms-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="mt-5 text-center">
                                <button type="button" class="btn btn-primary" style={{width: '8%'}}>목록</button>
                                {/* <button type="button" class="btn btn-soft-dark ms-2" style={{width: '15%'}} data-bs-toggle="modal" data-bs-target="#deleteModal">삭제</button>
                                <div id="deleteModal" class="modal fade" tabindex="-1" aria-labelledby="deleteModalLabel" style={{display: 'none'}} aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title mt-0" id="deleteModalLabel">삭제하기</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p style={{margin: '1em'}}>삭제한 게시글은 복구 할 수 없습니다. 삭제하시겠습니까?</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary waves-effect" data-bs-dismiss="modal">취소</button>
                                                <button type="button" class="btn btn-primary waves-effect waves-light">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegInfoDetail;