import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import "./FEPDocs.css";
import TreeView from "../components/TreeNode";
import { useTreeState } from "../hooks/useTreeState";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FEPDocsView from "./FEPDocsView";
import FEPDocsEdit from "./FEPDocsEdit";

const FEPDocs = () => {
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
    const { state, dispatch } = useTreeState();
    const { id } = useParams();
    const selectedId = parseInt(id, 10)
    const [isEditing, setIsEditing] = useState(false)
    const [content, setContent] = useState(
        {   
            id: 3,
            index_num: '1.1.1',
            title: '품질보증 및 관리',
            category: 'Process',
            description: '- 처분장의 부지조사, 설계, 건설, 운영 및 폐쇄기간 동안 수행된 품질보증 및 품질관리 절차와 시험. 폐기물 포장물, 컨테이너 및 인공구조물의 제작과 안전성평가 및 성능평가에 대한 품질보증, 데이터관리를 포함한다.\r\n- 다양한 품질관리조치는 처분장의 생애주기동안 적용될 뿐만 아니라 폐기물포장물, 컨테이너 등의 제작에도 적용될 것이다. 품질관리절차, 목표 및 기준과 관련된 특정 규제가 있을 수 있다.',
            ps_relavance: '- 품질 관리 조치는 공학적 방벽과 천연 방벽으로 구성된 종합적인 방벽 시스템이 달성해야하는 품질에 영향을 미친다.\r\n- 부지 특성화 단계의 품질 관리 조치는 얻을 수 있는 정보의 품질에 영향을 미치고, 따라서 처분장 설계 품질과 처분장 내 운영 계획 및 실행에 영향을 미친다. 이러한 품질 관리 조치는 성능 및 안전 평가의 핵심 데이터를 제공하기 때문에 이러한 평가의 품질에도 영향을 준다.\r\n- 처분장 건설 단계의 품질 관리 조치는 폐기물 처분과 공학적 방벽 건설의 효과를 극대화 하는 데에 영향을 미친다.(예: excavation damaged zone (EDZ) 최소화, 암반의 수로로부터 갤러리 위치 격리)\r\n- 공학적방벽 제작/설치 단계의 품질 관리 조치는 폐쇄후 기간 동안 공학적방벽이 효과적으로 기능하도록 보장할 수 있다.\r\n- 적절한 품질 관리 조치를 시행하지 못하면 폐쇄후 기간 동안 설치된 각각 또는 상호 방벽의 성능이 저하되거나 천연 방벽과 효과적으로 작동하지 못할 수 있다.',
            regulatory_fep: 'X',
            license_fep: 'X',
            reference_fep: 'X',
            TSPA_Model: '지배 방정식 : X\r\n주요 입력인자 : X\r\n시나리오 : X',
        }
    )
    useEffect(()=> {
        dispatch({type: "INIT", data, selectedId });
    }, [selectedId])

    return (
        <>
            <PageTitle title="FEP 문서" />
            <section class="section">
                <div class="container-xxl">
                    <div class="row">
                        <div class="col-lg-3 col-md-5">
                            <div class="sidebar ps-lg-4 pe-lg-4 me-lg-3 mt-5 mt-lg-0 mb-3 fs-14">
                                <div class="mt-4 pt-3">
                                    <div class="sd-title">
                                        <h6 class="fs-16 mb-3">FEP List</h6>
                                    </div>
                                    <TreeView data={state}/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="ms-2">
                                <h4 class="mb-3">{content.index_num}.&nbsp;&nbsp;{content.title}</h4>
                            </div>
                            {!isEditing ? (
                                <>
                                    <div class="text-end mb-3">
                                        <Link to={`/fepdb/docs/${selectedId}/log`} class="btn btn-sm btn-primary me-1">최근 수정 기록</Link>
                                        <button type="button" class="btn btn-sm btn-soft-primary" onClick={() => setIsEditing(!isEditing)}>수정하기</button>
                                    </div>
                                    <FEPDocsView content={content}/>
                                </>
                            ) : (
                                <>
                                    <div class="text-end mb-3">
                                        <button type="button" class="btn btn-sm btn-primary" onClick={() => setIsEditing(!isEditing)}>저장</button>
                                    </div>
                                    <FEPDocsEdit content={content}/>
                                </>
                            )}
                            
                        </div>    
                    </div>
                </div>
            </section>
        </>
    )
}
export default FEPDocs;