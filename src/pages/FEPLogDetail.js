import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import useParsedText from "../hooks/useParsedText";

const FEPLogDetail = () => {
    const { fepId } = useParams();
    const selectedId = parseInt(fepId, 10)
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
    const [log, setLog] = useState({
        id: 1,
        fep_id: 3,
        fep_type: 'KINS-KIGAM FEP List',
        fep_index_num: '1.1.1',
        fep_title: '품질보증 및 관리',
        updated_by: '홍길동',
        updated_at: '2025-06-30 10:00:01',
        text: '설명 내용 수정',
        field_name: '설명',
        content: '- 처분장의 부지조사, 설계, 건설, 운영 및 폐쇄기간 동안 수행된 품질보증 및 품질관리 절차와 시험. 폐기물 포장물, 컨테이너 및 인공구조물의 제작과 안전성평가 및 성능평가에 대한 품질보증, 데이터관리를 포함한다.',
    })
    const LogDetailCollapse = ({title, field, content}) => {
        const parsedContent =  useParsedText(content);
        return (
        <div class="accordion accordion-custom-log" id={`accordion-${field}`}>
            <div class="accordion-item">
                <h2 class="accordion-header" id={`heading-${field}`}>
                <button class="accordion-button fw-bold bg-light text-muted p-2" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${field}`} aria-expanded="true" aria-controls={`collapse-${field}`}>
                    {title}
                </button>
                </h2>
                <div id={`collapse-${field}`} class="accordion-collapse collapse show" aria-labelledby={`heading-${field}`} data-bs-parent={`#accordion-${field}`}>
                    <div class="accordion-body px-3 py-2">
                        {parsedContent}
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return (
        <>
            <PageTitle title="FEP 문서" />
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ms-2">
                                <h4 class="mb-3">수정 내용:&nbsp;&nbsp;{content.index_num}. {content.title}</h4>
                            </div>
                            <div class="text-end mb-3">
                                <button type="button" class="btn btn-sm btn-soft-success me-1">승인</button>
                                <button type="button" class="btn btn-sm btn-soft-danger">거절</button>
                            </div>
                            <div>
                                <div class="card mt-2">
                                    <div class="card-body pt-4 pb-2">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label fs-14 fw-bold">FEP 문서</label>
                                                    <p class="text-muted fs-15">KINS-KIGAM FEP List: {content.index_num}. {content.title}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-0">
                                                    <label class="form-label fs-14 fw-bold">작성자</label>
                                                    <p class="text-muted fs-15">{log.updated_by}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-0">
                                                    <label class="form-label fs-14 fw-bold">수정일</label>
                                                    <p class="text-muted fs-15">{log.updated_at}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                            {/* <div class="col-lg-12">
                                                <div class="mb-0">
                                                    <label class="form-label text-muted ms-2 mb-0 fs-14 fw-bold">비고</label>
                                                    <p class="input-plaintext">{log.text}</p>
                                                </div>
                                            </div> */}
                                    </div>
                                    <div class="card-body p-4 border-top">
                                        <h6 class="fs-17 fw-semibold mb-3">수정 내용</h6>
                                        <p class="text-muted fs-15 mb-5">{log.text}</p>
                                        <div class="mt-2">
                                        <LogDetailCollapse title={"설명"} field={"description"} content={content.description}/>
                                        </div>
                                        <div class="mt-4">
                                        <LogDetailCollapse title={"범주"} field={"category"} content={content.category}/>
                                        </div>
                                        <div class="mt-4">
                                        <LogDetailCollapse title={"성능과 안전에 관한 사항"} field={"ps_relavance"} content={content.ps_relavance}/>
                                        </div>
                                        <div class="mt-4">
                                        <LogDetailCollapse title={"관련 규제 FEP"} field={"regulatory_fep"} content={content.regulatory_fep}/>
                                        </div>
                                        <div class="mt-4">
                                        <LogDetailCollapse title={"관련 사업자 FEP"} field={"license_fep"} content={content.license_fep}/>
                                        </div>
                                        <div class="mt-4">
                                        <LogDetailCollapse title={"참고 국외 FEP"} field={"reference_fep"} content={content.reference_fep}/>
                                        </div>
                                        <div class="mt-4">
                                        <LogDetailCollapse title={"TSPA Model"} field={"TSPA_Model"} content={content.TSPA_Model}/>
                                        </div>
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

export default FEPLogDetail;