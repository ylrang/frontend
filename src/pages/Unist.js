import { Link } from "react-router-dom";
import "./Unist.css";
import PageTitle from "../components/PageTitle";

const Unist = () => {
    return (
    <>
        <PageTitle title="규제사례 데이터베이스" />
        <section class="section">
            <div class="px-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card-body p-4">
                            <div class="table-responsive">
                                <table class="table table-bordered mb-0" id="report-table">
                                    <thead>
                                        <tr>
                                            <th colspan="2" class="tb-col bg-light"></th>
                                            <th scope="col" colspan="2" class="text-center bg-light">
                                                개념화 단계
                                            </th>
                                            <th scope="col" colspan="2" class="text-center bg-light">
                                                부지조사/선정 단계
                                            </th>
                                            <th scope="col" colspan="2" class="text-center bg-light">
                                                기준 설계/인허가 신청단계
                                            </th>
                                            <th scope="col" colspan="2" class="text-center bg-light">
                                                건설 단계
                                            </th>
                                            <th scope="col" colspan="2" class="text-center bg-light">
                                                운영 단계
                                            </th>
                                            <th scope="col" colspan="2" class="text-center bg-light">
                                                폐쇄 단계
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th colspan="2" class="bg-light">Safety Context</th>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th colspan="2" class="bg-light">안전전략</th>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th rowspan="3" class="bg-light">평가 베이시스</th>
                                            <th class="bg-light">부지 특성</th>

                                            <td rowspan="3">
                                                <p>EPG</p>
                                            </td>

                                            <td rowspan="3">
                                                <ol start="1">
                                                <li><Link to={`/report/1`} class="data">「Dossier 2005 Argile」규제 검토 사례 (프랑스)</Link></li>
                                                <li><Link to={`/report/2`} class="data">프랑스 부지조사단계 검토 사례 (URL 부지선정)</Link></li>
                                                <li><Link to={`/report/3`} class="data">스위스 타당성 조사 규제 검토 사례</Link></li>
                                                </ol>
                                            </td>

                                            <td rowspan="3">
                                                <p>EPG</p>
                                                <p> SITEX-II Project</p>
                                            </td>

                                            <td>
                                                <ol start="4">
                                                <li><Link to={`/report/4`} class="data">ZIRA 선정과정 규제 검토 사례 (프랑스)</Link></li>
                                                <li><Link to={`/report/5`} class="data">INSTIE 검토 그룹(지질관련) 이슈 리스트 (스웨덴)</Link></li>
                                                <li><Link to={`/report/6`} class="data">스웨덴 부지 조사 단계(현장조사 3단계)</Link></li>
                                                <li><Link to={`/report/7`} class="data">SR-Can 외부 전문가 검토 사례 (스웨덴)</Link></li>
                                                <li><Link to={`/report/8`} class="data">스위스의 부지조사 단계 규제 검토 사례</Link></li>
                                                </ol>
                                            </td>
                                            <td rowspan="3">
                                                <p>EPG</p>
                                                <p>SITEX-Ⅱ Project</p>
                                                <ol start="11">
                                                <li><Link to={""} class="data">SR-Site initial review (스웨덴, 2011~2013, SSM)</Link></li>
                                                <li><Link to={""} class="data">SR-Site Main review (스웨덴, 2013~2015, SSM)</Link></li>
                                                <li><Link to={""} class="data">STUK's review on the construction license stage
                                                    post closure safety case of the spent nuclear fuel disposal
                                                    in Olkiluoto (핀란드, 2015, STUK)</Link></li>
                                                </ol>
                                            </td>
                                            <td>
                                                <ol start="14">
                                                <li><Link to={`/report/14`} class="data">SSM 건설 인허가 규제 검토 (초기 검토 단계, 스웨덴)</Link></li>
                                                <li><Link to={`/report/15`} class="data">SSM 건설 인허가 규제 검토 (주 검토 단계, 스웨덴)</Link></li>
                                                </ol>
                                            </td>
                                            <td rowspan="3">
                                                <p>EPG</p>
                                                <p>SITEX-Ⅱ Project</p>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th class="bg-light">처분장 설계</th>
                                            <td>
                                                <ol start="9">
                                                <li><Link to={`/report/19`} class="data">SR-Can 외부 전문가 검토 사례 (스웨덴)</Link></li>
                                                </ol>
                                            </td>
                                            <td>
                                            <ol start="16">
                                                <li><Link to={`/report/16`} class="data">핀란드 ONKALO 건설 관련 규제 검토 사례</Link></li>
                                                <li><Link to={`/report/17`} class="data">스웨덴 토지환경법원의 인허가 보고서 규제 검토 사례</Link></li>
                                                <li><Link to={""} class="data">SSM 건설 인허가 규제 검토 (초기 검토 단계, 스웨덴)</Link></li>
                                                <li><Link to={""} class="data">SSM 건설 인허가 규제 검토 (주 검토 단계, 스웨덴)</Link></li>
                                                <li><Link to={""} class="data">STUK 건설 인허가 검토 사례 (핀란드, 공학적방벽)</Link></li>
                                            </ol>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th class="bg-light">안전성 평가 방법론</th>
                                            <td>
                                                <ol start="10">
                                                <li><Link to={""} class="data">SR-Can 외부 전문가 검토 사례 (스웨덴)</Link></li>
                                                </ol>
                                            </td>
                                            <td>
                                                <ol start="21">
                                                <li><Link to={""} class="data">SSM 건설 인허가 규제 검토 (초기 검토 단계, 스웨덴)</Link></li>
                                                <li><Link to={""} class="data">SSM 건설 인허가 규제 검토 (주 검토 단계, 스웨덴)</Link></li>
                                                <li><Link to={""} class="data">STUK 건설 인허가 검토 사례 (핀란드)</Link></li>
                                                </ol>

                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th rowspan="2" class="bg-light">안전성 평가</th>
                                            <th class="bg-light">운영 중 안전성 평가</th>
                                            <td rowspan="2">EPG</td>
                                            <td></td>
                                            <td rowspan="2">
                                                <p>EPG</p>
                                                <p> SITEX-II Project</p>
                                            </td>
                                            <td></td>
                                            <td rowspan="2">
                                                <p>EPG</p>
                                                <p> SITEX-II Project</p>
                                            </td>
                                            <td></td>
                                            <td rowspan="2">
                                                <p>EPG</p>
                                                <p> SITEX-II Project</p>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th class="bg-light">폐쇄 후 안전성 평가</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th colspan="2" class="bg-light">관리 시스템/이해관계자 및 규제기관 참여</th>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>
                                                <p>EPG</p>
                                                <p> SITEX-II Project</p>
                                            </td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td>
                                                <ol start="24">
                                                <li><Link to={""} class="data">SSM 건설 인허가 규제 검토 (초기 검토 단계, 스웨덴)</Link></li>
                                                <li><Link to={""} class="data">SSM 건설 인허가 규제 검토 (주 검토 단계, 스웨덴)</Link></li>
                                                </ol>
                                            </td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th colspan="2" class="bg-light">증거들의 종합</th>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>
                                                <p>EPG</p>
                                                <p> SITEX-II Project</p>
                                            </td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th colspan="2" class="bg-light">불확실성 관리</th>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td>
                                                <ol start="26">
                                                <li><Link to={""} class="data">SSM 건설 인허가 규제 검토 (주 검토 단계, 스웨덴)</Link></li>
                                                </ol>
                                            </td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th colspan="2" class="bg-light">한계점, 통제 및 조건</th>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>
                                                <p>EPG</p>
                                                <p> SITEX-II Project</p>
                                            </td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>
                                                <p>EPG</p>
                                                <p> SITEX-II Project</p>
                                            </td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                            <td>EPG</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default Unist;