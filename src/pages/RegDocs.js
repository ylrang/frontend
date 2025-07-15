import React, { useState, useEffect } from "react"
import "./RegDocs.css";

import { getRegDocs } from "../api/kinsdbApi"
import EmptyState from "../components/EmptyState"
import Pagination from "../components/Pagination"
import RegDocsCard from "./RegDocsCard"
import FilterSelect from "../components/FilterSelect";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
const RegDocs = () => {
    const serialList = ["10CRF60", "SSR-5", "10CRF63", "SSG-14", "SSG-23", "SSG-31", "ACT No.1988:20", "SSMFS 2008:37", "40CFR191", "40CFR197", "RECDOC-1.2.1", "GMBI.1993,Nr.13,S.220", "GS-G-3-4", "SFS 2018:505"]
    const sectorList = ["Safety Context", "처분안전", "부지환경", "천연방벽", "공학적방벽", "방사성폐기물", "부지개발", "URL개발", "처분시설개발", "안전사례"]
    const [serial, setSerial] = useState("")
    const [sector, setSector] = useState("")
    const [search, setSearch] = useState("")
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setpageCount] = useState(1);
    const fetchRegDocs = async (page) => {
        setLoading(true);
        const params = { page }
        if (search) params.search = search;
        if (serial) params.serial = serial;
        if (sector) params.sector = sector;
        try {
            console.log(params);
            const res = await getRegDocs(params);
            console.log(res.data);
            setData(res.data.regdbList);
            setCurrentPage(res.data.curPage);
            setpageCount(res.data.pageCnt);
        } catch(e) {
            setError(e)
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchRegDocs(currentPage);
    }, [currentPage]);
    
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleFilter = () => {
        fetchRegDocs(1, serial, sector, search);
    }
    const handleEnterKey = (e) => {
        if (e.key === "Enter"){
            handleFilter();
        }
    }
    if (loading) {
        return <Header />
    }

    if (error) {
        alert(error);
        window.history.back();
        return null;
    }

    const isEmpty = data.length === 0;
    return(
        <>
        <PageTitle title="규제기준 데이터베이스" />
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="candidate-list-widgets mb-4">
                            <div class="row g-2">
                                <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                    <i class="uil uil-clipboard-notes"></i>
                                    <FilterSelect name="choices-single-docs" id="choices-single-docs" onChange={setSerial}>
                                        <option value="">문서</option>
                                        <option value="10CRF60">10CRF60</option>
                                        <option value="SSR-5">SSR-5</option>
                                        <option value="10CRF63">10CRF63</option>
                                        <option value="SSG-14">SSG-14</option>
                                        <option value="SSG-23">SSG-23</option>
                                        <option value="SSG-31">SSG-31</option>
                                        <option value="ACT No.1988:20">ACT No.1988:20</option>
                                        <option value="SSMFS 2008:37">SSMFS 2008:37</option>
                                        <option value="40CFR191">40CFR191</option>
                                        <option value="40CFR197">40CFR197</option>
                                        <option value="RECDOC-1.2.1">RECDOC-1.2.1</option>
                                        <option value="GMBI.1993,Nr.13,S.220">GMBI.1993,Nr.13,S.220</option>
                                        <option value="GS-G-3-4">GS-G-3-4</option>
                                        <option value="SFS 2018:505">SFS 2018:505</option>
                                    </FilterSelect>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                    <i class="uil uil-clipboard-notes"></i>
                                    <FilterSelect name="choices-single-cate" id="choices-single-cate" onChange={setSector}>
                                        <option value="">부문</option>
                                        <option value="Safety Context">1. Safety Context</option>
                                        <option value="처분안전">2. 처분안전</option>
                                        <option value="부지환경">3. 부지환경</option>
                                        <option value="천연방벽">4. 천연방벽</option>
                                        <option value="공학적방벽">5. 공학적방벽</option>
                                        <option value="방사성폐기물">6. 방사성폐기물</option>
                                        <option value="부지개발">7. 부지개발</option>
                                        <option value="URL개발">8. URL개발</option>
                                        <option value="처분시설개발">9. 처분시설 개발</option>
                                        <option value="안전사례">10. 안전사례</option>
                                    </FilterSelect>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                        <i class="uil uil-search"></i>
                                        <input type="search" class="form-control filter-job-input-box" id="exampleFormControlInput1" name="search" value={ search } onChange={onChangeSearch} placeholder="제목을 입력하세요" onBlur={(e) => (e.target.value = e.target.value.trim())} onKeyUp={(e) => handleEnterKey(e)}/>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div>
                                        <button class="btn btn-primary" onClick={handleFilter}><i class="uil uil-filter"></i> 적용</button>
                                        <a href="javascript:void(0)" class="btn btn-success ms-2"><i class="uil uil-cog"></i> 상세 검색</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-4">
                    <div class="col-lg-12">
                        <div class="mb-3 mb-lg-0">
                            <b className="fs-16 mb-0">{isEmpty? "페이지 없음" :`페이지 ${currentPage} / ${pageCount}`}</b>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-2">
                    <div class="col-lg-12">
                        <div class="candidate-list" id="regdocs-list">
                        {isEmpty ? (<EmptyState primaryText="데이터가 없습니다"/>):(
                            <>
                                <div className="regdocs-item">
                                    {data.map((item) => {
                                        const { id, title, index_num, index_title_kor, sector, document, writer, created_at } = item;
                                        return <RegDocsCard key={id} id={id} title={title} index_num={index_num} index_title_kor={index_title_kor} sector={sector} document={document}/>
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
        </section>
        </>
    )
}

export default RegDocs