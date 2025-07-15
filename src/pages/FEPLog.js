import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";
import FEPLogCard from "./FEPLogCard";
const FEPLog = () => {
    const { fepId } = useParams();
    const selectedId = parseInt(fepId, 10)
    const [content, setContent] = useState(
        {   
            id: 3,
            index_num: '1.1.1',
            title: '품질보증 및 관리',
            description: '처분장의 부지조사, 설계, 건설, 운영 및 폐쇄기간 동안 수행된 품질보증 및 품질관리 절차와 시험. 폐기물 포장물, 컨테이너 및 인공구조물의 제작과 안전성평가 및 성능평가에 대한 품질보증, 데이터관리를 포함한다. 다양한 품질관리조치는 처분장의 생애주기동안 적용될 뿐만 아니라 폐기물포장물, 컨테이너 등의 제작에도 적용될 것이다. 품질관리절차, 목표 및 기준과 관련된 특정 규제가 있을 수 있다.',
            ps_relavance: '- 품질 관리 조치는 공학적 방벽과 천연 방벽으로 구성된 종합적인 방벽 시스템이 달성해야하는 품질에 영향을 미친다.\r\n- 부지 특성화 단계의 품질 관리 조치는 얻을 수 있는 정보의 품질에 영향을 미치고, 따라서 처분장 설계 품질과 처분장 내 운영 계획 및 실행에 영향을 미친다. 이러한 품질 관리 조치는 성능 및 안전 평가의 핵심 데이터를 제공하기 때문에 이러한 평가의 품질에도 영향을 준다.\r\n- 처분장 건설 단계의 품질 관리 조치는 폐기물 처분과 공학적 방벽 건설의 효과를 극대화 하는 데에 영향을 미친다.(예: excavation damaged zone (EDZ) 최소화, 암반의 수로로부터 갤러리 위치 격리)\r\n- 공학적방벽 제작/설치 단계의 품질 관리 조치는 폐쇄후 기간 동안 공학적방벽이 효과적으로 기능하도록 보장할 수 있다.\r\n- 적절한 품질 관리 조치를 시행하지 못하면 폐쇄후 기간 동안 설치된 각각 또는 상호 방벽의 성능이 저하되거나 천연 방벽과 효과적으로 작동하지 못할 수 있다.',
            regulatory_fep: 'X',
            license_fep: 'X',
            reference_fep: 'X',
            TSPA_Model: '지배 방정식 : X\r\n주요 입력인자 : X\r\n시나리오 : X',
        }
    )
    const [logs, setLogs] = useState([])
    useEffect(()=> {
        const data = [
            
            {
                id: 1,
                fep_id: 3,
                fep_type: 'KINS-KIGAM FEP List',
                fep_index_num: '1.1.1',
                fep_title: '품질보증 및 관리',
                updated_by: '홍길동',
                updated_at: '2025-06-30 10:00:01',
                text: '설명 내용 수정',
            },
            {
                id: 2,
                fep_id: 3,
                fep_type: 'KINS-KIGAM FEP List',
                fep_index_num: '1.1.1',
                fep_title: '품질보증 및 관리',
                updated_by: '홍길동',
                updated_at: '2025-06-30 09:00:15',
                text: '오타 검수',
            },
            {
                id: 3,
                fep_id: 3,
                fep_type: 'KINS-KIGAM FEP List',
                fep_index_num: '1.1.1',
                fep_title: '품질보증 및 관리',
                updated_by: '홍길동',
                updated_at: '2025-06-29 23:11:03',
                text: '참고 국외 FEP 내용 추가',
            },
            {
                id: 4,
                fep_id: 3,
                fep_type: 'KINS-KIGAM FEP List',
                fep_index_num: '1.1.1',
                fep_title: '품질보증 및 관리',
                updated_by: '홍길동',
                updated_at: '2025-06-29 12:35:56',
                text: '범주 변경',
            },
            {
                id: 5,
                fep_id: 3,
                fep_type: 'KINS-KIGAM FEP List',
                fep_index_num: '1.1.1',
                fep_title: '품질보증 및 관리',
                updated_by: '홍길동',
                updated_at: '2025-06-28 14:50:24',
                text: '관련 규제 FEP 내용 일부 삭제',
            },
        ]
        setLogs(data);
    },[selectedId])
    return (
        <>
            <PageTitle title="FEP 문서" />
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ms-2">
                                <h4 class="mb-3">수정 기록:&nbsp;&nbsp;{content.index_num}. {content.title}</h4>
                            </div>
                            <div class="mt-5">
                                {logs.map((log) => (
                                    <FEPLogCard log={log} />
                                ))}
                            </div>
                        </div>    
                    </div>
                </div>
            </section>
        </>
    )
}
export default FEPLog;