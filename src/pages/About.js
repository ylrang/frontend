import React from "react";
import PageTitle from "../components/PageTitle";

const About = () => {
    return (
        <>
            <PageTitle title="R&D 지원프로그램 안내" />
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-title text-center">
                            <h4 className="pe-4 mb-4">개요</h4>
                        </div>
                    </div>
                    <div className="row">
                        <p className="text-muted ps-5 pe-0">
                            R&D 지원 프로그램(가칭)은 다부처 연구과제에서 생성된 연구결과물(연차보고서 등)을 규제 측면에서 검토하는 프로그램입니다.<br/>
                            이 프로그램을 통해 다부처 연구과제에서 나오는 연구성과물을 규제 관점에서 검토하여, 국내 원자력 안전과 관련된 이해와 투명성을 확보하고자 합니다.<br/><br/><br/>
                            R&D 지원 프로그램의 주요 내용은 다음과 같습니다:<br/><br/>
                            <span className="fw-bold"> 1. 전략과제 1, 2 검토 </span>: 과기부 및 산업부 소관 다부처 연구과제에서 나온 연구결과물을 규제 관점에서 검토합니다.<br/>
                            <span className="fw-bold"> 2. 홈페이지를 통한 정보 공유 </span>: 규제 측면에서의 연구 검토 사례를 홈페이지를 통해 공유하여, 연구성과물에 대한 규제 프로세스를 이해하고 접근성을 높입니다.<br/>
                            <span className="fw-bold"> 3. 심층처분 데이터베이스 연결 </span>: 국내 심층처분사업과 연결하여, 규제 관련 정보를 확장하고 국내 원자력 안전에 대한 규제 이해도를 높이고자 합니다.<br/><br/>
                            해당 제도를 통해 규제 측면에 대한 이해와 협력을 증진시키며 지식과 투명성을 제고하여 국내 원자력 안전을 강화하는 데 일조할 계획입니다.<br/>
                            더 많은 정보와 업데이트는 홈페이지를 통해 확인하실 수 있습니다.<br/>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;