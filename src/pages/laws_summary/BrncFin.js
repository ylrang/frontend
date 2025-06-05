import axios from "axios";

export const BrncFin = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">핀란드 원자력 관련 법령 체계도</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/brnc/fin_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>핀란드 심층처분 관련 주요 규제요건은 원자력 에너지 법 및 법령과 STUK 규정에 제시하고 있다.
                STUK 규정은 크게 5개로 구성되고 지속 개정되고 있으며, 사용후핵연료의 저장 및 처분과 관련된 규제요건은 STUK Y/1/2018과 STUK Y/4/2018에 주로 규정되어 있다.
                심층처분과 관계된 세부적인 규제지침은 다수의 원자력안전 관련 규제지침 (YVL Guide)에 제시되어 있다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">핀란드 심층처분 관련 주요 규제요건</h5>
        <table class="table table-sm table-bordered mb-0" style={{ width: "100%" }}>
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
              <td>원자력 에너지 법</td>
              <td>원자력활동 관련된 최상위 법령</td>
            </tr>
            <tr>
              <td>방사선 법</td>
              <td>방사선 안전 관련 최상위 법령</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>법령</td>
              <td>원자력 에너지 법령</td>
              <td>원자력활동 관련 안전 규제요건</td>
            </tr>
            <tr>
              <td>방사선 법</td>
              <td>방사선 안전 관련 규제요건</td>
            </tr>
            <tr>
              <td class="text-center" style={{ width: "10%" }}>STUK규정</td>
              <td>원자력폐기물 처분 안전에 관한 방사선 및 원자력안전 당국 규정</td>
              <td>원자력폐기물 및 사용후핵연료 처분 안전에 관한 규제 요건</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="4" style={{ width: "10%" }}>규제지침</td>
              <td>원자력시설 부지에 관한 규제 지침</td>
              <td>원자력시설의 부지선정에 관한 규제 지침</td>
            </tr>
            <tr>
              <td>원자력시설 내부 및 외부 위험에 대한 조항</td>
              <td>원자력시설 내부 및 외부 위험에 대한 규제지침</td>
            </tr>
            <tr>
              <td>Release Barriers of Spent Nuclear Fuel Disposal Faciltiy</td>
              <td>
                <li>사용후핵연료 처분시설의 설계, 건설, 운영, 감독에 관한 지침</li>
                <li>공학적방벽에 관한 규제지침</li>
              </td>
            </tr>
            <tr>
              <td colspan="2">원자력활동으로 인해 발생하는 잔류물 관리를 위한 기금에 관한 법</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">핀란드 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>`83년, 처분시설 부지확보 착수</li>
          <li>`00년, 올킬루오토(Olkiluoto) 부지 결정</li>
          <li>`04년~`12년, 지하연구시설(Underground Rock Characterization Facility, URCF) 건설 및 운영</li>
          <li>`12년, 심층처분시설(ONKALO) 건설 인·허가 신청</li>
          <li>`15년, 심층처분시설(ONKALO) 건설 인·허가 승인</li>
          <li>`16년, 심층처분시설(ONKALO) 착공</li>
          <li>`23년, 심층처분시설(ONKALO) 완공 (예정)</li>
        </ul>
        <div class="text-center">
          <img src="assets/images/brnc/fin_site.png" alt="Image" class="laws" />
        </div>
      </div>
    </div>
  )
}
