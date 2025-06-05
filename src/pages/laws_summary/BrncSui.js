import axios from "axios";

export const BrncSui = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">스위스 원자력 관련 법령 체계도</h5>
        <div class="row mb-5">
          <div class="col-lg-6">
            <img src="assets/images/brnc/sui_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>스위스의 사용후핵연료 관리와 관련된 방사선 위험으로부터 개인, 사회 및 환경을 보호하는 것은 방사선방호 및 원자력에 관한 법의 적용을 받는다.
                원자력 안전 및 방사선 보호에 관한 법적 요구 사항 준수는 스위스 연방 원자력 안전 감독관 (ENSI)에서 확인 및 시행하고 있으며,
                이는 인허가 단계에서 안전 분석 보고서를 검토하고, 특히 검사를 통해 건설 및 운영을 감독하고, 원자력발전소의 정기적인 안전 검토를 통해 수행된다.
                스위스의 심층처분시설 관련 안전규제요건은 심층처분시설에 대한 특정 설계 원칙 및 안전사례에 대한 요구사항
                (Specific design principles for deep geological repositories and requirements for the safety cases, ENSI-G03) 등이 있다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">스위스 심층처분 관련 주요 규제요건</h5>
          <table class="table table-bordered mb-0" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th class="bg-light" style={{ width: "10%" }}>분류</th>
              <th class="bg-light" style={{ width: "40%" }}>명칭</th>
              <th class="bg-light" style={{ width: "50%" }}>주요내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>법</td>
              <td>The Swiss Nuclear Energy Act of 1999</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Federal Act on the Peaceful Use of Nuclear Energy and the Protection against its Hazards (Nuclear Energy Act)</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>시행령</td>
              <td>Federal Nuclear Safety Ordinance (NSO)</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Federal Nuclear Safety Inspectorate Ordinance (ENSI-V)</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>규제지침</td>
              <td>Federal Ordinance on the Disposal of Radioactive Waste (Radioactive Waste Ordinance)</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Guideline on the Assessment of the Long-term Safety of Deep Geological Repositories</td>
              <td>TBD</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">스위스 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>`07년, 심층처분시설 부지선정 절차와 관련된 논의를 위해 공개 협의 개시</li>
          <li>`08년, 자국 및 주변국 의견을 종합하여 부지선정 개념을 수립</li>
          <li>`29년, 부지 선정 (예정)</li>
          <li>`60년, 심층처분시설 운영 (예정)</li>
        </ul>
      </div>
    </div>
  )
}