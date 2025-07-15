import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import "./FEPList.css";
const FEPList = () => {
    const [data, setData] = useState([
        { id: 1, index_num: '1', name: '외부인자', 
            children: [
                { id: 2, index_num: '1.1', name: '처분장 이슈',
                    children: [
                        { id: 3, index_num: '1.1.1', name: '품질보증 및 관리' },
                        { id: 4, index_num: '1.1.2', name: '부지조사' },
                        { id: 5, index_num: '1.1.3', name: '설계' },
                        { id: 6, index_num: '1.1.4', name: '일정 및 계획' },
                    ] 
                },
                { id: 7, index_num: '1.2', name: '지질학적 인자' }
            ]
        },
        { id: 8, index_num: '2', name: '폐기물포장물 인자' }
    ]);
    
    const renderFEP = ({ item, depth=0 }) => {
        const hasChildren = item.children && item.children.length > 0;
        return(
                <div class="accordion-item mt-2 border-0">
                    <div class="accordion-header" id={`general${item.id}`}>
                        <Link to={`/fepdocs/${item.id}`}>{item.index_num}. {item.name}</Link>
                        {hasChildren ? (
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false" aria-controls={`collapse${item.id}`}></button>
                        ) : (
                            <button class="accordion-button accordion-link" type="button"></button>
                        )}
                    </div>
                    {hasChildren && (
                    <div id={`collapse${item.id}`} class="accordion-collapse collapse" aria-labelledby={`heading${item.id}`} data-bs-parent={`accordionDepth${depth}`}>
                        <div class="accordion-body pt-1">
                            <div class="accordion" id={`accordionDepth${depth + 1}`}>
                                {item.children.map((child) => renderFEP({item: child, depth: depth + 1}))}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
        )
    }

    return (
        <>
            <PageTitle title="KINS-KIGAM General FEP List" />
            <section class="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9">
                            <div class="mb-4">
                                <h5>FEP List</h5>
                            </div>
                            <div class="accordion accordion-flush faq-box accordion-custom-fep" id="accordionDepth0">
                                {data.map((item) => renderFEP({ item }))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default FEPList;