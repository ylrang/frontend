import React from "react"
import { Link } from "react-router-dom";
import "./Brnc.css";
import PageTitle from "../components/PageTitle"
import { BrncCan } from "./laws_summary/BrncCan"
import { BrncFin } from "./laws_summary/BrncFin"
import { BrncFra } from "./laws_summary/BrncFra"
import { BrncGer } from "./laws_summary/BrncGer"
import { BrncJpn } from "./laws_summary/BrncJpn"
import { BrncKor } from "./laws_summary/BrncKor"
import { BrncSui } from "./laws_summary/BrncSui"
import { BrncSwe } from "./laws_summary/BrncSwe"
import { BrncUsa } from "./laws_summary/BrncUsa"

const Brnc = () => {
    return (
        <>
        <PageTitle title="규제기준 데이터베이스" />
        <section class="section">
            <div class="container-xl">
                <div class="row">
                    <div class="text-end">
                        <Link to={"/regdocs-list"} class="btn btn-primary fs-14 px-3 py-2 me-1">Database 접속</Link>
                        <Link to={"/kinsdb/upload"} class="btn btn-soft-primary fs-14 px-3 py-2">Data 업로드</Link>
                    </div>
                </div>
                <div class="reg-list-box border border-primary mt-4">
                    <div class="row align-items-center">
                        <div class="col-lg-2">
                            <div class="text-center">
                                <h6 class="mb-0">국가</h6>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <ul class="faq-menu nav nav-pills nav-justified custom justify-content-center" role="tablist">
                                <li class="nav-item waves-effect waves-light" role="presentation">
                                    <a class="nav-link active" data-bs-toggle="tab" href="#ALL" role="tab"><span>전체</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#KOR" role="tab"><span>국내</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#USA" role="tab"><span>미국</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#SWE" role="tab"><span>스웨덴</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#FIN" role="tab"><span>핀란드</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#FRA" role="tab"><span>프랑스</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#GER" role="tab"><span>독일</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#CAN" role="tab"><span>캐나다</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#JPN" role="tab"><span>일본</span></a>
                                </li>
                                <li class="nav-item waves-effect waves-light">
                                    <a class="nav-link" data-bs-toggle="tab" href="#SUI" role="tab"><span>스위스</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="tab-content p-0 text-muted">
                        <div class="tab-pane fade show active" id="ALL" role="tabpanel">
                            <table class="table table-bordered mb-0" id="laws-table" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th class="bg-light" style={{ width: "10%" }}>국가</th>
                                        <th class="bg-light" style={{ width: "30%" }}>법률</th>
                                        <th class="bg-light" style={{ width: "30%" }}>규정</th>
                                        <th class="bg-light" style={{ width: "30%" }}>규제지침</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>국내</th>
                                        <td>
                                            <ul>
                                                <li><b>원안법 제63조</b><br />방사성페기물관리시설등의 건설, 운영허가</li>
                                                <li><b>원안법 시행령 제96조</b><br />방사성폐기물관리시설등의 건설, 운영허가 신청</li>
                                                <li><b>원안법 시행규칙 제87조</b><br />방사성폐기물관리시설등의 건설, 운영허가의 신청</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li><b>원안위 고시 제2021-21호</b><br />고준위방폐물 심층처분시설에 관한 일반기준</li>
                                                <li><b>원안위 고시 제2021-22호</b><br />사용후핵연료 인도규정</li>
                                            </ul>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>미국</th>
                                        <td>
                                        <ul>
                                            <li><b>Atomic Energy Act of 1954</b><br />원자력법</li>
                                            <li><b>Energy Reorganization Act of 1974</b><br />에너지 재편법</li>
                                            <li><b>Nuclear Waste Policy Act of 1982</b><br />방사성폐기물 정책법</li>
                                        </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li><a class="data" href="{% url 'regulation-document' %}?document=1"><b>10CFR Part 60</b></a><br />지층처분장에 고준위방폐물 처분</li>
                                                
                                                <li><a class="data" href="{% url 'regulation-document' %}?document=3"><b>10CFR Part 63</b></a><br />네바다주 유카마운틴 지층처분장에서의 고준위방폐물 처분</li>
                                                
                                                <li><a class="data" href="{% url 'regulation-document' %}?document=9"><b>40CFR Part 191</b></a><br />사용후핵연료, 고준위 및 TRU 방폐물의 관리와 처분을 위한 환경방사선방호기준</li>
                                                
                                                <li><a class="data" href="{% url 'regulation-document' %}?document=10"><b>40CFR Part 197</b></a><br />네바다주 유카마운틴을 위한 공중의 보건 및 환경방사선방호의 기준</li>
                                                
                                            </ul>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>스웨덴</th>
                                        <td>
                                        <ul>
                                            <li><b>The Act on Nuclear Activities (1984:3)</b><br />원자력활동법</li>
                                            
                                            <li><a class="data" href="{% url 'regulation-document' %}?document=15"><b>The Radiation Protection Act (2018:396)</b></a><br />방사선방호법</li>
                                            
                                            <li><a class="data" href="{% url 'regulation-document' %}?document=14"><b>Radiation Protection Ordinance (2018:506)</b></a><br />방사선방호조례</li>
                                            
                                            <li><a class="data" href="#"><b>The Environmental Code (1998:808)</b></a><br />환경법</li>
                                            
                                        </ul>
                                        </td>
                                        <td>
                                        <ul>
                                            <li><b>Regulations concerning safety in nuclear facilities (SSMFS 2008:1)</b><br />원자력시설 안전 규정</li>
                                            
                                            <li><a class="data" href="{% url 'regulation-document' %}?document=8"></a><b>Regulations on the protection of human health and the environment in connection with the final management of spent nuclear fuel and nuclear waste (SSMFS 2008:37)</b><br />인간 및 환경보호 관련 사용후핵연료 및 원자력폐기물의 최종 관리에 관한 규정</li>
                                            
                                            <li><b>Regulations on safety in connection with the disposal of nuclear material and nuclear waste (SSMFS 2008:21)</b><br />핵물질 및 원자력폐기물 처분에 관한 안전 규정</li>
                                            
                                        </ul>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>핀란드</th>
                                        <td>
                                        <ul>
                                        <li><a class="data" href="#"><b>Nuclear Engergy Act</b></a><br />원자력 에너지 법</li>
                                        
                                        <li><a class="data" href="#"><b>Nuclear Engergy Decree</b></a><br />원자력 에너지 법령</li>
                                        
                                        <li><a class="data" href="#"><b>Radiation Decree</b></a><br />방사선 법</li>
                                        
                                        </ul>
                                        </td>
                                        <td>
                                        <ul>
                                        <li><a class="data" href="#"><b>Radiation and Nuclear Safety Authority Regulation on the Safety of Disposal of Nuclear Waste (STUK Y/4/2018)</b></a><br />원자력폐기물 처분 안전에 관한 방사선 및 원자력안전 당국 규정</li>
                                        </ul>
                                        </td>
                                        <td>
                                        <ul>
                                            <li><a class="data" href="#"><b>Safety in the use of nuclear energy (Guide YVL A.1)</b></a><br />원자력 이용 안전관리</li>
                                            
                                            <li><b>Site for nuclear facility (GUIDE YVL A.2)</b><br />원자력시설 부지에 관한 규제지침</li>
                                            
                                            <li><a class="data" href="#"><b>Release Barriers of Spent Nuclear Fuel Disposal Faciltiy (GUIDE YVL D.7)</b></a><br /></li>
                                            
                                            <li><a class="data" href="#"><b>DISPOSAL OF NUCLEAR WASTE(STUK-YVL D.5)</b></a><br />원자력폐기물 처분에 관한 규제지침</li>
                                        </ul> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>프랑스</th>
                                        <td>
                                        <ul>
                                        <li><b>TSN Act</b><br />원자력분야 투명성 및 보안에 관한 법</li>
                                        
                                        <li><b>Waste Act</b><br />방사성물질 및 폐기물의 지속가능한 관리에 관한 법</li>
                                        
                                        <li><b>The Environmental Code</b><br />환경법</li>
                                        </ul>
                                        </td>
                                        <td></td>
                                        <td>
                                        <ul>
                                            <li><b>RFS (Basic Safety Rules)</b><br />기본안전규칙 등</li>
                                            <li><a class="data" href="#"><b>RFS I.2 Safety objectives and design bases for surface facilities intended for long-term disposal of solid</b></a><br />RFS I.2 고체의 장기 처분을 위한 지상 시설의 안전 목표 및 설계 기반</li>
                                            
                                            <li><b>ASN Guides 등</b></li>
                                            <li><a class="data" href="#"><b>Safety Guide on the final disposal of radioactive waste in deep geological formations (February 2008)</b></a><br /> 깊은 지층에서 방사성폐기물 최종처분에 관한 안전지침</li>
                                        </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>독일</th>
                                        <td>
                                        <ul>
                                            <li><b>Basic Law (GG)</b><br />기본법</li>
                                            
                                            <li><b>Atomic Energy Act (Atg)</b><br />원자력 에너지 법</li>
                                            
                                            <li><a class="data" href="#"><b>Repository Site Selection Act (StandAG)</b></a><br />처분시설 부지 선정에 관한 법</li>
                                            
                                            <li><a class="data" href="#"><b>Radiation Protection Ordinance (StrlSchV)</b></a><br />방사선방호 조례</li>
                                        </ul>
                                        </td>
                                        <td>
                                        <ul>
                                            <li><a class="data" href="#"><b>Final Disposal of Heat Generating Radioactive Waste (BMU10)</b></a><br />발열방폐물의 최종처분에 관한 규정</li>
                                            
                                            <li><a class="data" href="{% url 'regulation-document' %}?document=12"><b>Safety Criteria the Final Disposal of Radioactive Waste in a Mine </b></a><br />방폐물의 광산 최종처분시 안전 요건</li>
                                            
                                            <li><a class="data" href="#"><b>Verordnung über Anforderungen und Verfahren zur Entsorgung radioaktiver Abfälle (Atomrechtliche Entsorgungsverordnung – AtEV)</b></a></li>
                                        </ul>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>캐나다</th>
                                        <td>
                                        <ul>
                                            <li><b>Nuclear Safety and Control Act</b><br />원자력안전 및 통제법</li>
                                            <li><a class="data" href="#"><b>Nuclear Fuel Waste Act</b></a><br />핵연료 폐기물 법</li>
                                        </ul>
                                        </td>
                                        <td></td>
                                        <td>
                                        <ul>
                                            <li><a class="data" href="{% url 'regulation-document' %}?document=11"><b>Guidance on Deep Geological Repository Site Characterization (Regulatory Document, REGDOC-1.2.1)</b></a><br />심지층처분시설 부지특성평가에 대한 지침</li>
                                            <li><a class="data" href="#"><b>Management of radioactive waste Volume1 (REGDOC-2-11-1)</b></a><br />폐기물 관리, 제 1권 : 방사성폐기물 관리</li>
                                        </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>일본</th>
                                        <td>
                                        <ul>
                                            <li><b>特定放射性廃棄物の最終処分に関する法律</b><br />특정방사성폐기물의 최종 처분에 관한 법률</li>
                                            
                                            <li><b>特定放射性廃棄物の最終処分に関する法律</b><br />특정방사성폐기물의 최종 처분에 관한 법 시행령</li>
                                            
                                            <li><b>特定放射性廃棄物の最終処分に関する法律</b><br />특정방사성폐기물의 최종 처분에 관한 법 시행규칙</li>
                                        </ul>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>스위스</th>
                                        <td>
                                        <ul>
                                            <li><b>Federal Nuclear Safety Ordinance (NSO)</b></li>
                                            <li><b>Feral Ordinance on the Disposal of Radioactive Waste (Radioactive Waste Ordinance)</b></li>
                                        </ul>
                                        </td>
                                        <td></td>
                                        <td>
                                        <ul>
                                            <li><b>Specific design principles for deep geological repositories and requirements for the safety case(ENSI-G03)</b><br />심층처분시설에 대한 특정 설계 원칙 및 safety case 요구사항</li>
                                        </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane fade" id="KOR" role="tabpanel">
                            <BrncKor />
                        </div>
                        <div class="tab-pane fade" id="USA" role="tabpanel">
                            <BrncUsa />
                        </div>
                        <div class="tab-pane fade" id="SWE" role="tabpanel">
                            <BrncSwe />
                        </div>
                        <div class="tab-pane fade" id="FIN" role="tabpanel">
                            <BrncFin />
                        </div>
                        <div class="tab-pane fade" id="FRA" role="tabpanel">
                            <BrncFra />
                        </div>
                        <div class="tab-pane fade" id="GER" role="tabpanel">
                            <BrncGer />
                        </div>
                        <div class="tab-pane fade" id="CAN" role="tabpanel">
                            <BrncCan />
                        </div>
                        <div class="tab-pane fade" id="JPN" role="tabpanel">
                            <BrncJpn />
                        </div>
                        <div class="tab-pane fade" id="SUI" role="tabpanel">
                            <BrncSui />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Brnc;