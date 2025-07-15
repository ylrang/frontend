import React, { useEffect, useState } from "react";

import PageTitle from "../components/PageTitle";
import RegInfoCard from "./RegInfoCard";
import Pagination from "../components/Pagination";
import { getRegs } from "../api/rndApi";
import EmptyState from "../components/EmptyState";
import Header from "../components/Header";

const RegInfo = () => {
    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setpageCount] = useState(1);
    const fetchRegs = async (page) => {
        setLoading(true);
        try {
            const res = await getRegs({ page });
            console.log(res.data);
            setData(res.data.regList);
            setCurrentPage(res.data.curPage);
            setpageCount(res.data.pageCnt);
        } catch(e) {
            setError(e)
        } finally {
            setLoading(false);
        }
    }

    const onChange = (e) => {
        setKeyword(e.target.value)
    }
    useEffect(() => {
        fetchRegs(currentPage);
        
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo({ top: 0 });
        document.documentElement.style.scrollBehavior = '';
    }, [currentPage]);
    
    
    // if (loading) return <Header></Header>;
    if (error) return <div>{error.message}</div>;

    const isEmpty = data.length === 0;

    return (
        <>
            <PageTitle title="규제 정보 제공" />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row align-items-end">
                                <div className="col-lg-8">
                                    <div className="mb-3 mb-lg-0">
                                        <b className="fs-16 mb-0">{isEmpty? "페이지 없음" :`페이지 ${currentPage} / ${pageCount}`}</b>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <aside className="widget widget_search">
                                        <form className="position-relative">
                                            <input className="form-control" type="text" value={keyword} onChange={onChange} placeholder="검색어를 입력하세요" />
                                            <button className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y fs-22 me-2" type="submit"><span className="mdi mdi-magnify text-muted"></span></button>
                                        </form>
                                    </aside>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="reginfo-listing mt-4">
                                        {isEmpty ? (<EmptyState primaryText="데이터가 없습니다"/>):
                                        (
                                        <>
                                            <div className="reginfo-item">
                                                {data.map((item) => {
                                                    const { id, title, created_at, writer } = item;
                                                    return <RegInfoCard key={id} id={id} title={title} created_at={created_at} writer={writer}/>
                                                })}
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 mt-4 pt-2">
                                                    {pageCount > 1 && (<Pagination pageCount={pageCount} pageRange={5} currentPage={currentPage} setCurrentPage={setCurrentPage} />)}
                                                </div>
                                            </div>
                                        </>
                                        )}
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

export default RegInfo;